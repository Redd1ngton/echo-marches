import { buildCrypt, buildFen, buildNave, buildTract, buildWillow } from "./realm";

export const TILE = 48;

export type Spot = {
  id: string;
  x: number;
  y: number;
  label: string;
  kind: "talk" | "rest" | "shop" | "lever" | "chest" | "exit" | "bell" | "stone" | "board" | "travel" | "fight";
  ref?: string;
};

export type FoeSpawn = { id: string; n: number; name?: string };

export type Fight = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  foes: FoeSpawn[];
  /** Стоять, поки не підійдеш впритул або не вдариш. */
  calm?: boolean;
};

export type GameMap = {
  id: string;
  name: string;
  region: string;
  weather: "rain" | "fog" | "clear" | "ash";
  rows: string[];
  spawns: Record<string, { x: number; y: number }>;
  spots: Spot[];
  fights: Fight[];
};

export const WILLOW: GameMap = {
  id: "willow",
  name: "Вербова варта",
  region: "grey",
  weather: "clear",
  spawns: { default: { x: 20, y: 11 }, south: { x: 20, y: 11 }, gate: { x: 34, y: 11 } },
  rows: [
    "########################################",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHH+..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..F.....................#",
    "#..T................................T..#",
    "#..T................................T..#",
    "#......................................#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..F.......HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHH+..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........HHHHHHHHHHHHHH#",
    "#HHHHHHHHHHHHHH..........,,,,,,,,,,,,,,#",
    "#HHHHHHHHHHHHHH..........,,,,,,,,,,,,,,#",
    "#HHHHHHHHHHHHHH..........,,,,,,,,,,,,,,#",
    "#HHHHHHHHHHHHHH........................#",
    "#..T................................T..#",
    "#......\"\"\"\"\"\"..........\"\"\"\"\"\"..........#",
    "#..~~~~......F...........~~~~....T.....#",
    "#..~~~~..................~~~~..........#",
    "#.........TT...........................#",
    "#..T..........\"\"\"\"\"\"\"\"..........T......#",
    "#......................................#",
    "########################################",
  ],
  spots: [
    { id: "marta", x: 15, y: 5, label: "Марта", kind: "talk", ref: "marta" },
    { id: "rest", x: 14, y: 5, label: "Ліжко", kind: "rest" },
    { id: "shop", x: 15, y: 17, label: "Крамниця", kind: "shop" },
    { id: "board", x: 15, y: 13, label: "Дошка найму", kind: "board" },
    { id: "bren", x: 34, y: 11, label: "Брен", kind: "talk", ref: "bren" },
    { id: "gate", x: 38, y: 11, label: "Брама на тракт", kind: "exit", ref: "tract" },
    { id: "guests", x: 30, y: 20, label: "Нічні гості", kind: "fight", ref: "willow-guests" },
    { id: "light1", x: 17, y: 9, label: "Вербовий вогонь", kind: "talk", ref: "light" },
    { id: "light2", x: 17, y: 16, label: "Вербовий вогонь", kind: "talk", ref: "light" },
    { id: "light3", x: 22, y: 11, label: "Третій вогонь", kind: "talk", ref: "light" },
    { id: "iva", x: 22, y: 12, label: "Іва", kind: "talk", ref: "iva" },
    { id: "lada", x: 26, y: 11, label: "Лада", kind: "talk", ref: "lada" },
    { id: "dorin", x: 18, y: 12, label: "Дорин", kind: "talk", ref: "dorin" },
    { id: "perch", x: 18, y: 16, label: "Сідало сов", kind: "talk", ref: "perch" },
    { id: "atlas", x: 24, y: 13, label: "Скриня маршів", kind: "travel" },
  ],
  fights: [
    { id: "willow-guests", x: 26, y: 19, w: 12, h: 3, foes: [{ id: "drowned", n: 2, name: "Нічний гість" }, { id: "reed", n: 1, name: "Очеретяник" }] },
    { id: "willow-mud", x: 28, y: 17, w: 8, h: 2, calm: true, foes: [{ id: "sludge", n: 1, name: "Мул біля стіни" }, { id: "reed", n: 2, name: "Очеретяник" }] },
    { id: "willow-yard", x: 4, y: 25, w: 32, h: 6, foes: [{ id: "drowned", n: 3, name: "Нічний гість" }, { id: "reed", n: 2, name: "Очеретяник" }, { id: "sludge", n: 1, name: "Мул двору" }] },
  ],
};

