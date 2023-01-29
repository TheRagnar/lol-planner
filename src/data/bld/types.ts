export interface IBld {
  /** id здания */
  id: string;
  /** название здания */
  name: string;
  /** описание здания */
  description?: string;
  /** большая картинка здания */
  bigImage?: string;
  /** Пиктограмма здания(для меню) */
  pic?: string;
  /** Варианты здания */
  tiles: Array<string>;
  /** Индекс показываемого варианта */
  showTileIndex?: number;
  archon?: [number, number];
}

export interface IBldCat {
  id: string;
  name: string;
  description?: string;
  bigImage?: string;
  items: IBld[];
  subCats: BldCat[];
}

export class BldCat implements IBldCat {
  id: string;
  name: string;
  description?: string | undefined;
  bigImage?: string | undefined;
  items: IBld[];
  subCats: BldCat[];

  constructor(cat: IBldCat) {
    this.id = cat.id;
    this.name = cat.name;
    this.description = cat.description;
    this.bigImage = cat.bigImage;
    this.items = cat.items;
    this.subCats = cat.subCats;
  }

  getAllItems(): IBld[] {
    return this.items.concat(...this.subCats.map((cat) => cat.getAllItems()));
  }

  findBuildById(id: string): IBld | undefined {
    const build = this.items.find((bld) => bld.id === id);

    if (build) return build;

    for (const cat of this.subCats) {
      const foundBuild = cat.findBuildById(id);
      if (foundBuild) return foundBuild;
    }

    return undefined;
  }

  findBuildByName(str: string) {
    const lowerStr = str.toLowerCase().trim();

    return this.getAllItems().find(
      (bld) => bld.name.toLowerCase().trim() === lowerStr
    );
  }

  findCategoryById(id: string): BldCat | undefined {
    if (this.id === id) return this;

    for (const cat of this.subCats) {
      const foundCat = cat.findCategoryById(id);
      if (foundCat) return foundCat;
    }

    return undefined;
  }

  getNestingById(id: string): Array<{ id: string; name: string }> {
    if (this.id === id) return [{ id: this.id, name: this.name }];

    for (const cat of this.subCats) {
      const foundCat = cat.getNestingById(id);
      if (foundCat) return [{ id: this.id, name: this.name }, ...foundCat];
    }

    return [];
  }
}
