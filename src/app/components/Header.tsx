import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import photo from "figma:asset/489ad1a58e0c1187c1b7b774593f475800902a82.png";
import { preset, weight, tracking, textColor, colors, ctaButton } from "../styles/typography";

interface HeaderProps {
  lang: "en" | "ru";
  setLang: (l: "en" | "ru") => void;
  /** Called with anchor id when nav link clicked on same page */
  scrollTo: (id: string) => void;
}

const NAV = {
  en: [
    { label: "Projects",    anchor: "projects",    href: undefined as string | undefined },
    { label: "Process",     anchor: "process",     href: undefined as string | undefined },
    { label: "Tools",       anchor: "tools",       href: undefined as string | undefined },
    { label: "About",       anchor: "about",       href: undefined as string | undefined },
    { label: "Exploration", anchor: "exploration", href: "/exploration"                  },
    { label: "Contact",     anchor: "contact",     href: undefined as string | undefined },
  ],
  ru: [
    { label: "Проекты",     anchor: "projects",    href: undefined as string | undefined },
    { label: "Процесс",     anchor: "process",     href: undefined as string | undefined },
    { label: "Инструменты", anchor: "tools",       href: undefined as string | undefined },
    { label: "Обо мне",     anchor: "about",       href: undefined as string | undefined },
    { label: "Эксперименты", anchor: "exploration", href: "/exploration"                  },
    { label: "Контакт",     anchor: "contact",     href: undefined as string | undefined },
  ],
};

