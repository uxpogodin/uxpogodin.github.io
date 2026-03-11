import { Nfc } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import photo from "figma:asset/489ad1a58e0c1187c1b7b774593f475800902a82.png";
import heroPhoto from "figma:asset/8a2e0252a820a5aef732d517a45893117b93e89f.png";
import { preset, weight, tracking, textColor, glow, colors, ctaButton } from "../styles/typography";
import { useTheme } from "../context/ThemeContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const navLinks = {
  en: [
    { label: "Projects",    href: "#projects" },
    { label: "Process",     href: "#process"  },
    { label: "Tools",       href: "#tools"    },
    { label: "About",       href: "#about"    },
    { label: "Contact",     href: "#contact"  },
  ],
  ru: [
    { label: "Проекты",     href: "#projects" },
    { label: "Процесс",     href: "#process"  },
    { label: "Инструменты", href: "#tools"    },
    { label: "Обо мне",     href: "#about"    },
    { label: "Контакт",     href: "#contact"  },
  ],
};

const content = {
  en: {
    cta: "Get in touch",
    seeWork: "View my work →",
  },
  ru: {
    cta: "Написать мне",
    seeWork: "Посмотреть портфолио →",
  },
};

interface HeroSectionProps {
  lang: "en" | "ru";
}

export function HeroSection({ lang }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      background: `radial-gradient(ellipse 110% 70% at 112% -10%, ${glow.strong} 0%, transparent 60%), ${colors.bg}`,
      position: "relative",
      minHeight: "100dvh",
    }}>

      {/* ── Figma grid (desktop only) ── */}
      <FigmaGrid />

      {/* ── Hero ── */}
      <section
        className="px-5 md:px-8"
        style={{
          height: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="flex w-full max-w-5xl flex-col items-center gap-8 text-center lg:gap-10">

          {/* Hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid rgba(165,180,252,0.18)",
              boxShadow: "0 0 0 4px rgba(165,180,252,0.06), 0 8px 32px rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
          >
            <img
              src={heroPhoto}
              alt="Yury Pogodin"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.22)}
            style={{ margin: 0, padding: 0, width: "100%", maxWidth: "1000px" }}
          >
            {/* Greeting — small, muted */}
            <span
              style={{
                ...preset.h3,
                color: textColor.secondary,
                display: "block",
                marginBottom: "0.55em",
              }}
            >
              {lang === "en" ? "Hi, I\u2019m Yuri." : "Привет, я Юра."}
            </span>

            {/* Main descriptor — large */}
            <span
              style={{
                ...preset.display,
                color: textColor.primary,
                display: "block",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                minWidth: 0,
              }}
            >
              {lang === "en" ? (
                <>
                  <span style={{ color: textColor.accent }}>Product&nbsp;Designer</span>
                  {" focused on\u00A0payment"}
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"\u00A0systems"}
                    <InlineCard />
                  </span>
                </>
              ) : (
                <>
                  <span style={{ color: textColor.accent }}>Продуктовый дизайнер</span>
                  {", специализируюсь на\u00A0платёжных системах"}
                  <InlineCard />
                </>
              )}
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left"
            style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.15)" }}
          />

          {/* CTA */}
          <motion.div {...fadeUp(0.54)} className="flex items-center gap-4">
            <motion.a
              id="hero-see-work"
              href="#projects"
              variants={{
                rest: { scale: 1,    y: 0  },
                hov:  { scale: 1.04, y: -2 },
                tap:  { scale: 0.96, y: 0  },
              }}
              initial="rest"
              whileHover="hov"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              style={{
                ...preset.small,
                fontWeight: weight.medium,
                color: textColor.primary,
                background: ctaButton.gradient,
                textDecoration: "none",
                letterSpacing: tracking.normal,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                borderRadius: "100px",
                boxShadow: ctaButton.shadow,
                transition: "box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = ctaButton.shadowHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = ctaButton.shadow;
              }}
            >
              {/* top-edge sheen */}
              <span style={{
                position: "absolute", inset: 0, borderRadius: "inherit",
                background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 55%)",
                pointerEvents: "none",
              }} />
              {lang === "en" ? "View my work" : "Посмотреть портфолио"}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "8px", zIndex: 1,
          pointerEvents: scrolled ? "none" : "auto",
        }}
      >
        {/* Desktop: mouse wheel */}
        <div className="scroll-mouse" style={{
          width: "22px", height: "34px", borderRadius: "11px",
          border: "1px solid rgba(255,255,255,0.2)",
          position: "relative", display: "flex", justifyContent: "center", paddingTop: "6px",
        }}>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "3px", height: "6px", borderRadius: "2px", background: textColor.muted }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .scroll-mouse { display: none !important; }
        }
        @media (min-width: 601px) {
          .scroll-mouse { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

// ── Nav Avatar ───────────────────────────────────────────────────────────────

function NavAvatar() {
  return (
    <div
      style={{
        width: "32px", height: "32px", borderRadius: "50%",
        overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
    >
      <img
        src={photo}
        alt="Yury Pogodin"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
    </div>
  );
}

// ── Inline Card ─────────────────────────────────────────────────────────────

function InlineCard() {
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (success) return;
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2200);
  };

  return (
    <motion.span
      onClick={handleClick}
      animate={{ y: success ? 0 : [0, -1.5, 0] }}
      transition={success ? { duration: 0.2 } : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        display: "inline-flex",
        position: "relative",
        width: "1.3em",
        height: "0.78em",
        verticalAlign: "middle",
        marginLeft: "0.38em",
        marginBottom: "0.12em",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <AnimatePresence>
        {success ? (
          <motion.span
            key="success"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.82 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", inset: 0,
              display: "flex",
              borderRadius: "0.12em",
              background: "rgba(74,222,128,0.12)",
              border: "1px solid rgba(74,222,128,0.45)",
              boxShadow: "0 2px 14px rgba(74,222,128,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.32, delay: 0.06, ease: "easeOut" }}
              width="0.52em"
              height="0.52em"
              viewBox="0 0 24 24"
              fill="none"
              stroke={textColor.success}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.polyline
                points="20 6 9 17 4 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.32, delay: 0.06, ease: "easeOut" }}
              />
            </motion.svg>
          </motion.span>
        ) : (
          <motion.span
            key="card"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.82 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", inset: 0,
              display: "flex",
              borderRadius: "0.12em",
              background: "linear-gradient(145deg, #1e1b4b 0%, #0f172a 55%, #1a1040 100%)",
              border: "1px solid rgba(165,180,252,0.22)",
              boxShadow: "0 2px 12px rgba(99,102,241,0.25), 0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
              overflow: "hidden",
              alignItems: "flex-start",
              padding: "0.08em 0.1em",
            }}
          >
            {/* Chip */}
            <span style={{
              display: "block",
              width: "0.28em",
              height: "0.2em",
              borderRadius: "0.04em",
              background: "linear-gradient(145deg, #fbbf24, #d97706)",
              opacity: 0.9,
              flexShrink: 0,
            }} />

            {/* NFC mark */}
            <span style={{
              position: "absolute", right: "0.1em", top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(165,180,252,0.55)",
              display: "flex", alignItems: "center",
            }}>
              <Nfc size="0.38em" strokeWidth={1.8} />
            </span>

            {/* Sheen */}
            <span style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 55%)",
              borderRadius: "inherit", pointerEvents: "none",
            }} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

// ── Figma Grid ───────────────────────────────────────────────────────────────

function FigmaGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (!W || !H) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const R        = 20;    // ruler thickness
      const MINOR    = 10;    // minor grid step
      const MAJOR    = 100;   // major grid step
      const isMobile = W <= 768;
      const L        = isMobile ? 0 : R; // left offset: 0 on mobile, ruler-width on desktop

      // ── Minor grid ──
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth   = 0.5;
      for (let x = L; x <= W; x += MINOR) {
        ctx.beginPath(); ctx.moveTo(x, R); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = R; y <= H; y += MINOR) {
        ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // ── Major grid ──
      ctx.strokeStyle = "rgba(255,255,255,0.055)";
      ctx.lineWidth   = 0.5;
      for (let x = L; x <= W; x += MINOR) {
        if ((x - L) % MAJOR === 0) {
          ctx.beginPath(); ctx.moveTo(x, R); ctx.lineTo(x, H); ctx.stroke();
        }
      }
      for (let y = R; y <= H; y += MINOR) {
        if ((y - R) % MAJOR === 0) {
          ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(W, y); ctx.stroke();
        }
      }

      // ── Top ruler background ──
      ctx.fillStyle = "rgba(255,255,255,0.016)";
      ctx.fillRect(L, 0, W - L, R);

      // ── Left ruler background (desktop only) ──
      if (!isMobile) {
        ctx.fillStyle = "rgba(255,255,255,0.016)";
        ctx.fillRect(0, R, R, H - R);
        ctx.fillStyle = "rgba(255,255,255,0.028)";
        ctx.fillRect(0, 0, R, R); // corner
      }

      // ── Ruler borders ──
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      ctx.lineWidth   = 0.5;
      ctx.beginPath(); ctx.moveTo(L, R); ctx.lineTo(W, R); ctx.stroke(); // top border
      if (!isMobile) {
        ctx.beginPath(); ctx.moveTo(R, R); ctx.lineTo(R, H); ctx.stroke(); // left border
      }

      // ── Top ruler ticks + labels ──
      ctx.strokeStyle  = "rgba(255,255,255,0.2)";
      ctx.lineWidth    = 0.5;
      ctx.fillStyle    = "rgba(255,255,255,0.22)";
      ctx.font         = `7px Inter, monospace`;
      ctx.textAlign    = "center";
      ctx.textBaseline = "top";

      for (let px = L; px <= W; px += MINOR) {
        const rel     = px - L;
        const isMajor = rel % MAJOR === 0;
        const isMid   = rel % 50   === 0;
        const tickH   = isMajor ? 10 : isMid ? 6 : 3;

        ctx.beginPath();
        ctx.moveTo(px, R - tickH);
        ctx.lineTo(px, R);
        ctx.stroke();

        if (isMajor && rel > 0) ctx.fillText(String(rel), px, 2);
      }

      // ── Left ruler ticks + labels (desktop only) ──
      if (!isMobile) {
        for (let py = R; py <= H; py += MINOR) {
          const rel     = py - R;
          const isMajor = rel % MAJOR === 0;
          const isMid   = rel % 50   === 0;
          const tickW   = isMajor ? 10 : isMid ? 6 : 3;

          ctx.beginPath();
          ctx.moveTo(R - tickW, py);
          ctx.lineTo(R, py);
          ctx.stroke();

          if (isMajor && rel > 0) {
            ctx.save();
            ctx.translate(9, py);
            ctx.rotate(-Math.PI / 2);
            ctx.textAlign    = "center";
            ctx.textBaseline = "top";
            ctx.fillText(String(rel), 0, 0);
            ctx.restore();
          }
        }
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Canvas */}
      <motion.canvas
        ref={canvasRef}
        className="figma-grid-canvas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          display: "block", pointerEvents: "none", zIndex: 0,
        }}
      />
      {/* Bottom fade */}
      <div
        className="figma-grid-canvas"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "45%",
          background: `linear-gradient(to bottom, transparent 0%, ${colors.bg} 100%)`,
          pointerEvents: "none", zIndex: 1,
        }}
      />
      {/* Right fade */}
      <div
        className="figma-grid-canvas"
        style={{
          position: "absolute", top: 0, right: 0, bottom: 0,
          width: "15%",
          background: `linear-gradient(to right, transparent 0%, ${colors.bg} 100%)`,
          pointerEvents: "none", zIndex: 1,
        }}
      />
    </>
  );
}