export const TRACT: GameMap = {
  id: "tract",
  name: "Затоплений тракт",
  region: "grey",
  weather: "rain",
  spawns: { default: { x: 16, y: 15 }, south: { x: 16, y: 15 }, north: { x: 16, y: 2 } },
  rows: [
    "################################",
    "#...............\"\"........TT..C#",
    "#..T...........\"\"..........T...#",
    "#WWWWWWWWWWWxxWWWWWWWWWWW====WW#",
    "#WWWWWWWWWWWxxWWWWWWWWWWW====WW#",
    "#..L.............L..........L..#",
    "#........\"\"\"\"..................#",
    "#..T...........................#",
    "#........\"\"\"\"\"\"..........T.....#",
    "#.....WWWWWWWW............TT...#",
    "#.....WWWWWWWW...............T.#",
    "#T................\"\"\"\".........#",
    "#TT......\"\"\"\"................T.#",
    "#.............................T#",
    "#..T..............\"\"\"\".........#",
    "#.............S................#",
    "#..T........................TT.#",
    "#......\"\"\"\"..........T.........#",
    "#..~~~~..................~~~~..#",
    "#..T..........................T#",
    "#........\"\"\"\"\"\"................#",
    "#..............F...............#",
    "#..TT......................TT..#",
    "################################",
  ],
  spots: [
    { id: "back-willow", x: 16, y: 15, label: "Стежка до варти", kind: "exit", ref: "willow" },
    { id: "to-crypt", x: 29, y: 1, label: "Устя крипти", kind: "exit", ref: "crypt" },
    { id: "lever-l", x: 3, y: 5, label: "Лівий шлюз", kind: "lever", ref: "0" },
    { id: "lever-m", x: 16, y: 5, label: "Середній шлюз", kind: "lever", ref: "1" },
    { id: "lever-r", x: 28, y: 5, label: "Правий шлюз", kind: "lever", ref: "2" },
    { id: "slab", x: 16, y: 7, label: "Плита шлюзів", kind: "stone" },
    { id: "chest-tract", x: 6, y: 14, label: "Скриня в мулі", kind: "chest" },
    { id: "boot", x: 8, y: 14, label: "Чобіт у мулі", kind: "talk", ref: "tract-boot" },
    { id: "ford", x: 4, y: 6, label: "Шепіт біля шлюзу", kind: "talk", ref: "ford-names" },
    { id: "ribbon", x: 26, y: 6, label: "Сіра стрічка", kind: "talk", ref: "ribbon" },
  ],
  fights: [
    { id: "tract-ambush", x: 1, y: 12, w: 30, h: 2, foes: [{ id: "drowned", n: 4, name: "Потопельник" }] },
    { id: "tract-reeds", x: 4, y: 8, w: 8, h: 3, calm: true, foes: [{ id: "reed", n: 3, name: "Очеретяник" }] },
    { id: "tract-ford", x: 22, y: 6, w: 8, h: 3, calm: true, foes: [{ id: "sludge", n: 1, name: "Мул броду" }, { id: "drowned", n: 1, name: "Вартовий броду" }] },
    { id: "tract-mouth", x: 20, y: 1, w: 10, h: 2, foes: [{ id: "wraith", n: 2, name: "Хорист устя" }, { id: "drowned", n: 1, name: "Потопельник" }] },
    { id: "tract-south", x: 4, y: 17, w: 24, h: 5, foes: [{ id: "drowned", n: 3, name: "Потопельник" }, { id: "reed", n: 2, name: "Очеретяник" }] },
  ],
};

