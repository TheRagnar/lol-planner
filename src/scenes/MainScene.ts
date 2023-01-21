import { Container } from "pixi.js";
import { RightSidebar } from "../layers/RightSidebar";
import { MapScene } from "./MapScene";
import { Menu } from "./Menu";

export class MainScene extends Container {
  private map: MapScene = new MapScene(640 * 5, 640 * 3);
  private menu: Menu = new Menu();
  private sidebar: RightSidebar = new RightSidebar();

  private selectIndex: number = 0;

  constructor() {
    super();
    this.addChild(this.map);
    this.addChild(this.menu);
    this.addChild(this.sidebar);
    this.handleEvents();
  }

  private handleEvents() {
    // @ts-ignore: Unreachable code error
    this.menu.on("selectBuild", (index: number) => {
      this.selectIndex = index;

      console.log(this.selectIndex);
    });
  }
}
