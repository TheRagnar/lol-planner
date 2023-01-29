import { IBld } from "./../../types";
import { v4 as uuidv4 } from "uuid";

/**
 * TODO: добавить в tiles  остальные улицы
 * TODO: заменить bigImage на оригинальные картинки
 */

export const items: Array<IBld> = [
  {
    id: uuidv4(),
    name: "Восточно-западная улица",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.EW.png",
    tiles: ["assets/bld/house/street/hstreet.0.6.mp.png"],
    showTileIndex: 0,
  },

  {
    id: uuidv4(),
    name: "Северо-южная улица",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.NS.png",
    tiles: ["assets/bld/house/street/vstreet.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с северо-запада на юго-восток",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.03.png",
    tiles: ["assets/bld/house/street/orstreet.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с северо-востока на юго-запад",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.12.png",
    tiles: ["assets/bld/house/street/ostreet.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с востока на юго-запад",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.E2.png",
    tiles: ["assets/bld/house/street/eswstrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с востока на северо-запад",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.E0.png",
    tiles: ["assets/bld/house/street/enwstrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с запада на юго-восток",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.W3.png",
    tiles: ["assets/bld/house/street/wsestrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с запада на северо-восток",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.W1.png",
    tiles: ["assets/bld/house/street/wnestrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с севера на юго-восток",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.N3.png",
    tiles: ["assets/bld/house/street/nsestrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с севера на юго-запад",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.N2.png",
    tiles: ["assets/bld/house/street/nswstrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с юга на северо-восток",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.S1.png",
    tiles: ["assets/bld/house/street/snestrt.0.6.mp.png"],
    showTileIndex: 0,
  },
  {
    id: uuidv4(),
    name: "Улица с юга на северо-запад",
    description: "",
    bigImage: "assets/bld/house/street/hstreet.pt.jpg",
    pic: "assets/bld/house/street/orient.S0.png",
    tiles: ["assets/bld/house/street/snwstrt.0.6.mp.png"],
    showTileIndex: 0,
  },
];
