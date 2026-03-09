import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { weight, tracking, textColor, colors } from "../styles/typography";

interface PageLoaderProps {
  onDone: () => void;
}

// ── Progress counter (easeOutCubic via rAF) ───────────────────────────────────
function useCounter(active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const DURATION = 1400;
    let raf: number;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / DURATION, 1);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return val;
}

// ── Main component ────────────────────────────────────────────────────────────
export function PageLoader({ onDone }: PageLoaderProps) {
  const [visible,  setVisible]  = useState(true);
  const [counting, setCounting] = useState(false);
  const count = useCounter(counting);

  useEffect(() => {
    const startTimer = setTimeout(() => setCounting(true), 100);

    const exit = () => setTimeout(() => setVisible(false), 220);

    if (document.readyState === "complete") {
      exit();
    } else {
      window.addEventListener("load", exit, { once: true });
      const fallback = setTimeout(exit, 2200);
      return () => { clearTimeout(startTimer); clearTimeout(fallback); };
    }
    return () => clearTimeout(startTimer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            background: colors.bg,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 50% 44% at 50% 50%, rgba(99,102,241,0.09) 0%, transparent 70%)",
          }} />

          {/* Dot grid */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 5%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 5%, transparent 100%)",
          }} />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 1,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "28px",
          }}>
            {/* Initials + SVG ring */}
            <div style={{ position: "relative" }}>
              <motion.svg
                aria-hidden="true"
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}
                width={130} height={130} viewBox="0 0 130 130"
              >
                <circle cx={65} cy={65} r={58} fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth={1} />
                <motion.circle
                  cx={65} cy={65} r={58}
                  fill="none" stroke="rgba(99,102,241,0.26)" strokeWidth={1} strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ rotate: "-90deg", transformOrigin: "65px 65px" }}
                />
                <motion.circle
                  cx={65} cy={65} r={58}
                  fill="none" stroke="rgba(165,180,252,0.5)" strokeWidth={1.5} strokeLinecap="round"
                  strokeDasharray="18 1000"
                  initial={{ strokeDashoffset: 365 }} animate={{ strokeDashoffset: -1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ rotate: "-90deg", transformOrigin: "65px 65px" }}
                />
              </motion.svg>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 40px rgba(99,102,241,0.28), 0 0 80px rgba(99,102,241,0.08)",
                      "0 0 55px rgba(99,102,241,0.46), 0 0 110px rgba(99,102,241,0.16)",
                      "0 0 40px rgba(99,102,241,0.28), 0 0 80px rgba(99,102,241,0.08)",
                    ],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(58px, 9vw, 84px)",
                    fontWeight: weight.light,
                    letterSpacing: "0.24em",
                    paddingLeft: "0.24em",
                    color: textColor.primary,
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  YP
                </motion.span>
              </motion.div>
            </div>

            {/* Progress bar + counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
            >
              <div style={{
                width: "72px", height: "1px",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "1px", overflow: "hidden", position: "relative",
              }}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(90deg, rgba(99,102,241,0.35) 0%, rgba(165,180,252,0.95) 100%)",
                    transformOrigin: "left center",
                  }}
                />
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: weight.light,
                letterSpacing: tracking.wider,
                color: textColor.muted,
                fontVariantNumeric: "tabular-nums",
                minWidth: "36px",
                textAlign: "center",
              }}>
                {String(count).padStart(2, "0")}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}