export const CRYPT: GameMap = {
  id: "crypt",
  name: "Крипта дзвонаря",
  region: "grey",
  weather: "fog",
  spawns: { default: { x: 8, y: 15 }, south: { x: 8, y: 15 } },
  rows: [
    "################################",
    "#cccc......................cccc#",
    "#c..c......................c..c#",
    "#c..c......................c..c#",
    "#cccc##########DDD##########ccc#",
    "#c............................c#",
    "#c..B..........B..........B...c#",
    "#c............................c#",
    "#cccccc+#################+ccccc#",
    "#c....c....................c..c#",
    "#c.I..c...................c.K.c#",
    "#c....c....................c..c#",
    "#cccccc+ccccccccccccccccccc+ccc#",
    "#..............................#",
    "#..............................#",
    "#..E...........................#",
    "#..............................#",
    "################################",
  ],
  spots: [
    { id: "out-tract", x: 3, y: 15, label: "Вихід на тракт", kind: "exit", ref: "tract" },
    { id: "ostap", x: 12, y: 14, label: "Остап", kind: "talk", ref: "ostap" },
    { id: "inscript", x: 4, y: 10, label: "Напис", kind: "stone" },
    { id: "bell0", x: 4, y: 6, label: "Дзвін краплі", kind: "bell", ref: "0" },
    { id: "bell1", x: 15, y: 6, label: "Дзвін верби", kind: "bell", ref: "1" },
    { id: "bell2", x: 26, y: 6, label: "Дзвін попелу", kind: "bell", ref: "2" },
    { id: "chest-crypt", x: 28, y: 10, label: "Скриня хору", kind: "chest" },
    { id: "widow", x: 26, y: 10, label: "Хористка", kind: "talk", ref: "sq-widow" },
    { id: "wax", x: 6, y: 10, label: "Віск ніші", kind: "talk", ref: "wax-niche" },
  ],
  fights: [
    { id: "crypt-wraiths", x: 6, y: 13, w: 20, h: 2, foes: [{ id: "wraith", n: 2, name: "Хорист" }] },
    { id: "crypt-boss", x: 8, y: 1, w: 16, h: 3, foes: [{ id: "bellringer", n: 1, name: "Дзвонар" }] },
  ],
};

/** Camp on the moss road, past the bell. Leaving returns to the watch. */
export const BEYOND: GameMap = {
  id: "beyond",
  name: "Привал за дзвоном",
  region: "moss",
  weather: "rain",
  spawns: { default: { x: 12, y: 13 }, south: { x: 12, y: 13 }, north: { x: 12, y: 2 } },
  rows: [
    "########################",
    "#T..m..............m..T#",
    "#......................#",
    "#~~................~~..#",
    "#~~......======....~~..#",
    "#......................#",
    "#......................#",
    "#.........\"............#",
    "#....L..........L......#",
    "#..HHHH..........HHHH..#",
    "#..HHHH..........HHHH..#",
    "#..HHHH..........HHHH..#",
    "#......................#",
    "#.........F............#",
    "#E....................C#",
    "########################",
  ],
  spots: [
    { id: "beyond-back", x: 1, y: 14, label: "Стежка до варти", kind: "exit", ref: "willow" },
    { id: "beyond-rest", x: 10, y: 13, label: "Вогнище", kind: "rest" },
    { id: "beyond-shop", x: 18, y: 13, label: "Торба привалу", kind: "shop" },
    { id: "beyond-guard", x: 5, y: 8, label: "Вартовий низин", kind: "talk", ref: "sq-no-answer" },
    { id: "beyond-chest", x: 22, y: 14, label: "Скриня привалу", kind: "chest" },
  ],
  fights: [{ id: "beyond-ford", x: 8, y: 5, w: 8, h: 2, foes: [{ id: "drowned", n: 2, name: "Потопельник привалу" }] }],
};

export const HAND: Record<string, GameMap> = {
  willow: buildWillow(),
  tract: buildTract(),
  crypt: buildCrypt(),
  beyond: BEYOND,
  fen: buildFen(),
  nave: buildNave(),
};

const ROAD_SKIN: Record<string, { floor: string; name: string; weather: GameMap["weather"]; foe: string; boss: string; bossName: string }> = {
  moss: { floor: "m", name: "Мохові низини", weather: "rain", foe: "gnat", boss: "reedchoir", bossName: "Хор очерету" },
  amber: { floor: "y", name: "Бурштинові пущі", weather: "clear", foe: "salt", boss: "stag", bossName: "Смоляний олень" },
  glass: { floor: "g", name: "Скляні кряжі", weather: "fog", foe: "mirror", boss: "saint", bossName: "Скляний святий" },
  red: { floor: "r", name: "Червоні пустки", weather: "ash", foe: "banner", boss: "oath", bossName: "Порушник клятви" },
  shore: { floor: "s", name: "Берег без місяця", weather: "rain", foe: "tide", boss: "tidebell", bossName: "Дзвін без місяця" },
  ash: { floor: "a", name: "Попеляста корона", weather: "ash", foe: "spark", boss: "ashking", bossName: "Попелястий король" },
  verge: { floor: "e", name: "Межа відлунь", weather: "fog", foe: "spark", boss: "firstbell", bossName: "Перший дзвін" },
};

