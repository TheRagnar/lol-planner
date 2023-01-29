import { APP_HEIGHT } from "./../lib/app";
import { Container, Graphics, Text, TextStyle } from "pixi.js";
import { APP_WIDTH, SIDEBAR_WIDTH } from "../lib/app";
import { COLORS } from "../lib/colors";

export class EraserLayer extends Container {
  public background: Graphics = new Graphics();
  public border: Graphics = new Graphics();
  public isAct: boolean = false;

  constructor() {
    super();

    this.x = APP_WIDTH - (SIDEBAR_WIDTH + 70);
    this.y = APP_HEIGHT - 40;

    this.drawBackground();
    this.drawBorder();
    this.drawText();
    this.handleEvents();
  }

  private handleEvents() {
    this.background.interactive = true;

    this.background.on("pointertap", () => {
      this.isAct = !this.isAct;
      this.removeChildren();
      this.drawBackground();
      this.drawBorder();
      this.drawText();
    });
  }

  private drawText() {
    const text = new Text(
      "Стёрка",
      new TextStyle({
        fontSize: 14,
        fill: this.isAct ? COLORS.WHITE : COLORS.BLACK,
        align: "center",
        fontWeight: this.isAct ? "bold" : "normal",
      })
    );
    text.x = 6;
    text.y = 6;
    this.addChild(text);
  }

  private drawBackground() {
    this.background.beginFill(this.isAct ? COLORS.color2 : COLORS.WHITE);
    this.background.drawRect(0, 0, 60, 30);
    this.background.endFill();
    this.addChild(this.background);
  }
  private drawBorder() {
    this.border.lineStyle(3, COLORS.color2);
    this.border.drawRect(0, 0, 60, 30);
    this.addChild(this.border);
  }
}
