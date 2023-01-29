import { COLORS } from "./../lib/colors";
import { Container, FederatedPointerEvent, Graphics, Sprite } from "pixi.js";
import { MAP_HEIGHT, MAP_WIDTH, SIDEBAR_WIDTH } from "../lib/app";

export class Minimap extends Container {
  public map: MapView = new MapView(SIDEBAR_WIDTH / 2 - 160, 0);
  public background: Graphics = new Graphics();

  constructor(x: number, y: number) {
    super();

    this.x = x;
    this.y = y;

    this.drawBackground();
    this.addChild(this.map);
  }

  private drawBackground() {
    this.background.beginFill(COLORS.BLACK);
    this.background.drawRect(0, 0, SIDEBAR_WIDTH - 20, 192);
    this.background.endFill();
    this.addChild(this.background);
  }
}

class MapView extends Container {
  private map: Sprite = Sprite.from("assets/bg/one/full.jpg");
  private area: Graphics = new Graphics();

  private drag: boolean = false;

  private areaCenterPoint: { x: number; y: number } = {
    x: 0,
    y: 0,
  };

  constructor(x: number, y: number) {
    super();

    this.drawMap(x, y);
    this.drawArea();
    this.handleEvents();
  }

  private handleEvents() {
    this.map.interactive = true;
    this.map.on("pointerdown", this.onPointerDown, this);
    this.map.on("pointerup", this.onPointerUp, this);
    this.map.on("pointerupoutside", this.onPointerUp, this);
    this.map.on("pointermove", this.onPointerMove, this);
  }

  private onPointerDown() {
    this.drag = true;
  }

  private onPointerUp() {
    this.drag = false;
  }

  private onPointerMove(e: FederatedPointerEvent) {
    if (!this.drag) return;

    const { x, y } = this.getBounds();

    const clickCoords = {
      x: e.data.global.x - x,
      y: e.data.global.y - y,
    };

    this.areaCenterPoint = clickCoords;

    this.updateMap();
  }

  public updateMap() {
    let x = this.areaCenterPoint.x - this.area.width / 2;
    let y = this.areaCenterPoint.y - this.area.height / 2;

    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    if (x > this.map.width - this.area.width) {
      x = this.map.width - this.area.width;
    }
    if (y > this.map.height - this.area.height) {
      y = this.map.height - this.area.height;
    }
    this.area.x = x;
    this.area.y = y;

    // @ts-ignore: Unreachable code error
    this.emit("updateMap", { x: x * 10, y: y * 10 });
  }

  private drawMap(x: number = 0, y: number = 0) {
    const width = 320;
    const height = 192;

    this.map.width = width;
    this.map.height = height;

    this.x = x;
    this.y = y;

    this.addChild(this.map);
  }

  private drawArea() {
    const width = MAP_WIDTH / 10;
    const height = MAP_HEIGHT / 10;

    this.area = new Graphics();
    this.area.zIndex = 100;
    this.area.beginFill(COLORS.WHITE, 0.5);
    this.area.lineStyle(2, COLORS.WHITE, 1, 0);
    this.area.drawRect(0, 0, width, height);
    this.area.endFill();
    this.addChild(this.area);
  }

  public updateArea({ x, y }: { x: number; y: number }) {
    this.area.x = x;
    this.area.y = y;
  }
}
