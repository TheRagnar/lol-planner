import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";
import { items } from "./crossing";

export const crossing: BldCat = new BldCat({
  id: uuidv4(),
  name: "Перекрестки",
  description:
    "Перекресток - это пересечение между дорогой с востока на запад и дорогой с севера на юг. В отличие от площади, которая",
  bigImage: "assets/bld/house/crossing/crossing.pt.jpg",
  subCats: [],
  items,
});
