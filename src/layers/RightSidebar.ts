// import { Container, Graphics, Sprite, Text, TextStyle } from "pixi.js";
// import { streets } from "../../static/streets.json";
// import { APP_HEIGHT, APP_WIDTH } from "./../lib/app";
// import { COLORS } from "./../lib/colors";
// import { Minimap } from "./Minimap";

// export class RightSidebar extends Container {
//   public background: Graphics;
//   public minimap: Minimap;

//   public scrollableContainer: ScrollableContainer = new ScrollableContainer();

//   constructor() {
//     super();

//     this.x = APP_WIDTH - 340;
//     this.y = 0;

//     this.background = new Graphics();
//     this.minimap = new Minimap(10, 10);

//     this.drawBackground();
//     this.addChild(this.minimap);
//     this.drawBuildings();
//   }

//   private drawBackground() {
//     this.background.beginFill(COLORS.color1);
//     this.background.drawRect(0, 0, 340, APP_HEIGHT);
//     this.background.endFill();
//     this.addChild(this.background);
//   }

//   private drawBuildings() {
//     this.scrollableContainer.x = 10;
//     this.scrollableContainer.y = 350;

//     for (let i = 0; i < streets.length; i++) {
//       const building = new Building(
//         streets[i].id,
//         "assets/buildings/streets/" + streets[i].src,
//         streets[i].name
//       );
//       building.x = 10;
//       building.y = 10 + i * 50 + i * 10;
//       building.on("pointertap", () => {
//         // @ts-ignore: Unreachable code error
//         this.emit("onSelectBuilding", building.id);

//         building.setActive();

//         this.scrollableContainer.scrollInner.children.filter((item) => {
//           if (item instanceof Building && item.id !== building.id) {
//             item.setUnactive();
//           }
//         });
//       });
//       this.scrollableContainer.scrollInner.addChild(building);
//     }

//     this.addChild(this.scrollableContainer);
//   }
// }

// class Building extends Container {
//   private background: Graphics = new Graphics();
//   private sprite: Sprite;
//   private text: Text;
//   public id: number;

//   private isActive: boolean = false;

//   constructor(id: number, url: string, name: string) {
//     super();
//     this.id = id;

//     this.sprite = Sprite.from(url);
//     this.sprite.zIndex = 3;
//     this.sprite.width = 40;
//     this.sprite.height = 40;
//     this.sprite.x = 5;
//     this.sprite.y = 5;

//     this.text = new Text(
//       name,
//       new TextStyle({ fill: COLORS.WHITE, fontSize: 14, fontWeight: "500" })
//     );
//     this.text.x = 50;
//     this.text.y = 16;
//     this.text.zIndex = 3;
//     this.drawBackground();
//     this.addChild(this.sprite);
//     this.addChild(this.text);

//     this.interactive = true;
//   }

//   private drawBackground() {
//     this.background.clear();
//     if (this.isActive) {
//       this.background.beginFill(COLORS.RED, 0.3);
//     } else {
//       this.background.beginFill(COLORS.RED, 0.1);
//     }

//     this.background.drawRect(0, 0, 300, 50);
//     this.background.endFill();
//     this.addChild(this.background);
//   }

//   public setActive() {
//     this.isActive = true;
//     this.background.clear();
//     this.drawBackground();
//   }

//   public setUnactive() {
//     this.isActive = false;
//     this.background.clear();
//     this.drawBackground();
//   }
// }

// class ScrollInner extends Container {
//   constructor() {
//     super();
//     this.interactive = true;
//   }

//   public addBuilding(building: Building) {
//     this.addChild(building);
//   }
// }

// class ScrollableContainer extends Container {
//   private wheelActive: boolean = false;
//   private background: Graphics = new Graphics();
//   public scrollInner: ScrollInner = new ScrollInner();

//   constructor() {
//     super();

//     this.drawBackground();

//     const mask = new Graphics();
//     mask.beginFill(COLORS.WHITE, 0.1);
//     mask.drawRect(0, 0, 320, 590);
//     mask.endFill();
//     this.addChild(mask);
//     this.mask = mask;
//     this.addChild(this.scrollInner);
//     this.handleEvents();
//   }

//   private drawBackground() {
//     this.background.beginFill(COLORS.WHITE, 0.1);
//     this.background.drawRect(0, 0, 320, 590);
//     this.background.endFill();
//     this.addChild(this.background);
//   }

//   private handleEvents() {
//     this.interactive = true;

//     this.on("mousemove", () => {
//       this.wheelActive = true;
//     });

//     this.on("mouseout", () => {
//       this.wheelActive = false;
//     });

//     document.addEventListener("wheel", (e) => {
//       if (this.wheelActive) {
//         const delta = 30;
//         const containerHeight = this.scrollInner.height + 20;
//         let newY = this.scrollInner.y;

//         if (e.deltaY > 0) {
//           newY -= delta;
//         }
//         if (e.deltaY < 0) {
//           newY += delta;
//         }

//         if (newY > 0) return;
//         if (newY < -containerHeight + 590) return;

//         this.scrollInner.y = newY;
//       }
//     });
//   }
// }
