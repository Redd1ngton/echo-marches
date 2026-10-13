import {
  ENEMIES,
  HEROES,
  ITEMS,
  PATHS,
  QUESTS,
  REGIONS,
  SKILLS,
  STATS,
  TALK,
  itemById,
  pathChoices,
  rumorNode,
  skillsFor,
  starterWeapon,
  type Choice,
  type DNode,
  type HeroId,
  type Skill,
  type Stat,
  type StatusId,
} from "./content";
import { HAND, TILE, blocked, buildPit, generateSite, storyRoad, tileChar, type Fight, type GameMap, type Spot } from "./maps";
import { SETS } from "./saga";

export { TILE };

export type Mode =
  | "title"
  | "explore"
  | "talk"
  | "combat"
  | "reward"
  | "sheet"
  | "journal"
  | "shop"
  | "hire"
  | "travel"
  | "path"
  | "epilogue";

export type Hero = {
  uid: string;
  hero: HeroId;
  name: string;
  level: number;
  xp: number;
  unspent: number;
  stats: Record<Stat, number>;
  hp: number;
  maxHp: number;
  focus: number;
  maxFocus: number;
  weapon: string;
  armor: string;
  trinket: string;
  bag: { id: string; n: number }[];
  known: string[];
  loadout: string[];
  quick: [string, string];
  paths: string[];
  merc: boolean;
  gold: number;
  skillPts: number;
  ranks: Record<string, number>;
};

export type StatusInst = { id: StatusId; turns: number; pot: number; src?: string };

export type Plan = {
  moveX: number;
  moveY: number;
  action: "attack" | "skill" | "guard" | "item" | "wait";
  target?: string;
  skill?: string;
  slot?: 0 | 1;
};

export type Intent =
  | { kind: "attack"; target: string; label: string }
  | { kind: "slam"; label: string }
  | { kind: "summon"; label: string }
  | { kind: "wait"; label: string };

export type Unit = {
  uid: string;
  name: string;
  sprite: string;
  side: "ally" | "foe";
  hero?: HeroId;
  enemyId?: string;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  focus: number;
  maxFocus: number;
  move: number;
  range: number;
  def: number;
  dmg: number;
  die: number;
  acc: number;
  primary: Stat;
  stats: Record<Stat, number>;
  statuses: StatusInst[];
  boss?: boolean;
  didSummon?: boolean;
  ranged?: boolean;
  leech: number;
  ready: boolean;
  plan: Plan | null;
  intent: Intent | null;
  intentTo: { x: number; y: number } | null;
  heroUid?: string;
  quickLeft: [boolean, boolean];
  facing: number;
};

export type Shot = { x: number; y: number; tx: number; ty: number; row: number; t: number; dur: number };
export type FloatText = { x: number; y: number; text: string; color: string; t: number };
export type Mob = {
  uid: string;
  fight: string;
  name: string;
  sprite: string;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  dmg: number;
  range: number;
  cd: number;
  xp: number;
  gold: number;
  facing: number;
  hold?: boolean;
  level: number;
  role: string;
  wind: number;
  hx: number;
  hy: number;
  hue?: number;
};

export type Folk = {
  id: string;
  x: number;
  y: number;
  hx: number;
  hy: number;
  tx: number;
  ty: number;
  facing: number;
  sprite: string;
  label: string;
  spot: string;
  ref?: string;
  moving: boolean;
  wait: number;
};

export type Anim = { kind: "idle" | "attack" | "hurt" | "defend" | "death" | "cast"; t: number; dx: number; dy: number };

type SaveBlob = {
  v: 1;
  hardcore: boolean;
  seed: number;
  mapId: string;
  x: number;
  y: number;
  facing: number;
  flags: Record<string, number>;
  quests: Record<string, number>;
  cleared: string[];
  opened: string[];
  levers: number[];
  bells: number[];
  sites: Record<string, GameMap>;
  siteKind: Record<string, string>;
  party: Hero[];
  log: string[];
};

const KEY = "echo-save-v1";
const HC = "echo-hardcore-v1";

export const keys = new Set<string>();

export const G = {
  rev: 0,
  mode: "title" as Mode,
  hardcore: false,
  seed: 1,
  epitaph: "",
  map: HAND.willow as GameMap,
  x: 0,
  y: 0,
  facing: 0,
  yaw: 0,
  viewYaw: 0,
  zoom: 1,
  viewZoom: 1,
  speed: 0,
  party: [] as Hero[],
  flags: {} as Record<string, number>,
  quests: {} as Record<string, number>,
  cleared: [] as string[],
  opened: [] as string[],
  levers: [0, 0, 0] as number[],
  bells: [] as number[],
  sites: {} as Record<string, GameMap>,
  siteKind: {} as Record<string, string>,
  log: [] as string[],
  stick: { x: 0, y: 0 },
  path: [] as { x: number; y: number }[],
  talkId: null as string | null,
  talkExtra: "",
  reward: null as null | { title: string; lines: string[] },
  units: [] as Unit[],
  round: 1,
  phase: "plan" as "plan" | "resolve",
  planner: 0,
  fightId: "",
  fightBack: { x: 0, y: 0 },
  shots: [] as Shot[],
  floats: [] as FloatText[],
  anim: {} as Record<string, Anim>,
  time: 0,
  grace: 0,
  since: 0,
  aim: null as null | { kind: "attack" | "skill"; skill?: string },
  epilogue: "",
  reduced: false,
  queue: [] as { who: string; run: () => void }[],
  beat: 0,
  walk: 0,
  moving: false,
  lastRoll: "",
  mobs: [] as Mob[],
  folk: [] as Folk[],
  pending: "",
  back: {} as Record<string, number>,
  atkCd: 0,
  skillCd: {} as Record<string, number>,
  swing: 0,
  atkHold: false,
  lockTarget: false,
  target: "",
  hunt: false,
  uiAcc: 0,
};

const listeners = new Set<() => void>();

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function bump() {
  G.rev++;
  for (const fn of listeners) fn();
}

function log(s: string) {
  G.log.unshift(s);
  if (G.log.length > 40) G.log.length = 40;
}

export function leader() {
  return G.party[0] ?? null;
}

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export function xpNeed(level: number) {
  return 36 + level * 22;
}

function blankStats(): Record<Stat, number> {
  return { str: 8, dex: 8, end: 8, int: 8, wil: 8, per: 8 };
}

export function recalc(h: Hero) {
  const def = HEROES[h.hero];
  h.maxHp = def.hp + h.stats.end * 3 + (h.level - 1) * 2;
  h.maxFocus = 6 + Math.floor(h.stats.wil / 2);
  h.hp = Math.min(h.hp, h.maxHp);
  h.focus = Math.min(h.focus, h.maxFocus);
}

export function pathMods(h: Hero) {
  const m = { dmg: 0, heal: 0, crit: 0, acc: 0, armor: 0, leech: 0, aoe: 0, power: 0 };
  for (const id of h.paths) {
    const n = PATHS.find((p) => p.id === id);
    if (!n) continue;
    m.dmg += n.dmg;
    m.heal += n.heal;
    m.crit += n.crit;
    m.acc += n.acc;
    m.armor += n.armor;
    m.leech += n.leech;
    m.aoe += n.aoe;
    m.power += n.power;
  }
  return m;
}

function setBonus(h: Hero) {
  const ids = [h.weapon, h.armor, h.trinket];
  let acc = 0;
  let power = 0;
  const has = (a: string, b: string) => ids.includes(a) && ids.includes(b);
  if ((has("w-bow2", "t-cloak") || has("w-bow-night", "t-cloak"))) acc += 1;
  if (has("w-myth", "t-echo")) power += 2;
  const worn = (setId: string) => {
    const set = SETS.find((s) => s.id === setId);
    return set ? set.pieces.filter((p) => ids.includes(p)).length : 0;
  };
  if (worn("reed") >= 2) acc += 1;
  if (worn("sluice") >= 2) power += 1;
  if (worn("nave") >= 2) power += 1;
  return { acc, power };
}

export function gearMods(h: Hero) {
  const w = itemById(h.weapon);
  const a = itemById(h.armor);
  const t = itemById(h.trinket);
  const set = setBonus(h);
  const pm = pathMods(h);
  let armor = a?.armorN ?? 0;
  let power = (w?.power ?? 0) + (t?.power ?? 0) + set.power;
  let acc = (w?.acc ?? 0) + (t?.acc ?? 0) + set.acc;
  const stats = { ...h.stats };
  for (const it of [w, a, t]) {
    if (!it?.stat) continue;
    for (const k of STATS) stats[k] += it.stat[k] ?? 0;
  }
  armor += pm.armor + Math.floor(stats.end / 6);
  acc += pm.acc;
  power += Math.round(pm.power / 2);
  return { armor, power, acc, stats, pm };
}

export function skillById(h: Hero | null, id: string): Skill | undefined {
  const base = SKILLS.find((s) => s.id === id);
  if (base) return base;
  if (!h || !id.startsWith("cap-")) return undefined;
  const node = PATHS.find((p) => `cap-${p.id}` === id);
  if (!node) return undefined;
  const heal = node.heal >= node.dmg && node.heal > 0;
  return {
    id,
    hero: h.hero,
    name: node.name,
    blurb: node.text,
    kind: heal ? "heal" : "dmg",
    target: heal ? "ally" : "enemy",
    range: HEROES[h.hero].range,
    radius: node.aoe > 0 ? 1 : 0,
    focus: 3,
    power: Math.max(4, node.power),
    die: heal ? 0 : 8,
    stat: HEROES[h.hero].primary,
    acc: node.acc,
    reliable: heal,
    leech: node.leech ? node.leech / 100 : undefined,
    cap: true,
  };
}

function makeHero(hero: HeroId, merc: boolean, level: number): Hero {
  const def = HEROES[hero];
  const stats = blankStats();
  for (const k of def.rec) stats[k] += 1;
  const known = skillsFor(hero).map((s) => s.id);
  const h: Hero = {
    uid: uid(hero),
    hero,
    name: def.name,
    level,
    xp: 0,
    unspent: 0,
    stats,
    hp: 1,
    maxHp: 1,
    focus: 1,
    maxFocus: 1,
    weapon: starterWeapon(hero),
    armor: "",
    trinket: "",
    bag: [
      { id: "pot", n: 3 },
      { id: "ton", n: 1 },
    ],
    known,
    loadout: known.slice(0, 4),
    quick: ["pot", "ton"],
    paths: [],
    merc,
    gold: merc ? 0 : 24,
    skillPts: Math.max(0, level - 1),
    ranks: Object.fromEntries(known.map((id) => [id, 1])),
  };
  recalc(h);
  h.hp = h.maxHp;
  h.focus = h.maxFocus;
  return h;
}

function addItem(h: Hero, id: string, n: number) {
  const it = itemById(id);
  if (!it) return;
  if (it.slot !== "consumable" && h.bag.some((b) => b.id === id)) return;
  const row = h.bag.find((b) => b.id === id);
  if (row) row.n += n;
  else h.bag.push({ id, n });
}

function takeItem(h: Hero, id: string) {
  const row = h.bag.find((b) => b.id === id);
  if (!row || row.n <= 0) return false;
  row.n -= 1;
  if (row.n <= 0) h.bag = h.bag.filter((b) => b.n > 0);
  return true;
}

export function ensureGrowth(h: Hero) {
  if (!h.ranks) h.ranks = {};
  for (const id of h.known) if (!h.ranks[id]) h.ranks[id] = 1;
  if (typeof h.skillPts !== "number") h.skillPts = Math.max(0, h.level - 1);
}

export function skillRank(h: Hero, id: string) {
  ensureGrowth(h);
  return Math.max(1, Math.min(5, h.ranks[id] ?? 1));
}

export function rankedPower(h: Hero, power: number, id: string) {
  const rank = skillRank(h, id);
  return Math.max(0, Math.round(power * (1 + (rank - 1) * 0.15)));
}

export function raiseSkill(uid: string, id: string) {
  const h = G.party.find((p) => p.uid === uid);
  if (!h || !h.known.includes(id)) return;
  const cur = skillRank(h, id);
  if (cur >= 5 || h.skillPts < 1) {
    log(cur >= 5 ? "Це вміння вже на п'ятому ранзі." : "Немає очок вмінь. Вони приходять з рівнем.");
    bump();
    return;
  }
  h.skillPts -= 1;
  h.ranks[id] = cur + 1;
  const sk = skillById(h, id);
  log(`${h.name}: ${sk?.name ?? "вміння"} тепер ${cur + 1} рангу.`);
  persist();
  bump();
}

export function grantXp(h: Hero, n: number) {
  if (n <= 0 || h.level >= 85) return;
  ensureGrowth(h);
  h.xp += n;
  let up = false;
  while (h.level < 85 && h.xp >= xpNeed(h.level)) {
    h.xp -= xpNeed(h.level);
    h.level += 1;
    h.unspent += 5;
    h.skillPts += 1;
    up = true;
  }
  if (up) {
    recalc(h);
    h.hp = h.maxHp;
    h.focus = h.maxFocus;
    log(`${h.name} досягає ${h.level} рівня.`);
    offerPath();
  }
}

export function nextGate(h: Hero): 20 | 40 | 60 | 85 | null {
  const gates = [20, 40, 60, 85] as const;
  for (const at of gates) {
    if (h.level >= at && !h.paths.some((id) => PATHS.find((p) => p.id === id && p.at === at))) return at;
  }
  return null;
}

function offerPath() {
  if (G.epilogue || G.mode === "title" || G.mode === "combat" || G.mode === "talk" || G.mode === "path") return;
  if (!G.party.some((p) => nextGate(p))) return;
  G.mode = "path";
}

export function gateParent(h: Hero, at: 20 | 40 | 60 | 85) {
  if (at === 20) return null;
  const prev = at === 40 ? 20 : at === 60 ? 40 : 60;
  return h.paths.find((id) => PATHS.find((p) => p.id === id && p.at === prev)) ?? null;
}

function setQuest(spec: string) {
  const [id, st] = spec.split(":");
  if (!id || st == null) return;
  const n = Number(st);
  const cur = G.quests[id] ?? 0;
  if (cur === 999) return;
  if (n === 999 || n > cur) G.quests[id] = n;
}

function applyFlag(f: string) {
  if (f === "light-one") {
    G.flags.lights = (G.flags.lights ?? 0) + 1;
    if (G.flags.lights >= 3) setQuest("q-lights:999");
    return;
  }
  G.flags[f] = 1;
  if (f === "road-open") log("Східні марші відкриті.");
  if (f === "ending-seal") G.epilogue = "Ти запечатав язик. Марші забудуть цей цикл. Герої — ні.";
  if (f === "ending-ring") G.epilogue = "Ти вдарив у тріщину. Відлуння лишились і відповідають живим.";
}