export function Header({ lang, setLang, scrollTo }: HeaderProps) {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [headerVisible,  setHeaderVisible]  = useState(true);
  const [ctaActive,      setCtaActive]      = useState(false);

  const lastScrollY    = useRef(0);
  const ticking        = useRef(false);
  const lastViewportH  = useRef(
    typeof window !== "undefined" ? (window.visualViewport?.height ?? window.innerHeight) : 0
  );

  const location = useLocation();
  const navigate = useNavigate();
  const isHome   = location.pathname === "/";
  const links    = NAV[lang];

  // ── Smart-sticky scroll ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const currentH = window.visualViewport?.height ?? window.innerHeight;

        if (Math.abs(currentH - lastViewportH.current) > 1) {
          lastViewportH.current = currentH;
          lastScrollY.current   = currentY;
          ticking.current       = false;
          return;
        }

        const delta = currentY - lastScrollY.current;
        if (currentY < 60)       setHeaderVisible(true);
        else if (delta > 40)   { setHeaderVisible(false); setMenuOpen(false); }
        else if (delta < -20)    setHeaderVisible(true);

        lastScrollY.current = currentY;
        ticking.current     = false;
      });
    };
    const onVPResize = () => {
      lastViewportH.current = window.visualViewport?.height ?? window.innerHeight;
      lastScrollY.current   = window.scrollY;
    };
    window.addEventListener("scroll",  onScroll,    { passive: true });
    window.visualViewport?.addEventListener("resize", onVPResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.visualViewport?.removeEventListener("resize", onVPResize);
    };
  }, []);

  // ── CTA button state: gradient when "See my work" scrolls off screen ────
  useEffect(() => {
    if (!isHome) { setCtaActive(true); return; }

    let cleanup = () => {};
    const observe = () => {
      const el = document.getElementById("hero-see-work");
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => setCtaActive(!e.isIntersecting),
        { threshold: 0.1 }
      );
      obs.observe(el);
      cleanup = () => obs.disconnect();
    };
    const t = setTimeout(observe, 80);
    return () => { clearTimeout(t); cleanup(); };
  }, [isHome]);

  // ── Close menu on route change ────────────────────────────────────────────
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // ── Nav link href: in-page anchor vs cross-page ───────────────────────────
  const linkHref = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`;

  const handleNavClick = (e: React.MouseEvent, anchor: string, href?: string) => {
    if (href) {
      e.preventDefault();
      navigate(href);
      setMenuOpen(false);
      return;
    }
    if (isHome) {
      e.preventDefault();
      scrollTo(anchor);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        animate={{ y: headerVisible ? 0 : -100, opacity: headerVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between px-8 py-6 md:px-16"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          background: colors.bgAlpha85,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          willChange: "transform",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{
            ...preset.small,
            fontWeight: weight.medium,
            color: textColor.secondary,
            letterSpacing: tracking.tight,
          }}>
            Yury
          </span>
        </a>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div
            className="flex items-center rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "3px", gap: "2px" }}
          >
            {(["en", "ru"] as const).map((l) => (
              <motion.button
                key={l}
                onClick={() => setLang(l)}
                whileTap={{ scale: 0.92 }}
                style={{
                  ...preset.nano,
                  fontWeight: weight.medium,
                  padding: "4px 10px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  background: lang === l ? "rgba(255,255,255,0.12)" : "transparent",
                  color: lang === l ? textColor.primary : textColor.muted,
                }}
                onMouseEnter={(e) => {
                  if (lang !== l) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.color = textColor.secondary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (lang !== l) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = textColor.muted;
                  }
                }}
              >
                {l.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Telegram CTA */}
          <motion.a
            href="https://t.me/pogodinyury"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="header-telegram flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              ...preset.micro,
              fontWeight: weight.regular,
              color:      ctaActive ? textColor.primary   : textColor.secondary,
              border:     ctaActive ? "1px solid transparent" : "1px solid rgba(255,255,255,0.12)",
              background: ctaActive ? ctaButton.gradient  : "transparent",
              textDecoration: "none",
              transition: "background 0.35s, border-color 0.35s, color 0.35s, box-shadow 0.35s",
              boxShadow:  ctaActive ? ctaButton.shadow    : "none",
            }}
            onMouseEnter={(e) => {
              if (!ctaActive) {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.color       = textColor.primary;
              } else {
                (e.currentTarget as HTMLElement).style.boxShadow   = ctaButton.shadowHover;
              }
            }}
            onMouseLeave={(e) => {
              if (!ctaActive) {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color       = textColor.secondary;
              } else {
                (e.currentTarget as HTMLElement).style.boxShadow   = ctaButton.shadow;
              }
            }}
          >
            Telegram
          </motion.a>

          {/* CV */}
          <motion.a
            href={lang === "en"
              ? "https://drive.google.com/file/d/1Sf8_VMD6EVTwFpV4XVAPuLQ71hvoHc8H/view?usp=sharing"
              : "https://drive.google.com/file/d/1AcPIYCYC9syE00OTbp07JOu-x_Zl2xnq/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="header-cv flex items-center gap-1.5 rounded-full px-4 py-2"
            style={{
              ...preset.micro,
              fontWeight: weight.regular,
              color: textColor.secondary,
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLElement).style.color       = textColor.primary;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLElement).style.color       = textColor.secondary;
            }}
          >
            <Download size={11} strokeWidth={2} />
            {lang === "en" ? "CV" : "Резюме"}
          </motion.a>

          {/* Burger */}
          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "transparent", cursor: "pointer", border: "none",
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", gap: "5px", padding: "8px",
              width: "36px", height: "36px",
            }}
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "block", width: "18px", height: "1px", background: menuOpen ? textColor.primary : textColor.secondary, transformOrigin: "center" }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              style={{ display: "block", width: "18px", height: "1px", background: textColor.secondary }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "block", width: "18px", height: "1px", background: menuOpen ? textColor.primary : textColor.secondary, transformOrigin: "center" }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 190,
              background: colors.bgAlpha96,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "8px",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.anchor}
                href={link.href ?? linkHref(link.anchor)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.32, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                onClick={(e) => handleNavClick(e, link.anchor, link.href)}
                style={{
                  ...preset.h2,
                  fontWeight: weight.light,
                  color: textColor.muted,
                  textDecoration: "none",
                  padding: "10px 24px",
                  transition: "color 0.2s",
                  letterSpacing: tracking.tight,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.primary)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.muted)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              style={{
                position: "absolute", bottom: "40px",
                ...preset.micro,
                color: textColor.muted,
                letterSpacing: tracking.wide,
              }}
            >
              {lang === "en" ? "click anywhere to close" : "нажмите в любом месте, чтобы закрыть"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 600px) {
          .header-cv { display: none !important; }
        }
      `}</style>
    </>
  );
}