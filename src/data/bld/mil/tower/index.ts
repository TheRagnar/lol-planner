import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";

export const tower: BldCat = new BldCat({
  id: uuidv4(),
  name: "Башни",
  description: "",
  bigImage: "assets/bld/mil/tower/tower.pt.jpg",
  subCats: [],
  items: [
    {
      id: uuidv4(),
      name: "Деревянная башня",
      description: "",
      bigImage: "assets/bld/mil/tower/tower.pt.jpg",
      pic: "assets/bld/mil/tower/tower.0.1.mp.png",
      tiles: ["assets/bld/mil/tower/tower.0.1.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Каменная башня",
      description: "",
      bigImage: "assets/bld/mil/tower/tower.pt.jpg",
      pic: "assets/bld/mil/tower/tower.0.2.mp.png",
      tiles: ["assets/bld/mil/tower/tower.0.2.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Крытая башня",
      description: "",
      bigImage: "assets/bld/mil/tower/tower.pt.jpg",
      pic: "assets/bld/mil/tower/tower.0.3.mp.png",
      tiles: ["assets/bld/mil/tower/tower.0.3.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Укрепленная башня",
      description: "",
      bigImage: "assets/bld/mil/tower/tower.pt.jpg",
      pic: "assets/bld/mil/tower/tower.0.4.mp.png",
      tiles: ["assets/bld/mil/tower/tower.0.4.mp.png"],
      showTileIndex: 0,
    },
  ],
});