function blob(): SaveBlob {
  return {
    v: 1,
    hardcore: G.hardcore,
    seed: G.seed,
    mapId: G.map.id,
    x: G.x,
    y: G.y,
    facing: G.facing,
    flags: G.flags,
    quests: G.quests,
    cleared: G.cleared,
    opened: G.opened,
    levers: G.levers,
    bells: G.bells,
    sites: G.sites,
    siteKind: G.siteKind,
    party: G.party,
    log: G.log.slice(0, 20),
  };
}

export function persist() {
  if (G.mode === "combat" || G.mode === "title") return;
  if (typeof localStorage === "undefined") return;
  try {
    const raw = JSON.stringify(blob());
    const k = G.hardcore ? HC : KEY;
    localStorage.setItem(k, raw);
    localStorage.setItem(`${k}-bak`, raw);
  } catch {
    /* quota */
  }
}

export function saveExists(hard: boolean) {
  if (typeof localStorage === "undefined") return false;
  const k = hard ? HC : KEY;
  return !!(localStorage.getItem(k) || localStorage.getItem(`${k}-bak`));
}

function mapById(id: string): GameMap | null {
  return HAND[id] ?? G.sites[id] ?? null;
}

function folkSprite(s: Spot) {
  if (s.ref === "marta") return "marta";
  if (s.ref === "lada" || s.ref === "reedwife") return "witch";
  if (s.ref === "bren" || s.ref === "dorin" || s.ref === "sexton") return "paladin";
  if (s.ref === "ostap") return "assassin";
  if (s.kind === "shop" || s.ref === "iva" || s.ref === "fisher") return "herbalist";
  if (s.kind === "talk" && s.ref && s.ref !== "light" && s.ref !== "ribbon" && s.ref !== "boot" && s.ref !== "yard" && s.ref !== "nave-names" && s.ref !== "perch") return "witch";
  return "";
}

function spawnFolk() {
  G.folk = [];
  for (const s of G.map.spots) {
    const sprite = folkSprite(s);
    if (!sprite) continue;
    const x = (s.x + 0.5) * TILE;
    const y = (s.y + 0.92) * TILE;
    G.folk.push({
      id: s.id,
      x,
      y,
      hx: x,
      hy: y,
      tx: x,
      ty: y,
      facing: 0,
      sprite,
      label: s.label,
      spot: s.id,
      ref: s.ref,
      moving: false,
      wait: 1 + (s.x % 4),
    });
  }
}

function place(map: GameMap, spawn: string) {
  G.map = map;
  const s = map.spawns[spawn] ?? map.spawns.default ?? { x: 2, y: 2 };
  G.x = (s.x + 0.5) * TILE;
  G.y = (s.y + 0.5) * TILE;
  G.path = [];
  G.pending = "";
  G.mobs = [];
  G.grace = 0.7;
  G.mode = "explore";
  spawnFolk();
  spawnPacks();
}

export function beginGame(hero: HeroId, hardcore: boolean) {
  G.hardcore = hardcore;
  G.seed = (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
  G.epitaph = "";
  G.party = [makeHero(hero, false, 1)];
  G.flags = {};
  G.quests = { "q-road": 0 };
  G.cleared = [];
  G.opened = [];
  G.levers = [0, 0, 0];
  G.bells = [];
  G.sites = {};
  G.siteKind = {};
  G.log = [];
  G.units = [];
  G.epilogue = "";
  G.facing = 0;
  place(HAND.willow as GameMap, "default");
  log("Вербова варта. Дощ не питає імен.");
  persist();
  bump();
}

export function loadGame(hard: boolean) {
  if (typeof localStorage === "undefined") return false;
  const k = hard ? HC : KEY;
  const raw = localStorage.getItem(k) || localStorage.getItem(`${k}-bak`);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw) as SaveBlob;
    if (data.v !== 1 || !data.party?.length) return false;
    G.hardcore = !!data.hardcore;
    G.seed = data.seed >>> 0;
    G.flags = data.flags ?? {};
    G.quests = data.quests ?? {};
    G.cleared = data.cleared ?? [];
    G.opened = data.opened ?? [];
    G.levers = data.levers?.length === 3 ? data.levers : [0, 0, 0];
    G.bells = data.bells ?? [];
    G.sites = data.sites ?? {};
    G.siteKind = data.siteKind ?? {};
    G.party = data.party;
    for (const h of G.party) ensureGrowth(h);
    G.log = data.log ?? [];
    G.units = [];
    G.epilogue = "";
    G.map = mapById(data.mapId) ?? (HAND.willow as GameMap);
    G.x = data.x;
    G.y = data.y;
    G.facing = data.facing ?? 0;
    G.path = [];
    const here = { x: Math.floor(G.x / TILE), y: Math.floor(G.y / TILE) };
    if (blocked(G.map, here.x, here.y, G.flags)) {
      const s = G.map.spawns.default ?? { x: 2, y: 2 };
      G.x = (s.x + 0.5) * TILE;
      G.y = (s.y + 0.5) * TILE;
    }
    G.grace = 0.7;
    G.mode = "explore";
    offerPath();
    spawnFolk();
    spawnPacks();
    bump();
    return true;
  } catch {
    return false;
  }
}

export function newEcho() {
  const party = G.party;
  const hard = G.hardcore;
  G.seed = ((G.seed + 997) ^ Math.floor(Math.random() * 1e9)) >>> 0;
  G.hardcore = hard;
  G.party = party;
  G.flags = {};
  G.quests = { "q-road": 0 };
  G.cleared = [];
  G.opened = [];
  G.levers = [0, 0, 0];
  G.bells = [];
  G.sites = {};
  G.siteKind = {};
  G.epilogue = "";
  place(HAND.willow as GameMap, "default");
  log("Новий цикл. Герої пам'ятають. Світ — ні.");
  persist();
  bump();
}

function tileOf(px: number, py: number) {
  return { x: Math.floor(px / TILE), y: Math.floor(py / TILE) };
}

function canWalk(x: number, y: number) {
  return !blocked(G.map, x, y, G.flags);
}

function route(tx: number, ty: number) {
  const s = tileOf(G.x, G.y);
  if (s.x === tx && s.y === ty) return [];
  const w = G.map.rows[0]?.length ?? 0;
  const h = G.map.rows.length;
  const key = (x: number, y: number) => y * w + x;
  const q = [s];
  const prev = new Map<number, number>();
  prev.set(key(s.x, s.y), -1);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const;
  while (q.length) {
    const c = q.shift()!;
    if (c.x === tx && c.y === ty) break;
    for (const [dx, dy] of dirs) {
      const nx = c.x + dx;
      const ny = c.y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const k = key(nx, ny);
      if (prev.has(k) || !canWalk(nx, ny)) continue;
      prev.set(k, key(c.x, c.y));
      q.push({ x: nx, y: ny });
    }
  }
  if (!prev.has(key(tx, ty))) return [];
  const out: { x: number; y: number }[] = [];
  let cur = key(tx, ty);
  while (cur !== -1 && cur !== key(s.x, s.y)) {
    out.push({ x: cur % w, y: Math.floor(cur / w) });
    cur = prev.get(cur) ?? -1;
    if (out.length > 80) break;
  }
  out.reverse();
  return out;
}

export function spotTaken(s: Spot): boolean {
  const r = s.ref ?? "";
  if (s.kind === "chest") return G.opened.includes(s.id);
  if (r === "ribbon") return !!G.flags["ribbon-found"] || G.opened.includes(s.id);
  if (r === "boot" || r === "tract-boot") return !!G.flags["boot-found"] || G.opened.includes(s.id);
  if (r === "perch") return !!G.flags["owl-feather"] || G.opened.includes(s.id);
  if (r === "wax-niche") return (G.quests["sq-bell-order"] ?? 0) >= 999 || G.opened.includes(s.id);
  if (r === "light") return G.opened.includes(s.id);
  if (r.startsWith("trace-")) {
    const q = `sq-${r.slice(6)}-trace`;
    return (G.quests[q] ?? 0) >= 999 || G.opened.includes(s.id);
  }
  return false;
}

function pickupSpot(s: Spot) {
  const r = s.ref ?? "";
  return s.kind === "chest" || r === "light" || r === "ribbon" || r === "boot" || r === "tract-boot" || r === "perch" || r === "wax-niche" || r.startsWith("trace-");
}

let touchSpot = "";

function claimPickup(took: boolean) {
  if (!took) return;
  const s = G.map.spots.find((p) => p.id === touchSpot);
  if (!s || !pickupSpot(s) || s.kind === "chest") return;
  if (!G.opened.includes(s.id)) G.opened.push(s.id);
}

export function questHot(ref?: string) {
  const map: Record<string, string[]> = {
    marta: ["q-road", "q-back", "q-lights"],
    iva: ["sq-ribbon"],
    lada: ["sq-tray"],
    ostap: ["sq-novice"],
    dorin: ["sq-tuner"],
    bren: ["sq-mud-boot"],
    fisher: ["q-fen"],
    reedwife: ["q-fen"],
    sexton: ["q-nave"],
  };
  const ids = ref ? map[ref] : undefined;
  if (!ids) return false;
  return ids.some((id) => (G.quests[id] ?? 0) < 999);
}

export function nearbySpot(): Spot | null {
  const t = tileOf(G.x, G.y);
  let best: Spot | null = null;
  let bd = 99;
  for (const s of G.map.spots) {
    if (spotTaken(s)) continue;
    const d = Math.max(Math.abs(s.x - t.x), Math.abs(s.y - t.y));
    if (d <= 2 && d < bd) {
      best = s;
      bd = d;
    }
  }
  return best;
}

function talkFor(spot: Spot): string {
  if (spot.ref === "marta") {
    if ((G.quests["q-back"] ?? 0) >= 999) return "marta-done";
    if (G.cleared.includes("crypt-boss")) return "marta-back";
    return "marta";
  }
  if (spot.ref === "light") return G.opened.includes(spot.id) ? "light-spent" : "light";
  if (spot.id === "inscript") return "cryptstone";
  if (spot.kind === "stone") return "stone";
  if (spot.ref === "iva") {
    if ((G.quests["sq-ribbon"] ?? 0) >= 999) return "iva-done";
    if (G.flags["ribbon-found"]) return "iva-back";
    return "iva";
  }
  if (spot.ref?.startsWith("rumor")) return `rumor-${G.map.region}`;
  if (spot.ref && (TALK[spot.ref] || EXTRA[spot.ref])) return spot.ref;
  return "stranger";
}

const EXTRA: Record<string, DNode> = {
  "light-spent": {
    speaker: "Попіл",
    text: "Тут уже тихо. Ім'я згоріло до кінця.",
    choices: [{ label: "Далі.", end: true }],
  },
  yard: {
    speaker: "Дошка двору",
    text: "Південний двір варти. Гості повертаються, коли тиша їм набридає. Тут можна стати сильнішим, не йдучи в крипту.",
    choices: [{ label: "Зрозумів.", end: true }],
  },
  fisher: {
    speaker: "Рибалка",
    text: "Я ловлю те, що ще має зябра. На сході драговина вже говорить людськими іменами. Мати очерету сидить у тумані. Якщо замовкне — принеси мені тишу, не її голову.",
    choices: [{ label: "Піду на схід.", quest: "q-fen:1", end: true }],
  },
  reedwife: {
    speaker: "Жінка з очерету",
    text: "Не ріж стебло, яке ще тримає дорогу. Мати сидить північніше, там де вода не віддзеркалює. Вона договорить твоє ім'я, якщо даси їй час.",
    choices: [{ label: "Не дам.", end: true }],
  },
  sexton: {
    speaker: "Паламар",
    text: "Я тримаю ключі, яких немає. Порядок дзвонів — крапля, попіл, верба. Після нього двері нави самі знають дорогу вниз. Кантор ще співає тих, хто вийшов з варти.",
    choices: [{ label: "Запам'ятаю.", quest: "q-nave:1", end: true }],
  },
  "nave-names": {
    speaker: "Імена хору",
    text: "Тут вирізані імена, які варта більше не кличе вголос. Кантор додає нове, коли хтось нагорі каже «я повернусь».",
    choices: [{ label: "Не називатимусь.", xp: 12, end: true }],
  },
  stranger: {
    speaker: "Перехожий",
    text: "Я не Брен і не повторюю його варту. Якщо шукаєш справу — на дошці найму або в Марти біля печі.",
    choices: [{ label: "Добре.", end: true }],
  },
};

export function currentNode(): DNode | null {
  if (!G.talkId) return null;
  if (G.talkId.startsWith("rumor-")) return rumorNode(G.talkId.slice(6));
  return TALK[G.talkId] ?? EXTRA[G.talkId] ?? null;
}

export function interact() {
  if (G.mode !== "explore") return;
  const spot = nearbySpot();
  if (!spot) {
    log("Поруч нічого, що просить рук.");
    bump();
    return;
  }
  openSpot(spot);
}

function openSpot(spot: Spot) {
  if (G.mode !== "explore") return;
  touchSpot = spot.id;
  if (spotTaken(spot)) {
    log("Тут уже порожньо.");
    bump();
    return;
  }
  if (spot.ref) G.flags[`heard-${spot.ref}`] = 1;
  if (spot.kind === "talk" || spot.kind === "stone") {
    G.talkId = talkFor(spot);
    G.talkExtra = "";
    G.mode = "talk";
    bump();
    return;
  }
  if (spot.kind === "rest") return rest();
  if (spot.kind === "shop") {
    G.mode = "shop";
    bump();
    return;
  }
  if (spot.kind === "board") {
    G.mode = "hire";
    bump();
    return;
  }
  if (spot.kind === "travel") {
    G.mode = "travel";
    bump();
    return;
  }
  if (spot.kind === "lever") {
    const i = Number(spot.ref ?? 0);
    G.levers[i] = G.levers[i] ? 0 : 1;
    const ok = G.levers[0] === 1 && G.levers[1] === 0 && G.levers[2] === 1;
    G.flags.bridge = ok ? 1 : 0;
    log(ok ? "Крайні відкриті, середній спить. Міст згадав себе." : "Вода слухає й не згодна.");
    const t = tileOf(G.x, G.y);
    if (!canWalk(t.x, t.y)) G.y += TILE;
    persist();
    bump();
    return;
  }
  if (spot.kind === "bell") {
    const i = Number(spot.ref ?? 0);
    G.bells.push(i);
    const names = ["крапля", "верба", "попіл"];
    log(`Дзвін: ${names[i] ?? i}.`);
    if (G.bells.length >= 3) {
      const good = G.bells[0] === 0 && G.bells[1] === 2 && G.bells[2] === 1;
      G.bells = [];
      if (good) {
        G.flags.bells = 1;
        setQuest("q-bell:1");
        log("Двері нави відповідають. Порядок: крапля, попіл, верба.");
      } else {
        G.flags.bells = 0;
        log("Хор мовчить. Порядок хибний — дзвони скинуто.");
      }
    }
    persist();
    bump();
    return;
  }
  if (spot.kind === "chest") {
    if (G.opened.includes(spot.id)) {
      log("Скриня вже порожня.");
      bump();
      return;
    }
    G.opened.push(spot.id);
    const L = leader();
    if (L) {
      const tier = REGIONS.find((r) => r.id === G.map.region)?.tier ?? 1;
      const gold = 8 + tier * 6;
      L.gold += gold;
      addItem(L, "pot", 1);
      if (tier >= 2 && Math.random() < 0.45) addItem(L, tier >= 5 ? "a-plate2" : "t-cloak", 1);
      log(`У скрині ${gold} монет і настій.`);
      G.floats.push({ x: (spot.x + 0.5) * TILE, y: (spot.y + 0.4) * TILE, text: `+${gold}`, color: "#e7d7a1", t: 0 });
    }
    persist();
    bump();
    return;
  }
  if (spot.kind === "fight") {
    const f = G.map.fights.find((q) => q.id === (spot.ref ?? ""));
    if (!f || G.cleared.includes(f.id)) {
      log("Тут уже тихо.");
      bump();
      return;
    }
    engage(f);
    return;
  }
  if (spot.kind === "exit") useExit(spot);
}

