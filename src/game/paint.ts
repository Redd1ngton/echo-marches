import { cellOf, tileChar } from "./maps";
import { HEROES } from "./content";
import { G, TILE, addYaw, addZoom, approachSpot, attackReach, clickWorld, fieldStrike, lookHeading, mobUnder, questHot, setAtkHold, spotTaken, step } from "./logic";

const SPRITES = [
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
  "fx",
];

const tiles: HTMLImageElement[] = [];
const sheets = new Map<string, HTMLImageElement>();
const scenery = new Map<string, HTMLImageElement>();
const plates = new Map<string, HTMLImageElement>();
const cobble = load("/game/tiles/cobble.jpg?v=3");
const PLATES = ["willow", "tract", "crypt"];
const PROP_IDS = ["willow", "cottage", "lantern", "marsh", "pier", "bell", "wall"];

function load(src: string) {
  if (typeof Image === "undefined") return { complete: false, naturalWidth: 0 } as HTMLImageElement;
  const img = new Image();
  img.src = src;
  return img;
}

let booted = false;
function bootImages() {
  if (booted) return;
  booted = true;
  for (let i = 0; i < 16; i++) tiles[i] = load(`/game/tiles/${i}.png`);
  for (const id of SPRITES) sheets.set(id, load(`/game/sprites/${id}/sheet-transparent.png?v=14`));
  for (const id of ["willow", "cottage", "lantern", "marsh", "pier", "bell", "wall", "timber", "timber-b", "plaza-tree"]) scenery.set(id, load(`/game/props/${id}.png?v=5`));
  for (const id of PLATES) plates.set(id, load(`/game/bg/${id}-plate.jpg?v=5`));
}

type Prop = { y: number; draw: (ctx: CanvasRenderingContext2D) => void };

let viewBox = { w: 1, h: 1, left: 0, top: 0 };

export function holdClient(cx: number, cy: number, down: boolean) {
  if (!down) {
    setAtkHold(false);
    return;
  }
  const p = worldFromScreen(cx - viewBox.left, cy - viewBox.top, viewBox.w, viewBox.h);
  if (!mobUnder(p.x, p.y)) return;
  clickWorld(p.x, p.y);
  setAtkHold(true);
}

export function tapClient(cx: number, cy: number) {
  const sx = cx - viewBox.left;
  const sy = cy - viewBox.top;
  const id = spotUnderScreen(sx, sy, viewBox.w, viewBox.h);
  if (id) {
    approachSpot(id);
    return;
  }
  const p = worldFromScreen(sx, sy, viewBox.w, viewBox.h);
  clickWorld(p.x, p.y);
}

export function startPaint(canvas: HTMLCanvasElement) {
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

  let down: { x: number; y: number; shift: boolean } | null = null;
  let rot: { x: number; turned: boolean } | null = null;
  const onDown = (e: PointerEvent) => {
    if (e.button === 2) {
      rot = { x: e.clientX, turned: false };
      e.preventDefault();
      return;
    }
    down = { x: e.clientX, y: e.clientY, shift: e.shiftKey };
    if (e.button === 0) {
      const rect = canvas.getBoundingClientRect();
      const p = worldFromScreen(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
      if (mobUnder(p.x, p.y)) {
        clickWorld(p.x, p.y);
        setAtkHold(true);
      } else if (e.shiftKey) {
        setAtkHold(true);
        fieldStrike(false, true);
      }
    }
  };
  const onMove = (e: PointerEvent) => {
    if (!rot || e.buttons !== 2) return;
    const dx = e.clientX - rot.x;
    rot.x = e.clientX;
    if (dx) addYaw(dx * 0.011);
  };
  const onUp = (e: PointerEvent) => {
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
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    const id = spotUnderScreen(sx, sy, rect.width, rect.height);
    if (id && !shifted) {
      approachSpot(id);
      return;
    }
    const p = worldFromScreen(sx, sy, rect.width, rect.height);
    clickWorld(p.x, p.y);
    if (shifted && !G.lockTarget) fieldStrike(false, true);
  };
  const eatMenu = (e: Event) => e.preventDefault();
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    addZoom(e.deltaY > 0 ? -0.08 : 0.08);
  };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("contextmenu", eatMenu);
  canvas.addEventListener("wheel", onWheel, { passive: false });

  const frame = (now: number) => {
    if (!alive) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    step(dt);
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    const rect = canvas.getBoundingClientRect();
    viewBox = { w, h, left: rect.left, top: rect.top };
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

function camera(viewW: number, viewH: number) {
  const phone = Math.min(viewW, viewH) < 720;
  const tilesAcross = phone ? 12 : 16;
  const zoom = (viewW / (tilesAcross * ISO_W)) * (G.viewZoom || G.zoom || 1);
  return { x: G.x, y: G.y, zoom };
}

const ISO_W = 64;
const ISO_H = 32;

function spin(dx: number, dy: number, yaw: number) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: dx * c - dy * s, y: dx * s + dy * c };
}

function unspin(dx: number, dy: number, yaw: number) {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: dx * c + dy * s, y: -dx * s + dy * c };
}

function project(wx: number, wy: number, cam: { x: number; y: number }) {
  const s = spin(wx - cam.x, wy - cam.y, G.viewYaw || 0);
  return {
    x: (s.x - s.y) * (ISO_W / 2 / TILE),
    y: (s.x + s.y) * (ISO_H / 2 / TILE),
  };
}

function spotUnderScreen(sx: number, sy: number, viewW: number, viewH: number) {
  const cam = camera(viewW, viewH);
  let best = "";
  let bd = 46;
  for (const s of G.map.spots) {
    if (s.kind === "fight" || spotTaken(s) || G.folk.some((f) => f.spot === s.id)) continue;
    const p = project((s.x + 0.5) * TILE, (s.y + 0.92) * TILE, cam);
    const zx = viewW / 2 + p.x * cam.zoom;
    const zy = viewH / 2 + p.y * cam.zoom;
    const d = Math.min(Math.hypot(zx - sx, zy - 28 * cam.zoom - sy), Math.hypot(zx - sx, zy - sy));
    if (d < bd) {
      bd = d;
      best = s.id;
    }
  }
  return best;
}

