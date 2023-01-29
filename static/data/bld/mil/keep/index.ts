import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";

export const keep: BldCat = new BldCat({
  id: uuidv4(),
  name: "Донжон",
  description: "",
  bigImage: "assets/bld/mil/keep/keep.pt.jpg",
  subCats: [],
  items: [
    {
      id: uuidv4(),
      name: "Фундамент донжона",
      description: "",
      bigImage: "assets/bld/mil/keep/keep.pt.jpg",
      pic: "assets/bld/mil/keep/keep.0.0.mp.png",
      tiles: ["assets/bld/mil/keep/keep.0.0.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Одноуровневый донжон",
      description: "",
      bigImage: "assets/bld/mil/keep/keep.pt.jpg",
      pic: "assets/bld/mil/keep/keep.0.1.mp.png",
      tiles: ["assets/bld/mil/keep/keep.0.1.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Двухуровневый донжон",
      description: "",
      bigImage: "assets/bld/mil/keep/keep.pt.jpg",
      pic: "assets/bld/mil/keep/keep.0.2.mp.png",
      tiles: ["assets/bld/mil/keep/keep.0.2.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.35],
    },
    {
      id: uuidv4(),
      name: "Трехуровневый донжон",
      description: "",
      bigImage: "assets/bld/mil/keep/keep.pt.jpg",
      pic: "assets/bld/mil/keep/keep.0.3.mp.png",
      tiles: ["assets/bld/mil/keep/keep.0.3.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.43],
    },
    {
      id: uuidv4(),
      name: "Крытый донжон",
      description: "",
      bigImage: "assets/bld/mil/keep/keep.pt.jpg",
      pic: "assets/bld/mil/keep/keep.0.4.mp.png",
      tiles: ["assets/bld/mil/keep/keep.0.4.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.53],
    },
  ],
});
