export type HeroId = "sorceress" | "herbalist" | "archer" | "vampire" | "barbarian" | "assassin" | "witch" | "paladin";
export type Stat = "str" | "dex" | "end" | "int" | "wil" | "per";
export type StatusId = "burn" | "bleed" | "chill" | "ward" | "regen" | "curse" | "mark" | "stun" | "vuln" | "guard" | "cover";
export type ArmorKind = "light" | "medium" | "heavy";

export const STATS: Stat[] = ["str", "dex", "end", "int", "wil", "per"];
export const STAT_LABEL: Record<Stat, string> = {
  str: "Сила",
  dex: "Спритність",
  end: "Витривалість",
  int: "Розум",
  wil: "Воля",
  per: "Чутливість",
};
export const HERO_ORDER: HeroId[] = ["sorceress", "herbalist", "archer", "vampire", "barbarian", "assassin", "witch", "paladin"];

export type HeroDef = {
  id: HeroId;
  name: string;
  line: string;
  blurb: string;
  bars: number[];
  hp: number;
  range: number;
  move: number;
  power: number;
  die: number;
  ranged: boolean;
  primary: Stat;
  armor: ArmorKind;
  rec: Stat[];
};

export const HEROES: Record<HeroId, HeroDef> = {
  sorceress: { id: "sorceress", name: "Чародійка", line: "Кола й іскри", blurb: "Б'є здалеку вогнем і кригою, сама тендітна.", bars: [8, 3, 4, 7, 6], hp: 22, range: 5, move: 4, power: 4, die: 6, ranged: true, primary: "int", armor: "light", rec: ["int", "wil"] },
  herbalist: { id: "herbalist", name: "Травниця", line: "Пов'язки й шипи", blurb: "Тримає загін на ногах і коле тих, хто підійшов.", bars: [3, 6, 9, 5, 4], hp: 24, range: 3, move: 4, power: 2, die: 4, ranged: true, primary: "wil", armor: "light", rec: ["wil", "int"] },
  archer: { id: "archer", name: "Лучниця", line: "Одна шия, потім натовп", blurb: "Далекий постріл і мітки. Не любить стояти впритул.", bars: [8, 4, 2, 3, 5], hp: 24, range: 5, move: 5, power: 4, die: 8, ranged: true, primary: "dex", armor: "light", rec: ["dex", "per"] },
  vampire: { id: "vampire", name: "Вампір", line: "Кров за кров", blurb: "Ближній біль, який повертається в жили.", bars: [7, 6, 3, 4, 5], hp: 26, range: 1, move: 5, power: 4, die: 8, ranged: false, primary: "dex", armor: "light", rec: ["dex", "wil"] },
  barbarian: { id: "barbarian", name: "Варвар", line: "Сокира і крик", blurb: "Товстий, гучний, б'є сусідів разом із ціллю.", bars: [9, 8, 1, 3, 2], hp: 32, range: 1, move: 4, power: 5, die: 8, ranged: false, primary: "str", armor: "medium", rec: ["str", "end"] },
  assassin: { id: "assassin", name: "Вбивця", line: "Мітка, потім спина", blurb: "Один точний ніж після підготовки.", bars: [8, 4, 1, 4, 7], hp: 24, range: 1, move: 5, power: 4, die: 8, ranged: false, primary: "dex", armor: "light", rec: ["dex", "per"] },
  witch: { id: "witch", name: "Відьма", line: "Прокляття раніше удару", blurb: "Робить ворога слабшим, потім кличе крука.", bars: [5, 4, 4, 9, 6], hp: 22, range: 4, move: 4, power: 3, die: 6, ranged: true, primary: "wil", armor: "light", rec: ["wil", "int"] },
  paladin: { id: "paladin", name: "Паладін", line: "Щит і кара", blurb: "Закриває своїх і б'є тих, хто лишився.", bars: [6, 8, 7, 3, 3], hp: 30, range: 1, move: 3, power: 4, die: 6, ranged: false, primary: "str", armor: "heavy", rec: ["str", "wil"] },
};

export type Skill = {
  id: string;
  hero: HeroId;
  name: string;
  blurb: string;
  kind: "dmg" | "heal" | "buff" | "debuff";
  target: "enemy" | "ally" | "self";
  range: number;
  radius: number;
  focus: number;
  power: number;
  die: number;
  stat: Stat;
  acc: number;
  reliable?: boolean;
  revive?: boolean;
  leech?: number;
  cap?: boolean;
  status?: { id: StatusId; turns: number; pot: number };
};

function sk(p: Skill): Skill {
  return p;
}