function storyRows(floor: string) {
  const W = 42;
  const H = 30;
  const rows = Array.from({ length: H }, () => floor.repeat(W));
  const paint = (x: number, y: number, w: number, h: number, ch: string) => {
    for (let yy = y; yy < y + h && yy < H; yy++) {
      const chars = rows[yy]!.split("");
      for (let xx = x; xx < x + w && xx < W; xx++) if (xx >= 0 && yy >= 0) chars[xx] = ch;
      rows[yy] = chars.join("");
    }
  };
  paint(0, 0, W, 1, "#");
  paint(0, H - 1, W, 1, "#");
  paint(0, 0, 1, H, "#");
  paint(W - 1, 0, 1, H, "#");
  paint(3, 22, 9, 5, "H");
  paint(30, 22, 8, 5, "H");
  paint(16, 6, 10, 20, floor);
  paint(6, 16, 30, 3, floor);
  paint(4, 7, 8, 4, "~");
  paint(30, 7, 8, 4, "~");
  paint(5, 19, 7, 2, ",");
  paint(8, 3, 7, 3, "H");
  paint(27, 3, 7, 3, "H");
  paint(15, 3, 12, 4, floor);
  for (const [x, y] of [
    [6, 5],
    [10, 6],
    [33, 5],
    [36, 12],
    [7, 14],
    [35, 15],
    [8, 21],
    [37, 21],
    [14, 11],
    [28, 12],
    [5, 27],
    [37, 27],
  ] as const) {
    paint(x, y, 1, 1, "T");
  }
  paint(20, 24, 1, 1, "F");
  paint(12, 17, 1, 1, "L");
  paint(29, 17, 1, 1, "L");
  return rows;
}

export function storyRoad(region: string): GameMap | null {
  const skin = ROAD_SKIN[region];
  if (!skin) return null;
  const id = `${region}-road`;
  return {
    id,
    name: skin.name,
    region,
    weather: skin.weather,
    spawns: { default: { x: 20, y: 26 }, south: { x: 20, y: 26 }, north: { x: 20, y: 4 } },
    rows: storyRows(skin.floor),
    spots: [
      { id: `${id}-back`, x: 2, y: 26, label: "Назад у варту", kind: "exit", ref: "back" },
      { id: `${id}-on`, x: 20, y: 2, label: "Далі, за лігво", kind: "exit", ref: "leave" },
      { id: `${id}-rest`, x: 20, y: 24, label: "Вогнище привалу", kind: "rest" },
      { id: `${id}-shop`, x: 26, y: 25, label: "Торба краю", kind: "shop" },
      { id: `${id}-talk`, x: 15, y: 25, label: "Хранитель краю", kind: "talk", ref: `road-${region}` },
      { id: `${id}-hear`, x: 12, y: 18, label: "Той, хто чув", kind: "talk", ref: `hear-${region}` },
      { id: `${id}-shrine`, x: 32, y: 16, label: "Капличка", kind: "talk", ref: `shrine-${region}` },
      { id: `${id}-trace`, x: 6, y: 12, label: "Слід", kind: "talk", ref: `trace-${region}` },
      { id: `${id}-chest`, x: 34, y: 27, label: "Скриня краю", kind: "chest" },
    ],
    fights: [
      { id: `${id}-pack`, x: 8, y: 14, w: 6, h: 3, foes: [{ id: skin.foe, n: 3, name: packName(region, 0) }] },
      { id: `${id}-north`, x: 24, y: 10, w: 6, h: 3, foes: [{ id: skin.foe, n: 2, name: packName(region, 1) }] },
      { id: `${id}-boss`, x: 16, y: 4, w: 8, h: 3, foes: [{ id: skin.boss, n: 1, name: skin.bossName }] },
    ],
  };
}

export function mapSize(m: GameMap) {
  return { w: m.rows[0]?.length ?? 0, h: m.rows.length };
}

export function inMap(m: GameMap, x: number, y: number) {
  return y >= 0 && x >= 0 && y < m.rows.length && x < (m.rows[0]?.length ?? 0);
}