function useExit(spot: Spot) {
  const ref = spot.ref ?? "";
  if (ref === "pit") {
    enterPit(1);
    return;
  }
  if (ref === "pit-out") {
    place(HAND.willow as GameMap, "default");
    persist();
    bump();
    return;
  }
  if (ref === "pit-down") {
    const floor = Number(G.map.id.split("-")[1] ?? "1");
    const left = G.map.fights.some((f) => !G.cleared.includes(f.id));
    if (left) {
      log("Спершу зачисти цей поверх. Сходи відчиняються після тиші.");
      bump();
      return;
    }
    if (floor >= 12) {
      const L = leader();
      if (L && !G.flags["pit-bottom"]) {
        G.flags["pit-bottom"] = 1;
        grantXp(L, 500);
        L.gold += 120;
        log("Дно колодязя. 500 досвіду і 120 монет зверху.");
      } else log("Дно вже забране. Колодязь можна пройти знову.");
      place(HAND.willow as GameMap, "default");
      persist();
      bump();
      return;
    }
    enterPit(floor + 1);
    return;
  }
  if (ref === "tract") {
    const spawn = G.map.id === "willow" ? "south" : G.map.id === "fen" ? "east" : "north";
    place(HAND.tract as GameMap, spawn);
    persist();
    bump();
    return;
  }
  if (ref === "willow") {
    place(HAND.willow as GameMap, "gate");
    persist();
    bump();
    return;
  }
  if (ref === "crypt") {
    if (!G.flags.bridge) {
      log("Попереду вода, не міст. Спершу шлюзи.");
      bump();
      return;
    }
    place(HAND.crypt as GameMap, "south");
    setQuest("q-road:999");
    if ((G.quests["q-bell"] ?? 0) < 1) setQuest("q-bell:1");
    persist();
    bump();
    return;
  }
  if (ref === "back" || ref === "willow") {
    place(HAND.willow as GameMap, ref === "willow" ? "gate" : "default");
    persist();
    bump();
    return;
  }
  if (ref === "fen") {
    place(HAND.fen as GameMap, "default");
    if ((G.quests["q-fen"] ?? 0) < 1) setQuest("q-fen:1");
    persist();
    bump();
    return;
  }
  if (ref === "nave") {
    if (!G.flags.bells) {
      log("Двері нави мовчать. Спершу порядок дзвонів: крапля, попіл, верба.");
      bump();
      return;
    }
    place(HAND.nave as GameMap, "default");
    if ((G.quests["q-nave"] ?? 0) < 1) setQuest("q-nave:1");
    persist();
    bump();
    return;
  }
  if (ref === "beyond") {
    place(HAND.beyond as GameMap, "default");
    persist();
    bump();
    return;
  }
  if (ref === "leave") {
    const kind = G.siteKind[G.map.id];
    const fightsLeft = G.map.fights.some((f) => !G.cleared.includes(f.id));
    if (!fightsLeft && kind === "lair") {
      G.flags[`lair-${G.map.region}`] = 1;
      const q = QUESTS.find((qq) => qq.region === G.map.region);
      if (q) setQuest(`${q.id}:999`);
    }
    if (G.map.region === "verge" && kind === "lair" && !fightsLeft) {
      G.talkId = "endseal";
      G.talkExtra = "";
      G.mode = "talk";
      bump();
      return;
    }
    const campId = `${G.map.region}-camp`;
    const camp = G.sites[campId];
    if (camp && G.map.id !== campId) place(camp, "default");
    else place(HAND.willow as GameMap, "default");
    persist();
    bump();
  }
}

export function choose(i: number) {
  const node = currentNode();
  const c = node?.choices?.[i];
  if (!c) {
    G.mode = G.epilogue ? "epilogue" : "explore";
    G.talkId = null;
    bump();
    return;
  }
  applyChoice(c);
}

function applyChoice(c: Choice) {
  const L = leader();
  if (c.need && !G.flags[c.need]) {
    G.talkExtra = "Цього ще немає в руках.";
    G.talkId = null;
    G.mode = "explore";
    bump();
    return;
  }
  if (c.check && L) {
    const have = L.stats[c.check.stat];
    const ok = have >= c.check.dc;
    const names: Record<string, string> = { str: "Сила", dex: "Спритність", int: "Розум", per: "Увага", wil: "Воля" };
    G.talkExtra = `${names[c.check.stat] ?? "Риса"} ${have}. Треба ${c.check.dc}. ${ok ? "Вистачило." : "Замало."}`;
    G.talkId = ok ? c.check.ok : c.check.bad;
    bump();
    return;
  }
  const questId = c.quest?.split(":")[0];
  const already = !!questId && c.quest?.endsWith(":999") && G.quests[questId] === 999;
  const flagDone = !!(c.flag && G.flags[c.flag]);
  if (c.quest) setQuest(c.quest);
  if (c.flag) applyFlag(c.flag);
  if (L && !already && !flagDone) {
    if (c.gold) L.gold += c.gold;
    if (c.xp) grantXp(L, c.xp);
    if (c.item) {
      addItem(L, c.item, 1);
      log(`${L.name} бере: ${itemById(c.item)?.name ?? c.item}.`);
    }
  }
  if (c.end || !c.to) {
    claimPickup(!!(c.flag || c.item || c.quest?.endsWith(":999")));
    G.talkId = null;
    const pending = G.party.find((p) => nextGate(p));
    G.mode = G.epilogue ? "epilogue" : pending ? "path" : "explore";
    persist();
    bump();
    return;
  }
  G.talkId = c.to;
  bump();
}

export function rest() {
  const L = leader();
  if (!L) return;
  if (L.gold >= 8) L.gold -= 8;
  for (const h of G.party) {
    recalc(h);
    h.hp = h.maxHp;
    h.focus = h.maxFocus;
  }
  log("Ліжко приймає мокрий одяг. Рани затягуються.");
  G.mode = "explore";
  persist();
  bump();
}

export function enterPit(floor = 1) {
  const f = Math.max(1, Math.min(12, floor));
  G.cleared = G.cleared.filter((id) => !id.startsWith("pit-"));
  for (const id of Object.keys(G.back)) if (id.startsWith("pit-")) delete G.back[id];
  for (const id of Object.keys(G.sites)) if (id.startsWith("pit-")) delete G.sites[id];
  const map = buildPit(f);
  G.sites[map.id] = map;
  G.siteKind[map.id] = "pit";
  place(map, "default");
  log(`Колодязь, поверх ${f} з 12. Досвід тут товщий за тракт.`);
  persist();
  bump();
}

export function goBeyond() {
  if (!G.flags.bells && !G.cleared.includes("crypt-boss")) {
    log("Стежка за дзвоном відкриється, коли дзвони крипти стихнуть.");
    bump();
    return;
  }
  place(HAND.beyond as GameMap, "default");
  persist();
  bump();
}

export function regionUnlocked(id: string) {
  const order = REGIONS.map((r) => r.id);
  const i = order.indexOf(id);
  if (i <= 0) return true;
  const prev = order[i - 1] ?? "grey";
  if (prev === "grey") return !!G.flags["road-open"];
  return !!G.flags[`lair-${prev}`];
}

export function travelTo(regionId: string, kind: "camp" | "wild" | "lair" | "job") {
  if (!regionUnlocked(regionId)) {
    log("Цей край ще не відповідає.");
    bump();
    return;
  }
  if (regionId === "grey") {
    place(HAND.willow as GameMap, "default");
    persist();
    bump();
    return;
  }
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) return;
  const id = `${regionId}-${kind}`;
  if (!G.sites[id]) {
    const names = { camp: "Табір", wild: "Дика стежка", lair: "Лігво", job: "Доручення" };
    G.sites[id] = generateSite({
      id,
      name: `${region.name}: ${names[kind]}`,
      region: regionId,
      biome: region.biome,
      tier: region.tier,
      seed: G.seed,
      kind,
    });
    G.siteKind[id] = kind;
    const q = QUESTS.find((qq) => qq.region === regionId);
    if (q && G.quests[q.id] == null) G.quests[q.id] = 1;
  }
  const site = G.sites[id];
  if (!site) return;
  place(site, "default");
  persist();
  bump();
}

export function travelStory(regionId: string) {
  if (!regionUnlocked(regionId)) {
    log("Цей край ще не відповідає.");
    bump();
    return;
  }
  const map = storyRoad(regionId);
  if (!map) return;
  G.sites[map.id] = map;
  G.siteKind[map.id] = "lair";
  const q = QUESTS.find((qq) => qq.region === regionId);
  if (q && G.quests[q.id] == null) G.quests[q.id] = 1;
  place(map, "default");
  persist();
  bump();
}

export function closePanel() {
  if (G.mode === "title" || G.mode === "combat") return;
  if (G.mode === "epilogue" || G.mode === "path") return;
  const pending = G.party.some((p) => nextGate(p));
  G.mode = pending ? "path" : "explore";
  if (G.mode !== "path") G.aim = null;
  persist();
  bump();
}

export function openPanel(mode: Mode) {
  if (G.mode === "combat" || G.mode === "title") return;
  G.mode = mode;
  bump();
}

export function closeReward() {
  G.reward = null;
  const pending = G.party.find((p) => nextGate(p));
  G.mode = pending ? "path" : "explore";
  persist();
  bump();
}

export function alloc(heroUid: string, stat: Stat) {
  const h = G.party.find((p) => p.uid === heroUid);
  if (!h || h.unspent <= 0) return;
  h.stats[stat] += 1;
  h.unspent -= 1;
  recalc(h);
  bump();
}

export function allocRec(heroUid: string) {
  const h = G.party.find((p) => p.uid === heroUid);
  if (!h) return;
  const rec = HEROES[h.hero].rec;
  let i = 0;
  while (h.unspent > 0) {
    const k = rec[i % rec.length];
    if (k) h.stats[k] += 1;
    h.unspent -= 1;
    i++;
  }
  recalc(h);
  bump();
}

export function pickPath(id: string) {
  const h = G.party.find((p) => nextGate(p)) ?? leader();
  if (!h) return;
  const at = nextGate(h);
  if (!at) return;
  const parent = gateParent(h, at);
  if (!pathChoices(h.hero, parent, at).some((p) => p.id === id)) return;
  h.paths.push(id);
  if (at === 85) {
    const cap = `cap-${id}`;
    if (!h.known.includes(cap)) h.known.push(cap);
    log(`${h.name}: печатка займає один із чотирьох слотів.`);
  }
  G.mode = nextGate(h) ? "path" : "explore";
  persist();
  bump();
}

export function equip(heroUid: string, itemId: string) {
  const h = G.party.find((p) => p.uid === heroUid);
  const it = itemById(itemId);
  if (!h || !it || !h.bag.some((b) => b.id === itemId)) return;
  if (it.slot === "weapon") {
    if (it.heroes && !it.heroes.includes(h.hero)) {
      log("Ця зброя не в його руці.");
      bump();
      return;
    }
    if (h.weapon && h.weapon !== itemId) addItem(h, h.weapon, 1);
    h.weapon = itemId;
    takeItem(h, itemId);
  } else if (it.slot === "armor") {
    if (it.armor && it.armor !== HEROES[h.hero].armor) {
      log(`${h.name} не носить цей крій.`);
      bump();
      return;
    }
    if (h.armor && h.armor !== itemId) addItem(h, h.armor, 1);
    h.armor = itemId;
    takeItem(h, itemId);
  } else if (it.slot === "trinket") {
    if (h.trinket && h.trinket !== itemId) addItem(h, h.trinket, 1);
    h.trinket = itemId;
    takeItem(h, itemId);
  }
  recalc(h);
  persist();
  bump();
}

export function setLoadout(heroUid: string, skillId: string) {
  const h = G.party.find((p) => p.uid === heroUid);
  if (!h || !h.known.includes(skillId)) return;
  if (h.loadout.includes(skillId)) h.loadout = h.loadout.filter((s) => s !== skillId);
  else if (h.loadout.length < 4) h.loadout.push(skillId);
  else h.loadout = [...h.loadout.slice(1), skillId];
  bump();
}

export function setQuick(heroUid: string, slot: 0 | 1, itemId: string) {
  const h = G.party.find((p) => p.uid === heroUid);
  if (!h) return;
  h.quick[slot] = itemId;
  bump();
}

export function giveItem(fromUid: string, toUid: string, itemId: string) {
  const a = G.party.find((p) => p.uid === fromUid);
  const b = G.party.find((p) => p.uid === toUid);
  if (!a || !b || a === b || !takeItem(a, itemId)) return;
  addItem(b, itemId, 1);
  log(`${a.name} передає ${itemById(itemId)?.name ?? "річ"} → ${b.name}.`);
  persist();
  bump();
}

export function drink(heroUid: string, itemId: string) {
  if (G.mode === "combat") return;
  const h = G.party.find((p) => p.uid === heroUid);
  const it = itemById(itemId);
  if (!h || !it || it.slot !== "consumable" || !takeItem(h, itemId)) return;
  if (it.heal) h.hp = Math.min(h.maxHp, h.hp + it.heal);
  if (it.focus) h.focus = Math.min(h.maxFocus, h.focus + it.focus);
  persist();
  bump();
}

