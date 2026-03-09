import { Link } from "react-router";
import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { preset, weight, leading, textColor, colors } from "../styles/typography";
import type { OutletCtx } from "../components/RootLayout";

const ease = [0.22, 1, 0.36, 1] as const;

export function NotFoundPage() {
  const { lang } = useOutletContext<OutletCtx>();

  return (
    <main
      style={{
        minHeight: "100dvh",
        background: colors.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        paddingTop: "80px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(72px, 16vw, 120px)",
          fontWeight: weight.light,
          color: "rgba(99,102,241,0.18)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}>
          404
        </span>

        <p style={{
          ...preset.body,
          fontWeight: weight.light,
          color: textColor.muted,
          lineHeight: leading.loose,
          margin: 0,
        }}>
          {lang === "en" ? "Page not found" : "Страница не найдена"}
        </p>

        <Link
          to="/"
          style={{
            marginTop: "8px",
            ...preset.small,
            fontWeight: weight.regular,
            color: textColor.accent,
            textDecoration: "none",
            border: "1px solid rgba(99,102,241,0.25)",
            padding: "10px 24px",
            borderRadius: "100px",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
            (e.currentTarget as HTMLElement).style.color = "#a5b4fc";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
            (e.currentTarget as HTMLElement).style.color = textColor.accent;
          }}
        >
          {lang === "en" ? "← Back to home" : "← На главную"}
        </Link>
      </motion.div>
    </main>
  );
}