/** Terrain after puzzle flags. `x` is the broken bridge, `D` the nave door. */
export function tileChar(m: GameMap, x: number, y: number, flags: Record<string, number>) {
  if (!inMap(m, x, y)) return "#";
  let ch = m.rows[y]![x]!;
  if (ch === "x" && flags.bridge) ch = "=";
  if (ch === "D" && flags.bells) ch = "c";
  return ch;
}

export type Cell = { ground: number; solid: boolean; slow: boolean; kind: string };

export function cellOf(ch: string): Cell {
  switch (ch) {
    case "#":
    case "H":
      return { ground: ch === "H" ? 0 : 9, solid: true, slow: false, kind: ch === "H" ? "house" : "wall" };
    case "T":
      return { ground: 2, solid: true, slow: false, kind: "tree" };
    case "W":
      return { ground: 5, solid: true, slow: false, kind: "deep" };
    case "~":
      return { ground: 4, solid: false, slow: true, kind: "shallow" };
    case "x":
    case "D":
      return { ground: ch === "D" ? 8 : 5, solid: true, slow: false, kind: ch === "D" ? "door" : "gap" };
    case ",":
      return { ground: 1, solid: false, slow: true, kind: "mud" };
    case '"':
      return { ground: 2, solid: false, slow: false, kind: "grass" };
    case "m":
      return { ground: 3, solid: false, slow: false, kind: "moss" };
    case "=":
      return { ground: 6, solid: false, slow: false, kind: "bridge" };
    case "c":
    case "N":
    case "B":
    case "I":
    case "K":
    case "E":
    case "S":
    case "C":
    case "L":
    case "G":
    case "M":
    case "+":
      return { ground: ch === "c" || "NBIC".includes(ch) ? 8 : 0, solid: false, slow: false, kind: "floor" };
    case "F":
      return { ground: 0, solid: false, slow: false, kind: "fire" };
    case "a":
      return { ground: 10, solid: false, slow: false, kind: "ash" };
    case "r":
      return { ground: 11, solid: false, slow: false, kind: "dust" };
    case "y":
      return { ground: 12, solid: false, slow: false, kind: "amber" };
    case "g":
      return { ground: 13, solid: false, slow: false, kind: "glass" };
    case "s":
      return { ground: 14, solid: false, slow: false, kind: "sand" };
    case "e":
      return { ground: 15, solid: false, slow: false, kind: "echo" };
    default:
      return { ground: 0, solid: false, slow: false, kind: "floor" };
  }
}

export function blocked(m: GameMap, x: number, y: number, flags: Record<string, number>) {
  return cellOf(tileChar(m, x, y, flags)).solid;
}

const BIO: Record<string, { floor: string; alt: string; water: string; weather: GameMap["weather"] }> = {
  moss: { floor: '"', alt: "m", water: "~", weather: "rain" },
  amber: { floor: "y", alt: '"', water: ",", weather: "clear" },
  glass: { floor: "g", alt: "e", water: "W", weather: "fog" },
  red: { floor: "r", alt: "a", water: ",", weather: "ash" },
  shore: { floor: "s", alt: ",", water: "~", weather: "rain" },
  ash: { floor: "a", alt: "r", water: ",", weather: "ash" },
  verge: { floor: "e", alt: "c", water: "W", weather: "fog" },
};

