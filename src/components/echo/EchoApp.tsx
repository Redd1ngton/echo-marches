import { useEffect, useRef, useState, type ReactNode } from "react";
import { HEROES, HERO_ORDER, REGIONS, STATS, STAT_LABEL, itemById, pathChoices, type HeroId, type Stat } from "@/game/content";
import { CHAPTERS, LORE, SETS, SIDE_QUESTS } from "@/game/saga";
import {
  G,
  aimAttack,
  aimSkill,
  allReady,
  alloc,
  allocRec,
  allies,
  beginGame,
  blowDamage,
  bellLabel,
  bootInput,
  buy,
  choose,
  closePanel,
  closeReward,
  confirmActor,
  currentNode,
  currentPlanner,
  dismiss,
  drink,
  equip,
  executeRound,
  enterPit,
  fieldCast,
  fieldStrike,
  gateParent,
  giveItem,
  goBeyond,
  hire,
  interact,
  leader,
  loadGame,
  nearbySpot,
  newEcho,
  nextGate,
  openPanel,
  persist,
  addYaw,
  addZoom,
  facingHeading,
  lookHeading,
  pickPath,
  planGuard,
  planItem,
  planWait,
  questHot,
  questView,
  regionUnlocked,
  retreat,
  saveExists,
  setLoadout,
  xpNeed,
  setQuick,
  setStick,
  setAtkHold,
  setTarget,
  sell,
  shopItems,
  skillById,
  statusName,
  subscribe,
  travelStory,
  travelTo,
  type Hero,
  type Unit,
} from "@/game/logic";
import { holdClient, startPaint, tapClient } from "@/game/paint";

