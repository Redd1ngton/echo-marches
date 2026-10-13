type Spot = {
  id: string;
  x: number;
  y: number;
  label: string;
  kind: "talk" | "rest" | "shop" | "lever" | "chest" | "exit" | "bell" | "stone" | "board" | "travel" | "fight";
  ref?: string;
};
type Fight = { id: string; x: number; y: number; w: number; h: number; foes: { id: string; n: number; name?: string }[]; calm?: boolean };
type Map = {
  id: string;
  name: string;
  region: string;
  weather: "rain" | "fog" | "clear" | "ash";
  rows: string[];
  spawns: Record<string, { x: number; y: number }>;
  spots: Spot[];
  fights: Fight[];
};

function grid(w: number, h: number, fill: string) {
  return Array.from({ length: h }, () => fill.repeat(w));
}

function stamp(rows: string[], x: number, y: number, w: number, h: number, ch: string) {
  for (let yy = y; yy < y + h; yy++) {
    const line = rows[yy];
    if (!line) continue;
    const chars = line.split("");
    for (let xx = x; xx < x + w; xx++) {
      if (xx < 0 || xx >= chars.length) continue;
      chars[xx] = ch;
    }
    rows[yy] = chars.join("");
  }
}

function edge(rows: string[]) {
  const h = rows.length;
  const w = rows[0]?.length ?? 0;
  stamp(rows, 0, 0, w, 1, "#");
  stamp(rows, 0, h - 1, w, 1, "#");
  stamp(rows, 0, 0, 1, h, "#");
  stamp(rows, w - 1, 0, 1, h, "#");
}

function trees(rows: string[], pts: [number, number][]) {
  for (const [x, y] of pts) stamp(rows, x, y, 1, 1, "T");
}

export function buildWillow(): Map {
  const W = 72;
  const H = 56;
  const rows = grid(W, H, ".");
  edge(rows);
  const houses: [number, number, number, number][] = [
    [3, 3, 14, 8],
    [20, 3, 8, 6],
    [42, 3, 16, 8],
    [3, 14, 10, 6],
    [46, 16, 18, 8],
    [4, 32, 14, 8],
    [40, 34, 16, 8],
    [22, 40, 12, 6],
  ];
  for (const [x, y, w, h] of houses) stamp(rows, x, y, w, h, "H");
  stamp(rows, 30, 2, 6, 52, ".");
  stamp(rows, 2, 22, 68, 5, ".");
  stamp(rows, 8, 44, 18, 6, '"');
  stamp(rows, 48, 44, 16, 6, '"');
  stamp(rows, 6, 46, 6, 3, "~");
  stamp(rows, 54, 46, 5, 3, ",");
  for (let i = 0; i < 12; i++) stamp(rows, 32, 6 + i * 4, 1, 1, "F");
  trees(rows, [
    [16, 12], [18, 13], [38, 12], [40, 14], [8, 30], [12, 30], [58, 30], [62, 31],
    [16, 42], [36, 46], [28, 48], [50, 42], [64, 40], [6, 50], [66, 50], [20, 50],
  ]);
  stamp(rows, 70, 24, 1, 1, ".");
  return {
    id: "willow",
    name: "Вербова варта",
    region: "grey",
    weather: "clear",
    spawns: { default: { x: 33, y: 24 }, south: { x: 33, y: 48 }, gate: { x: 64, y: 24 } },
    rows,
    spots: [
      { id: "marta", x: 26, y: 20, label: "Марта", kind: "talk", ref: "marta" },
      { id: "rest", x: 24, y: 20, label: "Ліжко", kind: "rest" },
      { id: "shop", x: 26, y: 28, label: "Крамниця", kind: "shop" },
      { id: "board", x: 36, y: 26, label: "Дошка найму", kind: "board" },
      { id: "iva", x: 34, y: 18, label: "Іва", kind: "talk", ref: "iva" },
      { id: "lada", x: 38, y: 20, label: "Лада", kind: "talk", ref: "lada" },
      { id: "dorin", x: 30, y: 30, label: "Дорин", kind: "talk", ref: "dorin" },
      { id: "bren", x: 60, y: 24, label: "Брен", kind: "talk", ref: "bren" },
      { id: "gate", x: 68, y: 24, label: "Брама на тракт", kind: "exit", ref: "tract" },
      { id: "light1", x: 22, y: 24, label: "Вербовий вогонь", kind: "talk", ref: "light" },
      { id: "light2", x: 44, y: 24, label: "Вербовий вогонь", kind: "talk", ref: "light" },
      { id: "light3", x: 33, y: 36, label: "Третій вогонь", kind: "talk", ref: "light" },
      { id: "perch", x: 14, y: 44, label: "Сідало сов", kind: "talk", ref: "perch" },
      { id: "atlas", x: 36, y: 32, label: "Скриня маршів", kind: "travel" },
      { id: "yard-sign", x: 33, y: 46, label: "Навчальний двір", kind: "talk", ref: "yard" },
      { id: "pit-door", x: 50, y: 48, label: "Колодязь прокачки", kind: "exit", ref: "pit" },
    ],
    fights: [
      { id: "willow-drill", x: 30, y: 48, w: 8, h: 4, calm: true, foes: [{ id: "reed", n: 2, name: "Вартовий двір" }] },
    ],
  };
}