function mulberry(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function generateSite(opts: {
  id: string;
  name: string;
  region: string;
  biome: string;
  tier: number;
  seed: number;
  kind: "camp" | "wild" | "lair" | "job";
}): GameMap {
  const bio = BIO[opts.biome] ?? BIO.moss!;
  const rnd = mulberry((opts.seed ^ hash(opts.id)) >>> 0);
  const W = 48;
  const H = 34;
  const g = Array.from({ length: H }, () => Array.from({ length: W }, () => (rnd() < 0.18 ? bio.alt : bio.floor)));
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (x === 0 || y === 0 || x === W - 1 || y === H - 1) g[y]![x] = "#";
    }
  }
  const carve = (x: number, y: number) => {
    if (y > 0 && x > 0 && y < H - 1 && x < W - 1) g[y]![x] = bio.floor;
  };
  let x = 4 + Math.floor(rnd() * 6);
  let y = H - 3;
  const sx = x;
  const sy = y;
  carve(x, y);
  const path: { x: number; y: number }[] = [{ x, y }];
  for (let n = 0; n < 180; n++) {
    const dir = rnd();
    if (dir < 0.45) y -= 1;
    else if (dir < 0.65) x += rnd() < 0.5 ? -1 : 1;
    else if (dir < 0.8) x += 1;
    else x -= 1;
    x = Math.max(2, Math.min(W - 3, x));
    y = Math.max(2, Math.min(H - 3, y));
    carve(x, y);
    carve(x + 1, y);
    path.push({ x, y });
    if (y < 3) break;
  }
  const ex = x;
  const ey = y;
  for (let i = 0; i < 22; i++) {
    const tx = 2 + Math.floor(rnd() * (W - 4));
    const ty = 2 + Math.floor(rnd() * (H - 4));
    if (rnd() < 0.5) g[ty]![tx] = "T";
    else if (rnd() < 0.4) g[ty]![tx] = bio.water === "W" ? "~" : bio.water;
  }
  if (opts.kind === "camp") {
    g[sy]![sx] = "F";
    g[sy - 1]![sx] = bio.floor;
  }
  const fights: Fight[] = [];
  const spots: Spot[] = [];
  const steps = path.filter((_, i) => i % 7 === 3);
  const packs = opts.kind === "camp" ? 1 : opts.kind === "job" ? 2 : opts.kind === "lair" ? 3 : 4;
  const pair = biomePair(opts.biome);
  const foeA = pair[0];
  const foeB = pair[1];
  for (let i = 0; i < packs && i < steps.length; i++) {
    const p = steps[i]!;
    const boss = opts.kind === "lair" && i === packs - 1;
    fights.push({
      id: `${opts.id}-f${i}`,
      x: p.x - 1,
      y: p.y - 1,
      w: 4,
      h: 3,
      foes: boss
        ? [{ id: biomeBoss(opts.biome), n: 1, name: bossName(opts.region) }]
        : [
            { id: i % 2 ? foeB : foeA, n: 2 + (opts.tier > 3 ? 1 : 0), name: packName(opts.biome, i) },
          ],
    });
  }
  spots.push({ id: `${opts.id}-exit`, x: ex, y: ey, label: "Далі", kind: "exit", ref: "leave" });
  spots.push({ id: `${opts.id}-back`, x: sx, y: sy, label: "Назад", kind: "exit", ref: "back" });
  if (opts.kind === "camp") {
    spots.push({ id: `${opts.id}-npc`, x: Math.min(W - 3, sx + 2), y: sy, label: "Хранитель", kind: "talk", ref: `road-${opts.region}` });
    spots.push({ id: `${opts.id}-rest`, x: sx, y: Math.max(2, sy - 1), label: "Вогнище", kind: "rest" });
    spots.push({ id: `${opts.id}-shop`, x: Math.max(2, sx - 2), y: sy, label: "Торба", kind: "shop" });
  } else {
    const hear = path[Math.floor(path.length / 2)] ?? { x: sx, y: sy };
    spots.push({
      id: `${opts.id}-hear`,
      x: hear.x,
      y: hear.y,
      label: "Мандрівник",
      kind: "talk",
      ref: `hear-${opts.region}`,
    });
  }
  spots.push({
    id: `${opts.id}-chest`,
    x: Math.max(2, sx - 3),
    y: Math.max(2, sy - 2),
    label: "Скриня",
    kind: "chest",
  });
  return {
    id: opts.id,
    name: opts.name,
    region: opts.region,
    weather: bio.weather,
    rows: g.map((r) => r.join("")),
    spawns: { default: { x: sx, y: sy }, back: { x: sx, y: sy }, exit: { x: ex, y: ey } },
    spots,
    fights,
  };
}

function biomePair(biome: string): [string, string] {
  const table: Record<string, [string, string]> = {
    moss: ["gnat", "drowned"],
    amber: ["salt", "ashling"],
    glass: ["mirror", "wraith"],
    red: ["banner", "leech"],
    shore: ["tide", "chorister"],
    ash: ["spark", "salt"],
    verge: ["spark", "mirror"],
  };
  return table[biome] ?? ["drowned", "wraith"];
}

function biomeBoss(biome: string) {
  const table: Record<string, string> = {
    moss: "reedchoir",
    amber: "stag",
    glass: "saint",
    red: "oath",
    shore: "tidebell",
    ash: "ashking",
    verge: "firstbell",
  };
  return table[biome] ?? "bellringer";
}