export function EchoApp() {
  const [, setRev] = useState(0);
  const [saves, setSaves] = useState({ normal: false, hard: false });
  const [pick, setPick] = useState<HeroId>("archer");
  const [sheet, setSheet] = useState(0);
  const [full, setFull] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("echo-canvas") as HTMLCanvasElement | null;
    const stopPaint = canvas ? startPaint(canvas) : () => {};
    const stopIn = bootInput();
    const unsub = subscribe(() => setRev((n) => n + 1));
    setSaves({ normal: saveExists(false), hard: saveExists(true) });
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

  return (
    <div id="echo-root" className={`relative h-full w-full overflow-hidden bg-ink text-parchment ${full ? "fixed inset-0 z-[100] h-[100dvh] w-screen" : ""}`}>
      <canvas id="echo-canvas" className="absolute inset-0 h-full w-full touch-none" />
      <div className="pointer-events-none absolute inset-0">
        {G.mode === "title" && (
          <div
            className="pointer-events-auto absolute inset-0 flex flex-col overflow-y-auto bg-cover bg-center"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(7,8,12,.55), rgba(7,8,12,.88)), url(/game/bg/marches.png)" }}
          >
            <header className="safe-t px-4 pt-6 text-center">
              <p className="font-display text-4xl tracking-[0.18em] text-brass">ECHO</p>
              <h1 className="mt-1 font-display text-2xl text-parchment">Обери свій шлях</h1>
              <p className="text-xs tracking-wide text-mist">Сіре прикордоння · вісім героїв · одна тріщина</p>
            </header>
            <div className="mt-4 flex gap-3 overflow-x-auto px-4 pb-2">
              {HERO_ORDER.map((id) => {
                const h = HEROES[id];
                const on = id === pick;
                return (
                  <button
                    key={id}
                    onClick={() => setPick(id)}
                    className={`w-28 shrink-0 border px-2 py-2 text-center ${on ? "border-brass bg-panel" : "border-line bg-panel/70"}`}
                  >
                    <SpriteFace id={id} frame="mx-auto h-24 w-16" />
                    <span className="mt-1 block font-display text-sm leading-tight">{h.name}</span>
                  </button>
                );
              })}
            </div>
            <section className="panel mx-4 mb-4 p-4">
              <div className="flex gap-3">
                <SpriteFace id={pick} frame="h-40 w-28 shrink-0" />
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-3xl leading-none text-brass">{hero.name}</h2>
                  <p className="text-sm text-mist">{hero.line}</p>
                  <p className="mt-2 text-sm leading-snug">{hero.blurb}</p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                {["Шкода", "Виживання", "Підтримка", "Контроль", "Складність"].map((label, i) => (
                  <div key={label} className="grid grid-cols-[6.5rem_1fr] items-center gap-2 text-xs text-mist">
                    <span>{label}</span>
                    <span className="meter">
                      <span style={{ width: `${hero.bars[i]! * 10}%` }} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button className="min-h-12 border border-brass bg-brass/15 font-display text-xl tracking-wide" onClick={() => beginGame(pick, false)}>
                  Почати гру
                </button>
                <button className="min-h-12 border border-blood/80 text-parchment" onClick={() => beginGame(pick, true)}>
                  Хардкор
                </button>
                {saves.normal && (
                  <button className="min-h-12 border border-line" onClick={() => loadGame(false)}>
                    Продовжити
                  </button>
                )}
                {saves.hard && (
                  <button className="min-h-12 border border-line" onClick={() => loadGame(true)}>
                    Продовжити хардкор
                  </button>
                )}
              </div>
              {G.epitaph && <p className="mt-3 text-sm text-blood">{G.epitaph}</p>}
            </section>
          </div>
        )}

        {G.mode !== "title" && L && (
          <header className="safe-t pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-2 p-2">
            <button type="button" className="pointer-events-auto panel flex items-center gap-2 px-2 py-1.5 text-left" onClick={() => openPanel("sheet")}>
              <img src={`/game/portraits/${L.hero}.png`} alt="" className="h-11 w-11 object-cover object-top" />
              <div className="min-w-[7rem]">
                <div className="font-display text-lg leading-none">{L.name}</div>
                <div className="text-[11px] text-mist">
                  {G.map.name} · рівень {L.level}
                </div>
                <div className="meter mt-1">
                  <span style={{ width: `${(L.hp / L.maxHp) * 100}%`, background: "linear-gradient(90deg,#6a3030,#c45a52)" }} />
                </div>
                <div className="mt-0.5 text-[10px] text-brass">
                  досвід {L.xp}/{xpNeed(L.level)}
                </div>
                <div className="meter">
                  <span style={{ width: `${Math.min(100, (L.xp / Math.max(1, xpNeed(L.level))) * 100)}%`, background: "linear-gradient(90deg,#8a6a32,#e2c15a)" }} />
                </div>
              </div>
            </button>
            <div className="pointer-events-auto flex gap-1">
              {(
                [
                  ["sheet", "Лист"],
                  ["journal", "Журнал"],
                  ["travel", "Марші"],
                ] as const
              ).map(([id, label]) => (
                <button key={id} className="min-h-11 min-w-11 border border-line bg-panel/90 px-2 text-xs" onClick={() => openPanel(id)}>
                  {label}
                </button>
              ))}
              <button
                type="button"
                className="min-h-11 border border-brass bg-panel/90 px-2 text-xs text-brass"
                onClick={() => {
                  const el = document.getElementById("echo-root");
                  if (document.fullscreenElement) {
                    void document.exitFullscreen();
                    setFull(false);
                    return;
                  }
                  const ask = el?.requestFullscreen?.();
                  if (ask) {
                    void ask.then(() => setFull(true)).catch(() => setFull((v) => !v));
                  } else setFull((v) => !v);
                }}
              >
                {full ? "Вікно" : "На все"}
              </button>
            </div>
          </header>
        )}

        {G.mode !== "title" && <Minimap />}

        {G.mode === "explore" && (
          <>
            <CameraTurn />
            <div className="pointer-events-auto absolute left-2 top-[6.6rem] z-30 flex gap-1">
              <button type="button" className="h-11 w-11 border border-brass bg-ink/85 font-display text-lg text-brass" onClick={() => addYaw(-0.65)}>
                ↺
              </button>
              <button type="button" className="h-11 w-11 border border-brass bg-ink/85 font-display text-lg text-brass" onClick={() => addYaw(0.65)}>
                ↻
              </button>
              <button type="button" className="h-11 w-11 border border-line bg-ink/85 text-brass" onClick={() => addZoom(0.12)}>
                +
              </button>
              <button type="button" className="h-11 w-11 border border-line bg-ink/85 text-brass" onClick={() => addZoom(-0.12)}>
                −
              </button>
            </div>
            <Joystick />
            <button
              className="pointer-events-auto absolute left-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass bg-ink/90 font-display text-sm text-brass"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                setAtkHold(true);
                fieldStrike(false, true);
              }}
              onPointerUp={() => setAtkHold(false)}
              onPointerCancel={() => setAtkHold(false)}
            >
              Удар
            </button>
            <button
              type="button"
              className={`pointer-events-auto absolute right-3 z-50 flex h-16 w-16 items-center justify-center rounded-full border-2 font-display text-sm bottom-[max(1rem,env(safe-area-inset-bottom))] ${spot ? "border-brass bg-brass text-ink" : "border-line bg-ink/80 text-mist"}`}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                interact();
              }}
            >
              Дія
            </button>
            {spot && (
              <p className="pointer-events-none absolute inset-x-0 bottom-36 text-center text-sm text-brass">{spot.label} · кнопка Дія або E</p>
            )}
            {G.map.id === "crypt" && (
              <p className="pointer-events-none absolute inset-x-0 top-20 text-center text-xs text-mist">
                Дзвони: {bellLabel() || "тиша"} {G.flags.bells ? "· двері відкриті" : ""}
              </p>
            )}
            {G.map.id === "tract" && (
              <p className="pointer-events-none absolute inset-x-0 top-20 text-center text-xs text-mist">
                Шлюзи {G.levers.map((n) => (n ? "відкр." : "захр.")).join(" · ")}
                {G.flags.bridge ? " · міст є" : ""}
              </p>
            )}
          </>
        )}

        {G.mode === "talk" && node && (
          <section className="pointer-events-auto panel safe-b absolute inset-x-2 bottom-2 max-h-[70%] overflow-y-auto p-4">
            <h2 className="font-display text-2xl text-brass">{node.speaker}</h2>
            <p className="mt-2 text-sm leading-relaxed">{node.text}</p>
            {G.talkExtra && <p className="mt-2 text-sm text-mist">{G.talkExtra}</p>}
            <div className="mt-3 flex flex-col gap-2">
              {(node.choices ?? [{ label: "Далі.", end: true }]).map((c, i) => (
                <button key={i} className="min-h-11 border border-line px-3 text-left text-sm" onClick={() => choose(i)}>
                  {c.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {G.mode === "explore" && <FieldBar />}

        {G.mode === "combat" && (
          <CombatDock />
        )}

        {G.mode === "reward" && G.reward && (
          <Panel title={G.reward.title} onClose={() => closeReward()}>
            {G.reward.lines.map((l) => (
              <p key={l} className="text-sm">
                {l}
              </p>
            ))}
            <button className="mt-3 min-h-11 border border-brass px-3" onClick={() => closeReward()}>
              Далі
            </button>
          </Panel>
        )}

        {G.mode === "epilogue" && (
          <Panel title="Межа відлунь">
            <p className="text-sm leading-relaxed">{G.epilogue}</p>
            <p className="mt-2 text-sm text-mist">Герой, речі й професія лишаються. Новий цикл створює інший стан світу.</p>
            <button className="mt-3 min-h-11 border border-brass px-3" onClick={() => newEcho()}>
              Нове відлуння
            </button>
          </Panel>
        )}

        {G.mode === "journal" && (
          <Panel title="Журнал" onClose={() => closePanel()}>
            {questView().map((q) => (
              <article key={q.id} className="mb-3">
                <h3 className="font-display text-xl">{q.name}</h3>
                <p className="text-sm text-mist">{q.text}</p>
              </article>
            ))}
            <h3 className="mt-4 font-display text-xl">Лор</h3>
            {LORE.filter((b) => !b.quest || G.quests[b.quest] != null).map((b) => (
              <article key={b.id} className="mt-2 border border-line p-2">
                <h3 className="font-display text-lg text-brass">{b.title}</h3>
                <p className="text-sm leading-snug">{b.text}</p>
              </article>
            ))}
            <h3 className="mt-4 font-display text-xl">Глави</h3>
            <p className="text-xs text-mist">Увесь шлях, якщо пройти всі землі, привали і каплички, близько 28 годин.</p>
            {CHAPTERS.map((ch) => (
              <article key={ch.id} className="mt-2 border border-line p-2">
                <h3 className="font-display text-lg">
                  {ch.title} <span className="text-xs text-mist">· {ch.hours} год</span>
                </h3>
                <p className="text-sm">{ch.summary}</p>
              </article>
            ))}
            <h3 className="mt-4 font-display text-xl">Побічні справи</h3>
            {SIDE_QUESTS.map((q) => (
              <article key={q.id} className="mt-2">
                <h3 className="text-sm text-brass">{q.title}</h3>
                <p className="text-xs text-mist">
                  {q.giver}. {q.text} Нагорода: {q.reward}
                </p>
              </article>
            ))}
            <h3 className="mt-4 font-display text-xl">Комплекти</h3>
            {SETS.map((s) => (
              <p key={s.id} className="mt-1 text-xs">
                <span className="text-brass">{s.name}.</span> {s.bonus}
              </p>
            ))}
            <h3 className="mt-4 font-display text-xl">Марш</h3>
            <ul className="mt-1 space-y-1 text-xs text-mist">
              {G.log.slice(0, 8).map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
            {!!G.flags["road-open"] && (
              <button className="mt-3 min-h-11 border border-line px-3" onClick={() => openPanel("travel")}>
                Марші
              </button>
            )}
          </Panel>
        )}

        {G.mode === "travel" && (
          <Panel title="Марші" onClose={() => closePanel()}>
            <p className="mb-2 text-xs text-mist">Сіре прикордоння лишається рукотворним. Далі — зібрані за правилами краї, з тим самим зерном експедиції.</p>
            <button className="mb-3 min-h-11 border border-brass px-3 text-sm" onClick={() => goBeyond()}>
              Привал за дзвоном
            </button>
            <button className="mb-3 min-h-11 border border-brass px-3 text-sm" onClick={() => enterPit(1)}>
              Колодязь прокачки · 12 поверхів
            </button>
            {REGIONS.map((r) => {
              const open = regionUnlocked(r.id);
              return (
                <article key={r.id} className="mb-3 border border-line p-2">
                  <h3 className="font-display text-xl">{r.name}</h3>
                  <p className="text-xs text-mist">{r.blurb}</p>
                  {open ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {r.id === "grey" ? (
                        <button className="min-h-11 border border-brass px-2 text-sm" onClick={() => travelTo("grey", "camp")}>
                          Вербова варта
                        </button>
                      ) : (
                        (
                          [
                            ["camp", "Табір"],
                            ["wild", "Дике"],
                            ["job", "Доручення"],
                            ["lair", "Лігво"],
                          ] as const
                        ).map(([k, label]) => (
                          <button key={k} className="min-h-11 border border-line px-2 text-sm" onClick={() => travelTo(r.id, k)}>
                            {label}
                          </button>
                        ))
                      )}
                      {r.id !== "grey" && (
                        <button className="min-h-11 border border-brass px-2 text-sm" onClick={() => travelStory(r.id)}>
                          Сюжет
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="mt-1 text-xs">Ще мовчить.</p>
                  )}
                </article>
              );
            })}
          </Panel>
        )}

        {G.mode === "shop" && L && (
          <Panel title="Прилавок" onClose={() => closePanel()}>
            <p className="text-sm">Монети: {L.gold}. Продаж — половина ціни.</p>
            {shopItems().map((it) => (
              <div key={it.id} className="mt-2 flex items-center justify-between gap-2 border border-line p-2">
                <div>
                  <div className="text-sm">{it.name}</div>
                  <div className="text-xs text-mist">{it.blurb}</div>
                </div>
                <button className="min-h-11 shrink-0 border border-brass px-2 text-sm" onClick={() => buy(it.id)}>
                  {it.price}
                </button>
              </div>
            ))}
            <h3 className="mt-4 font-display text-xl">Продати зі сумки</h3>
            {L.bag.filter((b) => (itemById(b.id)?.price ?? 0) > 0).map((b) => (
              <div key={b.id} className="mt-2 flex items-center justify-between gap-2 border border-line p-2">
                <span className="text-sm">
                  {itemById(b.id)?.name} ×{b.n}
                </span>
                <button className="min-h-11 border border-brass px-2 text-sm" onClick={() => sell(b.id)}>
                  {Math.max(1, Math.floor((itemById(b.id)?.price ?? 0) / 2))}
                </button>
              </div>
            ))}
          </Panel>
        )}

        {G.mode === "hire" && (
          <Panel title="Дошка найму" onClose={() => closePanel()}>
            <p className="mb-2 text-sm">До двох найманців. 30 монет. У бою ходиш за кожного.</p>
            {HERO_ORDER.filter((id) => !G.party.some((p) => p.hero === id)).map((id) => (
              <button key={id} className="mb-2 flex min-h-11 w-full items-center gap-2 border border-line px-2 text-left" onClick={() => hire(id)}>
                <img src={`/game/portraits/${id}.png`} alt="" className="h-11 w-9 object-cover" />
                <span>
                  {HEROES[id].name}
                  <span className="block text-xs text-mist">{HEROES[id].line}</span>
                </span>
              </button>
            ))}
          </Panel>
        )}

        {G.mode === "sheet" && L && (
          <Panel title="Лист героя" onClose={() => closePanel()}>
            <div className="mb-2 flex gap-2 overflow-x-auto">
              {G.party.map((p, i) => (
                <button key={p.uid} className={`min-h-11 border px-2 text-sm ${i === sheet ? "border-brass" : "border-line"}`} onClick={() => setSheet(i)}>
                  {p.name}
                </button>
              ))}
            </div>
            <HeroSheet hero={G.party[sheet] ?? L} />
          </Panel>
        )}

        {G.mode === "path" && (
          <Panel title="Професія">
            <PathPicker />
          </Panel>
        )}
      </div>
    </div>
  );
}

function Minimap() {
  const rows = G.map.rows;
  const H = rows.length;
  const W = rows[0]?.length ?? 1;
  const svgRef = useRef<SVGSVGElement>(null);
  const worldRef = useRef<SVGGElement>(null);
  const faceRef = useRef<SVGPolygonElement>(null);
  const cells: { x: number; y: number; solid: boolean }[] = [];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const ch = rows[y]?.[x] ?? "#";
      cells.push({ x, y, solid: ch === "#" || ch === "H" || ch === "c" || ch === "T" || ch === "W" });
    }
  }
  useEffect(() => {
    let id = 0;
    const loop = () => {
      const px = G.x / 48;
      const py = G.y / 48;
      const span = 15;
      svgRef.current?.setAttribute("viewBox", `${px - span} ${py - span} ${span * 2} ${span * 2}`);
      const look = lookHeading();
      worldRef.current?.setAttribute("transform", `rotate(${(-look * 180) / Math.PI} ${px} ${py})`);
      const rel = ((facingHeading(G.facing) - look) * 180) / Math.PI;
      faceRef.current?.setAttribute("transform", `translate(${px} ${py}) rotate(${rel})`);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [G.map.id]);
  return (
    <div className="pointer-events-none absolute right-2 top-[4.6rem] z-20" style={{ width: 148 }}>
      <div className="relative border border-brass/50 bg-ink/80 p-1">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full">
          <g ref={worldRef}>
            <rect x={-4} y={-4} width={W + 8} height={H + 8} fill="#1a1612" />
            {cells.map((c) => (c.solid ? null : <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} fill="#8d8476" />))}
            {G.map.spots
              .filter((s) => s.kind === "exit")
              .map((s) => (
                <rect key={s.id} x={s.x} y={s.y} width={1.2} height={1.2} fill="#e2c15a" />
              ))}
            {G.folk.map((f) => {
              const hot = questHot(f.ref);
              return (
                <g key={f.id}>
                  <circle cx={f.x / 48} cy={f.y / 48} r={hot ? 1.15 : 0.65} fill={hot ? "#ffe27a" : "#e2c15a"} />
                  {hot && (
                    <text x={f.x / 48} y={f.y / 48 + 0.45} textAnchor="middle" fontSize={1.7} fill="#1a1408">
                      !
                    </text>
                  )}
                </g>
              );
            })}
            {G.map.fights.map((f) => {
              const boss = f.id.includes("boss") || f.foes.some((foe) => foe.id === "bellringer" || foe.id === "fenmother" || foe.id === "cantor");
              const cx = f.x + f.w / 2;
              const cy = f.y + f.h / 2;
              if (G.cleared.includes(f.id)) return null;
              return boss ? (
                <text key={f.id} x={cx} y={cy + 0.4} textAnchor="middle" fontSize={2.2} fill="#f4f0e6">
                  ☠
                </text>
              ) : (
                <circle key={f.id} cx={cx} cy={cy} r={0.85} fill="#d24a42" />
              );
            })}
            {G.mobs
              .filter((m) => m.hp > 0)
              .map((m) => (
                <circle key={m.uid} cx={m.x / 48} cy={m.y / 48} r={0.7} fill="#ff5a4a" />
              ))}
          </g>
          <polygon ref={faceRef} points="0,-1.35 0.72,0.95 -0.72,0.95" fill="#f7f3ea" stroke="#c6a15a" strokeWidth={0.2} />
        </svg>
        <div className="absolute left-1/2 top-0.5 -translate-x-1/2 text-[10px] leading-none text-brass">▲</div>
      </div>
      <p className="mt-0.5 text-center text-[10px] text-mist">верх — куди дивишся</p>
    </div>
  );
}

function livingIndex(uid: string) {
  const list = G.units.filter((u) => u.side === "ally" && u.hp > 0);
  return Math.max(0, list.findIndex((u) => u.uid === uid));
}

function Sigil({ kind }: { kind: string }) {
  const c = kind === "heal" ? "#7d9a6a" : kind === "buff" ? "#c6a15a" : kind === "debuff" ? "#c98b8b" : "#e6dcc8";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      {kind === "heal" && <path d="M11 2.5c2.2 3.2 6.2 4.2 6.2 9.2a6.2 6.2 0 1 1-12.4 0c0-5 4-6 6.2-9.2z" fill={c} />}
      {kind === "buff" && <path d="M11 1.8 19 5.4v6.2c0 4.8-3.4 7.4-8 8.8-4.6-1.4-8-4-8-8.8V5.4z" fill={c} />}
      {kind === "debuff" && (
        <>
          <ellipse cx="11" cy="11" rx="8" ry="5" fill="none" stroke={c} strokeWidth="1.6" />
          <circle cx="11" cy="11" r="2.2" fill={c} />
        </>
      )}
      {(kind === "dmg" || kind === "attack") && <path d="M3.5 18.5 15.5 3.5l3 1.2L6.2 20z" fill={c} />}
    </svg>
  );
}

function effectMark(me: Unit | null, power: number, stat: number, kind: string, status?: string, self?: string) {
  if (self) return self;
  if (!me) return "—";
  if (kind === "heal") return `+${blowDamage(power, stat)}`;
  if (kind === "dmg" || kind === "attack") {
    const n = blowDamage(power, stat);
    return status ? `${n} · ${status}` : `${n} шкоди`;
  }
  return status || "ефект";
}

function SkillIcon({
  name,
  kind,
  cost,
  mark,
  on,
  dim,
  onClick,
  skillId,
  onDown,
  onUp,
  round,
}: {
  name: string;
  kind: string;
  cost: string;
  mark: string;
  on: boolean;
  dim?: boolean;
  onClick: () => void;
  skillId?: string;
  onDown?: () => void;
  onUp?: () => void;
  round?: boolean;
}) {
  const icon = skillId ? SKILL_ICON[skillId] : undefined;
  return (
    <button
      type="button"
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.setPointerCapture(e.pointerId);
        if (onDown) onDown();
        else onClick();
      }}
      onPointerUp={() => onUp?.()}
      onPointerCancel={() => onUp?.()}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className={
        round
          ? `pointer-events-auto relative flex h-full w-full touch-none items-center justify-center overflow-hidden rounded-full border-2 border-brass bg-ink/90 ${dim ? "opacity-45" : ""}`
          : `pointer-events-auto relative flex h-full min-h-[4.7rem] w-full min-w-[3.35rem] touch-none flex-col items-center border px-0.5 pt-1 ${on ? "border-brass bg-brass/20" : "border-line bg-black/70"} ${dim ? "opacity-45" : ""}`
      }
    >
      {!round && <span className="absolute right-0.5 top-0 z-10 text-[10px] text-brass">{cost}</span>}
      {icon !== undefined ? (
        <img src={`/game/skills/${icon}.png`} alt="" className={round ? "h-full w-full object-cover" : "h-8 w-8 object-cover"} />
      ) : (
        <Sigil kind={kind} />
      )}
      {!round && <span className="mt-0.5 w-full truncate text-center text-[10px] leading-none">{name}</span>}
      <span className={round ? "pointer-events-none absolute bottom-0.5 left-1/2 z-10 -translate-x-1/2 bg-ink/75 px-1 text-[9px] leading-none text-brass" : "text-[10px] leading-tight text-brass"}>{mark}</span>
    </button>
  );
}

const SKILL_ICON: Record<string, number> = {
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
  "pa-light": 14,
};

function FieldBar() {
  const L = G.party[0];
  if (!L) return null;
  const skills = [0, 1, 2, 3].map((i) => skillById(L, L.loadout[i] ?? ""));
  const picked = G.mobs.find((m) => m.uid === G.target && m.hp > 0);
  const angles = [12, 48, 84, 120];
  const radius = 168;
  const size = 76;
  return (
    <>
      {picked && (
        <p className="pointer-events-none absolute bottom-[16rem] left-[6rem] z-40 bg-ink/80 px-2 text-[11px] text-brass">{picked.name}</p>
      )}
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const sk = skills[i];
        const style = {
          left: `calc(0.75rem + 2rem + ${Math.cos(rad) * radius}px - ${size / 2}px)`,
          bottom: `calc(max(1rem, env(safe-area-inset-bottom)) + 2rem + ${Math.sin(rad) * radius}px - ${size / 2}px)`,
          width: size,
          height: size,
        };
        if (!sk) {
          return <div key={i} style={style} className="pointer-events-none absolute z-50 rounded-full border border-dashed border-brass/40" />;
        }
        const cd = G.skillCd[sk.id] ?? 0;
        return (
          <div key={sk.id} style={style} className="pointer-events-auto absolute z-50 touch-none">
            <SkillIcon
              round
              skillId={sk.id}
              name={sk.name}
              kind={sk.kind}
              cost={String(sk.focus)}
              mark={cd > 0 ? `${cd.toFixed(1)}` : sk.kind === "heal" ? `+${blowDamage(sk.power, L.stats[sk.stat])}` : sk.power ? `${blowDamage(sk.power, L.stats[sk.stat])}` : statusName(sk.status?.id) || "ефект"}
              on={false}
              dim={cd > 0 || L.focus < sk.focus}
              onClick={() => fieldCast(sk.id)}
            />
          </div>
        );
      })}
    </>
  );
}

