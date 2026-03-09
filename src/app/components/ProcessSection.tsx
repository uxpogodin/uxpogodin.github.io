import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { preset, weight, leading, tracking, textColor, colors } from "../styles/typography";

interface HighlightedWord {
  text: { en: string; ru: string };
  tooltip: { en: string; ru: string };
}

const WORDS: HighlightedWord[] = [
  {
    text:    { en: "balance",      ru: "Ищу" },
    tooltip: { en: "Find the balance between business goals and user needs before jumping to solutions.", ru: "Нахожу баланс между задачами бизнеса и потребностями пользователей до начала работы над решением." },
  },
  {
    text:    { en: "define",       ru: "Определяю" },
    tooltip: { en: "Synthesise research into one clear problem statement. Align the team before touching solutions.", ru: "Превращаю исследование в чёткое понимание проблемы. Привожу команду к единому видению решения." },
  },
  {
    text:    { en: "explore",      ru: "ищу" },
    tooltip: { en: "Sketch widely, analyse competitors, consider edge cases. Quantity before quality.", ru: "Генерир��ю много идей, изучаю конкурентов, прорабатываю нестандартные сценарии." },
  },
  {
    text:    { en: "prototype",    ru: "прототипирую" },
    tooltip: { en: "Turn ideas into tangible artefacts. From paper sketches to interactive flows.", ru: "От идеи до кликабельного прототипа - быстро, с нейросетями, без лишних итераций." },
  },
  {
    text:    { en: "test",         ru: "тестирую" },
    tooltip: { en: "Validate with real users. Identify friction, gaps in mental models, and prioritise fixes.", ru: "Тестирую на реальных пользователях, нахожу точки трения и расставляю приоритеты в правках." },
  },
  {
    text:    { en: "launch",       ru: "запускаю" },
    tooltip: { en: "Work closely with engineers, review components and ship the product to users.", ru: "Работаю в связке с командой - дизайнеры, аналитики, разработчики, менеджеры. Проверяю компоненты и довожу продукт до релиза." },
  },
];

