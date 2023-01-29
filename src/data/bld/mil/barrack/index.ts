import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";

export const barrack: BldCat = new BldCat({
  id: uuidv4(),
  name: "Казармы",
  description: "",
  bigImage: "assets/bld/mil/barrack/barrack.pt.jpg",
  subCats: [],
  items: [
    {
      id: uuidv4(),
      name: "Маленькие казармы",
      description: "",
      bigImage: "assets/bld/mil/barrack/barrack.pt.jpg",
      pic: "assets/bld/mil/barrack/barrack.0.1.mp.png",
      tiles: ["assets/bld/mil/barrack/barrack.0.1.mp.png"],
      showTileIndex: 0,
      archon: [0.2, 0.17],
    },
    {
      id: uuidv4(),
      name: "Средние казармы",
      description: "",
      bigImage: "assets/bld/mil/barrack/barrack.pt.jpg",
      pic: "assets/bld/mil/barrack/barrack.0.2.mp.png",
      tiles: ["assets/bld/mil/barrack/barrack.0.2.mp.png"],
      showTileIndex: 0,
      archon: [0.25, 0.17],
    },
    {
      id: uuidv4(),
      name: "Большие казармы",
      description: "",
      bigImage: "assets/bld/mil/barrack/barrack.pt.jpg",
      pic: "assets/bld/mil/barrack/barrack.0.3.mp.png",
      tiles: ["assets/bld/mil/barrack/barrack.0.3.mp.png"],
      showTileIndex: 0,
    },
    {
      id: uuidv4(),
      name: "Гарнизон",
      description: "",
      bigImage: "assets/bld/mil/barrack/barrack.pt.jpg",
      pic: "assets/bld/mil/barrack/barrack.0.4.mp.png",
      tiles: ["assets/bld/mil/barrack/barrack.0.4.mp.png"],
      showTileIndex: 0,
    },
  ],
});