const PIT_FLOORS: { a: string; an: number; b: string; bn: number; boss?: string }[] = [
  { a: "reed", an: 4, b: "gnat", bn: 3 },
  { a: "drowned", an: 3, b: "gnat", bn: 3 },
  { a: "sludge", an: 2, b: "wraith", bn: 3 },
  { a: "salt", an: 2, b: "ashling", bn: 2, boss: "stag" },
  { a: "leech", an: 3, b: "lurker", bn: 2 },
  { a: "chorister", an: 3, b: "banner", bn: 2 },
  { a: "mirror", an: 3, b: "tide", bn: 2 },
  { a: "spark", an: 2, b: "salt", bn: 2, boss: "oath" },
  { a: "lurker", an: 3, b: "mirror", bn: 2 },
  { a: "banner", an: 3, b: "spark", bn: 2 },
  { a: "tide", an: 3, b: "chorister", bn: 2 },
  { a: "spark", an: 3, b: "leech", bn: 2, boss: "firstbell" },
];

export function buildPit(floor: number): GameMap {
  const f = Math.max(1, Math.min(PIT_FLOORS.length, floor));
  const spec = PIT_FLOORS[f - 1]!;
  const W = 30;
  const H = 22;
  const ground = f >= 9 ? "a" : f >= 6 ? "g" : f >= 3 ? "m" : ".";
  const rows = Array.from({ length: H }, () => "#".repeat(W));
  const paint = (x: number, y: number, w: number, h: number, ch: string) => {
    for (let yy = y; yy < y + h && yy < H; yy++) {
      const chars = rows[yy]!.split("");
      for (let xx = x; xx < x + w && xx < W; xx++) if (xx >= 0) chars[xx] = ch;
      rows[yy] = chars.join("");
    }
  };
  paint(2, 2, W - 4, H - 4, ground);
  paint(7, 6, 4, 3, "H");
  paint(19, 6, 4, 3, "H");
  paint(7, 13, 4, 3, "H");
  paint(19, 13, 4, 3, "H");
  paint(12, 2, 6, H - 4, ground);
  paint(2, 9, W - 4, 4, ground);
  const fights: Fight[] = [
    { id: `pit-${f}-a`, x: 3, y: 3, w: 6, h: 4, foes: [{ id: spec.a, n: spec.an }] },
    { id: `pit-${f}-b`, x: 20, y: 14, w: 7, h: 4, foes: [{ id: spec.b, n: spec.bn }] },
  ];
  if (spec.boss) {
    fights.push({ id: `pit-${f}-boss`, x: 11, y: 3, w: 8, h: 4, foes: [{ id: spec.boss, n: 1 }, { id: spec.b, n: 1 }] });
  }
  return {
    id: `pit-${f}`,
    name: `Колодязь, поверх ${f}`,
    region: "grey",
    weather: f >= 8 ? "ash" : f >= 4 ? "fog" : "rain",
    spawns: { default: { x: 15, y: 18 }, south: { x: 15, y: 18 } },
    rows,
    spots: [
      { id: "pit-out", x: 15, y: 19, label: "Нагору, у варту", kind: "exit", ref: "pit-out" },
      { id: "pit-down", x: 15, y: 3, label: f >= PIT_FLOORS.length ? "Дно колодязя" : "Сходи глибше", kind: "exit", ref: "pit-down" },
      { id: "pit-rest", x: 4, y: 18, label: "Жаровня", kind: "rest" },
    ],
    fights,
  };
}

function bossName(region: string) {
  const names: Record<string, string> = {
    moss: "Хор очерету",
    amber: "Смоляний олень",
    glass: "Скляний святий",
    red: "Порушник клятви",
    shore: "Дзвін без місяця",
    ash: "Попелястий король",
    verge: "Перший дзвін",
  };
  return names[region] ?? "Відлуння";
}

function packName(biome: string, i: number) {
  const table: Record<string, [string, string]> = {
    moss: ["Моховий потопелець", "Болотний хор"],
    amber: ["Смоляний вартовий", "Бурштинова тінь"],
    glass: ["Скляний двійник", "Дзвоник дзеркал"],
    red: ["Прапороносець", "Попіл клятви"],
    shore: ["Припливний раб", "Мокрий хор"],
    ash: ["Попелястий лицар", "Іскра корони"],
    verge: ["Уламок відлуння", "Хорист межі"],
  };
  const pair = table[biome] ?? ["Відлуння", "Тінь"];
  return pair[i % 2]!;
}