export function buildTract(): Map {
  const W = 64;
  const H = 44;
  const rows = grid(W, H, '"');
  edge(rows);
  stamp(rows, 4, 16, 56, 4, ".");
  stamp(rows, 28, 2, 5, 40, ".");
  stamp(rows, 0, 18, 64, 2, "W");
  stamp(rows, 28, 18, 5, 2, "x");
  stamp(rows, 8, 8, 10, 4, "~");
  stamp(rows, 44, 8, 10, 3, "~");
  stamp(rows, 6, 28, 14, 6, "~");
  stamp(rows, 42, 30, 12, 5, ",");
  trees(rows, [
    [6, 6], [10, 6], [14, 5], [48, 6], [54, 7], [8, 26], [12, 34], [50, 26], [56, 34], [20, 36], [36, 38], [18, 12], [40, 12],
  ]);
  for (let i = 0; i < 8; i++) stamp(rows, 8 + i * 6, 17, 1, 1, "L");
  return {
    id: "tract",
    name: "Затоплений тракт",
    region: "grey",
    weather: "rain",
    spawns: { default: { x: 30, y: 28 }, south: { x: 8, y: 17 }, north: { x: 30, y: 6 }, east: { x: 54, y: 17 } },
    rows,
    spots: [
      { id: "back-willow", x: 4, y: 17, label: "Стежка до варти", kind: "exit", ref: "willow" },
      { id: "to-crypt", x: 30, y: 3, label: "Устя крипти", kind: "exit", ref: "crypt" },
      { id: "to-fen", x: 58, y: 17, label: "Стежка в драговину", kind: "exit", ref: "fen" },
      { id: "fisher", x: 52, y: 20, label: "Рибалка", kind: "talk", ref: "fisher" },
      { id: "lever-l", x: 12, y: 14, label: "Лівий шлюз", kind: "lever", ref: "0" },
      { id: "lever-m", x: 30, y: 14, label: "Середній шлюз", kind: "lever", ref: "1" },
      { id: "lever-r", x: 48, y: 14, label: "Правий шлюз", kind: "lever", ref: "2" },
      { id: "slab", x: 30, y: 22, label: "Плита шлюзів", kind: "stone" },
      { id: "chest-tract", x: 14, y: 32, label: "Скриня в мулі", kind: "chest" },
      { id: "ribbon", x: 40, y: 32, label: "Сіра стрічка", kind: "talk", ref: "ribbon" },
      { id: "boot", x: 22, y: 36, label: "Чобіт у мулі", kind: "talk", ref: "boot" },
    ],
    fights: [
      { id: "tract-reeds", x: 8, y: 8, w: 12, h: 6, calm: true, foes: [{ id: "reed", n: 3, name: "Очеретяник" }] },
      { id: "tract-ford", x: 36, y: 24, w: 12, h: 6, foes: [{ id: "drowned", n: 2, name: "Потопельник" }, { id: "sludge", n: 1, name: "Мул броду" }] },
      { id: "tract-south", x: 8, y: 32, w: 18, h: 8, foes: [{ id: "drowned", n: 2, name: "Потопельник" }, { id: "reed", n: 2, name: "Очеретяник" }, { id: "wraith", n: 1, name: "Хорист берега" }] },
      { id: "tract-ambush", x: 26, y: 8, w: 10, h: 6, foes: [{ id: "drowned", n: 2, name: "Засідка" }, { id: "wraith", n: 1, name: "Хорист" }] },
    ],
  };
}

