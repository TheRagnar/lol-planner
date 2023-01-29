import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../types";
import { crossing } from "./crossing";
import { street } from "./street";

export const house: BldCat = new BldCat({
  id: uuidv4(),
  name: "Дома и жилые помещения",
  description: "",
  bigImage: "",
  subCats: [crossing, street],
  items: [
    {
      id: uuidv4(),
      name: "Хижины",
      description: "",
      bigImage: "assets/bld/house/hut/hut.pt.jpg",
      pic: "assets/bld/house/hut/hut.0.6.mp.png",
      tiles: ["assets/bld/house/hut/hut.0.6.mp.png"],
      showTileIndex: 0,
    },
  ],
});