export function sell(itemId: string) {
  const L = leader();
  const it = itemById(itemId);
  if (!L || !it) return;
  if (it.price <= 0) {
    log("Це ніхто не візьме за монети.");
    bump();
    return;
  }
  if (L.weapon === itemId || L.armor === itemId || L.trinket === itemId) {
    log("Спочатку зніми річ.");
    bump();
    return;
  }
  if (!takeItem(L, itemId)) return;
  const pay = Math.max(1, Math.floor(it.price / 2));
  L.gold += pay;
  log(`Продано: ${it.name} за ${pay}.`);
  persist();
  bump();
}

export function buy(itemId: string) {
  const L = leader();
  const it = itemById(itemId);
  if (!L || !it || it.price <= 0) return;
  if (L.gold < it.price) {
    log("Монет не вистачає.");
    bump();
    return;
  }
  L.gold -= it.price;
  addItem(L, itemId, 1);
  log(`Куплено: ${it.name}.`);
  persist();
  bump();
}

export function hire(hero: HeroId) {
  const L = leader();
  if (!L) return;
  if (G.party.length >= 3) {
    log("Більше двох найманців загін не веде.");
    bump();
    return;
  }
  if (G.party.some((p) => p.hero === hero)) return;
  if (L.gold < 30) {
    log("Найм коштує 30 монет.");
    bump();
    return;
  }
  L.gold -= 30;
  const m = makeHero(hero, true, Math.max(1, L.level - 1));
  G.party.push(m);
  log(`${m.name} стає поруч. У бою керуєш сам.`);
  persist();
  bump();
}

export function dismiss(heroUid: string) {
  const h = G.party.find((p) => p.uid === heroUid);
  if (!h?.merc) return;
  G.party = G.party.filter((p) => p.uid !== heroUid);
  log(`${h.name} лишається у варті.`);
  persist();
  bump();
}

export function shopItems() {
  return ITEMS.filter((i) => i.price > 0);
}

export function questView() {
  return QUESTS.map((q) => {
    const st = G.quests[q.id];
    if (st == null && q.region !== "grey") return null;
    const done = st === 999;
    const idx = done ? q.stages.length - 1 : Math.max(0, Math.min(q.stages.length - 1, st ?? 0));
    return { id: q.id, name: q.name, text: done ? "Завершено." : (q.stages[idx] ?? ""), done, region: q.region };
  }).filter((x): x is { id: string; name: string; text: string; done: boolean; region: string } => !!x);
}

export function bellLabel() {
  const names = ["крапля", "верба", "попіл"];
  return G.bells.map((n) => names[n] ?? "?").join(" → ");
}

function cheb(ax: number, ay: number, bx: number, by: number) {
  return Math.max(Math.abs(ax - bx), Math.abs(ay - by));
}

function rollD20() {
  return 1 + Math.floor(Math.random() * 20);
}

function rollDie(n: number) {
  if (n <= 0) return 0;
  return 1 + Math.floor(Math.random() * n);
}

function living(side?: "ally" | "foe") {
  return G.units.filter((u) => u.hp > 0 && (!side || u.side === side));
}

function unitBy(id: string) {
  return G.units.find((u) => u.uid === id);
}

export function allies() {
  return G.units.filter((u) => u.side === "ally");
}

export function currentPlanner(): Unit | null {
  return living("ally")[G.planner] ?? null;
}

function occupied(x: number, y: number, ignore?: string) {
  return G.units.some((u) => u.hp > 0 && u.uid !== ignore && u.x === x && u.y === y);
}

export function reachable(u: Unit) {
  const out: { x: number; y: number }[] = [{ x: u.x, y: u.y }];
  const seen = new Set([`${u.x},${u.y}`]);
  let edge = [{ x: u.x, y: u.y, d: 0 }];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const;
  while (edge.length) {
    const nxt: { x: number; y: number; d: number }[] = [];
    for (const c of edge) {
      if (c.d >= u.move) continue;
      for (const [dx, dy] of dirs) {
        const x = c.x + dx;
        const y = c.y + dy;
        const k = `${x},${y}`;
        if (seen.has(k) || blocked(G.map, x, y, G.flags) || occupied(x, y, u.uid)) continue;
        seen.add(k);
        out.push({ x, y });
        nxt.push({ x, y, d: c.d + 1 });
      }
    }
    edge = nxt;
  }
  return out;
}

function nearest(u: Unit, pool: Unit[]) {
  let best: Unit | null = null;
  let bd = 99;
  for (const o of pool) {
    const d = cheb(u.x, u.y, o.x, o.y);
    if (d < bd) {
      bd = d;
      best = o;
    }
  }
  return best;
}

function stepToward(u: Unit, tx: number, ty: number, steps: number) {
  let x = u.x;
  let y = u.y;
  for (let i = 0; i < steps; i++) {
    const opts = [
      { x: x + Math.sign(tx - x), y },
      { x, y: y + Math.sign(ty - y) },
    ].filter((p) => (p.x !== x || p.y !== y) && !blocked(G.map, p.x, p.y, G.flags) && !occupied(p.x, p.y, u.uid));
    if (!opts.length) break;
    opts.sort((a, b) => cheb(a.x, a.y, tx, ty) - cheb(b.x, b.y, tx, ty));
    x = opts[0]!.x;
    y = opts[0]!.y;
    if (x === tx && y === ty) break;
  }
  return { x, y };
}

function heroOf(u: Unit) {
  return G.party.find((p) => p.uid === u.heroUid) ?? null;
}

function defenseOf(u: Unit) {
  let d = u.def;
  const vuln = u.statuses.find((s) => s.id === "vuln");
  if (vuln) d -= vuln.pot;
  const guard = u.statuses.find((s) => s.id === "guard");
  if (guard) d += guard.pot;
  return d;
}

export function hitChance(att: Unit, defn: Unit, acc: number, stat: number) {
  const bonus = Math.floor(stat / 4) + acc;
  const dc = defenseOf(defn);
  let hits = 0;
  for (let r = 1; r <= 20; r++) {
    if (r === 1) continue;
    if (r === 20 || r + bonus >= dc) hits++;
  }
  return Math.round((hits / 20) * 100);
}

function floatAt(u: Unit, text: string, color: string) {
  G.floats.push({ x: (u.x + 0.5) * TILE, y: u.y * TILE, text, color, t: 0 });
}

function uAnim(id: string, kind: Anim["kind"], dx = 0, dy = 0) {
  G.anim[id] = { kind, t: 0, dx, dy };
}

function face(u: Unit, tx: number, ty: number) {
  const dx = tx - u.x;
  const dy = ty - u.y;
  if (Math.abs(dx) > Math.abs(dy)) u.facing = dx > 0 ? 2 : 1;
  else if (dy > 0) u.facing = 0;
  else if (dy < 0) u.facing = 3;
  uAnim(u.uid, "attack", dx, dy);
}

function has(u: Unit, id: StatusId) {
  return u.statuses.find((s) => s.id === id);
}

function putStatus(u: Unit, id: StatusId, turns: number, pot: number, src?: string) {
  const prev = u.statuses.find((s) => s.id === id);
  if (prev) {
    prev.turns = Math.max(prev.turns, turns);
    prev.pot = Math.max(prev.pot, pot);
    prev.src = src ?? prev.src;
  } else u.statuses.push({ id, turns, pot, src });
}

function applyDamage(target: Unit, raw: number, src: Unit | null, leech = 0) {
  let t = target;
  const cover = has(t, "cover");
  if (cover?.src) {
    const pal = unitBy(cover.src);
    if (pal && pal.hp > 0 && pal.uid !== t.uid && cheb(pal.x, pal.y, t.x, t.y) <= 1) {
      t.statuses = t.statuses.filter((s) => s.id !== "cover");
      floatAt(t, "прикрито", "#c6a15a");
      t = pal;
    }
  }
  let n = raw;
  const curse = src ? has(src, "curse") : undefined;
  if (curse) n -= curse.pot;
  const mark = has(t, "mark");
  if (mark) n += mark.pot;
  const ward = has(t, "ward");
  if (ward) {
    const pool = ward.pot * 4;
    const cut = Math.min(pool, n);
    n -= cut;
    ward.pot -= Math.ceil(cut / 4);
    if (ward.pot <= 0) t.statuses = t.statuses.filter((s) => s !== ward);
  }
  const guard = has(t, "guard");
  if (guard) n -= guard.pot * 2;
  n = Math.max(0, Math.floor(n));
  t.hp = Math.max(0, t.hp - n);
  floatAt(t, n > 0 ? `-${n}` : "0", "#e6dcc8");
  uAnim(t.uid, t.hp <= 0 ? "death" : "hurt");
  if (src && leech > 0 && n > 0 && src.hp > 0) {
    const heal = Math.max(1, Math.floor(n * leech));
    src.hp = Math.min(src.maxHp, src.hp + heal);
    floatAt(src, `+${heal}`, "#8f3d3a");
  }
}

function healUnit(t: Unit, n: number, revive = false) {
  if (t.hp <= 0 && !revive) return;
  const g = Math.max(1, Math.floor(n));
  t.hp = Math.min(t.maxHp, Math.max(0, t.hp) + g);
  floatAt(t, `+${g}`, "#7d9a6a");
}

function clearBad(u: Unit) {
  u.statuses = u.statuses.filter((s) => s.id === "ward" || s.id === "regen" || s.id === "cover" || s.id === "guard");
}

function tierScale() {
  const tier = REGIONS.find((r) => r.id === G.map.region)?.tier ?? 1;
  return 1 + (tier - 1) * 0.32;
}

function makeFoe(id: string, name: string, x: number, y: number): Unit {
  const e = ENEMIES[id] ?? ENEMIES.drowned!;
  const sc = tierScale();
  const hp = Math.round(e.hp * sc * (e.boss && sc > 1 ? 1.2 : 1));
  return {
    uid: uid(e.sprite),
    name: name || e.name,
    sprite: e.sprite,
    side: "foe",
    enemyId: e.id,
    x,
    y,
    hp,
    maxHp: hp,
    focus: 0,
    maxFocus: 0,
    move: e.move,
    range: e.range,
    def: e.def + Math.floor((sc - 1) * 2),
    dmg: Math.round(e.dmg * sc),
    die: e.die,
    acc: e.acc,
    primary: "str",
    stats: { str: 10, dex: 10, end: 10, int: 8, wil: 8, per: 10 },
    statuses: [],
    boss: !!e.boss,
    didSummon: false,
    ranged: e.ranged,
    leech: 0,
    ready: true,
    plan: null,
    intent: null,
    intentTo: null,
    quickLeft: [false, false],
    facing: 0,
  };
}

function makeAlly(h: Hero, x: number, y: number): Unit {
  const def = HEROES[h.hero];
  const g = gearMods(h);
  const baseArmor = def.armor === "heavy" ? 2 : def.armor === "light" ? 1 : 0;
  return {
    uid: uid("a"),
    name: h.name,
    sprite: h.hero,
    side: "ally",
    hero: h.hero,
    heroUid: h.uid,
    x,
    y,
    hp: Math.max(1, h.hp),
    maxHp: h.maxHp,
    focus: h.focus,
    maxFocus: h.maxFocus,
    move: def.move,
    range: def.range,
    def: 8 + baseArmor + g.armor + Math.floor(g.stats.dex / 6),
    dmg: def.power + g.power + Math.floor(g.stats[def.primary] / 4) + Math.round(g.pm.dmg / 2),
    die: def.die,
    acc: 1,
    primary: def.primary,
    stats: g.stats,
    statuses: [],
    ranged: def.ranged,
    leech: (h.hero === "vampire" ? 0.2 : 0) + g.pm.leech / 100,
    ready: false,
    plan: null,
    intent: null,
    intentTo: null,
    quickLeft: [true, true],
    facing: 3,
  };
}

function freeTiles(x: number, y: number, w: number, h: number, used: Set<string>) {
  const out: { x: number; y: number }[] = [];
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      const k = `${xx},${yy}`;
      if (blocked(G.map, xx, yy, G.flags) || used.has(k)) continue;
      out.push({ x: xx, y: yy });
    }
  }
  return out;
}

function startFight(f: Fight) {
  const t = tileOf(G.x, G.y);
  G.fightBack = { x: G.x, y: Math.min(G.y + TILE * 1.4, (G.map.rows.length - 1.5) * TILE) };
  G.fightId = f.id;
  G.lastRoll = "";
  G.units = [];
  G.shots = [];
  G.floats = [];
  G.anim = {};
  G.round = 1;
  G.phase = "plan";
  G.planner = 0;
  G.aim = null;
  G.queue = [];
  const used = new Set<string>();
  const spots = freeTiles(f.x, f.y, f.w, f.h, used);
  let si = 0;
  for (const foe of f.foes) {
    for (let i = 0; i < foe.n; i++) {
      const spot = spots[si++] ?? { x: f.x + 1, y: f.y };
      used.add(`${spot.x},${spot.y}`);
      G.units.push(makeFoe(foe.id, foe.name ?? "", spot.x, spot.y));
    }
  }
  const south: { x: number; y: number }[] = [];
  for (let dy = 1; dy <= 3; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = t.x + dx;
      const y = t.y + dy;
      if (!blocked(G.map, x, y, G.flags) && !used.has(`${x},${y}`)) south.push({ x, y });
    }
  }
  if (!south.length) south.push(t);
  G.party.forEach((h, i) => {
    const spot = south[i % south.length]!;
    used.add(`${spot.x},${spot.y}`);
    G.units.push(makeAlly(h, spot.x, spot.y));
  });
  G.mode = "combat";
  G.path = [];
  refreshIntents();
  log(`Сутичка: ${G.units.filter((u) => u.side === "foe").map((u) => u.name).join(", ")}.`);
  bump();
}

function refreshIntents() {
  const goods = living("ally");
  for (const e of G.units) {
    if (e.side !== "foe" || e.hp <= 0) continue;
    const base = ENEMIES[e.enemyId ?? "drowned"];
    const chill = has(e, "chill");
    e.move = Math.max(1, (base?.move ?? e.move) - (chill?.pot ?? 0));
    const target = nearest(e, goods);
    if (!target) {
      e.intent = { kind: "wait", label: "Чекає" };
      e.intentTo = { x: e.x, y: e.y };
      continue;
    }
    if (e.boss && G.round % 3 === 0) {
      e.intent = { kind: "slam", label: "УДАР ДЗВОНА — коло 1" };
      e.intentTo = { x: e.x, y: e.y };
      continue;
    }
    if (e.boss && !e.didSummon && e.hp <= e.maxHp * 0.6) {
      e.intent = { kind: "summon", label: "Кличе хориста" };
      e.intentTo = { x: e.x, y: e.y };
      continue;
    }
    const dest = cheb(e.x, e.y, target.x, target.y) <= e.range ? { x: e.x, y: e.y } : stepToward(e, target.x, target.y, e.move);
    e.intentTo = dest;
    e.intent = { kind: "attack", target: target.uid, label: `${e.ranged ? "Постріл" : "Удар"} → ${target.name}` };
  }
}

