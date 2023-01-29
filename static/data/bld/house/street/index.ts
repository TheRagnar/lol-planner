import { v4 as uuidv4 } from "uuid";
import { BldCat } from "./../../types";
import { items } from "./street";

export const street: BldCat = new BldCat({
  id: uuidv4(),
  name: "Улицы",
  description:
    "Улицы - это сердце жизни города. Здесь находится вся городская деятельность (толкотня, торговля, а также драки ",
  bigImage: "assets/bld/house/street/hstreet.pt.jpg",
  subCats: [],
  items,
});
