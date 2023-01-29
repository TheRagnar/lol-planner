import { IBld } from "./../../types";
import { v4 as uuidv4 } from "uuid";

/**
 * TODO: добавить в tiles  остальные перекрестки
 */

export const items: Array<IBld> = [
  {
    id: uuidv4(),
    name: "Перекресток",
    description: "",
    bigImage: "assets/bld/house/crossing/crossing.pt.jpg",
    pic: "assets/bld/house/crossing/orient.NESW.png",
    tiles: ["assets/bld/house/crossing/crossing.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Диагональный перекресток",
    description: "",
    bigImage: "assets/bld/house/crossing/crossing.pt.jpg",
    pic: "assets/bld/house/crossing/orient.0123.png",
    tiles: ["assets/bld/house/crossing/xcross.0.6.mp.png"],
    showTileIndex: 0,
  },
];
