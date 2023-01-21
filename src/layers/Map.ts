import {
  Container,
  FederatedPointerEvent,
  Graphics,
  Rectangle,
  Sprite,
  Text,
  TextStyle,
} from "pixi.js";
import { streets } from "../../static/streets.json";
import { MAP_HEIGHT, MAP_WIDTH } from "../lib/app";
import { GRID_SIZE } from "../lib/grid";

export class MapLayer extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private bg: Sprite = Sprite.from("assets/bg/full.jpg");
  private bgEnabled: boolean = true;

  private dragging: boolean = false;
  private offset: { x: number; y: number } = { x: 0, y: 0 };

  private cols: Array<Col> = [];

  constructor(screenWidth: number, screenHeight: number) {
    super();
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.drawBg();
    this.drawCols();
    this.handleEvents();
  }

  private drawCols() {
    for (let i = 0; i < 80; i++) {
      for (let j = 0; j < 48; j++) {
        const col = new Col(i * 40, j * 40);
        this.cols.push(col);
        this.addChild(col);
      }
    }
  }

  private drawBg() {
    if (!this.bgEnabled) return;
    this.bg.width = this.screenWidth;
    this.bg.height = this.screenHeight;
    this.bg.alpha = 0.8;
    this.addChild(this.bg);
  }

  private handleEvents() {
    this.hitArea = new Rectangle(0, 0, this.screenWidth, this.screenHeight);
    this.interactive = true;

    this.on("pointerdown", this.onDragStart);
    this.on("pointerup", this.onDragEnd);
    this.on("pointerupoutside", this.onDragEnd);
    this.on("pointermove", this.onDragMove);

    this.cols.forEach((col) => {
      col.on("pointertap", (event: FederatedPointerEvent) => {
        if (event.button !== 0) return;
        // @ts-ignore: Unreachable code error
        const id: number = this.parent?.selectBuildId;
        if (id === 1111111111) {
          col.removeSprite();
          return;
        }
        const src = streets.find((item) => item.id === id)?.src;
        if (src) {
          col.setSprite("assets/buildings/streets/" + src);
        }
      });
    });
  }

  private onDragStart(event: FederatedPointerEvent) {
    if (event.button === 1) {
      this.dragging = true;
    }
  }

  private onDragEnd() {
    this.dragging = false;
  }

  private onDragMove(event: FederatedPointerEvent) {
    if (this.dragging) {
      const newPosX = this.x + event.movementX;
      const newPosY = this.y + event.movementY;

      if (newPosX < 0 && newPosX > -this.screenWidth + MAP_WIDTH) {
        this.x = newPosX;
        this.offset.x = Math.abs(newPosX);
      }
      if (newPosY < 0 && newPosY > -this.screenHeight + MAP_HEIGHT) {
        this.y = newPosY;
        this.offset.y = Math.abs(newPosY);
      }

      // @ts-ignore: Unreachable code error
      this.emit("updateArea", { x: this.offset.x / 10, y: this.offset.y / 10 });
    }
  }

  public changeOffset(x: number, y: number) {
    this.offset.x = x;
    this.offset.y = y;
    this.x = -x;
    this.y = -y;
  }
}

class Col extends Container {
  private border: Graphics;
  private coords: Text;

  private sprite?: Sprite;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;

    this.border = new Graphics();
    this.border.lineStyle(1, 0xffffff, 0.2);
    this.border.drawRect(0, 0, GRID_SIZE, GRID_SIZE);
    this.addChild(this.border);
    this.coords = new Text(
      `${x / 40}:${y / 40}`,
      new TextStyle({ fill: 0x000000, fontSize: 12 })
    );

    this.handleEvents();
  }

  private handleEvents() {
    this.interactive = true;
    this.hitArea = new Rectangle(0, 0, GRID_SIZE, GRID_SIZE);
    this.on("pointerover", this.onHover);
    this.on("pointerout", this.onHoverOut);
  }

  private onHover() {
    this.border.clear();
    this.border.lineStyle(1, 0xffffff, 1);
    this.border.drawRect(0, 0, GRID_SIZE, GRID_SIZE);
    this.addChild(this.coords);
  }

  private onHoverOut() {
    this.border.clear();
    this.border.lineStyle(1, 0xffffff, 0.2);
    this.border.drawRect(0, 0, GRID_SIZE, GRID_SIZE);
    this.removeChild(this.coords);
  }

  public setSprite(src: string) {
    this.removeChildren();

    this.sprite = Sprite.from(src);
    this.sprite.anchor.set(0.25);
    this.addChild(this.border);
    this.addChild(this.coords);
    this.addChild(this.sprite);
  }

  public removeSprite() {
    this.removeChildren();
    this.addChild(this.border);
    this.addChild(this.coords);
  }
}
