import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { preset, weight, leading, tracking, textColor, glow, colors } from "../styles/typography";

const REAL_EMAIL   = "ux.pogodin@gmail.com";
const MASKED_EMAIL = "ux.p****n@gmail.com";

const CONTENT = {
  en: {
    label: "Contact",
    links: [
      { label: "Telegram", href: "https://t.me/pogodinyury" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuri-pogodin/" },
    ],
    copy: "© 2026 Pogodin",
    vibeCoded: "Made with love and Claude Code",
    cta: "Write me",
  },
  ru: {
    label: "Контакты",
    links: [
      { label: "Telegram", href: "https://t.me/pogodinyury" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yuri-pogodin/" },
    ],
    copy: "© 2026 Погодин",
    vibeCoded: "Сделано с любовью и Claude Code",
    cta: "Написать",
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection({ lang }: { lang: "en" | "ru" }) {
  const t = CONTENT[lang];

  return (
    <section
      id="contact"
      style={{
        background: `radial-gradient(ellipse 160% 60% at 50% 130%, ${glow.medium} 0%, transparent 55%), ${colors.bg}`,
        padding: "80px 0 56px",
        overflow: "hidden",
      }}
    >
      <div className="section-inner">

        {/* Label + sub row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="contact-header"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
          </div>
        </motion.div>

        {/* ── Full-width email ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
          style={{ marginBottom: "56px" }}
        >
          <EmailHero cta={t.cta} />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="contact-bottom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "28px" }}>
            {t.links.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <span style={{
              ...preset.small,
              color: textColor.muted,
              fontWeight: weight.regular,
            }}>
              {t.copy}
            </span>
            <span style={{
              ...preset.nano,
              color: textColor.muted,
              fontWeight: weight.regular,
              opacity: 0.6,
            }}>
              {t.vibeCoded}
            </span>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-header {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .contact-sub {
            text-align: left !important;
            max-width: 100% !important;
          }
          .contact-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Full-width email hero ──────────────────────────────────────────────────────

function EmailHero({ cta }: { cta: string }) {
  const [hovered, setHovered] = useState(false);
  const [copied,  setCopied]  = useState(false);

  const handleClick = () => {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = REAL_EMAIL;
      ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(REAL_EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(fallback);
    } else { fallback(); }
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.995 }}
      style={{
        display: "block",
        width: "100%",
        background: "none",
        border: "none",
        padding: "0",
        cursor: "pointer",
        textAlign: "left",
        position: "relative",
      }}
    >
      {/* Hover glow behind text */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: "-24px -40px",
          background: `radial-gradient(ellipse 70% 80% at 40% 50%, ${glow.subtle}, transparent 70%)`,
          pointerEvents: "none",
          borderRadius: "16px",
        }}
      />

      {/* Small label above */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.35, x: hovered ? 4 : 0 }}
        transition={{ duration: 0.3, ease }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <span style={{
          ...preset.micro,
          color: textColor.accentLight,
          fontWeight: weight.regular,
          letterSpacing: tracking.wider,
          textTransform: "uppercase",
        }}>
          {cta}
        </span>
        <ArrowUpRight size={12} strokeWidth={1.5} color={textColor.accentLight} />
      </motion.div>

      {/* Massive email */}
      <div style={{ position: "relative", display: "block" }}>
        <motion.span
          animate={{ color: hovered ? textColor.primary : textColor.secondary }}
          transition={{ duration: 0.35, ease }}
          style={{
            display: "block",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(28px, 6.5vw, 80px)",
            fontWeight: weight.light,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            paddingBottom: "0.15em",
            whiteSpace: "nowrap",
          }}
        >
          {MASKED_EMAIL}
        </motion.span>

        {/* Sliding underline */}
        <motion.span
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: "-6px",
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, ${textColor.accentLight} 0%, ${textColor.secondary} 100%)`,
            transformOrigin: "left",
            display: "block",
            opacity: 0.6,
          }}
        />

        {/* Click to copy hint */}
        <motion.div
          animate={{ opacity: hovered && !copied ? 1 : 0, x: hovered && !copied ? 0 : -8 }}
          transition={{ duration: 0.25, ease }}
          style={{
            position: "absolute",
            right: 0,
            bottom: "-26px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            pointerEvents: "none",
          }}
        >
          <Copy size={11} strokeWidth={1.5} color={textColor.muted} />
          <span style={{
            ...preset.nano,
            color: textColor.muted,
            fontWeight: weight.regular,
            letterSpacing: tracking.wide,
          }}>
            Click to copy
          </span>
        </motion.div>
      </div>

      {/* Copy badge */}
      <motion.div
        animate={{
          opacity: copied ? 1 : 0,
          y: copied ? 0 : 6,
          scale: copied ? 1 : 0.92,
        }}
        transition={{ duration: 0.3, ease }}
        style={{
          position: "absolute",
          bottom: "-36px",
          left: 0,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: textColor.success,
          pointerEvents: "none",
        }}
      >
        <Check size={13} strokeWidth={2} />
        <span style={{ ...preset.micro, fontWeight: weight.regular, letterSpacing: tracking.wide }}>
          Copied
        </span>
      </motion.div>
    </motion.button>
  );
}

// ── Social link ───────────────────────────────────────────────────────────────

function SocialLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.93 }}
      style={{
        ...preset.small,
        fontWeight: weight.regular,
        color: hovered ? textColor.primary : textColor.muted,
        textDecoration: "none",
        transition: "color 0.25s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {label}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ display: "flex" }}
      >
        <ArrowUpRight size={13} strokeWidth={1.5} />
      </motion.span>
    </motion.a>
  );
}