const CONTENT = {
  en: {
    label: "Process",
    before: "I ",
    between: [" business goals and user needs. Then ", " the problem, ", " ideas, ", ", ", " and ", " with the team."],
    outcome: "",
  },
  ru: {
    label: "Процесс",
    before: "",
    between: [" баланс между задачами бизнеса и потребностями пользователей. ", " проблему, ", " решения, ", ", ", " и ", " с командой."],
    outcome: "",
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Process flow canvas ──────────────────────────────────────────────────────
// Renders an abstract node-graph of the 6 design-process steps.
// 6 nodes · 7 bezier edges (5 forward solid + 2 feedback dashed)
// 2 glowing particles per edge flow along the paths.
// Only animates when the canvas is in viewport.

function ProcessFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Normalised node positions [x, y] (0‥1)
    const NODES: [number, number][] = [
      [0.06, 0.48], // 0 empathize
      [0.24, 0.24], // 1 define
      [0.44, 0.60], // 2 explore
      [0.62, 0.28], // 3 build
      [0.80, 0.62], // 4 test
      [0.95, 0.36], // 5 implement
    ];

    // [from, to, isFeedback]
    const EDGES: [number, number, boolean][] = [
      [0, 1, false],
      [1, 2, false],
      [2, 3, false],
      [3, 4, false],
      [4, 5, false],
      [4, 1, true],  // test → define  (feedback)
      [5, 0, true],  // implement → empathize (full cycle)
    ];

    // 2 staggered particles per edge
    const particles = EDGES.map((_, ei) => [
      { t: (ei * 0.14) % 1,        speed: 0.052 + (ei % 3) * 0.016 },
      { t: ((ei * 0.14) + 0.5) % 1, speed: 0.052 + (ei % 3) * 0.016 },
    ]);

    let raf = 0;
    let lastMs = 0;
    let inView = true;

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      const dpr = devicePixelRatio;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Intersection (pause when off-screen) ────────────────────────────────
    const io = new IntersectionObserver(
      ([e]) => { inView = e.isIntersecting; },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    // ── Math helpers ────────────────────────────────────────────────────────
    const px = (nx: number) => nx * canvas.width;
    const py = (ny: number) => ny * canvas.height;

    const quadPt = (
      ax: number, ay: number,
      cpx: number, cpy: number,
      bx: number, by: number,
      t: number,
    ) => {
      const m = 1 - t;
      return { x: m*m*ax + 2*m*t*cpx + t*t*bx, y: m*m*ay + 2*m*t*cpy + t*t*by };
    };

    const ctrlPt = (ax: number, ay: number, bx: number, by: number, isFb: boolean) => {
      const mx = (ax + bx) / 2, my = (ay + by) / 2;
      const dx = bx - ax,       dy = by - ay;
      // feedback arcs bow below the main flow
      const k = isFb ? 0.52 : -0.26;
      return { cpx: mx + dy * k, cpy: my - dx * k };
    };

    // ── Draw ────────────────────────────────────────────────────────────────
    const draw = (now: number) => {
      const dt = Math.min((now - lastMs) * 0.001, 0.05);
      lastMs = now;

      if (!inView) { raf = requestAnimationFrame(draw); return; }

      const w = canvas.width, h = canvas.height;
      const dpr = devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      // — Edges —
      EDGES.forEach(([fi, ti, isFb]) => {
        const ax = px(NODES[fi][0]), ay = py(NODES[fi][1]);
        const bx = px(NODES[ti][0]), by = py(NODES[ti][1]);
        const { cpx, cpy } = ctrlPt(ax, ay, bx, by, isFb);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(cpx, cpy, bx, by);
        ctx.lineWidth = 0.85 * dpr;
        ctx.strokeStyle = isFb ? "rgba(129,140,248,0.08)" : "rgba(99,102,241,0.13)";
        if (isFb) ctx.setLineDash([4 * dpr, 7 * dpr]);
        else      ctx.setLineDash([]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // — Nodes —
      NODES.forEach(([nx, ny]) => {
        const x = px(nx), y = py(ny);
        // ambient halo
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 20 * dpr);
        halo.addColorStop(0, "rgba(129,140,248,0.20)");
        halo.addColorStop(1, "rgba(129,140,248,0)");
        ctx.beginPath();
        ctx.arc(x, y, 20 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();
        // core dot
        ctx.beginPath();
        ctx.arc(x, y, 2.2 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165,180,252,0.62)";
        ctx.fill();
      });

      // — Particles —
      EDGES.forEach(([fi, ti, isFb], ei) => {
        const ax = px(NODES[fi][0]), ay = py(NODES[fi][1]);
        const bx = px(NODES[ti][0]), by = py(NODES[ti][1]);
        const { cpx, cpy } = ctrlPt(ax, ay, bx, by, isFb);

        particles[ei].forEach((p) => {
          p.t = (p.t + dt * p.speed) % 1;
          const { x, y } = quadPt(ax, ay, cpx, cpy, bx, by, p.t);

          // outer glow (3 quick circles — cheaper than radialGradient per frame)
          ctx.beginPath(); ctx.arc(x, y, 7 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(165,180,252,0.10)"; ctx.fill();

          ctx.beginPath(); ctx.arc(x, y, 4 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(165,180,252,0.25)"; ctx.fill();

          // bright core
          ctx.beginPath(); ctx.arc(x, y, 1.7 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(210,220,255,0.90)"; ctx.fill();
        });
      });

      // — Vignette (blend canvas into section edges) —
      const topG = ctx.createLinearGradient(0, 0, 0, h * 0.18);
      topG.addColorStop(0, "rgba(3,7,18,1)");
      topG.addColorStop(1, "rgba(3,7,18,0)");
      ctx.fillStyle = topG; ctx.fillRect(0, 0, w, h * 0.18);

      const btmG = ctx.createLinearGradient(0, h * 0.82, 0, h);
      btmG.addColorStop(0, "rgba(3,7,18,0)");
      btmG.addColorStop(1, "rgba(3,7,18,1)");
      ctx.fillStyle = btmG; ctx.fillRect(0, h * 0.82, w, h * 0.18);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

// ─── Bottom Sheet ──────────────────────────────────────────────────────────────

function BottomSheet({ word, lang, onClose }: { word: HighlightedWord; lang: "en" | "ru"; onClose: () => void }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <AnimatePresence>
      <div style={{ position: "fixed", inset: 0, zIndex: 300 }}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />

        {/* Sheet */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.8 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#0d1120",
            borderRadius: "20px 20px 0 0",
            border: "1px solid rgba(129,140,248,0.15)",
            borderBottom: "none",
            padding: "20px 24px 40px",
          }}
        >
          {/* Drag handle */}
          <div style={{
            width: "36px",
            height: "4px",
            borderRadius: "2px",
            background: "rgba(255,255,255,0.12)",
            margin: "0 auto 24px",
          }} />

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{
              ...preset.h3,
              fontWeight: weight.medium,
              color: textColor.accent,
            }}>
              {word.text[lang]}
            </span>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: textColor.muted,
              }}
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Content */}
          <p style={{
            ...preset.body,
            fontWeight: weight.light,
            color: textColor.secondary,
            lineHeight: leading.loose,
            margin: 0,
          }}>
            {word.tooltip[lang]}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Tooltip word ─────────────────────────────────────────────────────────────

function TooltipWord({
  word,
  lang,
  isMobile,
  onTap,
}: {
  word: HighlightedWord;
  lang: "en" | "ru";
  isMobile: boolean;
  onTap: (w: HighlightedWord) => void;
}) {
  const [hovered, setHovered] = useState(false);

  if (isMobile) {
    return (
      <span
        onClick={() => onTap(word)}
        style={{
          color: textColor.accent,
          fontWeight: weight.medium,
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          textDecorationColor: "rgba(129,140,248,0.4)",
          textUnderlineOffset: "3px",
        }}
      >
        {word.text[lang]}
      </span>
    );
  }

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        color: hovered ? textColor.accentLight : textColor.accent,
        fontWeight: weight.medium,
        cursor: "default",
        transition: "color 0.2s",
      }}>
        {word.text[lang]}
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              left: "50%",
              marginLeft: "-110px",
              zIndex: 100,
              width: "220px",
              padding: "12px 14px",
              borderRadius: "12px",
              background: "#0f1629",
              border: "1px solid rgba(129,140,248,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span style={{
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              marginLeft: "-4px",
              width: "8px",
              height: "8px",
              background: "#0f1629",
              borderRight: "1px solid rgba(129,140,248,0.2)",
              borderBottom: "1px solid rgba(129,140,248,0.2)",
              transform: "rotate(45deg)",
              display: "block",
            }} />
            <span style={{
              ...preset.small,
              fontWeight: weight.light,
              color: textColor.secondary,
              lineHeight: leading.normal,
              display: "block",
            }}>
              {word.tooltip[lang]}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function ProcessSection({ lang }: { lang: "en" | "ru" }) {
  const t = CONTENT[lang];
  const [activeWord, setActiveWord] = useState<HighlightedWord | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="process"
      style={{ position: "relative", padding: "100px 0 120px", overflow: "hidden" }}
    >
      {/* ── Base dark layer ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "#04081a", zIndex: 0 }} />

      {/* ── Process flow graph — fades in as section enters viewport ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        <ProcessFlowCanvas />
      </motion.div>

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
      <div className="section-inner">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}
        >
          <span style={{
            display: "block", width: "24px", height: "1px",
            background: textColor.accent, opacity: 0.7, flexShrink: 0,
          }} />
          <span style={{
            ...preset.micro,
            fontWeight: weight.regular,
            letterSpacing: tracking.wider,
            textTransform: "uppercase",
            color: textColor.muted,
          }}>
            {t.label}
          </span>
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="process-statement"
          style={{
            ...preset.h1,
            fontWeight: weight.light,
            color: textColor.secondary,
            lineHeight: leading.snug,
            margin: "0 0 28px",
          }}
        >
          {t.before}
          {WORDS.map((word, i) => (
            <span key={word.text.en}>
              <TooltipWord word={word} lang={lang} isMobile={isMobile} onTap={setActiveWord} />
              {t.between[i]}
            </span>
          ))}
        </motion.div>

        {/* Outcome */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          style={{
            ...preset.body,
            fontWeight: weight.light,
            color: textColor.muted,
            lineHeight: leading.loose,
            margin: 0,
            maxWidth: "560px",
          }}
        >
          {t.outcome}
        </motion.p>

      </div>

      {/* Bottom sheet */}
      {activeWord && (
        <BottomSheet
          word={activeWord}
          lang={lang}
          onClose={() => setActiveWord(null)}
        />
      )}

      <style>{`
        @media (max-width: 640px) {
          .process-statement {
            font-size: clamp(22px, 6vw, 36px) !important;
          }
        }
      `}</style>
    </div>
    </section>
  );
}