function tryFight() {
  if (G.grace > 0 || G.mode !== "explore") return;
  for (const m of G.mobs) {
    if (m.hp <= 0 || !m.hold) continue;
    const spot = G.map.fights.find((f) => f.id === m.fight);
    if (!spot || spot.calm || G.cleared.includes(spot.id)) continue;
    if (Math.hypot(m.x - G.x, m.y - G.y) < 38) m.hold = false;
  }
}

function pushPack(f: Fight, hold: boolean) {
  let n = 0;
  for (const foe of f.foes) {
    const base = ENEMIES[foe.id] ?? ENEMIES.drowned!;
    for (let i = 0; i < foe.n; i++) {
      const cx = f.x + Math.max(1, f.w * 0.5);
      const cy = f.y + Math.max(1, f.h * 0.5);
      const ang = n * 2.399;
      const rad = 0.55 + (n % 3) * 0.28;
      const x = (cx + Math.cos(ang) * rad) * TILE;
      const y = (cy + Math.sin(ang) * rad * 0.7) * TILE;
      n += 1;
      const role = base.role;
      const pit = /^pit-(\d+)$/.exec(G.map.id);
      const floor = pit ? Number(pit[1]) : 0;
      const hpMul = floor ? 1 + (floor - 1) * 0.16 : 1;
      const xpMul = floor ? 3 + (floor - 1) * 0.95 : 1;
      const reach = role === "archer" || role === "caster" ? 220 : role === "boss" && base.ranged ? 180 : 52;
      G.mobs.push({
        uid: `${f.id}-${n}`,
        fight: f.id,
        name: foe.name || base.name,
        sprite: base.sprite,
        x,
        y,
        hp: Math.round(base.hp * hpMul),
        maxHp: Math.round(base.hp * hpMul),
        dmg: Math.round(base.dmg * (floor ? 1 + (floor - 1) * 0.08 : 1)),
        range: reach,
        cd: 0.4,
        xp: Math.round(base.xp * xpMul),
        gold: Math.round(base.gold * (floor ? 1 + (floor - 1) * 0.25 : 1)),
        facing: 0,
        hold,
        level: base.level + floor,
        role,
        wind: 0,
        hx: x,
        hy: y,
        hue: base.hue ?? 0,
      });
    }
  }
}

function spawnPacks() {
  G.mobs = [];
  for (const f of G.map.fights) {
    if (G.cleared.includes(f.id)) continue;
    pushPack(f, true);
  }
}

function ensurePacks() {
  if (G.mode !== "explore") return;
  if (G.map.id === "willow") {
    const drill = G.map.fights.find((f) => f.id === "willow-drill");
    G.map.fights = drill ? [drill] : [{ id: "willow-drill", x: 30, y: 48, w: 8, h: 4, calm: true, foes: [{ id: "reed", n: 2, name: "Вартовий двір" }] }];
  }
  const ids = new Set(G.map.fights.map((f) => f.id));
  if (G.mobs.some((m) => !ids.has(m.fight))) {
    G.mobs = G.mobs.filter((m) => ids.has(m.fight));
    if (!G.mobs.some((m) => m.uid === G.target && m.hp > 0)) {
      G.target = "";
      G.lockTarget = false;
      G.hunt = false;
    }
  }
  for (const f of G.map.fights) {
    if (G.cleared.includes(f.id) || G.back[f.id]) continue;
    if (G.mobs.some((m) => m.fight === f.id && m.hp > 0)) continue;
    pushPack(f, true);
  }
}

function wakeOne(m: Mob) {
  m.hold = false;
}

function engage(f: Fight, hold = false) {
  G.fightId = f.id;
  G.lastRoll = hold ? "Ціль вибрана. Вони ще не йдуть." : "Вони попереду. Бий і відходь, поки вміння холодне.";
  if (G.mobs.some((m) => m.fight === f.id && m.hp > 0)) {
    if (!hold) wakeOne(G.mobs.find((m) => m.fight === f.id && m.hp > 0)!);
    bump();
    return;
  }
  pushPack(f, hold);
  if (!hold) log("Сутичка на місці. Удар, відхід, знову удар.");
  bump();
}

function onBody(x: number, y: number, wx: number, wy: number) {
  const dx = wx - x;
  const dy = wy - y;
  const along = -(dx + dy) * 0.5;
  const across = (dx - dy) * 0.5;
  return along > -36 && along < 156 && Math.abs(across) < 54;
}

function nearestMob(reach: number): Mob | null {
  let best: Mob | null = null;
  let bd = reach;
  for (const m of G.mobs) {
    if (m.hp <= 0) continue;
    const d = Math.hypot(m.x - G.x, m.y - G.y);
    if (d <= bd) {
      bd = d;
      best = m;
    }
  }
  return best;
}

export function attackReach() {
  const L = leader();
  return L ? heroReach(L.hero) : 112;
}

/** Living target stays locked. A new one is chosen only when there is none. */
export function aimMob(reach = attackReach()): Mob | null {
  const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
  if (picked) return picked;
  return nearestMob(reach);
}

function aimedMob(reach: number): { foe: Mob | null; missed: boolean } {
  const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
  if (picked) {
    G.lockTarget = true;
    if (Math.hypot(picked.x - G.x, picked.y - G.y) <= reach) return { foe: picked, missed: false };
    return { foe: null, missed: true };
  }
  const foe = nearestMob(reach);
  if (foe) {
    G.target = foe.uid;
    G.lockTarget = true;
    return { foe, missed: false };
  }
  return { foe: null, missed: false };
}

export function mobUnder(wx: number, wy: number) {
  return G.mobs.some((m) => m.hp > 0 && onBody(m.x, m.y, wx, wy));
}

function ownsGear(h: Hero, id: string) {
  return h.weapon === id || h.armor === id || h.trinket === id || h.bag.some((b) => b.id === id);
}

function rollGear(h: Hero, level: number, boss: boolean) {
  if (Math.random() > (boss ? 0.7 : 0.2)) return "";
  const band = boss ? level + 3 : level;
  const pool = ITEMS.filter((it) => {
    if (it.slot === "consumable") return false;
    if (it.heroes && !it.heroes.includes(h.hero)) return false;
    const power = it.power ?? 0;
    const armor = it.armorN ?? 0;
    if (band < 5 && (power >= 5 || armor >= 3 || it.price === 0)) return false;
    if (band < 8 && (power >= 6 || armor >= 4)) return false;
    if (!boss && it.price === 0 && band < 10) return false;
    return !ownsGear(h, it.id);
  });
  if (!pool.length) return "";
  const weight = (price: number) => (price === 0 ? 1 : price < 40 ? 6 : 3);
  let total = 0;
  for (const it of pool) total += weight(it.price);
  let roll = Math.random() * total;
  for (const it of pool) {
    roll -= weight(it.price);
    if (roll <= 0) return it.id;
  }
  return pool[0]!.id;
}

function faceToward(x: number, y: number) {
  const dx = x - G.x;
  const dy = y - G.y;
  if (Math.abs(dx) > Math.abs(dy)) G.facing = dx > 0 ? 2 : 1;
  else G.facing = dy > 0 ? 0 : 3;
}

export function attackDelay(h: Hero) {
  const dex = gearMods(h).stats.dex;
  const aspd = dex + Math.floor(h.level / 2);
  const delay = 1.2 * (100 / (100 + aspd * 1.7));
  return Math.max(0.36, Math.min(1.25, delay));
}

export function setAtkHold(on: boolean) {
  G.atkHold = on;
}

function hurtMob(m: Mob, dmg: number) {
  m.hp -= dmg;
  G.floats.push({ x: m.x, y: m.y - 28, text: `-${dmg}`, color: "#f2d48a", t: 0 });
  G.anim[m.uid] = { kind: m.hp <= 0 ? "death" : "hurt", t: 0, dx: 0, dy: 0 };
  if (m.hp <= 0) {
    m.hp = 0;
    if (G.target === m.uid) {
      G.lockTarget = false;
      G.target = "";
    }
    slain(m);
  }
}

function slain(m: Mob) {
  const fightId = m.fight;
  const xp = m.xp;
  const gold = Math.round(m.gold * 1.3);
  G.mobs = G.mobs.filter((o) => o.uid !== m.uid);
  const L = leader();
  if (L) L.gold += gold;
  const share = Math.max(1, Math.round(xp / Math.max(1, G.party.length)));
  for (const h of G.party) grantXp(h, share);
  G.floats.push({ x: m.x, y: m.y - 46, text: `+${share}`, color: "#f2d48a", t: 0 });
  G.floats.push({ x: m.x, y: m.y - 64, text: `+${gold}`, color: "#e7d7a1", t: 0 });
  if (L && Math.random() < 0.42) {
    const bag = ["pot", "bread", "ton"];
    const pick = bag[Math.floor(Math.random() * bag.length)]!;
    addItem(L, pick, 1);
    G.floats.push({ x: m.x, y: m.y - 82, text: itemById(pick)?.name ?? "Річ", color: "#d7c4a2", t: 0 });
  }
  if (L) {
    const gear = rollGear(L, m.level, m.role === "boss");
    if (gear) {
      addItem(L, gear, 1);
      G.floats.push({ x: m.x, y: m.y - 100, text: itemById(gear)?.name ?? "Спорядження", color: "#e7d3a4", t: 0 });
      log(`${itemById(gear)?.name ?? "Спорядження"} — у сумці.`);
    }
  }
  const left = G.mobs.some((o) => o.fight === fightId && o.hp > 0);
  if (!left) finishPull(fightId, true);
  else {
    log(`${m.name} падає. Сусід ще стоїть.`);
    persist();
    bump();
  }
}

function finishPull(fightId: string, alreadyPaid = false) {
  const pack = G.mobs.filter((m) => m.fight === fightId && m.hp > 0);
  if (pack.length) return;
  let xp = 0;
  let gold = 0;
  if (!alreadyPaid) {
    for (const m of G.mobs.filter((o) => o.fight === fightId)) {
      xp += m.xp;
      gold += m.gold;
    }
    gold = Math.round(gold * 1.3);
  }
  G.mobs = G.mobs.filter((m) => m.fight !== fightId);
  G.fightId = fightId;
  const boss = /boss/.test(fightId);
  if (G.fightId && !G.cleared.includes(G.fightId)) G.cleared.push(G.fightId);
  if (G.fightId && !boss && !G.fightId.startsWith("pit-")) G.back[G.fightId] = G.time + 18;
  const L = leader();
  const lines: string[] = [];
  if (!alreadyPaid) {
    if (L) L.gold += gold;
    const share = Math.max(1, Math.round(xp / Math.max(1, G.party.length)));
    for (const h of G.party) grantXp(h, share);
    lines.push(`Досвід кожному: ${share}.`, `Монети: ${gold}.`);
    G.floats.push({ x: G.x, y: G.y - 46, text: `+${share} досвіду`, color: "#f2d48a", t: 0 });
    G.floats.push({ x: G.x, y: G.y - 64, text: `+${gold} монет`, color: "#e7d7a1", t: 0 });
  } else lines.push("Купка затихла.");
  if (L && !alreadyPaid) {
    const bag = ["pot", "bread", "ton", "resin", "pot2"];
    const pick = bag[Math.min(bag.length - 1, Math.floor(Math.random() * (boss ? 5 : 3)))]!;
    if (Math.random() < 0.82) {
      addItem(L, pick, 1);
      lines.push(`${itemById(pick)?.name ?? "Річ"} — у сумці.`);
      if (Math.random() < 0.28) {
        const extra = Math.random() < 0.5 ? "bread" : "pot";
        addItem(L, extra, 1);
        lines.push(`${itemById(extra)?.name ?? "Дрібниця"} — ще одна.`);
      }
    }
  }
  if (L && boss) {
    const gear = G.fightId === "nave-boss" ? "t-nave-wax" : G.fightId === "fen-boss" ? "t-reed-knot" : G.fightId === "crypt-boss" ? "t-bell" : "t-salt";
    if (!L.bag.some((b) => b.id === gear) && L.trinket !== gear && L.weapon !== gear && L.armor !== gear) {
      addItem(L, gear, 1);
      lines.push(`${itemById(gear)?.name ?? "Річ"} — у сумці.`);
    }
  }
  if (L && L.unspent > 0) lines.push(`Вільні очки рис: ${L.unspent}. Відкрий лист героя.`);
  if (L && L.skillPts > 0) lines.push(`Очки вмінь: ${L.skillPts}.`);
  if (G.fightId === "tract-ambush") setQuest("q-road:2");
  if (G.fightId === "crypt-boss") {
    setQuest("q-bell:999");
    setQuest("q-back:1");
  }
  if (G.fightId === "fen-boss") setQuest("q-fen:999");
  if (G.fightId === "nave-boss") setQuest("q-nave:999");
  const bossDrop: Record<string, [string, string]> = {
    "moss-road-boss": ["q-moss", "a-reed-robe"],
    "amber-road-boss": ["q-amber", "w-bow-night"],
    "glass-road-boss": ["q-glass", "w-staff-reed"],
    "red-road-boss": ["q-red", "w-axe-nave"],
    "shore-road-boss": ["q-shore", "w-dagger-sluice"],
    "ash-road-boss": ["q-ash", "w-sword-nave"],
    "verge-road-boss": ["q-verge", "w-myth"],
  };
  const drop = G.fightId ? bossDrop[G.fightId] : undefined;
  if (drop) {
    setQuest(`${drop[0]}:999`);
    if (L && !L.bag.some((b) => b.id === drop[1]) && L.weapon !== drop[1] && L.armor !== drop[1] && L.trinket !== drop[1]) {
      addItem(L, drop[1], 1);
      lines.push(`${itemById(drop[1])?.name ?? "Річ"} — у сумці.`);
    }
  }
  G.swing = 0;
  G.reward = null;
  G.mode = "explore";
  if (drop) G.floats.push({ x: G.x, y: G.y - 82, text: itemById(drop[1])?.name ?? "Річ", color: "#d7c4a2", t: 0 });
  log(lines.join(" "));
  persist();
  bump();
}

function heroReach(hero: HeroId) {
  const r = HEROES[hero].range;
  if (r >= 5) return 1400;
  if (r >= 4) return 1100;
  if (r >= 3) return 860;
  return 112;
}

