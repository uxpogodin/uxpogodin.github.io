import { useState, useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Header }     from "./Header";
import { PageLoader } from "./PageLoader";
import { colors }     from "../styles/typography";

export interface OutletCtx {
  lang:    "en" | "ru";
  setLang: (l: "en" | "ru") => void;
  scrollTo: (id: string) => void;
}

export function RootLayout() {
  const [lang,     setLang]     = useState<"en" | "ru">("en");
  const [appReady, setAppReady] = useState(false);
  const rafRef = useRef<number | null>(null);
  const location   = useLocation();

  // ── Reset scroll on every route change ──────────────────────────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // ── Document title & meta description ───────────────────────────────────────
  useEffect(() => {
    document.title = "Yury Pogodin - Product Designer";
    let meta = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      lang === "en"
        ? "Portfolio of Yury Pogodin - product designer specialising in complex interfaces, SaaS products and mobile apps."
        : "Портфолио Юрия Погодина - продуктовый дизайнер, специализируюсь на сложных интерфейсах, SaaS-продуктах и мобильных приложениях.";
  }, [lang]);

  // ── Yandex Metrika ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (document.getElementById("ym-script")) return;

    // Inline init
    (function (m: Window & typeof globalThis, e: Document, t: string, r: string, i: string) {
      type YmFn = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };
      (m as unknown as Record<string, YmFn>)[i] =
        (m as unknown as Record<string, YmFn>)[i] ||
        function (...args: unknown[]) {
          ((m as unknown as Record<string, YmFn>)[i].a =
            (m as unknown as Record<string, YmFn>)[i].a || []).push(args);
        };
      (m as unknown as Record<string, YmFn>)[i].l = 1 * (new Date() as unknown as number);
      for (let j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) return;
      }
      const k = e.createElement(t) as HTMLScriptElement;
      const a = e.getElementsByTagName(t)[0];
      k.id    = "ym-script";
      k.async = true;
      k.src   = r;
      a.parentNode!.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    (window as unknown as Record<string, (...args: unknown[]) => void>).ym?.(
      107234852, "init",
      {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true,
      }
    );

    // noscript fallback
    if (!document.getElementById("ym-noscript")) {
      const ns  = document.createElement("noscript");
      ns.id     = "ym-noscript";
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src   = "https://mc.yandex.ru/watch/107234852";
      img.style.cssText = "position:absolute;left:-9999px;";
      img.alt   = "";
      div.appendChild(img);
      ns.appendChild(div);
      document.body.insertBefore(ns, document.body.firstChild);
    }
  }, []);

  // ── Eased smooth scroll (replaces Lenis) ────────────────────────��───────────
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Cancel any ongoing scroll animation
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const startY    = window.scrollY;
    const targetY   = el.getBoundingClientRect().top + window.scrollY - 80;
    const distance  = targetY - startY;
    const duration  = Math.min(900, Math.max(400, Math.abs(distance) * 0.5));
    let   startTime: number | null = null;

    // Ease in-out cubic
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  // Cleanup on unmount
  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  const ctx: OutletCtx = { lang, setLang, scrollTo };

  return (
    <div style={{ background: colors.bg, minHeight: "100dvh", overflowX: "hidden" }}>

      {/* ── Global grain overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none",
          opacity: 0.028,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Loader — shown once on first load ── */}
      <PageLoader onDone={() => setAppReady(true)} />

      {/* ── App content — fades in after loader ── */}
      {appReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Header lang={lang} setLang={setLang} scrollTo={scrollTo} />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Outlet context={ctx} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}