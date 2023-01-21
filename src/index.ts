import { MainScene } from "./scenes/MainScene";
import { APP_WIDTH, APP_HEIGHT } from "./lib/app";
import { Application } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: APP_WIDTH,
  height: APP_HEIGHT,
});

const mainScene = new MainScene();

app.stage.addChild(mainScene);
