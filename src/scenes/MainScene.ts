import { Container } from "pixi.js";
import { EraserLayer } from "../layers/EraserLayer";
import { MapLayer } from "../layers/Map";
import { Sidebar } from "../layers/Sidebar";

export class MainScene extends Container {
  private map: MapLayer = new MapLayer(640 * 5, 640 * 3);
  public sidebar: Sidebar = new Sidebar();
  public eraser: EraserLayer = new EraserLayer();

  constructor() {
    super();

    this.addChild(this.map);
    this.addChild(this.sidebar);
    this.addChild(this.eraser);

    this.handleEvents();
  }

  private handleEvents() {
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