function flightRow(hero: HeroId) {
  if (hero === "archer") return 0;
  if (hero === "witch") return 2;
  if (hero === "herbalist") return 3;
  return 1;
}

export function fieldStrike(quiet = false, auto = false) {
  const L = leader();
  if (!L || G.mode !== "explore" || G.swing > 0 || G.atkCd > 0) return;
  const reach = heroReach(L.hero);
  const living = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
  if (!living && !auto) return;
  const { foe, missed } = aimedMob(reach);
  if (!foe) {
    if (missed && G.target) {
      const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
      if (picked) {
        G.path = route(Math.floor(picked.x / TILE), Math.floor(picked.y / TILE));
        if (!quiet) {
          log("Підходжу до цілі.");
          bump();
        }
      }
    } else if (!quiet) {
      log("Нікого в радіусі удару.");
      bump();
    }
    return;
  }
  if (foe.hold) wakeOne(foe);
  faceToward(foe.x, foe.y);
  G.hunt = true;
  G.path = [];
  G.swing = 0;
  G.atkCd = attackDelay(L);
  G.anim.hero = { kind: "attack", t: 0, dx: foe.x - G.x, dy: foe.y - G.y };
  const g = gearMods(L);
  const dmg = blowDamage(HEROES[L.hero].power + g.power, g.stats[HEROES[L.hero].primary]);
  G.lastRoll = `${L.name}: ${dmg} шкоди.`;
  if (HEROES[L.hero].range > 1) {
    G.shots.push({ x: G.x, y: G.y - 30, tx: foe.x, ty: foe.y - 34, row: flightRow(L.hero), t: 0, dur: 0.55 });
  }
  hurtMob(foe, dmg);
  bump();
}

export function fieldCast(id: string) {
  const L = leader();
  if (!L || G.mode !== "explore" || G.swing > 0) return;
  const sk = skillById(L, id);
  if (!sk || !L.loadout.includes(id)) return;
  if ((G.skillCd[id] ?? 0) > 0) return;
  if (L.focus < sk.focus) {
    log("Замало SP.");
    bump();
    return;
  }
  const rank = skillRank(L, id);
  const pow = rankedPower(L, sk.power, id);
  const gear = gearMods(L);
  const stat = gear.stats[sk.stat];
  const dex = gearMods(L).stats.dex;
  const haste = 100 / (100 + dex * 1.35 + (rank - 1) * 8);
  const cd = Math.max(0.45, (1.6 + sk.focus * 0.55) * haste);
  if (sk.target === "enemy") {
    const reach = Math.max(sk.range > 1 ? heroReach(L.hero) : 112, sk.range * 78);
    const { foe, missed } = aimedMob(reach);
    if (!foe) {
      if (missed && G.target) {
        const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
        if (picked) G.path = route(Math.floor(picked.x / TILE), Math.floor(picked.y / TILE));
      }
      log(missed ? "Підходжу до цілі." : "Ціль занадто далеко.");
      bump();
      return;
    }
    if (foe.hold) wakeOne(foe);
    L.focus -= sk.focus;
    G.swing = 0.16;
    G.skillCd[id] = cd;
    faceToward(foe.x, foe.y);
    G.anim.hero = { kind: sk.kind === "dmg" ? "attack" : "cast", t: 0, dx: foe.x - G.x, dy: foe.y - G.y };
    const dmg = pow ? blowDamage(pow, stat) : 0;
    if (dmg) hurtMob(foe, dmg);
    const fx = sk.status ? statusName(sk.status.id) : "";
    G.lastRoll = `${sk.name}: ${dmg ? `${dmg} шкоди. ` : ""}${fx}`.trim();
    if (sk.range > 1) G.shots.push({ x: G.x, y: G.y - 32, tx: foe.x, ty: foe.y - 36, row: flightRow(L.hero), t: 0, dur: 0.4 });
  } else {
    L.focus -= sk.focus;
    G.swing = 0.14;
    G.skillCd[id] = cd;
    G.anim.hero = { kind: "cast", t: 0, dx: 0, dy: -1 };
    if (sk.kind === "heal" || (pow > 0 && sk.kind !== "debuff")) {
      const n = blowDamage(Math.max(1, pow), stat);
      L.hp = Math.min(L.maxHp, L.hp + n);
      G.floats.push({ x: G.x, y: G.y - 30, text: `+${n}`, color: "#8dcf9a", t: 0 });
      G.lastRoll = `${sk.name}: +${n}.`;
    } else {
      G.lastRoll = `${sk.name}. ${statusName(sk.status?.id)}`.trim();
    }
  }
  bump();
}

function stepMob(m: Mob, vx: number, vy: number, dt: number, sp: number) {
  const nx = m.x + vx * sp * dt;
  const ny = m.y + vy * sp * dt;
  if (!blocked(G.map, Math.floor(nx / TILE), Math.floor(m.y / TILE), G.flags)) m.x = nx;
  if (!blocked(G.map, Math.floor(m.x / TILE), Math.floor(ny / TILE), G.flags)) m.y = ny;
  if (Math.abs(vx) + Math.abs(vy) > 0.2) {
    if (Math.abs(vx) > Math.abs(vy)) m.facing = vx > 0 ? 2 : 1;
    else m.facing = vy > 0 ? 0 : 3;
  }
}

function tickFolk(dt: number) {
  for (const f of G.folk) {
    f.wait -= dt;
    const dx = f.tx - f.x;
    const dy = f.ty - f.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 4) {
      f.moving = true;
      const sp = 36;
      f.x += (dx / dist) * sp * dt;
      f.y += (dy / dist) * sp * dt;
      if (Math.abs(dx) > Math.abs(dy)) f.facing = dx > 0 ? 2 : 1;
      else f.facing = dy > 0 ? 0 : 3;
    } else {
      f.moving = false;
      if (f.wait <= 0) {
        const ang = G.time * 1.3 + f.hx;
        const ox = Math.cos(ang) * TILE * 1.4;
        const oy = Math.sin(ang * 0.8) * TILE * 1.1;
        const tx = f.hx + ox;
        const ty = f.hy + oy;
        if (!blocked(G.map, Math.floor(tx / TILE), Math.floor(ty / TILE), G.flags)) {
          f.tx = tx;
          f.ty = ty;
        }
        f.wait = 2.4 + (f.hx % 5) * 0.3;
      }
    }
  }
}

function tickMobs(dt: number) {
  const L = leader();
  if (!L) return;
  for (const m of G.mobs) {
    if (m.hp <= 0) continue;
    const dx = G.x - m.x;
    const dy = G.y - m.y;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    if (m.hold) {
      const spot = G.map.fights.find((f) => f.id === m.fight);
      if (spot && !spot.calm && dist < 38) m.hold = false;
      else {
        const ang = G.time * 0.55 + m.hx * 0.02;
        stepMob(m, Math.cos(ang), Math.sin(ang * 0.8), dt, 18);
        continue;
      }
    }
    m.cd = Math.max(0, m.cd - dt);
    if (dist > 520) {
      const hx = m.hx - m.x;
      const hy = m.hy - m.y;
      const hd = Math.hypot(hx, hy) || 1;
      if (hd > 12) stepMob(m, hx / hd, hy / hd, dt, 70);
      continue;
    }
    const role = m.role;
    const speed = role === "skirmisher" ? 112 : role === "brute" ? 58 : role === "boss" ? 74 : 86;
    const strafe = Math.sin(G.time * 1.6 + m.hx) * (role === "skirmisher" ? 0.7 : 0.25);
    if (role === "archer" || role === "caster") {
      if (dist < 100) stepMob(m, -ux + -uy * strafe, -uy + ux * strafe, dt, speed);
      else if (dist > m.range - 10) stepMob(m, ux + -uy * strafe, uy + ux * strafe, dt, speed * 0.85);
    } else if (dist > m.range + 8) {
      stepMob(m, ux + -uy * strafe, uy + ux * strafe, dt, speed);
    }
    if (dist <= m.range + 8 && m.cd <= 0 && m.wind <= 0) {
      m.wind = role === "brute" || role === "boss" ? 0.42 : 0.28;
      G.anim[m.uid] = { kind: "attack", t: 0, dx, dy };
      if (Math.abs(dx) > Math.abs(dy)) m.facing = dx > 0 ? 2 : 1;
      else m.facing = dy > 0 ? 0 : 3;
    }
    if (m.wind > 0) {
      const prev = m.wind;
      m.wind -= dt;
      if (prev > 0 && m.wind <= 0 && dist < m.range + 36) {
        m.cd = role === "caster" ? 1.7 : role === "archer" ? 1.25 : role === "boss" ? 1.05 : 0.85;
        const gear = gearMods(L);
        const cut = Math.max(1, m.dmg - Math.floor(gear.stats.end / 5) - gear.armor);
        L.hp -= cut;
        G.floats.push({ x: G.x, y: G.y - 34, text: `-${cut}`, color: "#e07070", t: 0 });
        G.anim.hero = { kind: "hurt", t: 0, dx: m.x - G.x, dy: m.y - G.y };
        if (m.range > 70) G.shots.push({ x: m.x, y: m.y - 16, tx: G.x, ty: G.y - 16, row: 1, t: 0, dur: 0.18 });
        G.lastRoll = `${m.name}: ${cut} шкоди.`;
        if (L.hp <= 0) {
          L.hp = Math.max(1, Math.floor(L.maxHp * 0.35));
          G.mobs = [];
          G.grace = 1.6;
          G.swing = 0;
          log("Тебе збили з ніг. Відступи.");
          bump();
          return;
        }
      }
    }
  }
}

export function approachSpot(id: string) {
  const spot = G.map.spots.find((s) => s.id === id);
  if (!spot || G.mode !== "explore" || spot.kind === "fight" || spotTaken(spot)) return;
  const t = tileOf(G.x, G.y);
  const near = Math.max(Math.abs(spot.x - t.x), Math.abs(spot.y - t.y)) <= 2;
  if (near) {
    G.pending = "";
    G.path = [];
    openSpot(spot);
    return;
  }
  let tx = spot.x;
  let ty = spot.y;
  if (blocked(G.map, tx, ty, G.flags)) {
    for (const [dx, dy] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ] as const) {
      if (!blocked(G.map, tx + dx, ty + dy, G.flags)) {
        tx += dx;
        ty += dy;
        break;
      }
    }
  }
  G.pending = spot.id;
  G.hunt = false;
  G.lockTarget = false;
  G.path = route(tx, ty);
  if (!G.path.length && Math.max(Math.abs(spot.x - t.x), Math.abs(spot.y - t.y)) > 2) {
    log("Не дістатись. Підійди ближче й натисни Дію.");
  } else log(`${spot.label}. Підходжу.`);
  bump();
}

export function clickWorld(wx: number, wy: number) {
  const tx = Math.floor(wx / TILE);
  const ty = Math.floor(wy / TILE);
  if (G.mode === "explore") {
    let best: Mob | null = null;
    let bd = 0;
    for (const m of G.mobs) {
      if (m.hp <= 0 || !onBody(m.x, m.y, wx, wy)) continue;
      const d = Math.hypot(m.x - wx, m.y - wy);
      if (!best || d < bd) {
        bd = d;
        best = m;
      }
    }
    if (best) {
      G.target = best.uid;
      G.lockTarget = true;
      G.hunt = true;
      G.path = [];
      G.pending = "";
      fieldStrike(true);
      bump();
      return;
    }
    for (const f of G.map.fights) {
      if (G.cleared.includes(f.id) || G.mobs.some((m) => m.fight === f.id && m.hp > 0)) continue;
      let n = 0;
      let hit = false;
      let pickX = 0;
      let pickY = 0;
      let bestD = 1e9;
      for (const foe of f.foes) {
        for (let i = 0; i < foe.n; i++) {
          const x = (f.x + 3 + n * 3 + 0.5) * TILE;
          const y = (f.y + 1 + 0.92) * TILE;
          n += 1;
          if (!onBody(x, y, wx, wy)) continue;
          const d = Math.hypot(x - wx, y - wy);
          if (d < bestD) {
            bestD = d;
            hit = true;
            pickX = x;
            pickY = y;
          }
        }
      }
      if (!hit) continue;
      engage(f, true);
      let pick = G.mobs[0];
      let pd = 1e9;
      for (const m of G.mobs) {
        const d = Math.hypot(m.x - pickX, m.y - pickY);
        if (d < pd) {
          pd = d;
          pick = m;
        }
      }
      G.target = pick?.uid ?? "";
      G.hunt = true;
      fieldStrike(true);
      bump();
      return;
    }
    const folk = G.folk.find((f) => onBody(f.x, f.y, wx, wy));
    const spot =
      (folk ? G.map.spots.find((s) => s.id === folk.spot) : null) ??
      G.map.spots
        .filter((s) => s.kind !== "fight" && !spotTaken(s))
        .map((s) => ({ s, d: Math.hypot((s.x + 0.5) * TILE - wx, (s.y + 0.45) * TILE - wy) }))
        .filter((h) => h.d < 96)
        .sort((a, b) => a.d - b.d)[0]?.s;
    if (spot && spot.kind !== "fight" && !spotTaken(spot)) {
      approachSpot(spot.id);
      return;
    }
    if (!canWalk(tx, ty)) return;
    G.hunt = false;
    G.lockTarget = false;
    G.path = route(tx, ty);
    return;
  }
  if (G.mode !== "combat" || G.phase !== "plan") return;
  const me = currentPlanner();
  if (!me || me.ready) return;
  const on = G.units.find((u) => u.hp > 0 && u.x === tx && u.y === ty);
  if (G.aim && on) {
    const skill = G.aim.kind === "skill" && G.aim.skill ? skillById(heroOf(me), G.aim.skill) : null;
    const wantAlly = skill ? skill.target !== "enemy" : false;
    if (wantAlly ? on.side === "ally" : on.side === "foe") {
      const origin = me.plan ?? { moveX: me.x, moveY: me.y, action: "wait" as const };
      me.plan = {
        moveX: origin.moveX,
        moveY: origin.moveY,
        action: G.aim.kind === "skill" ? "skill" : "attack",
        skill: G.aim.skill,
        target: on.uid,
      };
      G.aim = null;
      bump();
    }
    return;
  }
  if (reachable(me).some((p) => p.x === tx && p.y === ty)) {
    const prev = me.plan;
    me.plan = {
      moveX: tx,
      moveY: ty,
      action: prev?.action ?? "wait",
      target: prev?.target,
      skill: prev?.skill,
      slot: prev?.slot,
    };
    bump();
  }
}

function ensurePlan(me: Unit): Plan {
  if (!me.plan) me.plan = { moveX: me.x, moveY: me.y, action: "wait" };
  return me.plan;
}

