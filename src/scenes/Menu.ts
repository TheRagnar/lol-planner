import { Container, Graphics, Sprite } from "pixi.js";
import { streets } from "../../static/streets.json";
import { APP_HEIGHT, APP_WIDTH } from "../lib/app";

export const MENU_HEIGHT = 60;
export const MENU_WIDTH = 610;
export const GAP = 10;
export const BUTTON_SIZE = 40;

export class Menu extends Container {
  private selectButtonIndex: number = 0;

  private buttons: Array<Button> = [];

  constructor() {
    super();
    this.x = APP_WIDTH / 2 - MENU_WIDTH / 2;
    this.y = APP_HEIGHT - MENU_HEIGHT;

    this.drawBg();
  }

  private drawBg() {
    const bg = new Graphics();
    bg.beginFill(0x000000, 0.7);
    bg.drawRect(0, 0, MENU_WIDTH, MENU_HEIGHT);
    bg.endFill();

    this.addChild(bg);
    this.drawButtons();
  }

  private drawButtons() {
    for (let i = 0; i < streets.length; i++) {
      const button = new Button({
        url: "assets/buildings/streets/" + streets[i].src,
        size: BUTTON_SIZE,
        isActive: i === this.selectButtonIndex,
      });
      button.x = GAP + (BUTTON_SIZE + GAP) * i;
      button.y = GAP;
      button.on("pointertap", () => this.handleSelect(i));
      this.buttons.push(button);
      this.addChild(button);
    }
  }

  private handleSelect(index: number) {
    this.selectButtonIndex = index;
    this.removeChildren();

    this.drawButtons();
    this.drawBg();

    // @ts-ignore: Unreachable code error
    this.emit("selectBuild", index);
  }
}

class Button extends Container {
  public isActive: boolean; // Состояние кнопки

  private sprite: Sprite; // Спрайт кнопки
  private bg: Graphics; // Фон кнопки

  constructor({
    url,
    size,
    isActive,
  }: {
    url: string;
    size: number;
    isActive: boolean;
  }) {
    super();
    this.isActive = isActive;

    this.sprite = Sprite.from(url);
    this.sprite.width = size;
    this.sprite.height = size;

    this.bg = new Graphics();
    if (this.isActive) {
      this.bg.beginFill(0xffffff, 0.7);
    } else {
      this.bg.beginFill(0xffffff, 0.3);
    }
    this.bg.drawRect(0, 0, size, size);
    this.bg.endFill();
    this.addChild(this.bg);
    this.addChild(this.sprite);

    this.handleEvents();
  }

  private handleEvents() {
    this.interactive = true;
    this.hitArea = this.bg.getBounds();
  }
}
