import {
  Container,
  FederatedPointerEvent,
  Graphics,
  Rectangle,
  Sprite,
  TextStyle,
  Text,
} from "pixi.js";
import { APP_HEIGHT, APP_WIDTH } from "../lib/app";
import { GRID_COLOR, GRID_SIZE } from "../lib/grid";
import { streets } from "../../static/streets.json";

export class MapScene extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private grid: Graphics;
  private enabledGrid: boolean = false;

  private bg: Sprite = Sprite.from("assets/bg/full.jpg");
  private bgEnabled: boolean = true;

  private dragging: boolean = false;
  private offset: { x: number; y: number } = { x: 0, y: 0 };

  private selection: Graphics;
  private selectionActive: boolean = false;
  private selectionStart: { x: number; y: number } = { x: 0, y: 0 };

  private cols: Array<Col> = [];

  constructor(screenWidth: number, screenHeight: number) {
    super();
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.grid = new Graphics();
    this.selection = new Graphics();

    this.drawGrid();
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

  private drawGrid() {
    if (!this.enabledGrid) return;
    this.grid.lineStyle(1, GRID_COLOR, 0.5);
    for (let x = 0; x < this.screenWidth; x += GRID_SIZE) {
      this.grid.moveTo(x, 0);
      this.grid.lineTo(x, this.screenHeight);
    }
    for (let y = 0; y < this.screenHeight; y += GRID_SIZE) {
      this.grid.moveTo(0, y);
      this.grid.lineTo(this.screenWidth, y);
    }
    this.grid.endFill();
    this.addChild(this.grid);
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
    this.selection.interactive = true;
    this.selection.zIndex = 100;

    this.on("pointerdown", this.onDragStart);
    this.on("pointerup", this.onDragEnd);
    this.on("pointerupoutside", this.onDragEnd);
    this.on("pointermove", this.onDragMove);

    this.cols.forEach((col) => {
      col.on("pointertap", (event: FederatedPointerEvent) => {
        if (event.button !== 0) return;
        // @ts-ignore: Unreachable code error
        const index: number = this.parent?.selectIndex;

        col.setSprite("assets/buildings/streets/" + streets[index].src);
      });
    });
  }

  private onDragStart(event: FederatedPointerEvent) {
    if (event.button === 1) {
      this.dragging = true;
    }

    if (event.button === 0) {
      this.selection.clear();
      this.selectionActive = true;
      this.selectionStart.x = event.global.x;
      this.selectionStart.y = event.global.y;
      this.selection.x = event.global.x;
      this.selection.y = event.global.y;
      this.addChild(this.selection);
    }
  }

  private onDragEnd(event: FederatedPointerEvent) {
    if (this.dragging) this.dragging = false;

    if (event.button === 0) {
      this.selection.clear();
      this.selectionActive = false;
      this.selectionStart.x = 0;
      this.selectionStart.y = 0;
    }
  }

  private onDragMove(event: FederatedPointerEvent) {
    if (this.dragging) {
      const newPosX = this.x + event.movementX;
      const newPosY = this.y + event.movementY;

      if (newPosX < 0 && newPosX > -this.screenWidth + APP_WIDTH) {
        this.x = newPosX;
        this.offset.x = Math.abs(newPosX);
      }
      if (newPosY < 0 && newPosY > -this.screenHeight + APP_HEIGHT) {
        this.y = newPosY;
        this.offset.y = Math.abs(newPosY);
      }
    }
    if (this.selectionActive) {
      this.selection.clear();
      this.selection.lineStyle(1, 0xffffff, 1);
      this.selection.beginFill(0x000000, 0.1);

      this.selection.drawRect(
        0,
        0,
        event.global.x - this.selectionStart.x,
        event.global.y - this.selectionStart.y
      );
      this.selection.endFill();
    }
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
}