export function aimAttack() {
  const me = currentPlanner();
  if (!me || me.ready || G.phase !== "plan") return;
  G.aim = { kind: "attack" };
  const foe = nearest(me, living("foe"));
  if (!foe) {
    log("Немає кого бити.");
    bump();
    return;
  }
  setTarget(foe.uid);
}

export function aimSkill(id: string) {
  const me = currentPlanner();
  if (!me || me.ready || G.phase !== "plan") return;
  const h = heroOf(me);
  const sk = skillById(h, id);
  if (!sk || !h?.loadout.includes(id)) return;
  if (me.focus < sk.focus) {
    log("Замало зосередження.");
    bump();
    return;
  }
  G.aim = { kind: "skill", skill: id };
  if (sk.target === "self") {
    setTarget(me.uid);
    return;
  }
  if (sk.target === "ally") {
    const hurt = living("ally").sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0] ?? me;
    setTarget(hurt.uid);
    return;
  }
  const foe = nearest(me, living("foe"));
  if (!foe) {
    log("Немає цілі.");
    bump();
    return;
  }
  setTarget(foe.uid);
}

export function setTarget(uid: string) {
  const me = currentPlanner();
  if (!me || me.ready || G.phase !== "plan") return;
  const on = unitBy(uid);
  if (!on || on.hp <= 0) return;
  const plan = ensurePlan(me);
  const sk = G.aim?.kind === "skill" ? skillById(heroOf(me), G.aim.skill ?? "") : null;
  if (sk && sk.target === "enemy" && on.side !== "foe") return;
  if (sk && sk.target === "ally" && on.side !== "ally") return;
  if (!sk && on.side !== "foe" && G.aim?.kind !== "skill") {
    G.aim = { kind: "attack" };
  }
  plan.action = sk ? "skill" : "attack";
  plan.skill = sk?.id;
  plan.target = on.uid;
  G.aim = null;
  log(`${me.name}: ${sk?.name ?? "удар"} → ${on.name}.`);
  bump();
}

export function planGuard() {
  const me = currentPlanner();
  if (!me || me.ready) return;
  const plan = ensurePlan(me);
  me.plan = { ...plan, action: "guard", skill: undefined, target: undefined };
  G.aim = null;
  uAnim(me.uid, "defend");
  bump();
}

export function planItem(slot: 0 | 1) {
  const me = currentPlanner();
  if (!me || me.ready || !me.quickLeft[slot]) return;
  const plan = ensurePlan(me);
  me.plan = { ...plan, action: "item", slot };
  G.aim = null;
  bump();
}

export function planWait() {
  const me = currentPlanner();
  if (!me || me.ready) return;
  const plan = ensurePlan(me);
  me.plan = { ...plan, action: "wait", skill: undefined, target: undefined };
  G.aim = null;
  bump();
}

export function confirmActor() {
  const list = living("ally");
  const me = list[G.planner];
  if (!me || G.phase !== "plan") return;
  if (!me.plan) me.plan = { moveX: me.x, moveY: me.y, action: "wait" };
  const sk = me.plan.action === "skill" && me.plan.skill ? skillById(heroOf(me), me.plan.skill) : null;
  if ((me.plan.action === "attack" || (sk && sk.target === "enemy")) && !me.plan.target) {
    log("Обери ціль.");
    bump();
    return;
  }
  me.ready = true;
  G.aim = null;
  const next = list.findIndex((u, i) => i > G.planner && !u.ready);
  if (next >= 0) G.planner = next;
  bump();
}

export function allReady() {
  const list = living("ally");
  return list.length > 0 && list.every((u) => u.ready && u.plan);
}

export function executeRound() {
  if (G.phase !== "plan" || !allReady()) return;
  G.queue = [];
  const order = G.units.filter((u) => u.hp > 0);
  const scored = order.map((u) => ({
    u,
    score: Math.floor(u.stats.per / 2) + Math.floor(u.stats.dex / 2) + (has(u, "stun") ? -100 : 0),
  }));
  scored.sort((a, b) => b.score - a.score);
  for (const { u } of scored) {
    if (u.side === "foe") G.queue.push({ who: u.uid, run: () => foeAct(u.uid) });
    else G.queue.push({ who: u.uid, run: () => allyAct(u.uid) });
  }
  G.phase = "resolve";
  G.beat = 0.15;
  bump();
}

export function retreat() {
  if (G.mode !== "combat" || G.phase !== "plan" || G.round !== 1) return;
  G.x = G.fightBack.x;
  G.y = G.fightBack.y;
  writeBack(false);
  G.units = [];
  G.mode = "explore";
  G.grace = 1.2;
  log("Відступ до першого удару.");
  bump();
}

function writeBack(victory: boolean) {
  for (const u of G.units) {
    if (u.side !== "ally" || !u.heroUid) continue;
    const h = G.party.find((p) => p.uid === u.heroUid);
    if (!h) continue;
    h.hp = victory && u.hp <= 0 ? 1 : u.hp;
    h.focus = u.focus;
  }
}

function endCombat(victory: boolean) {
  const foes = G.units.filter((u) => u.side === "foe");
  if (victory) {
    let xp = 0;
    let gold = 0;
    const lines: string[] = [];
    const tier = REGIONS.find((r) => r.id === G.map.region)?.tier ?? 1;
    for (const f of foes) {
      const base = ENEMIES[f.enemyId ?? "drowned"] ?? ENEMIES.drowned!;
      xp += Math.round(base.xp * (1 + (tier - 1) * 0.25));
      gold += Math.round(base.gold * (1 + (tier - 1) * 0.2));
    }
    gold = Math.round(gold * 1.3);
    if (!G.cleared.includes(G.fightId)) G.cleared.push(G.fightId);
    const L = leader();
    if (L) L.gold += gold;
    const share = Math.max(1, Math.round(xp / Math.max(1, G.party.length)));
    for (const h of G.party) grantXp(h, share);
    lines.push(`Досвід кожному: ${share}.`, `Монети: ${gold}.`);
    if (G.fightId === "tract-ambush") setQuest("q-road:2");
    if (G.fightId === "crypt-boss") {
      setQuest("q-bell:999");
      setQuest("q-back:1");
      if (L && !L.bag.some((b) => b.id === "t-bell") && L.trinket !== "t-bell") {
        addItem(L, "t-bell", 1);
        lines.push("Уламок язика дзвона — у сумці.");
      }
    }
    const drop = G.fightId === "crypt-wraiths" ? "ton" : G.fightId === "tract-ambush" ? "pot" : "";
    if (drop && L) {
      addItem(L, drop, 1);
      lines.push(itemById(drop)?.name ?? drop);
    }
    writeBack(true);
    G.reward = null;
    G.mode = "explore";
    G.floats.push({ x: G.x, y: G.y - 46, text: `+${share} досвіду`, color: "#f2d48a", t: 0 });
    G.floats.push({ x: G.x, y: G.y - 64, text: `+${gold} монет`, color: "#e7d7a1", t: 0 });
    log(lines.join(" "));
  } else {
    writeBack(false);
    const L = leader();
    if (G.hardcore && L && L.hp <= 0) {
      G.epitaph = `${L.name} не повертається з ${G.map.name}. Хардкор стерто.`;
      try {
        localStorage.removeItem(HC);
        localStorage.removeItem(`${HC}-bak`);
      } catch {
        /* ignore */
      }
      G.party = [];
      G.units = [];
      G.mode = "title";
      bump();
      return;
    }
    for (const h of G.party) {
      if (h.hp <= 0) h.hp = Math.max(1, Math.floor(h.maxHp * 0.35));
    }
    if (L) L.gold = Math.max(0, L.gold - Math.ceil(L.gold * 0.1));
    if (G.hardcore) G.party = G.party.filter((h, i) => i === 0 || h.hp > 1);
    place(HAND.willow as GameMap, "default");
    log("Поразка. Варта приймає живих. Сутичка лишається.");
    G.reward = null;
    G.mode = "explore";
    G.floats.push({ x: G.x, y: G.y - 46, text: "Відступ до варти", color: "#e07070", t: 0 });
  }
  G.units = [];
  G.queue = [];
  persist();
  bump();
}

function tickStatuses(u: Unit) {
  for (const s of [...u.statuses]) {
    if ((s.id === "burn" || s.id === "bleed") && u.hp > 0) {
      u.hp = Math.max(0, u.hp - s.pot);
      floatAt(u, `-${s.pot}`, s.id === "burn" ? "#c6a15a" : "#8f3d3a");
    }
    if (s.id === "regen" && u.hp > 0) healUnit(u, s.pot, false);
    s.turns -= 1;
  }
  u.statuses = u.statuses.filter((s) => s.turns > 0);
}

function moveUnit(u: Unit, x: number, y: number) {
  if (blocked(G.map, x, y, G.flags) || occupied(x, y, u.uid)) return;
  if (x !== u.x || y !== u.y) {
    const dx = x - u.x;
    const dy = y - u.y;
    if (Math.abs(dx) > Math.abs(dy)) u.facing = dx > 0 ? 2 : 1;
    else if (dy > 0) u.facing = 0;
    else if (dy < 0) u.facing = 3;
  }
  u.x = x;
  u.y = y;
}

function foeAct(id: string) {
  const u = unitBy(id);
  if (!u || u.hp <= 0) return;
  if (has(u, "stun")) {
    floatAt(u, "оглушення", "#8aa0ab");
    u.statuses = u.statuses.filter((s) => s.id !== "stun");
    return;
  }
  tickStatuses(u);
  if (u.hp <= 0) return;
  const intent = u.intent;
  if (intent?.kind === "slam") {
    uAnim(u.uid, "attack", 0, 1);
    for (const o of G.units) {
      if (o.uid === u.uid || o.hp <= 0) continue;
      if (cheb(o.x, o.y, u.x, u.y) <= 1) applyDamage(o, u.dmg + rollDie(u.die) + 4, u, 0);
    }
    floatAt(u, "ДЗВІН", "#c6a15a");
    return;
  }
  if (intent?.kind === "summon") {
    u.didSummon = true;
    const spot = [
      { x: u.x + 1, y: u.y },
      { x: u.x - 1, y: u.y },
      { x: u.x, y: u.y + 1 },
      { x: u.x, y: u.y - 1 },
    ].find((p) => !blocked(G.map, p.x, p.y, G.flags) && !occupied(p.x, p.y));
    if (spot) {
      G.units.push(makeFoe("wraith", "Покликаний хорист", spot.x, spot.y));
      log("Дзвонар кличе хориста.");
    }
    uAnim(u.uid, "cast", 0, -1);
    return;
  }
  let target = intent && intent.kind === "attack" ? unitBy(intent.target) : null;
  if (!target || target.hp <= 0) target = nearest(u, living("ally"));
  if (!target) return;
  if (u.intentTo) moveUnit(u, u.intentTo.x, u.intentTo.y);
  if (cheb(u.x, u.y, target.x, target.y) > u.range) {
    const step = stepToward(u, target.x, target.y, u.move);
    moveUnit(u, step.x, step.y);
  }
  if (target.hp > 0 && cheb(u.x, u.y, target.x, target.y) <= u.range) strike(u, target, u.acc, u.stats.str, u.dmg, u.die, 0);
}

function strike(att: Unit, defn: Unit, acc: number, stat: number, power: number, die: number, leech: number) {
  face(att, defn.x, defn.y);
  if (att.ranged || cheb(att.x, att.y, defn.x, defn.y) > 1) {
    const row = att.sprite === "sorceress" ? 1 : att.sprite === "witch" ? 3 : att.sprite === "herbalist" ? 2 : att.sprite === "wraith" ? 3 : 0;
    G.shots.push({
      x: (att.x + 0.5) * TILE,
      y: (att.y + 0.35) * TILE,
      tx: (defn.x + 0.5) * TILE,
      ty: (defn.y + 0.35) * TILE,
      row,
      t: 0,
      dur: 0.28,
    });
  }
  const h = heroOf(att);
  const gear = h ? Math.round(gearMods(h).power / 2) : 0;
  const dmg = blowDamage(power + gear, stat);
  applyDamage(defn, dmg, att, leech);
  const line = `${att.name} → ${defn.name}: ${dmg} шкоди.`;
  G.lastRoll = line;
  log(line);
  bump();
  return true;
}

