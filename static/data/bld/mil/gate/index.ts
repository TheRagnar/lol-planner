import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";
import { items1, items2, items3 } from "./gate";

const level1: BldCat = new BldCat({
  id: uuidv4(),
  name: "Ворота из дерева",
  description: "",
  bigImage: "assets/bld/mil/gate/sgate.pt.jpg",
  subCats: [],
  items: items1,
});
const level2: BldCat = new BldCat({
  id: uuidv4(),
  name: "Ворота из камня",
  description: "",
  bigImage: "assets/bld/mil/gate/sgate.pt.jpg",
  subCats: [],
  items: items2,
});
const level3: BldCat = new BldCat({
  id: uuidv4(),
  name: "Укрепленные ворота",
  description: "",
  bigImage: "assets/bld/mil/gate/sgate.pt.jpg",
  subCats: [],
  items: items3,
});

export const gate: BldCat = new BldCat({
  id: uuidv4(),
  name: "Ворота",
  description: "",
  bigImage: "assets/bld/mil/gate/sgate.pt.jpg",
  subCats: [level1, level2, level3],
  items: [],
});
