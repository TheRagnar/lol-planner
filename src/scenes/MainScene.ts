import { Container } from "pixi.js";
import { RightSidebar } from "../layers/RightSidebar";
import { MapLayer } from "../layers/Map";
// import { Menu } from "./Menu";

export class MainScene extends Container {
  private map: MapLayer = new MapLayer(640 * 5, 640 * 3);
  // private menu: Menu = new Menu();
  private sidebar: RightSidebar = new RightSidebar();

  private selectBuildId?: number;

  constructor() {
    super();

    this.addChild(this.map);
    // this.addChild(this.menu);
    this.addChild(this.sidebar);

    this.handleEvents();
  }

  private handleEvents() {
    // @ts-ignore: Unreachable code error
    this.sidebar.on("onSelectBuilding", (id: number) => {
      this.selectBuildId = id;
      console.log(this.selectBuildId);
    });

    // @ts-ignore: Unreachable code error
    this.map.on("updateArea", ({ x, y }: { x: number; y: number }) => {
      this.sidebar.minimap.map.updateArea({ x, y });
    });

    this.sidebar.minimap.map.on(
      // @ts-ignore: Unreachable code error
      "updateMap",
      ({ x, y }: { x: number; y: number }) => {
        this.map.changeOffset(x, y);
      }
    );
  }
}