function allyAct(id: string) {
  const u = unitBy(id);
  if (!u || u.hp <= 0 || !u.plan) return;
  if (has(u, "stun")) {
    floatAt(u, "оглушення", "#8aa0ab");
    u.statuses = u.statuses.filter((s) => s.id !== "stun");
    return;
  }
  tickStatuses(u);
  if (u.hp <= 0) return;
  const p = u.plan;
  const stepped = stepToward(u, p.moveX, p.moveY, u.move);
  moveUnit(u, stepped.x, stepped.y);
  if (p.action === "wait") return;
  if (p.action === "guard") {
    putStatus(u, "guard", 1, 3);
    uAnim(u.uid, "defend");
    floatAt(u, "захист", "#c6a15a");
    return;
  }
  if (p.action === "item") {
    const slot = p.slot ?? 0;
    const h = heroOf(u);
    if (!h || !u.quickLeft[slot]) return;
    const itemId = h.quick[slot];
    const it = itemById(itemId);
    if (!it || !takeItem(h, itemId)) {
      log("Предмета немає в сумці.");
      return;
    }
    u.quickLeft[slot] = false;
    if (it.heal) healUnit(u, it.heal, true);
    if (it.focus) {
      u.focus = Math.min(u.maxFocus, u.focus + it.focus);
      floatAt(u, `зосередження +${it.focus}`, "#8aa0ab");
    }
    return;
  }
  if (p.action === "attack") {
    let target = p.target ? unitBy(p.target) : null;
    if (!target || target.hp <= 0 || target.side !== "foe") {
      const near = living("foe").filter((o) => cheb(u.x, u.y, o.x, o.y) <= u.range);
      target = nearest(u, near);
    }
    if (!target || cheb(u.x, u.y, target.x, target.y) > u.range) {
      if (p.target) log(`${u.name}: ціль недосяжна.`);
      return;
    }
    strike(u, target, u.acc, u.stats[u.primary], u.dmg, u.die, u.leech);
    return;
  }
  if (p.action !== "skill" || !p.skill) return;
  const h = heroOf(u);
  const sk = skillById(h, p.skill);
  if (!sk || !h || u.focus < sk.focus) return;
  let target = p.target ? unitBy(p.target) : u;
  if (sk.target === "enemy" && (!target || target.hp <= 0 || target.side !== "foe")) {
    log(`${sk.name} скасовано: цілі немає. Зосередження лишається.`);
    return;
  }
  if (sk.target !== "self" && target && cheb(u.x, u.y, target.x, target.y) > sk.range) {
    log(`${sk.name}: занадто далеко. Зосередження лишається.`);
    return;
  }
  const pm = pathMods(h);
  const radius = sk.radius + (pm.aoe > 0 && sk.radius > 0 ? 1 : 0);
  const victims =
    sk.target === "self"
      ? G.units.filter((o) => o.side === "ally" && o.hp > 0 && cheb(o.x, o.y, u.x, u.y) <= radius && (radius > 0 || o.uid === u.uid))
      : sk.target === "ally"
        ? G.units.filter((o) => o.side === "ally" && (o.hp > 0 || sk.revive) && target && cheb(o.x, o.y, target.x, target.y) <= radius && (radius > 0 || o.uid === target.uid))
        : G.units.filter((o) => o.side === "foe" && o.hp > 0 && target && cheb(o.x, o.y, target.x, target.y) <= radius && (radius > 0 || o.uid === target.uid));
  if (!victims.length) {
    log(`${sk.name} немає куди лягти. Зосередження лишається.`);
    return;
  }
  u.focus -= sk.focus;
  const stat = u.stats[sk.stat];
  const pow = rankedPower(h, sk.power, sk.id);
  const pot = (sk.status?.pot ?? 0) + Math.floor((skillRank(h, sk.id) - 1) / 2);
  uAnim(u.uid, sk.kind === "dmg" ? "attack" : "cast", target ? target.x - u.x : 0, target ? target.y - u.y : -1);
  for (const v of victims) {
    if (sk.kind === "heal") {
      healUnit(v, pow + Math.floor(stat / 3) + Math.round(pm.heal / 2), !!sk.revive);
      if (sk.status) putStatus(v, sk.status.id, sk.status.turns, pot, u.uid);
      if (sk.id === "he-clean") clearBad(v);
    } else if (sk.kind === "buff") {
      if (sk.status) putStatus(v, sk.status.id, sk.status.turns, pot, u.uid);
      G.lastRoll = `${u.name}: ${sk.name}. ${statusName(sk.status?.id)}${sk.status ? `, ${sk.status.turns} х.` : ""}`;
      floatAt(v, statusName(sk.status?.id) || sk.name, "#c6a15a");
    } else if (sk.kind === "debuff") {
      if (pow) strike(u, v, sk.acc + pm.acc, stat, pow + Math.round(pm.dmg / 2), 0, sk.leech ?? 0);
      if (sk.status) putStatus(v, sk.status.id, sk.status.turns, pot, u.uid);
      G.lastRoll = `${u.name}: ${sk.name}. ${statusName(sk.status?.id)}${sk.status ? `, ${sk.status.turns} х.` : ""}`;
    } else {
      let bonus = 0;
      if (sk.id === "as-back" && (has(v, "mark") || has(v, "vuln"))) bonus += 6;
      if (sk.id === "va-feast" && has(v, "bleed")) bonus += 4;
      strike(u, v, sk.acc + pm.acc, stat, pow + Math.round(pm.dmg / 2) + bonus, 0, sk.leech ?? u.leech);
      if (sk.status && v.hp > 0) {
        putStatus(v, sk.status.id, sk.status.turns, pot, u.uid);
        G.lastRoll = `${G.lastRoll} ${statusName(sk.status.id)}, ${sk.status.turns} х.`;
      }
    }
  }
}

function finishBeats() {
  if (!living("foe").length) {
    endCombat(true);
    return;
  }
  if (!living("ally").length) {
    endCombat(false);
    return;
  }
  G.round += 1;
  G.phase = "plan";
  G.planner = 0;
  G.aim = null;
  for (const u of living("ally")) {
    u.ready = false;
    u.plan = null;
    u.focus = Math.min(u.maxFocus, u.focus + 1);
    const def = u.hero ? HEROES[u.hero] : null;
    const chill = has(u, "chill");
    u.move = Math.max(1, (def?.move ?? u.move) - (chill?.pot ?? 0));
  }
  refreshIntents();
  bump();
}

export function previewChance() {
  const me = currentPlanner();
  if (!me?.plan?.target) return null;
  const t = unitBy(me.plan.target);
  if (!t) return null;
  const h = heroOf(me);
  if (me.plan.action === "attack") {
    return { name: t.name, chance: hitChance(me, t, me.acc + (h ? pathMods(h).acc : 0), me.stats[me.primary]), note: "базовий удар" };
  }
  if (me.plan.action === "skill" && me.plan.skill) {
    const sk = skillById(h, me.plan.skill);
    if (!sk) return null;
    if (sk.reliable || sk.kind === "heal" || sk.kind === "buff") return { name: t.name, chance: 100, note: sk.name };
    return { name: t.name, chance: hitChance(me, t, sk.acc + (h ? pathMods(h).acc : 0), me.stats[sk.stat]), note: sk.name };
  }
  return null;
}

function worldFromStick(sx: number, sy: number) {
  const dx = (sx + sy) * 0.5;
  const dy = (sy - sx) * 0.5;
  const yaw = G.viewYaw || 0;
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  const x = dx * c + dy * s;
  const y = -dx * s + dy * c;
  const m = Math.hypot(x, y) || 1;
  return { x: x / m, y: y / m };
}

function faceStick(vx: number, vy: number) {
  const ax = Math.abs(vx);
  const ay = Math.abs(vy);
  if (ax < 0.18 && ay < 0.18) return;
  if (ax > ay * 1.4) G.facing = vx > 0 ? 2 : 1;
  else if (ay > ax * 1.4) G.facing = vy > 0 ? 0 : 3;
}

export function blowDamage(power: number, stat: number) {
  return Math.max(1, Math.round(power + stat / 2));
}

export function statusName(id?: string) {
  const names: Record<string, string> = {
    burn: "Опік",
    bleed: "Кров",
    chill: "Холод",
    stun: "Оглушення",
    mark: "Мітка",
    vuln: "Вразливість",
    curse: "Слабкість",
    ward: "Щит",
    regen: "Віднова",
    cover: "Прикриття",
    guard: "Захист",
  };
  return id ? (names[id] ?? id) : "";
}

export function lookHeading(yaw = G.viewYaw) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  const east = -(c + s);
  const south = s - c;
  return Math.atan2(east, -south);
}

export function facingHeading(facing: number) {
  if (facing === 1) return -Math.PI / 2;
  if (facing === 2) return Math.PI / 2;
  if (facing === 0) return Math.PI;
  return 0;
}

let yawVel = 0;

function wrapPi(a: number) {
  const t = Math.PI * 2;
  while (a > Math.PI) a -= t;
  while (a < -Math.PI) a += t;
  return a;
}

export function step(dt: number) {
  dt = Math.min(0.05, dt);
  G.time += dt;
  const err = wrapPi(G.yaw - G.viewYaw);
  const desired = Math.max(-3.4, Math.min(3.4, err * 5.5));
  const accel = Math.max(-11, Math.min(11, (desired - yawVel) / Math.max(0.016, dt)));
  yawVel += accel * dt;
  G.viewYaw += yawVel * dt;
  if (Math.abs(err) < 0.0006 && Math.abs(yawVel) < 0.02) {
    G.viewYaw = G.yaw;
    yawVel = 0;
  }
  const zErr = (G.zoom || 1) - (G.viewZoom || 1);
  G.viewZoom = (G.viewZoom || 1) + zErr * (1 - Math.exp(-dt * 7));
  for (const id of Object.keys(G.back)) {
    if (G.time < G.back[id]!) continue;
    delete G.back[id];
    G.cleared = G.cleared.filter((c) => c !== id);
    const fight = G.map.fights.find((f) => f.id === id);
    if (fight && !G.mobs.some((m) => m.fight === id && m.hp > 0)) pushPack(fight, true);
  }
  G.grace = Math.max(0, G.grace - dt);
  G.since += dt;
  for (const id of Object.keys(G.anim)) G.anim[id]!.t += dt;
  for (const s of G.shots) s.t += dt;
  G.shots = G.shots.filter((s) => s.t < s.dur);
  for (const f of G.floats) f.t += dt;
  G.floats = G.floats.filter((f) => f.t < 1.5);

  if (G.mode === "combat" && G.phase === "resolve") {
    G.beat -= dt;
    G.speed = 0;
    G.moving = false;
    if (G.beat <= 0) {
      const b = G.queue.shift();
      if (!b) finishBeats();
      else {
        b.run();
        G.beat = G.reduced ? 0.28 : 0.58;
        if (!living("foe").length || !living("ally").length) {
          G.queue = [];
          G.beat = 0.35;
        }
      }
    }
    return;
  }

  if (G.mode !== "explore") {
    G.speed = 0;
    G.moving = false;
    return;
  }
  ensurePacks();

  let vx = G.stick.x;
  let vy = G.stick.y;
  if (keys.has("KeyA") || keys.has("ArrowLeft")) vx -= 1;
  if (keys.has("KeyD") || keys.has("ArrowRight")) vx += 1;
  if (keys.has("KeyW") || keys.has("ArrowUp")) vy -= 1;
  if (keys.has("KeyS") || keys.has("ArrowDown")) vy += 1;
  const mag = Math.hypot(vx, vy);
  const norm = mag > 1 ? mag : 1;
  vx /= norm;
  vy /= norm;
  const world = mag > 0.12 ? worldFromStick(vx, vy) : { x: 0, y: 0 };
  const speed = 168;
  G.atkCd = Math.max(0, G.atkCd - dt);
  G.swing = Math.max(0, G.swing - dt);
  for (const id of Object.keys(G.skillCd)) {
    G.skillCd[id] = Math.max(0, (G.skillCd[id] ?? 0) - dt);
    if (G.skillCd[id] <= 0) delete G.skillCd[id];
  }
  if (mag > 0.12) G.hunt = false;
  if (G.hunt && !G.mobs.some((m) => m.uid === G.target && m.hp > 0)) G.hunt = false;
  if ((G.atkHold || G.hunt) && G.atkCd <= 0 && G.swing <= 0) fieldStrike(true);
  const lead = leader();
  if (lead && G.time % 1 < dt) lead.focus = Math.min(lead.maxFocus, lead.focus + 1);
  if (G.swing > 0) {
    G.path = [];
    G.speed = 0;
    G.moving = false;
  } else if (mag > 0.12) {
    G.path = [];
    tryMove(world.x * speed * dt, world.y * speed * dt);
    G.speed = speed * Math.min(1, mag);
    G.moving = true;
    G.walk += dt * G.speed;
    faceStick(world.x, world.y);
  } else if (G.path.length) {
    const n = G.path[0]!;
    const cx = (n.x + 0.5) * TILE;
    const cy = (n.y + 0.5) * TILE;
    const dx = cx - G.x;
    const dy = cy - G.y;
    const d = Math.hypot(dx, dy) || 1;
    const stepLen = Math.min(d, speed * dt);
    tryMove((dx / d) * stepLen, (dy / d) * stepLen);
    G.speed = speed;
    G.moving = true;
    G.walk += dt * speed;
    faceStick(dx, dy);
    if (Math.hypot(G.x - cx, G.y - cy) < 3) G.path.shift();
  } else {
    G.speed = 0;
    G.moving = false;
  }
  tickMobs(dt);
  tickFolk(dt);
  if (G.pending && !G.path.length) {
    const spot = G.map.spots.find((s) => s.id === G.pending);
    const t = tileOf(G.x, G.y);
    const near = !!spot && Math.max(Math.abs(spot.x - t.x), Math.abs(spot.y - t.y)) <= 2;
    G.pending = "";
    if (spot && near) openSpot(spot);
  }
  if (G.mobs.length || G.atkCd > 0 || G.swing > 0) {
    G.uiAcc += dt;
    if (G.uiAcc > 0.12) {
      G.uiAcc = 0;
      bump();
    }
  }
  tryFight();
  if (G.since > 8) {
    G.since = 0;
    persist();
  }
}

function tryMove(dx: number, dy: number) {
  const r = 10;
  const attempt = (nx: number, ny: number) => {
    const points = [
      [nx - r, ny],
      [nx + r, ny],
      [nx, ny - r],
      [nx, ny + r],
    ];
    return points.every(([x, y]) => canWalk(Math.floor(x / TILE), Math.floor(y / TILE)));
  };
  if (attempt(G.x + dx, G.y)) G.x += dx;
  if (attempt(G.x, G.y + dy)) G.y += dy;
}

export function rotateView(dir: number) {
  G.yaw += dir * (Math.PI / 2);
}

export function addYaw(delta: number) {
  G.yaw += delta;
}

export function addZoom(delta: number) {
  G.zoom = Math.min(1.85, Math.max(0.62, G.zoom + delta));
}

export function setStick(x: number, y: number) {
  G.stick.x = x;
  G.stick.y = y;
}

export function bootInput() {
  const down = (e: KeyboardEvent) => {
    keys.add(e.code);
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
    if (e.code === "KeyE" && G.mode === "explore") interact();
    if (e.code === "Escape") closePanel();
    if (e.code === "KeyI") openPanel("sheet");
    if (e.code === "KeyJ") openPanel("journal");
    if (G.mode === "explore" && /^Digit[1-4]$/.test(e.code)) {
      const L = leader();
      const id = L?.loadout[Number(e.code.slice(5)) - 1];
      if (id) fieldCast(id);
      e.preventDefault();
    }
  };
  const up = (e: KeyboardEvent) => keys.delete(e.code);
  const blur = () => {
    keys.clear();
    G.stick.x = 0;
    G.stick.y = 0;
  };
  window.addEventListener("keydown", down);
  window.addEventListener("keyup", up);
  window.addEventListener("blur", blur);
  installProbe();
  return () => {
    window.removeEventListener("keydown", down);
    window.removeEventListener("keyup", up);
    window.removeEventListener("blur", blur);
  };
}

export function installProbe() {
  if (typeof window === "undefined") return;
  G.reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  window.__controlsTest = {
    setKeys(codes: string[]) {
      keys.clear();
      for (const c of codes) keys.add(c);
    },
    setStick(x: number, y: number) {
      G.stick.x = x;
      G.stick.y = y;
    },
    getX: () => G.x,
    getY: () => G.y,
    getSpeed: () => G.speed,
    getYaw: () => 0,
  };
  window.__echo = {
    start() {
      if (G.mode === "title" || !G.party.length) beginGame("archer", false);
      else G.mode = "explore";
      bump();
    },
  };
}

declare global {
  interface Window {
    __controlsTest?: {
      setKeys: (codes: string[]) => void;
      setStick: (x: number, y: number) => void;
      getX: () => number;
      getY: () => number;
      getSpeed: () => number;
      getYaw: () => number;
    };
    __echo?: { start: () => void };
  }
}

if (typeof window !== "undefined") installProbe();


