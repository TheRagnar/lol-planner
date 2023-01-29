import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";

export const castle: BldCat = new BldCat({
  id: uuidv4(),
  name: "Деревянный замок",
  description: "",
  bigImage: "assets/bld/mil/castle/wcastle.pt.jpg",
  subCats: [],
  items: [
    {
      id: uuidv4(),
      name: "Одноуровневый деревянный замок",
      description: "",
      bigImage: "assets/bld/mil/castle/wcastle.pt.jpg",
      pic: "assets/bld/mil/castle/wcastle.0.1.mp.png",
      tiles: ["assets/bld/mil/castle/wcastle.0.1.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Двухуровневый деревянный замок",
      description: "",
      bigImage: "assets/bld/mil/castle/wcastle.pt.jpg",
      pic: "assets/bld/mil/castle/wcastle.0.2.mp.png",
      tiles: ["assets/bld/mil/castle/wcastle.0.2.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.31],
    },
    {
      id: uuidv4(),
      name: "Трехуровневый деревянный замок",
      description: "",
      bigImage: "assets/bld/mil/castle/wcastle.pt.jpg",
      pic: "assets/bld/mil/castle/wcastle.0.3.mp.png",
      tiles: ["assets/bld/mil/castle/wcastle.0.3.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.35],
    },
  ],
});