function CombatDock() {
  const me = currentPlanner();
  const hero = G.party.find((p) => p.uid === me?.heroUid) ?? null;
  const foes = G.units.filter((u) => u.side === "foe" && u.hp > 0);
  const picked = foes.find((u) => u.uid === me?.plan?.target) ?? foes[0];
  const skills = (hero?.loadout ?? []).map((id) => skillById(hero, id)).filter((sk) => !!sk);
  const selected = skills.find((sk) => sk.id === me?.plan?.skill);
  const caption =
    selected?.blurb ??
    (me?.plan?.action === "guard" ? "Закриваєшся цього ходу." : me?.plan?.action === "attack" ? "Звичайний удар по обраному." : "Обери дію.");
  if (G.phase === "resolve") {
    return (
      <p className="pointer-events-none absolute inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 bg-ink/80 px-3 py-2 text-center font-display text-lg text-brass">
        {G.lastRoll || "Хід..."}
      </p>
    );
  }
  return (
    <section className="pointer-events-auto absolute inset-x-0 bottom-0 z-40 border-t border-brass/50 bg-ink/92 px-2 pt-1.5 pb-[max(0.35rem,env(safe-area-inset-bottom))]">
      <div className="mb-1 flex items-center gap-2 text-[11px]">
        <span className="shrink-0 text-mist">Р.{G.round}</span>
        <span className="min-w-0 flex-1 truncate text-parchment">{caption}</span>
        {G.round === 1 && (
          <button type="button" className="min-h-10 shrink-0 border border-line px-2 text-mist" onClick={() => retreat()}>
            Відступ
          </button>
        )}
      </div>
      {foes.length > 1 && (
        <div className="mb-1 flex gap-1">
          {foes.map((u) => (
            <button
              key={u.uid}
              type="button"
              className={`min-h-10 flex-1 truncate border px-1 text-[11px] ${me?.plan?.target === u.uid ? "border-brass text-brass" : "border-line"}`}
              onClick={() => setTarget(u.uid)}
            >
              {u.name} {u.hp}
            </button>
          ))}
        </div>
      )}
      <div className="flex justify-center gap-1">
        <SkillIcon
          name={me?.ranged ? "Постріл" : "Удар"}
          kind="dmg"
          cost="0"
          mark={effectMark(me, me?.dmg ?? 0, me ? me.stats[me.primary] : 0, "attack")}
          on={me?.plan?.action === "attack"}
          onClick={() => aimAttack()}
        />
        {skills.map((sk) => (
          <SkillIcon
            key={sk.id}
            name={sk.name}
            kind={sk.kind}
            cost={String(sk.focus)}
            mark={effectMark(
              me,
              sk.power,
              me?.stats[sk.stat] ?? 0,
              sk.kind,
              sk.status ? statusName(sk.status.id) : undefined,
              sk.target !== "enemy" && sk.kind !== "heal" && sk.kind !== "dmg" ? statusName(sk.status?.id) || "собі" : undefined,
            )}
            on={me?.plan?.skill === sk.id}
            dim={!!me && me.focus < sk.focus}
            onClick={() => aimSkill(sk.id)}
          />
        ))}
        <SkillIcon name="Щит" kind="buff" cost="0" mark="захист" on={me?.plan?.action === "guard"} onClick={() => planGuard()} />
      </div>
      <button
        type="button"
        className="mt-1.5 min-h-12 w-full border border-brass bg-brass/25 font-display text-lg"
        onClick={() => {
          if (!allReady()) confirmActor();
          executeRound();
        }}
      >
        Виконати
      </button>
    </section>
  );
}