export function buildCrypt(): Map {
  const W = 46;
  const H = 42;
  const rows = grid(W, H, "#");
  stamp(rows, 4, 34, 38, 6, ".");
  stamp(rows, 20, 6, 6, 34, ".");
  stamp(rows, 6, 6, 14, 8, ".");
  stamp(rows, 26, 6, 14, 8, ".");
  stamp(rows, 6, 18, 12, 8, "c");
  stamp(rows, 28, 18, 12, 8, "c");
  stamp(rows, 16, 18, 14, 8, ".");
  stamp(rows, 20, 4, 6, 2, "D");
  trees(rows, []);
  for (const [x, y] of [[8, 36], [36, 36], [22, 28], [22, 16]] as [number, number][]) stamp(rows, x, y, 1, 1, "B");
  return {
    id: "crypt",
    name: "Крипта дзвонаря",
    region: "grey",
    weather: "fog",
    spawns: { default: { x: 22, y: 36 }, south: { x: 22, y: 36 } },
    rows,
    spots: [
      { id: "crypt-back", x: 22, y: 38, label: "Назад на тракт", kind: "exit", ref: "tract" },
      { id: "ostap", x: 10, y: 22, label: "Остап", kind: "talk", ref: "ostap" },
      { id: "sexton", x: 34, y: 22, label: "Паламар", kind: "talk", ref: "sexton" },
      { id: "bell-a", x: 8, y: 8, label: "Крапля", kind: "bell", ref: "0" },
      { id: "bell-b", x: 22, y: 8, label: "Попіл", kind: "bell", ref: "2" },
      { id: "bell-c", x: 36, y: 8, label: "Верба", kind: "bell", ref: "1" },
      { id: "inscript", x: 22, y: 14, label: "Напис", kind: "stone" },
      { id: "to-nave", x: 22, y: 5, label: "Двері нави", kind: "exit", ref: "nave" },
      { id: "crypt-chest", x: 12, y: 20, label: "Скриня хору", kind: "chest" },
    ],
    fights: [
      { id: "crypt-west", x: 6, y: 18, w: 12, h: 8, foes: [{ id: "wraith", n: 2, name: "Хорист" }, { id: "chorister", n: 1, name: "Співець" }] },
      { id: "crypt-east", x: 28, y: 18, w: 12, h: 8, calm: true, foes: [{ id: "chorister", n: 2, name: "Співець" }] },
      { id: "crypt-boss", x: 16, y: 6, w: 14, h: 8, foes: [{ id: "bellringer", n: 1, name: "Дзвонар" }, { id: "wraith", n: 2, name: "Хорист" }] },
    ],
  };
}

export function buildFen(): Map {
  const W = 58;
  const H = 40;
  const rows = grid(W, H, '"');
  edge(rows);
  stamp(rows, 4, 18, 50, 4, ".");
  stamp(rows, 26, 4, 5, 32, "~");
  stamp(rows, 8, 6, 12, 6, "~");
  stamp(rows, 38, 8, 12, 5, "~");
  stamp(rows, 10, 28, 16, 6, ",");
  stamp(rows, 36, 28, 14, 6, ",");
  trees(rows, [
    [6, 8], [16, 10], [44, 8], [50, 12], [8, 24], [48, 24], [20, 32], [40, 34], [14, 16], [42, 16],
  ]);
  return {
    id: "fen",
    name: "Мохова драговина",
    region: "moss",
    weather: "fog",
    spawns: { default: { x: 6, y: 19 }, south: { x: 6, y: 19 } },
    rows,
    spots: [
      { id: "fen-back", x: 3, y: 19, label: "Назад на тракт", kind: "exit", ref: "tract" },
      { id: "fen-witch", x: 16, y: 16, label: "Жінка з очерету", kind: "talk", ref: "reedwife" },
      { id: "fen-chest", x: 44, y: 30, label: "Скриня низин", kind: "chest" },
    ],
    fights: [
      { id: "fen-reed", x: 10, y: 8, w: 14, h: 8, foes: [{ id: "lurker", n: 2, name: "Драговинник" }, { id: "reed", n: 2, name: "Очеретяник" }] },
      { id: "fen-east", x: 36, y: 22, w: 14, h: 8, calm: true, foes: [{ id: "sludge", n: 2, name: "Мул" }, { id: "wraith", n: 1, name: "Туманний хор" }] },
      { id: "fen-boss", x: 24, y: 6, w: 12, h: 8, foes: [{ id: "fenmother", n: 1, name: "Мати очерету" }, { id: "lurker", n: 2, name: "Драговинник" }] },
    ],
  };
}

export function buildNave(): Map {
  const W = 42;
  const H = 48;
  const rows = grid(W, H, "#");
  stamp(rows, 16, 4, 10, 40, "c");
  stamp(rows, 6, 10, 30, 8, "c");
  stamp(rows, 6, 28, 30, 8, ".");
  stamp(rows, 8, 40, 26, 5, ".");
  for (const [x, y] of [[10, 32], [30, 32], [20, 16], [12, 12], [28, 12]] as [number, number][]) stamp(rows, x, y, 1, 1, "B");
  return {
    id: "nave",
    name: "Дзвонова нава",
    region: "grey",
    weather: "ash",
    spawns: { default: { x: 20, y: 42 }, south: { x: 20, y: 42 } },
    rows,
    spots: [
      { id: "nave-back", x: 20, y: 44, label: "Вгору в крипту", kind: "exit", ref: "crypt" },
      { id: "nave-chest", x: 10, y: 30, label: "Скриня нави", kind: "chest" },
      { id: "nave-stone", x: 20, y: 24, label: "Імена хору", kind: "talk", ref: "nave-names" },
    ],
    fights: [
      { id: "nave-aisle", x: 8, y: 28, w: 26, h: 8, foes: [{ id: "chorister", n: 3, name: "Співець нави" }, { id: "wraith", n: 1, name: "Хорист" }] },
      { id: "nave-loft", x: 8, y: 10, w: 26, h: 8, calm: true, foes: [{ id: "chorister", n: 2, name: "Верхній спів" }] },
      { id: "nave-boss", x: 14, y: 4, w: 14, h: 8, foes: [{ id: "cantor", n: 1, name: "Кантор" }, { id: "chorister", n: 2, name: "Співець" }] },
    ],
  };
}
