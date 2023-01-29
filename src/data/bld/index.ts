import { mil } from "./mil/index";
import { v4 as uuidv4 } from "uuid";
import { house } from "./house";
import { BldCat } from "./types";

export const bld: BldCat = new BldCat({
  id: uuidv4(),
  name: "Здания",
  description: "",
  bigImage: "",
  subCats: [house, mil],
  items: [],
});