export const SKILLS: Skill[] = [
  sk({ id: "so-fire", hero: "sorceress", name: "Полум'я", blurb: "Коло вогню.", kind: "dmg", target: "enemy", range: 4, radius: 1, focus: 2, power: 4, die: 6, stat: "int", acc: 1, status: { id: "burn", turns: 2, pot: 3 } }),
  sk({ id: "so-ice", hero: "sorceress", name: "Крига", blurb: "Сковує кроки.", kind: "dmg", target: "enemy", range: 4, radius: 1, focus: 2, power: 3, die: 6, stat: "int", acc: 1, status: { id: "chill", turns: 2, pot: 1 } }),
  sk({ id: "so-bolt", hero: "sorceress", name: "Блискавка", blurb: "Б'є ціль і сусіда.", kind: "dmg", target: "enemy", range: 4, radius: 1, focus: 3, power: 6, die: 8, stat: "int", acc: 2 }),
  sk({ id: "so-storm", hero: "sorceress", name: "Шторм", blurb: "Дороге широке коло.", kind: "dmg", target: "enemy", range: 4, radius: 2, focus: 4, power: 5, die: 8, stat: "int", acc: 0 }),
  sk({ id: "so-spark", hero: "sorceress", name: "Іскра", blurb: "Дешевий точний постріл.", kind: "dmg", target: "enemy", range: 5, radius: 0, focus: 1, power: 3, die: 6, stat: "int", acc: 2 }),
  sk({ id: "so-ward", hero: "sorceress", name: "Скляний щит", blurb: "Малий бар'єр собі.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "ward", turns: 2, pot: 2 } }),
  sk({ id: "he-bind", hero: "herbalist", name: "Жива пов'язка", blurb: "Надійне лікування.", kind: "heal", target: "ally", range: 3, radius: 0, focus: 2, power: 10, die: 0, stat: "wil", acc: 0, reliable: true, revive: true }),
  sk({ id: "he-root", hero: "herbalist", name: "Корінь", blurb: "Відновлення кілька ходів.", kind: "heal", target: "ally", range: 3, radius: 0, focus: 2, power: 4, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "regen", turns: 3, pot: 3 } }),
  sk({ id: "he-clean", hero: "herbalist", name: "Очищення", blurb: "Знімає отруту й прокльони.", kind: "heal", target: "ally", range: 3, radius: 0, focus: 1, power: 4, die: 0, stat: "wil", acc: 0, reliable: true }),
  sk({ id: "he-garden", hero: "herbalist", name: "Сад", blurb: "Мале коло лікування.", kind: "heal", target: "ally", range: 3, radius: 1, focus: 3, power: 7, die: 0, stat: "wil", acc: 0, reliable: true }),
  sk({ id: "he-thorn", hero: "herbalist", name: "Шип", blurb: "Квола шкода і холод.", kind: "dmg", target: "enemy", range: 3, radius: 0, focus: 1, power: 2, die: 4, stat: "int", acc: 1, status: { id: "chill", turns: 1, pot: 1 } }),
  sk({ id: "he-pollen", hero: "herbalist", name: "Пилок", blurb: "Ворог б'є слабше.", kind: "debuff", target: "enemy", range: 3, radius: 1, focus: 2, power: 0, die: 0, stat: "wil", acc: 2, status: { id: "curse", turns: 2, pot: 2 } }),
  sk({ id: "ar-quick", hero: "archer", name: "Швидкий постріл", blurb: "Точна стріла.", kind: "dmg", target: "enemy", range: 5, radius: 0, focus: 1, power: 4, die: 8, stat: "dex", acc: 3 }),
  sk({ id: "ar-burst", hero: "archer", name: "Розривна стріла", blurb: "Мале коло.", kind: "dmg", target: "enemy", range: 5, radius: 1, focus: 2, power: 3, die: 6, stat: "dex", acc: 1 }),
  sk({ id: "ar-trap", hero: "archer", name: "Пастка", blurb: "Ціль отримує кровотечу.", kind: "dmg", target: "enemy", range: 4, radius: 0, focus: 2, power: 2, die: 6, stat: "dex", acc: 1, status: { id: "bleed", turns: 3, pot: 3 } }),
  sk({ id: "ar-volley", hero: "archer", name: "Залп", blurb: "Кілька цілей поруч.", kind: "dmg", target: "enemy", range: 5, radius: 1, focus: 3, power: 4, die: 6, stat: "dex", acc: 0 }),
  sk({ id: "ar-oil", hero: "archer", name: "Оливна стріла", blurb: "Мітка на цілі.", kind: "debuff", target: "enemy", range: 5, radius: 0, focus: 1, power: 1, die: 4, stat: "dex", acc: 2, status: { id: "mark", turns: 3, pot: 3 } }),
  sk({ id: "ar-follow", hero: "archer", name: "Слідування", blurb: "Наступний удар точніший.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "per", acc: 0, reliable: true, status: { id: "mark", turns: 2, pot: 2 } }),
  sk({ id: "va-bite", hero: "vampire", name: "Укус", blurb: "Шкода повертається кров'ю.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 1, power: 4, die: 8, stat: "dex", acc: 1, leech: 0.45 }),
  sk({ id: "va-lance", hero: "vampire", name: "Багряний укол", blurb: "Кровотеча.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 2, power: 3, die: 8, stat: "dex", acc: 2, status: { id: "bleed", turns: 3, pot: 3 }, leech: 0.25 }),
  sk({ id: "va-mist", hero: "vampire", name: "Імла", blurb: "Бар'єр із чужої крові.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "ward", turns: 2, pot: 2 } }),
  sk({ id: "va-feast", hero: "vampire", name: "Бенкет", blurb: "Сильніший укус по скривавленій цілі.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 2, power: 6, die: 8, stat: "dex", acc: 1, leech: 0.4 }),
  sk({ id: "va-chain", hero: "vampire", name: "Ланцюг спраги", blurb: "Лікує лише з нанесеної шкоди.", kind: "dmg", target: "enemy", range: 2, radius: 1, focus: 3, power: 3, die: 6, stat: "dex", acc: 0, leech: 0.3 }),
  sk({ id: "va-still", hero: "vampire", name: "Тиша жил", blurb: "Мале самолікування.", kind: "heal", target: "self", range: 0, radius: 0, focus: 2, power: 6, die: 0, stat: "wil", acc: 0, reliable: true }),
  sk({ id: "ba-cleave", hero: "barbarian", name: "Розсічення", blurb: "Удар по сусідах.", kind: "dmg", target: "enemy", range: 1, radius: 1, focus: 2, power: 5, die: 8, stat: "str", acc: 1 }),
  sk({ id: "ba-rage", hero: "barbarian", name: "Лють", blurb: "Наступні удари сильніші.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "str", acc: 0, reliable: true, status: { id: "guard", turns: 2, pot: 3 } }),
  sk({ id: "ba-crush", hero: "barbarian", name: "Злам", blurb: "Важкий удар, ціль вразлива.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 2, power: 6, die: 10, stat: "str", acc: 0, status: { id: "vuln", turns: 2, pot: 2 } }),
  sk({ id: "ba-shout", hero: "barbarian", name: "Крик", blurb: "Коротке оглушення.", kind: "debuff", target: "enemy", range: 2, radius: 1, focus: 2, power: 0, die: 0, stat: "str", acc: 1, status: { id: "stun", turns: 1, pot: 1 } }),
  sk({ id: "ba-leap", hero: "barbarian", name: "Стрибок", blurb: "Шкода здалеку.", kind: "dmg", target: "enemy", range: 3, radius: 0, focus: 2, power: 4, die: 8, stat: "str", acc: 1 }),
  sk({ id: "ba-hide", hero: "barbarian", name: "Шкіра", blurb: "Тимчасова броня.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "end", acc: 0, reliable: true, status: { id: "ward", turns: 2, pot: 3 } }),
  sk({ id: "as-back", hero: "assassin", name: "У спину", blurb: "Дуже боляче по мітці.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 2, power: 8, die: 8, stat: "dex", acc: 2 }),
  sk({ id: "as-trap", hero: "assassin", name: "Петля", blurb: "Кровотеча і холод.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 2, power: 3, die: 6, stat: "dex", acc: 2, status: { id: "bleed", turns: 3, pot: 4 } }),
  sk({ id: "as-smoke", hero: "assassin", name: "Дим", blurb: "Сам стає важчою ціллю.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "dex", acc: 0, reliable: true, status: { id: "ward", turns: 1, pot: 3 } }),
  sk({ id: "as-mark", hero: "assassin", name: "Мітка", blurb: "Готує сильний удар.", kind: "debuff", target: "enemy", range: 3, radius: 0, focus: 1, power: 0, die: 0, stat: "per", acc: 3, status: { id: "mark", turns: 3, pot: 4 } }),
  sk({ id: "as-fan", hero: "assassin", name: "Віяло", blurb: "Кинджали по сусідах.", kind: "dmg", target: "enemy", range: 2, radius: 1, focus: 2, power: 3, die: 6, stat: "dex", acc: 1 }),
  sk({ id: "as-wait", hero: "assassin", name: "Тінь", blurb: "Точність на один хід.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "dex", acc: 0, reliable: true, status: { id: "mark", turns: 1, pot: 3 } }),
  sk({ id: "wi-hex", hero: "witch", name: "Прокляття", blurb: "Ціль б'є слабше.", kind: "debuff", target: "enemy", range: 4, radius: 0, focus: 1, power: 1, die: 4, stat: "wil", acc: 2, status: { id: "curse", turns: 3, pot: 3 } }),
  sk({ id: "wi-vuln", hero: "witch", name: "Тріщина", blurb: "Броня цілі тоншає.", kind: "debuff", target: "enemy", range: 4, radius: 0, focus: 2, power: 0, die: 0, stat: "wil", acc: 2, status: { id: "vuln", turns: 3, pot: 3 } }),
  sk({ id: "wi-coven", hero: "witch", name: "Коло", blurb: "Прокляття на кількох.", kind: "debuff", target: "enemy", range: 4, radius: 1, focus: 3, power: 2, die: 4, stat: "wil", acc: 1, status: { id: "curse", turns: 2, pot: 2 } }),
  sk({ id: "wi-crow", hero: "witch", name: "Крук", blurb: "Мала шкода і мітка.", kind: "dmg", target: "enemy", range: 4, radius: 0, focus: 1, power: 3, die: 6, stat: "int", acc: 2, status: { id: "mark", turns: 2, pot: 2 } }),
  sk({ id: "wi-fear", hero: "witch", name: "Страх", blurb: "Може оглушити.", kind: "debuff", target: "enemy", range: 3, radius: 0, focus: 2, power: 0, die: 0, stat: "wil", acc: 1, status: { id: "stun", turns: 1, pot: 1 } }),
  sk({ id: "wi-veil", hero: "witch", name: "Вуаль", blurb: "Захист союзнику.", kind: "buff", target: "ally", range: 3, radius: 0, focus: 1, power: 0, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "ward", turns: 2, pot: 2 } }),
  sk({ id: "pa-cover", hero: "paladin", name: "Прикриття", blurb: "Перехоплює удар по союзнику.", kind: "buff", target: "ally", range: 1, radius: 0, focus: 1, power: 0, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "cover", turns: 2, pot: 1 } }),
  sk({ id: "pa-smite", hero: "paladin", name: "Кара", blurb: "Священний удар.", kind: "dmg", target: "enemy", range: 1, radius: 0, focus: 1, power: 4, die: 6, stat: "str", acc: 2 }),
  sk({ id: "pa-aura", hero: "paladin", name: "Аура", blurb: "Броня всьому колу.", kind: "buff", target: "self", range: 0, radius: 1, focus: 2, power: 0, die: 0, stat: "wil", acc: 0, reliable: true, status: { id: "ward", turns: 2, pot: 2 } }),
  sk({ id: "pa-lay", hero: "paladin", name: "Покладання рук", blurb: "Надійне лікування.", kind: "heal", target: "ally", range: 1, radius: 0, focus: 2, power: 9, die: 0, stat: "wil", acc: 0, reliable: true, revive: true }),
  sk({ id: "pa-wall", hero: "paladin", name: "Стіна", blurb: "Сам стає дуже твердим.", kind: "buff", target: "self", range: 0, radius: 0, focus: 1, power: 0, die: 0, stat: "end", acc: 0, reliable: true, status: { id: "guard", turns: 2, pot: 4 } }),
  sk({ id: "pa-light", hero: "paladin", name: "Світло", blurb: "Мале коло по нечисті.", kind: "dmg", target: "enemy", range: 2, radius: 1, focus: 2, power: 3, die: 6, stat: "wil", acc: 1 }),
];

export function skillsFor(hero: HeroId) {
  return SKILLS.filter((s) => s.hero === hero);
}

export type Item = {
  id: string;
  name: string;
  slot: "weapon" | "armor" | "trinket" | "consumable";
  price: number;
  power?: number;
  acc?: number;
  armorN?: number;
  heal?: number;
  focus?: number;
  set?: string;
  heroes?: HeroId[];
  armor?: ArmorKind;
  stat?: Partial<Record<Stat, number>>;
  blurb: string;
};

function it(p: Item): Item {
  return p;
}

export const ITEMS: Item[] = [
  it({ id: "pot", name: "Зілля крові", slot: "consumable", price: 12, heal: 18, blurb: "Повертає життя." }),
  it({ id: "pot2", name: "Густе зілля", slot: "consumable", price: 28, heal: 36, blurb: "Для тих, хто стоїть у воді надто довго." }),
  it({ id: "bread", name: "Солений хліб", slot: "consumable", price: 6, heal: 10, blurb: "Марта солить його проти хору." }),
  it({ id: "ton", name: "Настоянка волі", slot: "consumable", price: 14, focus: 6, blurb: "Повертає зосередження." }),
  it({ id: "resin", name: "Гірка смола", slot: "consumable", price: 22, focus: 12, blurb: "Тримає руку рівно на два заклинання." }),
  it({ id: "a-coat", name: "Плащ дощу", slot: "armor", price: 36, armorN: 2, armor: "light", blurb: "Не гріє. Не дає воді назвати тебе." }),
  it({ id: "a-vest", name: "Жилет варти", slot: "armor", price: 48, armorN: 3, armor: "medium", blurb: "Середня вага, поки немає панцира." }),
  it({ id: "t-salt", name: "Мішечок солі", slot: "trinket", price: 30, acc: 1, blurb: "Сіль на порозі. Трохи точніші руки." }),
  it({ id: "t-rain", name: "Скляна крапля", slot: "trinket", price: 42, power: 1, stat: { wil: 1 }, blurb: "Пам’ять шлюзу. Воля трохи твердіша." }),
  it({ id: "w-bow3", name: "Лук тракту", slot: "weapon", price: 70, power: 5, acc: 1, heroes: ["archer"], blurb: "Тятива не розмокає." }),
  it({ id: "w-sword2", name: "Меч брами", slot: "weapon", price: 68, power: 5, heroes: ["paladin"], blurb: "Брен такий не носить. Каже, що важкий." }),
  it({ id: "w-axe2", name: "Сокира мулу", slot: "weapon", price: 72, power: 6, heroes: ["barbarian"], blurb: "Рубає те, що вже не людина." }),
  it({ id: "w-dagger2", name: "Ніж паламаря", slot: "weapon", price: 66, power: 5, acc: 1, heroes: ["assassin", "vampire"], blurb: "Для воску і для спини." }),
  it({ id: "w-staff2", name: "Посох краплі", slot: "weapon", price: 74, power: 5, heroes: ["sorceress", "herbalist"], blurb: "Перший дзвін, складений у дерево." }),
  it({ id: "w-orb2", name: "Око шлюзу", slot: "weapon", price: 74, power: 5, heroes: ["witch"], blurb: "Дивиться туди, куди середній шлюз спить." }),
  it({ id: "w-staff", name: "Посох іскри", slot: "weapon", price: 20, power: 3, heroes: ["sorceress"], blurb: "Стартовий посох." }),
  it({ id: "w-sickle", name: "Серп трави", slot: "weapon", price: 18, power: 2, heroes: ["herbalist"], blurb: "Стартовий серп." }),
  it({ id: "w-bow", name: "Мисливський лук", slot: "weapon", price: 22, power: 3, acc: 1, heroes: ["archer"], blurb: "Стартовий лук." }),
  it({ id: "w-fang", name: "Ікло", slot: "weapon", price: 20, power: 3, heroes: ["vampire"], blurb: "Стартове ікло." }),
  it({ id: "w-axe", name: "Сокира варти", slot: "weapon", price: 22, power: 4, heroes: ["barbarian"], blurb: "Стартова сокира." }),
  it({ id: "w-dagger", name: "Ніж тіні", slot: "weapon", price: 20, power: 3, acc: 1, heroes: ["assassin"], blurb: "Стартовий ніж." }),
  it({ id: "w-orb", name: "Око жаби", slot: "weapon", price: 20, power: 3, heroes: ["witch"], blurb: "Стартове око." }),
  it({ id: "w-sword", name: "Меч варти", slot: "weapon", price: 22, power: 3, heroes: ["paladin"], blurb: "Стартовий меч." }),
  it({ id: "w-bow2", name: "Лук сови", slot: "weapon", price: 80, power: 5, acc: 1, heroes: ["archer"], blurb: "Вербовий лук." }),
  it({ id: "w-bow-night", name: "Нічний лук", slot: "weapon", price: 0, power: 6, acc: 1, heroes: ["archer"], blurb: "Здобич бурштину." }),
  it({ id: "w-myth", name: "Струна відлуння", slot: "weapon", price: 0, power: 7, heroes: ["sorceress", "witch"], blurb: "З межі." }),
  it({ id: "w-staff-reed", name: "Посох очерету", slot: "weapon", price: 0, power: 5, heroes: ["sorceress", "herbalist"], blurb: "Низини." }),
  it({ id: "w-sickle-reed", name: "Серп низин", slot: "weapon", price: 0, power: 4, heroes: ["herbalist"], blurb: "Очерет." }),
  it({ id: "w-orb-reed", name: "Око низин", slot: "weapon", price: 0, power: 5, heroes: ["witch"], blurb: "Туман." }),
  it({ id: "w-dagger-sluice", name: "Ніж мулу", slot: "weapon", price: 0, power: 5, acc: 1, heroes: ["assassin", "vampire"], blurb: "Шлюз." }),
  it({ id: "w-rapier-sluice", name: "Шпага броду", slot: "weapon", price: 0, power: 5, heroes: ["vampire"], blurb: "Брід." }),
  it({ id: "w-axe-nave", name: "Сокира нави", slot: "weapon", price: 0, power: 6, heroes: ["barbarian"], blurb: "Нава." }),
  it({ id: "w-sword-nave", name: "Меч світанку", slot: "weapon", price: 0, power: 6, heroes: ["paladin"], blurb: "Нава." }),
  it({ id: "w-bow-nave", name: "Лук хору", slot: "weapon", price: 0, power: 6, heroes: ["archer"], blurb: "Хор." }),
  it({ id: "a-cloth", name: "Ряса варти", slot: "armor", price: 24, armorN: 1, armor: "light", blurb: "Тонка тканина." }),
  it({ id: "a-leather", name: "Шкіра варти", slot: "armor", price: 28, armorN: 2, armor: "light", blurb: "М'яка шкіра." }),
  it({ id: "a-mail", name: "Кільця варти", slot: "armor", price: 36, armorN: 3, armor: "medium", blurb: "Важка кольчуга." }),
  it({ id: "a-plate", name: "Панцир варти", slot: "armor", price: 44, armorN: 4, armor: "heavy", blurb: "Плита." }),
  it({ id: "a-willow-hide", name: "Вербова шкіра", slot: "armor", price: 0, armorN: 2, armor: "light", set: "willow", blurb: "Комплект верби." }),
  it({ id: "a-echo-veil", name: "Вуаль другого слуху", slot: "armor", price: 0, armorN: 1, armor: "light", set: "echo", blurb: "Комплект хору." }),
  it({ id: "a-reed-robe", name: "Ряса низин", slot: "armor", price: 0, armorN: 2, armor: "light", set: "reed", blurb: "Комплект очерету." }),
  it({ id: "a-sluice-leather", name: "Шкіра шлюзу", slot: "armor", price: 0, armorN: 2, armor: "light", set: "sluice", blurb: "Комплект шлюзу." }),
  it({ id: "a-nave-plate", name: "Обід світанку", slot: "armor", price: 0, armorN: 4, armor: "heavy", set: "nave", blurb: "Комплект нави." }),
  it({ id: "t-cloak", name: "Плащ верби", slot: "trinket", price: 40, acc: 1, blurb: "Плащ дощу." }),
  it({ id: "t-echo", name: "Печатка хору", slot: "trinket", price: 0, power: 2, blurb: "Відлуння." }),
  it({ id: "t-bell", name: "Уламок язика", slot: "trinket", price: 0, power: 1, blurb: "Язик дзвона." }),
  it({ id: "t-reed-knot", name: "Вузол очерету", slot: "trinket", price: 0, acc: 1, blurb: "Низини." }),
  it({ id: "t-sluice-key", name: "Ключ шлюзу", slot: "trinket", price: 0, power: 1, blurb: "Сплячий шлюз." }),
  it({ id: "t-nave-wax", name: "Воскова печатка", slot: "trinket", price: 0, power: 1, blurb: "Нава." }),
];

export function itemById(id: string) {
  return ITEMS.find((i) => i.id === id);
}

const STARTER: Record<HeroId, string> = {
  sorceress: "w-staff",
  herbalist: "w-sickle",
  archer: "w-bow",
  vampire: "w-fang",
  barbarian: "w-axe",
  assassin: "w-dagger",
  witch: "w-orb",
  paladin: "w-sword",
};

export function starterWeapon(hero: HeroId) {
  return STARTER[hero];
}

export type EnemyDef = {
  id: string;
  name: string;
  sprite: string;
  hp: number;
  def: number;
  dmg: number;
  die: number;
  acc: number;
  move: number;
  range: number;
  xp: number;
  gold: number;
  ranged?: boolean;
  boss?: boolean;
  hue?: number;
  level: number;
  role: "brute" | "skirmisher" | "archer" | "caster" | "boss";
};

export const ENEMIES: Record<string, EnemyDef> = {
  reed: { id: "reed", name: "Очеретяник", sprite: "drowned", hp: 86, def: 8, dmg: 8, die: 6, acc: 2, move: 4, range: 1, xp: 18, gold: 6, level: 2, role: "skirmisher" },
  drowned: { id: "drowned", name: "Потопельник", sprite: "drowned", hp: 120, def: 11, dmg: 10, die: 6, acc: 2, move: 3, range: 1, xp: 28, gold: 9, level: 3, role: "brute" },
  sludge: { id: "sludge", name: "Мул", sprite: "drowned", hp: 190, def: 14, dmg: 13, die: 6, acc: 1, move: 2, range: 1, xp: 36, gold: 12, level: 4, role: "brute" },
  wraith: { id: "wraith", name: "Хорист", sprite: "wraith", hp: 96, def: 10, dmg: 9, die: 6, acc: 3, move: 4, range: 3, xp: 32, gold: 10, ranged: true, level: 4, role: "archer" },
  chorister: { id: "chorister", name: "Співець", sprite: "wraith", hp: 130, def: 11, dmg: 12, die: 6, acc: 3, move: 3, range: 3, xp: 40, gold: 14, ranged: true, level: 6, role: "caster" },
  lurker: { id: "lurker", name: "Драговинник", sprite: "drowned", hp: 160, def: 12, dmg: 14, die: 6, acc: 2, move: 4, range: 1, xp: 44, gold: 15, level: 7, role: "skirmisher" },
  bellringer: { id: "bellringer", name: "Дзвонар", sprite: "bellringer", hp: 540, def: 16, dmg: 18, die: 8, acc: 3, move: 3, range: 1, xp: 140, gold: 60, boss: true, level: 8, role: "boss" },
  fenmother: { id: "fenmother", name: "Мати очерету", sprite: "drowned", hp: 680, def: 15, dmg: 20, die: 8, acc: 2, move: 3, range: 1, xp: 180, gold: 70, boss: true, level: 9, role: "boss" },
  cantor: { id: "cantor", name: "Кантор", sprite: "bellringer", hp: 820, def: 17, dmg: 22, die: 8, acc: 3, move: 3, range: 2, xp: 220, gold: 90, boss: true, ranged: true, level: 10, role: "boss" },
  gnat: { id: "gnat", name: "Комар драговини", sprite: "drowned", hue: 95, hp: 64, def: 4, dmg: 9, die: 4, acc: 3, move: 6, range: 1, xp: 24, gold: 5, level: 3, role: "skirmisher" },
  salt: { id: "salt", name: "Соляний вартовий", sprite: "drowned", hue: 200, hp: 240, def: 18, dmg: 11, die: 6, acc: 1, move: 2, range: 1, xp: 42, gold: 14, level: 5, role: "brute" },
  leech: { id: "leech", name: "П'явка", sprite: "drowned", hue: 305, hp: 90, def: 6, dmg: 18, die: 6, acc: 2, move: 5, range: 1, xp: 38, gold: 11, level: 6, role: "skirmisher" },
  ashling: { id: "ashling", name: "Попелястий", sprite: "wraith", hue: 28, hp: 110, def: 8, dmg: 13, die: 6, acc: 3, move: 4, range: 3, xp: 40, gold: 12, ranged: true, level: 5, role: "archer" },
  mirror: { id: "mirror", name: "Скляний двійник", sprite: "wraith", hue: 195, hp: 130, def: 9, dmg: 15, die: 6, acc: 4, move: 5, range: 3, xp: 48, gold: 16, ranged: true, level: 7, role: "archer" },
  banner: { id: "banner", name: "Прапороносець", sprite: "drowned", hue: 350, hp: 210, def: 13, dmg: 16, die: 8, acc: 2, move: 3, range: 1, xp: 46, gold: 15, level: 6, role: "brute" },
  tide: { id: "tide", name: "Припливний", sprite: "drowned", hue: 165, hp: 150, def: 10, dmg: 14, die: 6, acc: 2, move: 5, range: 1, xp: 44, gold: 13, level: 7, role: "skirmisher" },
  spark: { id: "spark", name: "Іскра корони", sprite: "wraith", hue: 48, hp: 140, def: 9, dmg: 17, die: 8, acc: 3, move: 3, range: 4, xp: 52, gold: 18, ranged: true, level: 8, role: "caster" },
  reedchoir: { id: "reedchoir", name: "Хор очерету", sprite: "wraith", hue: 100, hp: 780, def: 14, dmg: 20, die: 8, acc: 3, move: 3, range: 3, xp: 260, gold: 80, boss: true, ranged: true, level: 9, role: "boss" },
  stag: { id: "stag", name: "Смоляний олень", sprite: "drowned", hue: 32, hp: 920, def: 16, dmg: 24, die: 8, acc: 2, move: 4, range: 1, xp: 300, gold: 90, boss: true, level: 10, role: "boss" },
  saint: { id: "saint", name: "Скляний святий", sprite: "wraith", hue: 210, hp: 860, def: 13, dmg: 22, die: 8, acc: 4, move: 4, range: 4, xp: 320, gold: 95, boss: true, ranged: true, level: 11, role: "boss" },
  oath: { id: "oath", name: "Порушник клятви", sprite: "drowned", hue: 355, hp: 1100, def: 18, dmg: 26, die: 10, acc: 2, move: 3, range: 1, xp: 360, gold: 110, boss: true, level: 12, role: "boss" },
  tidebell: { id: "tidebell", name: "Дзвін без місяця", sprite: "bellringer", hue: 175, hp: 1040, def: 16, dmg: 24, die: 8, acc: 3, move: 3, range: 3, xp: 400, gold: 120, boss: true, ranged: true, level: 13, role: "boss" },
  ashking: { id: "ashking", name: "Попелястий король", sprite: "bellringer", hue: 18, hp: 1280, def: 18, dmg: 28, die: 10, acc: 3, move: 3, range: 2, xp: 460, gold: 140, boss: true, level: 14, role: "boss" },
  firstbell: { id: "firstbell", name: "Перший дзвін", sprite: "bellringer", hue: 270, hp: 1500, def: 20, dmg: 32, die: 10, acc: 4, move: 3, range: 2, xp: 560, gold: 180, boss: true, ranged: true, level: 16, role: "boss" },
};

export type Quest = { id: string; name: string; region: string; stages: string[] };

export const QUESTS: Quest[] = [
  { id: "q-road", name: "Затоплений тракт", region: "grey", stages: ["Марта знає, що дорогу затопило не річкою. Послухай її біля печі, перш ніж Брен відчинить браму.", "На тракті відкрий лівий і правий шлюзи. Середній лиши спати. Розжени тих, хто вийшов з води.", "Коли міст згадає себе, йди в устя крипти."] },
  { id: "q-bell", name: "Ім'я на дзвоні", region: "grey", stages: ["Напис і Остап говорять різне. Слухай камінь: крапля, попіл, верба.", "Зупини дзвонаря. Двері нави відчиняться лише після правильного хору."] },
  { id: "q-back", name: "Перший уламок", region: "grey", stages: ["Повернися до Марти з тишею крипти. Уламок язика в неї, не в скрині.", "Скажи варті правду або запечатану брехню. Обидва шляхи відчиняють схід."] },
  { id: "q-lights", name: "Вогні за вербами", region: "grey", stages: ["Згаси або вислухай три вербові вогні."] },
  { id: "sq-ribbon", name: "Стрічка Іви", region: "grey", stages: ["На тракті знайди сіру стрічку пралі.", "Поверни її Іві, не Брену."] },
  { id: "sq-tray", name: "Деко Лади", region: "grey", stages: ["Розжени нічних гостей біля південної стіни.", "Скажи Ладі, що деко ціле."] },
  { id: "sq-novice", name: "Послушник", region: "grey", stages: ["Вислухай Остапа в крипті. Він плутає порядок навмисно."] },
  { id: "sq-tuner", name: "Настроювач", region: "grey", stages: ["Дорин на варті знає, хто закрив середній шлюз, і не боїться порядку дзвонів."] },
  { id: "q-fen", name: "Мати очерету", region: "moss", stages: ["Рибалка просить тиші в драговині.", "Знайди матір очерету і не дай їй договорити ім'я."] },
  { id: "q-nave", name: "Кантор", region: "grey", stages: ["Двері нави відчиняться після порядку дзвонів.", "Кантор у наві ще співає живих."] },
  { id: "q-moss", name: "Хор очерету", region: "moss", stages: ["Пройди низини до лігва хору."] },
  { id: "q-amber", name: "Смоляний мисливець", region: "amber", stages: ["Знайди оленя, що не може впасти."] },
  { id: "q-glass", name: "Перший з двох", region: "glass", stages: ["Розбий копію, яка назвалася тобою."] },
  { id: "q-red", name: "Прапор без руки", region: "red", stages: ["Зупини клятву, яка марширує сама."] },
  { id: "q-shore", name: "Відплив", region: "shore", stages: ["Дістань дзвін, який дзвонить під водою."] },
  { id: "q-ash", name: "Корона попелу", region: "ash", stages: ["Назви короля його першим ім'ям — або спали друге."] },
  { id: "q-verge", name: "Межа", region: "verge", stages: ["Виріши долю тріщини.", "Капличка межі просить покласти чуже ім'я. Своє забери в лігво."] },
  { id: "sq-hear-moss", name: "Не відповідай двічі", region: "moss", stages: ["Мандрівник низин уже відповів хору. Присягни мовчати."] },
  { id: "sq-hear-amber", name: "Тінь у смолі", region: "amber", stages: ["Не стріляй у живицю на собі. Олень — окрема мішень."] },
  { id: "sq-hear-glass", name: "Перша копія", region: "glass", stages: ["Бий ту, що заговорить першою."] },
  { id: "sq-hear-red", name: "Мокрий край строю", region: "red", stages: ["Обійди колону, не піднімай ганчірку."] },
  { id: "sq-hear-shore", name: "Три і тиша", region: "shore", stages: ["Після третього удару затули вуха."] },
  { id: "sq-hear-ash", name: "Без третього імені", region: "ash", stages: ["Не вигадуй королю третього імені."] },
  { id: "sq-hear-verge", name: "Своє, не хор", region: "verge", stages: ["Забери ім'я, яке твоє. Чуже залиш тріщині."] },
];

export type Region = { id: string; name: string; tier: number; biome: string; blurb: string };

export const REGIONS: Region[] = [
  { id: "grey", name: "Сірі марші", tier: 1, biome: "grey", blurb: "Варта, тракт і крипта дзвонаря." },
  { id: "moss", name: "Мохові низини", tier: 2, biome: "moss", blurb: "Хор, який співає імена живих." },
  { id: "amber", name: "Бурштинові пущі", tier: 2, biome: "amber", blurb: "Олень, що не може впасти." },
  { id: "glass", name: "Скляні кряжі", tier: 3, biome: "glass", blurb: "Копія, яка назвалася тобою." },
  { id: "red", name: "Червоні пустки", tier: 3, biome: "red", blurb: "Клятва без рота." },
  { id: "shore", name: "Берег без місяця", tier: 4, biome: "shore", blurb: "Дзвін під водою." },
  { id: "ash", name: "Попеляста корона", tier: 4, biome: "ash", blurb: "Король до імені." },
  { id: "verge", name: "Межа відлунь", tier: 5, biome: "verge", blurb: "Тріщина чекає язика." },
];

export type Choice = {
  label: string;
  to?: string;
  flag?: string;
  need?: string;
  quest?: string;
  gold?: number;
  xp?: number;
  item?: string;
  end?: boolean;
  check?: { stat: Stat; dc: number; ok: string; bad: string };
};

export type DNode = { speaker: string; text: string; choices: Choice[] };

export const TALK: Record<string, DNode> = {
  marta: {
    speaker: "Марта",
    text: "Я Марта, і це мій шинок, не брама Брена і не мотузка Іви. Вогнище ще тримається. Тракт затопило, бо середній шлюз хтось лишив спати, а крайні — брехати.",
    choices: [
      { label: "Хто це зробив?", to: "marta-who" },
      { label: "Що з дорогою?", to: "marta-road" },
      { label: "Мені треба ліжко.", to: "marta-bed" },
    ],
  },
  "marta-who": {
    speaker: "Марта",
    text: "Брен клянеться, що не торкався важелів. Дорин, настроювач, каже інше: середній шлюз закрили рукою варти, не водою. Я не суддя. Я тримаю ліжка сухими.",
    choices: [{ label: "Тоді про дорогу.", to: "marta-road" }, { label: "Піду до Дорина.", end: true }],
  },
  "marta-watch": {
    speaker: "Марта",
    text: "Брен стоїть у брамі й удає, що дощ — це служба. Іва пере, Лада пече, я рахую ліжка. Решта пішла на тракт і повернулася дзвоном.",
    choices: [{ label: "Про дорогу.", to: "marta-road" }, { label: "Досить.", end: true }],
  },
  "marta-road": {
    speaker: "Марта",
    text: "Якщо відкриєш крайні шлюзи й не чіпатимеш середній — старий міст згадає, що він міст. А під самим устям крипти вже лежить світлий брід. Не плутай його з чоботом Брена.",
    choices: [{ label: "Я піду.", quest: "q-road:1", end: true }, { label: "Ще послухаю.", end: true }],
  },
  "marta-bed": {
    speaker: "Марта",
    text: "Ліжко біля печі. Вісім мідяків, якщо маєш. Якщо ні — лягай, потім порахуємось.",
    choices: [{ label: "Дякую.", end: true }],
  },
  "marta-back": {
    speaker: "Марта",
    text: "Ти приніс тишу, і вона важча за мішок. Це язик дзвона. Можна сказати варті, що тріщина запечатана. А можна сказати правду.",
    choices: [
      { label: "Сказати, що запечатано.", to: "marta-seal", quest: "q-back:999", gold: 40, xp: 50 },
      { label: "Сказати правду.", to: "marta-truth", quest: "q-back:999", gold: 25, xp: 60 },
    ],
  },
  "marta-seal": {
    speaker: "Марта",
    text: "Брен спатиме спокійніше. Я — ні. Дорога на схід усе одно відкрита.",
    choices: [{ label: "Тоді на схід.", flag: "road-open", end: true }],
  },
  "marta-truth": {
    speaker: "Марта",
    text: "Правда в цьому селі живе недовго, але дякую, що не почав з брехні. Східні марші теж чули удар.",
    choices: [{ label: "Відкрий марші.", flag: "road-open", end: true }],
  },
  "marta-done": {
    speaker: "Марта",
    text: "Верба мокра, ліжко сухе, схід відкритий. Якщо підеш далі — не геройствуй на порожній шлунок. Лада дає окраєць лише після гостей.",
    choices: [{ label: "Добре.", end: true }],
  },
  bren: {
    speaker: "Брен",
    text: "Брама. Не шинок і не пральня. На тракт — після Марти. Якщо знайдеш мій чобіт у мулі, неси сюди. І не вір Дорину: він чує дзвони там, де я чую дощ.",
    choices: [
      { label: "Зрозумів.", end: true },
      { label: "Імена на одвірку.", to: "bren-names" },
      { label: "Ти закрив середній шлюз?", to: "bren-sluice" },
      { label: "Я знайшов твій чобіт.", to: "bren-boot", need: "boot-found" },
    ],
  },
  "bren-sluice": {
    speaker: "Брен",
    text: "Я закрив його, коли перший потопельник вимовив моє ім'я з води. Крайні лишив, бо без них село стає островом. Якщо відкриєш крайні й не розбудиш середній — міст згадає себе. Це не сповідь. Це порядок.",
    choices: [{ label: "Тоді так і зроблю.", quest: "q-road:1", xp: 8, end: true }],
  },
  "bren-names": {
    speaker: "Брен",
    text: "На одвірку три імені тих, хто пішов на тракт. Не додавай четвертого. Потопельник біля броду просить назвати його так, як тут, а не так, як співає вода.",
    choices: [
      { label: "Прочитати три й замовкнути.", quest: "sq-gate-names:999", gold: 20, xp: 12, end: true },
      { label: "Нехай дощ читає.", end: true },
    ],
  },
  "bren-boot": {
    speaker: "Брен",
    text: "Це мій. Я зніму руку з меча, раз ти приніс його з мулу, а не з чиєїсь ноги.",
    choices: [{ label: "Віддати.", quest: "sq-mud-boot:999", gold: 25, xp: 15, end: true }],
  },
  iva: {
    speaker: "Іва",
    text: "Я Іва, праля. Не Марта і не Брен. Сіра стрічка злетіла на тракт і сіла на очерет біля броду. Не віддавай її варті: Брен і так колекціонує чуже, починаючи з чобота.",
    choices: [
      { label: "Шукатиму стрічку.", quest: "sq-ribbon:1", end: true },
      { label: "Це не мій клопіт.", end: true },
    ],
  },
  "iva-back": {
    speaker: "Іва",
    text: "Мокра, але моя. Завтра знову білітиме на мотузці. Візьми мідь за ноги, не за героїзм.",
    choices: [{ label: "Тримай.", quest: "sq-ribbon:999", gold: 18, xp: 14, end: true }],
  },
  "iva-done": {
    speaker: "Іва",
    text: "Стрічка вже на мотузці. Лада стоїть південніше й говорить про деко, не про білизну. Остап у крипті боїться не того дзвона.",
    choices: [{ label: "Добре.", end: true }],
  },
  lada: {
    speaker: "Лада",
    text: "Лада. Печу, поки піч пам'ятає дрова. Нічні гості стягли деко з порога. Якщо їх уже немає біля південної стіни — скажи прямо. Я не люблю натяків Брена.",
    choices: [
      { label: "Гостей уже немає.", to: "lada-done" },
      { label: "Вони ще там.", end: true },
    ],
  },
  "lada-done": {
    speaker: "Лада",
    text: "Тоді деко моє, а мідь твоя. Не неси окраєць Марте: вона віддасть його гостям, якщо ті ввічливо попросять.",
    choices: [{ label: "Беру платню.", quest: "sq-tray:999", gold: 16, xp: 12, end: true }],
  },
  ostap: {
    speaker: "Остап",
    text: "Я послушник, не хор. Уголос боюся верби першою — хай хор слухає брехню. На камені: крапля, попіл, верба. Дорин на варті чує той самий порядок, тільки він не боїться сказати його біля брами.",
    choices: [
      { label: "Запам'ятати камінь.", quest: "sq-novice:999", flag: "bell-order", xp: 16, end: true },
      { label: "Повторюю твій страх.", end: true },
    ],
  },
  dorin: {
    speaker: "Дорин",
    text: "Дорин. Я настроюю дзвони, яких тут уже немає. Брен закрив середній шлюз своєю рукою — я бачив мокре залізо, не хвилю. Порядок, який тримає крипту: крапля, попіл, верба. Остап скаже навпаки, бо боїться хору.",
    choices: [
      { label: "Запам'ятати порядок.", flag: "bell-order", quest: "sq-tuner:999", xp: 14, end: true },
      { label: "Брен заперечить.", end: true },
    ],
  },
  ribbon: {
    speaker: "Сіра стрічка",
    text: "На очереті висить мокра сіра стрічка. Пахне лугом, не криптою. Іва просила не плутати її з чоботом Брена.",
    choices: [
      { label: "Зняти для Іви.", flag: "ribbon-found", xp: 6, end: true },
      { label: "Нехай сохне.", end: true },
    ],
  },
  light: {
    speaker: "Вербовий вогонь",
    text: "Маленьке полум'я висить над водою і повторює чиєсь ім'я неправильно. Можна загасити його волею — або почекати, поки збреше до кінця.",
    choices: [
      { label: "Загасити волею.", check: { stat: "wil", dc: 12, ok: "light-ok", bad: "light-bad" } },
      { label: "Нехай договорить.", to: "light-ok" },
    ],
  },
  "light-ok": {
    speaker: "Вербовий вогонь",
    text: "Полум'я сідає в дощ. Десь у селі стає на одне відлуння менше.",
    choices: [{ label: "Далі.", flag: "light-one", xp: 8, end: true }],
  },
  "light-bad": {
    speaker: "Вербовий вогонь",
    text: "Ім'я чіпляється за рукав і відпускає з водою в чоботі. Вогонь усе ж гасне.",
    choices: [{ label: "Далі.", flag: "light-one", end: true }],
  },
  stone: {
    speaker: "Плита",
    text: "«Крайні шлюзи пам'ятають дорогу. Середній спить. Не буди». Нижче дрібніше: крапля, попіл, верба. Остап у крипті скаже це навпаки, якщо злякається.",
    choices: [
      { label: "Роздивитись дрібне.", check: { stat: "per", dc: 11, ok: "stone-ok", bad: "stone-bad" } },
      { label: "Досить.", flag: "read-slab", end: true },
    ],
  },
  "stone-ok": {
    speaker: "Плита",
    text: "Порядок дзвонів: крапля, попіл, верба. Хтось не хотів, щоб це читали з бігу.",
    choices: [{ label: "Запам'ятати.", flag: "bell-order", end: true }],
  },
  "stone-bad": {
    speaker: "Плита",
    text: "Вода з'їла половину. Спершу те, що тече, наприкінці — те, що росте.",
    choices: [{ label: "Спробую.", flag: "read-slab", end: true }],
  },
  cryptstone: {
    speaker: "Напис у крипті",
    text: "«Спершу голос води. Потім те, що лишилось від вогню. Наостанок — верба». Три дзвони висять не в цьому порядку. Остап це знає і все одно боїться верби першою.",
    choices: [{ label: "Крапля, попіл, верба.", flag: "bell-order", end: true }],
  },
  endseal: {
    speaker: "Межа",
    text: "Тріщина чекає язика. Запечатати — і марші забудуть цей цикл. Ударити — і відлуння лишаться, але відповідатимуть живим.",
    choices: [
      { label: "Запечатати.", flag: "ending-seal", quest: "q-verge:999", xp: 80, end: true },
      { label: "Ударити навсправжки.", flag: "ending-ring", quest: "q-verge:999", xp: 80, end: true },
    ],
  },
  perch: {
    speaker: "Сідало сов",
    text: "Над крамницею сидять три мокрі сови й не кричать. Одне перо лишилось на цвяху. Це не стрічка Іви і не чобіт Брена.",
    choices: [
      { label: "Взяти перо.", flag: "owl-feather", xp: 6, end: true },
      { label: "Нехай сидять.", end: true },
    ],
  },
  "tract-boot": {
    speaker: "Чобіт у мулі",
    text: "З мулу стирчить чобіт із міткою брами. Це річ Брена. Іва просила не нести їй чуже взуття.",
    choices: [
      { label: "Витягти.", flag: "boot-found", xp: 8, end: true },
      { label: "Нехай глибшає.", end: true },
    ],
  },
  "ford-names": {
    speaker: "Потопельник",
    text: "Він ворушить губами, не зубами. «Не буди середній. Назви мене так, як на брамі в Брена, а не так, як співає вода».",
    choices: [
      { label: "Назвати ім'я з одвірка.", quest: "sq-ford-names:999", gold: 30, item: "pot", xp: 18, end: true },
      { label: "Відійти.", end: true },
    ],
  },
  "wax-niche": {
    speaker: "Віск ніші",
    text: "У воску лишилась печатка, яку хор не встиг з'їсти. Вона віддається після правильного хору дзвонів.",
    choices: [
      { label: "Забрати печатку.", quest: "sq-bell-order:999", item: "t-nave-wax", xp: 20, need: "bells", end: true },
      { label: "Ще не час.", end: true },
    ],
  },
  "road-moss": {
    speaker: "Вартовий низин",
    text: "Хор співає імена тих, хто ще не втонув. Якщо відповіси — вони вважають, що ти вже їхній. Лігво далі по моху, не в шинку Марти.",
    choices: [
      { label: "Не відповідатиму.", quest: "q-moss:1", xp: 12, end: true },
      { label: "Де хор?", end: true },
    ],
  },
  "road-amber": {
    speaker: "Мисливиця",
    text: "Олень у пущі дихає. Це й уся єресь. Він не падає, бо смола тримає його в позі грому. Стріляй не в серце, а в живицю.",
    choices: [{ label: "Шукатиму оленя.", quest: "q-amber:1", xp: 12, end: true }],
  },
  "road-glass": {
    speaker: "Скляний провідник",
    text: "Не вір тому, хто повторив твій жест швидше за тебе. Перший з двох стоїть за склом і вже піднімає твою руку.",
    choices: [{ label: "Не повторюватиму.", quest: "q-glass:1", xp: 14, end: true }],
  },
  "road-red": {
    speaker: "Прапороносець",
    text: "Клятва марширує, навіть коли рот уже попіл. Не ставай у стрій і не піднімай ганчірку «за своїх».",
    choices: [{ label: "Обійду стрій.", quest: "q-red:1", xp: 14, end: true }],
  },
  "road-shore": {
    speaker: "Рибалка",
    text: "Приплив приходить на слух. Дзвін під водою б'є тричі. Не рахуй четвертий. Після третього затули вуха.",
    choices: [{ label: "Не рахуватиму четвертий.", quest: "q-shore:1", xp: 16, end: true }],
  },
  "road-ash": {
    speaker: "Писар попелу",
    text: "Король мав ім'я до корони. Корона його з'їла. Друге пахне димом. Назви перше або спали друге, тільки не вигадуй третього.",
    choices: [
      { label: "Назву перше ім'я.", quest: "q-ash:1", xp: 16, end: true },
      { label: "Спалю друге.", quest: "q-ash:1", xp: 16, end: true },
    ],
  },
  "road-verge": {
    speaker: "Голос тріщини",
    text: "Я кажу твоє ім'я двічі. Одне твоє, друге хору. Забери своє. Далі треба вирішити: запечатати язик чи вдарити навсправжки.",
    choices: [{ label: "Забираю своє ім'я.", quest: "q-verge:1", xp: 20, end: true }],
  },
  "trace-moss": {
    speaker: "Слід у моху",
    text: "Хтось ішов босоніж і рахував кроки. На п'ятому лишився вузол очерету.",
    choices: [{ label: "Підняти.", quest: "sq-moss-trace:999", item: "t-reed-knot", xp: 12, end: true }],
  },
  "trace-amber": {
    speaker: "Живиця",
    text: "Смола тримає рукавицю в позі грому. Рукавиця ще тепла.",
    choices: [{ label: "Зрізати обережно.", quest: "sq-amber-trace:999", item: "ton", gold: 20, xp: 12, end: true }],
  },
  "trace-glass": {
    speaker: "Уламок",
    text: "В уламку ти ще цілий і вже піднімаєш руку. Не дивись довго.",
    choices: [{ label: "Взяти відблиск.", quest: "sq-glass-trace:999", item: "a-echo-veil", xp: 16, end: true }],
  },
  "trace-red": {
    speaker: "Ганчірка строю",
    text: "Прапор кличе стати в колону. Якщо не підняти його «за своїх», пил віддає платню сам.",
    choices: [{ label: "Обійти.", quest: "sq-red-trace:999", gold: 35, xp: 16, end: true }],
  },
  "trace-shore": {
    speaker: "Мушля",
    text: "У мушлі три удари й тиша. Четвертого немає.",
    choices: [{ label: "Слухати тишу.", quest: "sq-shore-trace:999", item: "a-sluice-leather", xp: 16, end: true }],
  },
  "trace-ash": {
    speaker: "Жаровня",
    text: "Друге ім'я короля написане на вугіллі. Його можна спалити, не виносячи з табору.",
    choices: [{ label: "Спалити напис.", quest: "sq-ash-trace:999", gold: 40, xp: 18, end: true }],
  },
  "trace-verge": {
    speaker: "Друге ім'я",
    text: "Тріщина повторює тебе тихше. Друге ім'я належить хору. Залиши його тут.",
    choices: [{ label: "Залишити чуже.", quest: "sq-verge-trace:999", item: "t-echo", xp: 24, end: true }],
  },
  "hear-moss": {
    speaker: "Той, хто чув",
    text: "Я відповів хору один раз. Тепер мох росте в чоботі навіть на бруку. Не відповідай, навіть якщо кличуть найманця, якого ти ще не найняв.",
    choices: [{ label: "Мовчатиму.", quest: "sq-hear-moss:999", xp: 14, gold: 12, end: true }],
  },
  "hear-amber": {
    speaker: "Той, хто чув",
    text: "Смола тримає не лише оленя. Вчора вона тримала мою тінь у позі грому. Тінь уже впала. Я ще ні.",
    choices: [{ label: "Не стрілятиму в живицю на собі.", quest: "sq-hear-amber:999", xp: 14, item: "ton", end: true }],
  },
  "hear-glass": {
    speaker: "Той, хто чув",
    text: "Копія назвала мене раніше, ніж я відкрив рота. Я розбив другу. Перша досі ходить дорогою і махає моєю рукою.",
    choices: [{ label: "Битиму ту, що заговорить першою.", quest: "sq-hear-glass:999", xp: 16, end: true }],
  },
  "hear-red": {
    speaker: "Той, хто чув",
    text: "Колона покликала мене «за своїх». Я підняв ганчірку. Тепер крокую, навіть коли сідаю. Обійди стрій мокрим краєм.",
    choices: [{ label: "Не стану в колону.", quest: "sq-hear-red:999", gold: 24, xp: 16, end: true }],
  },
  "hear-shore": {
    speaker: "Той, хто чув",
    text: "Я порахував четвертий удар. Приплив прийшов у вухо і лишився. Після третього затули вуха, навіть якщо рибалка ще говорить.",
    choices: [{ label: "Три і тиша.", quest: "sq-hear-shore:999", xp: 16, gold: 18, end: true }],
  },
  "hear-ash": {
    speaker: "Той, хто чув",
    text: "Я вигадав королю третє ім'я, щоб не палити друге. Попіл записав його на мені. Назви перше або спали друге. Третього немає.",
    choices: [{ label: "Не вигадуватиму третього.", quest: "sq-hear-ash:999", xp: 18, gold: 20, end: true }],
  },
  "hear-verge": {
    speaker: "Той, хто чув",
    text: "Тріщина сказала мене двічі. Я забрав чуже, бо воно було чемніше. Тепер варта кличе мене хором. Забери своє.",
    choices: [{ label: "Заберу своє.", quest: "sq-hear-verge:999", xp: 20, end: true }],
  },
  "shrine-moss": {
    speaker: "Капличка моху",
    text: "На камені вишкрябано імена, які ще дихають. Якщо додаси своє — мох прийме тебе в хор. Якщо зітреш чуже — хтось у низинах згадає, що він не вода.",
    choices: [
      { label: "Зтерти одне чуже ім'я.", quest: "q-moss:1", xp: 18, end: true },
      { label: "Не чіпати камінь.", end: true },
    ],
  },
  "shrine-amber": {
    speaker: "Капличка смоли",
    text: "Живиця натекла на свічку і тримає полум'я в позі грому. Зрізати її — значить дати вогню впасти. Підпалити — зробити вічний ліхтар.",
    choices: [{ label: "Зрізати і дати впасти.", quest: "q-amber:1", item: "ton", xp: 16, end: true }],
  },
  "shrine-glass": {
    speaker: "Капличка скла",
    text: "У склі два ти. Той, що ближче до рами, піднімає руку першим. Не молись зображенню, яке встигає раніше за губи.",
    choices: [{ label: "Відвернутись від першого.", quest: "q-glass:1", xp: 16, end: true }],
  },
  "shrine-red": {
    speaker: "Капличка пусток",
    text: "Тут лежить ганчірка без держака. Підняти її — стати в стрій. Залишити в пилу — клятва пройде повз і не порахує тебе.",
    choices: [{ label: "Залишити в пилу.", quest: "q-red:1", gold: 20, xp: 16, end: true }],
  },
  "shrine-shore": {
    speaker: "Капличка броду",
    text: "Мушля на камені б'є тричі, якщо прикласти вухо. Четвертого удару немає: його домальовують живі. Не домальовуй.",
    choices: [{ label: "Слухати лише три.", quest: "q-shore:1", xp: 18, end: true }],
  },
  "shrine-ash": {
    speaker: "Капличка попелу",
    text: "На вугіллі два імені. Перше майже стерте, друге тепле. Спалити тепле — не означає вигадати нове.",
    choices: [{ label: "Спалити тепле.", quest: "q-ash:1", xp: 18, gold: 16, end: true }],
  },
  "shrine-verge": {
    speaker: "Капличка межі",
    text: "Тріщина в камені каже ім'я двічі і чекає, яке ти покладеш назад. Поклади хор. Своє забери в лігво, де вже стоїть перший дзвін.",
    choices: [{ label: "Покласти чуже.", quest: "q-verge:1", xp: 22, end: true }],
  },
};

const RUMOR: Record<string, string> = {
  moss: "Вартовий низин витирає мох із рота. Хор співає імена тих, хто ще не втонув.",
  amber: "Мисливиця стоїть по коліно в смолі. Олень у пущі дихає — це й уся єресь.",
  glass: "Скляний провідник дивиться повз тебе. Не вір тому, хто повторив твій жест.",
  red: "Прапороносець без прапора: клятва марширує, навіть коли рот уже попіл.",
  shore: "Рибалка без місяця: якщо дзвін під водою вдарить тричі — не рахуй четвертий.",
  ash: "Писар у попелі: король мав ім'я до корони. Друге ім'я пахне димом.",
  verge: "Голос із тріщини каже твоє ім'я двічі й чекає, яке з них ти забереш.",
  grey: "У варті Марта рахує ліжка, Іва — стрічки, Лада — дека, Брен — чоботи. Це різні справи.",
};

export function rumorNode(region: string): DNode {
  return {
    speaker: "На марші",
    text: RUMOR[region] ?? RUMOR.grey!,
    choices: [{ label: "Іти далі.", end: true }],
  };
}

export type PathNode = {
  id: string;
  hero: HeroId;
  parent: string | null;
  at: 20 | 40 | 60 | 85;
  name: string;
  text: string;
  dmg: number;
  heal: number;
  crit: number;
  acc: number;
  armor: number;
  leech: number;
  aoe: number;
  power: number;
};

const PATHS_RAW: PathNode[] = [];
for (const hero of Object.keys(HEROES) as HeroId[]) {
  const a = `${hero}-a`;
  const b = `${hero}-b`;
  PATHS_RAW.push(
    { id: a, hero, parent: null, at: 20, name: "Широкий крок", text: "Більше площі.", dmg: 4, heal: 2, crit: 0, acc: 0, armor: 0, leech: 0, aoe: 1, power: 2 },
    { id: b, hero, parent: null, at: 20, name: "Точний крок", text: "Менше площі, більше влучень.", dmg: 2, heal: 0, crit: 1, acc: 2, armor: 0, leech: 0, aoe: 0, power: 2 },
    { id: `${a}-wide`, hero, parent: a, at: 40, name: "Поле", text: "Коло тримається.", dmg: 4, heal: 4, crit: 0, acc: 0, armor: 0, leech: 0, aoe: 1, power: 3 },
    { id: `${a}-guard`, hero, parent: a, at: 40, name: "Обід", text: "Після кола лишається броня.", dmg: 2, heal: 0, crit: 0, acc: 0, armor: 1, leech: 0, aoe: 0, power: 2 },
    { id: `${b}-vein`, hero, parent: b, at: 40, name: "Жила", text: "Критичні частіші.", dmg: 4, heal: 0, crit: 2, acc: 1, armor: 0, leech: 0, aoe: 0, power: 3 },
    { id: `${b}-ash`, hero, parent: b, at: 40, name: "Попіл", text: "Удар тримається.", dmg: 6, heal: 0, crit: 0, acc: 1, armor: 0, leech: 0, aoe: 0, power: 3 },
    { id: `${hero}-oath`, hero, parent: `${a}-wide`, at: 60, name: "Клятва кола", text: "Сила й площа.", dmg: 6, heal: 2, crit: 0, acc: 0, armor: 0, leech: 0, aoe: 1, power: 4 },
    { id: `${hero}-needle`, hero, parent: `${b}-vein`, at: 60, name: "Голка", text: "Одна ціль.", dmg: 8, heal: 0, crit: 1, acc: 2, armor: 0, leech: 0, aoe: 0, power: 4 },
    { id: `${hero}-seal`, hero, parent: `${hero}-oath`, at: 85, name: "Печатка кола", text: "Останнє широке слово.", dmg: 8, heal: 4, crit: 0, acc: 0, armor: 1, leech: 0, aoe: 1, power: 6 },
    { id: `${hero}-last`, hero, parent: `${hero}-needle`, at: 85, name: "Печатка вістря", text: "Останній точний удар.", dmg: 10, heal: 0, crit: 2, acc: 2, armor: 0, leech: 0, aoe: 0, power: 6 },
  );
}

export const PATHS: PathNode[] = PATHS_RAW;

export function pathChoices(hero: HeroId, parent: string | null, at: number) {
  return PATHS.filter((p) => p.hero === hero && p.parent === parent && p.at === at);
}
