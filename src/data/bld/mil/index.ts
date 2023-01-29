import { castle } from "./castle/index";
import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../types";
import { barrack } from "./barrack/index";
import { gate } from "./gate";
import { keep } from "./keep/index";
import { tower } from "./tower/index";
import { wall } from "./wall/index";

export const mil: BldCat = new BldCat({
  id: uuidv4(),
  name: "Военные постройки",
  description: "",
  bigImage: "",
  subCats: [gate, wall, tower, keep, barrack, castle],
  items: [],
});
