import { SIDEBAR_WIDTH } from "./../lib/app";
import { bld } from "../data/bld";
import { Container, Graphics, Sprite, Text, TextStyle } from "pixi.js";
import { APP_HEIGHT } from "../lib/app";
import { COLORS } from "../lib/colors";
import { IBld, IBldCat } from "../data/bld/types";

const BUILDINGS_LAYER_WIDTH = SIDEBAR_WIDTH - 20;
const BUILDINGS_LAYER_HEIGHT = APP_HEIGHT - 222;

export class BuildingsLayer extends Container {
  private background: Graphics = new Graphics();

  public catId: string = bld.id;

  public buildId: string | undefined;

  constructor(x: number, y: number) {
    super();

    this.x = x;
    this.y = y;

    this.drawBackground();
    this.drawBreadcrumb();
    this.drawInner();

    this.handleEvents();
  }

  private handleEvents() {
    this.children.forEach((child) => {
      child.on(
        // @ts-ignore: Unreachable code error
        "onSelectCat",
        this.changeCatId,
        this
      );
      child.on(
        // @ts-ignore: Unreachable code error
        "onSelectBuild",
        this.changeBuildId,
        this
      );
    });
  }

  private changeCatId(id: string) {
    this.catId = id;
    this.buildId = undefined;
    this.removeChildren();
    this.drawBackground();
    this.drawBreadcrumb();
    this.drawInner();
    this.handleEvents();
  }

  private changeBuildId(id: string) {
    this.buildId = id;
    this.removeChildren();
    this.drawBackground();
    this.drawBreadcrumb();
    this.drawInner();
    this.handleEvents();
  }

  private drawBackground() {
    this.background.beginFill(COLORS.color3);
    this.background.drawRect(
      0,
      0,
      BUILDINGS_LAYER_WIDTH,
      BUILDINGS_LAYER_HEIGHT
    );
    this.background.endFill();
    this.addChild(this.background);
  }

  private drawBreadcrumb() {
    const breadcrumbs = bld.getNestingById(this.catId);

    const breadcrumb = new Text(
      breadcrumbs.map((crumb) => crumb.name).join(" > "),
      new TextStyle({
        fill: COLORS.color1,
        fontSize: 16,
        fontWeight: "bold",
      })
    );

    breadcrumb.interactive = true;
    breadcrumb.on("pointertap", () => {
      if (breadcrumbs.length > 1) {
        this.changeCatId(breadcrumbs[breadcrumbs.length - 2].id);
      }
    });

    breadcrumb.x = 10;
    breadcrumb.y = 10;

    this.addChild(breadcrumb);
  }

  private drawInner() {
    const current = bld.findCategoryById(this.catId);
    if (!current) return;

    let height = 40;
    current.subCats.forEach((cat) => {
      const category = new Category(cat);
      category.x = 10;
      category.y = height;
      this.addChild(category);
      height += 75;
    });

    current.items.forEach((bld) => {
      const building = new Building(bld, this.buildId);
      building.x = 10;
      building.y = height;
      this.addChild(building);
      height += 53;
    });
  }
}

class Building extends Container {
  public id: string;
  public isActive: boolean = false;

  private background: Graphics = new Graphics();
  constructor(bld: IBld, activePic?: string) {
    super();
    this.id = bld.id;
    this.isActive = activePic === bld.id;
    this.drawBackground();
    this.drawPic(bld.pic);
    this.drawName(bld.name);
    this.handleEvents();
  }

  private handleEvents() {
    this.interactive = true;
    this.hitArea = this.background.getBounds();
    this.on("pointertap", () => {
      // @ts-ignore: Unreachable code error
      this.emit("onSelectBuild", this.id);
    });
  }

  private drawName(name: string) {
    const text = new Text(
      name,
      new TextStyle({
        fill: COLORS.color1,
        fontSize: 16,
        fontWeight: "bold",
      })
    );
    text.x = 60;
    text.y = 17;
    this.addChild(text);
  }

  private drawPic(pic?: string) {
    if (!pic) return;

    const panel = new Container();
    const bg = new Graphics();
    panel.x = 5;
    panel.y = 5;
    bg.beginFill(COLORS.color4);
    bg.drawRect(0, 0, 40, 40);
    bg.endFill();
    panel.addChild(bg);
    const sprite = Sprite.from(pic);

    sprite.x = 40 / 2 - sprite.width / 2;
    sprite.y = 40 / 2 - sprite.height / 2;

    sprite.texture.baseTexture.on("loaded", function () {
      sprite.x = 40 / 2 - sprite.width / 2;
      sprite.y = 40 / 2 - sprite.height / 2;
    });

    panel.addChild(sprite);

    this.addChild(panel);
  }

  private drawBackground() {
    this.background.beginFill(COLORS.WHITE, this.isActive ? 0.3 : 0.1);
    this.background.drawRect(0, 0, BUILDINGS_LAYER_WIDTH - 20, 50);
    this.background.endFill();
    this.addChild(this.background);
  }
}

class Category extends Container {
  private id: string;
  private background: Graphics = new Graphics();
  constructor(cat: IBldCat) {
    super();

    this.id = cat.id;
    this.drawBackground();
    this.drawPic(cat.bigImage);
    this.drawName(cat.name);

    this.handleEvents();
  }

  private handleEvents() {
    this.interactive = true;
    this.hitArea = this.background.getBounds();
    this.on("pointertap", () => {
      // @ts-ignore: Unreachable code error
      this.emit("onSelectCat", this.id);
    });
  }

  private drawName(name: string) {
    const text = new Text(
      name,
      new TextStyle({
        fill: COLORS.color1,
        fontSize: 16,
        fontWeight: "bold",
      })
    );
    text.x = 70;
    text.y = 25;
    this.addChild(text);
  }

  private drawPic(pic?: string) {
    if (!pic) {
      const noPic = new Graphics();
      noPic.beginFill(COLORS.color1);
      noPic.drawRect(5, 5, 60, 60);
      noPic.endFill();
      this.addChild(noPic);

      const noPicText = new Text(
        "NO IMAGE",
        new TextStyle({
          fill: COLORS.WHITE,
          fontSize: 10,
        })
      );
      noPicText.x = 10;
      noPicText.y = 27;
      noPic.addChild(noPicText);
      return;
    }

    const picture = Sprite.from(pic);
    picture.x = 5;
    picture.y = 5;
    picture.width = 60;
    picture.height = 60;
    this.addChild(picture);
  }

  private drawBackground() {
    this.background.beginFill(COLORS.color5);
    this.background.drawRect(0, 0, BUILDINGS_LAYER_WIDTH - 20, 70);
    this.background.endFill();
    this.addChild(this.background);
  }
}