function drawStrikeZone(ctx: CanvasRenderingContext2D, at: (wx: number, wy: number) => { x: number; y: number }, reach: number) {
  const p = at(G.x, G.y);
  const rx = reach * (ISO_W / 2 / TILE) * Math.SQRT2;
  const ry = reach * (ISO_H / 2 / TILE) * Math.SQRT2;
  const hot = G.mobs.some((m) => m.hp > 0 && Math.hypot(m.x - G.x, m.y - G.y) <= reach);
  const pulse = 0.82 + Math.sin(G.time * 3.2) * 0.18;
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(p.x, p.y + 2, Math.max(8, rx), Math.max(4, ry), 0, 0, Math.PI * 2);
  if (rx < 480) {
    ctx.fillStyle = hot ? "rgba(226,193,90,0.13)" : "rgba(198,161,90,0.07)";
    ctx.fill();
  }
  ctx.strokeStyle = hot ? `rgba(242,212,138,${0.45 + pulse * 0.5})` : "rgba(210,186,130,0.72)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.stroke();
  ctx.restore();
}

export function worldFromScreen(sx: number, sy: number, viewW: number, viewH: number) {
  const cam = camera(viewW, viewH);
  const px = (sx - viewW / 2) / cam.zoom;
  const py = (sy - viewH / 2) / cam.zoom;
  const dx = (px / (ISO_W / 2) + py / (ISO_H / 2)) * 0.5 * TILE;
  const dy = (py / (ISO_H / 2) - px / (ISO_W / 2)) * 0.5 * TILE;
  const w = unspin(dx, dy, G.viewYaw || 0);
  return { x: cam.x + w.x, y: cam.y + w.y };
}

function groundTint(ch: string, kind: string, x: number, y: number) {
  void x;
  void y;
  if (kind === "deep" || ch === "W" || ch === "x") return "#3a7e98";
  if (kind === "shallow" || ch === "~") return "#5ea8a4";
  if (kind === "bridge" || ch === "=") return "#c4ae84";
  if (kind === "grass" || ch === '"') return "#6eae46";
  if (kind === "mud" || ch === ",") return "#8a7044";
  if (kind === "tree") return "#5f9340";
  if (kind === "house" || kind === "wall" || ch === "#") return "#6a6258";
  if (G.map.id === "crypt" || G.map.id === "nave") return "#5c554c";
  if (G.map.id === "willow") return "#cbbba4";
  return "#b7a684";
}

function drawPlate(ctx: CanvasRenderingContext2D, plate: HTMLImageElement, cam: { x: number; y: number; zoom: number }, viewW: number, viewH: number) {
  const halfW = viewW / (2 * cam.zoom);
  const halfH = viewH / (2 * cam.zoom);
  const mapW = Math.max(1, (G.map.rows[0]?.length ?? 1) * TILE);
  const mapH = Math.max(1, G.map.rows.length * TILE);
  const aspect = plate.naturalWidth / Math.max(1, plate.naturalHeight);
  const needW = mapW + halfW * 2;
  const needH = mapH + halfH * 2;
  let dw = needW;
  let dh = dw / aspect;
  if (dh < needH) {
    dh = needH;
    dw = dh * aspect;
  }
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(plate, mapW / 2 - dw / 2, mapH / 2 - dh / 2, dw, dh);
}

