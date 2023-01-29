import { Container, Graphics } from "pixi.js";
import { APP_WIDTH, APP_HEIGHT, SIDEBAR_WIDTH } from "../lib/app";
import { COLORS } from "../lib/colors";
import { BuildingsLayer } from "./BuildingsLayer";
import { Minimap } from "./Minimap";

export class Sidebar extends Container {
  public background: Graphics = new Graphics();
  public minimap: Minimap = new Minimap(10, 10);
  public buildingsLayer: BuildingsLayer = new BuildingsLayer(10, 212);

  constructor() {
    super();

    this.x = APP_WIDTH - SIDEBAR_WIDTH;
    this.y = 0;

    this.drawBackground();
    this.addChild(this.buildingsLayer);
    this.addChild(this.minimap);
  }

  private drawBackground() {
    this.background.beginFill(COLORS.color1);
    this.background.drawRect(0, 0, SIDEBAR_WIDTH, APP_HEIGHT);
    this.background.endFill();
    this.addChild(this.background);
  }
}
