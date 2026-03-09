import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { preset, weight, leading, tracking, textColor, glow, colors } from "../styles/typography";
import { CASES } from "../data/cases";
import type { CaseData, Metric } from "../data/cases";
import paymentMockupImg    from "figma:asset/c3bc908ca6bf442f6af86f373e953f067176ce3c.png";
import analyticsMockupImg  from "figma:asset/409be3f8aa2bc996a3cd04a8e5ec279f5459ec20.png";

// ─── Tag pill — единый компонент для всех карточек ──────────────────────────

function TagPill({ label }: { label: string }) {
  return (
    <span style={{
      ...preset.micro,
      fontWeight: weight.regular,
      letterSpacing: tracking.wider,
      textTransform: "uppercase",
      color: textColor.muted,
      alignSelf: "flex-start",
      padding: "4px 12px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      {label}
    </span>
  );
}

// ─── Metric Stat — чистая типографика, без фона и рамки ─────────────────────

function MetricStat({ metric, lang }: { metric: Metric; lang: "en" | "ru" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <span style={{ ...preset.h3, fontWeight: weight.semibold, color: textColor.accent, lineHeight: 1 }}>
        {metric.value}
      </span>
      <span style={{ ...preset.nano, fontWeight: weight.regular, color: textColor.muted, letterSpacing: tracking.wide }}>
        {metric.label[lang]}
      </span>
    </div>
  );
}

// ─── Space Particles Canvas ─────────────────────────────────────────────────

function SpaceCanvas({ hovered }: { hovered: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const hovRef    = useRef(hovered);

  useEffect(() => { hovRef.current = hovered; }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      canvas.width  = p.offsetWidth  * dpr;
      canvas.height = p.offsetHeight * dpr;
      canvas.style.width  = p.offsetWidth  + "px";
      canvas.style.height = p.offsetHeight + "px";
    };
    resize();

    const cssW = canvas.width  / dpr;
    const cssH = canvas.height / dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // ── Pre-bake nebulas once into an OffscreenCanvas ─────────────────────
    const nebulaOC  = new OffscreenCanvas(Math.ceil(cssW), Math.ceil(cssH));
    const nebulaCtx = nebulaOC.getContext("2d")!;
    (
      [
        // Deep purple — dominant nebula, top-right
        { cx: cssW * 0.74, cy: cssH * 0.28, r: cssW * 0.52, c0: "rgba(109,40,217,0.42)",  c1: "rgba(109,40,217,0)"  },
        // Electric indigo — centre
        { cx: cssW * 0.42, cy: cssH * 0.55, r: cssW * 0.46, c0: "rgba(99,102,241,0.32)",  c1: "rgba(99,102,241,0)"  },
        // Blue — left-edge
        { cx: cssW * 0.08, cy: cssH * 0.50, r: cssW * 0.38, c0: "rgba(29,78,216,0.30)",   c1: "rgba(29,78,216,0)"   },
        // Violet accent — bottom-left
        { cx: cssW * 0.20, cy: cssH * 0.82, r: cssW * 0.30, c0: "rgba(139,92,246,0.28)",  c1: "rgba(139,92,246,0)"  },
        // Pink accent — top-left corner
        { cx: cssW * 0.12, cy: cssH * 0.14, r: cssW * 0.28, c0: "rgba(219,39,119,0.18)",  c1: "rgba(219,39,119,0)"  },
        // Teal — bottom-right
        { cx: cssW * 0.88, cy: cssH * 0.78, r: cssW * 0.26, c0: "rgba(20,184,166,0.15)",  c1: "rgba(20,184,166,0)"  },
        // Soft dark vignette — centre depth (much lighter than before)
        { cx: cssW * 0.50, cy: cssH * 0.50, r: cssW * 0.60, c0: "rgba(3,7,18,0.38)",      c1: "rgba(3,7,18,0)"      },
      ] as const
    ).forEach(({ cx, cy, r, c0, c1 }) => {
      const g = nebulaCtx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, c0);
      g.addColorStop(1, c1);
      nebulaCtx.fillStyle = g;
      nebulaCtx.fillRect(0, 0, cssW, cssH);
    });

    // ── Stars ──────────────────────────────────────────────────────────
    type Star = {
      x: number; y: number; r: number;
      baseAlpha: number; phase: number; speed: number;
      rgb: string;
    };
    // More color variety: white, ice-blue, lavender, warm-white, gold-tint
    const KINDS = [
      "240,244,255","240,244,255","240,244,255","240,244,255",
      "200,210,255","200,210,255","220,200,255",
      "255,240,200","165,180,252","196,181,253","187,230,255",
    ];
    const stars: Star[] = Array.from({ length: 360 }, () => ({
      x:         Math.random() * cssW,
      y:         Math.random() * cssH,
      r:         Math.random() ** 1.9 * 1.9 + 0.3,
      baseAlpha: Math.random() * 0.60 + 0.32,
      phase:     Math.random() * Math.PI * 2,
      speed:     Math.random() * 0.022 + 0.006,
      rgb:       KINDS[Math.floor(Math.random() * KINDS.length)],
    }));

    // ── Shooting stars ─────────────────────────────────────────────────────
    type Shoot = { x: number; y: number; vx: number; vy: number; len: number; life: number; maxLife: number };
    const shoots: Shoot[] = [];
    let shootTimer = 0;
    const spawnShoot = () => {
      const angle = (Math.random() * 25 + 15) * (Math.PI / 180);
      shoots.push({ x: Math.random() * cssW * 0.7, y: Math.random() * cssH * 0.4,
        vx: Math.cos(angle) * 6, vy: Math.sin(angle) * 6,
        len: Math.random() * 100 + 70, life: 0, maxLife: Math.random() * 28 + 22 });
    };

    let frame = 0;

    // ── Render loop ────────────────────────────────────────────────────────
    const render = () => {
      ctx.clearRect(0, 0, cssW, cssH);
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, cssW, cssH);

      // Nebulas: single blit from pre-baked offscreen
      ctx.drawImage(nebulaOC, 0, 0, cssW, cssH);

      const hov = hovRef.current;
      stars.forEach(star => {
        const spd = hov ? star.speed * 1.6 : star.speed;
        const twinkle = Math.sin(frame * spd + star.phase);
        const alpha = star.baseAlpha * (0.38 + 0.62 * ((twinkle + 1) / 2));

        // Subtle glow only on the largest stars
        if (star.r > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.rgb},${(alpha * 0.055).toFixed(3)})`;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.rgb},${alpha.toFixed(3)})`;
        ctx.fill();
      });

      // Shooting stars
      shootTimer++;
      if (shootTimer >= (hov ? 55 : 140)) { spawnShoot(); shootTimer = 0; }
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        const alpha = Math.sin((s.life / s.maxLife) * Math.PI) * 0.95;
        const tailX = s.x - (s.vx / 6) * s.len;
        const tailY = s.y - (s.vy / 6) * s.len;
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "rgba(226,232,240,0)");
        grad.addColorStop(0.6, `rgba(200,210,255,${(alpha * 0.6).toFixed(3)})`);
        grad.addColorStop(1,   `rgba(240,244,255,${alpha.toFixed(3)})`);
        ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke();
        // head glow — brighter
        ctx.beginPath(); ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,228,255,${(alpha * 0.7).toFixed(3)})`; ctx.fill();
        s.x += s.vx; s.y += s.vy; s.life++;
        if (s.life >= s.maxLife) shoots.splice(i, 1);
      }

      frame++;
      rafRef.current = requestAnimationFrame(render);
    };

    // ── Pause RAF when canvas is off-screen ────────────────────────────────
    const visObs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    }, { threshold: 0 });
    visObs.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      visObs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, display: "block", pointerEvents: "none" }}
    />
  );
}

// ─── Static phone mockup for analytics card ─────────────────────────────────

function AnalyticsPhoneMockup({ hovered }: { hovered: boolean }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "18px 16px", gap: "10px", background: "#080d1a" }}>
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.4 }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", color: "#94a3b8" }}>9:41</span>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <div style={{ width: "12px", height: "6px", borderRadius: "1px", border: "1px solid #94a3b8", position: "relative" }}>
            <div style={{ position: "absolute", inset: "1px", right: "auto", width: "60%", background: "#94a3b8", borderRadius: "0.5px" }} />
          </div>
          <div style={{ display: "flex", gap: "1px", alignItems: "flex-end", height: "8px" }}>
            {[3, 5, 7, 9].map((h, i) => (
              <div key={i} style={{ width: "2px", height: `${h}px`, background: "#94a3b8", borderRadius: "1px" }} />
            ))}
          </div>
        </div>
      </div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", color: "#e2e8f0", fontWeight: 600 }}>Analytics</span>
        <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#818cf8" }} />
        </div>
      </div>
      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
        {[{ val: "+41%", lbl: "DAU", col: "#818cf8" }, { val: "9 min", lbl: "Time-to-insight", col: "#34d399" }].map((k, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "8px 10px" }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 700, color: k.col }}>{k.val}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", color: "#64748b", marginTop: "2px" }}>{k.lbl}</div>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "10px", flex: 1 }}>
        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "9px", color: "#64748b", marginBottom: "8px" }}>Widget engagement</div>
        <svg width="100%" height="60" viewBox="0 0 160 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,50 C20,45 30,30 50,28 C70,26 80,20 100,15 C120,10 140,8 160,5" fill="none" stroke="#818cf8" strokeWidth="1.5" />
          <path d="M0,50 C20,45 30,30 50,28 C70,26 80,20 100,15 C120,10 140,8 160,5 L160,60 L0,60 Z" fill="url(#cg)" />
        </svg>
      </div>
      {/* Bottom row */}
      <div style={{ display: "flex", gap: "6px" }}>
        {["Users", "Revenue", "Churn"].map((lbl, i) => (
          <div key={i} style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: "6px", padding: "6px 4px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "8px", color: "#475569" }}>{lbl}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 600, color: hovered ? "#a5b4fc" : "#94a3b8", marginTop: "2px", transition: "color 0.3s" }}>
              {["1.4k", "↑18%", "↓3×"][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Case Study Card ────────────────────────────────────────────────────────

function CaseCard({ data, lang, index }: { data: CaseData; lang: "en" | "ru"; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  return (
    <motion.article
      ref={cardRef as React.RefObject<HTMLElement>}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="case-card"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: "20px",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.07)"}`,
        background: hovered ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.015)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s, background 0.3s",
        minHeight: "360px",
      }}
    >
      {/* ── Left: text ── */}
      <div
        className="case-card-text"
        style={{
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "40px 44px",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="case-card-body" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TagPill label={data.industry[lang]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h3 style={{ ...preset.h2, fontWeight: weight.semibold, color: textColor.primary, margin: 0 }}>
              {data.title[lang]}
            </h3>
            <p style={{ ...preset.small, fontWeight: weight.light, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
              {data.description[lang]}
            </p>
          </div>
          <MetricStat metric={data.metrics[0]} lang={lang} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "32px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.22 }}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <span style={{ ...preset.micro, fontWeight: weight.regular, color: hovered ? textColor.accent : textColor.muted, transition: "color 0.2s" }}>
              {lang === "en" ? "View case study" : "Смотреть кейс"}
            </span>
            <ArrowUpRight size={12} color={hovered ? textColor.accent : textColor.muted} style={{ transition: "color 0.2s", flexShrink: 0 }} />
          </motion.div>
        </div>
      </div>

      {/* ── Right: phone mockup ── */}
      <div
        className="case-card-lottie"
        style={{
          position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(255,255,255,0.025)", padding: "40px 32px", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 55%, rgba(129,140,248,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <motion.div
          animate={{ y: hovered ? -6 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "220px",
            aspectRatio: "375 / 812",
            borderRadius: "34px",
            border: "1.5px solid rgba(255,255,255,0.13)",
            background: "#080d1a", overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {index === 0
            ? <img src={paymentMockupImg}   alt="Payment Mockup"   style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <img src={analyticsMockupImg} alt="Analytics Mockup" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          }
        </motion.div>

        {/* Fade for mobile peek */}
        <div className="case-card-lottie-fade" style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(3,7,18,0.95))",
          pointerEvents: "none",
          display: "none",
        }} />
      </div>
    </motion.article>
  );
}

// ─── Misc Card ────────────────────────────────────────────────────────────────

const MISC = {
  en: {
    tag: "Misc",
    title: "Exploration",
    description: "Product screens, AI interfaces, concept experiments, side projects and visual explorations. Things made out of curiosity rather than a brief.",
    cta: "View all work",
  },
  ru: {
    tag: "Разное",
    title: "Эксперименты",
    description: "Продуктовые экраны, AI-интерфейсы, концептуальные эксперименты, сайд-проекты и визуальные исследования. То, что сделано из любопытства, а не по брифу.",
    cta: "Смотреть все работы",
  },
};

function MiscCard({ lang }: { lang: "en" | "ru" }) {
  const [hovered, setHovered] = useState(false);
  const t = MISC[lang];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.985 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="case-card"
      style={{
        position: "relative",
        borderRadius: "20px",
        border: `1px solid ${hovered ? "rgba(165,180,252,0.22)" : "rgba(255,255,255,0.07)"}`,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.4s",
        height: "300px",
      }}
    >
      {/* ── Particles background ── */}
      <SpaceCanvas hovered={hovered} />

      {/* Bottom vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.2) 55%, transparent 100%)",
        pointerEvents: "none",
      }} />
      {/* Side vignettes */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(3,7,18,0.55) 0%, transparent 30%, transparent 70%, rgba(3,7,18,0.55) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        className="misc-card-content"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 44px",
        }}>
        {/* Top: tag */}
        <TagPill label={t.tag} />

        {/* Bottom: title + description + CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3 style={{ ...preset.h2, fontWeight: weight.semibold, color: textColor.primary, margin: 0 }}>
            {t.title}
          </h3>

          <p style={{
            ...preset.small,
            fontWeight: weight.light,
            color: textColor.secondary,
            margin: 0,
            lineHeight: leading.loose,
            maxWidth: "480px",
            opacity: 0.8,
          }}>
            {t.description}
          </p>

          <motion.div
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ display: "flex", alignItems: "center", gap: "5px", paddingTop: "6px" }}
          >
            <span style={{
              ...preset.micro,
              fontWeight: weight.regular,
              color: hovered ? textColor.primary : textColor.muted,
              transition: "color 0.25s",
            }}>
              {t.cta}
            </span>
            <ArrowUpRight size={12}
              color={hovered ? textColor.primary : textColor.muted}
              style={{ transition: "color 0.25s", flexShrink: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

const SECTION_LABEL = { en: "Selected Work", ru: "Избранные работы" };

export function CasesSection({ lang }: { lang: "en" | "ru" }) {
  return (
    <section
      id="projects"
      style={{ background: `radial-gradient(ellipse 75% 85% at -8% 75%, ${glow.subtle} 0%, transparent 55%), ${colors.bg}`, padding: "100px 0 140px", position: "relative" }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}
        >
          <span style={{
            display: "block", width: "24px", height: "1px",
            background: textColor.accent, opacity: 0.7, flexShrink: 0,
          }} />
          <span style={{ ...preset.micro, fontWeight: weight.regular, letterSpacing: tracking.wider, textTransform: "uppercase", color: textColor.muted }}>
            {SECTION_LABEL[lang]}
          </span>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {CASES.map((c, i) => (
            <Link
              key={c.id}
              to={`/cases/${c.slug}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <CaseCard data={c} lang={lang} index={i} />
            </Link>
          ))}
          <Link to="/exploration" style={{ display: "block", textDecoration: "none" }}>
            <MiscCard lang={lang} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .case-card {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .case-card-lottie {
            display: flex !important;
            height: 220px !important;
            padding: 32px 20px 0 !important;
            align-items: flex-start !important;
            justify-content: center !important;
            border-top: 1px solid rgba(255,255,255,0.06) !important;
          }
          .case-card-lottie-fade {
            display: block !important;
            top: auto !important;
            bottom: 0 !important;
            background: linear-gradient(to bottom, transparent, rgba(3,7,18,0.95)) !important;
          }
          .case-card-text {
            padding: 28px 24px !important;
            border-right: none !important;
          }
          .misc-card-content {
            padding: 28px 24px !important;
          }
          .case-card-body {
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}