function Panel({ title, children, onClose }: { title: string; children: ReactNode; onClose?: () => void }) {
  const shut = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    onClose?.();
  };
  return (
    <section className="pointer-events-auto panel absolute inset-x-1 top-1 bottom-1 z-[80] flex flex-col overflow-hidden p-3">
      <div className="mb-2 flex shrink-0 items-center justify-between gap-2">
        <h2 className="min-w-0 font-display text-2xl text-brass">{title}</h2>
        {onClose && (
          <button type="button" className="min-h-12 shrink-0 border border-brass bg-ink px-4 text-base text-brass" onPointerDown={shut}>
            Закрити
          </button>
        )}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">{children}</div>
      {onClose && (
        <button type="button" className="mt-2 min-h-14 w-full shrink-0 border border-brass bg-brass/25 font-display text-lg" onPointerDown={shut}>
          Назад у гру
        </button>
      )}
    </section>
  );
}

function HeroSheet({ hero }: { hero: Hero }) {
  const pending = nextGate(hero);
  return (
    <div>
      <p className="text-sm text-mist">
        Рівень {hero.level} · досвід {hero.xp}/{xpNeed(hero.level)} · монети {hero.gold}
        {hero.merc ? " · найманець" : ""}
      </p>
      <p className="mt-1 text-xs text-mist">SP {hero.focus}/{hero.maxFocus}</p>
      <div className="mt-3 flex items-end gap-3">
        <img src={`/game/portraits/${hero.hero}.png`} alt="" className="h-28 w-20 object-cover object-top" />
        <div className="grid flex-1 grid-cols-1 gap-2">
          {(
            [
              ["weapon", "Зброя"],
              ["armor", "Броня"],
              ["trinket", "Дрібничка"],
            ] as const
          ).map(([slot, label]) => {
            const it = itemById(hero[slot]);
            return (
              <div key={slot} className="border border-brass/40 px-2 py-1">
                <div className="text-[10px] uppercase tracking-wide text-mist">{label}</div>
                <div className="text-sm">{it?.name ?? "порожньо"}</div>
                {it?.set && <div className="text-[10px] text-brass">комплект {it.set}</div>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {STATS.map((s) => (
          <div key={s} className="flex items-center justify-between border border-line px-2 py-1">
            <span className="text-sm">
              {STAT_LABEL[s]} {hero.stats[s]}
            </span>
            <button disabled={hero.unspent <= 0} className="min-h-11 min-w-11 border border-brass disabled:opacity-30" onClick={() => alloc(hero.uid, s)}>
              +
            </button>
          </div>
        ))}
      </div>
      {hero.unspent > 0 && (
        <button className="mt-2 min-h-11 border border-brass px-3 text-sm" onClick={() => allocRec(hero.uid)}>
          Рекомендовано ({hero.unspent})
        </button>
      )}
      {pending && <p className="mt-2 text-sm text-brass">Відкрита професія на {pending}. Вона чекає в окремому вікні після бою.</p>}
      <h3 className="mt-4 font-display text-xl">Панель умінь</h3>
      <p className="text-xs text-mist">Натисни вміння, щоб поставити його на дугу. Активні рівно чотири. Цифра — слот, SP — ціна, сила — наскільки боляче.</p>
      <div className="mt-1 flex flex-col gap-1">
        {hero.known.map((id) => {
          const sk = skillById(hero, id);
          const on = hero.loadout.includes(id);
          const slot = hero.loadout.indexOf(id) + 1;
          const aim = sk?.target === "enemy" ? "ворог" : sk?.target === "self" ? "на себе" : "союзник";
          return (
            <button key={id} className={`flex min-h-11 items-center gap-2 border px-2 text-left text-sm ${on ? "border-brass bg-brass/10" : "border-line"}`} onClick={() => setLoadout(hero.uid, id)}>
              {SKILL_ICON[id] !== undefined && <img src={`/game/skills/${SKILL_ICON[id]}.png`} alt="" className="h-9 w-9 object-cover" />}
              <span>
                {on ? `${slot}. ` : ""}
                {sk?.name}
                <span className="block text-xs text-mist">
                  SP {sk?.focus} · {aim}
                  {sk?.range ? ` · ${sk.range} клітин` : ""}
                  {sk?.power ? ` · сила ${sk.power}` : ""}
                  {sk?.status ? " · є ефект" : ""}
                </span>
                <span className="block text-xs text-parchment/80">{sk?.blurb}</span>
              </span>
            </button>
          );
        })}
      </div>
      <h3 className="mt-4 font-display text-xl">Сумка</h3>
      {hero.bag.map((b) => (
        <div key={b.id} className="mt-1 flex flex-wrap items-center gap-2 text-sm">
          <span>
            {itemById(b.id)?.name} ×{b.n}
          </span>
          <button className="min-h-11 border border-line px-2" onClick={() => equip(hero.uid, b.id)}>
            Вдягнути
          </button>
          {(itemById(b.id)?.price ?? 0) > 0 && (
            <button className="min-h-11 border border-line px-2" onClick={() => sell(b.id)}>
              Продати
            </button>
          )}
          {itemById(b.id)?.slot === "consumable" && (
            <button className="min-h-11 border border-line px-2" onClick={() => drink(hero.uid, b.id)}>
              Випити
            </button>
          )}
          {G.party.length > 1 &&
            G.party
              .filter((p) => p.uid !== hero.uid)
              .map((p) => (
                <button key={p.uid} className="min-h-11 border border-line px-2" onClick={() => giveItem(hero.uid, p.uid, b.id)}>
                  → {p.name}
                </button>
              ))}
        </div>
      ))}
      <div className="mt-3 flex gap-2">
        {([0, 1] as const).map((slot) => (
          <label key={slot} className="text-xs">
            Швидке {slot + 1}
            <select
              className="mt-1 block min-h-11 border border-line bg-panel px-1"
              value={hero.quick[slot]}
              onChange={(e) => setQuick(hero.uid, slot, e.target.value)}
            >
              {hero.bag
                .filter((b) => itemById(b.id)?.slot === "consumable")
                .map((b) => (
                  <option key={b.id} value={b.id}>
                    {itemById(b.id)?.name}
                  </option>
                ))}
            </select>
          </label>
        ))}
      </div>
      {hero.merc && (
        <button className="mt-3 min-h-11 border border-blood px-3" onClick={() => dismiss(hero.uid)}>
          Відпустити
        </button>
      )}
      <button
        className="mt-3 min-h-11 border border-line px-3"
        onClick={() => {
          persist();
        }}
      >
        Записати
      </button>
    </div>
  );
}

function PathPicker() {
  const h = G.party.find((p) => nextGate(p));
  if (!h) return null;
  const at = nextGate(h);
  if (!at) return null;
  const parent = gateParent(h, at);
  const opts = pathChoices(h.hero, parent, at);
  return (
    <div>
      <p className="text-sm">
        {h.name}, рівень {at}. Обери одну стежку. Фінал на 85 займе слот уміння.
      </p>
      {opts.map((p) => (
        <button key={p.id} className="mt-2 block min-h-11 w-full border border-brass px-3 text-left" onClick={() => pickPath(p.id)}>
          <span className="font-display text-xl">{p.name}</span>
          <span className="block text-xs text-mist">{p.text}</span>
        </button>
      ))}
    </div>
  );
}

function SpriteFace({ id, frame = "h-28 w-20" }: { id: string; frame?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#4a4034] ${frame}`}>
      <img src={`/game/sprites/${id}/sheet-transparent.png?v=14`} alt="" className="absolute left-0 top-0 h-[400%] w-[400%] max-w-none" />
    </div>
  );
}
function CameraTurn() {
  const origin = useRef<{ x: number; y: number; last: number; moved: number } | null>(null);
  const pts = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef(0);
  return (
    <div
      aria-label="Поворот камери"
      className="pointer-events-auto absolute left-0 right-0 top-0 z-10 h-[50%] touch-none"
      style={{ touchAction: "none" }}
      onContextMenu={(e) => e.preventDefault()}
      onPointerDown={(e) => {
        pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (e.pointerType === "mouse" && e.button === 0) holdClient(e.clientX, e.clientY, true);
        if (e.pointerType === "mouse" && e.button !== 0 && e.button !== 2) return;
        origin.current = { x: e.clientX, y: e.clientY, last: e.clientX, moved: 0 };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!pts.current.has(e.pointerId) && !origin.current) return;
        pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const fingers = [...pts.current.values()];
        if (fingers.length >= 2) {
          const d = Math.hypot(fingers[0]!.x - fingers[1]!.x, fingers[0]!.y - fingers[1]!.y);
          if (pinch.current) {
            const diff = d - pinch.current;
            if (Math.abs(diff) > 10) {
              addZoom(diff > 0 ? 0.08 : -0.08);
              pinch.current = d;
            }
          } else pinch.current = d;
          return;
        }
        const o = origin.current;
        if (!o) return;
        const dx = e.clientX - o.last;
        o.last = e.clientX;
        o.moved += Math.abs(dx) + Math.abs(e.clientY - o.y) * 0.15;
        const turn = e.buttons === 2 || e.pointerType !== "mouse";
        if (turn && dx) addYaw(dx * 0.012);
      }}
      onPointerUp={(e) => {
        pts.current.delete(e.pointerId);
        if (pts.current.size < 2) pinch.current = 0;
        const o = origin.current;
        origin.current = null;
        if (e.pointerType === "mouse") holdClient(e.clientX, e.clientY, false);
        if (!o) return;
        if (o.moved < 12 && Math.abs(e.clientY - o.y) < 14) tapClient(e.clientX, e.clientY);
      }}
      onPointerCancel={(e) => {
        pts.current.delete(e.pointerId);
        pinch.current = 0;
        origin.current = null;
      }}
    />
  );
}

function Joystick() {
  const knob = useRef<HTMLDivElement>(null);
  const origin = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => () => setStick(0, 0), []);
  const R = 64;
  const move = (cx: number, cy: number) => {
    const o = origin.current;
    if (!o) return;
    let dx = cx - o.x;
    let dy = cy - o.y;
    const mag = Math.hypot(dx, dy) || 1;
    const lim = Math.min(R, mag);
    dx = (dx / mag) * lim;
    dy = (dy / mag) * lim;
    if (knob.current) {
      knob.current.style.opacity = "1";
      knob.current.style.left = `${o.x + dx}px`;
      knob.current.style.top = `${o.y + dy}px`;
    }
    const nx = dx / R;
    const ny = dy / R;
    if (Math.hypot(nx, ny) < 0.16) setStick(0, 0);
    else setStick(nx, ny);
  };
  const end = (e: { clientX: number; clientY: number }) => {
    const o = origin.current;
    const tap = !!o && Math.hypot(e.clientX - o.x, e.clientY - o.y) < 14;
    origin.current = null;
    if (knob.current) knob.current.style.opacity = "0";
    setStick(0, 0);
    if (tap) tapClient(e.clientX, e.clientY);
  };
  return (
    <>
      <div
        aria-label="Джойстик"
        className="pointer-events-auto absolute bottom-0 left-[15.6rem] z-20 h-[46%] touch-none max-[720px]:left-[42%]"
        style={{ right: "0.4rem" }}
        onPointerDown={(e) => {
          if (e.button !== 0 && e.pointerType === "mouse") return;
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          origin.current = { x: e.clientX, y: e.clientY };
          move(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
          move(e.clientX, e.clientY);
        }}
        onPointerUp={end}
        onPointerCancel={end}
      />
      <div
        ref={knob}
        className="pointer-events-none fixed z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/80 bg-brass/25 opacity-0"
      />
    </>
  );
}