function drawCombatStage(ctx: CanvasRenderingContext2D, viewW: number, viewH: number) {
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
  const pos = new Map<string, { x: number; y: number }>();
  const tall = Math.min(200, viewH * 0.22);
  foes.forEach((u, i) => {
    const x = viewW * ((i + 1) / (foes.length + 1));
    pos.set(u.uid, { x, y: top + tall * 0.92 });
  });
  allies.forEach((u, i) => {
    const x = viewW * ((i + 1) / (allies.length + 1));
    pos.set(u.uid, { x, y: bottom - 8 });
  });
  const target = G.units.find((u) => u.uid === G.units.filter((a) => a.side === "ally" && a.hp > 0)[G.planner]?.plan?.target);
  for (const u of G.units) {
    const p = pos.get(u.uid);
    if (!p) continue;
    const glow = ctx.createRadialGradient(p.x, p.y - tall * 0.4, 8, p.x, p.y - tall * 0.35, tall * 0.7);
    glow.addColorStop(0, u.side === "ally" ? "rgba(198,161,90,0.28)" : "rgba(143,61,58,0.32)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(p.x, p.y - tall * 0.35, tall * 0.7, 0, Math.PI * 2);
    ctx.fill();
    const a = G.anim[u.uid];
    let oy = 0;
    if (a && (a.kind === "attack" || a.kind === "cast") && a.t < 0.5) {
      oy = Math.sin(Math.min(1, a.t / 0.42) * Math.PI) * (u.side === "ally" ? -34 : 34);
    }
    if (target?.uid === u.uid) {
      ctx.strokeStyle = "rgba(198,161,90,0.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(p.x, p.y + 6, tall * 0.28, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    const pose = a && (a.kind === "hurt" || a.kind === "death" || a.kind === "defend") ? a : undefined;
    drawActor(ctx, u.sprite, p.x, p.y + oy, 0, false, u.uid, pose, tall);
    if (a && (a.kind === "attack" || a.kind === "cast") && a.t < 0.55) {
      const hue = a.kind === "cast" ? "125, 196, 154" : "230, 214, 170";
      const r = 14 + a.t * 50;
      ctx.strokeStyle = `rgba(${hue},${1 - a.t})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(p.x, p.y - tall * 0.35 + (u.side === "ally" ? -20 : 24), r, 0, Math.PI * 2);
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
    let from = { x: viewW * 0.3, y: viewH * 0.4 };
    let to = { x: viewW * 0.7, y: viewH * 0.4 };
    let bd = 1e12;
    for (const u of G.units) {
      const p = pos.get(u.uid);
      if (!p) continue;
      const d = ((u.x + 0.5) * TILE - s.x) ** 2 + (u.y * TILE - s.y) ** 2;
      if (d < bd) {
        bd = d;
        from = p;
      }
    }
    bd = 1e12;
    for (const u of G.units) {
      const p = pos.get(u.uid);
      if (!p) continue;
      const d = ((u.x + 0.5) * TILE - s.tx) ** 2 + (u.y * TILE - s.ty) ** 2;
      if (d < bd) {
        bd = d;
        to = p;
      }
    }
    const k = Math.min(1, s.t / s.dur);
    const x = from.x + (to.x - from.x) * k;
    const y = from.y - tall * 0.45 + (to.y - tall * 0.45 - (from.y - tall * 0.45)) * k;
    ctx.fillStyle = "rgba(230,214,170,0.9)";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const f of G.floats) {
    let at = { x: viewW / 2, y: top + 40 };
    let bd = 1e12;
    for (const u of G.units) {
      const p = pos.get(u.uid);
      if (!p) continue;
      const d = ((u.x + 0.5) * TILE - f.x) ** 2 + (u.y * TILE - f.y) ** 2;
      if (d < bd) {
        bd = d;
        at = p;
      }
    }
    ctx.globalAlpha = 1 - f.t / 0.9;
    ctx.fillStyle = f.color;
    ctx.font = "bold 18px Manrope, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(f.text, at.x, at.y - tall * 0.72 - f.t * 24);
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

function draw(ctx: CanvasRenderingContext2D, viewW: number, viewH: number) {
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
  const at = (wx: number, wy: number) => project(wx, wy, cam);
  ctx.save();
  ctx.translate(viewW / 2, viewH / 2);
  ctx.scale(cam.zoom, cam.zoom);
  const span = Math.ceil(Math.max(viewW, viewH) / (cam.zoom * (ISO_H / 2))) + 6;
  const cx = Math.floor(cam.x / TILE);
  const cy = Math.floor(cam.y / TILE);
  const x0 = Math.max(0, cx - span);
  const y0 = Math.max(0, cy - span);
  const x1 = Math.min(G.map.rows[0]?.length ?? 0, cx + span);
  const y1 = Math.min(G.map.rows.length, cy + span);
  const props: Prop[] = [];
  ensureStamps();
  paintIsoGround(ctx, x0, y0, x1, y1, cam, viewW, viewH);
  if (G.mode === "explore" && G.party[0]) drawStrikeZone(ctx, at, attackReach());
  for (const s of stamps) {
    if (s.footX < x0 * TILE - 240 || s.footX > x1 * TILE + 240) continue;
    if (s.sort < y0 - 3 || s.sort > y1 + 4) continue;
    props.push({
      y: s.footX + s.footY,
      draw: (c) => {
        const p = at(s.footX, s.footY);
        drawProp(c, s.id, p.x, p.y, s.h * (ISO_H / TILE), s.flip);
      },
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
        },
      });
      G.party.slice(1).forEach((m, i) => {
        const back = G.facing === 0 ? -1 : G.facing === 3 ? 1 : 0;
        const side = G.facing === 1 ? 1 : G.facing === 2 ? -1 : (i % 2 === 0 ? -1 : 1);
        const wx = G.x + side * 22;
        const wy = G.y + back * 18 - 8;
        props.push({
          y: wx + wy,
          draw: (c) => {
            const p = at(wx, wy);
            drawActor(c, m.hero, p.x, p.y, G.facing, G.moving, m.uid, undefined, 74);
          },
        });
      });
    }
    for (const s of G.map.spots) {
      if (s.kind === "fight" || spotTaken(s)) continue;
      if (G.folk.some((f) => f.spot === s.id)) continue;
      const fx = (s.x + 0.5) * TILE;
      const fy = (s.y + 0.92) * TILE;
      props.push({
        y: fx + fy,
        draw: (c) => {
          const p = at(fx, fy);
          drawTag(c, s.label, p.x, p.y - 28);
        },
      });
    }
    for (const f of G.folk) {
      props.push({
        y: f.x + f.y,
        draw: (c) => {
          const p = at(f.x, f.y);
          drawActor(c, f.sprite, p.x, p.y, f.facing, f.moving, f.id, undefined, 74);
          drawTag(c, questHot(f.ref) ? `${f.label} !` : f.label, p.x, p.y - 70);
        },
      });
    }
    for (const f of G.map.fights) {
      if (G.cleared.includes(f.id) || G.mobs.some((m) => m.fight === f.id && m.hp > 0)) continue;
      let n = 0;
      for (const foe of f.foes) {
        for (let i = 0; i < foe.n; i++) {
          const x = f.x + 2 + (n % 3);
          const y = f.y + 1 + Math.floor(n / 3);
          n += 1;
          const fx = (x + 0.5) * TILE;
          const fy = (y + 0.92) * TILE;
          const sprite = foe.id === "wraith" ? "wraith" : foe.id === "bellringer" ? "bellringer" : "drowned";
          props.push({
            y: fx + fy,
            draw: (c) => {
              const p = at(fx, fy);
              drawActor(c, sprite, p.x, p.y, 0, false, `${f.id}-${n}`, undefined, 72);
              drawTag(c, foe.name ?? "Гість", p.x, p.y - 68);
            },
          });
        }
      }
    }
    for (const m of G.mobs) {
      if (m.hp <= 0) continue;
      props.push({
        y: m.x + m.y,
        draw: (c) => {
          const p = at(m.x, m.y);
          const walking = m.hold || Math.hypot(G.x - m.x, G.y - m.y) > 28;
          drawActor(c, m.sprite, p.x, p.y, m.facing, walking, m.uid, G.anim[m.uid], m.role === "boss" ? 120 : 104, m.range > 80 ? "ranged" : "melee", m.hue ?? 0);
          if (G.target === m.uid) {
            const pulse = 1 + Math.sin(G.time * 7) * 0.08;
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
        },
      });
    }
  }

  props.sort((a, b) => a.y - b.y);
  for (const p of props) p.draw(ctx);

  for (const s of G.shots) {
    const k = Math.min(1, s.t / s.dur);
    const arrow = s.row === 0;
    for (let i = 3; i >= 1; i--) {
      const kk = Math.max(0, k - i * 0.05);
      const ghost = at(s.x + (s.tx - s.x) * kk, s.y + (s.ty - s.y) * kk);
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = s.row === 2 ? "#e4c6ff" : s.row === 3 ? "#b6e38a" : "#f3ead6";
      ctx.beginPath();
      ctx.ellipse(ghost.x, ghost.y, (arrow ? 3.4 : 8) - i * 0.5, arrow ? 1.1 : 3.2, 0, 0, Math.PI * 2);
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

  const g = ctx.createRadialGradient(viewW / 2, viewH / 2, viewH * 0.55, viewW / 2, viewH / 2, viewH * 0.95);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(1, "rgba(0,0,0,0.12)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, viewW, viewH);
  if (G.mode === "explore") {
    drawCompass(ctx, viewW);
    drawBearings(ctx, viewW, viewH, cam);
  }
}

function drawCompass(ctx: CanvasRenderingContext2D, viewW: number) {
  const head = (lookHeading() * 180) / Math.PI;
  const cx = viewW / 2;
  const y = 86;
  const w = Math.min(210, viewW * 0.5);
  const rose: [number, string][] = [
    [0, "Пн"],
    [45, "ПнСх"],
    [90, "Сх"],
    [135, "ПдСх"],
    [180, "Пд"],
    [225, "ПдЗх"],
    [270, "Зх"],
    [315, "ПнЗх"],
  ];
  ctx.save();
  ctx.beginPath();
  ctx.rect(cx - w / 2, y - 13, w, 26);
  ctx.clip();
  ctx.fillStyle = "rgba(7,8,12,0.78)";
  ctx.fillRect(cx - w / 2, y - 13, w, 26);
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
  ctx.strokeRect(cx - w / 2 + 0.5, y - 12.5, w - 1, 25);
  ctx.fillStyle = "#f2d48a";
  ctx.beginPath();
  ctx.moveTo(cx, y - 15);
  ctx.lineTo(cx - 5, y - 21);
  ctx.lineTo(cx + 5, y - 21);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawBearings(ctx: CanvasRenderingContext2D, viewW: number, viewH: number, cam: { x: number; y: number; zoom: number }) {
  const marks: { x: number; y: number; color: string; label: string }[] = [];
  for (const f of G.folk) {
    if (!questHot(f.ref)) continue;
    marks.push({ x: f.x, y: f.y, color: "#ffe27a", label: "!" });
  }
  for (const s of G.map.spots) {
    if (s.kind !== "exit") continue;
    marks.push({ x: (s.x + 0.5) * TILE, y: (s.y + 0.5) * TILE, color: "#e2c15a", label: s.label });
  }
  for (const f of G.map.fights) {
    if (G.cleared.includes(f.id)) continue;
    const boss = f.id.includes("boss") || f.foes.some((foe) => foe.id === "bellringer" || foe.id === "fenmother" || foe.id === "cantor");
    if (!boss) continue;
    marks.push({ x: (f.x + f.w / 2) * TILE, y: (f.y + f.h / 2) * TILE, color: "#f4f0e6", label: "Босс" });
  }
  const marginX = 30;
  const top = 92;
  const bottom = Math.max(130, viewH * 0.24);
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

function reach(x: number, y: number, move: number, ignore: string) {
  const out = [{ x, y }];
  const seen = new Set([`${x},${y}`]);
  let edge = [{ x, y, d: 0 }];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const;
  while (edge.length) {
    const nxt: { x: number; y: number; d: number }[] = [];
    for (const c of edge) {
      if (c.d >= move) continue;
      for (const [dx, dy] of dirs) {
        const nx = c.x + dx;
        const ny = c.y + dy;
        const k = `${nx},${ny}`;
        if (seen.has(k)) continue;
        if (cellOf(tileChar(G.map, nx, ny, G.flags)).solid) continue;
        if (G.units.some((u) => u.hp > 0 && u.uid !== ignore && u.x === nx && u.y === ny)) continue;
        seen.add(k);
        out.push({ x: nx, y: ny });
        nxt.push({ x: nx, y: ny, d: c.d + 1 });
      }
    }
    edge = nxt;
  }
  return out;
}

function drawCobble(ctx: CanvasRenderingContext2D, tx: number, ty: number, dark: boolean) {
  const x = tx * TILE;
  const y = ty * TILE;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, TILE, TILE);
  ctx.clip();
  if (cobble.complete && cobble.naturalWidth) {
    const n = 5;
    const cw = cobble.naturalWidth / n;
    const sx = ((tx * 3 + ty) % n) * cw;
    const sy = ((ty * 2 + tx * 5) % n) * cw;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(cobble, sx, sy, cw, cw, x, y, TILE, TILE);
  } else {
    ctx.fillStyle = "#c8bfb0";
    ctx.fillRect(x, y, TILE, TILE);
  }
  if (dark) {
    ctx.fillStyle = "rgba(40, 36, 32, 0.28)";
    ctx.fillRect(x, y, TILE, TILE);
  }
  ctx.restore();
}

function grit(ctx: CanvasRenderingContext2D, tx: number, ty: number) {
  const n = (tx * 17 + ty * 53) % 9;
  if (n > 5) return;
  const px = tx * TILE + 6 + ((tx * 13 + ty * 7) % 34);
  const py = ty * TILE + 8 + ((ty * 11 + tx * 5) % 28);
  ctx.fillStyle = n % 2 === 0 ? "rgba(255,248,230,0.16)" : "rgba(40,32,24,0.18)";
  ctx.beginPath();
  ctx.ellipse(px, py, n % 3 === 0 ? 2.2 : 1.1, 0.8, 0, 0, Math.PI * 2);
  ctx.fill();
}

function blitTile(ctx: CanvasRenderingContext2D, index: number, tx: number, ty: number) {
  const img = tiles[index];
  const pad = 3;
  const x = tx * TILE - pad;
  const y = ty * TILE - pad;
  if (img && img.complete && img.naturalWidth) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, x, y, TILE + pad * 2, TILE + pad * 2);
  } else {
    ctx.fillStyle = "#6a6458";
    ctx.fillRect(tx * TILE, ty * TILE, TILE, TILE);
  }
}

function sheen(ctx: CanvasRenderingContext2D, tx: number, ty: number, deep: boolean) {
  if (G.reduced) return;
  const x = tx * TILE;
  const y = ty * TILE;
  const yy = y + ((ty * 19 + G.time * 22) % TILE);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, TILE, TILE);
  ctx.clip();
  ctx.globalAlpha = deep ? 0.22 : 0.32;
  ctx.strokeStyle = "rgba(186, 214, 222, 0.85)";
  ctx.beginPath();
  ctx.moveTo(x, yy);
  ctx.lineTo(x + TILE, yy + Math.sin(G.time * 1.4 + tx) * 2);
  ctx.stroke();
  ctx.restore();
}

type Stamp = { id: string; footX: number; footY: number; h: number; sort: number; flip?: boolean };
let stamps: Stamp[] = [];
let stampKey = "";

function ensureStamps() {
  const key = `${G.map.id}|${G.flags.bridge ?? 0}|${G.flags.bells ?? 0}|${G.map.rows.length}|${G.map.rows[0]?.length ?? 0}`;
  if (key === stampKey) return;
  stampKey = key;
  const H = G.map.rows.length;
  const W = G.map.rows[0]?.length ?? 0;
  const out: Stamp[] = [];
  const seen = new Set<string>();
  const chAt = (x: number, y: number) => tileChar(G.map, x, y, G.flags);
  const solid = (x: number, y: number) => cellOf(chAt(x, y)).solid;
  const crypt = G.map.id === "crypt";
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (chAt(x, y) !== "H" || seen.has(`${x},${y}`)) continue;
      const q: [number, number][] = [[x, y]];
      seen.add(`${x},${y}`);
      let i = 0;
      let x0 = x;
      let x1 = x;
      let y0 = y;
      let y1 = y;
      while (i < q.length) {
        const [cx, cy] = q[i++]!;
        x0 = Math.min(x0, cx);
        x1 = Math.max(x1, cx);
        y0 = Math.min(y0, cy);
        y1 = Math.max(y1, cy);
        for (const [dx, dy] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ] as const) {
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
        footX: ((x0 + x1 + 1) / 2) * TILE,
        footY: (y1 + 1) * TILE - 2,
        h: Math.max(TILE * 2.8, bh * TILE * 1.25, bw * TILE * 0.9),
        sort: y1 + 0.96,
      });
    }
  }
  if (G.map.id === "willow") {
    for (let i = out.length - 1; i >= 0; i--) if (out[i]?.id === "cottage") out.splice(i, 1);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        if (chAt(x, y) !== "H" || x % 3 !== 1) continue;
        const southOpen = chAt(x, y + 1) !== "H" && !solid(x, y + 1);
        const northOpen = chAt(x, y - 1) !== "H" && !solid(x, y - 1);
        if (southOpen) {
          out.push({ id: x % 6 === 1 ? "timber-b" : "timber", footX: (x + 0.5) * TILE, footY: (y + 1) * TILE + 2, h: TILE * 3.4, sort: y + 0.98, flip: x % 6 === 4 });
        } else if (northOpen) {
          out.push({ id: x % 6 === 1 ? "timber-b" : "timber", footX: (x + 0.5) * TILE, footY: (y + 3.05) * TILE, h: TILE * 3.15, sort: y + 2.9, flip: x % 6 === 4 });
        }
      }
    }
  }
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const ch = chAt(x, y);
      const fx = (x + 0.5) * TILE;
      const fy = (y + 1) * TILE;
      if (ch === "T") {
        const marsh = G.map.id === "tract" || (G.map.id !== "willow" && (x + y) % 3 === 0);
        out.push({ id: G.map.id === "willow" ? "plaza-tree" : marsh ? "marsh" : "willow", footX: fx, footY: fy, h: TILE * (G.map.id === "willow" ? 2.7 : marsh ? 2.55 : 3.2), sort: y + 0.94 });
      } else if (ch === "F") {
        out.push({ id: "lantern", footX: fx, footY: fy - 2, h: TILE * 1.75, sort: y + 0.72 });
      } else if (ch === "B") {
        out.push({ id: "bell", footX: fx, footY: fy - 6, h: TILE * 2, sort: y + 0.6 });
      } else if (ch === "L") {
        out.push({ id: "lantern", footX: fx, footY: fy, h: TILE * 1.4, sort: y + 0.82 });
      } else if (ch === "D" && solid(x, y)) {
        out.push({ id: "pier", footX: fx, footY: fy, h: TILE * 2.3, sort: y + 0.9 });
      } else if (ch === "#" && x % 2 === 0 && !solid(x, y + 1)) {
        out.push({ id: crypt ? "pier" : "wall", footX: fx, footY: fy, h: crypt ? TILE * 2.1 : TILE * 1.55, sort: y + 0.9 });
      }
    }
  }
  stamps = out;
}

function drawProp(ctx: CanvasRenderingContext2D, id: string, footX: number, footY: number, h: number, flip?: boolean) {
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

function drawTag(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
  ctx.save();
  ctx.font = "bold 11px Manrope, sans-serif";
  const w = Math.min(150, ctx.measureText(text).width + 10);
  const h = 15;
  ctx.fillStyle = "rgba(255, 250, 240, 0.92)";
  ctx.fillRect(x - w / 2, y - h, w, h);
  ctx.strokeStyle = "rgba(48, 32, 18, 0.55)";
  ctx.strokeRect(x - w / 2 + 0.5, y - h + 0.5, w - 1, h - 1);
  ctx.fillStyle = "#24180f";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y - h / 2);
  ctx.restore();
}

function nearbyMark(x: number, y: number) {
  const t = { x: Math.floor(G.x / TILE), y: Math.floor(G.y / TILE) };
  return Math.max(Math.abs(x - t.x), Math.abs(y - t.y)) <= 1;
}

function drawMarker(ctx: CanvasRenderingContext2D, x: number, y: number, hot: boolean) {
  const pulse = G.reduced ? 0.65 : 0.45 + Math.sin(G.time * 2.6 + x * 0.02) * 0.28;
  ctx.save();
  ctx.fillStyle = "rgba(232, 206, 140, 0.22)";
  ctx.beginPath();
  ctx.arc(x, y, (hot ? 14 : 9) + pulse * 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = hot ? 0.95 : 0.55 + pulse * 0.3;
  ctx.fillStyle = hot ? "#f3e2b0" : "#d7c08a";
  ctx.beginPath();
  ctx.arc(x, y, hot ? 4.5 : 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function screenFacing(facing: number, yaw: number) {
  const vec = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
  ][facing] ?? [0, 1];
  const s = spin(vec[0]!, vec[1]!, yaw);
  const dirs = [
    [0, 1],
    [-1, 0],
    [1, 0],
    [0, -1],
  ];
  let best = 0;
  let score = -9;
  for (let i = 0; i < dirs.length; i++) {
    const d = s.x * dirs[i]![0]! + s.y * dirs[i]![1]!;
    if (d > score) {
      score = d;
      best = i;
    }
  }
  return best;
}

function light(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rgb: string) {
  const g = ctx.createRadialGradient(x, y, 2, x, y, r);
  g.addColorStop(0, `rgba(${rgb},0.28)`);
  g.addColorStop(1, `rgba(${rgb},0)`);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function grain(x: number, y: number) {
  let n = (x * 374761393 + y * 668265263) | 0;
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

function surfaceOf(ch: string, kind: string) {
  if (kind === "deep" || kind === "shallow" || ch === "W" || ch === "x" || ch === "~") return "water";
  if (kind === "bridge" || ch === "=") return "wood";
  if (kind === "grass" || kind === "moss" || ch === '"') return "grass";
  if (kind === "mud" || ch === ",") return "mud";
  if (kind === "house" || kind === "wall" || kind === "tree" || ch === "#" || ch === "H" || ch === "T") return "wall";
  return "cobble";
}

function baseColor(surf: string) {
  if (surf === "water") return "#2f6d84";
  if (surf === "wood") return "#8d6840";
  if (surf === "grass") return "#3f6b2e";
  if (surf === "mud") return "#5c4328";
  if (surf === "wall") return "#5e564e";
  return "#3e352e";
}

function paintGroundWear(
  ctx: CanvasRenderingContext2D,
  cam: { x: number; y: number; zoom: number },
  viewW: number,
  viewH: number,
) {
  const limX = viewW / (2 * cam.zoom) + 56;
  const limY = viewH / (2 * cam.zoom) + 56;
  const reach = Math.max(limX / 0.5, limY / 0.26);
  const mapW = G.map.rows[0]?.length ?? 0;
  const mapH = G.map.rows.length;
  for (const layer of [0, 1]) {
    const step = layer === 0 ? 46 : 27;
    const ox = layer === 0 ? 0 : 18;
    const oy = layer === 0 ? 0 : 11;
    const x0 = Math.floor((cam.x - reach - ox) / step) * step;
    const y0 = Math.floor((cam.y - reach - oy) / step) * step;
    for (let wy = y0; wy < cam.y + reach; wy += step) {
      for (let wx = x0; wx < cam.x + reach; wx += step) {
        const gx = Math.floor((wx + ox) / step);
        const gy = Math.floor((wy + oy) / step);
        const jx = (grain(gx, gy + layer * 9) - 0.5) * step * 0.82;
        const jy = (grain(gy + 3, gx + layer * 4) - 0.5) * step * 0.82;
        const px = wx + ox + jx;
        const py = wy + oy + jy;
        const tx = Math.floor(px / TILE);
        const ty = Math.floor(py / TILE);
        if (tx < 0 || ty < 0 || tx >= mapW || ty >= mapH) continue;
        const ch = tileChar(G.map, tx, ty, G.flags);
        const surf = surfaceOf(ch, cellOf(ch).kind);
        const p = project(px, py, cam);
        if (Math.abs(p.x) > limX || Math.abs(p.y) > limY) continue;
        const seed = gx * 13 + gy * 29 + layer * 7;
        if (surf === "cobble") drawFlag(ctx, p.x, p.y, seed, layer === 0 ? 1 : 0.62);
        else if (surf === "grass") drawTuft(ctx, p.x, p.y, seed);
        else if (surf === "mud") drawClod(ctx, p.x, p.y, seed);
        else if (surf === "water") drawRipple(ctx, p.x, p.y, seed);
        else if (surf === "wood") drawPlank(ctx, p.x, p.y, seed);
        else if (layer === 0) drawBrick(ctx, p.x, p.y, seed);
      }
    }
  }
}

function drawFlag(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number, scale: number) {
  const n = 4 + Math.floor(grain(seed, 1) * 3);
  const rot = grain(seed, 2) * Math.PI;
  const rx = (11 + grain(seed, 3) * 14) * scale;
  const ry = rx * (0.42 + grain(seed, 4) * 0.28);
  const shade = grain(seed, 5);
  const poly = (ox: number, oy: number) => {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = rot + (i / n) * Math.PI * 2;
      const wob = 0.72 + grain(seed + i * 17, 8) * 0.5;
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
  ctx.fillStyle = shade > 0.78 ? "#e7dcc8" : shade > 0.5 ? "#cbb89a" : shade > 0.25 ? "#a89074" : "#7d6a58";
  poly(0, 0);
  ctx.fill();
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = "#fff4e2";
  ctx.beginPath();
  ctx.ellipse(x - rx * 0.18, y - ry * 0.22, Math.max(2, rx * 0.28), Math.max(1.4, ry * 0.22), rot, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawTuft(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number) {
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = grain(seed, 2) > 0.55 ? "#2c541f" : "#6d9a42";
  ctx.beginPath();
  ctx.ellipse(x, y, 12 + grain(seed, 3) * 8, 5 + grain(seed, 4) * 3, grain(seed, 5) * 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  const blades = 4 + Math.floor(grain(seed, 6) * 4);
  ctx.lineWidth = 1.3;
  for (let i = 0; i < blades; i++) {
    const ox = (grain(seed, i + 10) - 0.5) * 14;
    const h = 7 + grain(seed, i + 20) * 10;
    ctx.strokeStyle = grain(seed, i + 30) > 0.45 ? "#d7e48a" : "#214e1c";
    ctx.beginPath();
    ctx.moveTo(x + ox, y + 2);
    ctx.quadraticCurveTo(x + ox + 3, y - h * 0.45, x + ox - 1.5, y - h);
    ctx.stroke();
  }
  ctx.restore();
}

function drawClod(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number) {
  ctx.fillStyle = grain(seed, 1) > 0.5 ? "#8a6844" : "#3e2c1c";
  ctx.beginPath();
  ctx.ellipse(x, y, 8 + grain(seed, 2) * 10, 4 + grain(seed, 3) * 4, grain(seed, 4) * 3, 0, Math.PI * 2);
  ctx.fill();
  if (grain(seed, 5) > 0.72) {
    ctx.fillStyle = "rgba(90, 140, 150, 0.45)";
    ctx.beginPath();
    ctx.ellipse(x + 4, y + 1, 5, 2.2, 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawRipple(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number) {
  ctx.strokeStyle = grain(seed, 1) > 0.5 ? "rgba(210, 240, 245, 0.45)" : "rgba(18, 50, 70, 0.35)";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.ellipse(x, y, 10 + grain(seed, 2) * 8, 3.2, grain(seed, 3), 0, Math.PI * 2);
  ctx.stroke();
}

function drawPlank(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(grain(seed, 1) > 0.5 ? 0.55 : -0.7);
  ctx.fillStyle = grain(seed, 2) > 0.4 ? "#d7b27a" : "#8a6238";
  ctx.fillRect(-16, -4, 32, 7);
  ctx.fillStyle = "rgba(40, 22, 8, 0.45)";
  ctx.fillRect(-16, 3, 32, 2);
  ctx.restore();
}

function drawBrick(ctx: CanvasRenderingContext2D, x: number, y: number, seed: number) {
  ctx.fillStyle = grain(seed, 1) > 0.5 ? "#7a7168" : "#4a433c";
  ctx.beginPath();
  ctx.ellipse(x, y, 13, 6, grain(seed, 2) * 0.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(20, 16, 12, 0.55)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x - 8, y);
  ctx.lineTo(x + 8, y);
  ctx.stroke();
}

function drawFoeName(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, angry: boolean) {
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


function paintIsoGround(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  cam: { x: number; y: number; zoom: number },
  viewW: number,
  viewH: number,
) {
  void viewW;
  void viewH;
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const yaw = G.viewYaw || 0;
  const co = Math.cos(yaw);
  const si = Math.sin(yaw);
  const kx = ISO_W / 2 / TILE;
  const ky = ISO_H / 2 / TILE;
  const a = (co - si) * kx;
  const b = (co + si) * ky;
  const c = -(si + co) * kx;
  const d = (co - si) * ky;
  ctx.transform(a, b, c, d, -a * cam.x - c * cam.y, -b * cam.x - d * cam.y);
  const cols = G.map.rows[0]?.length ?? 1;
  const rowsN = G.map.rows.length;
  const pat = cobblePattern(ctx);
  ctx.fillStyle = pat ?? "#8a7764";
  ctx.fillRect(-2400, -2400, cols * TILE + 4800, rowsN * TILE + 4800);
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const ch = tileChar(G.map, x, y, G.flags);
      const wash = groundWash(surfaceOf(ch, cellOf(ch).kind));
      if (!wash) continue;
      ctx.fillStyle = wash;
      ctx.fillRect(x * TILE, y * TILE, TILE + 0.6, TILE + 0.6);
    }
  }
  ctx.restore();
  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      const ch = tileChar(G.map, x, y, G.flags);
      if (ch !== "G" && ch !== "F") continue;
      const p = project((x + 0.5) * TILE, (y + 0.4) * TILE, cam);
      light(ctx, p.x, p.y, ch === "F" ? 36 : 18, ch === "F" ? "255,170,80" : "198,161,90");
    }
  }
}

let cobblePat: CanvasPattern | null = null;
function cobblePattern(ctx: CanvasRenderingContext2D) {
  if (cobblePat) return cobblePat;
  if (!cobble.complete || cobble.naturalWidth < 8) return null;
  const src = document.createElement("canvas");
  const w = Math.max(64, Math.round(cobble.naturalWidth * 0.22));
  const h = Math.max(64, Math.round(cobble.naturalHeight * 0.22));
  src.width = w;
  src.height = h;
  const g = src.getContext("2d");
  if (!g) return null;
  g.imageSmoothingEnabled = true;
  g.imageSmoothingQuality = "high";
  g.drawImage(cobble, 0, 0, w, h);
  cobblePat = ctx.createPattern(src, "repeat");
  return cobblePat;
}

function groundWash(surf: string) {
  if (surf === "water") return "rgba(42, 104, 124, 0.78)";
  if (surf === "wood") return "rgba(92, 64, 36, 0.7)";
  if (surf === "grass") return "rgba(58, 104, 42, 0.5)";
  if (surf === "mud") return "rgba(86, 62, 32, 0.46)";
  if (surf === "wall") return "rgba(36, 32, 28, 0.22)";
  return "";
}

function drawFlight(ctx: CanvasRenderingContext2D, x0: number, y0: number, x: number, y: number, row: number) {
  const ang = Math.atan2(y - y0, x - x0);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(ang);
  const arrow = row === 0;
  ctx.scale(arrow ? 1 : 2.35, arrow ? 1 : 2.35);
  if (row === 0) {
    ctx.strokeStyle = "#f3ead6";
    ctx.lineWidth = 1.15;
    ctx.beginPath();
    ctx.moveTo(-9, 0);
    ctx.lineTo(2, 0);
    ctx.stroke();
    ctx.fillStyle = "#e7d3a4";
    ctx.beginPath();
    ctx.moveTo(6, 0);
    ctx.lineTo(1.5, -1.7);
    ctx.lineTo(1.5, 1.7);
    ctx.fill();
    ctx.fillStyle = "#8a6230";
    ctx.fillRect(-9, -0.9, 2.4, 1.8);
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

function drawActor(
  ctx: CanvasRenderingContext2D,
  sprite: string,
  footX: number,
  footY: number,
  facing: number,
  moving: boolean,
  key: string,
  anim?: { kind: string; t: number; dx: number; dy: number },
  height?: number,
  swing: "melee" | "ranged" = "melee",
  hue = 0,
) {
  const img = sheets.get(sprite);
  let col = 0;
  let ox = 0;
  let oy = 0;
  let alpha = 1;
  let squash = 1;
  const view = screenFacing(facing, G.viewYaw || 0);
  const side = view === 1 || view === 2;
  let row = view === 3 ? 2 : side ? 1 : 0;
  const flip = view === 2;
  const clock = key === "hero" ? G.walk : G.time * 36;
  if (moving) col = Math.floor(clock / 11) % 4;
  else col = 0;
  if (anim && anim.t < 0.85) {
    if (anim.kind === "attack" || anim.kind === "cast") {
      const k = Math.min(1, anim.t / 0.38);
      const lunge = Math.sin(k * Math.PI) * 10;
      const s = spin(anim.dx, anim.dy, G.viewYaw || 0);
      const sx = s.x - s.y;
      const sy = s.x + s.y;
      const mag = Math.hypot(sx, sy) || 1;
      ox = (sx / mag) * lunge;
      oy = (sy / mag) * lunge;
    } else if (anim.kind === "hurt" && anim.t < 0.25) {
      alpha = 0.7;
    } else if (anim.kind === "defend" && anim.t < 0.4) squash = 0.9;
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
  const h = (height ?? TILE * 1.28) * squash;
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
    if (hue) ctx.filter = `hue-rotate(${hue}deg) saturate(1.45) brightness(1.05)`;
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(img, col * cw + inset, row * ch + inset, cw - inset * 2, ch - inset * 2, -dw / 2, -h, dw, h);
    ctx.restore();
    if (swing === "melee" && anim && (anim.kind === "attack" || anim.kind === "cast") && anim.t < 0.38) {
      const k = anim.t / 0.38;
      const mag = Math.hypot(anim.dx, anim.dy) || 1;
      const ux = anim.dx / mag;
      const uy = anim.dy / mag;
      ctx.save();
      ctx.translate(footX + ux * 16, footY - h * 0.42 + uy * 10);
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
  void key;
}

function drawCell(ctx: CanvasRenderingContext2D, img: HTMLImageElement | undefined, col: number, row: number, x: number, y: number, size: number) {
  if (!img || !img.complete || !img.naturalWidth) return;
  const cw = img.width / 4;
  const ch = img.height / 4;
  ctx.drawImage(img, col * cw, row * ch, cw, ch, x - size / 2, y - size / 2, size, size);
}

function bar(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number, color: string) {
  const w = 28;
  ctx.fillStyle = "#07080c";
  ctx.fillRect(x - w / 2, y, w, 4);
  ctx.fillStyle = color;
  ctx.fillRect(x - w / 2, y, w * Math.max(0, Math.min(1, ratio)), 4);
}

function weather(ctx: CanvasRenderingContext2D, cx: number, cy: number, w: number, h: number) {
  ctx.save();
  const kind = G.map.weather;
  if (kind === "fog") ctx.fillStyle = "rgba(186, 192, 196, 0.16)";
  else if (kind === "ash") ctx.fillStyle = "rgba(90, 36, 18, 0.14)";
  else ctx.fillStyle = "rgba(18, 28, 38, 0.08)";
  ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
  const n = kind === "fog" ? 16 : 42;
  for (let i = 0; i < n; i++) {
    const px = cx - w / 2 + ((i * 97 + G.time * (kind === "ash" ? 18 : kind === "fog" ? 10 : 90)) % w);
    const py = cy - h / 2 + ((i * 53 + G.time * (kind === "fog" ? 14 : 150)) % h);
    if (kind === "rain") {
      ctx.strokeStyle = "rgba(196, 210, 220, 0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px - 4, py + 14);
      ctx.stroke();
    } else if (kind === "ash") {
      ctx.fillStyle = "rgba(190, 100, 48, 0.5)";
      ctx.fillRect(px, py, 2, 2);
    } else {
      ctx.fillStyle = "rgba(230, 232, 234, 0.16)";
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}
