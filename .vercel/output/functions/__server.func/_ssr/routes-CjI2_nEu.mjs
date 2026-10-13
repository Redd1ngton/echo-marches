import { o as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CjI2_nEu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	"str",
	"dex",
	"end",
	"int",
	"wil",
	"per"
];
var STAT_LABEL = {
	str: "Сила",
	dex: "Спритність",
	end: "Витривалість",
	int: "Розум",
	wil: "Воля",
	per: "Чутливість"
};
var HERO_ORDER = [
	"sorceress",
	"herbalist",
	"archer",
	"vampire",
	"barbarian",
	"assassin",
	"witch",
	"paladin"
];
var HEROES = {
	sorceress: {
		id: "sorceress",
		name: "Чародійка",
		line: "Кола й іскри",
		blurb: "Б'є здалеку вогнем і кригою, сама тендітна.",
		bars: [
			8,
			3,
			4,
			7,
			6
		],
		hp: 22,
		range: 5,
		move: 4,
		power: 4,
		die: 6,
		ranged: true,
		primary: "int",
		armor: "light",
		rec: ["int", "wil"]
	},
	herbalist: {
		id: "herbalist",
		name: "Травниця",
		line: "Пов'язки й шипи",
		blurb: "Тримає загін на ногах і коле тих, хто підійшов.",
		bars: [
			3,
			6,
			9,
			5,
			4
		],
		hp: 24,
		range: 3,
		move: 4,
		power: 2,
		die: 4,
		ranged: true,
		primary: "wil",
		armor: "light",
		rec: ["wil", "int"]
	},
	archer: {
		id: "archer",
		name: "Лучниця",
		line: "Одна шия, потім натовп",
		blurb: "Далекий постріл і мітки. Не любить стояти впритул.",
		bars: [
			8,
			4,
			2,
			3,
			5
		],
		hp: 24,
		range: 5,
		move: 5,
		power: 4,
		die: 8,
		ranged: true,
		primary: "dex",
		armor: "light",
		rec: ["dex", "per"]
	},
	vampire: {
		id: "vampire",
		name: "Вампір",
		line: "Кров за кров",
		blurb: "Ближній біль, який повертається в жили.",
		bars: [
			7,
			6,
			3,
			4,
			5
		],
		hp: 26,
		range: 1,
		move: 5,
		power: 4,
		die: 8,
		ranged: false,
		primary: "dex",
		armor: "light",
		rec: ["dex", "wil"]
	},
	barbarian: {
		id: "barbarian",
		name: "Варвар",
		line: "Сокира і крик",
		blurb: "Товстий, гучний, б'є сусідів разом із ціллю.",
		bars: [
			9,
			8,
			1,
			3,
			2
		],
		hp: 32,
		range: 1,
		move: 4,
		power: 5,
		die: 8,
		ranged: false,
		primary: "str",
		armor: "medium",
		rec: ["str", "end"]
	},
	assassin: {
		id: "assassin",
		name: "Вбивця",
		line: "Мітка, потім спина",
		blurb: "Один точний ніж після підготовки.",
		bars: [
			8,
			4,
			1,
			4,
			7
		],
		hp: 24,
		range: 1,
		move: 5,
		power: 4,
		die: 8,
		ranged: false,
		primary: "dex",
		armor: "light",
		rec: ["dex", "per"]
	},
	witch: {
		id: "witch",
		name: "Відьма",
		line: "Прокляття раніше удару",
		blurb: "Робить ворога слабшим, потім кличе крука.",
		bars: [
			5,
			4,
			4,
			9,
			6
		],
		hp: 22,
		range: 4,
		move: 4,
		power: 3,
		die: 6,
		ranged: true,
		primary: "wil",
		armor: "light",
		rec: ["wil", "int"]
	},
	paladin: {
		id: "paladin",
		name: "Паладін",
		line: "Щит і кара",
		blurb: "Закриває своїх і б'є тих, хто лишився.",
		bars: [
			6,
			8,
			7,
			3,
			3
		],
		hp: 30,
		range: 1,
		move: 3,
		power: 4,
		die: 6,
		ranged: false,
		primary: "str",
		armor: "heavy",
		rec: ["str", "wil"]
	}
};
function sk(p) {
	return p;
}
var SKILLS = [
	sk({
		id: "so-fire",
		hero: "sorceress",
		name: "Полум'я",
		blurb: "Коло вогню.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 1,
		focus: 2,
		power: 4,
		die: 6,
		stat: "int",
		acc: 1,
		status: {
			id: "burn",
			turns: 2,
			pot: 3
		}
	}),
	sk({
		id: "so-ice",
		hero: "sorceress",
		name: "Крига",
		blurb: "Сковує кроки.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 1,
		focus: 2,
		power: 3,
		die: 6,
		stat: "int",
		acc: 1,
		status: {
			id: "chill",
			turns: 2,
			pot: 1
		}
	}),
	sk({
		id: "so-bolt",
		hero: "sorceress",
		name: "Блискавка",
		blurb: "Б'є ціль і сусіда.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 1,
		focus: 3,
		power: 6,
		die: 8,
		stat: "int",
		acc: 2
	}),
	sk({
		id: "so-storm",
		hero: "sorceress",
		name: "Шторм",
		blurb: "Дороге широке коло.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 2,
		focus: 4,
		power: 5,
		die: 8,
		stat: "int",
		acc: 0
	}),
	sk({
		id: "so-spark",
		hero: "sorceress",
		name: "Іскра",
		blurb: "Дешевий точний постріл.",
		kind: "dmg",
		target: "enemy",
		range: 5,
		radius: 0,
		focus: 1,
		power: 3,
		die: 6,
		stat: "int",
		acc: 2
	}),
	sk({
		id: "so-ward",
		hero: "sorceress",
		name: "Скляний щит",
		blurb: "Малий бар'єр собі.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "he-bind",
		hero: "herbalist",
		name: "Жива пов'язка",
		blurb: "Надійне лікування.",
		kind: "heal",
		target: "ally",
		range: 3,
		radius: 0,
		focus: 2,
		power: 10,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		revive: true
	}),
	sk({
		id: "he-root",
		hero: "herbalist",
		name: "Корінь",
		blurb: "Відновлення кілька ходів.",
		kind: "heal",
		target: "ally",
		range: 3,
		radius: 0,
		focus: 2,
		power: 4,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "regen",
			turns: 3,
			pot: 3
		}
	}),
	sk({
		id: "he-clean",
		hero: "herbalist",
		name: "Очищення",
		blurb: "Знімає отруту й прокльони.",
		kind: "heal",
		target: "ally",
		range: 3,
		radius: 0,
		focus: 1,
		power: 4,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true
	}),
	sk({
		id: "he-garden",
		hero: "herbalist",
		name: "Сад",
		blurb: "Мале коло лікування.",
		kind: "heal",
		target: "ally",
		range: 3,
		radius: 1,
		focus: 3,
		power: 7,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true
	}),
	sk({
		id: "he-thorn",
		hero: "herbalist",
		name: "Шип",
		blurb: "Квола шкода і холод.",
		kind: "dmg",
		target: "enemy",
		range: 3,
		radius: 0,
		focus: 1,
		power: 2,
		die: 4,
		stat: "int",
		acc: 1,
		status: {
			id: "chill",
			turns: 1,
			pot: 1
		}
	}),
	sk({
		id: "he-pollen",
		hero: "herbalist",
		name: "Пилок",
		blurb: "Ворог б'є слабше.",
		kind: "debuff",
		target: "enemy",
		range: 3,
		radius: 1,
		focus: 2,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 2,
		status: {
			id: "curse",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "ar-quick",
		hero: "archer",
		name: "Швидкий постріл",
		blurb: "Точна стріла.",
		kind: "dmg",
		target: "enemy",
		range: 5,
		radius: 0,
		focus: 1,
		power: 4,
		die: 8,
		stat: "dex",
		acc: 3
	}),
	sk({
		id: "ar-burst",
		hero: "archer",
		name: "Розривна стріла",
		blurb: "Мале коло.",
		kind: "dmg",
		target: "enemy",
		range: 5,
		radius: 1,
		focus: 2,
		power: 3,
		die: 6,
		stat: "dex",
		acc: 1
	}),
	sk({
		id: "ar-trap",
		hero: "archer",
		name: "Пастка",
		blurb: "Ціль отримує кровотечу.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 0,
		focus: 2,
		power: 2,
		die: 6,
		stat: "dex",
		acc: 1,
		status: {
			id: "bleed",
			turns: 3,
			pot: 3
		}
	}),
	sk({
		id: "ar-volley",
		hero: "archer",
		name: "Залп",
		blurb: "Кілька цілей поруч.",
		kind: "dmg",
		target: "enemy",
		range: 5,
		radius: 1,
		focus: 3,
		power: 4,
		die: 6,
		stat: "dex",
		acc: 0
	}),
	sk({
		id: "ar-oil",
		hero: "archer",
		name: "Оливна стріла",
		blurb: "Мітка на цілі.",
		kind: "debuff",
		target: "enemy",
		range: 5,
		radius: 0,
		focus: 1,
		power: 1,
		die: 4,
		stat: "dex",
		acc: 2,
		status: {
			id: "mark",
			turns: 3,
			pot: 3
		}
	}),
	sk({
		id: "ar-follow",
		hero: "archer",
		name: "Слідування",
		blurb: "Наступний удар точніший.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "per",
		acc: 0,
		reliable: true,
		status: {
			id: "mark",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "va-bite",
		hero: "vampire",
		name: "Укус",
		blurb: "Шкода повертається кров'ю.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 1,
		power: 4,
		die: 8,
		stat: "dex",
		acc: 1,
		leech: .45
	}),
	sk({
		id: "va-lance",
		hero: "vampire",
		name: "Багряний укол",
		blurb: "Кровотеча.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 2,
		power: 3,
		die: 8,
		stat: "dex",
		acc: 2,
		status: {
			id: "bleed",
			turns: 3,
			pot: 3
		},
		leech: .25
	}),
	sk({
		id: "va-mist",
		hero: "vampire",
		name: "Імла",
		blurb: "Бар'єр із чужої крові.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "va-feast",
		hero: "vampire",
		name: "Бенкет",
		blurb: "Сильніший укус по скривавленій цілі.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 2,
		power: 6,
		die: 8,
		stat: "dex",
		acc: 1,
		leech: .4
	}),
	sk({
		id: "va-chain",
		hero: "vampire",
		name: "Ланцюг спраги",
		blurb: "Лікує лише з нанесеної шкоди.",
		kind: "dmg",
		target: "enemy",
		range: 2,
		radius: 1,
		focus: 3,
		power: 3,
		die: 6,
		stat: "dex",
		acc: 0,
		leech: .3
	}),
	sk({
		id: "va-still",
		hero: "vampire",
		name: "Тиша жил",
		blurb: "Мале самолікування.",
		kind: "heal",
		target: "self",
		range: 0,
		radius: 0,
		focus: 2,
		power: 6,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true
	}),
	sk({
		id: "ba-cleave",
		hero: "barbarian",
		name: "Розсічення",
		blurb: "Удар по сусідах.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 1,
		focus: 2,
		power: 5,
		die: 8,
		stat: "str",
		acc: 1
	}),
	sk({
		id: "ba-rage",
		hero: "barbarian",
		name: "Лють",
		blurb: "Наступні удари сильніші.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "str",
		acc: 0,
		reliable: true,
		status: {
			id: "guard",
			turns: 2,
			pot: 3
		}
	}),
	sk({
		id: "ba-crush",
		hero: "barbarian",
		name: "Злам",
		blurb: "Важкий удар, ціль вразлива.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 2,
		power: 6,
		die: 10,
		stat: "str",
		acc: 0,
		status: {
			id: "vuln",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "ba-shout",
		hero: "barbarian",
		name: "Крик",
		blurb: "Коротке оглушення.",
		kind: "debuff",
		target: "enemy",
		range: 2,
		radius: 1,
		focus: 2,
		power: 0,
		die: 0,
		stat: "str",
		acc: 1,
		status: {
			id: "stun",
			turns: 1,
			pot: 1
		}
	}),
	sk({
		id: "ba-leap",
		hero: "barbarian",
		name: "Стрибок",
		blurb: "Шкода здалеку.",
		kind: "dmg",
		target: "enemy",
		range: 3,
		radius: 0,
		focus: 2,
		power: 4,
		die: 8,
		stat: "str",
		acc: 1
	}),
	sk({
		id: "ba-hide",
		hero: "barbarian",
		name: "Шкіра",
		blurb: "Тимчасова броня.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "end",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 2,
			pot: 3
		}
	}),
	sk({
		id: "as-back",
		hero: "assassin",
		name: "У спину",
		blurb: "Дуже боляче по мітці.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 2,
		power: 8,
		die: 8,
		stat: "dex",
		acc: 2
	}),
	sk({
		id: "as-trap",
		hero: "assassin",
		name: "Петля",
		blurb: "Кровотеча і холод.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 2,
		power: 3,
		die: 6,
		stat: "dex",
		acc: 2,
		status: {
			id: "bleed",
			turns: 3,
			pot: 4
		}
	}),
	sk({
		id: "as-smoke",
		hero: "assassin",
		name: "Дим",
		blurb: "Сам стає важчою ціллю.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "dex",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 1,
			pot: 3
		}
	}),
	sk({
		id: "as-mark",
		hero: "assassin",
		name: "Мітка",
		blurb: "Готує сильний удар.",
		kind: "debuff",
		target: "enemy",
		range: 3,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "per",
		acc: 3,
		status: {
			id: "mark",
			turns: 3,
			pot: 4
		}
	}),
	sk({
		id: "as-fan",
		hero: "assassin",
		name: "Віяло",
		blurb: "Кинджали по сусідах.",
		kind: "dmg",
		target: "enemy",
		range: 2,
		radius: 1,
		focus: 2,
		power: 3,
		die: 6,
		stat: "dex",
		acc: 1
	}),
	sk({
		id: "as-wait",
		hero: "assassin",
		name: "Тінь",
		blurb: "Точність на один хід.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "dex",
		acc: 0,
		reliable: true,
		status: {
			id: "mark",
			turns: 1,
			pot: 3
		}
	}),
	sk({
		id: "wi-hex",
		hero: "witch",
		name: "Прокляття",
		blurb: "Ціль б'є слабше.",
		kind: "debuff",
		target: "enemy",
		range: 4,
		radius: 0,
		focus: 1,
		power: 1,
		die: 4,
		stat: "wil",
		acc: 2,
		status: {
			id: "curse",
			turns: 3,
			pot: 3
		}
	}),
	sk({
		id: "wi-vuln",
		hero: "witch",
		name: "Тріщина",
		blurb: "Броня цілі тоншає.",
		kind: "debuff",
		target: "enemy",
		range: 4,
		radius: 0,
		focus: 2,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 2,
		status: {
			id: "vuln",
			turns: 3,
			pot: 3
		}
	}),
	sk({
		id: "wi-coven",
		hero: "witch",
		name: "Коло",
		blurb: "Прокляття на кількох.",
		kind: "debuff",
		target: "enemy",
		range: 4,
		radius: 1,
		focus: 3,
		power: 2,
		die: 4,
		stat: "wil",
		acc: 1,
		status: {
			id: "curse",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "wi-crow",
		hero: "witch",
		name: "Крук",
		blurb: "Мала шкода і мітка.",
		kind: "dmg",
		target: "enemy",
		range: 4,
		radius: 0,
		focus: 1,
		power: 3,
		die: 6,
		stat: "int",
		acc: 2,
		status: {
			id: "mark",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "wi-fear",
		hero: "witch",
		name: "Страх",
		blurb: "Може оглушити.",
		kind: "debuff",
		target: "enemy",
		range: 3,
		radius: 0,
		focus: 2,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 1,
		status: {
			id: "stun",
			turns: 1,
			pot: 1
		}
	}),
	sk({
		id: "wi-veil",
		hero: "witch",
		name: "Вуаль",
		blurb: "Захист союзнику.",
		kind: "buff",
		target: "ally",
		range: 3,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "pa-cover",
		hero: "paladin",
		name: "Прикриття",
		blurb: "Перехоплює удар по союзнику.",
		kind: "buff",
		target: "ally",
		range: 1,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "cover",
			turns: 2,
			pot: 1
		}
	}),
	sk({
		id: "pa-smite",
		hero: "paladin",
		name: "Кара",
		blurb: "Священний удар.",
		kind: "dmg",
		target: "enemy",
		range: 1,
		radius: 0,
		focus: 1,
		power: 4,
		die: 6,
		stat: "str",
		acc: 2
	}),
	sk({
		id: "pa-aura",
		hero: "paladin",
		name: "Аура",
		blurb: "Броня всьому колу.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 1,
		focus: 2,
		power: 0,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		status: {
			id: "ward",
			turns: 2,
			pot: 2
		}
	}),
	sk({
		id: "pa-lay",
		hero: "paladin",
		name: "Покладання рук",
		blurb: "Надійне лікування.",
		kind: "heal",
		target: "ally",
		range: 1,
		radius: 0,
		focus: 2,
		power: 9,
		die: 0,
		stat: "wil",
		acc: 0,
		reliable: true,
		revive: true
	}),
	sk({
		id: "pa-wall",
		hero: "paladin",
		name: "Стіна",
		blurb: "Сам стає дуже твердим.",
		kind: "buff",
		target: "self",
		range: 0,
		radius: 0,
		focus: 1,
		power: 0,
		die: 0,
		stat: "end",
		acc: 0,
		reliable: true,
		status: {
			id: "guard",
			turns: 2,
			pot: 4
		}
	}),
	sk({
		id: "pa-light",
		hero: "paladin",
		name: "Світло",
		blurb: "Мале коло по нечисті.",
		kind: "dmg",
		target: "enemy",
		range: 2,
		radius: 1,
		focus: 2,
		power: 3,
		die: 6,
		stat: "wil",
		acc: 1
	})
];
function skillsFor(hero) {
	return SKILLS.filter((s) => s.hero === hero);
}
function it(p) {
	return p;
}
var ITEMS = [
	it({
		id: "pot",
		name: "Зілля крові",
		slot: "consumable",
		price: 12,
		heal: 18,
		blurb: "Повертає життя."
	}),
	it({
		id: "pot2",
		name: "Густе зілля",
		slot: "consumable",
		price: 28,
		heal: 36,
		blurb: "Для тих, хто стоїть у воді надто довго."
	}),
	it({
		id: "bread",
		name: "Солений хліб",
		slot: "consumable",
		price: 6,
		heal: 10,
		blurb: "Марта солить його проти хору."
	}),
	it({
		id: "ton",
		name: "Настоянка волі",
		slot: "consumable",
		price: 14,
		focus: 6,
		blurb: "Повертає зосередження."
	}),
	it({
		id: "resin",
		name: "Гірка смола",
		slot: "consumable",
		price: 22,
		focus: 12,
		blurb: "Тримає руку рівно на два заклинання."
	}),
	it({
		id: "a-coat",
		name: "Плащ дощу",
		slot: "armor",
		price: 36,
		armorN: 2,
		armor: "light",
		blurb: "Не гріє. Не дає воді назвати тебе."
	}),
	it({
		id: "a-vest",
		name: "Жилет варти",
		slot: "armor",
		price: 48,
		armorN: 3,
		armor: "medium",
		blurb: "Середня вага, поки немає панцира."
	}),
	it({
		id: "t-salt",
		name: "Мішечок солі",
		slot: "trinket",
		price: 30,
		acc: 1,
		blurb: "Сіль на порозі. Трохи точніші руки."
	}),
	it({
		id: "t-rain",
		name: "Скляна крапля",
		slot: "trinket",
		price: 42,
		power: 1,
		stat: { wil: 1 },
		blurb: "Пам’ять шлюзу. Воля трохи твердіша."
	}),
	it({
		id: "w-bow3",
		name: "Лук тракту",
		slot: "weapon",
		price: 70,
		power: 5,
		acc: 1,
		heroes: ["archer"],
		blurb: "Тятива не розмокає."
	}),
	it({
		id: "w-sword2",
		name: "Меч брами",
		slot: "weapon",
		price: 68,
		power: 5,
		heroes: ["paladin"],
		blurb: "Брен такий не носить. Каже, що важкий."
	}),
	it({
		id: "w-axe2",
		name: "Сокира мулу",
		slot: "weapon",
		price: 72,
		power: 6,
		heroes: ["barbarian"],
		blurb: "Рубає те, що вже не людина."
	}),
	it({
		id: "w-dagger2",
		name: "Ніж паламаря",
		slot: "weapon",
		price: 66,
		power: 5,
		acc: 1,
		heroes: ["assassin", "vampire"],
		blurb: "Для воску і для спини."
	}),
	it({
		id: "w-staff2",
		name: "Посох краплі",
		slot: "weapon",
		price: 74,
		power: 5,
		heroes: ["sorceress", "herbalist"],
		blurb: "Перший дзвін, складений у дерево."
	}),
	it({
		id: "w-orb2",
		name: "Око шлюзу",
		slot: "weapon",
		price: 74,
		power: 5,
		heroes: ["witch"],
		blurb: "Дивиться туди, куди середній шлюз спить."
	}),
	it({
		id: "w-staff",
		name: "Посох іскри",
		slot: "weapon",
		price: 20,
		power: 3,
		heroes: ["sorceress"],
		blurb: "Стартовий посох."
	}),
	it({
		id: "w-sickle",
		name: "Серп трави",
		slot: "weapon",
		price: 18,
		power: 2,
		heroes: ["herbalist"],
		blurb: "Стартовий серп."
	}),
	it({
		id: "w-bow",
		name: "Мисливський лук",
		slot: "weapon",
		price: 22,
		power: 3,
		acc: 1,
		heroes: ["archer"],
		blurb: "Стартовий лук."
	}),
	it({
		id: "w-fang",
		name: "Ікло",
		slot: "weapon",
		price: 20,
		power: 3,
		heroes: ["vampire"],
		blurb: "Стартове ікло."
	}),
	it({
		id: "w-axe",
		name: "Сокира варти",
		slot: "weapon",
		price: 22,
		power: 4,
		heroes: ["barbarian"],
		blurb: "Стартова сокира."
	}),
	it({
		id: "w-dagger",
		name: "Ніж тіні",
		slot: "weapon",
		price: 20,
		power: 3,
		acc: 1,
		heroes: ["assassin"],
		blurb: "Стартовий ніж."
	}),
	it({
		id: "w-orb",
		name: "Око жаби",
		slot: "weapon",
		price: 20,
		power: 3,
		heroes: ["witch"],
		blurb: "Стартове око."
	}),
	it({
		id: "w-sword",
		name: "Меч варти",
		slot: "weapon",
		price: 22,
		power: 3,
		heroes: ["paladin"],
		blurb: "Стартовий меч."
	}),
	it({
		id: "w-bow2",
		name: "Лук сови",
		slot: "weapon",
		price: 80,
		power: 5,
		acc: 1,
		heroes: ["archer"],
		blurb: "Вербовий лук."
	}),
	it({
		id: "w-bow-night",
		name: "Нічний лук",
		slot: "weapon",
		price: 0,
		power: 6,
		acc: 1,
		heroes: ["archer"],
		blurb: "Здобич бурштину."
	}),
	it({
		id: "w-myth",
		name: "Струна відлуння",
		slot: "weapon",
		price: 0,
		power: 7,
		heroes: ["sorceress", "witch"],
		blurb: "З межі."
	}),
	it({
		id: "w-staff-reed",
		name: "Посох очерету",
		slot: "weapon",
		price: 0,
		power: 5,
		heroes: ["sorceress", "herbalist"],
		blurb: "Низини."
	}),
	it({
		id: "w-sickle-reed",
		name: "Серп низин",
		slot: "weapon",
		price: 0,
		power: 4,
		heroes: ["herbalist"],
		blurb: "Очерет."
	}),
	it({
		id: "w-orb-reed",
		name: "Око низин",
		slot: "weapon",
		price: 0,
		power: 5,
		heroes: ["witch"],
		blurb: "Туман."
	}),
	it({
		id: "w-dagger-sluice",
		name: "Ніж мулу",
		slot: "weapon",
		price: 0,
		power: 5,
		acc: 1,
		heroes: ["assassin", "vampire"],
		blurb: "Шлюз."
	}),
	it({
		id: "w-rapier-sluice",
		name: "Шпага броду",
		slot: "weapon",
		price: 0,
		power: 5,
		heroes: ["vampire"],
		blurb: "Брід."
	}),
	it({
		id: "w-axe-nave",
		name: "Сокира нави",
		slot: "weapon",
		price: 0,
		power: 6,
		heroes: ["barbarian"],
		blurb: "Нава."
	}),
	it({
		id: "w-sword-nave",
		name: "Меч світанку",
		slot: "weapon",
		price: 0,
		power: 6,
		heroes: ["paladin"],
		blurb: "Нава."
	}),
	it({
		id: "w-bow-nave",
		name: "Лук хору",
		slot: "weapon",
		price: 0,
		power: 6,
		heroes: ["archer"],
		blurb: "Хор."
	}),
	it({
		id: "a-cloth",
		name: "Ряса варти",
		slot: "armor",
		price: 24,
		armorN: 1,
		armor: "light",
		blurb: "Тонка тканина."
	}),
	it({
		id: "a-leather",
		name: "Шкіра варти",
		slot: "armor",
		price: 28,
		armorN: 2,
		armor: "light",
		blurb: "М'яка шкіра."
	}),
	it({
		id: "a-mail",
		name: "Кільця варти",
		slot: "armor",
		price: 36,
		armorN: 3,
		armor: "medium",
		blurb: "Важка кольчуга."
	}),
	it({
		id: "a-plate",
		name: "Панцир варти",
		slot: "armor",
		price: 44,
		armorN: 4,
		armor: "heavy",
		blurb: "Плита."
	}),
	it({
		id: "a-willow-hide",
		name: "Вербова шкіра",
		slot: "armor",
		price: 0,
		armorN: 2,
		armor: "light",
		set: "willow",
		blurb: "Комплект верби."
	}),
	it({
		id: "a-echo-veil",
		name: "Вуаль другого слуху",
		slot: "armor",
		price: 0,
		armorN: 1,
		armor: "light",
		set: "echo",
		blurb: "Комплект хору."
	}),
	it({
		id: "a-reed-robe",
		name: "Ряса низин",
		slot: "armor",
		price: 0,
		armorN: 2,
		armor: "light",
		set: "reed",
		blurb: "Комплект очерету."
	}),
	it({
		id: "a-sluice-leather",
		name: "Шкіра шлюзу",
		slot: "armor",
		price: 0,
		armorN: 2,
		armor: "light",
		set: "sluice",
		blurb: "Комплект шлюзу."
	}),
	it({
		id: "a-nave-plate",
		name: "Обід світанку",
		slot: "armor",
		price: 0,
		armorN: 4,
		armor: "heavy",
		set: "nave",
		blurb: "Комплект нави."
	}),
	it({
		id: "t-cloak",
		name: "Плащ верби",
		slot: "trinket",
		price: 40,
		acc: 1,
		blurb: "Плащ дощу."
	}),
	it({
		id: "t-echo",
		name: "Печатка хору",
		slot: "trinket",
		price: 0,
		power: 2,
		blurb: "Відлуння."
	}),
	it({
		id: "t-bell",
		name: "Уламок язика",
		slot: "trinket",
		price: 0,
		power: 1,
		blurb: "Язик дзвона."
	}),
	it({
		id: "t-reed-knot",
		name: "Вузол очерету",
		slot: "trinket",
		price: 0,
		acc: 1,
		blurb: "Низини."
	}),
	it({
		id: "t-sluice-key",
		name: "Ключ шлюзу",
		slot: "trinket",
		price: 0,
		power: 1,
		blurb: "Сплячий шлюз."
	}),
	it({
		id: "t-nave-wax",
		name: "Воскова печатка",
		slot: "trinket",
		price: 0,
		power: 1,
		blurb: "Нава."
	})
];
function itemById(id) {
	return ITEMS.find((i) => i.id === id);
}
var STARTER = {
	sorceress: "w-staff",
	herbalist: "w-sickle",
	archer: "w-bow",
	vampire: "w-fang",
	barbarian: "w-axe",
	assassin: "w-dagger",
	witch: "w-orb",
	paladin: "w-sword"
};
function starterWeapon(hero) {
	return STARTER[hero];
}
var ENEMIES = {
	reed: {
		id: "reed",
		name: "Очеретяник",
		sprite: "drowned",
		hp: 86,
		def: 8,
		dmg: 8,
		die: 6,
		acc: 2,
		move: 4,
		range: 1,
		xp: 18,
		gold: 6,
		level: 2,
		role: "skirmisher"
	},
	drowned: {
		id: "drowned",
		name: "Потопельник",
		sprite: "drowned",
		hp: 120,
		def: 11,
		dmg: 10,
		die: 6,
		acc: 2,
		move: 3,
		range: 1,
		xp: 28,
		gold: 9,
		level: 3,
		role: "brute"
	},
	sludge: {
		id: "sludge",
		name: "Мул",
		sprite: "drowned",
		hp: 190,
		def: 14,
		dmg: 13,
		die: 6,
		acc: 1,
		move: 2,
		range: 1,
		xp: 36,
		gold: 12,
		level: 4,
		role: "brute"
	},
	wraith: {
		id: "wraith",
		name: "Хорист",
		sprite: "wraith",
		hp: 96,
		def: 10,
		dmg: 9,
		die: 6,
		acc: 3,
		move: 4,
		range: 3,
		xp: 32,
		gold: 10,
		ranged: true,
		level: 4,
		role: "archer"
	},
	chorister: {
		id: "chorister",
		name: "Співець",
		sprite: "wraith",
		hp: 130,
		def: 11,
		dmg: 12,
		die: 6,
		acc: 3,
		move: 3,
		range: 3,
		xp: 40,
		gold: 14,
		ranged: true,
		level: 6,
		role: "caster"
	},
	lurker: {
		id: "lurker",
		name: "Драговинник",
		sprite: "drowned",
		hp: 160,
		def: 12,
		dmg: 14,
		die: 6,
		acc: 2,
		move: 4,
		range: 1,
		xp: 44,
		gold: 15,
		level: 7,
		role: "skirmisher"
	},
	bellringer: {
		id: "bellringer",
		name: "Дзвонар",
		sprite: "bellringer",
		hp: 540,
		def: 16,
		dmg: 18,
		die: 8,
		acc: 3,
		move: 3,
		range: 1,
		xp: 140,
		gold: 60,
		boss: true,
		level: 8,
		role: "boss"
	},
	fenmother: {
		id: "fenmother",
		name: "Мати очерету",
		sprite: "drowned",
		hp: 680,
		def: 15,
		dmg: 20,
		die: 8,
		acc: 2,
		move: 3,
		range: 1,
		xp: 180,
		gold: 70,
		boss: true,
		level: 9,
		role: "boss"
	},
	cantor: {
		id: "cantor",
		name: "Кантор",
		sprite: "bellringer",
		hp: 820,
		def: 17,
		dmg: 22,
		die: 8,
		acc: 3,
		move: 3,
		range: 2,
		xp: 220,
		gold: 90,
		boss: true,
		ranged: true,
		level: 10,
		role: "boss"
	}
};
var QUESTS = [
	{
		id: "q-road",
		name: "Затоплений тракт",
		region: "grey",
		stages: [
			"Марта знає, що дорогу затопило не річкою. Послухай її біля печі, перш ніж Брен відчинить браму.",
			"На тракті відкрий лівий і правий шлюзи. Середній лиши спати. Розжени тих, хто вийшов з води.",
			"Коли міст згадає себе, йди в устя крипти."
		]
	},
	{
		id: "q-bell",
		name: "Ім'я на дзвоні",
		region: "grey",
		stages: ["Напис і Остап говорять різне. Слухай камінь: крапля, попіл, верба.", "Зупини дзвонаря. Двері нави відчиняться лише після правильного хору."]
	},
	{
		id: "q-back",
		name: "Перший уламок",
		region: "grey",
		stages: ["Повернися до Марти з тишею крипти. Уламок язика в неї, не в скрині.", "Скажи варті правду або запечатану брехню. Обидва шляхи відчиняють схід."]
	},
	{
		id: "q-lights",
		name: "Вогні за вербами",
		region: "grey",
		stages: ["Згаси або вислухай три вербові вогні."]
	},
	{
		id: "sq-ribbon",
		name: "Стрічка Іви",
		region: "grey",
		stages: ["На тракті знайди сіру стрічку пралі.", "Поверни її Іві, не Брену."]
	},
	{
		id: "sq-tray",
		name: "Деко Лади",
		region: "grey",
		stages: ["Розжени нічних гостей біля південної стіни.", "Скажи Ладі, що деко ціле."]
	},
	{
		id: "sq-novice",
		name: "Послушник",
		region: "grey",
		stages: ["Вислухай Остапа в крипті. Він плутає порядок навмисно."]
	},
	{
		id: "sq-tuner",
		name: "Настроювач",
		region: "grey",
		stages: ["Дорин на варті знає, хто закрив середній шлюз, і не боїться порядку дзвонів."]
	},
	{
		id: "q-fen",
		name: "Мати очерету",
		region: "moss",
		stages: ["Рибалка просить тиші в драговині.", "Знайди матір очерету і не дай їй договорити ім'я."]
	},
	{
		id: "q-nave",
		name: "Кантор",
		region: "grey",
		stages: ["Двері нави відчиняться після порядку дзвонів.", "Кантор у наві ще співає живих."]
	},
	{
		id: "q-moss",
		name: "Хор очерету",
		region: "moss",
		stages: ["Пройди низини до лігва хору."]
	},
	{
		id: "q-amber",
		name: "Смоляний мисливець",
		region: "amber",
		stages: ["Знайди оленя, що не може впасти."]
	},
	{
		id: "q-glass",
		name: "Перший з двох",
		region: "glass",
		stages: ["Розбий копію, яка назвалася тобою."]
	},
	{
		id: "q-red",
		name: "Прапор без руки",
		region: "red",
		stages: ["Зупини клятву, яка марширує сама."]
	},
	{
		id: "q-shore",
		name: "Відплив",
		region: "shore",
		stages: ["Дістань дзвін, який дзвонить під водою."]
	},
	{
		id: "q-ash",
		name: "Корона попелу",
		region: "ash",
		stages: ["Назви короля його першим ім'ям — або спали друге."]
	},
	{
		id: "q-verge",
		name: "Межа",
		region: "verge",
		stages: ["Виріши долю тріщини."]
	}
];
var REGIONS = [
	{
		id: "grey",
		name: "Сірі марші",
		tier: 1,
		biome: "grey",
		blurb: "Варта, тракт і крипта дзвонаря."
	},
	{
		id: "moss",
		name: "Мохові низини",
		tier: 2,
		biome: "moss",
		blurb: "Хор, який співає імена живих."
	},
	{
		id: "amber",
		name: "Бурштинові пущі",
		tier: 2,
		biome: "amber",
		blurb: "Олень, що не може впасти."
	},
	{
		id: "glass",
		name: "Скляні кряжі",
		tier: 3,
		biome: "glass",
		blurb: "Копія, яка назвалася тобою."
	},
	{
		id: "red",
		name: "Червоні пустки",
		tier: 3,
		biome: "red",
		blurb: "Клятва без рота."
	},
	{
		id: "shore",
		name: "Берег без місяця",
		tier: 4,
		biome: "shore",
		blurb: "Дзвін під водою."
	},
	{
		id: "ash",
		name: "Попеляста корона",
		tier: 4,
		biome: "ash",
		blurb: "Король до імені."
	},
	{
		id: "verge",
		name: "Межа відлунь",
		tier: 5,
		biome: "verge",
		blurb: "Тріщина чекає язика."
	}
];
var TALK = {
	marta: {
		speaker: "Марта",
		text: "Я Марта, і це мій шинок, не брама Брена і не мотузка Іви. Вогнище ще тримається. Тракт затопило, бо середній шлюз хтось лишив спати, а крайні — брехати.",
		choices: [
			{
				label: "Хто це зробив?",
				to: "marta-who"
			},
			{
				label: "Що з дорогою?",
				to: "marta-road"
			},
			{
				label: "Мені треба ліжко.",
				to: "marta-bed"
			}
		]
	},
	"marta-who": {
		speaker: "Марта",
		text: "Брен клянеться, що не торкався важелів. Дорин, настроювач, каже інше: середній шлюз закрили рукою варти, не водою. Я не суддя. Я тримаю ліжка сухими.",
		choices: [{
			label: "Тоді про дорогу.",
			to: "marta-road"
		}, {
			label: "Піду до Дорина.",
			end: true
		}]
	},
	"marta-watch": {
		speaker: "Марта",
		text: "Брен стоїть у брамі й удає, що дощ — це служба. Іва пере, Лада пече, я рахую ліжка. Решта пішла на тракт і повернулася дзвоном.",
		choices: [{
			label: "Про дорогу.",
			to: "marta-road"
		}, {
			label: "Досить.",
			end: true
		}]
	},
	"marta-road": {
		speaker: "Марта",
		text: "Якщо відкриєш крайні шлюзи й не чіпатимеш середній — старий міст згадає, що він міст. А під самим устям крипти вже лежить світлий брід. Не плутай його з чоботом Брена.",
		choices: [{
			label: "Я піду.",
			quest: "q-road:1",
			end: true
		}, {
			label: "Ще послухаю.",
			end: true
		}]
	},
	"marta-bed": {
		speaker: "Марта",
		text: "Ліжко біля печі. Вісім мідяків, якщо маєш. Якщо ні — лягай, потім порахуємось.",
		choices: [{
			label: "Дякую.",
			end: true
		}]
	},
	"marta-back": {
		speaker: "Марта",
		text: "Ти приніс тишу, і вона важча за мішок. Це язик дзвона. Можна сказати варті, що тріщина запечатана. А можна сказати правду.",
		choices: [{
			label: "Сказати, що запечатано.",
			to: "marta-seal",
			quest: "q-back:999",
			gold: 40,
			xp: 50
		}, {
			label: "Сказати правду.",
			to: "marta-truth",
			quest: "q-back:999",
			gold: 25,
			xp: 60
		}]
	},
	"marta-seal": {
		speaker: "Марта",
		text: "Брен спатиме спокійніше. Я — ні. Дорога на схід усе одно відкрита.",
		choices: [{
			label: "Тоді на схід.",
			flag: "road-open",
			end: true
		}]
	},
	"marta-truth": {
		speaker: "Марта",
		text: "Правда в цьому селі живе недовго, але дякую, що не почав з брехні. Східні марші теж чули удар.",
		choices: [{
			label: "Відкрий марші.",
			flag: "road-open",
			end: true
		}]
	},
	"marta-done": {
		speaker: "Марта",
		text: "Верба мокра, ліжко сухе, схід відкритий. Якщо підеш далі — не геройствуй на порожній шлунок. Лада дає окраєць лише після гостей.",
		choices: [{
			label: "Добре.",
			end: true
		}]
	},
	bren: {
		speaker: "Брен",
		text: "Брама. Не шинок і не пральня. На тракт — після Марти. Якщо знайдеш мій чобіт у мулі, неси сюди. І не вір Дорину: він чує дзвони там, де я чую дощ.",
		choices: [
			{
				label: "Зрозумів.",
				end: true
			},
			{
				label: "Імена на одвірку.",
				to: "bren-names"
			},
			{
				label: "Ти закрив середній шлюз?",
				to: "bren-sluice"
			},
			{
				label: "Я знайшов твій чобіт.",
				to: "bren-boot",
				need: "boot-found"
			}
		]
	},
	"bren-sluice": {
		speaker: "Брен",
		text: "Я закрив його, коли перший потопельник вимовив моє ім'я з води. Крайні лишив, бо без них село стає островом. Якщо відкриєш крайні й не розбудиш середній — міст згадає себе. Це не сповідь. Це порядок.",
		choices: [{
			label: "Тоді так і зроблю.",
			quest: "q-road:1",
			xp: 8,
			end: true
		}]
	},
	"bren-names": {
		speaker: "Брен",
		text: "На одвірку три імені тих, хто пішов на тракт. Не додавай четвертого. Потопельник біля броду просить назвати його так, як тут, а не так, як співає вода.",
		choices: [{
			label: "Прочитати три й замовкнути.",
			quest: "sq-gate-names:999",
			gold: 20,
			xp: 12,
			end: true
		}, {
			label: "Нехай дощ читає.",
			end: true
		}]
	},
	"bren-boot": {
		speaker: "Брен",
		text: "Це мій. Я зніму руку з меча, раз ти приніс його з мулу, а не з чиєїсь ноги.",
		choices: [{
			label: "Віддати.",
			quest: "sq-mud-boot:999",
			gold: 25,
			xp: 15,
			end: true
		}]
	},
	iva: {
		speaker: "Іва",
		text: "Я Іва, праля. Не Марта і не Брен. Сіра стрічка злетіла на тракт і сіла на очерет біля броду. Не віддавай її варті: Брен і так колекціонує чуже, починаючи з чобота.",
		choices: [{
			label: "Шукатиму стрічку.",
			quest: "sq-ribbon:1",
			end: true
		}, {
			label: "Це не мій клопіт.",
			end: true
		}]
	},
	"iva-back": {
		speaker: "Іва",
		text: "Мокра, але моя. Завтра знову білітиме на мотузці. Візьми мідь за ноги, не за героїзм.",
		choices: [{
			label: "Тримай.",
			quest: "sq-ribbon:999",
			gold: 18,
			xp: 14,
			end: true
		}]
	},
	"iva-done": {
		speaker: "Іва",
		text: "Стрічка вже на мотузці. Лада стоїть південніше й говорить про деко, не про білизну. Остап у крипті боїться не того дзвона.",
		choices: [{
			label: "Добре.",
			end: true
		}]
	},
	lada: {
		speaker: "Лада",
		text: "Лада. Печу, поки піч пам'ятає дрова. Нічні гості стягли деко з порога. Якщо їх уже немає біля південної стіни — скажи прямо. Я не люблю натяків Брена.",
		choices: [{
			label: "Гостей уже немає.",
			to: "lada-done"
		}, {
			label: "Вони ще там.",
			end: true
		}]
	},
	"lada-done": {
		speaker: "Лада",
		text: "Тоді деко моє, а мідь твоя. Не неси окраєць Марте: вона віддасть його гостям, якщо ті ввічливо попросять.",
		choices: [{
			label: "Беру платню.",
			quest: "sq-tray:999",
			gold: 16,
			xp: 12,
			end: true
		}]
	},
	ostap: {
		speaker: "Остап",
		text: "Я послушник, не хор. Уголос боюся верби першою — хай хор слухає брехню. На камені: крапля, попіл, верба. Дорин на варті чує той самий порядок, тільки він не боїться сказати його біля брами.",
		choices: [{
			label: "Запам'ятати камінь.",
			quest: "sq-novice:999",
			flag: "bell-order",
			xp: 16,
			end: true
		}, {
			label: "Повторюю твій страх.",
			end: true
		}]
	},
	dorin: {
		speaker: "Дорин",
		text: "Дорин. Я настроюю дзвони, яких тут уже немає. Брен закрив середній шлюз своєю рукою — я бачив мокре залізо, не хвилю. Порядок, який тримає крипту: крапля, попіл, верба. Остап скаже навпаки, бо боїться хору.",
		choices: [{
			label: "Запам'ятати порядок.",
			flag: "bell-order",
			quest: "sq-tuner:999",
			xp: 14,
			end: true
		}, {
			label: "Брен заперечить.",
			end: true
		}]
	},
	ribbon: {
		speaker: "Сіра стрічка",
		text: "На очереті висить мокра сіра стрічка. Пахне лугом, не криптою. Іва просила не плутати її з чоботом Брена.",
		choices: [{
			label: "Зняти для Іви.",
			flag: "ribbon-found",
			xp: 6,
			end: true
		}, {
			label: "Нехай сохне.",
			end: true
		}]
	},
	light: {
		speaker: "Вербовий вогонь",
		text: "Маленьке полум'я висить над водою і повторює чиєсь ім'я неправильно. Можна загасити його волею — або почекати, поки збреше до кінця.",
		choices: [{
			label: "Загасити волею.",
			check: {
				stat: "wil",
				dc: 12,
				ok: "light-ok",
				bad: "light-bad"
			}
		}, {
			label: "Нехай договорить.",
			to: "light-ok"
		}]
	},
	"light-ok": {
		speaker: "Вербовий вогонь",
		text: "Полум'я сідає в дощ. Десь у селі стає на одне відлуння менше.",
		choices: [{
			label: "Далі.",
			flag: "light-one",
			xp: 8,
			end: true
		}]
	},
	"light-bad": {
		speaker: "Вербовий вогонь",
		text: "Ім'я чіпляється за рукав і відпускає з водою в чоботі. Вогонь усе ж гасне.",
		choices: [{
			label: "Далі.",
			flag: "light-one",
			end: true
		}]
	},
	stone: {
		speaker: "Плита",
		text: "«Крайні шлюзи пам'ятають дорогу. Середній спить. Не буди». Нижче дрібніше: крапля, попіл, верба. Остап у крипті скаже це навпаки, якщо злякається.",
		choices: [{
			label: "Роздивитись дрібне.",
			check: {
				stat: "per",
				dc: 11,
				ok: "stone-ok",
				bad: "stone-bad"
			}
		}, {
			label: "Досить.",
			flag: "read-slab",
			end: true
		}]
	},
	"stone-ok": {
		speaker: "Плита",
		text: "Порядок дзвонів: крапля, попіл, верба. Хтось не хотів, щоб це читали з бігу.",
		choices: [{
			label: "Запам'ятати.",
			flag: "bell-order",
			end: true
		}]
	},
	"stone-bad": {
		speaker: "Плита",
		text: "Вода з'їла половину. Спершу те, що тече, наприкінці — те, що росте.",
		choices: [{
			label: "Спробую.",
			flag: "read-slab",
			end: true
		}]
	},
	cryptstone: {
		speaker: "Напис у крипті",
		text: "«Спершу голос води. Потім те, що лишилось від вогню. Наостанок — верба». Три дзвони висять не в цьому порядку. Остап це знає і все одно боїться верби першою.",
		choices: [{
			label: "Крапля, попіл, верба.",
			flag: "bell-order",
			end: true
		}]
	},
	endseal: {
		speaker: "Межа",
		text: "Тріщина чекає язика. Запечатати — і марші забудуть цей цикл. Ударити — і відлуння лишаться, але відповідатимуть живим.",
		choices: [{
			label: "Запечатати.",
			flag: "ending-seal",
			quest: "q-verge:999",
			xp: 80,
			end: true
		}, {
			label: "Ударити навсправжки.",
			flag: "ending-ring",
			quest: "q-verge:999",
			xp: 80,
			end: true
		}]
	},
	perch: {
		speaker: "Сідало сов",
		text: "Над крамницею сидять три мокрі сови й не кричать. Одне перо лишилось на цвяху. Це не стрічка Іви і не чобіт Брена.",
		choices: [{
			label: "Взяти перо.",
			flag: "owl-feather",
			xp: 6,
			end: true
		}, {
			label: "Нехай сидять.",
			end: true
		}]
	},
	"tract-boot": {
		speaker: "Чобіт у мулі",
		text: "З мулу стирчить чобіт із міткою брами. Це річ Брена. Іва просила не нести їй чуже взуття.",
		choices: [{
			label: "Витягти.",
			flag: "boot-found",
			xp: 8,
			end: true
		}, {
			label: "Нехай глибшає.",
			end: true
		}]
	},
	"ford-names": {
		speaker: "Потопельник",
		text: "Він ворушить губами, не зубами. «Не буди середній. Назви мене так, як на брамі в Брена, а не так, як співає вода».",
		choices: [{
			label: "Назвати ім'я з одвірка.",
			quest: "sq-ford-names:999",
			gold: 30,
			item: "pot",
			xp: 18,
			end: true
		}, {
			label: "Відійти.",
			end: true
		}]
	},
	"wax-niche": {
		speaker: "Віск ніші",
		text: "У воску лишилась печатка, яку хор не встиг з'їсти. Вона віддається після правильного хору дзвонів.",
		choices: [{
			label: "Забрати печатку.",
			quest: "sq-bell-order:999",
			item: "t-nave-wax",
			xp: 20,
			need: "bells",
			end: true
		}, {
			label: "Ще не час.",
			end: true
		}]
	},
	"road-moss": {
		speaker: "Вартовий низин",
		text: "Хор співає імена тих, хто ще не втонув. Якщо відповіси — вони вважають, що ти вже їхній. Лігво далі по моху, не в шинку Марти.",
		choices: [{
			label: "Не відповідатиму.",
			quest: "q-moss:1",
			xp: 12,
			end: true
		}, {
			label: "Де хор?",
			end: true
		}]
	},
	"road-amber": {
		speaker: "Мисливиця",
		text: "Олень у пущі дихає. Це й уся єресь. Він не падає, бо смола тримає його в позі грому. Стріляй не в серце, а в живицю.",
		choices: [{
			label: "Шукатиму оленя.",
			quest: "q-amber:1",
			xp: 12,
			end: true
		}]
	},
	"road-glass": {
		speaker: "Скляний провідник",
		text: "Не вір тому, хто повторив твій жест швидше за тебе. Перший з двох стоїть за склом і вже піднімає твою руку.",
		choices: [{
			label: "Не повторюватиму.",
			quest: "q-glass:1",
			xp: 14,
			end: true
		}]
	},
	"road-red": {
		speaker: "Прапороносець",
		text: "Клятва марширує, навіть коли рот уже попіл. Не ставай у стрій і не піднімай ганчірку «за своїх».",
		choices: [{
			label: "Обійду стрій.",
			quest: "q-red:1",
			xp: 14,
			end: true
		}]
	},
	"road-shore": {
		speaker: "Рибалка",
		text: "Приплив приходить на слух. Дзвін під водою б'є тричі. Не рахуй четвертий. Після третього затули вуха.",
		choices: [{
			label: "Не рахуватиму четвертий.",
			quest: "q-shore:1",
			xp: 16,
			end: true
		}]
	},
	"road-ash": {
		speaker: "Писар попелу",
		text: "Король мав ім'я до корони. Корона його з'їла. Друге пахне димом. Назви перше або спали друге, тільки не вигадуй третього.",
		choices: [{
			label: "Назву перше ім'я.",
			quest: "q-ash:1",
			xp: 16,
			end: true
		}, {
			label: "Спалю друге.",
			quest: "q-ash:1",
			xp: 16,
			end: true
		}]
	},
	"road-verge": {
		speaker: "Голос тріщини",
		text: "Я кажу твоє ім'я двічі. Одне твоє, друге хору. Забери своє. Далі треба вирішити: запечатати язик чи вдарити навсправжки.",
		choices: [{
			label: "Забираю своє ім'я.",
			quest: "q-verge:1",
			xp: 20,
			end: true
		}]
	},
	"trace-moss": {
		speaker: "Слід у моху",
		text: "Хтось ішов босоніж і рахував кроки. На п'ятому лишився вузол очерету.",
		choices: [{
			label: "Підняти.",
			quest: "sq-moss-trace:999",
			item: "t-reed-knot",
			xp: 12,
			end: true
		}]
	},
	"trace-amber": {
		speaker: "Живиця",
		text: "Смола тримає рукавицю в позі грому. Рукавиця ще тепла.",
		choices: [{
			label: "Зрізати обережно.",
			quest: "sq-amber-trace:999",
			item: "ton",
			gold: 20,
			xp: 12,
			end: true
		}]
	},
	"trace-glass": {
		speaker: "Уламок",
		text: "В уламку ти ще цілий і вже піднімаєш руку. Не дивись довго.",
		choices: [{
			label: "Взяти відблиск.",
			quest: "sq-glass-trace:999",
			item: "a-echo-veil",
			xp: 16,
			end: true
		}]
	},
	"trace-red": {
		speaker: "Ганчірка строю",
		text: "Прапор кличе стати в колону. Якщо не підняти його «за своїх», пил віддає платню сам.",
		choices: [{
			label: "Обійти.",
			quest: "sq-red-trace:999",
			gold: 35,
			xp: 16,
			end: true
		}]
	},
	"trace-shore": {
		speaker: "Мушля",
		text: "У мушлі три удари й тиша. Четвертого немає.",
		choices: [{
			label: "Слухати тишу.",
			quest: "sq-shore-trace:999",
			item: "a-sluice-leather",
			xp: 16,
			end: true
		}]
	},
	"trace-ash": {
		speaker: "Жаровня",
		text: "Друге ім'я короля написане на вугіллі. Його можна спалити, не виносячи з табору.",
		choices: [{
			label: "Спалити напис.",
			quest: "sq-ash-trace:999",
			gold: 40,
			xp: 18,
			end: true
		}]
	},
	"trace-verge": {
		speaker: "Друге ім'я",
		text: "Тріщина повторює тебе тихше. Друге ім'я належить хору. Залиши його тут.",
		choices: [{
			label: "Залишити чуже.",
			quest: "sq-verge-trace:999",
			item: "t-echo",
			xp: 24,
			end: true
		}]
	}
};
var RUMOR = {
	moss: "Вартовий низин витирає мох із рота. Хор співає імена тих, хто ще не втонув.",
	amber: "Мисливиця стоїть по коліно в смолі. Олень у пущі дихає — це й уся єресь.",
	glass: "Скляний провідник дивиться повз тебе. Не вір тому, хто повторив твій жест.",
	red: "Прапороносець без прапора: клятва марширує, навіть коли рот уже попіл.",
	shore: "Рибалка без місяця: якщо дзвін під водою вдарить тричі — не рахуй четвертий.",
	ash: "Писар у попелі: король мав ім'я до корони. Друге ім'я пахне димом.",
	verge: "Голос із тріщини каже твоє ім'я двічі й чекає, яке з них ти забереш.",
	grey: "У варті Марта рахує ліжка, Іва — стрічки, Лада — дека, Брен — чоботи. Це різні справи."
};
function rumorNode(region) {
	return {
		speaker: "На марші",
		text: RUMOR[region] ?? RUMOR.grey,
		choices: [{
			label: "Іти далі.",
			end: true
		}]
	};
}
var PATHS_RAW = [];
for (const hero of Object.keys(HEROES)) {
	const a = `${hero}-a`;
	const b = `${hero}-b`;
	PATHS_RAW.push({
		id: a,
		hero,
		parent: null,
		at: 20,
		name: "Широкий крок",
		text: "Більше площі.",
		dmg: 4,
		heal: 2,
		crit: 0,
		acc: 0,
		armor: 0,
		leech: 0,
		aoe: 1,
		power: 2
	}, {
		id: b,
		hero,
		parent: null,
		at: 20,
		name: "Точний крок",
		text: "Менше площі, більше влучень.",
		dmg: 2,
		heal: 0,
		crit: 1,
		acc: 2,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 2
	}, {
		id: `${a}-wide`,
		hero,
		parent: a,
		at: 40,
		name: "Поле",
		text: "Коло тримається.",
		dmg: 4,
		heal: 4,
		crit: 0,
		acc: 0,
		armor: 0,
		leech: 0,
		aoe: 1,
		power: 3
	}, {
		id: `${a}-guard`,
		hero,
		parent: a,
		at: 40,
		name: "Обід",
		text: "Після кола лишається броня.",
		dmg: 2,
		heal: 0,
		crit: 0,
		acc: 0,
		armor: 1,
		leech: 0,
		aoe: 0,
		power: 2
	}, {
		id: `${b}-vein`,
		hero,
		parent: b,
		at: 40,
		name: "Жила",
		text: "Критичні частіші.",
		dmg: 4,
		heal: 0,
		crit: 2,
		acc: 1,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 3
	}, {
		id: `${b}-ash`,
		hero,
		parent: b,
		at: 40,
		name: "Попіл",
		text: "Удар тримається.",
		dmg: 6,
		heal: 0,
		crit: 0,
		acc: 1,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 3
	}, {
		id: `${hero}-oath`,
		hero,
		parent: `${a}-wide`,
		at: 60,
		name: "Клятва кола",
		text: "Сила й площа.",
		dmg: 6,
		heal: 2,
		crit: 0,
		acc: 0,
		armor: 0,
		leech: 0,
		aoe: 1,
		power: 4
	}, {
		id: `${hero}-needle`,
		hero,
		parent: `${b}-vein`,
		at: 60,
		name: "Голка",
		text: "Одна ціль.",
		dmg: 8,
		heal: 0,
		crit: 1,
		acc: 2,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 4
	}, {
		id: `${hero}-seal`,
		hero,
		parent: `${hero}-oath`,
		at: 85,
		name: "Печатка кола",
		text: "Останнє широке слово.",
		dmg: 8,
		heal: 4,
		crit: 0,
		acc: 0,
		armor: 1,
		leech: 0,
		aoe: 1,
		power: 6
	}, {
		id: `${hero}-last`,
		hero,
		parent: `${hero}-needle`,
		at: 85,
		name: "Печатка вістря",
		text: "Останній точний удар.",
		dmg: 10,
		heal: 0,
		crit: 2,
		acc: 2,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 6
	});
}
var PATHS = PATHS_RAW;
function pathChoices(hero, parent, at) {
	return PATHS.filter((p) => p.hero === hero && p.parent === parent && p.at === at);
}
var LORE = [
	{
		id: "inn",
		title: "Мокра верба",
		text: "Корчма тримає варту, поки дзвін мовчить. Марта не солдат: вона пам’ятає, хто ліг спати і хто вийшов у дощ без імені. Хліб тут солений, бо сіль відганяє хор від порога."
	},
	{
		id: "sluice",
		title: "Брехня шлюзів",
		quest: "q-road",
		text: "Крайні шлюзи пам’ятають дорогу. Середній Брен закрив рукою, коли вода сказала його ім’я. Відкрити середній — знову зробити село островом. Міст з’являється лише коли крайні згодні, а середній спить."
	},
	{
		id: "bells",
		title: "Порядок дзвонів",
		quest: "q-bell",
		text: "Хор бреше: верба ніби перша. Камінь каже інакше. Крапля, потім попіл, наостанок верба. Остап повторює страх уголос, щоб хор його почув. Правда лишається на камені."
	},
	{
		id: "fen",
		title: "Мати очерету",
		quest: "q-fen",
		text: "Драговина на сході тракту вже говорить людськими іменами. Мати очерету не їсть тіло. Вона договорює ім’я, і людина сама йде в воду. Рибалка просить тиші, не трофея."
	},
	{
		id: "nave",
		title: "Нава під криптою",
		quest: "q-nave",
		text: "Після правильного хору двері нави знають дорогу вниз. Кантор співає тих, хто нагорі сказав «я повернусь». Імена на камені — варта, яку більше не кличуть уголос."
	},
	{
		id: "crack",
		title: "Тріщина",
		quest: "q-back",
		text: "Уламок язика дзвона — не реліквія. Це шматок розкладу, який варта видає за службу. Запечатати тріщину чи вдарити навсправжки вирішують уже за Сірими маршами, коли схід перестає мовчати."
	}
];
var CHAPTERS = [
	{
		id: "ch-willow",
		title: "Вербова варта",
		hours: 3,
		summary: "Дощ у Сірому прикордонні ще пахне хлібом і залізом. Вісім героїв ночують у «Мокрій вербі», поки варта вдає, що самотній дзвін — це служба, а не графік.",
		beats: [
			"Обрати одного з восьми біля печі Марти: чародійку, травницю, лучницю, вампіра, варвара, вбивцю, відьму чи паладіна. На дошці найму — ще двоє за 30 монет, не більше.",
			"Марта в східній корчмі: ліжко біля вогню за вісім мідяків. Якщо гаман порожній — лягти все одно, порахуються трунами.",
			"Брен стоїть у брамі й не пускає на тракт, доки загін не почув від Марти про шлюзи. Назад він пускає всіх: героїв і так обмаль.",
			"Три вербові вогні над калюжами двору повторюють чужі імена неправильно. Загасити волею (поріг 12) або дати збрехати до кінця — квест «Вогні за вербами».",
			"У нижньому дворі два нічні гості, потопельники на бруківці. Дальні — лучниця й чародійка — не лізуть у калюжу, ближні тримають двері корчми.",
			"Крамниця під вивіскою продає мокру рясу, шкіру тракту, панцир варти, настій верби й гірку смолу. Перші комплекти варти теж висять тут, якщо є монети.",
			"Скриня маршів на площі мовчить, поки Марта не отримає уламок язика. Можна лише дивитися на схід крізь дощ.",
			"Сови сідають на мокру вивіску і не кричать. Перо з їхнього сідала Марта міняє на плащ, який варта так і не забрала з гачка."
		]
	},
	{
		id: "ch-tract",
		title: "Затоплений тракт",
		hours: 4,
		summary: "Вода стоїть там, де вчора був пил. Тракт — не річка: шлюзи лишили в брехні, і в мулі ходять ті, хто пішов з варти ногами, а повернувся дзвоном.",
		beats: [
			"Брама випускає на південний край тракту. Перша засідка — троє потопельників упоперек нижньої дороги, поки дощ з’їдає слід.",
			"Глибокі канали — стіна. Мілководдя й мул лише гальмують. Верби стоять у воді й не падають, хоча коріння вже чуже.",
			"Плита посеред бруку: «Крайні шлюзи пам’ятають дорогу. Середній спить. Не буди». Увага від 11 читає дрібне — крапля, попіл, верба.",
			"Лівий і правий важелі відкрити, середній лишити як є. Якщо смикнути середній — міст знову стає водою і устя крипти мовчить.",
			"Коли крайні згодні, розрив над каналом згадує, що він міст. Дошка кладеться сама, без цвяхів.",
			"Скриня в мулі біля південної стежки: монети й настій. У тому ж мулі чобіт із ініціалами Брена — його ще можна віднести в браму.",
			"Устя крипти на півночі не пускає без мосту. Повернення у варту ставить загін біля Брена, не в ліжко: відступ має ціну кроку.",
			"Середній шлюз можна не будити й забрати ключ, який плита тримає під літерою «спить». Ключ не відчиняє — він нагадує, що героїзм тут брехня."
		]
	},
	{
		id: "ch-crypt",
		title: "Крипта дзвонаря",
		hours: 4,
		summary: "Туман, віск і три дзвони, повішені не в тому порядку, в якому їх треба бити. Дзвонар ще служить розкладу, хоча парафія вже вода.",
		beats: [
			"Устя приймає лише тих, хто зібрав міст. Квест тракту закривається на порозі, «Ім’я на дзвоні» стає справою, якщо ще не стояло.",
			"У нижній залі двоє хористів б’ють здалеку. Відьма кладе тріщину, лучниця мітить, паладін не ганяється за імлою коридорами.",
			"Напис на плиті: спершу голос води, потім те, що лишилось від вогню, наостанок верба — бо вона вміє слухати.",
			"Дзвони висять як крапля, верба, попіл. Бити треба крапля → попіл → верба. Хибний хор скидає послідовність і мовчить.",
			"Двері нави відчиняються лише після правильного хору. Поки порядок брехня — прохід лишається прірвою, не підлогою.",
			"Дзвонар: кожен третій раунд — удар колом. Нижче шістдесяти відсотків здоров’я кличе хориста. Варвар ламає броню, вампір п’є лише з крові, яку сам пролив.",
			"Скриня хору в бічній ніші. Уламок язика там не лежить: його віддає Марта, коли загін приносить тишу, а не мішок.",
			"Повернення в «Мокру вербу». Сказати, що тріщину запечатано — Брен спатиме, Марта ні. Сказати правду — марші теж чули удар. Обидва шляхи дають уламок і відчиняють схід."
		]
	},
	{
		id: "ch-road",
		title: "Дорога за дзвоном",
		hours: 5,
		summary: "Після уламка схід відповідає. Спершу Мохові низини, де хор застряг у очереті, далі Бурштинові пущі, де смола тримає мисливців у позі грому. Це дорога, яку дзвін відкрив, а не подарував.",
		beats: [
			"Прапор дороги відчиняє атлас у варті. Мохові низини збираються із зерна походу: табір, дика стежка, доручення, лігво. Те саме зерно лишається після перезавантаження.",
			"У таборі низин вартовий витирає мох із рота: хор співає імена тих, хто ще не втонув. Відповідь — згода стати їхнім.",
			"Торба в таборі продає посох очерету, серп низин, око моху, вузол і рясу. Вогнище лікує за вісім монет, як ліжко Марти, тільки дим гіркий.",
			"Дика стежка: мохові потопельці й болотний хор, пачки по двоє і троє. Мул не вбиває, але з’їдає дистанцію лучниці, якщо стати в нього навмисно.",
			"Доручення «Хор очерету» закінчується в лігві, не на стежці. Умова вартових одна: не відгукнутися, коли вода скаже твоє ім’я правильно.",
			"Лігво низин — Хор очерету. Поки бій не зачищено, край далі мовчить. Після прапора лігва відчиняються Бурштинові пущі.",
			"На межі смоли мисливиця стоїть по коліно й не скаржиться. Олень у пущі дихає — це вся єресь. Зняти його з пози можна, не підпалюючи живицю на собі.",
			"Привал за дзвоном — вузький табір на мокрій дорозі: місток, два ліхтарі, вогнище, торба й стежка назад у варту. Північ привалу стережуть потопельники, які ще пам’ятають бруківку."
		]
	},
	{
		id: "ch-lair",
		title: "Лігво без місяця",
		hours: 6,
		summary: "Далі дорога стає низкою лігв. Скляні кряжі копіюють загін, Червоні пустки марширують без рук, Берег без місяця дзвонить з-під води, Попеляста корона їсть імена. Серце глави — дзвін, якого немає на небі.",
		beats: [
			"Скляні кряжі відчиняються після смоляного оленя. Провідник дивиться повз тебе: не вір тому, хто повторив твій жест швидше.",
			"На дикій стежці скла — двійники й дзвоники дзеркал. Бій з копією, яка назвалася тобою, не виграти, якщо бити її в той самий такт.",
			"Лігво кряжів — Скляний святий. Квест «Перший з двох» закривається, коли розбито ту копію, що заговорила першою. Тоді відповідають Червоні пустки.",
			"Прапороносець без прапора просить не ставати в стрій. Клятва марширує сама. Лігво — Порушник клятви; прапор, піднятий «за своїх», приймає тебе в колону.",
			"Берег без місяця пускає після червоного лігва. Рибалка каже: приплив приходить на слух. Якщо дзвін під водою вдарить тричі — не рахуй четвертий.",
			"Пачки припливних рабів і мокрого хору тримають мілину. Глибоке тут знову стіна. Травниця сушить легені між боями, не під час удару колом.",
			"Лігво берега — Дзвін без місяця. Він б’є з-під води й не має язика: язик уже в тебе. Після тиші відчиняється Попеляста корона.",
			"У попелі сидить писар. Король мав ім’я до корони, корона його з’їла, друге пахне димом. Назвати перше — або спалити друге. Обидва шляхи ведуть у лігво.",
			"Лігво корони — Попелястий король. Коли прапор лігва сідає, Межа відлунь починає казати ім’я двічі й чекати, яке з них заберуть."
		]
	},
	{
		id: "ch-verge",
		title: "Останнє відлуння",
		hours: 4,
		summary: "Межа відлунь — край, де тріщина починається, а не закінчується. Можна запечатати язик або вдарити в дзвін навсправжки. Марші забудуть цикл або відповідатимуть живим. Герої пам’ятають в обох випадках.",
		beats: [
			"Межа відчиняється лише після лігва попелу. Тут немає вартового: голос із тріщини каже твоє ім’я двічі й чекає.",
			"Табір межі — вогнище без хазяїна, торба, яку ніхто не стереже, і скриня, що пахне воском крипти. Відпочинок коштує ті самі вісім монет.",
			"Дика стежка: уламки відлуння й хористи межі. Вони б’ють здалеку і повторюють останнє вміння, яке ти вже витратив.",
			"Доручення «Межа» не має посередника. Його закриває сам вибір у лігві, не розмова в таборі.",
			"Лігво — Перший дзвін, той самий силует дзвонаря під ім’ям краю. Коло й поклик хориста лишаються його звичкою, навіть тут.",
			"Коли лігво зачищене, тріщина говорить сама. Запечатати — марші забудуть цей цикл. Ударити навсправжки — відлуння лишаться і відповідатимуть живим.",
			"Обидва вибори дають досвід межі й епілог. Брен про це не дізнається. Марта дізнається, якщо ти ще повернешся в варту до нового циклу.",
			"«Нове відлуння» зберігає героя, стежки професій і речі. Світ починає інший цикл: шлюзи знову брешуть, дзвони знову висять не в тому порядку."
		]
	}
];
var SIDE_QUESTS = [
	{
		id: "sq-owls",
		chapter: "ch-willow",
		title: "Совине перо",
		giver: "Марта",
		text: "Сови сідають на вивіску «Мокрої верби» і мовчать, ніби теж несуть варту. Марта просить перо з сідала над крамницею: без нього плащ на гачку лишається чужим одягом.",
		reward: "Плащ верби (t-cloak), 15 монет і трохи досвіду корчми."
	},
	{
		id: "sq-gate-names",
		chapter: "ch-willow",
		title: "Імена на брамі",
		giver: "Брен",
		text: "На одвірку брами подряпані імена тих, хто пішов на тракт. Брен вдає, що не вміє читати в дощ. Якщо прочитати вголос три й не додати четвертого від себе — він віддає платню варти.",
		reward: "20 монет і відмітка, що брама пам’ятає загін."
	},
	{
		id: "sq-third-light",
		chapter: "ch-willow",
		title: "Третій вогонь",
		giver: "Вербовий вогонь",
		text: "Два вогні у дворі гаснуть охоче. Третій висить за стайнею і кличе ім’я, якого немає в партії. Його треба або переслухати до кінця, або зірвати волею, інакше квест вогнів не закриється.",
		reward: "Досвід за кожен погашений вогонь і гірка смола (ton), коли згасне третій."
	},
	{
		id: "sq-mud-boot",
		chapter: "ch-tract",
		title: "Чобіт у мулі",
		giver: "Брен",
		text: "Біля скрині в мулі, на півдні затопленого тракту, стирчить чобіт із міткою брами. Брен не просить його повертати. Якщо принести — він уперше за вечір зніме руку з меча.",
		reward: "25 монет. Чобіт лишається у Брена, не в сумці."
	},
	{
		id: "sq-sleeper",
		chapter: "ch-tract",
		title: "Середній, що спить",
		giver: "Плита шлюзів",
		text: "Плита на тракті повторює: середній шлюз спить. Можна витягти з-під літери ключ і піти, жодного разу не смикнувши важіль. Ключ не будує міст — міст будує відмова.",
		reward: "Ключ середнього шлюзу (t-sluice-key)."
	},
	{
		id: "sq-ford-names",
		chapter: "ch-tract",
		title: "Імена, що ще ходять",
		giver: "Потопельник біля лівого шлюзу",
		text: "Один потопельник у лівого важеля ще ворушить губами, не зубами. Він просить не відкривати середній і назвати його так, як записано на брамі, а не так, як співає вода.",
		reward: "30 монет і настій верби (pot), якщо ім’я збіглося з одвірком."
	},
	{
		id: "sq-bell-order",
		chapter: "ch-crypt",
		title: "Порядок, що не висить",
		giver: "Напис у крипті",
		text: "Дзвони висять крапля, верба, попіл. Напис просить інший порядок. Хто б’є як написано, а не як зручно руці, знаходить у воску ніші печатку, яку хор не встиг з’їсти.",
		reward: "Воскова печатка нави (t-nave-wax)."
	},
	{
		id: "sq-widow",
		chapter: "ch-crypt",
		title: "Ім’я вдови",
		giver: "Хористка",
		text: "У бічній ніші крипти, біля скрині хору, лишився голос жінки, яку дзвонар рахував у такт. Хор співає її ім’я на тон нижче. Поправити — значить забрати в неї вузол, який вона тримала, поки була водою.",
		reward: "Вузол очерету (t-reed-knot) і 20 монет."
	},
	{
		id: "sq-no-answer",
		chapter: "ch-road",
		title: "Не відповідай",
		giver: "Вартовий низин",
		text: "На дикій стежці Мохових низин вода каже ім’я чисто, без помилки вербових вогнів. Вартовий дає серп і одну умову: мовчати, навіть якщо кличуть героя, якого ти найняв учора.",
		reward: "Серп низин (w-sickle-reed)."
	},
	{
		id: "sq-stag",
		chapter: "ch-road",
		title: "Олень, що дихає",
		giver: "Мисливиця смоли",
		text: "У Бурштинових пущах олень стоїть у смолі й дихає. Мисливиця не просить убити його героїчно: треба зрізати живицю з ніг так, щоб поза грому нарешті зламалась. Вогонь тут лише робить статую вічною.",
		reward: "50 монет і гірка смола (ton)."
	},
	{
		id: "sq-mirror",
		chapter: "ch-lair",
		title: "Перший з двох",
		giver: "Скляний провідник",
		text: "На Скляних кряжах копія повторює жест раніше за руку. Провідник просить розбити ту, що заговорила першою, і не дивитися в уламок, де ти ще цілий.",
		reward: "Вуаль другого слуху (a-echo-veil)."
	},
	{
		id: "sq-oath",
		chapter: "ch-lair",
		title: "Не ставай у стрій",
		giver: "Прапороносець",
		text: "У Червоних пустках колона йде без рук. Прапороносець віддає платню тим, хто обійшов стрій болотом і не підняв ганчірку «за своїх», навіть коли колона кличе ім’я з брами.",
		reward: "60 монет. Прапор лишається в пилу."
	},
	{
		id: "sq-fourth",
		chapter: "ch-lair",
		title: "Не рахуй четвертий",
		giver: "Рибалка без місяця",
		text: "На Березі без місяця дзвін під водою б’є тричі й чекає, що живі дорахують. Рибалка віддає шпагу броду тим, хто після третього удару затулив вуха й не шукав місяця на небі, якого немає.",
		reward: "Шпага броду (w-rapier-sluice)."
	},
	{
		id: "sq-first-name",
		chapter: "ch-lair",
		title: "Ім’я до корони",
		giver: "Писар попелу",
		text: "У Попелястій короні писар пам’ятає ім’я короля до корони і не записує його двічі. Назвати перше в лігві — або спалити друге в жаровні табору. Писар платить за будь-який вибір, якщо ти не вигадав третього.",
		reward: "80 монет і досвід корони."
	},
	{
		id: "sq-which-name",
		chapter: "ch-verge",
		title: "Яке з двох",
		giver: "Голос тріщини",
		text: "На Межі відлунь голос каже ім’я двічі. Одне належить герою, друге — хору. Забрати своє й не поправити чуже — окрема справа від печатки язика. Тріщина слухає навіть після епілогу.",
		reward: "80 досвіду межі. Речі циклу лишаються при герої."
	}
];
var SETS = [
	{
		id: "willow",
		name: "Вербовий комплект",
		pieces: [
			"w-bow2",
			"w-bow-night",
			"t-cloak",
			"a-willow-hide"
		],
		bonus: "Лук сови або нічний лук разом із плащем верби: +1 точність. Якщо на лучниці ще й вербова шкіра, перший постріл по мітці в дощі не втрачає шкоди."
	},
	{
		id: "echo",
		name: "Комплект хору",
		pieces: [
			"w-myth",
			"t-echo",
			"a-echo-veil"
		],
		bonus: "Струна відлуння і печатка хору б’ють сильніше (+2 до сили удару). Вуаль другого слуху додає: критичний удар чути двічі, сусід хору отримує половину."
	},
	{
		id: "reed",
		name: "Комплект очерету",
		pieces: [
			"w-staff-reed",
			"w-sickle-reed",
			"w-orb-reed",
			"t-reed-knot",
			"a-reed-robe"
		],
		bonus: "Два предмети на одному тілі: +1 воля. Посох, серп або око разом із рясою низин і вузлом: лікування й прокляття в тумані не зрізає дощ."
	},
	{
		id: "sluice",
		name: "Комплект шлюзу",
		pieces: [
			"w-dagger-sluice",
			"w-rapier-sluice",
			"t-sluice-key",
			"a-sluice-leather"
		],
		bonus: "Ножі мулу або шпага броду разом із ключем сплячого шлюзу: перший ближній удар по потопельнику вважається з флангу. Шкіра шлюзу тримає цей фланг у мулі."
	},
	{
		id: "nave",
		name: "Комплект нави",
		pieces: [
			"w-axe-nave",
			"w-sword-nave",
			"w-bow-nave",
			"t-nave-wax",
			"a-nave-plate"
		],
		bonus: "Сокира нави чи меч світанку, воскова печатка й обід світанку: удар дзвона колом не знімає прикриття паладіна в той самий хід. Лук хору замість меча лишає мітку на тому, кого коло не дістало."
	}
];
function grid(w, h, fill) {
	return Array.from({ length: h }, () => fill.repeat(w));
}
function stamp(rows, x, y, w, h, ch) {
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
function edge(rows) {
	const h = rows.length;
	const w = rows[0]?.length ?? 0;
	stamp(rows, 0, 0, w, 1, "#");
	stamp(rows, 0, h - 1, w, 1, "#");
	stamp(rows, 0, 0, 1, h, "#");
	stamp(rows, w - 1, 0, 1, h, "#");
}
function trees(rows, pts) {
	for (const [x, y] of pts) stamp(rows, x, y, 1, 1, "T");
}
function buildWillow() {
	const rows = grid(72, 56, ".");
	edge(rows);
	for (const [x, y, w, h] of [
		[
			3,
			3,
			14,
			8
		],
		[
			20,
			3,
			8,
			6
		],
		[
			42,
			3,
			16,
			8
		],
		[
			3,
			14,
			10,
			6
		],
		[
			46,
			16,
			18,
			8
		],
		[
			4,
			32,
			14,
			8
		],
		[
			40,
			34,
			16,
			8
		],
		[
			22,
			40,
			12,
			6
		]
	]) stamp(rows, x, y, w, h, "H");
	stamp(rows, 30, 2, 6, 52, ".");
	stamp(rows, 2, 22, 68, 5, ".");
	stamp(rows, 8, 44, 18, 6, "\"");
	stamp(rows, 48, 44, 16, 6, "\"");
	stamp(rows, 6, 46, 6, 3, "~");
	stamp(rows, 54, 46, 5, 3, ",");
	for (let i = 0; i < 12; i++) stamp(rows, 32, 6 + i * 4, 1, 1, "F");
	trees(rows, [
		[16, 12],
		[18, 13],
		[38, 12],
		[40, 14],
		[8, 30],
		[12, 30],
		[58, 30],
		[62, 31],
		[16, 42],
		[36, 46],
		[28, 48],
		[50, 42],
		[64, 40],
		[6, 50],
		[66, 50],
		[20, 50]
	]);
	stamp(rows, 70, 24, 1, 1, ".");
	return {
		id: "willow",
		name: "Вербова варта",
		region: "grey",
		weather: "clear",
		spawns: {
			default: {
				x: 33,
				y: 24
			},
			south: {
				x: 33,
				y: 48
			},
			gate: {
				x: 64,
				y: 24
			}
		},
		rows,
		spots: [
			{
				id: "marta",
				x: 26,
				y: 20,
				label: "Марта",
				kind: "talk",
				ref: "marta"
			},
			{
				id: "rest",
				x: 24,
				y: 20,
				label: "Ліжко",
				kind: "rest"
			},
			{
				id: "shop",
				x: 26,
				y: 28,
				label: "Крамниця",
				kind: "shop"
			},
			{
				id: "board",
				x: 36,
				y: 26,
				label: "Дошка найму",
				kind: "board"
			},
			{
				id: "iva",
				x: 34,
				y: 18,
				label: "Іва",
				kind: "talk",
				ref: "iva"
			},
			{
				id: "lada",
				x: 38,
				y: 20,
				label: "Лада",
				kind: "talk",
				ref: "lada"
			},
			{
				id: "dorin",
				x: 30,
				y: 30,
				label: "Дорин",
				kind: "talk",
				ref: "dorin"
			},
			{
				id: "bren",
				x: 60,
				y: 24,
				label: "Брен",
				kind: "talk",
				ref: "bren"
			},
			{
				id: "gate",
				x: 68,
				y: 24,
				label: "Брама на тракт",
				kind: "exit",
				ref: "tract"
			},
			{
				id: "light1",
				x: 22,
				y: 24,
				label: "Вербовий вогонь",
				kind: "talk",
				ref: "light"
			},
			{
				id: "light2",
				x: 44,
				y: 24,
				label: "Вербовий вогонь",
				kind: "talk",
				ref: "light"
			},
			{
				id: "light3",
				x: 33,
				y: 36,
				label: "Третій вогонь",
				kind: "talk",
				ref: "light"
			},
			{
				id: "perch",
				x: 14,
				y: 44,
				label: "Сідало сов",
				kind: "talk",
				ref: "perch"
			},
			{
				id: "atlas",
				x: 36,
				y: 32,
				label: "Скриня маршів",
				kind: "travel"
			},
			{
				id: "yard-sign",
				x: 33,
				y: 46,
				label: "Південний двір",
				kind: "talk",
				ref: "yard"
			}
		],
		fights: [
			{
				id: "willow-guests",
				x: 48,
				y: 44,
				w: 16,
				h: 8,
				foes: [{
					id: "reed",
					n: 2,
					name: "Очеретяник"
				}, {
					id: "drowned",
					n: 2,
					name: "Нічний гість"
				}]
			},
			{
				id: "willow-mud",
				x: 8,
				y: 44,
				w: 16,
				h: 8,
				calm: true,
				foes: [{
					id: "sludge",
					n: 1,
					name: "Мул двору"
				}, {
					id: "reed",
					n: 2,
					name: "Очеретяник"
				}]
			},
			{
				id: "willow-lane",
				x: 4,
				y: 28,
				w: 10,
				h: 6,
				calm: true,
				foes: [{
					id: "reed",
					n: 3,
					name: "Вуличний очерет"
				}]
			},
			{
				id: "willow-square",
				x: 36,
				y: 23,
				w: 8,
				h: 4,
				calm: true,
				foes: [{
					id: "reed",
					n: 2,
					name: "Очеретяник"
				}, {
					id: "drowned",
					n: 1,
					name: "Нічний гість"
				}]
			}
		]
	};
}
function buildTract() {
	const rows = grid(64, 44, "\"");
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
		[6, 6],
		[10, 6],
		[14, 5],
		[48, 6],
		[54, 7],
		[8, 26],
		[12, 34],
		[50, 26],
		[56, 34],
		[20, 36],
		[36, 38],
		[18, 12],
		[40, 12]
	]);
	for (let i = 0; i < 8; i++) stamp(rows, 8 + i * 6, 17, 1, 1, "L");
	return {
		id: "tract",
		name: "Затоплений тракт",
		region: "grey",
		weather: "rain",
		spawns: {
			default: {
				x: 30,
				y: 28
			},
			south: {
				x: 8,
				y: 17
			},
			north: {
				x: 30,
				y: 6
			},
			east: {
				x: 54,
				y: 17
			}
		},
		rows,
		spots: [
			{
				id: "back-willow",
				x: 4,
				y: 17,
				label: "Стежка до варти",
				kind: "exit",
				ref: "willow"
			},
			{
				id: "to-crypt",
				x: 30,
				y: 3,
				label: "Устя крипти",
				kind: "exit",
				ref: "crypt"
			},
			{
				id: "to-fen",
				x: 58,
				y: 17,
				label: "Стежка в драговину",
				kind: "exit",
				ref: "fen"
			},
			{
				id: "fisher",
				x: 52,
				y: 20,
				label: "Рибалка",
				kind: "talk",
				ref: "fisher"
			},
			{
				id: "lever-l",
				x: 12,
				y: 14,
				label: "Лівий шлюз",
				kind: "lever",
				ref: "0"
			},
			{
				id: "lever-m",
				x: 30,
				y: 14,
				label: "Середній шлюз",
				kind: "lever",
				ref: "1"
			},
			{
				id: "lever-r",
				x: 48,
				y: 14,
				label: "Правий шлюз",
				kind: "lever",
				ref: "2"
			},
			{
				id: "slab",
				x: 30,
				y: 22,
				label: "Плита шлюзів",
				kind: "stone"
			},
			{
				id: "chest-tract",
				x: 14,
				y: 32,
				label: "Скриня в мулі",
				kind: "chest"
			},
			{
				id: "ribbon",
				x: 40,
				y: 32,
				label: "Сіра стрічка",
				kind: "talk",
				ref: "ribbon"
			},
			{
				id: "boot",
				x: 22,
				y: 36,
				label: "Чобіт у мулі",
				kind: "talk",
				ref: "boot"
			}
		],
		fights: [
			{
				id: "tract-reeds",
				x: 8,
				y: 8,
				w: 12,
				h: 6,
				calm: true,
				foes: [{
					id: "reed",
					n: 3,
					name: "Очеретяник"
				}]
			},
			{
				id: "tract-ford",
				x: 36,
				y: 24,
				w: 12,
				h: 6,
				foes: [{
					id: "drowned",
					n: 2,
					name: "Потопельник"
				}, {
					id: "sludge",
					n: 1,
					name: "Мул броду"
				}]
			},
			{
				id: "tract-south",
				x: 8,
				y: 32,
				w: 18,
				h: 8,
				foes: [
					{
						id: "drowned",
						n: 2,
						name: "Потопельник"
					},
					{
						id: "reed",
						n: 2,
						name: "Очеретяник"
					},
					{
						id: "wraith",
						n: 1,
						name: "Хорист берега"
					}
				]
			},
			{
				id: "tract-ambush",
				x: 26,
				y: 8,
				w: 10,
				h: 6,
				foes: [{
					id: "drowned",
					n: 2,
					name: "Засідка"
				}, {
					id: "wraith",
					n: 1,
					name: "Хорист"
				}]
			}
		]
	};
}
function buildCrypt() {
	const rows = grid(46, 42, "#");
	stamp(rows, 4, 34, 38, 6, ".");
	stamp(rows, 20, 6, 6, 34, ".");
	stamp(rows, 6, 6, 14, 8, ".");
	stamp(rows, 26, 6, 14, 8, ".");
	stamp(rows, 6, 18, 12, 8, "c");
	stamp(rows, 28, 18, 12, 8, "c");
	stamp(rows, 16, 18, 14, 8, ".");
	stamp(rows, 20, 4, 6, 2, "D");
	trees(rows, []);
	for (const [x, y] of [
		[8, 36],
		[36, 36],
		[22, 28],
		[22, 16]
	]) stamp(rows, x, y, 1, 1, "B");
	return {
		id: "crypt",
		name: "Крипта дзвонаря",
		region: "grey",
		weather: "fog",
		spawns: {
			default: {
				x: 22,
				y: 36
			},
			south: {
				x: 22,
				y: 36
			}
		},
		rows,
		spots: [
			{
				id: "crypt-back",
				x: 22,
				y: 38,
				label: "Назад на тракт",
				kind: "exit",
				ref: "tract"
			},
			{
				id: "ostap",
				x: 10,
				y: 22,
				label: "Остап",
				kind: "talk",
				ref: "ostap"
			},
			{
				id: "sexton",
				x: 34,
				y: 22,
				label: "Паламар",
				kind: "talk",
				ref: "sexton"
			},
			{
				id: "bell-a",
				x: 8,
				y: 8,
				label: "Крапля",
				kind: "bell",
				ref: "0"
			},
			{
				id: "bell-b",
				x: 22,
				y: 8,
				label: "Попіл",
				kind: "bell",
				ref: "2"
			},
			{
				id: "bell-c",
				x: 36,
				y: 8,
				label: "Верба",
				kind: "bell",
				ref: "1"
			},
			{
				id: "inscript",
				x: 22,
				y: 14,
				label: "Напис",
				kind: "stone"
			},
			{
				id: "to-nave",
				x: 22,
				y: 5,
				label: "Двері нави",
				kind: "exit",
				ref: "nave"
			},
			{
				id: "crypt-chest",
				x: 12,
				y: 20,
				label: "Скриня хору",
				kind: "chest"
			}
		],
		fights: [
			{
				id: "crypt-west",
				x: 6,
				y: 18,
				w: 12,
				h: 8,
				foes: [{
					id: "wraith",
					n: 2,
					name: "Хорист"
				}, {
					id: "chorister",
					n: 1,
					name: "Співець"
				}]
			},
			{
				id: "crypt-east",
				x: 28,
				y: 18,
				w: 12,
				h: 8,
				calm: true,
				foes: [{
					id: "chorister",
					n: 2,
					name: "Співець"
				}]
			},
			{
				id: "crypt-boss",
				x: 16,
				y: 6,
				w: 14,
				h: 8,
				foes: [{
					id: "bellringer",
					n: 1,
					name: "Дзвонар"
				}, {
					id: "wraith",
					n: 2,
					name: "Хорист"
				}]
			}
		]
	};
}
function buildFen() {
	const rows = grid(58, 40, "\"");
	edge(rows);
	stamp(rows, 4, 18, 50, 4, ".");
	stamp(rows, 26, 4, 5, 32, "~");
	stamp(rows, 8, 6, 12, 6, "~");
	stamp(rows, 38, 8, 12, 5, "~");
	stamp(rows, 10, 28, 16, 6, ",");
	stamp(rows, 36, 28, 14, 6, ",");
	trees(rows, [
		[6, 8],
		[16, 10],
		[44, 8],
		[50, 12],
		[8, 24],
		[48, 24],
		[20, 32],
		[40, 34],
		[14, 16],
		[42, 16]
	]);
	return {
		id: "fen",
		name: "Мохова драговина",
		region: "moss",
		weather: "fog",
		spawns: {
			default: {
				x: 6,
				y: 19
			},
			south: {
				x: 6,
				y: 19
			}
		},
		rows,
		spots: [
			{
				id: "fen-back",
				x: 3,
				y: 19,
				label: "Назад на тракт",
				kind: "exit",
				ref: "tract"
			},
			{
				id: "fen-witch",
				x: 16,
				y: 16,
				label: "Жінка з очерету",
				kind: "talk",
				ref: "reedwife"
			},
			{
				id: "fen-chest",
				x: 44,
				y: 30,
				label: "Скриня низин",
				kind: "chest"
			}
		],
		fights: [
			{
				id: "fen-reed",
				x: 10,
				y: 8,
				w: 14,
				h: 8,
				foes: [{
					id: "lurker",
					n: 2,
					name: "Драговинник"
				}, {
					id: "reed",
					n: 2,
					name: "Очеретяник"
				}]
			},
			{
				id: "fen-east",
				x: 36,
				y: 22,
				w: 14,
				h: 8,
				calm: true,
				foes: [{
					id: "sludge",
					n: 2,
					name: "Мул"
				}, {
					id: "wraith",
					n: 1,
					name: "Туманний хор"
				}]
			},
			{
				id: "fen-boss",
				x: 24,
				y: 6,
				w: 12,
				h: 8,
				foes: [{
					id: "fenmother",
					n: 1,
					name: "Мати очерету"
				}, {
					id: "lurker",
					n: 2,
					name: "Драговинник"
				}]
			}
		]
	};
}
function buildNave() {
	const rows = grid(42, 48, "#");
	stamp(rows, 16, 4, 10, 40, "c");
	stamp(rows, 6, 10, 30, 8, "c");
	stamp(rows, 6, 28, 30, 8, ".");
	stamp(rows, 8, 40, 26, 5, ".");
	for (const [x, y] of [
		[10, 32],
		[30, 32],
		[20, 16],
		[12, 12],
		[28, 12]
	]) stamp(rows, x, y, 1, 1, "B");
	return {
		id: "nave",
		name: "Дзвонова нава",
		region: "grey",
		weather: "ash",
		spawns: {
			default: {
				x: 20,
				y: 42
			},
			south: {
				x: 20,
				y: 42
			}
		},
		rows,
		spots: [
			{
				id: "nave-back",
				x: 20,
				y: 44,
				label: "Вгору в крипту",
				kind: "exit",
				ref: "crypt"
			},
			{
				id: "nave-chest",
				x: 10,
				y: 30,
				label: "Скриня нави",
				kind: "chest"
			},
			{
				id: "nave-stone",
				x: 20,
				y: 24,
				label: "Імена хору",
				kind: "talk",
				ref: "nave-names"
			}
		],
		fights: [
			{
				id: "nave-aisle",
				x: 8,
				y: 28,
				w: 26,
				h: 8,
				foes: [{
					id: "chorister",
					n: 3,
					name: "Співець нави"
				}, {
					id: "wraith",
					n: 1,
					name: "Хорист"
				}]
			},
			{
				id: "nave-loft",
				x: 8,
				y: 10,
				w: 26,
				h: 8,
				calm: true,
				foes: [{
					id: "chorister",
					n: 2,
					name: "Верхній спів"
				}]
			},
			{
				id: "nave-boss",
				x: 14,
				y: 4,
				w: 14,
				h: 8,
				foes: [{
					id: "cantor",
					n: 1,
					name: "Кантор"
				}, {
					id: "chorister",
					n: 2,
					name: "Співець"
				}]
			}
		]
	};
}
var HAND = {
	willow: buildWillow(),
	tract: buildTract(),
	crypt: buildCrypt(),
	beyond: {
		id: "beyond",
		name: "Привал за дзвоном",
		region: "moss",
		weather: "rain",
		spawns: {
			default: {
				x: 12,
				y: 13
			},
			south: {
				x: 12,
				y: 13
			},
			north: {
				x: 12,
				y: 2
			}
		},
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
			"########################"
		],
		spots: [
			{
				id: "beyond-back",
				x: 1,
				y: 14,
				label: "Стежка до варти",
				kind: "exit",
				ref: "willow"
			},
			{
				id: "beyond-rest",
				x: 10,
				y: 13,
				label: "Вогнище",
				kind: "rest"
			},
			{
				id: "beyond-shop",
				x: 18,
				y: 13,
				label: "Торба привалу",
				kind: "shop"
			},
			{
				id: "beyond-guard",
				x: 5,
				y: 8,
				label: "Вартовий низин",
				kind: "talk",
				ref: "sq-no-answer"
			},
			{
				id: "beyond-chest",
				x: 22,
				y: 14,
				label: "Скриня привалу",
				kind: "chest"
			}
		],
		fights: [{
			id: "beyond-ford",
			x: 8,
			y: 5,
			w: 8,
			h: 2,
			foes: [{
				id: "drowned",
				n: 2,
				name: "Потопельник привалу"
			}]
		}]
	},
	fen: buildFen(),
	nave: buildNave()
};
var ROAD_SKIN = {
	moss: {
		floor: "m",
		name: "Мохові низини",
		weather: "rain",
		foe: "drowned",
		boss: "wraith",
		bossName: "Хор очерету"
	},
	amber: {
		floor: "y",
		name: "Бурштинові пущі",
		weather: "clear",
		foe: "drowned",
		boss: "drowned",
		bossName: "Смоляний олень"
	},
	glass: {
		floor: "g",
		name: "Скляні кряжі",
		weather: "fog",
		foe: "wraith",
		boss: "wraith",
		bossName: "Скляний святий"
	},
	red: {
		floor: "r",
		name: "Червоні пустки",
		weather: "ash",
		foe: "drowned",
		boss: "drowned",
		bossName: "Порушник клятви"
	},
	shore: {
		floor: "s",
		name: "Берег без місяця",
		weather: "rain",
		foe: "drowned",
		boss: "wraith",
		bossName: "Дзвін без місяця"
	},
	ash: {
		floor: "a",
		name: "Попеляста корона",
		weather: "ash",
		foe: "wraith",
		boss: "drowned",
		bossName: "Попелястий король"
	},
	verge: {
		floor: "e",
		name: "Межа відлунь",
		weather: "fog",
		foe: "wraith",
		boss: "bellringer",
		bossName: "Перший дзвін"
	}
};
function storyRows(floor) {
	return [
		"######################",
		"#T..~~~~......~~~~..T#",
		"#....................#",
		"#..HH..........HH....#",
		"#..HH....F.....HH....#",
		"#L..................S#",
		"#........==..........#",
		"#....................#",
		"#~~~~~..........~~~~~#",
		"#~~~~~..HH......~~~~~#",
		"#........HH..........#",
		"#........==..........#",
		"#..TT..........TT....#",
		"#....................#",
		"#E.................CX#",
		"######################"
	].map((row) => row.replaceAll(".", floor));
}
function storyRoad(region) {
	const skin = ROAD_SKIN[region];
	if (!skin) return null;
	const id = `${region}-road`;
	return {
		id,
		name: skin.name,
		region,
		weather: skin.weather,
		spawns: {
			default: {
				x: 3,
				y: 13
			},
			south: {
				x: 3,
				y: 13
			},
			north: {
				x: 11,
				y: 2
			}
		},
		rows: storyRows(skin.floor),
		spots: [
			{
				id: `${id}-back`,
				x: 1,
				y: 14,
				label: "Назад у варту",
				kind: "exit",
				ref: "back"
			},
			{
				id: `${id}-on`,
				x: 20,
				y: 14,
				label: "Далі",
				kind: "exit",
				ref: "leave"
			},
			{
				id: `${id}-rest`,
				x: 9,
				y: 4,
				label: "Вогнище",
				kind: "rest"
			},
			{
				id: `${id}-shop`,
				x: 20,
				y: 5,
				label: "Торба краю",
				kind: "shop"
			},
			{
				id: `${id}-talk`,
				x: 1,
				y: 5,
				label: "Хранитель краю",
				kind: "talk",
				ref: `road-${region}`
			},
			{
				id: `${id}-trace`,
				x: 3,
				y: 2,
				label: "Слід",
				kind: "talk",
				ref: `trace-${region}`
			},
			{
				id: `${id}-chest`,
				x: 19,
				y: 14,
				label: "Скриня краю",
				kind: "chest"
			}
		],
		fights: [
			{
				id: `${id}-pack`,
				x: 7,
				y: 7,
				w: 8,
				h: 3,
				foes: [{
					id: skin.foe,
					n: 2,
					name: packName(region, 0)
				}]
			},
			{
				id: `${id}-north`,
				x: 6,
				y: 1,
				w: 8,
				h: 2,
				foes: [{
					id: skin.foe,
					n: 2,
					name: packName(region, 1)
				}]
			},
			{
				id: `${id}-boss`,
				x: 8,
				y: 11,
				w: 6,
				h: 3,
				foes: [{
					id: skin.boss,
					n: 1,
					name: skin.bossName
				}]
			}
		]
	};
}
function inMap(m, x, y) {
	return y >= 0 && x >= 0 && y < m.rows.length && x < (m.rows[0]?.length ?? 0);
}
/** Terrain after puzzle flags. `x` is the broken bridge, `D` the nave door. */
function tileChar(m, x, y, flags) {
	if (!inMap(m, x, y)) return "#";
	let ch = m.rows[y][x];
	if (ch === "x" && flags.bridge) ch = "=";
	if (ch === "D" && flags.bells) ch = "c";
	return ch;
}
function cellOf(ch) {
	switch (ch) {
		case "#":
		case "H": return {
			ground: ch === "H" ? 0 : 9,
			solid: true,
			slow: false,
			kind: ch === "H" ? "house" : "wall"
		};
		case "T": return {
			ground: 2,
			solid: true,
			slow: false,
			kind: "tree"
		};
		case "W": return {
			ground: 5,
			solid: true,
			slow: false,
			kind: "deep"
		};
		case "~": return {
			ground: 4,
			solid: false,
			slow: true,
			kind: "shallow"
		};
		case "x":
		case "D": return {
			ground: ch === "D" ? 8 : 5,
			solid: true,
			slow: false,
			kind: ch === "D" ? "door" : "gap"
		};
		case ",": return {
			ground: 1,
			solid: false,
			slow: true,
			kind: "mud"
		};
		case "\"": return {
			ground: 2,
			solid: false,
			slow: false,
			kind: "grass"
		};
		case "m": return {
			ground: 3,
			solid: false,
			slow: false,
			kind: "moss"
		};
		case "=": return {
			ground: 6,
			solid: false,
			slow: false,
			kind: "bridge"
		};
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
		case "+": return {
			ground: ch === "c" || "NBIC".includes(ch) ? 8 : 0,
			solid: false,
			slow: false,
			kind: "floor"
		};
		case "F": return {
			ground: 0,
			solid: false,
			slow: false,
			kind: "fire"
		};
		case "a": return {
			ground: 10,
			solid: false,
			slow: false,
			kind: "ash"
		};
		case "r": return {
			ground: 11,
			solid: false,
			slow: false,
			kind: "dust"
		};
		case "y": return {
			ground: 12,
			solid: false,
			slow: false,
			kind: "amber"
		};
		case "g": return {
			ground: 13,
			solid: false,
			slow: false,
			kind: "glass"
		};
		case "s": return {
			ground: 14,
			solid: false,
			slow: false,
			kind: "sand"
		};
		case "e": return {
			ground: 15,
			solid: false,
			slow: false,
			kind: "echo"
		};
		default: return {
			ground: 0,
			solid: false,
			slow: false,
			kind: "floor"
		};
	}
}
function blocked(m, x, y, flags) {
	return cellOf(tileChar(m, x, y, flags)).solid;
}
var BIO = {
	moss: {
		floor: "\"",
		alt: "m",
		water: "~",
		weather: "rain"
	},
	amber: {
		floor: "y",
		alt: "\"",
		water: ",",
		weather: "clear"
	},
	glass: {
		floor: "g",
		alt: "e",
		water: "W",
		weather: "fog"
	},
	red: {
		floor: "r",
		alt: "a",
		water: ",",
		weather: "ash"
	},
	shore: {
		floor: "s",
		alt: ",",
		water: "~",
		weather: "rain"
	},
	ash: {
		floor: "a",
		alt: "r",
		water: ",",
		weather: "ash"
	},
	verge: {
		floor: "e",
		alt: "c",
		water: "W",
		weather: "fog"
	}
};
function mulberry(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
	return h >>> 0;
}
function generateSite(opts) {
	const bio = BIO[opts.biome] ?? BIO.moss;
	const rnd = mulberry((opts.seed ^ hash(opts.id)) >>> 0);
	const W = 34;
	const H = 22;
	const g = Array.from({ length: H }, () => Array.from({ length: W }, () => rnd() < .18 ? bio.alt : bio.floor));
	for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (x === 0 || y === 0 || x === 33 || y === 21) g[y][x] = "#";
	const carve = (x, y) => {
		if (y > 0 && x > 0 && y < 21 && x < 33) g[y][x] = bio.floor;
	};
	let x = 4 + Math.floor(rnd() * 6);
	let y = 19;
	const sx = x;
	const sy = y;
	carve(x, y);
	const path = [{
		x,
		y
	}];
	for (let n = 0; n < 90; n++) {
		const dir = rnd();
		if (dir < .45) y -= 1;
		else if (dir < .65) x += rnd() < .5 ? -1 : 1;
		else if (dir < .8) x += 1;
		else x -= 1;
		x = Math.max(2, Math.min(31, x));
		y = Math.max(2, Math.min(19, y));
		carve(x, y);
		carve(x + 1, y);
		path.push({
			x,
			y
		});
		if (y < 3) break;
	}
	const ex = x;
	const ey = y;
	for (let i = 0; i < 10; i++) {
		const tx = 2 + Math.floor(rnd() * 30);
		const ty = 2 + Math.floor(rnd() * 18);
		if (rnd() < .5) g[ty][tx] = "T";
		else if (rnd() < .4) g[ty][tx] = bio.water === "W" ? "~" : bio.water;
	}
	if (opts.kind === "camp") {
		g[sy][sx] = "F";
		g[sy - 1][sx] = bio.floor;
	}
	const fights = [];
	const spots = [];
	const steps = path.filter((_, i) => i % 7 === 3);
	const packs = opts.kind === "camp" ? 1 : opts.kind === "job" ? 1 : opts.kind === "lair" ? 2 : 3;
	const foeA = opts.biome === "glass" || opts.biome === "verge" || opts.biome === "shore" ? "wraith" : "drowned";
	const foeB = foeA === "wraith" ? "drowned" : "wraith";
	for (let i = 0; i < packs && i < steps.length; i++) {
		const p = steps[i];
		const boss = opts.kind === "lair" && i === packs - 1;
		fights.push({
			id: `${opts.id}-f${i}`,
			x: p.x - 1,
			y: p.y - 1,
			w: 4,
			h: 3,
			foes: boss ? [{
				id: opts.biome === "verge" ? "bellringer" : foeA,
				n: 1,
				name: bossName(opts.region)
			}] : [{
				id: i % 2 ? foeB : foeA,
				n: 2 + (opts.tier > 3 ? 1 : 0),
				name: packName(opts.biome, i)
			}]
		});
	}
	spots.push({
		id: `${opts.id}-exit`,
		x: ex,
		y: ey,
		label: "Далі",
		kind: "exit",
		ref: "leave"
	});
	spots.push({
		id: `${opts.id}-back`,
		x: sx,
		y: sy,
		label: "Назад",
		kind: "exit",
		ref: "back"
	});
	if (opts.kind === "camp") {
		spots.push({
			id: `${opts.id}-npc`,
			x: sx + 2,
			y: sy,
			label: "Хранитель",
			kind: "talk",
			ref: `road-${opts.region}`
		});
		spots.push({
			id: `${opts.id}-rest`,
			x: sx,
			y: sy - 1,
			label: "Вогнище",
			kind: "rest"
		});
		spots.push({
			id: `${opts.id}-shop`,
			x: sx - 2,
			y: sy,
			label: "Торба",
			kind: "shop"
		});
	}
	spots.push({
		id: `${opts.id}-chest`,
		x: Math.max(2, sx - 3),
		y: Math.max(2, sy - 2),
		label: "Скриня",
		kind: "chest"
	});
	return {
		id: opts.id,
		name: opts.name,
		region: opts.region,
		weather: bio.weather,
		rows: g.map((r) => r.join("")),
		spawns: {
			default: {
				x: sx,
				y: sy
			},
			back: {
				x: sx,
				y: sy
			},
			exit: {
				x: ex,
				y: ey
			}
		},
		spots,
		fights
	};
}
function bossName(region) {
	return {
		moss: "Хор очерету",
		amber: "Смоляний олень",
		glass: "Скляний святий",
		red: "Порушник клятви",
		shore: "Дзвін без місяця",
		ash: "Попелястий король",
		verge: "Перший дзвін"
	}[region] ?? "Відлуння";
}
function packName(biome, i) {
	return ({
		moss: ["Моховий потопелець", "Болотний хор"],
		amber: ["Смоляний вартовий", "Бурштинова тінь"],
		glass: ["Скляний двійник", "Дзвоник дзеркал"],
		red: ["Прапороносець", "Попіл клятви"],
		shore: ["Припливний раб", "Мокрий хор"],
		ash: ["Попелястий лицар", "Іскра корони"],
		verge: ["Уламок відлуння", "Хорист межі"]
	}[biome] ?? ["Відлуння", "Тінь"])[i % 2];
}
var KEY = "echo-save-v1";
var HC = "echo-hardcore-v1";
var keys = /* @__PURE__ */ new Set();
var G = {
	rev: 0,
	mode: "title",
	hardcore: false,
	seed: 1,
	epitaph: "",
	map: HAND.willow,
	x: 0,
	y: 0,
	facing: 0,
	yaw: 0,
	viewYaw: 0,
	zoom: 1,
	viewZoom: 1,
	speed: 0,
	party: [],
	flags: {},
	quests: {},
	cleared: [],
	opened: [],
	levers: [
		0,
		0,
		0
	],
	bells: [],
	sites: {},
	siteKind: {},
	log: [],
	stick: {
		x: 0,
		y: 0
	},
	path: [],
	talkId: null,
	talkExtra: "",
	reward: null,
	units: [],
	round: 1,
	phase: "plan",
	planner: 0,
	fightId: "",
	fightBack: {
		x: 0,
		y: 0
	},
	shots: [],
	floats: [],
	anim: {},
	time: 0,
	grace: 0,
	since: 0,
	aim: null,
	epilogue: "",
	reduced: false,
	queue: [],
	beat: 0,
	walk: 0,
	moving: false,
	lastRoll: "",
	mobs: [],
	folk: [],
	pending: "",
	back: {},
	atkCd: 0,
	skillCd: {},
	swing: 0,
	atkHold: false,
	target: "",
	hunt: false,
	uiAcc: 0
};
var listeners = /* @__PURE__ */ new Set();
function subscribe(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function bump() {
	G.rev++;
	for (const fn of listeners) fn();
}
function log(s) {
	G.log.unshift(s);
	if (G.log.length > 40) G.log.length = 40;
}
function leader() {
	return G.party[0] ?? null;
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function xpNeed(level) {
	return 36 + level * 22;
}
function blankStats() {
	return {
		str: 8,
		dex: 8,
		end: 8,
		int: 8,
		wil: 8,
		per: 8
	};
}
function recalc(h) {
	h.maxHp = HEROES[h.hero].hp + h.stats.end * 3 + (h.level - 1) * 2;
	h.maxFocus = 6 + Math.floor(h.stats.wil / 2);
	h.hp = Math.min(h.hp, h.maxHp);
	h.focus = Math.min(h.focus, h.maxFocus);
}
function pathMods(h) {
	const m = {
		dmg: 0,
		heal: 0,
		crit: 0,
		acc: 0,
		armor: 0,
		leech: 0,
		aoe: 0,
		power: 0
	};
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
function setBonus(h) {
	const ids = [
		h.weapon,
		h.armor,
		h.trinket
	];
	let acc = 0;
	let power = 0;
	const has = (a, b) => ids.includes(a) && ids.includes(b);
	if (has("w-bow2", "t-cloak") || has("w-bow-night", "t-cloak")) acc += 1;
	if (has("w-myth", "t-echo")) power += 2;
	const worn = (setId) => {
		const set = SETS.find((s) => s.id === setId);
		return set ? set.pieces.filter((p) => ids.includes(p)).length : 0;
	};
	if (worn("reed") >= 2) acc += 1;
	if (worn("sluice") >= 2) power += 1;
	if (worn("nave") >= 2) power += 1;
	return {
		acc,
		power
	};
}
function gearMods(h) {
	const w = itemById(h.weapon);
	const a = itemById(h.armor);
	const t = itemById(h.trinket);
	const set = setBonus(h);
	const pm = pathMods(h);
	let armor = a?.armorN ?? 0;
	let power = (w?.power ?? 0) + (t?.power ?? 0) + set.power;
	let acc = (w?.acc ?? 0) + (t?.acc ?? 0) + set.acc;
	const stats = { ...h.stats };
	for (const it of [
		w,
		a,
		t
	]) {
		if (!it?.stat) continue;
		for (const k of STATS) stats[k] += it.stat[k] ?? 0;
	}
	armor += pm.armor + Math.floor(stats.end / 6);
	acc += pm.acc;
	power += Math.round(pm.power / 2);
	return {
		armor,
		power,
		acc,
		stats,
		pm
	};
}
function skillById(h, id) {
	const base = SKILLS.find((s) => s.id === id);
	if (base) return base;
	if (!h || !id.startsWith("cap-")) return void 0;
	const node = PATHS.find((p) => `cap-${p.id}` === id);
	if (!node) return void 0;
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
		leech: node.leech ? node.leech / 100 : void 0,
		cap: true
	};
}
function makeHero(hero, merc, level) {
	const def = HEROES[hero];
	const stats = blankStats();
	for (const k of def.rec) stats[k] += 1;
	const known = skillsFor(hero).map((s) => s.id);
	const h = {
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
		bag: [{
			id: "pot",
			n: 3
		}, {
			id: "ton",
			n: 1
		}],
		known,
		loadout: known.slice(0, 4),
		quick: ["pot", "ton"],
		paths: [],
		merc,
		gold: merc ? 0 : 24
	};
	recalc(h);
	h.hp = h.maxHp;
	h.focus = h.maxFocus;
	return h;
}
function addItem(h, id, n) {
	const it = itemById(id);
	if (!it) return;
	if (it.slot !== "consumable" && h.bag.some((b) => b.id === id)) return;
	const row = h.bag.find((b) => b.id === id);
	if (row) row.n += n;
	else h.bag.push({
		id,
		n
	});
}
function takeItem(h, id) {
	const row = h.bag.find((b) => b.id === id);
	if (!row || row.n <= 0) return false;
	row.n -= 1;
	if (row.n <= 0) h.bag = h.bag.filter((b) => b.n > 0);
	return true;
}
function grantXp(h, n) {
	if (n <= 0 || h.level >= 85) return;
	h.xp += n;
	let up = false;
	while (h.level < 85 && h.xp >= xpNeed(h.level)) {
		h.xp -= xpNeed(h.level);
		h.level += 1;
		h.unspent += 5;
		up = true;
	}
	if (up) {
		recalc(h);
		h.hp = h.maxHp;
		h.focus = h.maxFocus;
		log(`${h.name} досягає ${h.level} рівня.`);
	}
}
function nextGate(h) {
	for (const at of [
		20,
		40,
		60,
		85
	]) if (h.level >= at && !h.paths.some((id) => PATHS.find((p) => p.id === id && p.at === at))) return at;
	return null;
}
function gateParent(h, at) {
	if (at === 20) return null;
	const prev = at === 40 ? 20 : at === 60 ? 40 : 60;
	return h.paths.find((id) => PATHS.find((p) => p.id === id && p.at === prev)) ?? null;
}
function setQuest(spec) {
	const [id, st] = spec.split(":");
	if (!id || st == null) return;
	const n = Number(st);
	const cur = G.quests[id] ?? 0;
	if (cur === 999) return;
	if (n === 999 || n > cur) G.quests[id] = n;
}
function applyFlag(f) {
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
function blob() {
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
		log: G.log.slice(0, 20)
	};
}
function persist() {
	if (G.mode === "combat" || G.mode === "title") return;
	if (typeof localStorage === "undefined") return;
	try {
		const raw = JSON.stringify(blob());
		const k = G.hardcore ? HC : KEY;
		localStorage.setItem(k, raw);
		localStorage.setItem(`${k}-bak`, raw);
	} catch {}
}
function saveExists(hard) {
	if (typeof localStorage === "undefined") return false;
	const k = hard ? HC : KEY;
	return !!(localStorage.getItem(k) || localStorage.getItem(`${k}-bak`));
}
function mapById(id) {
	return HAND[id] ?? G.sites[id] ?? null;
}
function folkSprite(s) {
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
		const x = (s.x + .5) * 48;
		const y = (s.y + .92) * 48;
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
			wait: 1 + s.x % 4
		});
	}
}
function place(map, spawn) {
	G.map = map;
	const s = map.spawns[spawn] ?? map.spawns.default ?? {
		x: 2,
		y: 2
	};
	G.x = (s.x + .5) * 48;
	G.y = (s.y + .5) * 48;
	G.path = [];
	G.pending = "";
	G.mobs = [];
	G.grace = .7;
	G.mode = "explore";
	spawnFolk();
	spawnPacks();
}
function beginGame(hero, hardcore) {
	G.hardcore = hardcore;
	G.seed = (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
	G.epitaph = "";
	G.party = [makeHero(hero, false, 1)];
	G.flags = {};
	G.quests = { "q-road": 0 };
	G.cleared = [];
	G.opened = [];
	G.levers = [
		0,
		0,
		0
	];
	G.bells = [];
	G.sites = {};
	G.siteKind = {};
	G.log = [];
	G.units = [];
	G.epilogue = "";
	G.facing = 0;
	place(HAND.willow, "default");
	log("Вербова варта. Дощ не питає імен.");
	persist();
	bump();
}
function loadGame(hard) {
	if (typeof localStorage === "undefined") return false;
	const k = hard ? HC : KEY;
	const raw = localStorage.getItem(k) || localStorage.getItem(`${k}-bak`);
	if (!raw) return false;
	try {
		const data = JSON.parse(raw);
		if (data.v !== 1 || !data.party?.length) return false;
		G.hardcore = !!data.hardcore;
		G.seed = data.seed >>> 0;
		G.flags = data.flags ?? {};
		G.quests = data.quests ?? {};
		G.cleared = data.cleared ?? [];
		G.opened = data.opened ?? [];
		G.levers = data.levers?.length === 3 ? data.levers : [
			0,
			0,
			0
		];
		G.bells = data.bells ?? [];
		G.sites = data.sites ?? {};
		G.siteKind = data.siteKind ?? {};
		G.party = data.party;
		G.log = data.log ?? [];
		G.units = [];
		G.epilogue = "";
		G.map = mapById(data.mapId) ?? HAND.willow;
		G.x = data.x;
		G.y = data.y;
		G.facing = data.facing ?? 0;
		G.path = [];
		const here = {
			x: Math.floor(G.x / 48),
			y: Math.floor(G.y / 48)
		};
		if (blocked(G.map, here.x, here.y, G.flags)) {
			const s = G.map.spawns.default ?? {
				x: 2,
				y: 2
			};
			G.x = (s.x + .5) * 48;
			G.y = (s.y + .5) * 48;
		}
		G.grace = .7;
		G.mode = "explore";
		spawnFolk();
		spawnPacks();
		bump();
		return true;
	} catch {
		return false;
	}
}
function newEcho() {
	const party = G.party;
	const hard = G.hardcore;
	G.seed = (G.seed + 997 ^ Math.floor(Math.random() * 1e9)) >>> 0;
	G.hardcore = hard;
	G.party = party;
	G.flags = {};
	G.quests = { "q-road": 0 };
	G.cleared = [];
	G.opened = [];
	G.levers = [
		0,
		0,
		0
	];
	G.bells = [];
	G.sites = {};
	G.siteKind = {};
	G.epilogue = "";
	place(HAND.willow, "default");
	log("Новий цикл. Герої пам'ятають. Світ — ні.");
	persist();
	bump();
}
function tileOf(px, py) {
	return {
		x: Math.floor(px / 48),
		y: Math.floor(py / 48)
	};
}
function canWalk(x, y) {
	return !blocked(G.map, x, y, G.flags);
}
function route(tx, ty) {
	const s = tileOf(G.x, G.y);
	if (s.x === tx && s.y === ty) return [];
	const w = G.map.rows[0]?.length ?? 0;
	const h = G.map.rows.length;
	const key = (x, y) => y * w + x;
	const q = [s];
	const prev = /* @__PURE__ */ new Map();
	prev.set(key(s.x, s.y), -1);
	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	];
	while (q.length) {
		const c = q.shift();
		if (c.x === tx && c.y === ty) break;
		for (const [dx, dy] of dirs) {
			const nx = c.x + dx;
			const ny = c.y + dy;
			if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
			const k = key(nx, ny);
			if (prev.has(k) || !canWalk(nx, ny)) continue;
			prev.set(k, key(c.x, c.y));
			q.push({
				x: nx,
				y: ny
			});
		}
	}
	if (!prev.has(key(tx, ty))) return [];
	const out = [];
	let cur = key(tx, ty);
	while (cur !== -1 && cur !== key(s.x, s.y)) {
		out.push({
			x: cur % w,
			y: Math.floor(cur / w)
		});
		cur = prev.get(cur) ?? -1;
		if (out.length > 80) break;
	}
	out.reverse();
	return out;
}
function questHot(ref) {
	const ids = ref ? {
		marta: [
			"q-road",
			"q-back",
			"q-lights"
		],
		iva: ["sq-ribbon"],
		lada: ["sq-tray"],
		ostap: ["sq-novice"],
		dorin: ["sq-tuner"],
		bren: ["sq-mud-boot"],
		fisher: ["q-fen"],
		reedwife: ["q-fen"],
		sexton: ["q-nave"]
	}[ref] : void 0;
	if (!ids) return false;
	return ids.some((id) => (G.quests[id] ?? 0) < 999);
}
function nearbySpot() {
	const t = tileOf(G.x, G.y);
	let best = null;
	let bd = 99;
	for (const s of G.map.spots) {
		const d = Math.max(Math.abs(s.x - t.x), Math.abs(s.y - t.y));
		if (d <= 2 && d < bd) {
			best = s;
			bd = d;
		}
	}
	return best;
}
function talkFor(spot) {
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
var EXTRA = {
	"light-spent": {
		speaker: "Попіл",
		text: "Тут уже тихо. Ім'я згоріло до кінця.",
		choices: [{
			label: "Далі.",
			end: true
		}]
	},
	yard: {
		speaker: "Дошка двору",
		text: "Південний двір варти. Гості повертаються, коли тиша їм набридає. Тут можна стати сильнішим, не йдучи в крипту.",
		choices: [{
			label: "Зрозумів.",
			end: true
		}]
	},
	fisher: {
		speaker: "Рибалка",
		text: "Я ловлю те, що ще має зябра. На сході драговина вже говорить людськими іменами. Мати очерету сидить у тумані. Якщо замовкне — принеси мені тишу, не її голову.",
		choices: [{
			label: "Піду на схід.",
			quest: "q-fen:1",
			end: true
		}]
	},
	reedwife: {
		speaker: "Жінка з очерету",
		text: "Не ріж стебло, яке ще тримає дорогу. Мати сидить північніше, там де вода не віддзеркалює. Вона договорить твоє ім'я, якщо даси їй час.",
		choices: [{
			label: "Не дам.",
			end: true
		}]
	},
	sexton: {
		speaker: "Паламар",
		text: "Я тримаю ключі, яких немає. Порядок дзвонів — крапля, попіл, верба. Після нього двері нави самі знають дорогу вниз. Кантор ще співає тих, хто вийшов з варти.",
		choices: [{
			label: "Запам'ятаю.",
			quest: "q-nave:1",
			end: true
		}]
	},
	"nave-names": {
		speaker: "Імена хору",
		text: "Тут вирізані імена, які варта більше не кличе вголос. Кантор додає нове, коли хтось нагорі каже «я повернусь».",
		choices: [{
			label: "Не називатимусь.",
			xp: 12,
			end: true
		}]
	},
	stranger: {
		speaker: "Перехожий",
		text: "Я не Брен і не повторюю його варту. Якщо шукаєш справу — на дошці найму або в Марти біля печі.",
		choices: [{
			label: "Добре.",
			end: true
		}]
	}
};
function currentNode() {
	if (!G.talkId) return null;
	if (G.talkId.startsWith("rumor-")) return rumorNode(G.talkId.slice(6));
	return TALK[G.talkId] ?? EXTRA[G.talkId] ?? null;
}
function interact() {
	if (G.mode !== "explore") return;
	const spot = nearbySpot();
	if (!spot) {
		log("Поруч нічого, що просить рук.");
		bump();
		return;
	}
	openSpot(spot);
}
function openSpot(spot) {
	if (G.mode !== "explore") return;
	if (spot.ref) G.flags[`heard-${spot.ref}`] = 1;
	if (spot.kind === "talk" || spot.kind === "stone") {
		if (spot.ref === "light" && !G.opened.includes(spot.id)) G.opened.push(spot.id);
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
		if (!canWalk(t.x, t.y)) G.y += 48;
		persist();
		bump();
		return;
	}
	if (spot.kind === "bell") {
		const i = Number(spot.ref ?? 0);
		G.bells.push(i);
		log(`Дзвін: ${[
			"крапля",
			"верба",
			"попіл"
		][i] ?? i}.`);
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
			if (tier >= 2 && Math.random() < .45) addItem(L, tier >= 5 ? "a-plate2" : "t-cloak", 1);
			log(`У скрині ${gold} монет і настій.`);
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
function useExit(spot) {
	const ref = spot.ref ?? "";
	if (ref === "tract") {
		const spawn = G.map.id === "willow" ? "south" : G.map.id === "fen" ? "east" : "north";
		place(HAND.tract, spawn);
		persist();
		bump();
		return;
	}
	if (ref === "willow") {
		place(HAND.willow, "gate");
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
		place(HAND.crypt, "south");
		setQuest("q-road:999");
		if ((G.quests["q-bell"] ?? 0) < 1) setQuest("q-bell:1");
		persist();
		bump();
		return;
	}
	if (ref === "back" || ref === "willow") {
		place(HAND.willow, ref === "willow" ? "gate" : "default");
		persist();
		bump();
		return;
	}
	if (ref === "fen") {
		place(HAND.fen, "default");
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
		place(HAND.nave, "default");
		if ((G.quests["q-nave"] ?? 0) < 1) setQuest("q-nave:1");
		persist();
		bump();
		return;
	}
	if (ref === "beyond") {
		place(HAND.beyond, "default");
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
		else place(HAND.willow, "default");
		persist();
		bump();
	}
}
function choose(i) {
	const c = currentNode()?.choices?.[i];
	if (!c) {
		G.mode = G.epilogue ? "epilogue" : "explore";
		G.talkId = null;
		bump();
		return;
	}
	applyChoice(c);
}
function applyChoice(c) {
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
		G.talkExtra = `${{
			str: "Сила",
			dex: "Спритність",
			int: "Розум",
			per: "Увага",
			wil: "Воля"
		}[c.check.stat] ?? "Риса"} ${have}. Треба ${c.check.dc}. ${ok ? "Вистачило." : "Замало."}`;
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
function rest() {
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
function goBeyond() {
	if (!G.flags.bells && !G.cleared.includes("crypt-boss")) {
		log("Стежка за дзвоном відкриється, коли дзвони крипти стихнуть.");
		bump();
		return;
	}
	place(HAND.beyond, "default");
	persist();
	bump();
}
function regionUnlocked(id) {
	const order = REGIONS.map((r) => r.id);
	const i = order.indexOf(id);
	if (i <= 0) return true;
	const prev = order[i - 1] ?? "grey";
	if (prev === "grey") return !!G.flags["road-open"];
	return !!G.flags[`lair-${prev}`];
}
function travelTo(regionId, kind) {
	if (!regionUnlocked(regionId)) {
		log("Цей край ще не відповідає.");
		bump();
		return;
	}
	if (regionId === "grey") {
		place(HAND.willow, "default");
		persist();
		bump();
		return;
	}
	const region = REGIONS.find((r) => r.id === regionId);
	if (!region) return;
	const id = `${regionId}-${kind}`;
	if (!G.sites[id]) {
		const names = {
			camp: "Табір",
			wild: "Дика стежка",
			lair: "Лігво",
			job: "Доручення"
		};
		G.sites[id] = generateSite({
			id,
			name: `${region.name}: ${names[kind]}`,
			region: regionId,
			biome: region.biome,
			tier: region.tier,
			seed: G.seed,
			kind
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
function travelStory(regionId) {
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
function closePanel() {
	if (G.mode === "title" || G.mode === "combat") return;
	if (G.mode === "epilogue") return;
	G.mode = G.party.find((p) => nextGate(p)) && G.mode === "path" ? "path" : "explore";
	if (G.mode !== "path") G.aim = null;
	persist();
	bump();
}
function openPanel(mode) {
	if (G.mode === "combat" || G.mode === "title") return;
	G.mode = mode;
	bump();
}
function closeReward() {
	G.reward = null;
	G.mode = G.party.find((p) => nextGate(p)) ? "path" : "explore";
	persist();
	bump();
}
function alloc(heroUid, stat) {
	const h = G.party.find((p) => p.uid === heroUid);
	if (!h || h.unspent <= 0) return;
	h.stats[stat] += 1;
	h.unspent -= 1;
	recalc(h);
	bump();
}
function allocRec(heroUid) {
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
function pickPath(id) {
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
function equip(heroUid, itemId) {
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
function setLoadout(heroUid, skillId) {
	const h = G.party.find((p) => p.uid === heroUid);
	if (!h || !h.known.includes(skillId)) return;
	if (h.loadout.includes(skillId)) h.loadout = h.loadout.filter((s) => s !== skillId);
	else if (h.loadout.length < 4) h.loadout.push(skillId);
	else h.loadout = [...h.loadout.slice(1), skillId];
	bump();
}
function setQuick(heroUid, slot, itemId) {
	const h = G.party.find((p) => p.uid === heroUid);
	if (!h) return;
	h.quick[slot] = itemId;
	bump();
}
function giveItem(fromUid, toUid, itemId) {
	const a = G.party.find((p) => p.uid === fromUid);
	const b = G.party.find((p) => p.uid === toUid);
	if (!a || !b || a === b || !takeItem(a, itemId)) return;
	addItem(b, itemId, 1);
	log(`${a.name} передає ${itemById(itemId)?.name ?? "річ"} → ${b.name}.`);
	persist();
	bump();
}
function drink(heroUid, itemId) {
	if (G.mode === "combat") return;
	const h = G.party.find((p) => p.uid === heroUid);
	const it = itemById(itemId);
	if (!h || !it || it.slot !== "consumable" || !takeItem(h, itemId)) return;
	if (it.heal) h.hp = Math.min(h.maxHp, h.hp + it.heal);
	if (it.focus) h.focus = Math.min(h.maxFocus, h.focus + it.focus);
	persist();
	bump();
}
function sell(itemId) {
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
function buy(itemId) {
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
function hire(hero) {
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
function dismiss(heroUid) {
	const h = G.party.find((p) => p.uid === heroUid);
	if (!h?.merc) return;
	G.party = G.party.filter((p) => p.uid !== heroUid);
	log(`${h.name} лишається у варті.`);
	persist();
	bump();
}
function shopItems() {
	return ITEMS.filter((i) => i.price > 0);
}
function questView() {
	return QUESTS.map((q) => {
		const st = G.quests[q.id];
		if (st == null && q.region !== "grey") return null;
		const done = st === 999;
		const idx = done ? q.stages.length - 1 : Math.max(0, Math.min(q.stages.length - 1, st ?? 0));
		return {
			id: q.id,
			name: q.name,
			text: done ? "Завершено." : q.stages[idx] ?? "",
			done,
			region: q.region
		};
	}).filter((x) => !!x);
}
function bellLabel() {
	const names = [
		"крапля",
		"верба",
		"попіл"
	];
	return G.bells.map((n) => names[n] ?? "?").join(" → ");
}
function cheb(ax, ay, bx, by) {
	return Math.max(Math.abs(ax - bx), Math.abs(ay - by));
}
function rollDie(n) {
	if (n <= 0) return 0;
	return 1 + Math.floor(Math.random() * n);
}
function living(side) {
	return G.units.filter((u) => u.hp > 0 && (!side || u.side === side));
}
function unitBy(id) {
	return G.units.find((u) => u.uid === id);
}
function currentPlanner() {
	return living("ally")[G.planner] ?? null;
}
function occupied(x, y, ignore) {
	return G.units.some((u) => u.hp > 0 && u.uid !== ignore && u.x === x && u.y === y);
}
function reachable(u) {
	const out = [{
		x: u.x,
		y: u.y
	}];
	const seen = /* @__PURE__ */ new Set([`${u.x},${u.y}`]);
	let edge = [{
		x: u.x,
		y: u.y,
		d: 0
	}];
	const dirs = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	];
	while (edge.length) {
		const nxt = [];
		for (const c of edge) {
			if (c.d >= u.move) continue;
			for (const [dx, dy] of dirs) {
				const x = c.x + dx;
				const y = c.y + dy;
				const k = `${x},${y}`;
				if (seen.has(k) || blocked(G.map, x, y, G.flags) || occupied(x, y, u.uid)) continue;
				seen.add(k);
				out.push({
					x,
					y
				});
				nxt.push({
					x,
					y,
					d: c.d + 1
				});
			}
		}
		edge = nxt;
	}
	return out;
}
function nearest(u, pool) {
	let best = null;
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
function stepToward(u, tx, ty, steps) {
	let x = u.x;
	let y = u.y;
	for (let i = 0; i < steps; i++) {
		const opts = [{
			x: x + Math.sign(tx - x),
			y
		}, {
			x,
			y: y + Math.sign(ty - y)
		}].filter((p) => (p.x !== x || p.y !== y) && !blocked(G.map, p.x, p.y, G.flags) && !occupied(p.x, p.y, u.uid));
		if (!opts.length) break;
		opts.sort((a, b) => cheb(a.x, a.y, tx, ty) - cheb(b.x, b.y, tx, ty));
		x = opts[0].x;
		y = opts[0].y;
		if (x === tx && y === ty) break;
	}
	return {
		x,
		y
	};
}
function heroOf(u) {
	return G.party.find((p) => p.uid === u.heroUid) ?? null;
}
function floatAt(u, text, color) {
	G.floats.push({
		x: (u.x + .5) * 48,
		y: u.y * 48,
		text,
		color,
		t: 0
	});
}
function uAnim(id, kind, dx = 0, dy = 0) {
	G.anim[id] = {
		kind,
		t: 0,
		dx,
		dy
	};
}
function face(u, tx, ty) {
	const dx = tx - u.x;
	const dy = ty - u.y;
	if (Math.abs(dx) > Math.abs(dy)) u.facing = dx > 0 ? 2 : 1;
	else if (dy > 0) u.facing = 0;
	else if (dy < 0) u.facing = 3;
	uAnim(u.uid, "attack", dx, dy);
}
function has(u, id) {
	return u.statuses.find((s) => s.id === id);
}
function putStatus(u, id, turns, pot, src) {
	const prev = u.statuses.find((s) => s.id === id);
	if (prev) {
		prev.turns = Math.max(prev.turns, turns);
		prev.pot = Math.max(prev.pot, pot);
		prev.src = src ?? prev.src;
	} else u.statuses.push({
		id,
		turns,
		pot,
		src
	});
}
function applyDamage(target, raw, src, leech = 0) {
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
	const curse = src ? has(src, "curse") : void 0;
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
function healUnit(t, n, revive = false) {
	if (t.hp <= 0 && !revive) return;
	const g = Math.max(1, Math.floor(n));
	t.hp = Math.min(t.maxHp, Math.max(0, t.hp) + g);
	floatAt(t, `+${g}`, "#7d9a6a");
}
function clearBad(u) {
	u.statuses = u.statuses.filter((s) => s.id === "ward" || s.id === "regen" || s.id === "cover" || s.id === "guard");
}
function tierScale() {
	return 1 + ((REGIONS.find((r) => r.id === G.map.region)?.tier ?? 1) - 1) * .32;
}
function makeFoe(id, name, x, y) {
	const e = ENEMIES[id] ?? ENEMIES.drowned;
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
		stats: {
			str: 10,
			dex: 10,
			end: 10,
			int: 8,
			wil: 8,
			per: 10
		},
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
		facing: 0
	};
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
			e.intent = {
				kind: "wait",
				label: "Чекає"
			};
			e.intentTo = {
				x: e.x,
				y: e.y
			};
			continue;
		}
		if (e.boss && G.round % 3 === 0) {
			e.intent = {
				kind: "slam",
				label: "УДАР ДЗВОНА — коло 1"
			};
			e.intentTo = {
				x: e.x,
				y: e.y
			};
			continue;
		}
		if (e.boss && !e.didSummon && e.hp <= e.maxHp * .6) {
			e.intent = {
				kind: "summon",
				label: "Кличе хориста"
			};
			e.intentTo = {
				x: e.x,
				y: e.y
			};
			continue;
		}
		e.intentTo = cheb(e.x, e.y, target.x, target.y) <= e.range ? {
			x: e.x,
			y: e.y
		} : stepToward(e, target.x, target.y, e.move);
		e.intent = {
			kind: "attack",
			target: target.uid,
			label: `${e.ranged ? "Постріл" : "Удар"} → ${target.name}`
		};
	}
}
function tryFight() {
	if (G.grace > 0 || G.mode !== "explore") return;
	for (const f of G.map.fights) {
		if (G.cleared.includes(f.id) || f.calm) continue;
		const pack = G.mobs.filter((m) => m.fight === f.id && m.hp > 0 && m.hold);
		if (!pack.length) continue;
		if (pack.some((m) => Math.hypot(m.x - G.x, m.y - G.y) < 100)) wakeFight(f.id);
	}
}
function pushPack(f, hold) {
	let n = 0;
	for (const foe of f.foes) {
		const base = ENEMIES[foe.id] ?? ENEMIES.drowned;
		for (let i = 0; i < foe.n; i++) {
			const x = (f.x + 1 + n % 4 * 2 + .5) * 48;
			const y = (f.y + 1 + Math.floor(n / 4) + .92) * 48;
			n += 1;
			const role = base.role;
			const reach = role === "archer" || role === "caster" ? 220 : role === "boss" && base.ranged ? 180 : 52;
			G.mobs.push({
				uid: `${f.id}-${n}`,
				fight: f.id,
				name: foe.name || base.name,
				sprite: base.sprite,
				x,
				y,
				hp: base.hp,
				maxHp: base.hp,
				dmg: base.dmg,
				range: reach,
				cd: .4,
				xp: base.xp,
				gold: base.gold,
				facing: 0,
				hold,
				level: base.level,
				role,
				wind: 0,
				hx: x,
				hy: y
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
function wakeFight(id) {
	for (const m of G.mobs) if (m.fight === id) m.hold = false;
}
function engage(f, hold = false) {
	G.fightId = f.id;
	G.lastRoll = hold ? "Ціль вибрана. Вони ще не йдуть." : "Вони попереду. Бий і відходь, поки вміння холодне.";
	if (G.mobs.some((m) => m.fight === f.id && m.hp > 0)) {
		if (!hold) wakeFight(f.id);
		bump();
		return;
	}
	pushPack(f, hold);
	if (!hold) log("Сутичка на місці. Удар, відхід, знову удар.");
	bump();
}
function onBody(x, y, wx, wy) {
	const dx = wx - x;
	const dy = wy - y;
	const along = -(dx + dy) * .5;
	const across = (dx - dy) * .5;
	return along > -36 && along < 156 && Math.abs(across) < 54;
}
function aimedMob(reach) {
	const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
	if (picked) return Math.hypot(picked.x - G.x, picked.y - G.y) <= reach ? {
		foe: picked,
		missed: false
	} : {
		foe: null,
		missed: true
	};
	return {
		foe: nearestMob(reach),
		missed: false
	};
}
function nearestMob(reach) {
	let best = null;
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
function mobUnder(wx, wy) {
	return G.mobs.some((m) => m.hp > 0 && onBody(m.x, m.y, wx, wy));
}
function faceToward(x, y) {
	const dx = x - G.x;
	const dy = y - G.y;
	if (Math.abs(dx) > Math.abs(dy)) G.facing = dx > 0 ? 2 : 1;
	else G.facing = dy > 0 ? 0 : 3;
}
function attackDelay(h) {
	return Math.max(.32, .7 - h.stats.dex * .014 - h.level * .003);
}
function setAtkHold(on) {
	G.atkHold = on;
}
function hurtMob(m, dmg) {
	m.hp -= dmg;
	G.floats.push({
		x: m.x,
		y: m.y - 28,
		text: `-${dmg}`,
		color: "#f2d48a",
		t: 0
	});
	G.anim[m.uid] = {
		kind: m.hp <= 0 ? "death" : "hurt",
		t: 0,
		dx: 0,
		dy: 0
	};
	if (m.hp <= 0) {
		m.hp = 0;
		if (G.target === m.uid) G.target = G.mobs.find((o) => o.hp > 0 && o.uid !== m.uid && o.fight === m.fight)?.uid ?? "";
		finishPull(m.fight);
	}
}
function finishPull(fightId) {
	const pack = G.mobs.filter((m) => m.fight === fightId);
	if (!pack.length || pack.some((m) => m.hp > 0)) return;
	let xp = 0;
	let gold = 0;
	for (const m of pack) {
		xp += m.xp;
		gold += m.gold;
	}
	G.mobs = G.mobs.filter((m) => m.fight !== fightId);
	G.fightId = fightId;
	const boss = /boss/.test(fightId);
	if (G.fightId && !G.cleared.includes(G.fightId)) G.cleared.push(G.fightId);
	if (G.fightId && !boss) G.back[G.fightId] = G.time + 18;
	const L = leader();
	if (L) L.gold += gold;
	const share = Math.max(1, Math.round(xp / Math.max(1, G.party.length)));
	for (const h of G.party) grantXp(h, share);
	const lines = [`Досвід кожному: ${share}.`, `Монети: ${gold}.`];
	if (L) {
		const bag = [
			"pot",
			"bread",
			"ton",
			"resin",
			"pot2"
		];
		const pick = bag[Math.min(bag.length - 1, Math.floor(Math.random() * (boss ? 5 : 3)))];
		if (Math.random() < .6) {
			addItem(L, pick, 1);
			lines.push(`${itemById(pick)?.name ?? "Річ"} — у сумці.`);
		}
		if (boss) {
			const gear = G.fightId === "nave-boss" ? "t-nave-wax" : G.fightId === "fen-boss" ? "t-reed-knot" : G.fightId === "crypt-boss" ? "t-bell" : "t-salt";
			if (!L.bag.some((b) => b.id === gear) && L.trinket !== gear && L.weapon !== gear && L.armor !== gear) {
				addItem(L, gear, 1);
				lines.push(`${itemById(gear)?.name ?? "Річ"} — у сумці.`);
			}
		}
	}
	if (L && L.unspent > 0) lines.push(`Вільні очки рис: ${L.unspent}. Відкрий лист героя.`);
	if (G.fightId === "tract-ambush") setQuest("q-road:2");
	if (G.fightId === "crypt-boss") {
		setQuest("q-bell:999");
		setQuest("q-back:1");
	}
	if (G.fightId === "fen-boss") setQuest("q-fen:999");
	if (G.fightId === "nave-boss") setQuest("q-nave:999");
	const drop = G.fightId ? {
		"moss-road-boss": ["q-moss", "a-reed-robe"],
		"amber-road-boss": ["q-amber", "w-bow-night"],
		"glass-road-boss": ["q-glass", "w-staff-reed"],
		"red-road-boss": ["q-red", "w-axe-nave"],
		"shore-road-boss": ["q-shore", "w-dagger-sluice"],
		"ash-road-boss": ["q-ash", "w-sword-nave"],
		"verge-road-boss": ["q-verge", "w-myth"]
	}[G.fightId] : void 0;
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
	G.floats.push({
		x: G.x,
		y: G.y - 46,
		text: `+${share} досвіду`,
		color: "#f2d48a",
		t: 0
	});
	G.floats.push({
		x: G.x,
		y: G.y - 64,
		text: `+${gold} монет`,
		color: "#e7d7a1",
		t: 0
	});
	if (drop) G.floats.push({
		x: G.x,
		y: G.y - 82,
		text: itemById(drop[1])?.name ?? "Річ",
		color: "#d7c4a2",
		t: 0
	});
	log(lines.join(" "));
	persist();
	bump();
}
function heroReach(hero) {
	const r = HEROES[hero].range;
	if (r >= 5) return 1400;
	if (r >= 4) return 1100;
	if (r >= 3) return 860;
	return 112;
}
function flightRow(hero) {
	if (hero === "archer") return 0;
	if (hero === "witch") return 2;
	if (hero === "herbalist") return 3;
	return 1;
}
function fieldStrike(quiet = false) {
	const L = leader();
	if (!L || G.mode !== "explore" || G.swing > 0 || G.atkCd > 0) return;
	const { foe, missed } = aimedMob(heroReach(L.hero));
	if (!foe) {
		if (missed && G.target) {
			const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
			if (picked) {
				G.path = route(Math.floor(picked.x / 48), Math.floor(picked.y / 48));
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
	if (foe.hold) wakeFight(foe.fight);
	faceToward(foe.x, foe.y);
	G.hunt = true;
	G.path = [];
	G.swing = 0;
	G.atkCd = attackDelay(L);
	G.anim.hero = {
		kind: "attack",
		t: 0,
		dx: foe.x - G.x,
		dy: foe.y - G.y
	};
	const dmg = blowDamage(HEROES[L.hero].power, L.stats[HEROES[L.hero].primary]);
	G.lastRoll = `${L.name}: ${dmg} шкоди.`;
	if (HEROES[L.hero].range > 1) G.shots.push({
		x: G.x,
		y: G.y - 30,
		tx: foe.x,
		ty: foe.y - 34,
		row: flightRow(L.hero),
		t: 0,
		dur: .55
	});
	hurtMob(foe, dmg);
	bump();
}
function fieldCast(id) {
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
	const stat = L.stats[sk.stat];
	const cd = Math.max(1.15, 2.1 + sk.focus * .4 - L.stats.dex * .02);
	if (sk.target === "enemy") {
		const { foe, missed } = aimedMob(Math.max(sk.range > 1 ? heroReach(L.hero) : 112, sk.range * 78));
		if (!foe) {
			if (missed && G.target) {
				const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
				if (picked) G.path = route(Math.floor(picked.x / 48), Math.floor(picked.y / 48));
			}
			log(missed ? "Підходжу до цілі." : "Ціль занадто далеко.");
			bump();
			return;
		}
		if (foe.hold) wakeFight(foe.fight);
		L.focus -= sk.focus;
		G.swing = .16;
		G.skillCd[id] = cd;
		faceToward(foe.x, foe.y);
		G.anim.hero = {
			kind: sk.kind === "dmg" ? "attack" : "cast",
			t: 0,
			dx: foe.x - G.x,
			dy: foe.y - G.y
		};
		const dmg = sk.power ? blowDamage(sk.power, stat) : 0;
		if (dmg) hurtMob(foe, dmg);
		const fx = sk.status ? statusName(sk.status.id) : "";
		G.lastRoll = `${sk.name}: ${dmg ? `${dmg} шкоди. ` : ""}${fx}`.trim();
		if (sk.range > 1) G.shots.push({
			x: G.x,
			y: G.y - 32,
			tx: foe.x,
			ty: foe.y - 36,
			row: flightRow(L.hero),
			t: 0,
			dur: .4
		});
	} else {
		L.focus -= sk.focus;
		G.swing = .14;
		G.skillCd[id] = cd;
		G.anim.hero = {
			kind: "cast",
			t: 0,
			dx: 0,
			dy: -1
		};
		if (sk.kind === "heal" || sk.power > 0 && sk.kind !== "debuff") {
			const n = blowDamage(Math.max(1, sk.power), stat);
			L.hp = Math.min(L.maxHp, L.hp + n);
			G.floats.push({
				x: G.x,
				y: G.y - 30,
				text: `+${n}`,
				color: "#8dcf9a",
				t: 0
			});
			G.lastRoll = `${sk.name}: +${n}.`;
		} else G.lastRoll = `${sk.name}. ${statusName(sk.status?.id)}`.trim();
	}
	bump();
}
function stepMob(m, vx, vy, dt, sp) {
	const nx = m.x + vx * sp * dt;
	const ny = m.y + vy * sp * dt;
	if (!blocked(G.map, Math.floor(nx / 48), Math.floor(m.y / 48), G.flags)) m.x = nx;
	if (!blocked(G.map, Math.floor(m.x / 48), Math.floor(ny / 48), G.flags)) m.y = ny;
	if (Math.abs(vx) + Math.abs(vy) > .2) {
		if (Math.abs(vx) > Math.abs(vy)) m.facing = vx > 0 ? 2 : 1;
		else m.facing = vy > 0 ? 0 : 3;
	}
}
function tickFolk(dt) {
	for (const f of G.folk) {
		f.wait -= dt;
		const dx = f.tx - f.x;
		const dy = f.ty - f.y;
		const dist = Math.hypot(dx, dy);
		if (dist > 4) {
			f.moving = true;
			const sp = 36;
			f.x += dx / dist * sp * dt;
			f.y += dy / dist * sp * dt;
			if (Math.abs(dx) > Math.abs(dy)) f.facing = dx > 0 ? 2 : 1;
			else f.facing = dy > 0 ? 0 : 3;
		} else {
			f.moving = false;
			if (f.wait <= 0) {
				const ang = G.time * 1.3 + f.hx;
				const ox = Math.cos(ang) * 48 * 1.4;
				const oy = Math.sin(ang * .8) * 48 * 1.1;
				const tx = f.hx + ox;
				const ty = f.hy + oy;
				if (!blocked(G.map, Math.floor(tx / 48), Math.floor(ty / 48), G.flags)) {
					f.tx = tx;
					f.ty = ty;
				}
				f.wait = 2.4 + f.hx % 5 * .3;
			}
		}
	}
}
function tickMobs(dt) {
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
			if (dist < 70) wakeFight(m.fight);
			const ang = G.time * .55 + m.hx * .02;
			stepMob(m, Math.cos(ang), Math.sin(ang * .8), dt, 26);
			continue;
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
		const strafe = Math.sin(G.time * 1.6 + m.hx) * (role === "skirmisher" ? .7 : .25);
		if (role === "archer" || role === "caster") {
			if (dist < 100) stepMob(m, -ux + -uy * strafe, -uy + ux * strafe, dt, speed);
			else if (dist > m.range - 10) stepMob(m, ux + -uy * strafe, uy + ux * strafe, dt, speed * .85);
		} else if (dist > m.range + 8) stepMob(m, ux + -uy * strafe, uy + ux * strafe, dt, speed);
		if (dist <= m.range + 8 && m.cd <= 0 && m.wind <= 0) {
			m.wind = role === "brute" || role === "boss" ? .42 : .28;
			G.anim[m.uid] = {
				kind: "attack",
				t: 0,
				dx,
				dy
			};
			if (Math.abs(dx) > Math.abs(dy)) m.facing = dx > 0 ? 2 : 1;
			else m.facing = dy > 0 ? 0 : 3;
		}
		if (m.wind > 0) {
			const prev = m.wind;
			m.wind -= dt;
			if (prev > 0 && m.wind <= 0 && dist < m.range + 36) {
				m.cd = role === "caster" ? 1.7 : role === "archer" ? 1.25 : role === "boss" ? 1.05 : .85;
				const cut = Math.max(1, m.dmg - Math.floor(L.stats.end / 5));
				L.hp -= cut;
				G.floats.push({
					x: G.x,
					y: G.y - 34,
					text: `-${cut}`,
					color: "#e07070",
					t: 0
				});
				G.anim.hero = {
					kind: "hurt",
					t: 0,
					dx: m.x - G.x,
					dy: m.y - G.y
				};
				if (m.range > 70) G.shots.push({
					x: m.x,
					y: m.y - 16,
					tx: G.x,
					ty: G.y - 16,
					row: 1,
					t: 0,
					dur: .18
				});
				G.lastRoll = `${m.name}: ${cut} шкоди.`;
				if (L.hp <= 0) {
					L.hp = Math.max(1, Math.floor(L.maxHp * .35));
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
function clickWorld(wx, wy) {
	const tx = Math.floor(wx / 48);
	const ty = Math.floor(wy / 48);
	if (G.mode === "explore") {
		let best = null;
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
			for (const foe of f.foes) for (let i = 0; i < foe.n; i++) {
				const x = (f.x + 3 + n * 3 + .5) * 48;
				const y = (f.y + 1 + .92) * 48;
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
		const spot = folk ? G.map.spots.find((s) => s.id === folk.spot) : G.map.spots.find((s) => Math.abs((s.x + .5) * 48 - wx) < 28 && Math.abs((s.y + .7) * 48 - wy) < 36);
		if (spot && spot.kind !== "fight") {
			const t = tileOf(G.x, G.y);
			if (Math.max(Math.abs(spot.x - t.x), Math.abs(spot.y - t.y)) <= 2) {
				G.pending = "";
				G.path = [];
				openSpot(spot);
			} else {
				let tx = spot.x;
				let ty = spot.y;
				if (blocked(G.map, tx, ty, G.flags)) {
					for (const [dx, dy] of [
						[0, 1],
						[0, -1],
						[1, 0],
						[-1, 0]
					]) if (!blocked(G.map, tx + dx, ty + dy, G.flags)) {
						tx += dx;
						ty += dy;
						break;
					}
				}
				G.pending = spot.id;
				G.hunt = false;
				G.path = route(tx, ty);
				log(`${spot.label}. Підходжу.`);
				bump();
			}
			return;
		}
		if (!canWalk(tx, ty)) return;
		G.hunt = false;
		G.path = route(tx, ty);
		return;
	}
	if (G.mode !== "combat" || G.phase !== "plan") return;
	const me = currentPlanner();
	if (!me || me.ready) return;
	const on = G.units.find((u) => u.hp > 0 && u.x === tx && u.y === ty);
	if (G.aim && on) {
		const skill = G.aim.kind === "skill" && G.aim.skill ? skillById(heroOf(me), G.aim.skill) : null;
		if ((skill ? skill.target !== "enemy" : false) ? on.side === "ally" : on.side === "foe") {
			const origin = me.plan ?? {
				moveX: me.x,
				moveY: me.y,
				action: "wait"
			};
			me.plan = {
				moveX: origin.moveX,
				moveY: origin.moveY,
				action: G.aim.kind === "skill" ? "skill" : "attack",
				skill: G.aim.skill,
				target: on.uid
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
			slot: prev?.slot
		};
		bump();
	}
}
function ensurePlan(me) {
	if (!me.plan) me.plan = {
		moveX: me.x,
		moveY: me.y,
		action: "wait"
	};
	return me.plan;
}
function aimAttack() {
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
function aimSkill(id) {
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
	G.aim = {
		kind: "skill",
		skill: id
	};
	if (sk.target === "self") {
		setTarget(me.uid);
		return;
	}
	if (sk.target === "ally") {
		setTarget((living("ally").sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0] ?? me).uid);
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
function setTarget(uid) {
	const me = currentPlanner();
	if (!me || me.ready || G.phase !== "plan") return;
	const on = unitBy(uid);
	if (!on || on.hp <= 0) return;
	const plan = ensurePlan(me);
	const sk = G.aim?.kind === "skill" ? skillById(heroOf(me), G.aim.skill ?? "") : null;
	if (sk && sk.target === "enemy" && on.side !== "foe") return;
	if (sk && sk.target === "ally" && on.side !== "ally") return;
	if (!sk && on.side !== "foe" && G.aim?.kind !== "skill") G.aim = { kind: "attack" };
	plan.action = sk ? "skill" : "attack";
	plan.skill = sk?.id;
	plan.target = on.uid;
	G.aim = null;
	log(`${me.name}: ${sk?.name ?? "удар"} → ${on.name}.`);
	bump();
}
function planGuard() {
	const me = currentPlanner();
	if (!me || me.ready) return;
	me.plan = {
		...ensurePlan(me),
		action: "guard",
		skill: void 0,
		target: void 0
	};
	G.aim = null;
	uAnim(me.uid, "defend");
	bump();
}
function confirmActor() {
	const list = living("ally");
	const me = list[G.planner];
	if (!me || G.phase !== "plan") return;
	if (!me.plan) me.plan = {
		moveX: me.x,
		moveY: me.y,
		action: "wait"
	};
	const sk = me.plan.action === "skill" && me.plan.skill ? skillById(heroOf(me), me.plan.skill) : null;
	if ((me.plan.action === "attack" || sk && sk.target === "enemy") && !me.plan.target) {
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
function allReady() {
	const list = living("ally");
	return list.length > 0 && list.every((u) => u.ready && u.plan);
}
function executeRound() {
	if (G.phase !== "plan" || !allReady()) return;
	G.queue = [];
	const scored = G.units.filter((u) => u.hp > 0).map((u) => ({
		u,
		score: Math.floor(u.stats.per / 2) + Math.floor(u.stats.dex / 2) + (has(u, "stun") ? -100 : 0)
	}));
	scored.sort((a, b) => b.score - a.score);
	for (const { u } of scored) if (u.side === "foe") G.queue.push({
		who: u.uid,
		run: () => foeAct(u.uid)
	});
	else G.queue.push({
		who: u.uid,
		run: () => allyAct(u.uid)
	});
	G.phase = "resolve";
	G.beat = .15;
	bump();
}
function retreat() {
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
function writeBack(victory) {
	for (const u of G.units) {
		if (u.side !== "ally" || !u.heroUid) continue;
		const h = G.party.find((p) => p.uid === u.heroUid);
		if (!h) continue;
		h.hp = victory && u.hp <= 0 ? 1 : u.hp;
		h.focus = u.focus;
	}
}
function endCombat(victory) {
	const foes = G.units.filter((u) => u.side === "foe");
	if (victory) {
		let xp = 0;
		let gold = 0;
		const lines = [];
		const tier = REGIONS.find((r) => r.id === G.map.region)?.tier ?? 1;
		for (const f of foes) {
			const base = ENEMIES[f.enemyId ?? "drowned"] ?? ENEMIES.drowned;
			xp += Math.round(base.xp * (1 + (tier - 1) * .25));
			gold += Math.round(base.gold * (1 + (tier - 1) * .2));
		}
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
		G.floats.push({
			x: G.x,
			y: G.y - 46,
			text: `+${share} досвіду`,
			color: "#f2d48a",
			t: 0
		});
		G.floats.push({
			x: G.x,
			y: G.y - 64,
			text: `+${gold} монет`,
			color: "#e7d7a1",
			t: 0
		});
		log(lines.join(" "));
	} else {
		writeBack(false);
		const L = leader();
		if (G.hardcore && L && L.hp <= 0) {
			G.epitaph = `${L.name} не повертається з ${G.map.name}. Хардкор стерто.`;
			try {
				localStorage.removeItem(HC);
				localStorage.removeItem(`${HC}-bak`);
			} catch {}
			G.party = [];
			G.units = [];
			G.mode = "title";
			bump();
			return;
		}
		for (const h of G.party) if (h.hp <= 0) h.hp = Math.max(1, Math.floor(h.maxHp * .35));
		if (L) L.gold = Math.max(0, L.gold - Math.ceil(L.gold * .1));
		if (G.hardcore) G.party = G.party.filter((h, i) => i === 0 || h.hp > 1);
		place(HAND.willow, "default");
		log("Поразка. Варта приймає живих. Сутичка лишається.");
		G.reward = null;
		G.mode = "explore";
		G.floats.push({
			x: G.x,
			y: G.y - 46,
			text: "Відступ до варти",
			color: "#e07070",
			t: 0
		});
	}
	G.units = [];
	G.queue = [];
	persist();
	bump();
}
function tickStatuses(u) {
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
function moveUnit(u, x, y) {
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
function foeAct(id) {
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
			{
				x: u.x + 1,
				y: u.y
			},
			{
				x: u.x - 1,
				y: u.y
			},
			{
				x: u.x,
				y: u.y + 1
			},
			{
				x: u.x,
				y: u.y - 1
			}
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
function strike(att, defn, acc, stat, power, die, leech) {
	face(att, defn.x, defn.y);
	if (att.ranged || cheb(att.x, att.y, defn.x, defn.y) > 1) {
		const row = att.sprite === "sorceress" ? 1 : att.sprite === "witch" ? 3 : att.sprite === "herbalist" ? 2 : att.sprite === "wraith" ? 3 : 0;
		G.shots.push({
			x: (att.x + .5) * 48,
			y: (att.y + .35) * 48,
			tx: (defn.x + .5) * 48,
			ty: (defn.y + .35) * 48,
			row,
			t: 0,
			dur: .28
		});
	}
	const h = heroOf(att);
	const dmg = blowDamage(power + (h ? Math.round(gearMods(h).power / 2) : 0), stat);
	applyDamage(defn, dmg, att, leech);
	const line = `${att.name} → ${defn.name}: ${dmg} шкоди.`;
	G.lastRoll = line;
	log(line);
	bump();
	return true;
}
function allyAct(id) {
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
		if (!target || target.hp <= 0 || target.side !== "foe") target = nearest(u, living("foe").filter((o) => cheb(u.x, u.y, o.x, o.y) <= u.range));
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
	const victims = sk.target === "self" ? G.units.filter((o) => o.side === "ally" && o.hp > 0 && cheb(o.x, o.y, u.x, u.y) <= radius && (radius > 0 || o.uid === u.uid)) : sk.target === "ally" ? G.units.filter((o) => o.side === "ally" && (o.hp > 0 || sk.revive) && target && cheb(o.x, o.y, target.x, target.y) <= radius && (radius > 0 || o.uid === target.uid)) : G.units.filter((o) => o.side === "foe" && o.hp > 0 && target && cheb(o.x, o.y, target.x, target.y) <= radius && (radius > 0 || o.uid === target.uid));
	if (!victims.length) {
		log(`${sk.name} немає куди лягти. Зосередження лишається.`);
		return;
	}
	u.focus -= sk.focus;
	const stat = u.stats[sk.stat];
	uAnim(u.uid, sk.kind === "dmg" ? "attack" : "cast", target ? target.x - u.x : 0, target ? target.y - u.y : -1);
	for (const v of victims) if (sk.kind === "heal") {
		healUnit(v, sk.power + Math.floor(stat / 3) + Math.round(pm.heal / 2), !!sk.revive);
		if (sk.status) putStatus(v, sk.status.id, sk.status.turns, sk.status.pot, u.uid);
		if (sk.id === "he-clean") clearBad(v);
	} else if (sk.kind === "buff") {
		if (sk.status) putStatus(v, sk.status.id, sk.status.turns, sk.status.pot, u.uid);
		G.lastRoll = `${u.name}: ${sk.name}. ${statusName(sk.status?.id)}${sk.status ? `, ${sk.status.turns} х.` : ""}`;
		floatAt(v, statusName(sk.status?.id) || sk.name, "#c6a15a");
	} else if (sk.kind === "debuff") {
		if (sk.power) strike(u, v, sk.acc + pm.acc, stat, sk.power + Math.round(pm.dmg / 2), 0, sk.leech ?? 0);
		if (sk.status) putStatus(v, sk.status.id, sk.status.turns, sk.status.pot, u.uid);
		G.lastRoll = `${u.name}: ${sk.name}. ${statusName(sk.status?.id)}${sk.status ? `, ${sk.status.turns} х.` : ""}`;
	} else {
		let bonus = 0;
		if (sk.id === "as-back" && (has(v, "mark") || has(v, "vuln"))) bonus += 6;
		if (sk.id === "va-feast" && has(v, "bleed")) bonus += 4;
		strike(u, v, sk.acc + pm.acc, stat, sk.power + Math.round(pm.dmg / 2) + bonus, 0, sk.leech ?? u.leech);
		if (sk.status && v.hp > 0) {
			putStatus(v, sk.status.id, sk.status.turns, sk.status.pot, u.uid);
			G.lastRoll = `${G.lastRoll} ${statusName(sk.status.id)}, ${sk.status.turns} х.`;
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
function worldFromStick(sx, sy) {
	const dx = (sx + sy) * .5;
	const dy = (sy - sx) * .5;
	const yaw = G.viewYaw || 0;
	const c = Math.cos(yaw);
	const s = Math.sin(yaw);
	const x = dx * c + dy * s;
	const y = -dx * s + dy * c;
	const m = Math.hypot(x, y) || 1;
	return {
		x: x / m,
		y: y / m
	};
}
function faceStick(vx, vy) {
	const ax = Math.abs(vx);
	const ay = Math.abs(vy);
	if (ax < .18 && ay < .18) return;
	if (ax > ay * 1.4) G.facing = vx > 0 ? 2 : 1;
	else if (ay > ax * 1.4) G.facing = vy > 0 ? 0 : 3;
}
function blowDamage(power, stat) {
	return Math.max(1, Math.round(power + stat / 2));
}
function statusName(id) {
	return id ? {
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
		guard: "Захист"
	}[id] ?? id : "";
}
function lookHeading(yaw = G.viewYaw) {
	const c = Math.cos(yaw);
	const s = Math.sin(yaw);
	const east = -(c + s);
	const south = s - c;
	return Math.atan2(east, -south);
}
function facingHeading(facing) {
	if (facing === 1) return -Math.PI / 2;
	if (facing === 2) return Math.PI / 2;
	if (facing === 0) return Math.PI;
	return 0;
}
var yawVel = 0;
function wrapPi(a) {
	const t = Math.PI * 2;
	while (a > Math.PI) a -= t;
	while (a < -Math.PI) a += t;
	return a;
}
function step(dt) {
	dt = Math.min(.05, dt);
	G.time += dt;
	const err = wrapPi(G.yaw - G.viewYaw);
	const desired = Math.max(-3.4, Math.min(3.4, err * 5.5));
	const accel = Math.max(-11, Math.min(11, (desired - yawVel) / Math.max(.016, dt)));
	yawVel += accel * dt;
	G.viewYaw += yawVel * dt;
	if (Math.abs(err) < 6e-4 && Math.abs(yawVel) < .02) {
		G.viewYaw = G.yaw;
		yawVel = 0;
	}
	const zErr = (G.zoom || 1) - (G.viewZoom || 1);
	G.viewZoom = (G.viewZoom || 1) + zErr * (1 - Math.exp(-dt * 7));
	for (const id of Object.keys(G.back)) {
		if (G.time < G.back[id]) continue;
		delete G.back[id];
		G.cleared = G.cleared.filter((c) => c !== id);
		const fight = G.map.fights.find((f) => f.id === id);
		if (fight && !G.mobs.some((m) => m.fight === id && m.hp > 0)) pushPack(fight, true);
	}
	G.grace = Math.max(0, G.grace - dt);
	G.since += dt;
	for (const id of Object.keys(G.anim)) G.anim[id].t += dt;
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
				G.beat = G.reduced ? .28 : .58;
				if (!living("foe").length || !living("ally").length) {
					G.queue = [];
					G.beat = .35;
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
	const world = mag > .12 ? worldFromStick(vx, vy) : {
		x: 0,
		y: 0
	};
	const speed = 168;
	G.atkCd = Math.max(0, G.atkCd - dt);
	G.swing = Math.max(0, G.swing - dt);
	for (const id of Object.keys(G.skillCd)) {
		G.skillCd[id] = Math.max(0, (G.skillCd[id] ?? 0) - dt);
		if (G.skillCd[id] <= 0) delete G.skillCd[id];
	}
	if (mag > .12) G.hunt = false;
	if (G.hunt && !G.mobs.some((m) => m.uid === G.target && m.hp > 0)) G.hunt = false;
	if ((G.atkHold || G.hunt) && G.atkCd <= 0 && G.swing <= 0) fieldStrike(true);
	const lead = leader();
	if (lead && G.time % 1 < dt) lead.focus = Math.min(lead.maxFocus, lead.focus + 1);
	if (G.swing > 0) {
		G.path = [];
		G.speed = 0;
		G.moving = false;
	} else if (mag > .12) {
		G.path = [];
		tryMove(world.x * speed * dt, world.y * speed * dt);
		G.speed = speed * Math.min(1, mag);
		G.moving = true;
		G.walk += dt * G.speed;
		faceStick(world.x, world.y);
	} else if (G.path.length) {
		const n = G.path[0];
		const cx = (n.x + .5) * 48;
		const cy = (n.y + .5) * 48;
		const dx = cx - G.x;
		const dy = cy - G.y;
		const d = Math.hypot(dx, dy) || 1;
		const stepLen = Math.min(d, speed * dt);
		tryMove(dx / d * stepLen, dy / d * stepLen);
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
		if (G.uiAcc > .12) {
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
function tryMove(dx, dy) {
	const r = 10;
	const attempt = (nx, ny) => {
		return [
			[nx - r, ny],
			[nx + r, ny],
			[nx, ny - r],
			[nx, ny + r]
		].every(([x, y]) => canWalk(Math.floor(x / 48), Math.floor(y / 48)));
	};
	if (attempt(G.x + dx, G.y)) G.x += dx;
	if (attempt(G.x, G.y + dy)) G.y += dy;
}
function addYaw(delta) {
	G.yaw += delta;
}
function addZoom(delta) {
	G.zoom = Math.min(1.85, Math.max(.62, G.zoom + delta));
}
function setStick(x, y) {
	G.stick.x = x;
	G.stick.y = y;
}
function bootInput() {
	const down = (e) => {
		keys.add(e.code);
		if ([
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Space"
		].includes(e.code)) e.preventDefault();
		if (e.code === "KeyE" && G.mode === "explore") interact();
		if (e.code === "Escape") closePanel();
		if (e.code === "KeyI") openPanel("sheet");
		if (e.code === "KeyJ") openPanel("journal");
		if (G.mode === "explore" && /^Digit[1-4]$/.test(e.code)) {
			const id = leader()?.loadout[Number(e.code.slice(5)) - 1];
			if (id) fieldCast(id);
			e.preventDefault();
		}
	};
	const up = (e) => keys.delete(e.code);
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
function installProbe() {
	if (typeof window === "undefined") return;
	G.reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
	window.__controlsTest = {
		setKeys(codes) {
			keys.clear();
			for (const c of codes) keys.add(c);
		},
		setStick(x, y) {
			G.stick.x = x;
			G.stick.y = y;
		},
		getX: () => G.x,
		getY: () => G.y,
		getSpeed: () => G.speed,
		getYaw: () => 0
	};
	window.__echo = { start() {
		if (G.mode === "title" || !G.party.length) beginGame("archer", false);
		else G.mode = "explore";
		bump();
	} };
}
if (typeof window !== "undefined") installProbe();
var SPRITES = [
	"sorceress",
	"herbalist",
	"archer",
	"vampire",
	"barbarian",
	"assassin",
	"witch",
	"paladin",
	"marta",
	"drowned",
	"wraith",
	"bellringer",
	"fx"
];
var tiles = [];
var sheets = /* @__PURE__ */ new Map();
var scenery = /* @__PURE__ */ new Map();
var plates = /* @__PURE__ */ new Map();
load("/game/tiles/cobble.jpg?v=2");
var PLATES = [
	"willow",
	"tract",
	"crypt"
];
function load(src) {
	if (typeof Image === "undefined") return {
		complete: false,
		naturalWidth: 0
	};
	const img = new Image();
	img.src = src;
	return img;
}
var booted = false;
function bootImages() {
	if (booted) return;
	booted = true;
	for (let i = 0; i < 16; i++) tiles[i] = load(`/game/tiles/${i}.png`);
	for (const id of SPRITES) sheets.set(id, load(`/game/sprites/${id}/sheet-transparent.png?v=14`));
	for (const id of [
		"willow",
		"cottage",
		"lantern",
		"marsh",
		"pier",
		"bell",
		"wall",
		"timber",
		"timber-b",
		"plaza-tree"
	]) scenery.set(id, load(`/game/props/${id}.png?v=5`));
	for (const id of PLATES) plates.set(id, load(`/game/bg/${id}-plate.jpg?v=5`));
}
var viewBox = {
	w: 1,
	h: 1,
	left: 0,
	top: 0
};
function holdClient(cx, cy, down) {
	if (!down) {
		setAtkHold(false);
		return;
	}
	const p = worldFromScreen(cx - viewBox.left, cy - viewBox.top, viewBox.w, viewBox.h);
	if (!mobUnder(p.x, p.y)) return;
	setAtkHold(true);
	fieldStrike();
}
function tapClient(cx, cy) {
	const p = worldFromScreen(cx - viewBox.left, cy - viewBox.top, viewBox.w, viewBox.h);
	clickWorld(p.x, p.y);
}
function startPaint(canvas) {
	bootImages();
	let raf = 0;
	let alive = true;
	let last = performance.now();
	const ctx = canvas.getContext("2d");
	if (!ctx) return () => {};
	const resize = () => {
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		const w = canvas.clientWidth || window.innerWidth;
		const h = canvas.clientHeight || window.innerHeight;
		canvas.width = Math.max(1, Math.floor(w * dpr));
		canvas.height = Math.max(1, Math.floor(h * dpr));
	};
	resize();
	const ro = new ResizeObserver(resize);
	ro.observe(canvas);
	let down = null;
	let rot = null;
	const onDown = (e) => {
		if (e.button === 2) {
			rot = {
				x: e.clientX,
				turned: false
			};
			e.preventDefault();
			return;
		}
		down = {
			x: e.clientX,
			y: e.clientY,
			shift: e.shiftKey
		};
		if (e.button === 0) {
			const rect = canvas.getBoundingClientRect();
			const p = worldFromScreen(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
			if (mobUnder(p.x, p.y)) {
				setAtkHold(true);
				fieldStrike();
			}
		}
		if (e.shiftKey && e.button === 0) {
			setAtkHold(true);
			fieldStrike();
		}
	};
	const onMove = (e) => {
		if (!rot || e.buttons !== 2) return;
		const dx = e.clientX - rot.x;
		rot.x = e.clientX;
		if (dx) addYaw(dx * .011);
	};
	const onUp = (e) => {
		if (e.button === 2) {
			rot = null;
			return;
		}
		setAtkHold(false);
		if (!down) return;
		const shifted = down.shift || e.shiftKey;
		const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
		down = null;
		if (moved > 12 && !shifted) return;
		const rect = canvas.getBoundingClientRect();
		const p = worldFromScreen(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
		clickWorld(p.x, p.y);
		if (shifted) fieldStrike();
	};
	const eatMenu = (e) => e.preventDefault();
	const onWheel = (e) => {
		e.preventDefault();
		addZoom(e.deltaY > 0 ? -.08 : .08);
	};
	canvas.addEventListener("pointerdown", onDown);
	canvas.addEventListener("pointermove", onMove);
	canvas.addEventListener("pointerup", onUp);
	canvas.addEventListener("contextmenu", eatMenu);
	canvas.addEventListener("wheel", onWheel, { passive: false });
	const frame = (now) => {
		if (!alive) return;
		const dt = Math.min(.05, (now - last) / 1e3);
		last = now;
		step(dt);
		const w = canvas.clientWidth || 1;
		const h = canvas.clientHeight || 1;
		const rect = canvas.getBoundingClientRect();
		viewBox = {
			w,
			h,
			left: rect.left,
			top: rect.top
		};
		draw(ctx, w, h);
		raf = requestAnimationFrame(frame);
	};
	raf = requestAnimationFrame(frame);
	return () => {
		alive = false;
		cancelAnimationFrame(raf);
		ro.disconnect();
		canvas.removeEventListener("pointerdown", onDown);
		canvas.removeEventListener("pointermove", onMove);
		canvas.removeEventListener("pointerup", onUp);
		canvas.removeEventListener("contextmenu", eatMenu);
		canvas.removeEventListener("wheel", onWheel);
	};
}
function camera(viewW, viewH) {
	const zoom = viewW / ((Math.min(viewW, viewH) < 720 ? 12 : 16) * ISO_W) * (G.viewZoom || G.zoom || 1);
	const mapW = Math.max(48, (G.map.rows[0]?.length ?? 1) * 48);
	const mapH = Math.max(48, G.map.rows.length * 48);
	const px = viewW / (2 * zoom);
	const py = viewH / (2 * zoom);
	const reach = (Math.abs(px) / (ISO_W / 2) + Math.abs(py) / (ISO_H / 2)) * .5 * 48;
	return {
		x: mapW <= reach * 2 ? mapW / 2 : Math.min(mapW - reach, Math.max(reach, G.x)),
		y: mapH <= reach * 2 ? mapH / 2 : Math.min(mapH - reach, Math.max(reach, G.y)),
		zoom
	};
}
var ISO_W = 64;
var ISO_H = 32;
function spin(dx, dy, yaw) {
	const c = Math.cos(yaw);
	const s = Math.sin(yaw);
	return {
		x: dx * c - dy * s,
		y: dx * s + dy * c
	};
}
function unspin(dx, dy, yaw) {
	const c = Math.cos(yaw);
	const s = Math.sin(yaw);
	return {
		x: dx * c + dy * s,
		y: -dx * s + dy * c
	};
}
function project(wx, wy, cam) {
	const s = spin(wx - cam.x, wy - cam.y, G.viewYaw || 0);
	return {
		x: (s.x - s.y) * (ISO_W / 2 / 48),
		y: (s.x + s.y) * (ISO_H / 2 / 48)
	};
}
function worldFromScreen(sx, sy, viewW, viewH) {
	const cam = camera(viewW, viewH);
	const px = (sx - viewW / 2) / cam.zoom;
	const py = (sy - viewH / 2) / cam.zoom;
	const w = unspin((px / (ISO_W / 2) + py / (ISO_H / 2)) * .5 * 48, (py / (ISO_H / 2) - px / (ISO_W / 2)) * .5 * 48, G.viewYaw || 0);
	return {
		x: cam.x + w.x,
		y: cam.y + w.y
	};
}
function drawCombatStage(ctx, viewW, viewH) {
	const plate = plates.get(G.map.id);
	if (plate && plate.complete && plate.naturalWidth) {
		const aspect = plate.naturalWidth / plate.naturalHeight;
		let dw = viewW;
		let dh = dw / aspect;
		if (dh < viewH) {
			dh = viewH;
			dw = dh * aspect;
		}
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";
		ctx.drawImage(plate, (viewW - dw) / 2, (viewH - dh) / 2, dw, dh);
	}
	ctx.fillStyle = "rgba(5, 6, 10, 0.34)";
	ctx.fillRect(0, 0, viewW, viewH);
	const top = 88;
	const bottom = viewH - 230;
	const allies = G.units.filter((u) => u.side === "ally");
	const foes = G.units.filter((u) => u.side === "foe");
	const pos = /* @__PURE__ */ new Map();
	const tall = Math.min(200, viewH * .22);
	foes.forEach((u, i) => {
		const x = viewW * ((i + 1) / (foes.length + 1));
		pos.set(u.uid, {
			x,
			y: top + tall * .92
		});
	});
	allies.forEach((u, i) => {
		const x = viewW * ((i + 1) / (allies.length + 1));
		pos.set(u.uid, {
			x,
			y: bottom - 8
		});
	});
	const target = G.units.find((u) => u.uid === G.units.filter((a) => a.side === "ally" && a.hp > 0)[G.planner]?.plan?.target);
	for (const u of G.units) {
		const p = pos.get(u.uid);
		if (!p) continue;
		const glow = ctx.createRadialGradient(p.x, p.y - tall * .4, 8, p.x, p.y - tall * .35, tall * .7);
		glow.addColorStop(0, u.side === "ally" ? "rgba(198,161,90,0.28)" : "rgba(143,61,58,0.32)");
		glow.addColorStop(1, "rgba(0,0,0,0)");
		ctx.fillStyle = glow;
		ctx.beginPath();
		ctx.arc(p.x, p.y - tall * .35, tall * .7, 0, Math.PI * 2);
		ctx.fill();
		const a = G.anim[u.uid];
		let oy = 0;
		if (a && (a.kind === "attack" || a.kind === "cast") && a.t < .5) oy = Math.sin(Math.min(1, a.t / .42) * Math.PI) * (u.side === "ally" ? -34 : 34);
		if (target?.uid === u.uid) {
			ctx.strokeStyle = "rgba(198,161,90,0.9)";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.ellipse(p.x, p.y + 6, tall * .28, 10, 0, 0, Math.PI * 2);
			ctx.stroke();
		}
		const pose = a && (a.kind === "hurt" || a.kind === "death" || a.kind === "defend") ? a : void 0;
		drawActor(ctx, u.sprite, p.x, p.y + oy, 0, false, u.uid, pose, tall);
		if (a && (a.kind === "attack" || a.kind === "cast") && a.t < .55) {
			const hue = a.kind === "cast" ? "125, 196, 154" : "230, 214, 170";
			const r = 14 + a.t * 50;
			ctx.strokeStyle = `rgba(${hue},${1 - a.t})`;
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.arc(p.x, p.y - tall * .35 + (u.side === "ally" ? -20 : 24), r, 0, Math.PI * 2);
			ctx.stroke();
		}
		bar(ctx, p.x, p.y + 8, u.maxHp ? u.hp / u.maxHp : 0, u.side === "ally" ? "#7d9a6a" : "#8f3d3a");
		ctx.fillStyle = "#e6dcc8";
		ctx.font = "13px Manrope, sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(u.name, p.x, p.y - tall - 6);
		if (u.side === "foe" && u.intent && u.hp > 0) {
			ctx.fillStyle = "#c6a15a";
			ctx.font = "12px Manrope, sans-serif";
			ctx.fillText(u.intent.label, p.x, p.y - tall - 24);
		}
	}
	for (const s of G.shots) {
		let from = {
			x: viewW * .3,
			y: viewH * .4
		};
		let to = {
			x: viewW * .7,
			y: viewH * .4
		};
		let bd = 0xe8d4a51000;
		for (const u of G.units) {
			const p = pos.get(u.uid);
			if (!p) continue;
			const d = ((u.x + .5) * 48 - s.x) ** 2 + (u.y * 48 - s.y) ** 2;
			if (d < bd) {
				bd = d;
				from = p;
			}
		}
		bd = 0xe8d4a51000;
		for (const u of G.units) {
			const p = pos.get(u.uid);
			if (!p) continue;
			const d = ((u.x + .5) * 48 - s.tx) ** 2 + (u.y * 48 - s.ty) ** 2;
			if (d < bd) {
				bd = d;
				to = p;
			}
		}
		const k = Math.min(1, s.t / s.dur);
		const x = from.x + (to.x - from.x) * k;
		const y = from.y - tall * .45 + (to.y - tall * .45 - (from.y - tall * .45)) * k;
		ctx.fillStyle = "rgba(230,214,170,0.9)";
		ctx.beginPath();
		ctx.arc(x, y, 7, 0, Math.PI * 2);
		ctx.fill();
	}
	for (const f of G.floats) {
		let at = {
			x: viewW / 2,
			y: 128
		};
		let bd = 0xe8d4a51000;
		for (const u of G.units) {
			const p = pos.get(u.uid);
			if (!p) continue;
			const d = ((u.x + .5) * 48 - f.x) ** 2 + (u.y * 48 - f.y) ** 2;
			if (d < bd) {
				bd = d;
				at = p;
			}
		}
		ctx.globalAlpha = 1 - f.t / .9;
		ctx.fillStyle = f.color;
		ctx.font = "bold 18px Manrope, sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(f.text, at.x, at.y - tall * .72 - f.t * 24);
		ctx.globalAlpha = 1;
	}
	if (G.lastRoll) {
		ctx.fillStyle = "rgba(7,8,12,0.72)";
		ctx.fillRect(12, 56, viewW - 24, 36);
		ctx.strokeStyle = "rgba(198,161,90,0.7)";
		ctx.strokeRect(12, 56, viewW - 24, 36);
		ctx.fillStyle = "#e6dcc8";
		ctx.font = "13px Manrope, sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(G.lastRoll, viewW / 2, 78);
	}
}
function draw(ctx, viewW, viewH) {
	const dpr = Math.min(2, window.devicePixelRatio || 1);
	ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	ctx.imageSmoothingEnabled = false;
	ctx.fillStyle = "#07080c";
	ctx.fillRect(0, 0, viewW, viewH);
	if (G.mode === "combat") {
		drawCombatStage(ctx, viewW, viewH);
		return;
	}
	const cam = camera(viewW, viewH);
	const at = (wx, wy) => project(wx, wy, cam);
	ctx.save();
	ctx.translate(viewW / 2, viewH / 2);
	ctx.scale(cam.zoom, cam.zoom);
	const span = Math.ceil(Math.max(viewW, viewH) / (cam.zoom * (ISO_H / 2))) + 6;
	const cx = Math.floor(cam.x / 48);
	const cy = Math.floor(cam.y / 48);
	const x0 = Math.max(0, cx - span);
	const y0 = Math.max(0, cy - span);
	const x1 = Math.min(G.map.rows[0]?.length ?? 0, cx + span);
	const y1 = Math.min(G.map.rows.length, cy + span);
	const props = [];
	ensureStamps();
	paintIsoGround(ctx, x0, y0, x1, y1, cam, viewW, viewH);
	for (const s of stamps) {
		if (s.footX < x0 * 48 - 240 || s.footX > x1 * 48 + 240) continue;
		if (s.sort < y0 - 3 || s.sort > y1 + 4) continue;
		props.push({
			y: s.footX + s.footY,
			draw: (c) => {
				const p = at(s.footX, s.footY);
				drawProp(c, s.id, p.x, p.y, s.h * (ISO_H / 48), s.flip);
			}
		});
	}
	if (G.mode === "explore") {
		const lead = G.party[0];
		if (lead) {
			props.push({
				y: G.x + G.y,
				draw: (c) => {
					const p = at(G.x, G.y);
					drawActor(c, lead.hero, p.x, p.y, G.facing, G.moving, "hero", G.anim.hero, 78, HEROES[lead.hero].range > 1 ? "ranged" : "melee");
				}
			});
			G.party.slice(1).forEach((m, i) => {
				const back = G.facing === 0 ? -1 : G.facing === 3 ? 1 : 0;
				const side = G.facing === 1 ? 1 : G.facing === 2 ? -1 : i % 2 === 0 ? -1 : 1;
				const wx = G.x + side * 22;
				const wy = G.y + back * 18 - 8;
				props.push({
					y: wx + wy,
					draw: (c) => {
						const p = at(wx, wy);
						drawActor(c, m.hero, p.x, p.y, G.facing, G.moving, m.uid, void 0, 74);
					}
				});
			});
		}
		for (const s of G.map.spots) {
			if (s.kind === "fight") continue;
			if (G.folk.some((f) => f.spot === s.id)) continue;
			const fx = (s.x + .5) * 48;
			const fy = (s.y + .92) * 48;
			props.push({
				y: fx + fy,
				draw: (c) => {
					const p = at(fx, fy);
					drawTag(c, s.label, p.x, p.y - 28);
				}
			});
		}
		for (const f of G.folk) props.push({
			y: f.x + f.y,
			draw: (c) => {
				const p = at(f.x, f.y);
				drawActor(c, f.sprite, p.x, p.y, f.facing, f.moving, f.id, void 0, 74);
				drawTag(c, questHot(f.ref) ? `${f.label} !` : f.label, p.x, p.y - 70);
			}
		});
		for (const f of G.map.fights) {
			if (G.cleared.includes(f.id) || G.mobs.some((m) => m.fight === f.id && m.hp > 0)) continue;
			let n = 0;
			for (const foe of f.foes) for (let i = 0; i < foe.n; i++) {
				const x = f.x + 2 + n % 3;
				const y = f.y + 1 + Math.floor(n / 3);
				n += 1;
				const fx = (x + .5) * 48;
				const fy = (y + .92) * 48;
				const sprite = foe.id === "wraith" ? "wraith" : foe.id === "bellringer" ? "bellringer" : "drowned";
				props.push({
					y: fx + fy,
					draw: (c) => {
						const p = at(fx, fy);
						drawActor(c, sprite, p.x, p.y, 0, false, `${f.id}-${n}`, void 0, 72);
						drawTag(c, foe.name ?? "Гість", p.x, p.y - 68);
					}
				});
			}
		}
		for (const m of G.mobs) {
			if (m.hp <= 0) continue;
			props.push({
				y: m.x + m.y,
				draw: (c) => {
					const p = at(m.x, m.y);
					const walking = m.hold || Math.hypot(G.x - m.x, G.y - m.y) > 28;
					drawActor(c, m.sprite, p.x, p.y, m.facing, walking, m.uid, G.anim[m.uid], m.role === "boss" ? 120 : 104, m.range > 80 ? "ranged" : "melee");
					if (G.target === m.uid) {
						const pulse = 1 + Math.sin(G.time * 7) * .08;
						c.strokeStyle = "rgba(255, 70, 58, 0.35)";
						c.lineWidth = 5;
						c.beginPath();
						c.ellipse(p.x, p.y - 1, 34 * pulse, 13 * pulse, 0, 0, Math.PI * 2);
						c.stroke();
						c.strokeStyle = "#ff4a3c";
						c.lineWidth = 2.5;
						c.beginPath();
						c.ellipse(p.x, p.y - 1, 22 * pulse, 8.5 * pulse, 0, 0, Math.PI * 2);
						c.stroke();
					}
					bar(c, p.x, p.y - 112, m.hp / m.maxHp, "#e23b32");
					drawFoeName(c, `${m.name}  ${m.level}`, p.x, p.y - 126, !m.hold || G.target === m.uid);
				}
			});
		}
	}
	props.sort((a, b) => a.y - b.y);
	for (const p of props) p.draw(ctx);
	for (const s of G.shots) {
		const k = Math.min(1, s.t / s.dur);
		for (let i = 3; i >= 1; i--) {
			const kk = Math.max(0, k - i * .05);
			const ghost = at(s.x + (s.tx - s.x) * kk, s.y + (s.ty - s.y) * kk);
			ctx.globalAlpha = .22;
			ctx.fillStyle = s.row === 2 ? "#e4c6ff" : s.row === 3 ? "#b6e38a" : "#f3ead6";
			ctx.beginPath();
			ctx.ellipse(ghost.x, ghost.y, 8 - i, 3.2, 0, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.globalAlpha = 1;
		const p = at(s.x + (s.tx - s.x) * k, s.y + (s.ty - s.y) * k);
		const from = at(s.x, s.y);
		drawFlight(ctx, from.x, from.y, p.x, p.y, s.row);
	}
	for (const f of G.floats) {
		const p = at(f.x, f.y);
		ctx.globalAlpha = Math.max(0, 1 - f.t / 1.5);
		ctx.fillStyle = f.color;
		ctx.font = "bold 22px Manrope, sans-serif";
		ctx.textAlign = "center";
		ctx.strokeStyle = "rgba(0,0,0,0.8)";
		ctx.lineWidth = 3;
		ctx.strokeText(f.text, p.x, p.y - f.t * 36);
		ctx.fillText(f.text, p.x, p.y - f.t * 36);
		ctx.globalAlpha = 1;
	}
	ctx.restore();
	const g = ctx.createRadialGradient(viewW / 2, viewH / 2, viewH * .55, viewW / 2, viewH / 2, viewH * .95);
	g.addColorStop(0, "rgba(0,0,0,0)");
	g.addColorStop(1, "rgba(0,0,0,0.12)");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, viewW, viewH);
	if (G.mode === "explore") {
		drawCompass(ctx, viewW);
		drawBearings(ctx, viewW, viewH, cam);
	}
}
function drawCompass(ctx, viewW) {
	const head = lookHeading() * 180 / Math.PI;
	const cx = viewW / 2;
	const y = 86;
	const w = Math.min(210, viewW * .5);
	const rose = [
		[0, "Пн"],
		[45, "ПнСх"],
		[90, "Сх"],
		[135, "ПдСх"],
		[180, "Пд"],
		[225, "ПдЗх"],
		[270, "Зх"],
		[315, "ПнЗх"]
	];
	ctx.save();
	ctx.beginPath();
	ctx.rect(cx - w / 2, 73, w, 26);
	ctx.clip();
	ctx.fillStyle = "rgba(7,8,12,0.78)";
	ctx.fillRect(cx - w / 2, 73, w, 26);
	ctx.font = "12px Manrope, sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	const px = w / 120;
	for (const [deg, label] of rose) {
		let d = deg - head;
		while (d > 180) d -= 360;
		while (d < -180) d += 360;
		const x = cx + d * px;
		if (x < cx - w / 2 - 24 || x > cx + w / 2 + 24) continue;
		ctx.fillStyle = label.length <= 2 ? "#f2d48a" : "#cabb9a";
		ctx.fillText(label, x, y);
	}
	ctx.restore();
	ctx.save();
	ctx.strokeStyle = "rgba(198,161,90,0.85)";
	ctx.strokeRect(cx - w / 2 + .5, 73.5, w - 1, 25);
	ctx.fillStyle = "#f2d48a";
	ctx.beginPath();
	ctx.moveTo(cx, 71);
	ctx.lineTo(cx - 5, 65);
	ctx.lineTo(cx + 5, 65);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
function drawBearings(ctx, viewW, viewH, cam) {
	const marks = [];
	for (const f of G.folk) {
		if (!questHot(f.ref)) continue;
		marks.push({
			x: f.x,
			y: f.y,
			color: "#ffe27a",
			label: "!"
		});
	}
	for (const s of G.map.spots) {
		if (s.kind !== "exit") continue;
		marks.push({
			x: (s.x + .5) * 48,
			y: (s.y + .5) * 48,
			color: "#e2c15a",
			label: s.label
		});
	}
	for (const f of G.map.fights) {
		if (G.cleared.includes(f.id)) continue;
		if (!(f.id.includes("boss") || f.foes.some((foe) => foe.id === "bellringer" || foe.id === "fenmother" || foe.id === "cantor"))) continue;
		marks.push({
			x: (f.x + f.w / 2) * 48,
			y: (f.y + f.h / 2) * 48,
			color: "#f4f0e6",
			label: "Босс"
		});
	}
	const marginX = 30;
	const top = 92;
	const bottom = Math.max(130, viewH * .24);
	for (const m of marks) {
		const p = project(m.x, m.y, cam);
		const sx = viewW / 2 + p.x * cam.zoom;
		const sy = viewH / 2 + p.y * cam.zoom;
		if (sx > marginX && sx < viewW - marginX && sy > top && sy < viewH - bottom) continue;
		const dx = sx - viewW / 2;
		const dy = sy - viewH / 2;
		const maxX = viewW / 2 - marginX;
		const maxY = Math.min(viewH / 2 - top, viewH / 2 - bottom);
		const k = Math.min(maxX / Math.max(8, Math.abs(dx)), maxY / Math.max(8, Math.abs(dy)));
		const ax = viewW / 2 + dx * k;
		const ay = viewH / 2 + dy * k;
		ctx.save();
		ctx.translate(ax, ay);
		ctx.rotate(Math.atan2(dy, dx));
		ctx.fillStyle = "rgba(7,8,12,0.84)";
		ctx.beginPath();
		ctx.arc(0, 0, 11, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = m.color;
		ctx.beginPath();
		ctx.moveTo(8, 0);
		ctx.lineTo(-5, -5.5);
		ctx.lineTo(-5, 5.5);
		ctx.fill();
		ctx.restore();
		ctx.font = "10px Manrope, sans-serif";
		ctx.fillStyle = m.color;
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		ctx.fillText(m.label, ax, ay - 12);
	}
}
var stamps = [];
var stampKey = "";
function ensureStamps() {
	const key = `${G.map.id}|${G.flags.bridge ?? 0}|${G.flags.bells ?? 0}|${G.map.rows.length}|${G.map.rows[0]?.length ?? 0}`;
	if (key === stampKey) return;
	stampKey = key;
	const H = G.map.rows.length;
	const W = G.map.rows[0]?.length ?? 0;
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	const chAt = (x, y) => tileChar(G.map, x, y, G.flags);
	const solid = (x, y) => cellOf(chAt(x, y)).solid;
	const crypt = G.map.id === "crypt";
	for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
		if (chAt(x, y) !== "H" || seen.has(`${x},${y}`)) continue;
		const q = [[x, y]];
		seen.add(`${x},${y}`);
		let i = 0;
		let x0 = x;
		let x1 = x;
		let y0 = y;
		let y1 = y;
		while (i < q.length) {
			const [cx, cy] = q[i++];
			x0 = Math.min(x0, cx);
			x1 = Math.max(x1, cx);
			y0 = Math.min(y0, cy);
			y1 = Math.max(y1, cy);
			for (const [dx, dy] of [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1]
			]) {
				const nx = cx + dx;
				const ny = cy + dy;
				const k = `${nx},${ny}`;
				if (nx < 0 || ny < 0 || nx >= W || ny >= H || seen.has(k) || chAt(nx, ny) !== "H") continue;
				seen.add(k);
				q.push([nx, ny]);
			}
		}
		const bw = x1 - x0 + 1;
		const bh = y1 - y0 + 1;
		out.push({
			id: "cottage",
			footX: (x0 + x1 + 1) / 2 * 48,
			footY: (y1 + 1) * 48 - 2,
			h: Math.max(48 * 2.8, bh * 48 * 1.25, bw * 48 * .9),
			sort: y1 + .96
		});
	}
	if (G.map.id === "willow") {
		for (let i = out.length - 1; i >= 0; i--) if (out[i]?.id === "cottage") out.splice(i, 1);
		for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
			if (chAt(x, y) !== "H" || x % 3 !== 1) continue;
			const southOpen = chAt(x, y + 1) !== "H" && !solid(x, y + 1);
			const northOpen = chAt(x, y - 1) !== "H" && !solid(x, y - 1);
			if (southOpen) out.push({
				id: x % 6 === 1 ? "timber-b" : "timber",
				footX: (x + .5) * 48,
				footY: (y + 1) * 48 + 2,
				h: 163.2,
				sort: y + .98,
				flip: x % 6 === 4
			});
			else if (northOpen) out.push({
				id: x % 6 === 1 ? "timber-b" : "timber",
				footX: (x + .5) * 48,
				footY: (y + 3.05) * 48,
				h: 151.2,
				sort: y + 2.9,
				flip: x % 6 === 4
			});
		}
	}
	for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
		const ch = chAt(x, y);
		const fx = (x + .5) * 48;
		const fy = (y + 1) * 48;
		if (ch === "T") {
			const marsh = G.map.id === "tract" || G.map.id !== "willow" && (x + y) % 3 === 0;
			out.push({
				id: G.map.id === "willow" ? "plaza-tree" : marsh ? "marsh" : "willow",
				footX: fx,
				footY: fy,
				h: 48 * (G.map.id === "willow" ? 2.7 : marsh ? 2.55 : 3.2),
				sort: y + .94
			});
		} else if (ch === "F") out.push({
			id: "lantern",
			footX: fx,
			footY: fy - 2,
			h: 84,
			sort: y + .72
		});
		else if (ch === "B") out.push({
			id: "bell",
			footX: fx,
			footY: fy - 6,
			h: 96,
			sort: y + .6
		});
		else if (ch === "L") out.push({
			id: "lantern",
			footX: fx,
			footY: fy,
			h: 48 * 1.4,
			sort: y + .82
		});
		else if (ch === "D" && solid(x, y)) out.push({
			id: "pier",
			footX: fx,
			footY: fy,
			h: 48 * 2.3,
			sort: y + .9
		});
		else if (ch === "#" && x % 2 === 0 && !solid(x, y + 1)) out.push({
			id: crypt ? "pier" : "wall",
			footX: fx,
			footY: fy,
			h: crypt ? 48 * 2.1 : 74.4,
			sort: y + .9
		});
	}
	stamps = out;
}
function drawProp(ctx, id, footX, footY, h, flip) {
	const img = scenery.get(id);
	if (!img || !img.complete || !img.naturalWidth) return;
	const w = h * (img.width / img.height);
	ctx.save();
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";
	ctx.translate(footX, footY);
	if (flip) ctx.scale(-1, 1);
	ctx.drawImage(img, -w / 2, -h, w, h);
	ctx.restore();
}
function drawTag(ctx, text, x, y) {
	ctx.save();
	ctx.font = "bold 11px Manrope, sans-serif";
	const w = Math.min(150, ctx.measureText(text).width + 10);
	const h = 15;
	ctx.fillStyle = "rgba(255, 250, 240, 0.92)";
	ctx.fillRect(x - w / 2, y - h, w, h);
	ctx.strokeStyle = "rgba(48, 32, 18, 0.55)";
	ctx.strokeRect(x - w / 2 + .5, y - h + .5, w - 1, 14);
	ctx.fillStyle = "#24180f";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(text, x, y - h / 2);
	ctx.restore();
}
function screenFacing(facing, yaw) {
	const vec = [
		[0, 1],
		[-1, 0],
		[1, 0],
		[0, -1]
	][facing] ?? [0, 1];
	const s = spin(vec[0], vec[1], yaw);
	const dirs = [
		[0, 1],
		[-1, 0],
		[1, 0],
		[0, -1]
	];
	let best = 0;
	let score = -9;
	for (let i = 0; i < dirs.length; i++) {
		const d = s.x * dirs[i][0] + s.y * dirs[i][1];
		if (d > score) {
			score = d;
			best = i;
		}
	}
	return best;
}
function light(ctx, x, y, r, rgb) {
	const g = ctx.createRadialGradient(x, y, 2, x, y, r);
	g.addColorStop(0, `rgba(${rgb},0.28)`);
	g.addColorStop(1, `rgba(${rgb},0)`);
	ctx.fillStyle = g;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fill();
}
function grain(x, y) {
	let n = x * 374761393 + y * 668265263 | 0;
	n = Math.imul(n ^ n >>> 13, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967295;
}
function surfaceOf(ch, kind) {
	if (kind === "deep" || kind === "shallow" || ch === "W" || ch === "x" || ch === "~") return "water";
	if (kind === "bridge" || ch === "=") return "wood";
	if (kind === "grass" || kind === "moss" || ch === "\"") return "grass";
	if (kind === "mud" || ch === ",") return "mud";
	if (kind === "house" || kind === "wall" || kind === "tree" || ch === "#" || ch === "H" || ch === "T") return "wall";
	return "cobble";
}
function baseColor(surf) {
	if (surf === "water") return "#2f6d84";
	if (surf === "wood") return "#8d6840";
	if (surf === "grass") return "#3f6b2e";
	if (surf === "mud") return "#5c4328";
	if (surf === "wall") return "#5e564e";
	return "#3e352e";
}
function paintGroundWear(ctx, cam, viewW, viewH) {
	const limX = viewW / (2 * cam.zoom) + 56;
	const limY = viewH / (2 * cam.zoom) + 56;
	const reach = Math.max(limX / .5, limY / .26);
	const mapW = G.map.rows[0]?.length ?? 0;
	const mapH = G.map.rows.length;
	for (const layer of [0, 1]) {
		const step = layer === 0 ? 46 : 27;
		const ox = layer === 0 ? 0 : 18;
		const oy = layer === 0 ? 0 : 11;
		const x0 = Math.floor((cam.x - reach - ox) / step) * step;
		const y0 = Math.floor((cam.y - reach - oy) / step) * step;
		for (let wy = y0; wy < cam.y + reach; wy += step) for (let wx = x0; wx < cam.x + reach; wx += step) {
			const gx = Math.floor((wx + ox) / step);
			const gy = Math.floor((wy + oy) / step);
			const jx = (grain(gx, gy + layer * 9) - .5) * step * .82;
			const jy = (grain(gy + 3, gx + layer * 4) - .5) * step * .82;
			const px = wx + ox + jx;
			const py = wy + oy + jy;
			const tx = Math.floor(px / 48);
			const ty = Math.floor(py / 48);
			if (tx < 0 || ty < 0 || tx >= mapW || ty >= mapH) continue;
			const ch = tileChar(G.map, tx, ty, G.flags);
			const surf = surfaceOf(ch, cellOf(ch).kind);
			const p = project(px, py, cam);
			if (Math.abs(p.x) > limX || Math.abs(p.y) > limY) continue;
			const seed = gx * 13 + gy * 29 + layer * 7;
			if (surf === "cobble") drawFlag(ctx, p.x, p.y, seed, layer === 0 ? 1 : .62);
			else if (surf === "grass") drawTuft(ctx, p.x, p.y, seed);
			else if (surf === "mud") drawClod(ctx, p.x, p.y, seed);
			else if (surf === "water") drawRipple(ctx, p.x, p.y, seed);
			else if (surf === "wood") drawPlank(ctx, p.x, p.y, seed);
			else if (layer === 0) drawBrick(ctx, p.x, p.y, seed);
		}
	}
}
function drawFlag(ctx, x, y, seed, scale) {
	const n = 4 + Math.floor(grain(seed, 1) * 3);
	const rot = grain(seed, 2) * Math.PI;
	const rx = (11 + grain(seed, 3) * 14) * scale;
	const ry = rx * (.42 + grain(seed, 4) * .28);
	const shade = grain(seed, 5);
	const poly = (ox, oy) => {
		ctx.beginPath();
		for (let i = 0; i < n; i++) {
			const a = rot + i / n * Math.PI * 2;
			const wob = .72 + grain(seed + i * 17, 8) * .5;
			const px = x + ox + Math.cos(a) * rx * wob;
			const py = y + oy + Math.sin(a) * ry * wob;
			if (i === 0) ctx.moveTo(px, py);
			else ctx.lineTo(px, py);
		}
		ctx.closePath();
	};
	ctx.fillStyle = "#241c16";
	poly(1.4, 1.8);
	ctx.fill();
	ctx.fillStyle = shade > .78 ? "#e7dcc8" : shade > .5 ? "#cbb89a" : shade > .25 ? "#a89074" : "#7d6a58";
	poly(0, 0);
	ctx.fill();
	ctx.globalAlpha = .28;
	ctx.fillStyle = "#fff4e2";
	ctx.beginPath();
	ctx.ellipse(x - rx * .18, y - ry * .22, Math.max(2, rx * .28), Math.max(1.4, ry * .22), rot, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalAlpha = 1;
}
function drawTuft(ctx, x, y, seed) {
	ctx.save();
	ctx.globalAlpha = .7;
	ctx.fillStyle = grain(seed, 2) > .55 ? "#2c541f" : "#6d9a42";
	ctx.beginPath();
	ctx.ellipse(x, y, 12 + grain(seed, 3) * 8, 5 + grain(seed, 4) * 3, grain(seed, 5) * 2, 0, Math.PI * 2);
	ctx.fill();
	ctx.globalAlpha = 1;
	const blades = 4 + Math.floor(grain(seed, 6) * 4);
	ctx.lineWidth = 1.3;
	for (let i = 0; i < blades; i++) {
		const ox = (grain(seed, i + 10) - .5) * 14;
		const h = 7 + grain(seed, i + 20) * 10;
		ctx.strokeStyle = grain(seed, i + 30) > .45 ? "#d7e48a" : "#214e1c";
		ctx.beginPath();
		ctx.moveTo(x + ox, y + 2);
		ctx.quadraticCurveTo(x + ox + 3, y - h * .45, x + ox - 1.5, y - h);
		ctx.stroke();
	}
	ctx.restore();
}
function drawClod(ctx, x, y, seed) {
	ctx.fillStyle = grain(seed, 1) > .5 ? "#8a6844" : "#3e2c1c";
	ctx.beginPath();
	ctx.ellipse(x, y, 8 + grain(seed, 2) * 10, 4 + grain(seed, 3) * 4, grain(seed, 4) * 3, 0, Math.PI * 2);
	ctx.fill();
	if (grain(seed, 5) > .72) {
		ctx.fillStyle = "rgba(90, 140, 150, 0.45)";
		ctx.beginPath();
		ctx.ellipse(x + 4, y + 1, 5, 2.2, .4, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawRipple(ctx, x, y, seed) {
	ctx.strokeStyle = grain(seed, 1) > .5 ? "rgba(210, 240, 245, 0.45)" : "rgba(18, 50, 70, 0.35)";
	ctx.lineWidth = 1.4;
	ctx.beginPath();
	ctx.ellipse(x, y, 10 + grain(seed, 2) * 8, 3.2, grain(seed, 3), 0, Math.PI * 2);
	ctx.stroke();
}
function drawPlank(ctx, x, y, seed) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(grain(seed, 1) > .5 ? .55 : -.7);
	ctx.fillStyle = grain(seed, 2) > .4 ? "#d7b27a" : "#8a6238";
	ctx.fillRect(-16, -4, 32, 7);
	ctx.fillStyle = "rgba(40, 22, 8, 0.45)";
	ctx.fillRect(-16, 3, 32, 2);
	ctx.restore();
}
function drawBrick(ctx, x, y, seed) {
	ctx.fillStyle = grain(seed, 1) > .5 ? "#7a7168" : "#4a433c";
	ctx.beginPath();
	ctx.ellipse(x, y, 13, 6, grain(seed, 2) * .6, 0, Math.PI * 2);
	ctx.fill();
	ctx.strokeStyle = "rgba(20, 16, 12, 0.55)";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(x - 8, y);
	ctx.lineTo(x + 8, y);
	ctx.stroke();
}
function drawFoeName(ctx, text, x, y, angry) {
	ctx.save();
	ctx.font = "bold 13px Manrope, sans-serif";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.lineJoin = "round";
	ctx.miterLimit = 2;
	ctx.lineWidth = 3.5;
	ctx.strokeStyle = "rgba(6, 4, 4, 0.92)";
	ctx.strokeText(text, x, y);
	ctx.fillStyle = angry ? "#ff5648" : "#f6f1e6";
	ctx.fillText(text, x, y);
	ctx.restore();
}
function paintIsoGround(ctx, x0, y0, x1, y1, cam, viewW, viewH) {
	ctx.save();
	ctx.imageSmoothingEnabled = true;
	for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
		const ch = tileChar(G.map, x, y, G.flags);
		const surf = surfaceOf(ch, cellOf(ch).kind);
		const p00 = project(x * 48, y * 48, cam);
		const p10 = project((x + 1) * 48, y * 48, cam);
		const p11 = project((x + 1) * 48, (y + 1) * 48, cam);
		const p01 = project(x * 48, (y + 1) * 48, cam);
		const cx = (p00.x + p10.x + p11.x + p01.x) / 4;
		const cy = (p00.y + p10.y + p11.y + p01.y) / 4;
		const grow = (p) => ({
			x: cx + (p.x - cx) * 1.06,
			y: cy + (p.y - cy) * 1.06
		});
		const a = grow(p00);
		const b = grow(p10);
		const c = grow(p11);
		const d = grow(p01);
		ctx.beginPath();
		ctx.moveTo(a.x, a.y);
		ctx.lineTo(b.x, b.y);
		ctx.lineTo(c.x, c.y);
		ctx.lineTo(d.x, d.y);
		ctx.closePath();
		ctx.fillStyle = baseColor(surf);
		ctx.fill();
		if (ch === "G" || ch === "F") light(ctx, cx, cy - 8, ch === "F" ? 36 : 18, ch === "F" ? "255,170,80" : "198,161,90");
	}
	paintGroundWear(ctx, cam, viewW, viewH);
	ctx.restore();
}
function drawFlight(ctx, x0, y0, x, y, row) {
	const ang = Math.atan2(y - y0, x - x0);
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(ang);
	ctx.scale(2.35, 2.35);
	if (row === 0) {
		ctx.strokeStyle = "#f3ead6";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(-18, 0);
		ctx.lineTo(4, 0);
		ctx.stroke();
		ctx.fillStyle = "#e7d3a4";
		ctx.beginPath();
		ctx.moveTo(12, 0);
		ctx.lineTo(2, -4);
		ctx.lineTo(2, 4);
		ctx.fill();
		ctx.fillStyle = "#8a6230";
		ctx.fillRect(-18, -1.5, 5, 3);
	} else if (row === 2) {
		ctx.fillStyle = "rgba(150,70,190,0.35)";
		ctx.beginPath();
		ctx.arc(-6, 0, 10, 0, Math.PI * 2);
		ctx.fill();
		ctx.strokeStyle = "#e4c6ff";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc(0, 0, 6, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fillStyle = "#f4e8ff";
		ctx.beginPath();
		ctx.arc(0, 0, 3, 0, Math.PI * 2);
		ctx.fill();
	} else if (row === 3) {
		ctx.strokeStyle = "#b6e38a";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(-14, 0);
		ctx.lineTo(8, 0);
		ctx.stroke();
		ctx.fillStyle = "#6aaa48";
		ctx.beginPath();
		ctx.moveTo(10, 0);
		ctx.lineTo(0, -4);
		ctx.lineTo(0, 4);
		ctx.fill();
	} else {
		ctx.fillStyle = "rgba(255,170,60,0.35)";
		ctx.beginPath();
		ctx.ellipse(-10, 0, 16, 5, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#fff1c2";
		ctx.beginPath();
		ctx.arc(2, 0, 5, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#ffb03a";
		ctx.beginPath();
		ctx.arc(-4, 0, 3, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.restore();
}
function drawActor(ctx, sprite, footX, footY, facing, moving, key, anim, height, swing = "melee") {
	const img = sheets.get(sprite);
	let col = 0;
	let ox = 0;
	let oy = 0;
	let alpha = 1;
	let squash = 1;
	const view = screenFacing(facing, G.viewYaw || 0);
	let row = view === 3 ? 2 : view === 1 || view === 2 ? 1 : 0;
	const flip = view === 2;
	const clock = key === "hero" ? G.walk : G.time * 36;
	if (moving) col = Math.floor(clock / 11) % 4;
	else col = 0;
	if (anim && anim.t < .85) {
		if (anim.kind === "attack" || anim.kind === "cast") {
			const k = Math.min(1, anim.t / .38);
			const lunge = Math.sin(k * Math.PI) * 10;
			const s = spin(anim.dx, anim.dy, G.viewYaw || 0);
			const sx = s.x - s.y;
			const sy = s.x + s.y;
			const mag = Math.hypot(sx, sy) || 1;
			ox = sx / mag * lunge;
			oy = sy / mag * lunge;
		} else if (anim.kind === "hurt" && anim.t < .25) alpha = .7;
		else if (anim.kind === "defend" && anim.t < .4) squash = .9;
		else if (anim.kind === "death") {
			alpha = Math.max(0, 1 - anim.t);
			oy = anim.t * 10;
		}
	}
	ctx.save();
	ctx.globalAlpha = alpha;
	ctx.fillStyle = "rgba(0,0,0,0.4)";
	ctx.beginPath();
	ctx.ellipse(footX, footY - 2, 12, 5, 0, 0, Math.PI * 2);
	ctx.fill();
	const h = (height ?? 61.44) * squash;
	if (img && img.complete && img.naturalWidth) {
		const cw = img.width / 4;
		const ch = img.height / 4;
		const inset = 0;
		const dw = h * (cw / ch);
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";
		ctx.globalAlpha = alpha;
		ctx.globalCompositeOperation = "source-over";
		ctx.save();
		ctx.translate(footX + ox, footY + oy);
		if (flip) ctx.scale(-1, 1);
		ctx.drawImage(img, col * cw + inset, row * ch + inset, cw - 0, ch - 0, -dw / 2, -h, dw, h);
		ctx.restore();
		if (swing === "melee" && anim && (anim.kind === "attack" || anim.kind === "cast") && anim.t < .38) {
			const k = anim.t / .38;
			const mag = Math.hypot(anim.dx, anim.dy) || 1;
			const ux = anim.dx / mag;
			const uy = anim.dy / mag;
			ctx.save();
			ctx.translate(footX + ux * 16, footY - h * .42 + uy * 10);
			ctx.rotate(Math.atan2(uy, ux));
			ctx.globalAlpha = 1 - k;
			ctx.strokeStyle = anim.kind === "cast" ? "#9fd0ff" : "#ffe08a";
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.arc(0, 0, 18 + k * 16, -1.15, 1.15);
			ctx.stroke();
			ctx.fillStyle = anim.kind === "cast" ? "rgba(160,200,255,0.35)" : "rgba(255,200,90,0.4)";
			ctx.beginPath();
			ctx.ellipse(8 + k * 20, 0, 14, 5, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	} else {
		ctx.fillStyle = "#c6a15a";
		ctx.fillRect(footX - 8, footY - 28, 16, 26);
	}
	ctx.restore();
}
function bar(ctx, x, y, ratio, color) {
	const w = 28;
	ctx.fillStyle = "#07080c";
	ctx.fillRect(x - w / 2, y, w, 4);
	ctx.fillStyle = color;
	ctx.fillRect(x - w / 2, y, w * Math.max(0, Math.min(1, ratio)), 4);
}
function EchoApp() {
	const [, setRev] = (0, import_react.useState)(0);
	const [saves, setSaves] = (0, import_react.useState)({
		normal: false,
		hard: false
	});
	const [pick, setPick] = (0, import_react.useState)("archer");
	const [sheet, setSheet] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const canvas = document.getElementById("echo-canvas");
		const stopPaint = canvas ? startPaint(canvas) : () => {};
		const stopIn = bootInput();
		const unsub = subscribe(() => setRev((n) => n + 1));
		setSaves({
			normal: saveExists(false),
			hard: saveExists(true)
		});
		const id = window.setInterval(() => setRev((n) => n + 1), 500);
		return () => {
			stopPaint();
			stopIn();
			unsub();
			window.clearInterval(id);
		};
	}, []);
	const hero = HEROES[pick];
	const L = leader();
	const spot = G.mode === "explore" ? nearbySpot() : null;
	const node = currentNode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden bg-ink text-parchment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			id: "echo-canvas",
			className: "absolute inset-0 h-full w-full touch-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				G.mode === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto absolute inset-0 flex flex-col overflow-y-auto bg-cover bg-center",
					style: { backgroundImage: "linear-gradient(180deg, rgba(7,8,12,.55), rgba(7,8,12,.88)), url(/game/bg/marches.png)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "safe-t px-4 pt-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl tracking-[0.18em] text-brass",
									children: "ECHO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 font-display text-2xl text-parchment",
									children: "Обери свій шлях"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-mist",
									children: "Сіре прикордоння · вісім героїв · одна тріщина"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex gap-3 overflow-x-auto px-4 pb-2",
							children: HERO_ORDER.map((id) => {
								const h = HEROES[id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPick(id),
									className: `w-28 shrink-0 border px-2 py-2 text-center ${id === pick ? "border-brass bg-panel" : "border-line bg-panel/70"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpriteFace, {
										id,
										frame: "mx-auto h-24 w-16"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-display text-sm leading-tight",
										children: h.name
									})]
								}, id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "panel mx-4 mb-4 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpriteFace, {
										id: pick,
										frame: "h-40 w-28 shrink-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "font-display text-3xl leading-none text-brass",
												children: hero.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-mist",
												children: hero.line
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-snug",
												children: hero.blurb
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-1.5",
									children: [
										"Шкода",
										"Виживання",
										"Підтримка",
										"Контроль",
										"Складність"
									].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-[6.5rem_1fr] items-center gap-2 text-xs text-mist",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "meter",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${hero.bars[i] * 10}%` } })
										})]
									}, label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-12 border border-brass bg-brass/15 font-display text-xl tracking-wide",
											onClick: () => beginGame(pick, false),
											children: "Почати гру"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-12 border border-blood/80 text-parchment",
											onClick: () => beginGame(pick, true),
											children: "Хардкор"
										}),
										saves.normal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-12 border border-line",
											onClick: () => loadGame(false),
											children: "Продовжити"
										}),
										saves.hard && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-12 border border-line",
											onClick: () => loadGame(true),
											children: "Продовжити хардкор"
										})
									]
								}),
								G.epitaph && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-blood",
									children: G.epitaph
								})
							]
						})
					]
				}),
				G.mode !== "title" && L && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "safe-t pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-2 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "pointer-events-auto panel flex items-center gap-2 px-2 py-1.5 text-left",
						onClick: () => openPanel("sheet"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/game/portraits/${L.hero}.png`,
							alt: "",
							className: "h-11 w-11 object-cover object-top"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-[7rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg leading-none",
									children: L.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-mist",
									children: [
										G.map.name,
										" · рівень ",
										L.level
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "meter mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
										width: `${L.hp / L.maxHp * 100}%`,
										background: "linear-gradient(90deg,#6a3030,#c45a52)"
									} })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-0.5 text-[10px] text-brass",
									children: [
										"досвід ",
										L.xp,
										"/",
										xpNeed(L.level)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "meter",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
										width: `${Math.min(100, L.xp / Math.max(1, xpNeed(L.level)) * 100)}%`,
										background: "linear-gradient(90deg,#8a6a32,#e2c15a)"
									} })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-auto flex gap-1",
						children: [
							["sheet", "Лист"],
							["journal", "Журнал"],
							["travel", "Марші"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "min-h-11 min-w-11 border border-line bg-panel/90 px-2 text-xs",
							onClick: () => openPanel(id),
							children: label
						}, id))
					})]
				}),
				G.mode !== "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimap, {}),
				G.mode === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraTurn, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto absolute left-2 top-[6.6rem] z-30 flex gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 w-11 border border-brass bg-ink/85 font-display text-lg text-brass",
								onClick: () => addYaw(-.65),
								children: "↺"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 w-11 border border-brass bg-ink/85 font-display text-lg text-brass",
								onClick: () => addYaw(.65),
								children: "↻"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 w-11 border border-line bg-ink/85 text-brass",
								onClick: () => addZoom(.12),
								children: "+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 w-11 border border-line bg-ink/85 text-brass",
								onClick: () => addZoom(-.12),
								children: "−"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Joystick, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "pointer-events-auto absolute left-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass bg-ink/90 font-display text-sm text-brass",
						onPointerDown: (e) => {
							if (spot) return;
							e.currentTarget.setPointerCapture(e.pointerId);
							setAtkHold(true);
							fieldStrike();
						},
						onPointerUp: () => setAtkHold(false),
						onPointerCancel: () => setAtkHold(false),
						onClick: () => {
							if (spot) interact();
						},
						children: spot ? "Дія" : "Удар"
					}),
					spot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none absolute inset-x-0 bottom-24 text-center text-sm text-brass",
						children: [spot.label, " · кнопка Дія або E"]
					}),
					G.map.id === "crypt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none absolute inset-x-0 top-20 text-center text-xs text-mist",
						children: [
							"Дзвони: ",
							bellLabel() || "тиша",
							" ",
							G.flags.bells ? "· двері відкриті" : ""
						]
					}),
					G.map.id === "tract" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none absolute inset-x-0 top-20 text-center text-xs text-mist",
						children: [
							"Шлюзи ",
							G.levers.map((n) => n ? "відкр." : "захр.").join(" · "),
							G.flags.bridge ? " · міст є" : ""
						]
					})
				] }),
				G.mode === "talk" && node && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pointer-events-auto panel safe-b absolute inset-x-2 bottom-2 max-h-[70%] overflow-y-auto p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-brass",
							children: node.speaker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: node.text
						}),
						G.talkExtra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist",
							children: G.talkExtra
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: (node.choices ?? [{
								label: "Далі.",
								end: true
							}]).map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "min-h-11 border border-line px-3 text-left text-sm",
								onClick: () => choose(i),
								children: c.label
							}, i))
						})
					]
				}),
				G.mode === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBar, {}),
				G.mode === "combat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatDock, {}),
				G.mode === "reward" && G.reward && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: G.reward.title,
					onClose: () => closeReward(),
					children: [G.reward.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: l
					}, l)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-3 min-h-11 border border-brass px-3",
						onClick: () => closeReward(),
						children: "Далі"
					})]
				}),
				G.mode === "epilogue" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Межа відлунь",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed",
							children: G.epilogue
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist",
							children: "Герой, речі й професія лишаються. Новий цикл створює інший стан світу."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-3 min-h-11 border border-brass px-3",
							onClick: () => newEcho(),
							children: "Нове відлуння"
						})
					]
				}),
				G.mode === "journal" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Журнал",
					onClose: () => closePanel(),
					children: [
						questView().map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: q.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-mist",
								children: q.text
							})]
						}, q.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Лор"
						}),
						LORE.filter((b) => !b.quest || G.quests[b.quest] != null).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-2 border border-line p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-brass",
								children: b.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-snug",
								children: b.text
							})]
						}, b.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Глави"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-mist",
							children: "Увесь шлях, якщо пройти всі землі, близько 26 годин."
						}),
						CHAPTERS.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-2 border border-line p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-lg",
								children: [
									ch.title,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-mist",
										children: [
											"· ",
											ch.hours,
											" год"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: ch.summary
							})]
						}, ch.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Побічні справи"
						}),
						SIDE_QUESTS.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm text-brass",
								children: q.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-mist",
								children: [
									q.giver,
									". ",
									q.text,
									" Нагорода: ",
									q.reward
								]
							})]
						}, q.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Комплекти"
						}),
						SETS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-brass",
									children: [s.name, "."]
								}),
								" ",
								s.bonus
							]
						}, s.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Марш"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-1 text-xs text-mist",
							children: G.log.slice(0, 8).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l }, i))
						}),
						!!G.flags["road-open"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-3 min-h-11 border border-line px-3",
							onClick: () => openPanel("travel"),
							children: "Марші"
						})
					]
				}),
				G.mode === "travel" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Марші",
					onClose: () => closePanel(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-xs text-mist",
							children: "Сіре прикордоння лишається рукотворним. Далі — зібрані за правилами краї, з тим самим зерном експедиції."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mb-3 min-h-11 border border-brass px-3 text-sm",
							onClick: () => goBeyond(),
							children: "Привал за дзвоном"
						}),
						REGIONS.map((r) => {
							const open = regionUnlocked(r.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "mb-3 border border-line p-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: r.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-mist",
										children: r.blurb
									}),
									open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap gap-2",
										children: [r.id === "grey" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-11 border border-brass px-2 text-sm",
											onClick: () => travelTo("grey", "camp"),
											children: "Вербова варта"
										}) : [
											["camp", "Табір"],
											["wild", "Дике"],
											["job", "Доручення"],
											["lair", "Лігво"]
										].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-11 border border-line px-2 text-sm",
											onClick: () => travelTo(r.id, k),
											children: label
										}, k)), r.id !== "grey" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "min-h-11 border border-brass px-2 text-sm",
											onClick: () => travelStory(r.id),
											children: "Сюжет"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs",
										children: "Ще мовчить."
									})
								]
							}, r.id);
						})
					]
				}),
				G.mode === "shop" && L && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Прилавок",
					onClose: () => closePanel(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								"Монети: ",
								L.gold,
								". Продаж — половина ціни."
							]
						}),
						shopItems().map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between gap-2 border border-line p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-mist",
								children: it.blurb
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "min-h-11 shrink-0 border border-brass px-2 text-sm",
								onClick: () => buy(it.id),
								children: it.price
							})]
						}, it.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-xl",
							children: "Продати зі сумки"
						}),
						L.bag.filter((b) => (itemById(b.id)?.price ?? 0) > 0).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between gap-2 border border-line p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [
									itemById(b.id)?.name,
									" ×",
									b.n
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "min-h-11 border border-brass px-2 text-sm",
								onClick: () => sell(b.id),
								children: Math.max(1, Math.floor((itemById(b.id)?.price ?? 0) / 2))
							})]
						}, b.id))
					]
				}),
				G.mode === "hire" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Дошка найму",
					onClose: () => closePanel(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm",
						children: "До двох найманців. 30 монет. У бою ходиш за кожного."
					}), HERO_ORDER.filter((id) => !G.party.some((p) => p.hero === id)).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mb-2 flex min-h-11 w-full items-center gap-2 border border-line px-2 text-left",
						onClick: () => hire(id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/game/portraits/${id}.png`,
							alt: "",
							className: "h-11 w-9 object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [HEROES[id].name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-mist",
							children: HEROES[id].line
						})] })]
					}, id))]
				}),
				G.mode === "sheet" && L && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Лист героя",
					onClose: () => closePanel(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex gap-2 overflow-x-auto",
						children: G.party.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `min-h-11 border px-2 text-sm ${i === sheet ? "border-brass" : "border-line"}`,
							onClick: () => setSheet(i),
							children: p.name
						}, p.uid))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSheet, { hero: G.party[sheet] ?? L })]
				}),
				G.mode === "path" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Професія",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathPicker, {})
				})
			]
		})]
	});
}
function Minimap() {
	const rows = G.map.rows;
	const H = rows.length;
	const W = rows[0]?.length ?? 1;
	const svgRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const faceRef = (0, import_react.useRef)(null);
	const cells = [];
	for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
		const ch = rows[y]?.[x] ?? "#";
		cells.push({
			x,
			y,
			solid: ch === "#" || ch === "H" || ch === "c" || ch === "T" || ch === "W"
		});
	}
	(0, import_react.useEffect)(() => {
		let id = 0;
		const loop = () => {
			const px = G.x / 48;
			const py = G.y / 48;
			const span = 15;
			svgRef.current?.setAttribute("viewBox", `${px - span} ${py - span} 30 30`);
			const look = lookHeading();
			worldRef.current?.setAttribute("transform", `rotate(${-look * 180 / Math.PI} ${px} ${py})`);
			const rel = (facingHeading(G.facing) - look) * 180 / Math.PI;
			faceRef.current?.setAttribute("transform", `translate(${px} ${py}) rotate(${rel})`);
			id = requestAnimationFrame(loop);
		};
		id = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(id);
	}, [G.map.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute right-2 top-[4.6rem] z-20",
		style: { width: 148 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative border border-brass/50 bg-ink/80 p-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				ref: svgRef,
				viewBox: `0 0 ${W} ${H}`,
				className: "block h-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					ref: worldRef,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: -4,
							y: -4,
							width: W + 8,
							height: H + 8,
							fill: "#1a1612"
						}),
						cells.map((c) => c.solid ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: c.x,
							y: c.y,
							width: 1,
							height: 1,
							fill: "#8d8476"
						}, `${c.x}-${c.y}`)),
						G.map.spots.filter((s) => s.kind === "exit").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: s.x,
							y: s.y,
							width: 1.2,
							height: 1.2,
							fill: "#e2c15a"
						}, s.id)),
						G.folk.map((f) => {
							const hot = questHot(f.ref);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: f.x / 48,
								cy: f.y / 48,
								r: hot ? 1.15 : .65,
								fill: hot ? "#ffe27a" : "#e2c15a"
							}), hot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: f.x / 48,
								y: f.y / 48 + .45,
								textAnchor: "middle",
								fontSize: 1.7,
								fill: "#1a1408",
								children: "!"
							})] }, f.id);
						}),
						G.map.fights.map((f) => {
							const boss = f.id.includes("boss") || f.foes.some((foe) => foe.id === "bellringer" || foe.id === "fenmother" || foe.id === "cantor");
							const cx = f.x + f.w / 2;
							const cy = f.y + f.h / 2;
							if (G.cleared.includes(f.id)) return null;
							return boss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: cx,
								y: cy + .4,
								textAnchor: "middle",
								fontSize: 2.2,
								fill: "#f4f0e6",
								children: "☠"
							}, f.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx,
								cy,
								r: .85,
								fill: "#d24a42"
							}, f.id);
						}),
						G.mobs.filter((m) => m.hp > 0).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: m.x / 48,
							cy: m.y / 48,
							r: .7,
							fill: "#ff5a4a"
						}, m.uid))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					ref: faceRef,
					points: "0,-1.35 0.72,0.95 -0.72,0.95",
					fill: "#f7f3ea",
					stroke: "#c6a15a",
					strokeWidth: .2
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-0.5 -translate-x-1/2 text-[10px] leading-none text-brass",
				children: "▲"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-center text-[10px] text-mist",
			children: "верх — куди дивишся"
		})]
	});
}
function Sigil({ kind }) {
	const c = kind === "heal" ? "#7d9a6a" : kind === "buff" ? "#c6a15a" : kind === "debuff" ? "#c98b8b" : "#e6dcc8";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 22 22",
		"aria-hidden": "true",
		children: [
			kind === "heal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11 2.5c2.2 3.2 6.2 4.2 6.2 9.2a6.2 6.2 0 1 1-12.4 0c0-5 4-6 6.2-9.2z",
				fill: c
			}),
			kind === "buff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11 1.8 19 5.4v6.2c0 4.8-3.4 7.4-8 8.8-4.6-1.4-8-4-8-8.8V5.4z",
				fill: c
			}),
			kind === "debuff" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "11",
				cy: "11",
				rx: "8",
				ry: "5",
				fill: "none",
				stroke: c,
				strokeWidth: "1.6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "11",
				cy: "11",
				r: "2.2",
				fill: c
			})] }),
			(kind === "dmg" || kind === "attack") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3.5 18.5 15.5 3.5l3 1.2L6.2 20z",
				fill: c
			})
		]
	});
}
function effectMark(me, power, stat, kind, status, self) {
	if (self) return self;
	if (!me) return "—";
	if (kind === "heal") return `+${blowDamage(power, stat)}`;
	if (kind === "dmg" || kind === "attack") {
		const n = blowDamage(power, stat);
		return status ? `${n} · ${status}` : `${n} шкоди`;
	}
	return status || "ефект";
}
function SkillIcon({ name, kind, cost, mark, on, dim, onClick, skillId, onDown, onUp, round }) {
	const icon = skillId ? SKILL_ICON[skillId] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: dim && !onDown,
		onClick,
		onPointerDown: (e) => {
			if (!onDown) return;
			e.currentTarget.setPointerCapture(e.pointerId);
			onDown();
		},
		onPointerUp: () => onUp?.(),
		onPointerCancel: () => onUp?.(),
		className: round ? `relative flex h-[3.2rem] w-[3.2rem] items-center justify-center overflow-hidden rounded-full border-2 border-brass bg-ink/90 disabled:opacity-40` : `relative flex h-full min-h-[4.7rem] w-full min-w-[3.35rem] flex-col items-center border px-0.5 pt-1 ${on ? "border-brass bg-brass/20" : "border-line bg-black/70"} disabled:opacity-35`,
		children: [
			!round && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-0.5 top-0 z-10 text-[10px] text-brass",
				children: cost
			}),
			icon !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: `/game/skills/${icon}.png`,
				alt: "",
				className: round ? "h-full w-full object-cover" : "h-8 w-8 object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigil, { kind }),
			!round && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 w-full truncate text-center text-[10px] leading-none",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: round ? "pointer-events-none absolute bottom-0.5 left-1/2 z-10 -translate-x-1/2 bg-ink/75 px-1 text-[9px] leading-none text-brass" : "text-[10px] leading-tight text-brass",
				children: mark
			})
		]
	});
}
var SKILL_ICON = {
	"so-fire": 4,
	"so-ice": 5,
	"so-bolt": 6,
	"so-storm": 7,
	"so-spark": 1,
	"so-ward": 15,
	"he-bind": 8,
	"he-root": 9,
	"he-clean": 10,
	"he-garden": 16,
	"he-thorn": 11,
	"he-pollen": 17,
	"ar-quick": 0,
	"ar-burst": 18,
	"ar-trap": 2,
	"ar-volley": 3,
	"ar-oil": 19,
	"ar-follow": 20,
	"va-bite": 12,
	"va-lance": 21,
	"va-mist": 22,
	"va-feast": 23,
	"va-chain": 24,
	"va-still": 25,
	"ba-cleave": 13,
	"ba-rage": 26,
	"ba-crush": 27,
	"ba-shout": 28,
	"ba-leap": 29,
	"ba-hide": 30,
	"as-back": 32,
	"as-trap": 33,
	"as-smoke": 34,
	"as-mark": 35,
	"as-fan": 36,
	"as-wait": 37,
	"wi-hex": 38,
	"wi-vuln": 39,
	"wi-coven": 40,
	"wi-crow": 41,
	"wi-fear": 42,
	"wi-veil": 43,
	"pa-cover": 44,
	"pa-smite": 45,
	"pa-aura": 46,
	"pa-lay": 47,
	"pa-wall": 31,
	"pa-light": 14
};
function FieldBar() {
	const L = G.party[0];
	if (!L) return null;
	const skills = [
		0,
		1,
		2,
		3
	].map((i) => skillById(L, L.loadout[i] ?? ""));
	const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [picked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "pointer-events-none absolute bottom-[14rem] left-[6rem] z-40 bg-ink/80 px-2 text-[11px] text-brass",
		children: picked.name
	}), [
		4,
		36,
		68,
		98
	].map((deg, i) => {
		const rad = deg * Math.PI / 180;
		const sk = skills[i];
		const style = {
			left: `calc(0.75rem + 2rem + ${Math.cos(rad) * 132}px - 1.6rem)`,
			bottom: `calc(max(1rem, env(safe-area-inset-bottom)) + 2rem + ${Math.sin(rad) * 132}px - 1.6rem)`
		};
		if (!sk) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style,
			className: "pointer-events-none absolute z-40 h-[3.2rem] w-[3.2rem] rounded-full border border-dashed border-brass/40"
		}, i);
		const cd = G.skillCd[sk.id] ?? 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style,
			className: "absolute z-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, {
				round: true,
				skillId: sk.id,
				name: sk.name,
				kind: sk.kind,
				cost: String(sk.focus),
				mark: cd > 0 ? `${cd.toFixed(1)}` : sk.kind === "heal" ? `+${blowDamage(sk.power, L.stats[sk.stat])}` : sk.power ? `${blowDamage(sk.power, L.stats[sk.stat])}` : statusName(sk.status?.id) || "ефект",
				on: false,
				dim: cd > 0 || L.focus < sk.focus,
				onClick: () => fieldCast(sk.id)
			})
		}, sk.id);
	})] });
}
function CombatDock() {
	const me = currentPlanner();
	const hero = G.party.find((p) => p.uid === me?.heroUid) ?? null;
	const foes = G.units.filter((u) => u.side === "foe" && u.hp > 0);
	foes.find((u) => u.uid === me?.plan?.target) ?? foes[0];
	const skills = (hero?.loadout ?? []).map((id) => skillById(hero, id)).filter((sk) => !!sk);
	const caption = skills.find((sk) => sk.id === me?.plan?.skill)?.blurb ?? (me?.plan?.action === "guard" ? "Закриваєшся цього ходу." : me?.plan?.action === "attack" ? "Звичайний удар по обраному." : "Обери дію.");
	if (G.phase === "resolve") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "pointer-events-none absolute inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 bg-ink/80 px-3 py-2 text-center font-display text-lg text-brass",
		children: G.lastRoll || "Хід..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pointer-events-auto absolute inset-x-0 bottom-0 z-40 border-t border-brass/50 bg-ink/92 px-2 pt-1.5 pb-[max(0.35rem,env(safe-area-inset-bottom))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center gap-2 text-[11px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-mist",
						children: ["Р.", G.round]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-parchment",
						children: caption
					}),
					G.round === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-10 shrink-0 border border-line px-2 text-mist",
						onClick: () => retreat(),
						children: "Відступ"
					})
				]
			}),
			foes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 flex gap-1",
				children: foes.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `min-h-10 flex-1 truncate border px-1 text-[11px] ${me?.plan?.target === u.uid ? "border-brass text-brass" : "border-line"}`,
					onClick: () => setTarget(u.uid),
					children: [
						u.name,
						" ",
						u.hp
					]
				}, u.uid))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, {
						name: me?.ranged ? "Постріл" : "Удар",
						kind: "dmg",
						cost: "0",
						mark: effectMark(me, me?.dmg ?? 0, me ? me.stats[me.primary] : 0, "attack"),
						on: me?.plan?.action === "attack",
						onClick: () => aimAttack()
					}),
					skills.map((sk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, {
						name: sk.name,
						kind: sk.kind,
						cost: String(sk.focus),
						mark: effectMark(me, sk.power, me?.stats[sk.stat] ?? 0, sk.kind, sk.status ? statusName(sk.status.id) : void 0, sk.target !== "enemy" && sk.kind !== "heal" && sk.kind !== "dmg" ? statusName(sk.status?.id) || "собі" : void 0),
						on: me?.plan?.skill === sk.id,
						dim: !!me && me.focus < sk.focus,
						onClick: () => aimSkill(sk.id)
					}, sk.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillIcon, {
						name: "Щит",
						kind: "buff",
						cost: "0",
						mark: "захист",
						on: me?.plan?.action === "guard",
						onClick: () => planGuard()
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-1.5 min-h-12 w-full border border-brass bg-brass/25 font-display text-lg",
				onClick: () => {
					if (!allReady()) confirmActor();
					executeRound();
				},
				children: "Виконати"
			})
		]
	});
}
function Panel({ title, children, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pointer-events-auto panel safe-b absolute inset-x-2 top-16 bottom-2 overflow-y-auto p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-brass",
				children: title
			}), onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "min-h-11 min-w-11 border border-line",
				onClick: onClose,
				children: "Закрити"
			})]
		}), children]
	});
}
function HeroSheet({ hero }) {
	const pending = nextGate(hero);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-mist",
			children: [
				"Рівень ",
				hero.level,
				" · досвід ",
				hero.xp,
				"/",
				xpNeed(hero.level),
				" · монети ",
				hero.gold,
				hero.merc ? " · найманець" : ""
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-xs text-mist",
			children: [
				"SP ",
				hero.focus,
				"/",
				hero.maxFocus
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-end gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: `/game/portraits/${hero.hero}.png`,
				alt: "",
				className: "h-28 w-20 object-cover object-top"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid flex-1 grid-cols-1 gap-2",
				children: [
					["weapon", "Зброя"],
					["armor", "Броня"],
					["trinket", "Дрібничка"]
				].map(([slot, label]) => {
					const it = itemById(hero[slot]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-brass/40 px-2 py-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-wide text-mist",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: it?.name ?? "порожньо"
							}),
							it?.set && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] text-brass",
								children: ["комплект ", it.set]
							})
						]
					}, slot);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-2 gap-2",
			children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border border-line px-2 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm",
					children: [
						STAT_LABEL[s],
						" ",
						hero.stats[s]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: hero.unspent <= 0,
					className: "min-h-11 min-w-11 border border-brass disabled:opacity-30",
					onClick: () => alloc(hero.uid, s),
					children: "+"
				})]
			}, s))
		}),
		hero.unspent > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "mt-2 min-h-11 border border-brass px-3 text-sm",
			onClick: () => allocRec(hero.uid),
			children: [
				"Рекомендовано (",
				hero.unspent,
				")"
			]
		}),
		pending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-brass",
			children: [
				"Відкрита професія на ",
				pending,
				". Вона чекає в окремому вікні після бою."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-4 font-display text-xl",
			children: "Панель умінь"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-mist",
			children: "Натисни вміння, щоб поставити його на дугу. Активні рівно чотири. Цифра — слот, SP — ціна, сила — наскільки боляче."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 flex flex-col gap-1",
			children: hero.known.map((id) => {
				const sk = skillById(hero, id);
				const on = hero.loadout.includes(id);
				const slot = hero.loadout.indexOf(id) + 1;
				const aim = sk?.target === "enemy" ? "ворог" : sk?.target === "self" ? "на себе" : "союзник";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: `flex min-h-11 items-center gap-2 border px-2 text-left text-sm ${on ? "border-brass bg-brass/10" : "border-line"}`,
					onClick: () => setLoadout(hero.uid, id),
					children: [SKILL_ICON[id] !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/game/skills/${SKILL_ICON[id]}.png`,
						alt: "",
						className: "h-9 w-9 object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						on ? `${slot}. ` : "",
						sk?.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-xs text-mist",
							children: [
								"SP ",
								sk?.focus,
								" · ",
								aim,
								sk?.range ? ` · ${sk.range} клітин` : "",
								sk?.power ? ` · сила ${sk.power}` : "",
								sk?.status ? " · є ефект" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-parchment/80",
							children: sk?.blurb
						})
					] })]
				}, id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-4 font-display text-xl",
			children: "Сумка"
		}),
		hero.bag.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex flex-wrap items-center gap-2 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					itemById(b.id)?.name,
					" ×",
					b.n
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "min-h-11 border border-line px-2",
					onClick: () => equip(hero.uid, b.id),
					children: "Вдягнути"
				}),
				(itemById(b.id)?.price ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "min-h-11 border border-line px-2",
					onClick: () => sell(b.id),
					children: "Продати"
				}),
				itemById(b.id)?.slot === "consumable" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "min-h-11 border border-line px-2",
					onClick: () => drink(hero.uid, b.id),
					children: "Випити"
				}),
				G.party.length > 1 && G.party.filter((p) => p.uid !== hero.uid).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "min-h-11 border border-line px-2",
					onClick: () => giveItem(hero.uid, p.uid, b.id),
					children: ["→ ", p.name]
				}, p.uid))
			]
		}, b.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-2",
			children: [0, 1].map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-xs",
				children: [
					"Швидке ",
					slot + 1,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "mt-1 block min-h-11 border border-line bg-panel px-1",
						value: hero.quick[slot],
						onChange: (e) => setQuick(hero.uid, slot, e.target.value),
						children: hero.bag.filter((b) => itemById(b.id)?.slot === "consumable").map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: b.id,
							children: itemById(b.id)?.name
						}, b.id))
					})
				]
			}, slot))
		}),
		hero.merc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mt-3 min-h-11 border border-blood px-3",
			onClick: () => dismiss(hero.uid),
			children: "Відпустити"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mt-3 min-h-11 border border-line px-3",
			onClick: () => {
				persist();
			},
			children: "Записати"
		})
	] });
}
function PathPicker() {
	const h = G.party.find((p) => nextGate(p));
	if (!h) return null;
	const at = nextGate(h);
	if (!at) return null;
	const parent = gateParent(h, at);
	const opts = pathChoices(h.hero, parent, at);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm",
		children: [
			h.name,
			", рівень ",
			at,
			". Обери одну стежку. Фінал на 85 займе слот уміння."
		]
	}), opts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "mt-2 block min-h-11 w-full border border-brass px-3 text-left",
		onClick: () => pickPath(p.id),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl",
			children: p.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs text-mist",
			children: p.text
		})]
	}, p.id))] });
}
function SpriteFace({ id, frame = "h-28 w-20" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden bg-[#4a4034] ${frame}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: `/game/sprites/${id}/sheet-transparent.png?v=14`,
			alt: "",
			className: "absolute left-0 top-0 h-[400%] w-[400%] max-w-none"
		})
	});
}
function CameraTurn() {
	const origin = (0, import_react.useRef)(null);
	const pts = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const pinch = (0, import_react.useRef)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-label": "Поворот камери",
		className: "pointer-events-auto absolute left-0 right-0 top-0 z-10 h-[50%] touch-none",
		style: { touchAction: "none" },
		onContextMenu: (e) => e.preventDefault(),
		onPointerDown: (e) => {
			pts.current.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY
			});
			if (e.pointerType === "mouse" && e.button === 0) holdClient(e.clientX, e.clientY, true);
			if (e.pointerType === "mouse" && e.button !== 0 && e.button !== 2) return;
			origin.current = {
				x: e.clientX,
				y: e.clientY,
				last: e.clientX,
				moved: 0
			};
			e.currentTarget.setPointerCapture(e.pointerId);
		},
		onPointerMove: (e) => {
			if (!pts.current.has(e.pointerId) && !origin.current) return;
			pts.current.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY
			});
			const fingers = [...pts.current.values()];
			if (fingers.length >= 2) {
				const d = Math.hypot(fingers[0].x - fingers[1].x, fingers[0].y - fingers[1].y);
				if (pinch.current) {
					const diff = d - pinch.current;
					if (Math.abs(diff) > 10) {
						addZoom(diff > 0 ? .08 : -.08);
						pinch.current = d;
					}
				} else pinch.current = d;
				return;
			}
			const o = origin.current;
			if (!o) return;
			const dx = e.clientX - o.last;
			o.last = e.clientX;
			o.moved += Math.abs(dx) + Math.abs(e.clientY - o.y) * .15;
			if ((e.buttons === 2 || e.pointerType !== "mouse") && dx) addYaw(dx * .012);
		},
		onPointerUp: (e) => {
			pts.current.delete(e.pointerId);
			if (pts.current.size < 2) pinch.current = 0;
			const o = origin.current;
			origin.current = null;
			if (e.pointerType === "mouse") holdClient(e.clientX, e.clientY, false);
			if (!o) return;
			if (o.moved < 12 && Math.abs(e.clientY - o.y) < 14) tapClient(e.clientX, e.clientY);
		},
		onPointerCancel: (e) => {
			pts.current.delete(e.pointerId);
			pinch.current = 0;
			origin.current = null;
		}
	});
}
function Joystick() {
	const knob = (0, import_react.useRef)(null);
	const origin = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => setStick(0, 0), []);
	const R = 64;
	const move = (cx, cy) => {
		const o = origin.current;
		if (!o) return;
		let dx = cx - o.x;
		let dy = cy - o.y;
		const mag = Math.hypot(dx, dy) || 1;
		const lim = Math.min(R, mag);
		dx = dx / mag * lim;
		dy = dy / mag * lim;
		if (knob.current) {
			knob.current.style.opacity = "1";
			knob.current.style.left = `${o.x + dx}px`;
			knob.current.style.top = `${o.y + dy}px`;
		}
		const nx = dx / R;
		const ny = dy / R;
		if (Math.hypot(nx, ny) < .16) setStick(0, 0);
		else setStick(nx, ny);
	};
	const end = (e) => {
		const o = origin.current;
		const tap = !!o && Math.hypot(e.clientX - o.x, e.clientY - o.y) < 14;
		origin.current = null;
		if (knob.current) knob.current.style.opacity = "0";
		setStick(0, 0);
		if (tap) tapClient(e.clientX, e.clientY);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-label": "Джойстик",
		className: "pointer-events-auto absolute bottom-0 left-[15.6rem] z-20 h-[46%] touch-none max-[720px]:left-[42%]",
		style: { right: "0.4rem" },
		onPointerDown: (e) => {
			if (e.button !== 0 && e.pointerType === "mouse") return;
			e.preventDefault();
			e.currentTarget.setPointerCapture(e.pointerId);
			origin.current = {
				x: e.clientX,
				y: e.clientY
			};
			move(e.clientX, e.clientY);
		},
		onPointerMove: (e) => {
			if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
			move(e.clientX, e.clientY);
		},
		onPointerUp: end,
		onPointerCancel: end
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: knob,
		className: "pointer-events-none fixed z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/80 bg-brass/25 opacity-0"
	})] });
}
var SplitComponent = EchoApp;
//#endregion
export { SplitComponent as component };
