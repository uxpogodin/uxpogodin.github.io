import { useState, useEffect, useCallback } from "react";
import { Link, useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { OutletCtx } from "../components/RootLayout";
import { ContactSection } from "../components/ContactSection";
import {
  preset, weight, leading, tracking,
  textColor, colors, glow,
} from "../styles/typography";

// ── FlowPay screen imports (screens 1, 2, 7, 8 only) ──────────────────────────
import fp1 from "figma:asset/c79f4aab7a121e1e071fee7c86aa020b8a0066ef.png";
import fp2 from "figma:asset/509fbb49dd643c636403b0e35a41749b6b43dc64.png";
import fp7 from "figma:asset/b364d1f859f20f3dc72602ec2cfeaf601efd6697.png";
import fp8 from "figma:asset/7c21697c7ad79420ec8b7b5f863a79ebc990e0e2.png";

// ── Merck screen imports ───────────────────────────────────────────────────────
import merck1 from "figma:asset/872c6baf1089ea65b30dcce3b3e1879009a8a08d.png";
import merck2 from "figma:asset/434499eee05b088fd7dfcfeac6d7539ab275225c.png";
import merck3 from "figma:asset/c88c11c53e255a47a35728df0c6bfb58ec283a55.png";
import merck4 from "figma:asset/d0cdcac7bf52750eac811503f10aca97140c659a.png";
import merck5 from "figma:asset/cf182be8271b75b71a67ebb81dadf6b53938557d.png";

// ── OrangeData screen imports ─────────────────────────────────────────────────
import od1 from "figma:asset/d9e1187e65cd8b74e772517992a8780bc0859370.png";
import od2 from "figma:asset/b3ba34c81922e7253f6d924c0ea8405a008a211b.png";
import od3 from "figma:asset/2af6af75a825c79bd6696a53cdb399f66bbb2e1b.png";
import od4 from "figma:asset/b71c9e797b08f44ec2c59cc8bd8c84bf612df0f1.png";
import od5 from "figma:asset/2e1b9724e6aa10a5923e7f6ef3587f2030a431b5.png";

// ── Sitelynx screen imports ───────────────────────────────────────────────────
import sl1 from "figma:asset/0608d9895530ecfca384ee54b18be95202d1ec8a.png";
import sl2 from "figma:asset/c244caa8fd98d2f78a9060af0417ccccef0c1fba.png";
import sl3 from "figma:asset/c03ce5866e3017d4307cc8d61547431bfc70a4f7.png";

// ── Pixel Archer game imports ─────────────────────────────────────────────────
import gameShot        from "figma:asset/b611fe2289895cc9f5337178820ccf80e8a1393d.png";
import gameChar3       from "figma:asset/1da161abfb73e0ea40fada72b389ccb0122dbbbf.png";
import gameChar1       from "figma:asset/226f81b32f9530a4aff912d974344eef2a48c111.png";
import gameChar2       from "figma:asset/29dc6ffef20d6eecc376024d5af4da933d4b3bc3.png";
import gameSpriteSheet from "figma:asset/eec350927a32c950298ac3509011c23941cf4635.png";
import gameEnemy       from "figma:asset/61d3c64fb4c15e10b2708dc88bb8304073117e43.png";
import gameGargoyle    from "figma:asset/40693df9362280a6c61b89d624e43b23685c8cff.png";
import gameGoblin      from "figma:asset/8da20a920b76333d176514e861a9c8c2c25b7ee2.png";

// ── Deterministic star field for the game section ─────────────────────────────
const GAME_STARS = (() => {
  const stars: Array<{ cx: number; cy: number; r: number; o: number; tw: boolean }> = [];
  for (let i = 0; i < 240; i++) {
    const cx = (((Math.sin(i * 127.1 + 3.14) * 43758.5) % 1) + 1) / 2 * 100;
    const cy = (((Math.sin(i * 311.7 + 1.57) * 43758.5) % 1) + 1) / 2 * 100;
    const r  = i % 28 === 0 ? 1.6 : i % 9 === 0 ? 1.0 : 0.55;
    const o  = Math.max(0.12, Math.min(0.9, 0.22 + (((Math.sin(i * 73.4) * 43758.5) % 1) + 1) / 3.2));
    stars.push({ cx, cy, r, o, tw: i % 13 === 0 });
  }
  return stars;
})();

// ── types ───────────��─────────────────────────────────────────────────────────
interface L10n { en: string; ru: string; }

/** Each slide can be either a plain image or a React component screen */
type SlideContent =
  | { kind: "image"; src: string }
  | { kind: "component"; el: React.ReactNode };

interface Slide { content: SlideContent; caption: L10n; }

// ── constants ─────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Phone frame: outer 260px, border 10px each side (border-box)
 * → inner screen width = 240px
 * Merck components are designed at 375px → scale = 240 / 375 = 0.64
 */
const SCREEN_W  = 240;
const DESIGN_W  = 375;
const COMP_SCALE = SCREEN_W / DESIGN_W; // 0.64

// ── Slide data ─────────────────────────────────────────────────────────────────
const FLOWPAY_SLIDES: Slide[] = [
  { content: { kind: "image", src: fp1 }, caption: { en: "Checkout form",       ru: "Форма оплаты"   } },
  { content: { kind: "image", src: fp2 }, caption: { en: "Order details",        ru: "Детали заказа"  } },
  { content: { kind: "image", src: fp7 }, caption: { en: "Payment successful",   ru: "Успешная оплата"} },
  { content: { kind: "image", src: fp8 }, caption: { en: "Payment failed",       ru: "Ошибка оплаты"  } },
];

const MERCK_SLIDES: Slide[] = [
  { content: { kind: "image", src: merck1 }, caption: { en: "Home",           ru: "Главная"               } },
  { content: { kind: "image", src: merck2 }, caption: { en: "Nosologies",      ru: "Нозологии"             } },
  { content: { kind: "image", src: merck3 }, caption: { en: "Oncology",        ru: "Онкология"             } },
  { content: { kind: "image", src: merck4 }, caption: { en: "Events calendar", ru: "Календарь мероприятий" } },
  { content: { kind: "image", src: merck5 }, caption: { en: "About",           ru: "О компании"            } },
];

const ORANGEDATA_SLIDES: Slide[] = [
  { content: { kind: "image", src: od1 }, caption: { en: "Phone number",     ru: "Мобильный телефон"   } },
  { content: { kind: "image", src: od2 }, caption: { en: "Verify number",    ru: "Подтверждение номера"} },
  { content: { kind: "image", src: od3 }, caption: { en: "Personal info",    ru: "Данные о себе"       } },
  { content: { kind: "image", src: od4 }, caption: { en: "Organisation",     ru: "Данные организации"  } },
  { content: { kind: "image", src: od5 }, caption: { en: "Done!",            ru: "Готово!"              } },
];

const SITELYNX_SLIDES: Slide[] = [
  { content: { kind: "image", src: sl1 }, caption: { en: "Business card preview", ru: "Превью визитки"      } },
  { content: { kind: "image", src: sl2 }, caption: { en: "Video block editor",    ru: "Редактор блока видео"} },
  { content: { kind: "image", src: sl3 }, caption: { en: "Photo block editor",    ru: "Редактор блока фото" } },
];

// ── Phone Carousel ────────────────────────────────────────────────────────────
function PhoneCarousel({ slides, lang }: { slides: Slide[]; lang: "en" | "ru" }) {
  const [active, setActive] = useState(0);
  const [dir,    setDir   ] = useState(1);
  const n = slides.length;

  const goTo = useCallback((idx: number, direction: number) => {
    setDir(direction);
    setActive(idx);
  }, []);

  const prev = useCallback(() => goTo((active - 1 + n) % n, -1), [active, n, goTo]);
  const next = useCallback(() => goTo((active + 1) % n,      1), [active, n, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next]);

  const variants = {
    enter:  () => ({ opacity: 0 }),
    center: () => ({ opacity: 1 }),
    exit:   () => ({ opacity: 0 }),
  };

  const btnBase: React.CSSProperties = {
    width: "36px", height: "36px", borderRadius: "50%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", color: textColor.muted,
    transition: "background 0.2s, color 0.2s",
    flexShrink: 0,
  };

  const slide = slides[active];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>

      {/* Phone + arrows */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

        {/* ← Prev */}
        <button onClick={prev} aria-label="Previous" style={btnBase}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.color = textColor.primary; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = textColor.muted; }}
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>

        {/* Phone frame */}
        <div style={{
          width: "260px",
          borderRadius: "46px",
          background: "#141414",
          border: "10px solid #141414",
          boxShadow: [
            "0 0 0 1px rgba(255,255,255,0.07)",
            "0 48px 96px rgba(0,0,0,0.65)",
            "0 0 80px rgba(99,102,241,0.07)",
          ].join(", "),
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          transform: "translateZ(0)",
          willChange: "transform",
          isolation: "isolate",
        }}>
          {/* Notch */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "80px", height: "22px",
            background: "#141414",
            borderRadius: "0 0 16px 16px",
            zIndex: 10,
          }} />

          {/* Screen area — fixed 375:812 phone ratio */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "375 / 812",
            overflow: "hidden",
            transform: "translateZ(0)",
          }}>
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                style={{ position: "absolute", inset: 0 }}
              >
                {slide.content.kind === "image" ? (
                  <img
                    src={slide.content.src}
                    alt={slide.caption[lang]}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      imageRendering: "auto",
                    }}
                  />
                ) : (
                  /* Render the 375px React component scaled down to fit the phone */
                  <div style={{
                    width: `${DESIGN_W}px`,
                    height: `${Math.round(DESIGN_W * 812 / 375)}px`,
                    transform: `scale(${COMP_SCALE})`,
                    transformOrigin: "top left",
                    overflow: "hidden",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                    {slide.content.el}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* → Next */}
        <button onClick={next} aria-label="Next" style={btnBase}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.color = textColor.primary; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = textColor.muted; }}
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Caption + counter */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wide }}
          >
            {slide.caption[lang]}
          </motion.span>
        </AnimatePresence>
        <span style={{ ...preset.nano, color: "rgba(255,255,255,0.10)" }}>·</span>
        <span style={{ ...preset.nano, color: textColor.muted, fontVariantNumeric: "tabular-nums" as const }}>
          {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            style={{
              height: "5px",
              width: i === active ? "22px" : "5px",
              borderRadius: "3px",
              background: i === active ? textColor.accent : "rgba(255,255,255,0.40)",  // was 0.12 — raised to 3.52:1 (WCAG 1.4.11)
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Shared project section layout ─────────────────────────────────────────────
function ProjectSection({
  id, tags, title, description, slides, lang, glowRight = false,
}: {
  id: string;
  tags: { text: string; accent?: boolean }[];
  title: string;
  description: L10n;
  slides: Slide[];
  lang: "en" | "ru";
  glowRight?: boolean;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(64px, 10vw, 100px) 0",
        borderTop: "1px solid rgba(255,255,255,0.055)",
        background: glowRight
          ? `radial-gradient(ellipse 60% 60% at 80% 50%, ${glow.subtle} 0%, transparent 70%)`
          : `radial-gradient(ellipse 60% 60% at 20% 50%, ${glow.subtle} 0%, transparent 70%)`,
      }}
    >
      <div className="section-inner">
        <div className="expl-two-col" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          {/* ── Left: sticky info ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {tags.map((t) => (
                <span key={t.text} style={{
                  ...preset.micro,
                  color:      t.accent ? textColor.accent : textColor.muted,
                  padding: "4px 12px", borderRadius: "20px",
                  background: t.accent ? "rgba(99,102,241,0.10)" : "rgba(255,255,255,0.04)",
                  border:     t.accent ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(255,255,255,0.08)",
                }}>
                  {t.text}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 style={{
              ...preset.display, fontWeight: weight.medium,
              color: textColor.primary, margin: "0 0 20px",
              letterSpacing: tracking.tight,
            }}>
              {title}
            </h2>

            {/* Description */}
            <p style={{
              ...preset.body, color: textColor.secondary,
              margin: "0 0 40px", lineHeight: leading.loose,
              maxWidth: "400px",
            }}>
              {description[lang]}
            </p>
          </motion.div>

          {/* ── Right: carousel ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PhoneCarousel slides={slides} lang={lang} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .expl-two-col {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .expl-two-col > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Game Bento section (indie game, mixed-format assets) ──────────────────────
function GameBentoSection({ lang }: { lang: "en" | "ru" }) {
  const card: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: "14px",
    overflow: "hidden",
    position: "relative",
  };

  const spriteCard: React.CSSProperties = {
    ...card,
    padding: "18px 20px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const chipLabel = (text: string): React.ReactNode => (
    <div style={{
      ...preset.nano,
      color: "rgba(255,255,255,0.65)",   // was 0.35 — raised to 8.5:1 on near-black chip bg
      letterSpacing: tracking.wider,
      textTransform: "uppercase" as const,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.09)",
      padding: "3px 9px",
      borderRadius: "6px",
      display: "inline-block",
    }}>{text}</div>
  );

  const absLabel = (text: string): React.ReactNode => (
    <div style={{
      position: "absolute", top: "12px", left: "12px", zIndex: 2,
      ...preset.nano,
      color: "rgba(255,255,255,0.65)",   // was 0.35 — raised to 8.5:1 on near-black chip bg
      letterSpacing: tracking.wider,
      textTransform: "uppercase" as const,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.09)",
      padding: "3px 9px",
      borderRadius: "6px",
    }}>{text}</div>
  );

  const META = [
    { label: { en: "Role",     ru: "Роль"        }, value: { en: "Developer + Designer", ru: "Разработчик + Дизайнер"  } },
    { label: { en: "Year",     ru: "Год"         }, value: { en: "2024",                 ru: "2024"                    } },
    { label: { en: "Platform", ru: "Платформа"   }, value: { en: "Browser (Web)",        ru: "Браузер (Веб)"           } },
    { label: { en: "Tools",    ru: "Инструменты" }, value: { en: "JS · Canvas · Figma",  ru: "JS · Canvas · Figma"     } },
  ];

  return (
    <section
      id="pixel-archer"
      style={{
        padding: "clamp(64px, 10vw, 100px) 0",
        borderTop: "1px solid rgba(255,255,255,0.055)",
        position: "relative",
        overflow: "hidden",
        background: "#01000a",
      }}
    >
      {/* ── Space background: nebula gradients ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 70% 60% at 10% 50%,  rgba(109,40,217,0.38) 0%, transparent 58%)",
          "radial-gradient(ellipse 50% 50% at 82% 20%,  rgba(29,78,216,0.32)  0%, transparent 55%)",
          "radial-gradient(ellipse 38% 45% at 60% 82%,  rgba(4,120,87,0.22)   0%, transparent 50%)",
          "radial-gradient(ellipse 30% 35% at 88% 72%,  rgba(124,45,18,0.18)  0%, transparent 44%)",
          "radial-gradient(ellipse 45% 28% at 40% 5%,   rgba(219,39,119,0.14) 0%, transparent 48%)",
          "radial-gradient(ellipse 25% 25% at 25% 85%,  rgba(56,189,248,0.12) 0%, transparent 42%)",
        ].join(", "),
      }} />

      {/* ── Star field SVG ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg
          width="100%" height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0 }}
        >
          <style>{`
            @keyframes twinkle {
              0%,100% { opacity: var(--o); }
              50%      { opacity: calc(var(--o) * 0.25); }
            }
            .tw { animation: twinkle var(--dur, 3s) ease-in-out infinite; }
          `}</style>
          {GAME_STARS.map((s, i) => (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r * 0.18}
              fill="white"
              opacity={s.o}
              className={s.tw ? "tw" : undefined}
              style={s.tw ? ({
                "--o": s.o,
                "--dur": `${2.4 + (i % 7) * 0.6}s`,
                animationDelay: `${(i % 11) * 0.4}s`,
              } as React.CSSProperties) : undefined}
            />
          ))}
        </svg>
      </div>

      {/* ── Subtle vignette at edges ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(1,0,10,0.7) 100%)",
      }} />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          style={{ display: "flex", gap: "clamp(32px, 6vw, 80px)", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap" }}
        >
          {/* Left: identity */}
          <div style={{ flex: "0 1 400px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {[
                { text: lang === "en" ? "Personal project" : "Личный проект", accent: true },
                { text: lang === "en" ? "Indie game" : "Инди-игра" },
              ].map((t) => (
                <span key={t.text} style={{
                  ...preset.micro,
                  color: t.accent ? textColor.accent : textColor.muted,
                  padding: "4px 12px", borderRadius: "20px",
                  background: t.accent ? "rgba(99,102,241,0.10)" : "rgba(255,255,255,0.04)",
                  border:     t.accent ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(255,255,255,0.08)",
                }}>
                  {t.text}
                </span>
              ))}
            </div>
            <h2 style={{ ...preset.display, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 18px", letterSpacing: tracking.tight }}>
              Pixel Archer
            </h2>
            <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose, maxWidth: "380px" }}>
              {lang === "en"
                ? "A browser wave-survival game I built from scratch - top-down pixel art arena, custom sprite animation system, wave mechanics, levelling, and a cast of enemies I designed myself."
                : "Браузерная игра-выживалка с нуля: вид сверху, механика волн врагов, прокачка персонажа. Спрайты сгенерированы из видео, вайбкодил в FigmaMake."}
            </p>
          </div>

          {/* Right: meta */}
          <div style={{ flex: 1, minWidth: "220px", display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {META.map((item, i) => (
              <div key={i} style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingRight: i % 2 === 0 ? "20px" : 0 }}>
                <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "4px" }}>
                  {item.label[lang]}
                </div>
                <div style={{ ...preset.small, color: textColor.secondary }}>{item.value[lang]}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {/* Row 1: gameplay screenshot + character art */}
          <div style={{ display: "flex", gap: "12px", height: "380px", marginBottom: "12px" }}>

            {/* Main screenshot */}
            <div style={{ ...card, flex: "0 0 60%" }}>
              {absLabel(lang === "en" ? "Gameplay" : "Геймплей")}
              <img src={gameShot} alt="Gameplay" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
            </div>

            {/* Right column: hero char + two variants */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ ...card, flex: 1, background: "#000" }}>
                {absLabel(lang === "en" ? "Main character" : "Главный герой")}
                <img src={gameChar3} alt="Main character" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block" }} />
              </div>
              <div style={{ display: "flex", gap: "12px", flex: "0 0 110px" }}>
                <div style={{ ...card, flex: 1, background: "#000" }}>
                  <img src={gameChar1} alt="Character v1" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ ...card, flex: 1, background: "#000" }}>
                  <img src={gameChar2} alt="Character v2" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: full sprite sheet */}
          <div style={{ ...spriteCard, marginBottom: "12px" }}>
            {chipLabel(lang === "en" ? "Sprite sheet · Player" : "Таблица спрайтов · Игрок")}
            <img src={gameSpriteSheet} alt="Player sprite sheet" style={{ width: "100%", height: "auto", display: "block", imageRendering: "pixelated" }} />
          </div>

          {/* Row 3: enemy sprites */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {[
              { src: gameEnemy,    label: { en: "Enemy · Reaper",   ru: "Враг · Жнец"    } },
              { src: gameGargoyle, label: { en: "Enemy · Gargoyle", ru: "Враг · Горгулья"} },
              { src: gameGoblin,   label: { en: "Enemy · Goblin",   ru: "Враг · Гоблин"  } },
            ].map((e) => (
              <div key={e.label.en} style={spriteCard}>
                {chipLabel(e.label[lang])}
                <img src={e.src} alt={e.label.en} style={{ width: "100%", height: "auto", display: "block", imageRendering: "pixelated" }} />
              </div>
            ))}
          </div>
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            #pixel-archer .bento-top { flex-direction: column !important; height: auto !important; }
            #pixel-archer .bento-top > div:first-child { flex: none !important; width: 100% !important; aspect-ratio: 16/9; }
            #pixel-archer .bento-enemies { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export function ExplorationPage() {
  const { lang } = useOutletContext<OutletCtx>();

  return (
    <main style={{ background: colors.bg, minHeight: "100dvh", paddingTop: "80px" }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        padding: "64px 0 72px",
        background: `radial-gradient(ellipse 70% 55% at 25% -10%, ${glow.medium} 0%, transparent 60%)`,
      }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link
              to="/#projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                ...preset.small, color: textColor.muted, textDecoration: "none",
                marginBottom: "48px",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = textColor.secondary)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textColor.muted)}
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              {lang === "en" ? "Selected Work" : "Избранные работы"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
          >
            <div style={{
              ...preset.nano, color: textColor.accent,
              letterSpacing: tracking.wider, textTransform: "uppercase" as const,
              marginBottom: "16px",
            }}>
              {lang === "en" ? "Side projects & experiments" : "Небольшие проекты и концепты"}
            </div>
            <h1 style={{
              ...preset.display, fontWeight: weight.medium,
              color: textColor.primary, margin: "0 0 20px",
              letterSpacing: tracking.tight,
            }}>
              {lang === "en" ? "Exploration" : "Эксперименты"}
            </h1>
            <p style={{
              ...preset.body, color: textColor.secondary,
              margin: 0, maxWidth: "520px", lineHeight: leading.loose,
            }}>
              {lang === "en"
                ? "Projects that didn't make it into the main case studies - but shaped how I think about design problems. One format per project."
                : "Не все проекты стали кейсами. Но каждый из них повлиял на то, как я подхожу к задачам."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══ FLOWPAY ════════════════════════════════════════════════════════════ */}
      <ProjectSection
        id="flowpay"
        tags={[
          { text: "Fintech", accent: true },
          { text: "Payment widget" },
        ]}
        title="FlowPay"
        description={{
          en: "An embeddable payment widget for SaaS and e-commerce platforms. Covers the full checkout flow - amount input, order summary, and clear payment status screens.",
          ru: "Встраиваемый платёжный виджет для SaaS и e-commerce. Покрывает полный флоу оплаты: ввод суммы, сводка заказа и экраны статуса платежа.",
        }}
        slides={FLOWPAY_SLIDES}
        lang={lang}
        glowRight
      />

      {/* ══ MERCK PHARMA PORTAL ═══════════════════════════════════════════════ */}
      <ProjectSection
        id="merck-portal"
        tags={[
          { text: lang === "en" ? "Pharma" : "Фарма", accent: true },
          { text: lang === "en" ? "Medical portal" : "Медицинский портал" },
        ]}
        title={lang === "en" ? "Pharma Portal" : "Фарм-портал"}
        description={{
          en: "A large-scale medical portal for Merck - a platform for healthcare professionals with nosology directories, event calendars, interactive calculators and an expert library.",
          ru: "Масштабный медицинский портал для платформы специалистов здравоохранения. Каталог нозологий, календарь мероприятий, интерактивные калькуляторы и библиотека экспертов.",
        }}
        slides={MERCK_SLIDES}
        lang={lang}
      />

      {/* ══ ORANGEDATA ══════════════════════════════════════════════════════════ */}
      <ProjectSection
        id="orangedata"
        tags={[
          { text: "Fintech", accent: true },
          { text: lang === "en" ? "Onboarding" : "Онбординг" },
        ]}
        title="OrangeData"
        description={{
          en: "Registration flow for OrangeData - a fiscal data operator. A 4-step onboarding: phone verification, personal data, organisation details, and a confirmation screen. Designed to feel trustworthy and fast.",
          ru: "Флоу регистрации для оператора фискальных данных. Онбординг из 4 шагов: подтверждение телефона, личные данные, данные организации и финальный экран успеха.",
        }}
        slides={ORANGEDATA_SLIDES}
        lang={lang}
        glowRight
      />

      {/* ══ SITELYNX ════════════════════════════════════════════════════════════ */}
      <ProjectSection
        id="sitelynx"
        tags={[
          { text: lang === "en" ? "No-code" : "Но-код", accent: true },
          { text: lang === "en" ? "Website builder" : "Конструктор сайтов" },
        ]}
        title="Sitelynx"
        description={{
          en: "A no-code platform for creating personal business card websites. Users customise blocks - photo, video, links - directly from a mobile editor with live preview and auto-save.",
          ru: "Но-код конструктор персональных сайтов-визиток. Пользователь собирает страницу из блоков - фото, видео, ссылки - в мобильном редакторе с превью в реальном времени и автосохранением.",
        }}
        slides={SITELYNX_SLIDES}
        lang={lang}
      />

      {/* ══ PIXEL ARCHER ════════════════════════════════════════════════════════ */}
      <GameBentoSection lang={lang} />

      {/* ── BACK NAV ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)", padding: "28px 0 0" }}>
        <div className="section-inner">
          <Link
            to="/#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              ...preset.small, color: textColor.muted, textDecoration: "none",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = textColor.secondary)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = textColor.muted)}
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            {lang === "en" ? "Back to all work" : "Все проекты"}
          </Link>
        </div>
      </div>

      <ContactSection lang={lang} />
    </main>
  );
}