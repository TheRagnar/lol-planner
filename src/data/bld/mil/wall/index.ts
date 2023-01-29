import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";
import { items1, items2, items3 } from "./wall";

const level1: BldCat = new BldCat({
  id: uuidv4(),
  name: "Частокол",
  description: "",
  bigImage: "assets/bld/mil/wall/swall.pt.jpg",
  subCats: [],
  items: items1,
});
const level2: BldCat = new BldCat({
  id: uuidv4(),
  name: "Стена",
  description: "",
  bigImage: "assets/bld/mil/wall/swall.pt.jpg",
  subCats: [],
  items: items2,
});
const level3: BldCat = new BldCat({
  id: uuidv4(),
  name: "Укрепленная стена",
  description: "",
  bigImage: "assets/bld/mil/wall/swall.pt.jpg",
  subCats: [],
  items: items3,
});

export const wall: BldCat = new BldCat({
  id: uuidv4(),
  name: "Стена",
  description: "",
  bigImage: "assets/bld/mil/wall/swall.pt.jpg",
  subCats: [level1, level2, level3],
  items: [],
});
