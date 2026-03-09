import { ArrowLeft, Lock } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, Link, useOutletContext } from "react-router";
import { motion } from "motion/react";
import { CASES }         from "../data/cases";
import { getCaseStudy }  from "../data/caseStudies";
import type { FullCaseStudy, L10n } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  preset, weight, leading, tracking,
  textColor, colors, glow,
} from "../styles/typography";
import type { OutletCtx } from "../components/RootLayout";
import { ContactSection } from "../components/ContactSection";
import paymentMockupImg    from "figma:asset/8c3e23dbc376e58c1f3059b97cb74fd36316c18a.png";
import oldPaymentUiImg     from "figma:asset/1ee0081431c7e25f552afc17c02f5c06e78a5ff1.png";
import competitorScreenImg from "figma:asset/9a6345f57dbffb8c1fa02c48f80298989cbbd1a7.png";
import cjmTableImg         from "figma:asset/2cba74f278faf7c3b4f1224aaf757dc40a259620.png";
import figmaWorkspaceImg   from "figma:asset/61e624cc0057c4c69208007400aa69248f547e2c.png";
import personaImg          from "figma:asset/de5242f521829b507daf3b68727c8f810a68fdb7.png";
import beforeDepositImg    from "figma:asset/1073038188ba9f5833e6ed0b8bdc41b2b8201da8.png";
import afterDepositImg     from "figma:asset/4fbba88f96850e570e9eeba8d1d1dcad08f460a2.png";
import beforeAmountImg     from "figma:asset/9acbe4ca3f8edf9548530d79b98053aea77e6142.png";
import afterAmountImg      from "figma:asset/4e89c91aa5fb6308677105094152da871daa4810.png";
import beforeCryptoImg     from "figma:asset/4c4eb3b4eaf7c355ae5b71509cf8e9a1a3d784b7.png";
import cryptoAfterImg      from "figma:asset/8c3e23dbc376e58c1f3059b97cb74fd36316c18a.png";
import depositSuccessImg   from "figma:asset/2b1852be2b56e1e4fb9bf10e08fadadedae4135c.png";
import depositErrorImg     from "figma:asset/a8a92b9e029bd5e181a29eb0831777f5b564b1fd.png";
import depositPendingImg   from "figma:asset/57835501509044ca7ac5d6876e0b425a30485088.png";
import adminPanelImg       from "figma:asset/dbacf092a7938454d0067ca417c46cd167738078.png";
import analyticsMockupImg  from "figma:asset/409be3f8aa2bc996a3cd04a8e5ec279f5459ec20.png";
import xbetCompetitorImg       from "figma:asset/8e0535986399de70543eb43175ce28635b44e248.png";
import winCompetitorImg        from "figma:asset/f82c29d1ec066414e954472f1c00549b515d62b3.png";
import spinbetterCompetitorImg from "figma:asset/e0b019c236d03c6cdb486edd67c4a633afec1374.png";
import teenVogueCompetitorImg  from "figma:asset/6819b7de87e977075c482815b47dc18b62345dd7.png";
import paperCompetitorImg      from "figma:asset/5843e2bf1dc8e29d1dd1f5e892df3cd79f173e65.png";
import colorPaletteResearchImg from "figma:asset/1e6125d01b3b69de96d4337b627db5909025e001.png";
import vedWireframeImg         from "figma:asset/960b7abecee79f0a4d567fe1caba894d4ce79bad.png";
import vedVideoSectionImg      from "figma:asset/2dd9c99a6e0791c0fd6bd6d76f707e2c1eadb622.png";

// Lookup map for competitor images that must be imported as figma:asset in .tsx
const COMPETITOR_IMG_MAP: Record<string, string> = {
  "__figma:1xbet-competitor__":      xbetCompetitorImg,
  "__figma:1win-competitor__":       winCompetitorImg,
  "__figma:spinbetter-competitor__": spinbetterCompetitorImg,
  "__figma:teenvogue-competitor__":  teenVogueCompetitorImg,
  "__figma:paper-competitor__":      paperCompetitorImg,
  "__figma:colorpalette-research__": colorPaletteResearchImg,
};
const resolveCompetitorImg = (image: string): string =>
  COMPETITOR_IMG_MAP[image] ?? image;



// ── Analytics-dashboard: project timeline ────────────────────────────────────
const VED_TIMELINE = [
  { num: "01", days: 3,  en: "Research",           ru: "Исследование",          durEn: "3 days",     durRu: "3 дня",        noteEn: null,                               noteRu: null,                                   color: "#4F46E5" },
  { num: "02", days: 7,  en: "Wireframe",           ru: "Вайрфрейм",             durEn: "1 week",     durRu: "1 неделя",     noteEn: null,                               noteRu: null,                                   color: "#6366F1" },
  { num: "03", days: 10, en: "Clickable prototype", ru: "Кликабельный прототип", durEn: "~1.5 weeks", durRu: "~1.5 недели",  noteEn: "Investor pitch + stakeholder demo", noteRu: "Питч инвесторам + демо стейкхолдерам", color: "#F59E0B" },
  { num: "04", days: 14, en: "Video section",       ru: "Раздел Видео",          durEn: "2 weeks",    durRu: "2 недели",     noteEn: "Design + dev + testing",           noteRu: "Дизайн + разработка + тест",           color: "#8B5CF6" },
  { num: "05", days: 14, en: "Longreads section",   ru: "Раздел Лонгриды",       durEn: "2 weeks",    durRu: "2 недели",     noteEn: "Design + dev + testing",           noteRu: "Дизайн + разработка + тест",           color: "#7C3AED" },
  { num: "06", days: 10, en: "News section",        ru: "Раздел Новости",        durEn: "~1.5 weeks", durRu: "~1.5 недели",  noteEn: "Design + dev + testing",           noteRu: "Дизайн + разработка + тест",           color: "#6D28D9" },
  { num: "07", days: 3,  en: "Product testing",     ru: "Тестирование продукта", durEn: "3 days",     durRu: "3 дня",        noteEn: null,                               noteRu: null,                                   color: "#10B981" },
  { num: "08", days: 1,  en: "Launch",              ru: "Выход в прод",          durEn: "1 day",      durRu: "1 день",       noteEn: null,                               noteRu: null,                                   color: "#F97316" },
];

// ── Hero video (payment-flow) ─────────────────────────────────────────────────
const PAYMENT_VIDEO_SOURCES = [
  "/Video/paymentvideo1.mp4",
  "https://cdn.jsdelivr.net/gh/uxpogodin-dotcom/pogodin.github.io@main/Video/paymentvideo1.mp4",
];

function HeroVideo({ fallback }: { fallback: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed]     = useState(false);

  const tryNext = () => {
    const next = srcIndex + 1;
    if (next < PAYMENT_VIDEO_SOURCES.length) {
      setSrcIndex(next);
    } else {
      setFailed(true);
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [srcIndex]);

  if (failed) {
    return <img src={fallback} alt="Payment UI" style={{ width: "100%", display: "block" }} />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      onError={tryNext}
      style={{ width: "100%", display: "block" }}
    >
      <source src={PAYMENT_VIDEO_SOURCES[srcIndex]} type="video/mp4" onError={tryNext} />
    </video>
  );
}

// ── Per-case hero mockup map ──────────────────────────────────────────────────
const HERO_MOCKUPS: Record<string, string> = {
  "payment-flow": paymentMockupImg,
};

// ── Analytics Dashboard Hero Mockup (phone frame with screenshot) ─────────────
function AnalyticsDashboardHeroMockup() {
  return (
    <div style={{
      width: "256px",
      borderRadius: "44px",
      background: "#0d111c",
      border: "10px solid #0d111c",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.55), 0 0 60px rgba(99,102,241,0.12)",
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Notch */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "88px", height: "24px",
        background: "#0d111c",
        borderRadius: "0 0 18px 18px",
        zIndex: 10,
      }} />
      {/* Screenshot */}
      <img
        src={analyticsMockupImg}
        alt="Analytics app mockup"
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}

// ── UI annotation pin positions (% based, per slug) ──────────────────────────
const UI_PINS: Record<string, Array<{ x: string; y: string }>> = {
  "payment-flow": [
    { x: "68%", y: "41%" },  // 01 – CTA "ПОПОЛНИТЬ" button
    { x: "18%", y: "23%" },  // 02 – Сбер logo card
    { x: "72%", y: "23%" },  // 03 – Газпромбанк logo card
    { x: "50%", y: "60%" },  // 04 – bonus bars
  ],
};

// ── Helpers ──────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const t = (l10n: L10n, lang: "en" | "ru") => l10n[lang];

const inView = {
  initial:    { opacity: 0, y: 20 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease },
};

// ── Section label component ───────────────────────────────────────────────────
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
      <span style={{ ...preset.nano, fontWeight: weight.light, color: textColor.muted, letterSpacing: tracking.wider }}>
        {num}
      </span>
      <span style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
      <span style={{ ...preset.nano, fontWeight: weight.regular, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
        {label}
      </span>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ id, children, glow: g }: { id: string; children: React.ReactNode; glow?: string }) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(48px, 8vw, 80px) 0",
        borderTop: "1px solid rgba(255,255,255,0.055)",
        background: g ? `radial-gradient(ellipse 70% 60% at 50% 0%, ${g} 0%, transparent 70%)` : "transparent",
      }}
    >
      {children}
    </section>
  );
}

// ── Unified Before / After drag-to-compare slider ────────────────────────────
interface BASProps {
  lang:        "en" | "ru";
  beforeSrc?:  string;
  beforeNode?: React.ReactNode;
  afterSrc?:   string;
  afterNode?:  React.ReactNode;
  bg?:         string;
  width?:      string;
  ratio?:      string;
  radius?:     string;
}

function BeforeAfterSlider({ lang, beforeSrc, beforeNode, afterSrc, afterNode, bg = "#050b1a", width = "256px", ratio = "346 / 680", radius = "20px" }: BASProps) {
  const [pos, setPos]   = useState(50);
  const containerRef    = useRef<HTMLDivElement>(null);
  const dragging        = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - left) / width) * 100)));
  }, []);

  // Mouse drag (desktop) — passive, never blocks scroll
  useEffect(() => {
    const onMM = (e: MouseEvent) => { if (dragging.current) move(e.clientX); };
    const onMU = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMM);
    window.addEventListener("mouseup",   onMU);
    return () => {
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("mouseup",   onMU);
    };
  }, [move]);

  // Touch drag — non-passive listener attached ONLY while dragging, so scroll is never blocked
  const handleTouchStart = useCallback(() => {
    dragging.current = true;
    const onTM = (e: TouchEvent) => { e.preventDefault(); move(e.touches[0].clientX); };
    const onTE = () => {
      dragging.current = false;
      window.removeEventListener("touchmove", onTM);
      window.removeEventListener("touchend",  onTE);
    };
    window.addEventListener("touchmove", onTM, { passive: false });
    window.addEventListener("touchend",  onTE);
  }, [move]);

  const chipStyle: React.CSSProperties = {
    ...preset.nano,
    letterSpacing: tracking.wider,
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "5px 12px",
    borderRadius: "99px",
    border: "1px solid rgba(255,255,255,0.14)",
    pointerEvents: "none",
    transition: "opacity 0.25s",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      {/* Slider frame */}
      <div
        ref={containerRef}
        onClick={(e) => move(e.clientX)}
        style={{
          position: "relative",
          width,
          maxWidth: "100%",
          aspectRatio: ratio,
          borderRadius: radius,
          overflow: "clip",
          userSelect: "none",
          cursor: "ew-resize",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.08)",
          background: bg,
        }}
      >
        {/* ── Before layer ── */}
        <div style={{ position: "absolute", inset: 0 }}>
          {beforeNode ?? (
            <img
              src={beforeSrc}
              alt="Before"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          )}
        </div>

        {/* ── After layer — clipped to right portion ── */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}% round 0px)` }}>
          {afterNode ?? (
            <img
              src={afterSrc}
              alt="After"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          )}
        </div>

        {/* ── Divider line ── */}
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: `${pos}%`, width: "2px",
          background: "rgba(255,255,255,0.9)",
          transform: "translateX(-50%)",
          zIndex: 10,
          pointerEvents: "none",
          boxShadow: "0 0 8px rgba(255,255,255,0.4)",
          opacity: pos > 0 && pos < 100 ? 1 : 0,
        }} />

        {/* ── Drag handle ── */}
        <div
          onMouseDown={(e) => { dragging.current = true; e.preventDefault(); }}
          onTouchStart={handleTouchStart}
          style={{
            position: "absolute",
            top: "50%", left: `${pos}%`,
            transform: "translate(-50%, -50%)",
            width: "44px", height: "44px",
            borderRadius: "50%",
            background: "white",
            cursor: "ew-resize",
            zIndex: 11,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
            <path d="M5.5 1.5L1.5 6.5l4 5" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
            <path d="M1.5 1.5l4 5-4 5" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── Labels ── */}
        <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 12, opacity: pos > 18 ? 1 : 0, ...chipStyle }}>
          {lang === "en" ? "Before" : "До"}
        </div>
        <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 12, opacity: pos < 82 ? 1 : 0, ...chipStyle }}>
          {lang === "en" ? "After" : "После"}
        </div>
      </div>

      {/* Hint */}
      <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, display: "flex", alignItems: "center", gap: "8px" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
          <path d="M2 7h10M6 3l-4 4 4 4M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {lang === "en" ? "Drag to compare" : "Потяни чтобы сравнить"}
      </div>
    </div>
  );
}

// ── Final Design section ──────────────��───────────────────────────────────────
function FinalDesignSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <div
        className="fd-two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
      >
        {/* Left: text */}
        <div>
          <SectionLabel num="04" label={lang === "en" ? "Final Design" : "Финальный дизайн"} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Choosing Method" : "Выбор платежного метода"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: "0 0 24px" }}
          >
            {lang === "en"
              ? "Replaced a cluttered grid of 15+ payment icons with a structured list of four categories. The result: faster orientation and less cognitive load."
              : "Заменил перегруженную сетку из 15+ платёжных иконок на структурированный список из четырёх категорий. Результат: быстрая ориентация и меньше когнитивная нагрузка."}
          </motion.p>

        </div>

        {/* Right: slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: _ease as number[], delay: 0.15 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BeforeAfterSlider lang={lang} beforeSrc={beforeDepositImg} afterSrc={afterDepositImg} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #final-design .fd-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

// ── Amount Input section ──────────────────────────────────────────────────────
function AmountInputSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <div
        className="ai-two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
      >
        {/* Left: text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Amount Input" : "Ввод суммы"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "In the legacy solution, the deposit flow lacked focus - the user's attention wasn't directed to the task. Now amount entry is a dedicated step where attention is fully concentrated. We automatically pre-select the most popular or previously used method, while still letting the user switch methods without leaving the input screen."
              : "В Legacy решении внимание юзера не было акцентировано на пополнении. Сейчас ввод суммы - это отдельный шаг, где внимание сфокусировано. Мы автоматически выбираем самый популярный или ранее используемый метод для пользователя, при этом оставляем возможность выбора метода не уходя с ввода суммы."}
          </motion.p>
        </div>

        {/* Right: slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: _ease as number[], delay: 0.15 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BeforeAfterSlider lang={lang} beforeSrc={beforeAmountImg} afterSrc={afterAmountImg} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #amount-input .ai-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

// ── Crypto Deposit section ────────────────────────────────────────────────────
function CryptoDepositSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <div
        className="cd-two-col"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
      >
        {/* Left: text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Crypto Deposit" : "Пополнение криптой"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "The crypto deposit screen was fully redesigned. I structured all the information and highlighted network selection with logos. Added a minimum deposit notification, highlighted the first and last characters of the wallet address, enabled QR download and added a Copy Address CTA. Users can also select a token and network without leaving this screen."
              : "Экран пополнения криптовалютой полностью переработан. Я систематизировал всю информацию, подсветил для пользователя выбор сети логотипами. Добавил нотификацию о минимальном депозите, выделил первые и последние символы адреса кошелька, дал возможность скачать QR и добавил CTA действие - Скопировать адрес. Также пользователь может выбрать токен и сеть не уходя с этого экрана."}
          </motion.p>
        </div>

        {/* Right: slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: _ease as number[], delay: 0.15 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BeforeAfterSlider lang={lang} beforeSrc={beforeCryptoImg} afterSrc={cryptoAfterImg} bg={colors.bg} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #crypto-deposit .cd-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

// ── Deposit Status Screens section ────────────────────────────────────────────
const STATUS_CARDS = [
  {
    img:     depositSuccessImg,
    labelEn: "Success",
    labelRu: "Успех",
    color:   "#22c55e",
    bg:      "rgba(34,197,94,0.10)",
    iconPath: "M5 12l5 5L20 7",
  },
  {
    img:     depositErrorImg,
    labelEn: "Error",
    labelRu: "Ошибка",
    color:   "#ef4444",
    bg:      "rgba(239,68,68,0.10)",
    iconPath: "M6 6l12 12M18 6L6 18",
  },
  {
    img:     depositPendingImg,
    labelEn: "Pending",
    labelRu: "Обработка",
    color:   "#6366f1",
    bg:      "rgba(99,102,241,0.10)",
    iconPath: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  },
] as const;

function DepositStatusSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">

      {/* ── Section heading ── */}
      <div style={{ marginBottom: "56px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
          style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "16px" }}
        >
          {lang === "en" ? "Deposit Status Screens" : "Экраны статуса пополнения"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.08 }}
          style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, maxWidth: "620px", margin: 0 }}
        >
          {lang === "en"
            ? "Fully redesigned the status screens (Success, Error, Processing). Structured the information on each screen, added a transaction ID so users can contact support if needed. Introduced a user feedback module. Added copy buttons next to data users frequently need. Reworked the primary action on each screen — for example, the Success screen features a 'Go Play' CTA that brings the user back to their flow."
            : "Полностью переработал экраны статусов (Успех, Ошибка, Обработка). На экране систематизирована информация, добавлен номер транзакции, с которым пользователь может обратиться в техническую поддержку. Добавлен сбор фидбека пользователей. Добавлены кнопки \"копировать\" рядом с данными, которые часто необходимы юзеру. Переработано целевое действие на экранах. Например, на экране успеха отображается CTA кнопка \"Go play\", которая ведёт пользователя обратно к нужному ему флоу."}
        </motion.p>
      </div>

      {/* ── Three phone cards ── */}
      <div className="ds-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", alignItems: "start" }}>
        {STATUS_CARDS.map((card, i) => (
          <motion.div
            key={card.labelEn}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: _ease as number[], delay: i * 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Phone mockup */}
            <div style={{
              borderRadius: "28px",
              overflow: "clip",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${card.color}18`,
              aspectRatio: "390 / 844",
              background: "#050b1a",
            }}>
              <img
                src={card.img}
                alt={lang === "en" ? card.labelEn : card.labelRu}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            </div>


          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          #deposit-status .ds-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #deposit-status .ds-grid > * { flex-direction: row !important; align-items: flex-start; gap: 20px !important; }
          #deposit-status .ds-grid > * > div:first-child { flex: 0 0 140px; }
        }
        @media (max-width: 540px) {
          #deposit-status .ds-grid > * { flex-direction: column !important; }
          #deposit-status .ds-grid > * > div:first-child { flex: unset; width: 100%; }
        }
      `}</style>
    </div>
  );
}

// ── Admin Panel section ──────────────────────────────��────────────────────────
function AdminPanelSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      {/* Heading block */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
        style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "16px" }}
      >
        {lang === "en" ? "Admin Panel" : "Админ-панель"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.08 }}
        style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, maxWidth: "640px", margin: "0 0 56px" }}
      >
        {lang === "en"
          ? "Designed an admin panel that allows administrators to manage payment methods (add, remove, edit). Building this admin interface gave me a deeper understanding of how the cashier system works."
          : "Задизайнил админ-панель, с помощью которой администраторы могут управлять платёжными методами (добавлять, удалять, редактировать). Создание данной админки помогло мне глубже понять устройство работы кассы."}
      </motion.p>

      {/* Full-width screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: _ease as number[] }}
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          background: "#0d0d14",
        }}
      >
        <img
          src={adminPanelImg}
          alt={lang === "en" ? "Admin panel — offer configuration screens" : "Админ-панель �� экраны настройки офферов"}
          style={{ width: "100%", display: "block" }}
        />
      </motion.div>


    </div>
  );
}

// ── Analytics Dashboard Mockup Palette ──────────────────────────────────��────
const DB = {
  bg:      "#0d1117",
  widget:  "#161b22",
  border:  "rgba(255,255,255,0.07)",
  text:    "#e2e8f0",
  muted:   "#6e7f94",
  accent:  "#6366f1",
  success: "#4ade80",
  error:   "#ef4444",
} as const;

function MiniSparkline({ data, color, w = 64, h = 26 }: { data: number[]; color: string; w?: number; h?: number }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step  = w / (data.length - 1);
  const pts   = data.map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 3) + 1}`).join(" ");
  return (
    <svg width={w} height={h} style={{ display: "block", overflow: "visible", flexShrink: 0 }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

// ── Before: 14 equal widgets, cluttered grid, single global filter
function OldDashboardMockup() {
  const LABELS = ["Revenue","Orders","Users","Conv.","Churn","ARPU","LTV","CAC","MRR","ARR","DAU","MAU","NPS","CSAT"];
  const VALUES = ["$2.4M","8,432","24.1K","3.2%","1.8%","$28","$842","$124","$198K","$2.4M","8.4K","24.1K","42","3.8"];
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", padding:"5px 10px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}`, flexShrink:0 }}>
        <span style={{ fontSize:"8px", color:DB.muted }}>Global date range (affects all 14 widgets):</span>
        <span style={{ fontSize:"8px", color:DB.text, padding:"2px 7px", background:"rgba(255,255,255,0.05)", borderRadius:"3px", border:`1px solid ${DB.border}`, marginLeft:"auto", flexShrink:0 }}>Last 30 days ▾</span>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"5px", flex:1, overflow:"hidden" }}>
        {LABELS.map((label, i) => (
          <div key={i} style={{ padding:"5px 8px", background:DB.widget, borderRadius:"4px", border:`1px solid ${DB.border}`, overflow:"hidden" }}>
            <div style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"2px", whiteSpace:"nowrap" as const, overflow:"hidden", textOverflow:"ellipsis" }}>{label}</div>
            <div style={{ fontSize:"11px", color:DB.text, fontWeight:600, lineHeight:1 }}>{VALUES[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── After: Hero + 2 Standard + 4 Compact — clear hierarchy
function NewDashboardMockup() {
  const spark = [28,35,32,45,42,55,62,58,70,68,75,88];
  const bars  = [3,5,4,6,7,5,8,6,7,8,9,10];
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
      {/* Hero KPI */}
      <div style={{ padding:"9px 13px", background:"linear-gradient(135deg,rgba(99,102,241,0.13) 0%,rgba(99,102,241,0.05) 100%)", borderRadius:"7px", border:"1px solid rgba(99,102,241,0.28)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"2px" }}>Monthly Revenue · Hero</div>
          <div style={{ fontSize:"20px", color:DB.text, fontWeight:700, lineHeight:1 }}>$247,832</div>
          <div style={{ fontSize:"7px", color:DB.success, marginTop:"2px" }}>↑ +12.4% vs prev period</div>
        </div>
        <MiniSparkline data={spark} color={DB.accent} />
      </div>
      {/* 2 Standard charts */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", flex:1, overflow:"hidden" }}>
        <div style={{ padding:"7px 9px", background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}`, display:"flex", flexDirection:"column" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"4px" }}>
            <span style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em" }}>Conversions · Standard</span>
            <span style={{ fontSize:"6px", color:"rgba(99,102,241,0.7)", background:"rgba(99,102,241,0.08)", padding:"1px 4px", borderRadius:"3px" }}>7d ▾</span>
          </div>
          <div style={{ flex:1, display:"flex", alignItems:"flex-end", gap:"2px" }}>
            {bars.map((v,i) => <div key={i} style={{ flex:1, height:`${(v/10)*100}%`, borderRadius:"1px 1px 0 0", background: i===bars.length-1 ? "rgba(99,102,241,0.75)" : "rgba(99,102,241,0.25)" }} />)}
          </div>
        </div>
        <div style={{ padding:"7px 9px", background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}`, display:"flex", flexDirection:"column" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"4px" }}>
            <span style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em" }}>Active Users · Standard</span>
            <span style={{ fontSize:"6px", color:"rgba(99,102,241,0.7)", background:"rgba(99,102,241,0.08)", padding:"1px 4px", borderRadius:"3px" }}>30d ▾</span>
          </div>
          <div style={{ flex:1, display:"flex", alignItems:"center" }}>
            <MiniSparkline data={[40,38,45,42,52,48,58,54,62,60,68,74]} color={DB.accent} w={90} h={28} />
          </div>
        </div>
      </div>
      {/* 4 Compact metrics */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"5px", flexShrink:0 }}>
        {[{l:"CSAT",v:"4.2",d:"+0.3"},{l:"NPS",v:"42",d:"+8"},{l:"Churn",v:"1.2%",d:"−0.3%"},{l:"ARPU",v:"$28",d:"+$2"}].map((m,i) => (
          <div key={i} style={{ padding:"5px 7px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}` }}>
            <div style={{ fontSize:"5px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"2px" }}>{m.l} · Compact</div>
            <div style={{ fontSize:"10px", color:DB.text, fontWeight:600 }}>{m.v}</div>
            <div style={{ fontSize:"6px", color:DB.success }}>{m.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── KPI widget: bare (before) → contextual card (after)
function OldKPIMockup() {
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ width:"100%", padding:"20px 24px", background:DB.widget, borderRadius:"12px", border:`1px solid ${DB.border}` }}>
        <div style={{ fontSize:"10px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"8px" }}>Daily Active Users</div>
        <div style={{ fontSize:"36px", color:DB.text, fontWeight:700, lineHeight:1, marginBottom:"6px" }}>2,847</div>
        <div style={{ fontSize:"10px", color:DB.muted }}>Last 30 days</div>
        <div style={{ marginTop:"14px", height:"1px", background:"rgba(255,255,255,0.06)" }} />
        <div style={{ marginTop:"8px", fontSize:"8px", color:"rgba(255,255,255,0.12)", textAlign:"center" as const }}>no trend · no comparison · no status</div>
      </div>
    </div>
  );
}

function NewKPIMockup() {
  const data = [42,38,55,58,65,70,68,75,82,78,88,92];
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ width:"100%", padding:"18px 22px", background:"linear-gradient(135deg,rgba(99,102,241,0.10) 0%,rgba(99,102,241,0.04) 100%)", borderRadius:"12px", border:"1px solid rgba(99,102,241,0.22)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
          <div style={{ fontSize:"10px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em" }}>Daily Active Users</div>
          <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:DB.success }} />
            <div style={{ fontSize:"8px", color:DB.success }}>On track</div>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:"36px", color:DB.text, fontWeight:700, lineHeight:1, marginBottom:"4px" }}>2,847</div>
            <div style={{ fontSize:"10px", color:DB.success }}>↑ +14.2% vs prev period</div>
          </div>
          <MiniSparkline data={data} color={DB.accent} w={72} h={32} />
        </div>
        <div style={{ marginTop:"12px", paddingTop:"10px", borderTop:`1px solid rgba(255,255,255,0.07)`, display:"flex", alignItems:"center", gap:"12px" }}>
          <div style={{ fontSize:"8px", color:DB.muted }}>Last 30 days</div>
          <div style={{ fontSize:"8px", color:"rgba(99,102,241,0.75)", cursor:"pointer" }}>Change period ▾</div>
          <div style={{ fontSize:"8px", color:DB.muted, marginLeft:"auto" }}>vs 2,491 prev period</div>
        </div>
      </div>
    </div>
  );
}

// ── Filter panel: global range (before) → per-widget independent (after)
function OldFilterMockup() {
  const bars = [[3,5,4,6,5,8,6,7,8,9],[8,6,7,5,9,8,7,9,6,8],[4,5,3,6,4,5,7,6,5,8]];
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ padding:"6px 10px", background:DB.widget, borderRadius:"5px", border:"2px solid rgba(239,68,68,0.28)", display:"flex", alignItems:"center", gap:"8px", flexShrink:0 }}>
        <span style={{ fontSize:"7px", color:"rgba(239,68,68,0.65)", textTransform:"uppercase" as const, letterSpacing:"0.04em" }}>Global filter — affects all charts</span>
        <span style={{ fontSize:"7px", color:DB.text, padding:"2px 7px", background:"rgba(255,255,255,0.06)", borderRadius:"3px", border:`1px solid ${DB.border}`, marginLeft:"auto", flexShrink:0 }}>Last 30 days ▾</span>
      </div>
      {["Revenue","Orders","Active Users"].map((label, i) => (
        <div key={i} style={{ padding:"6px 9px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}`, flex:1, overflow:"hidden" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"3px" }}>
            <span style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em" }}>{label}</span>
            <span style={{ fontSize:"6px", color:"rgba(239,68,68,0.45)" }}>← same range, no own control</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:"2px", height:"20px" }}>
            {bars[i].map((v,j) => <div key={j} style={{ flex:1, height:`${(v/9)*100}%`, borderRadius:"1px 1px 0 0", background:"rgba(99,102,241,0.25)" }} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function NewFilterMockup() {
  const data = [
    { label:"Revenue",   range:"30d", bars:[3,5,4,6,7,5,8,6,7,8,9,10] },
    { label:"Orders",    range:"7d",  bars:[8,6,7,5,9,8,7,9,6,8,7,9]  },
    { label:"Retention", range:"90d", bars:[4,5,3,6,4,5,7,6,5,8,6,9]  },
  ];
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ padding:"5px 10px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}`, display:"flex", alignItems:"center", flexShrink:0 }}>
        <span style={{ fontSize:"7px", color:DB.muted }}>Per-widget independent date ranges</span>
        <div style={{ display:"flex", alignItems:"center", gap:"4px", marginLeft:"auto" }}>
          <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:DB.success }} />
          <span style={{ fontSize:"7px", color:DB.success }}>Active</span>
        </div>
      </div>
      {data.map((d, i) => (
        <div key={i} style={{ padding:"6px 9px", background:DB.widget, borderRadius:"5px", border:"1px solid rgba(99,102,241,0.18)", flex:1, overflow:"hidden" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"3px", alignItems:"center" }}>
            <span style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em" }}>{d.label}</span>
            <span style={{ fontSize:"7px", color:"rgba(99,102,241,0.85)", background:"rgba(99,102,241,0.10)", padding:"1px 5px", borderRadius:"3px", border:"1px solid rgba(99,102,241,0.2)" }}>{d.range} ▾</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-end", gap:"2px", height:"20px" }}>
            {d.bars.map((v,j) => <div key={j} style={{ flex:1, height:`${(v/10)*100}%`, borderRadius:"1px 1px 0 0", background: j===d.bars.length-1 ? "rgba(99,102,241,0.75)" : "rgba(99,102,241,0.28)" }} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Dashboard state mockups: loaded / partial-error / skeleton-loading
function DashboardStateMockup({ variant }: { variant: "loaded" | "error" | "loading" }) {
  const spark = [28,35,32,45,42,55,62,58,70,68,75,88];
  const bars  = [3,5,4,6,7,5,8,6,7,8,9,10];

  if (variant === "loading") {
    return (
      <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
        <style>{`.dsk{animation:dskAnim 1.4s ease-in-out infinite}@keyframes dskAnim{0%,100%{opacity:.3}50%{opacity:.7}}`}</style>
        <div className="dsk" style={{ height:"56px", background:DB.widget, borderRadius:"7px", border:`1px solid ${DB.border}`, flexShrink:0 }} />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", flex:1 }}>
          {[0,1].map(i => <div key={i} className="dsk" style={{ background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}` }} />)}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"5px", flexShrink:0 }}>
          {[0,1,2,3].map(i => <div key={i} className="dsk" style={{ height:"38px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}` }} />)}
        </div>
      </div>
    );
  }

  if (variant === "error") {
    return (
      <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
        <div style={{ padding:"9px 13px", background:"linear-gradient(135deg,rgba(99,102,241,0.10) 0%,rgba(99,102,241,0.04) 100%)", borderRadius:"7px", border:"1px solid rgba(99,102,241,0.22)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"2px" }}>Monthly Revenue · Loaded ✓</div>
            <div style={{ fontSize:"19px", color:DB.text, fontWeight:700, lineHeight:1 }}>$247,832</div>
            <div style={{ fontSize:"7px", color:DB.success, marginTop:"2px" }}>↑ +12.4%</div>
          </div>
          <MiniSparkline data={spark} color={DB.accent} />
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", flex:1 }}>
          <div style={{ padding:"7px 9px", background:"rgba(239,68,68,0.04)", borderRadius:"6px", border:"1px solid rgba(239,68,68,0.28)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"5px" }}>
            <div style={{ width:"20px", height:"20px", borderRadius:"50%", background:"rgba(239,68,68,0.12)", border:"1px solid rgba(239,68,68,0.35)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"11px", color:DB.error }}>!</span>
            </div>
            <div style={{ fontSize:"7px", color:DB.error, textAlign:"center" as const }}>Data source error</div>
            <div style={{ fontSize:"6px", color:DB.muted, textAlign:"center" as const }}>Amplitude API timeout</div>
            <div style={{ fontSize:"6px", color:DB.accent, padding:"2px 7px", borderRadius:"4px", border:"1px solid rgba(99,102,241,0.25)", cursor:"pointer" }}>↺ Retry widget</div>
          </div>
          <div style={{ padding:"7px 9px", background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}`, display:"flex", flexDirection:"column" }}>
            <div style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"4px" }}>Active Users · Loaded ✓</div>
            <div style={{ flex:1, display:"flex", alignItems:"center" }}>
              <MiniSparkline data={[40,38,45,42,52,48,58,54,62,60,68,74]} color={DB.accent} w={88} h={28} />
            </div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"5px", flexShrink:0 }}>
          {[{l:"CSAT",v:"4.2"},{l:"NPS",v:"42"},{l:"Churn",v:"1.2%"},{l:"ARPU",v:"$28"}].map((m,i) => (
            <div key={i} style={{ padding:"5px 7px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}` }}>
              <div style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"2px" }}>{m.l}</div>
              <div style={{ fontSize:"10px", color:DB.text, fontWeight:600 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // loaded
  return (
    <div style={{ width:"100%", height:"100%", background:DB.bg, padding:"10px", overflow:"hidden", display:"flex", flexDirection:"column", gap:"6px", fontFamily:"'Inter',sans-serif" }}>
      <div style={{ padding:"9px 13px", background:"linear-gradient(135deg,rgba(99,102,241,0.13) 0%,rgba(99,102,241,0.05) 100%)", borderRadius:"7px", border:"1px solid rgba(99,102,241,0.25)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ fontSize:"7px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"2px" }}>Monthly Revenue</div>
          <div style={{ fontSize:"19px", color:DB.text, fontWeight:700, lineHeight:1 }}>$247,832</div>
          <div style={{ fontSize:"7px", color:DB.success, marginTop:"2px" }}>↑ +12.4% · All systems operational ✓</div>
        </div>
        <MiniSparkline data={spark} color={DB.accent} />
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", flex:1, overflow:"hidden" }}>
        <div style={{ padding:"7px 9px", background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}`, display:"flex", flexDirection:"column" }}>
          <div style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"4px" }}>Conversions</div>
          <div style={{ flex:1, display:"flex", alignItems:"flex-end", gap:"2px" }}>
            {bars.map((v,i) => <div key={i} style={{ flex:1, height:`${(v/10)*100}%`, borderRadius:"1px 1px 0 0", background: i===bars.length-1 ? "rgba(99,102,241,0.75)" : "rgba(99,102,241,0.25)" }} />)}
          </div>
        </div>
        <div style={{ padding:"7px 9px", background:DB.widget, borderRadius:"6px", border:`1px solid ${DB.border}`, display:"flex", flexDirection:"column" }}>
          <div style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"4px" }}>Active Users</div>
          <div style={{ flex:1, display:"flex", alignItems:"center" }}>
            <MiniSparkline data={[40,38,45,42,52,48,58,54,62,60,68,74]} color={DB.accent} w={88} h={28} />
          </div>
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"5px", flexShrink:0 }}>
        {[{l:"CSAT",v:"4.2",d:"+0.3"},{l:"NPS",v:"42",d:"+8"},{l:"Churn",v:"1.2%",d:"−0.3%"},{l:"ARPU",v:"$28",d:"+$2"}].map((m,i) => (
          <div key={i} style={{ padding:"5px 7px", background:DB.widget, borderRadius:"5px", border:`1px solid ${DB.border}` }}>
            <div style={{ fontSize:"6px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.04em", marginBottom:"2px" }}>{m.l}</div>
            <div style={{ fontSize:"10px", color:DB.text, fontWeight:600 }}>{m.v}</div>
            <div style={{ fontSize:"6px", color:DB.success }}>{m.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Widget configuration panel (full-width desktop)
function WidgetConfigMockup() {
  const spark = [28,35,42,38,55,62,58,70,68,75,82,90];
  return (
    <div style={{ background:DB.bg, display:"flex", minHeight:"360px", fontFamily:"'Inter',sans-serif", overflow:"hidden" }}>
      {/* Sidebar */}
      <div style={{ width:"196px", borderRight:`1px solid ${DB.border}`, display:"flex", flexDirection:"column", padding:"16px 0", flexShrink:0 }}>
        <div style={{ padding:"0 14px 10px", fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.06em" }}>My Boards</div>
        {["Operations Overview","Finance Summary","Growth Metrics"].map((board, i) => (
          <div key={i} style={{ padding:"7px 14px", background: i===0 ? "rgba(99,102,241,0.08)" : "transparent", borderLeft: i===0 ? "2px solid rgba(99,102,241,0.65)" : "2px solid transparent" }}>
            <div style={{ fontSize:"11px", color: i===0 ? DB.text : DB.muted }}>{board}</div>
          </div>
        ))}
        <div style={{ borderTop:`1px solid ${DB.border}`, marginTop:"10px", padding:"10px 14px 0" }}>
          <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.06em", marginBottom:"6px" }}>Widgets</div>
          {["Revenue · Hero","Conversions · Standard","Active Users · Standard","CSAT · Compact"].map((w, i) => (
            <div key={i} style={{ padding:"5px 7px", marginBottom:"2px", borderRadius:"5px", background: i===0 ? "rgba(255,255,255,0.05)" : "transparent", fontSize:"10px", color: i===0 ? DB.text : DB.muted, display:"flex", alignItems:"center", gap:"6px", cursor:"pointer" }}>
              <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:["rgba(99,102,241,0.8)","rgba(99,102,241,0.45)","rgba(99,102,241,0.45)","rgba(99,102,241,0.25)"][i], flexShrink:0 }} />
              {w}
            </div>
          ))}
        </div>
      </div>
      {/* Config area */}
      <div style={{ flex:1, padding:"22px 28px", overflow:"hidden" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
          <div>
            <div style={{ fontSize:"14px", color:DB.text, fontWeight:600, marginBottom:"2px" }}>Configure Widget</div>
            <div style={{ fontSize:"10px", color:DB.muted }}>Revenue · Hero tier · Operations Overview</div>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <div style={{ padding:"6px 12px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.10)", fontSize:"10px", color:DB.muted, cursor:"pointer" }}>Cancel</div>
            <div style={{ padding:"6px 12px", borderRadius:"6px", background:"rgba(99,102,241,0.9)", fontSize:"10px", color:"#fff", cursor:"pointer" }}>Save changes</div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }}>
          <div>
            <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"5px" }}>Widget name</div>
            <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(99,102,241,0.42)", borderRadius:"6px", fontSize:"11px", color:DB.text }}>Monthly Revenue</div>
          </div>
          <div>
            <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"5px" }}>Prominence tier</div>
            <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:`1px solid ${DB.border}`, borderRadius:"6px", fontSize:"11px", color:DB.text, display:"flex", justifyContent:"space-between" as const }}>
              <span>Hero (full width)</span><span style={{ color:DB.muted }}>▾</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"5px" }}>Data source</div>
            <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:`1px solid ${DB.border}`, borderRadius:"6px", fontSize:"11px", color:DB.text, display:"flex", justifyContent:"space-between" as const }}>
              <span>Amplitude · revenue_events</span><span style={{ color:DB.muted }}>▾</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"5px" }}>Metric</div>
            <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:`1px solid ${DB.border}`, borderRadius:"6px", fontSize:"11px", color:DB.text, display:"flex", justifyContent:"space-between" as const }}>
              <span>Sum(revenue_usd)</span><span style={{ color:DB.muted }}>▾</span>
            </div>
          </div>
          <div style={{ gridColumn:"span 2" }}>
            <div style={{ fontSize:"8px", color:DB.muted, textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"5px" }}>Alert threshold</div>
            <div style={{ display:"flex", gap:"8px", alignItems:"center" }}>
              <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:`1px solid ${DB.border}`, borderRadius:"6px", fontSize:"11px", color:DB.text, flex:1 }}>Notify if drops below</div>
              <div style={{ padding:"7px 11px", background:"rgba(255,255,255,0.03)", border:`1px solid ${DB.border}`, borderRadius:"6px", fontSize:"11px", color:DB.text, width:"90px" }}>$180,000</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop:"18px", padding:"12px 16px", background:"rgba(99,102,241,0.05)", border:"1px solid rgba(99,102,241,0.15)", borderRadius:"8px" }}>
          <div style={{ fontSize:"8px", color:"rgba(99,102,241,0.65)", textTransform:"uppercase" as const, letterSpacing:"0.05em", marginBottom:"8px" }}>Live preview</div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" as const }}>
            <div>
              <div style={{ fontSize:"9px", color:DB.muted, marginBottom:"2px" }}>Monthly Revenue</div>
              <div style={{ fontSize:"22px", color:DB.text, fontWeight:700, lineHeight:1 }}>$247,832</div>
              <div style={{ fontSize:"9px", color:DB.success, marginTop:"2px" }}>↑ +12.4% vs prev period</div>
            </div>
            <MiniSparkline data={spark} color={DB.accent} w={72} h={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Analytics Dashboard showcase sections ────────────────────────────────────
function AnalyticsDashboardSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  const points = lang === "en"
    ? [
        { label: "Category filters",        desc: "Horizontal pill bar — Markets, Crypto, Life, AI — narrows the feed without leaving the screen." },
        { label: "Two-column card grid",     desc: "Video thumbnails fill the viewport edge-to-edge with an inline play overlay so users stay in the feed." },
        { label: "Breaking news strip",      desc: "A pinned card at the top surfaces the most urgent story with a timestamp, bridging editorial and algorithmic content." },
        { label: "Bottom tab navigation",    desc: "Switches between Video, News and Longreads instantly without resetting scroll position in any section." },
      ]
    : [
        { label: "Фильтры по категориям",    desc: "Горизонтальная панель — $$$, Крипта, Life, AI — сужает ленту без смены экрана." },
        { label: "Двухколоночная сетка",     desc: "Карточки с превью видео заполняют вьюпорт, инлайн-плеер удерживает пользователя в ленте." },
        { label: "Стрип срочных новостей",   desc: "Закреплённая карточка вверху выводит самый актуальный материал с таймстэмпом." },
        { label: "Нижняя навигация",         desc: "Переключение между Видео, Новостями и Лонгридами без потери позиции скролла." },
      ];

  return (
    <div className="section-inner">
      <SectionLabel num="05" label={lang === "en" ? "Final Design" : "Финальный дизайн"} />
      <div className="fd-video-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>

        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: _ease as number[] }}
            style={{ ...preset.nano, color: "rgba(139,92,246,0.7)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "14px" }}
          >
            {lang === "en" ? "Section 01" : "Раздел 01"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 16px" }}
          >
            {lang === "en" ? "Video" : "Видео"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.08 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: "0 0 36px" }}
          >
            {lang === "en"
              ? "The video section is the primary entry point for media content. The design prioritises quick browsing and instant playback, keeping users in the feed."
              : "Раздел видео — основная точка входа в медиаконтент. Дизайн сделан так, чтобы пользователь быстро находил нужное и запускал воспроизведение, не покидая ленту."}
          </motion.p>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {points.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: _ease as number[] }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 0 16px 16px", borderLeft: "2px solid rgba(139,92,246,0.3)" }}
              >
                <div style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 5px" }}>{pt.label}</div>
                <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}>{pt.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: mobile screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: _ease as number[], delay: 0.12 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div style={{
            position: "relative",
            maxWidth: "320px",
            width: "100%",
            borderRadius: "36px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(139,92,246,0.08)",
            background: "#0a0a0f",
          }}>
            <div style={{ height: "14px", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "8px" }}>
              <div style={{ width: "72px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.1)" }} />
            </div>
            <img
              src={vedVideoSectionImg}
              alt={lang === "en" ? "Video section" : "Раздел Видео"}
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ height: "22px", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "100px", height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.1)" }} />
            </div>
          </div>
        </motion.div>

      </div>
      <style>{`
        @media(max-width:768px){
          #analytics-dashboard-design .fd-video-col { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </div>
  );
}

// ��тов модульной drag-and-drop системой. Три уровня значимости — Hero, Standard, Compact — создают мгновенную визуальную иерархию. Теперь пользователи считывают дашборд за 5 секунд и находят нужную метрику без прокрутки."}

function AnalyticsKPISection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <div className="ai-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Hero KPI Module" : "Hero-модуль KPI"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "The Hero widget was redesigned from a bare number into a contextual card: current value, delta vs. previous period, a sparkline trend, and a colour-coded status dot. At-a-glance diagnosis replaces manual comparison — the metric tells its own story."
              : "Hero-виджет переработан из числа в контекстную карточку: текущее значение, дельта к прошлому периоду, спарклайн-тренд и цветовой индикатор статуса. Моментальная диагностика — метрика рассказывает свою историю без пояснений."}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: _ease as number[], delay: 0.15 }}
        >
          <BeforeAfterSlider
            lang={lang}
            beforeNode={<OldKPIMockup />}
            afterNode={<NewKPIMockup />}
            bg={DB.bg}
            width="100%"
            ratio="4 / 3"
            radius="12px"
          />
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){#analytics-kpi .ai-two-col{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </div>
  );
}

function AnalyticsFiltersSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <div className="cd-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Filters & Segmentation" : "Фильтры и сегментация"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "The global filter bar was replaced with per-widget controls. Each chart carries its own date range, segment selector, and compare toggle — eliminating the #1 source of frustration from FullStory analysis and enabling cross-period comparison in a single view."
              : "Глобальная панель фильтров заменена элементами управления на уровне виджета. У каждого графика свой диапазон дат, выбор сегмента и переключатель сравнения — устраняет главную боль из анализа FullStory и позволяет сравнивать периоды в одном виде."}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65, ease: _ease as number[], delay: 0.15 }}
        >
          <BeforeAfterSlider
            lang={lang}
            beforeNode={<OldFilterMockup />}
            afterNode={<NewFilterMockup />}
            bg={DB.bg}
            width="100%"
            ratio="16 / 9"
            radius="12px"
          />
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){#analytics-filters .cd-two-col{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </div>
  );
}

function AnalyticsStateSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  const STATES = [
    {
      variant: "loaded"  as const, color: "#22c55e",
      headingEn: "Data loaded",    headingRu: "Данные загружены",
      descEn: "When all widgets load cleanly, each metric block animates in sequentially — directing focus from the top-left Hero KPI to supporting Standard and Compact charts below.",
      descRu: "При успешной загрузке все блоки анимируются последовательно — направляя взгляд от Hero KPI к поддерживающим графикам Standard и Compact.",
    },
    {
      variant: "error"   as const, color: "#ef4444",
      headingEn: "Partial failure", headingRu: "Частичная ошибка",
      descEn: "If a single data source fails, only that widget shows an error — not the whole dashboard. An inline retry CTA lets users refresh one widget without losing the rest of their view.",
      descRu: "При сбое одного источника ошибка показывается только в этом виджете. Встроенный retry позволяет обновить один блок, не теряя остальных данных.",
    },
    {
      variant: "loading" as const, color: "#6366f1",
      headingEn: "Loading state",   headingRu: "Состояние загрузки",
      descEn: "Skeleton placeholders match each widget's exact dimensions, preventing layout shift. A subtle shimmer signals live fetching without blocking widgets that have already loaded.",
      descRu: "Скелетоны совпадают с точными размерами каждого виджета — нет сдвига макета. Тонкая shimmer-анимация не блокирует виджеты, уже загрузившие данные.",
    },
  ] as const;
  return (
    <div className="section-inner">
      <div style={{ marginBottom: "56px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
          style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "16px" }}
        >
          {lang === "en" ? "Dashboard Data States" : "Состояния данных дашборда"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.08 }}
          style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, maxWidth: "620px", margin: 0 }}
        >
          {lang === "en"
            ? "Every dashboard view resolves into one of three states: fully loaded, partially failed, or loading. Each required a distinct visual language — accurate messaging and an action that keeps the analyst moving forward."
            : "Каждый вид дашборда разрешается в одно из трёх состояний: загружен, частичная ошибка или загрузка. Каждое требовало отдельного визуального языка — точного сообщения и действия, удерживающего аналитика в ра��оте."}
        </motion.p>
      </div>
      <div className="as-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", alignItems: "start" }}>
        {STATES.map((s, i) => (
          <motion.div
            key={s.headingEn}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[], delay: i * 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{
              borderRadius: "12px", overflow: "clip",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 32px ${s.color}14`,
              aspectRatio: "16 / 10",
              background: DB.bg,
            }}>
              <DashboardStateMockup variant={s.variant} />
            </div>
            <div>
              <p style={{ ...preset.body, color: textColor.primary, fontWeight: weight.medium, margin: "0 0 8px" }}>
                {lang === "en" ? s.headingEn : s.headingRu}
              </p>
              <p style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}>
                {lang === "en" ? s.descEn : s.descRu}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`@media(max-width:860px){#analytics-states .as-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </div>
  );
}

function AnalyticsAdminSection({ lang, ease: _ease }: { lang: "en" | "ru"; ease: readonly number[] }) {
  return (
    <div className="section-inner">
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
        style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "16px" }}
      >
        {lang === "en" ? "Widget Configuration Panel" : "Панель настройки виджетов"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.08 }}
        style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, maxWidth: "640px", margin: "0 0 56px" }}
      >
        {lang === "en"
          ? "Alongside the end-user dashboard, I designed the widget configuration panel that admins use to set data sources, thresholds, and alert rules per widget. The challenge: exposing enough power for data analysts without overwhelming operations managers who configure the dashboard once and forget."
          : "Параллельно с пользовательским дашбордом я проектировал панель настройки виджетов для администраторов — источники данных, пороговые значения и правила уведомлений. Задача: дать достаточно возможностей аналитикам данных, не перегружая менедж��ров, которые настраивают дашборд один раз."}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: _ease as number[] }}
        style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        <WidgetConfigMockup />
      </motion.div>
    </div>
  );
}

// ── Analytics-specific Exploration carousel ───────────────────────────────────
const ANALYTICS_EXPL_SLIDES = [
  {
    img:       personaImg,
    tag:       "User Research · n=8",
    captionEn: "Alex, Operations Lead",
    captionRu: "Алекс, руководитель операций",
    objectPos: "top",
    bright:    "brightness(0.78) saturate(0.65)",
  },
  {
    img:       figmaWorkspaceImg,
    tag:       "Card Sorting · n=22",
    captionEn: "4 widget clusters emerged from 14",
    captionRu: "4 кластера из 14 типов виджетов",
    objectPos: "top",
    bright:    "brightness(0.72) saturate(0.7)",
  },
  {
    img:       cjmTableImg,
    tag:       "JTBD · Journey Map",
    captionEn: "Time-to-insight emotional journey",
    captionRu: "Эмоциональный путь до инсайта",
    objectPos: "top",
    bright:    "brightness(0.72) saturate(0.7)",
  },
] as const;

function AnalyticsExplorationSection({ lang, ease: _ease, inView: _inView }: { lang: "en" | "ru"; ease: readonly number[]; inView: object }) {
  const [active, setActive] = useState(0);
  const total = ANALYTICS_EXPL_SLIDES.length;
  const prev  = () => setActive((a) => (a - 1 + total) % total);
  const next  = () => setActive((a) => (a + 1) % total);

  return (
    <div className="section-inner">
      <div className="expl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

        {/* ── Left: text ── */}
        <div style={{ position: "sticky", top: "100px" }}>
          <SectionLabel num="03" label={lang === "en" ? "Exploration" : "Исследование пользователя"} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Understanding the ops manager" : "Понимание опс-менеджера"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "We shadowed 8 ops managers in real workflows, building a User Persona from interview synthesis. Card sorting with 22 participants revealed 4 natural widget clusters — not the 2 the team assumed. A JTBD-framed journey map exposed exactly where time-to-insight was lost and what decisions users couldn't make from the dashboard alone."
              : "Мы наблюдали за 8 опс-менеджерами в реальной работе и синтезировали интервью в User Persona. Карточная сортировка с 22 участниками выявила 4 естественных кластера виджетов — а не 2, которые предполагала команда. JTBD-карта пути показала точно, где терялось время до инсайта и какие решения ��ользователи не могли принять прямо из дашборда."}
          </motion.p>
        </div>

        {/* ── Right: carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[], delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {/* Slide */}
          <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.08)", background: "#0a0d18" }}>
            {ANALYTICS_EXPL_SLIDES.map((slide, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.02 }}
                transition={{ duration: 0.45, ease: _ease as number[] }}
                style={{ position: "absolute", inset: 0, pointerEvents: i === active ? "auto" : "none" }}
              >
                <img
                  src={slide.img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: slide.objectPos, filter: slide.bright, display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(3,7,18,0.88) 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ ...preset.nano, color: "rgba(255,255,255,0.32)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "4px" }}>
                      {slide.tag}
                    </div>
                    <div style={{ ...preset.small, color: "rgba(255,255,255,0.72)", fontWeight: weight.medium }}>
                      {lang === "en" ? slide.captionEn : slide.captionRu}
                    </div>
                  </div>
                  <div style={{ ...preset.nano, color: "rgba(99,102,241,0.65)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)", padding: "3px 10px", borderRadius: "20px", flexShrink: 0, marginLeft: "12px" }}>
                    Figma
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Arrow buttons */}
            <button onClick={prev} aria-label="Previous" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(3,7,18,0.6)", backdropFilter: "blur(8px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", zIndex: 2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(3,7,18,0.6)", backdropFilter: "blur(8px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", zIndex: 2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5L10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            {ANALYTICS_EXPL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                style={{ width: i === active ? "22px" : "6px", height: "6px", borderRadius: "99px", border: "none", cursor: "pointer", padding: 0, background: i === active ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.2)", transition: "all 0.3s ease" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #exploration .expl-two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          #exploration .expl-two-col > div:first-child { position: static !important; }
        }
      `}</style>
    </div>
  );
}

// ── Exploration section with carousel ────────────────────────────────────────
const EXPL_SLIDES = [
  {
    img:      personaImg,
    tag:      "User Persona",
    captionEn: "Alex, frequent depositor",
    captionRu: "Алекс, частый вкладчик",
    objectPos: "top",
    bright:   "brightness(0.78) saturate(0.65)",
  },
  {
    img:      figmaWorkspaceImg,
    tag:      "User Persona · Userflow",
    captionEn: "Who is the user & how they move",
    captionRu: "Кто пользователь и как он движется",
    objectPos: "top",
    bright:   "brightness(0.72) saturate(0.7)",
  },
  {
    img:      cjmTableImg,
    tag:      "JTBD · CJM",
    captionEn: "Core job & emotional journey",
    captionRu: "Ключевая задача и эмоциональный путь",
    objectPos: "top",
    bright:   "brightness(0.72) saturate(0.7)",
  },
] as const;

function ExplorationSection({ lang, ease: _ease, inView: _inView }: { lang: "en" | "ru"; ease: readonly number[]; inView: object }) {
  const [active, setActive] = useState(0);
  const total = EXPL_SLIDES.length;
  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <div className="section-inner">
      <div className="expl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>

        {/* ── Left: text ── */}
        <div style={{ position: "sticky", top: "100px" }}>
          <SectionLabel num="03" label={lang === "en" ? "Exploration" : "Исследование пользователя"} />
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[] }}
            style={{ ...preset.h2, fontWeight: weight.medium, color: textColor.primary, marginBottom: "20px" }}
          >
            {lang === "en" ? "Understanding the user" : "Понимание пользователя"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, ease: _ease as number[], delay: 0.1 }}
            style={{ ...preset.body, color: textColor.secondary, lineHeight: leading.loose, margin: 0 }}
          >
            {lang === "en"
              ? "Together with the PM, I developed JTBD, CJM and a Userflow — the three frameworks I used as the direct foundation for prototyping."
              : "Совместно с продактом я разработал JTBD, CJM и Userflow — три инструмента, которые стали прямой основой для создания прототипов."}
          </motion.p>
        </div>

        {/* ── Right: carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: _ease as number[], delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {/* Slide */}
          <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.08)", background: "#0a0d18" }}>
            {EXPL_SLIDES.map((slide, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.02 }}
                transition={{ duration: 0.45, ease: _ease as number[] }}
                style={{ position: "absolute", inset: 0, pointerEvents: i === active ? "auto" : "none" }}
              >
                <img
                  src={slide.img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: slide.objectPos, filter: slide.bright, display: "block" }}
                />
              </motion.div>
            ))}

            {/* Arrow buttons */}
            <button onClick={prev} aria-label="Previous" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(3,7,18,0.6)", backdropFilter: "blur(8px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", zIndex: 2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next" style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(3,7,18,0.6)", backdropFilter: "blur(8px)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", zIndex: 2 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5L10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            {EXPL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                style={{ width: i === active ? "22px" : "6px", height: "6px", borderRadius: "99px", border: "none", cursor: "pointer", padding: 0, background: i === active ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.2)", transition: "all 0.3s ease" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #exploration .expl-two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          #exploration .expl-two-col > div:first-child { position: static !important; }
        }
      `}</style>
    </div>
  );
}

// ── Reading progress bar ──────────────────────────────��───────────────────────
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 201, background: "rgba(255,255,255,0.04)" }}>
      <motion.div
        style={{ height: "100%", background: "linear-gradient(90deg, #4f46e5 0%, #a5b4fc 100%)", transformOrigin: "left" }}
        animate={{ scaleX: pct / 100 }}
        transition={{ duration: 0 }}
      />
    </div>
  );
}

// ── Funnel chart ─────────────────────────────────────────────────────────────
function FunnelChart({ steps, lang }: { steps: FullCaseStudy["problem"]["funnel"]; lang: "en" | "ru" }) {
  const maxWidth = 480;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {steps.map((step, i) => {
        const drop = i < steps.length - 1 ? steps[i].pct - steps[i + 1].pct : 0;
        return (
          <div key={i}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              style={{ display: "flex", alignItems: "center", gap: "16px", padding: "10px 0" }}
            >
              {/* Bar */}
              <div style={{ flex: 1, position: "relative" }}>
                <div style={{ height: "28px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", overflow: "hidden", maxWidth }}>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      height: "100%",
                      width: `${step.pct}%`,
                      transformOrigin: "left",
                      background: step.pct > 60
                        ? "rgba(99,102,241,0.30)"
                        : step.pct > 30
                        ? "rgba(99,102,241,0.18)"
                        : "rgba(239,68,68,0.22)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "12px",
                    }}
                  />
                </div>
                <div style={{
                  position: "absolute", left: "12px", top: 0, bottom: 0,
                  display: "flex", alignItems: "center",
                  ...preset.small,
                  fontWeight: weight.regular,
                  color: textColor.secondary,
                }}>
                  {t(step.label, lang)}
                </div>
              </div>
              {/* Percentage */}
              <span style={{ ...preset.small, fontWeight: weight.medium, color: step.pct > 60 ? textColor.accent : step.pct > 30 ? textColor.secondary : textColor.error, minWidth: "44px", textAlign: "right" }}>
                {step.pct}%
              </span>
            </motion.div>

            {/* Drop indicator */}
            {drop > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                style={{ paddingLeft: "12px", paddingBottom: "2px", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ ...preset.nano, color: textColor.error, letterSpacing: tracking.wide }}>
                  ↓ {drop}% {lang === "en" ? "drop" : "отток"}
                </span>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Before/After table ──────────────────────────���─────────────────────────────
function BeforeAfterTable({ rows, lang }: { rows: FullCaseStudy["results"]["beforeAfter"]; lang: "en" | "ru" }) {
  return (
    <div style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
      {/* Header */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        {[lang === "en" ? "Metric" : "Метрика", lang === "en" ? "Before" : "До", lang === "en" ? "After" : "После"].map((h, i) => (
          <div key={h} style={{ padding: "12px 20px", ...preset.nano, fontWeight: weight.medium, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, textAlign: i === 0 ? "left" : "center" }}>
            {h}
          </div>
        ))}
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            background: i % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent",
          }}
        >
          <div style={{ padding: "14px 20px", ...preset.small, color: textColor.secondary }}>
            {t(row.label, lang)}
          </div>
          <div style={{ padding: "14px 20px", ...preset.small, fontWeight: weight.medium, color: textColor.muted, textAlign: "center" }}>
            {row.before}
          </div>
          <div style={{ padding: "14px 20px", ...preset.small, fontWeight: weight.semibold, color: textColor.accent, textAlign: "center" }}>
            {row.after}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Concept card ──────────────────────────────────────────────────────────────
function ConceptCard({ concept, lang }: { concept: FullCaseStudy["exploration"]["concepts"][0]; lang: "en" | "ru" }) {
  return (
    <motion.div
      {...inView}
      style={{
        padding: "32px",
        borderRadius: "16px",
        border: `1px solid ${concept.chosen ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.07)"}`,
        background: concept.chosen ? "rgba(99,102,241,0.05)" : "rgba(255,255,255,0.015)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {concept.chosen && (
        <div style={{
          position: "absolute", top: "16px", right: "16px",
          ...preset.nano, fontWeight: weight.medium, color: textColor.accent,
          letterSpacing: tracking.wide, textTransform: "uppercase" as const,
          padding: "3px 10px", borderRadius: "20px",
          background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)",
        }}>
          {lang === "en" ? "Chosen" : "Выбрано"}
        </div>
      )}
      <p style={{ ...preset.h3, fontWeight: weight.semibold, color: textColor.primary, margin: "0 0 10px" }}>
        {t(concept.title, lang)}
      </p>
      <p style={{ ...preset.small, color: textColor.secondary, margin: "0 0 24px", lineHeight: leading.loose }}>
        {t(concept.description, lang)}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div style={{ padding: "12px 16px", background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "10px" }}>
          <div style={{ ...preset.nano, color: textColor.success, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "6px" }}>{lang === "en" ? "Pros" : "Плюсы"}</div>
          <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.normal }}>{t(concept.pros, lang)}</div>
        </div>
        <div style={{ padding: "12px 16px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "10px" }}>
          <div style={{ ...preset.nano, color: textColor.error, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "6px" }}>{lang === "en" ? "Cons" : "Минусы"}</div>
          <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.normal }}>{t(concept.cons, lang)}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ──────────────────────��───────────────────────���──────────────────────────────

export function CasePage() {
  const { slug }   = useParams<{ slug: string }>();
  const { lang }   = useOutletContext<OutletCtx>();

  const caseBase  = CASES.find((c) => c.slug === slug);
  const caseStudy = getCaseStudy(slug ?? "");

  // ── 404 ──────────────────────────────────────────────────────────────────
  if (!caseBase || !caseStudy) {
    return (
      <main style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", background: colors.bg, paddingTop: "80px" }}>
        <p style={{ ...preset.h2, color: textColor.muted }}>
          {lang === "en" ? "Case not found" : "Кейс не найден"}
        </p>
        <Link to="/#projects" style={{ ...preset.small, color: textColor.accent, textDecoration: "none" }}>
          ← {lang === "en" ? "Back to work" : "К проектам"}
        </Link>
      </main>
    );
  }

  const cs = caseStudy;
  const heroMockup = HERO_MOCKUPS[slug ?? ""];
  const hasAnalyticsMockup = slug === "analytics-dashboard";
  const hasHeroRight = !!heroMockup || hasAnalyticsMockup;
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <main style={{ background: colors.bg, minHeight: "100dvh", paddingTop: "80px" }}>
      <ReadingProgress />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <div style={{
        position: "relative",
        minHeight: "calc(100dvh - 80px)",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
        background: `radial-gradient(ellipse 100% 55% at 60% -5%, ${glow.medium} 0%, transparent 65%)`,
      }}>

        {/* Back link — absolutely positioned so it doesn't shift flex centering */}
        <div style={{ position: "absolute", top: "40px", left: 0, right: 0 }}>
          <div className="section-inner">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease }}>
              <Link
                to="/#projects"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", ...preset.small, fontWeight: weight.regular, color: textColor.muted, textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.secondary)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.muted)}
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                {lang === "en" ? "Selected Work" : "Избранные работы"}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="section-inner" style={{ width: "100%" }}>

          {/* Two-column when hero visual is present, single-column otherwise */}
          <div className={hasHeroRight ? "hero-grid" : undefined} style={{
            display: hasHeroRight ? "grid" : "block",
            gridTemplateColumns: hasHeroRight ? "1fr auto" : undefined,
            gap: hasHeroRight ? "80px" : undefined,
            alignItems: "center",
          }}>

            {/* ── Left: text content ── */}
            <div style={{ maxWidth: "560px" }}>
              {/* Industry tag */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05, ease }}
                style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "32px" }}
              >
                <span style={{ ...preset.micro, color: textColor.accent, padding: "4px 12px", borderRadius: "20px", background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.2)" }}>
                  {caseBase.industry[lang]}
                </span>

                {/* NDA disclaimer — shown for payment-flow only */}
                {slug === "payment-flow" && (
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    ...preset.nano, color: textColor.muted,
                    padding: "4px 10px", borderRadius: "20px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <Lock size={9} strokeWidth={1.8} style={{ flexShrink: 0 }} />
                    {lang === "en" ? "Brand identity changed due to NDA" : "Айдентика изменена в связи с NDA"}
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.09, ease }}
                style={{ ...preset.display, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 20px", letterSpacing: tracking.tight }}
              >
                {caseBase.title[lang]}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.14, ease }}
                style={{ ...preset.body, fontWeight: weight.light, color: textColor.secondary, margin: "0 0 40px", lineHeight: leading.loose }}
              >
                {caseBase.description[lang]}
              </motion.p>

              {/* Meta grid */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26, ease }}
                className="case-meta-grid"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", paddingBottom: "0" }}
              >
                {(["role", "team", "timeline", "tools"] as const).map((key) => {
                  const val = key === "tools" ? cs.meta.tools : t(cs.meta[key] as L10n, lang);
                  const labels: Record<string, { en: string; ru: string }> = {
                    role:     { en: "Role",     ru: "Роль"        },
                    team:     { en: "Team",     ru: "Команда"     },
                    timeline: { en: "Timeline", ru: "Сроки"       },
                    tools:    { en: "Tools",    ru: "Инструменты" },
                  };
                  return (
                    <div key={key} style={{ padding: "12px 16px 12px 0" }}>
                      <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "5px" }}>
                        {labels[key][lang]}
                      </div>
                      <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.snug }}>{val}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* ── Right: phone mockup (payment-flow) ── */}
            {heroMockup && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
                className="hero-mockup-col"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Phone frame */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: "256px",
                    borderRadius: "44px",
                    background: "#0d111c",
                    border: "10px solid #0d111c",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.55), 0 0 60px rgba(99,102,241,0.12)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Notch */}
                  <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: "88px", height: "24px",
                    background: "#0d111c",
                    borderRadius: "0 0 18px 18px",
                    zIndex: 10,
                  }} />
                  {/* Screen */}
                  {slug === "payment-flow" ? (
                    <HeroVideo fallback={heroMockup} />
                  ) : (
                    <img
                      src={heroMockup}
                      alt="UI mockup"
                      style={{ width: "100%", display: "block" }}
                    />
                  )}
                </motion.div>

                {/* Glow beneath phone */}
                <div style={{
                  position: "absolute",
                  bottom: "40px",
                  width: "200px",
                  height: "40px",
                  background: "rgba(99,102,241,0.2)",
                  filter: "blur(24px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }} />
              </motion.div>
            )}

            {/* ── Right: analytics dashboard browser mockup ── */}
            {hasAnalyticsMockup && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
                className="hero-mockup-col"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AnalyticsDashboardHeroMockup />
                </motion.div>

                {/* Glow beneath browser */}
                <div style={{
                  position: "absolute",
                  bottom: "40px",
                  width: "300px",
                  height: "40px",
                  background: "rgba(99,102,241,0.18)",
                  filter: "blur(32px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }} />
              </motion.div>
            )}

          </div>{/* end grid */}
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Section id="overview">
        <div className="section-inner">
          <SectionLabel num="01" label={lang === "en" ? "Overview" : "Обзор"} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}>
            {([
              { num: "01", title: { en: "Product",          ru: "Продукт"          }, text: cs.overview.product         },
              { num: "02", title: { en: "Problem",          ru: "Проблема"         }, text: cs.overview.problem         },
              { num: "03", title: { en: "Users",            ru: "Пользователи"     }, text: cs.overview.users           },
              { num: "04", title: { en: "Business Goals", ru: "Цели бизнеса" }, text: cs.overview.businessContext },
            ] as const).map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                style={{
                  padding: "28px 32px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span style={{ ...preset.nano, color: "rgba(99,102,241,0.5)", letterSpacing: tracking.wider }}>
                  {item.num}
                </span>
                <div style={{ ...preset.small, fontWeight: weight.semibold, color: textColor.primary }}>
                  {item.title[lang]}
                </div>
                <p style={{ ...preset.small, fontWeight: weight.light, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
                  {t(item.text, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            #overview > div > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* ── RESEARCH ─────────────────────────────────────────────────────── */}
      <Section id="research">
        <div className="section-inner">
          <SectionLabel num="02" label={lang === "en" ? "Research" : "Исследование"} />
          <motion.h2 {...inView} style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 48px", maxWidth: "640px" }}>
            {lang === "en" ? "Legacy UX and competitor analysis" : "Анализ legacy-UX и конкурентов"}
          </motion.h2>

          {/* ── Research methods ── */}
          {cs.research.summary ? (
            <motion.p {...inView} style={{ ...preset.body, fontWeight: weight.light, color: textColor.secondary, margin: "0 0 72px", lineHeight: leading.loose, maxWidth: "640px" }}>
              {t(cs.research.summary, lang)}
            </motion.p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", marginBottom: "72px" }}>
              {cs.research.methods.map((method, i) => (
                <motion.div key={i} {...inView} transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  style={{ padding: "24px 28px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.018)" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "8px" }}>
                    <p style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: 0, lineHeight: leading.snug }}>{t(method.name, lang)}</p>
                    <span style={{ ...preset.nano, color: textColor.accent, background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.2)", padding: "2px 8px", borderRadius: "20px", whiteSpace: "nowrap" as const, flexShrink: 0 }}>{method.stat}</span>
                  </div>
                  <p style={{ ...preset.small, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>{t(method.description, lang)}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* ── UI Analysis ── */}
          {cs.research.uiAnalysis && slug && UI_PINS[slug] && (
            <>
              {/* Label */}
              <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "28px" }}>
                {lang === "en" ? "Heuristic review — existing interface" : "Эвристический обзор — существующий интерфейс"}
              </div>

              {/* 2-column: screenshot + merged issue rows */}
              <div className="ui-audit-grid" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "48px", alignItems: "start", marginBottom: "72px" }}>

                {/* Left: annotated screenshot */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  style={{ position: "relative", width: "220px", flexShrink: 0 }}
                >
                  {/* Screenshot */}
                  <div style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                    position: "relative",
                  }}>
                    <img
                      src={oldPaymentUiImg}
                      alt={lang === "en" ? "Existing payment widget" : "Существующий платёжный виджет"}
                      style={{ width: "220px", display: "block" }}
                    />
                    {/* Subtle overlay to darken slightly for pin contrast */}
                    <div style={{ position: "absolute", inset: 0, background: "rgba(3,7,18,0.15)", borderRadius: "24px" }} />
                  </div>

                  {/* Label beneath */}
                  <div style={{ ...preset.nano, color: textColor.muted, textAlign: "center", marginTop: "10px", letterSpacing: tracking.wide }}>
                    {lang === "en" ? "Before" : "До"}
                  </div>

                  {/* Annotation pins */}
                  {UI_PINS[slug].map((pin, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredPin(i)}
                      onMouseLeave={() => setHoveredPin(null)}
                      style={{
                        position: "absolute",
                        left: pin.x,
                        top: pin.y,
                        transform: hoveredPin === i
                          ? "translate(-50%, -50%) scale(1.25)"
                          : "translate(-50%, -50%)",
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: hoveredPin === i ? "#6366f1" : "#4f46e5",
                        border: "2px solid rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: hoveredPin === i
                          ? "0 2px 12px rgba(0,0,0,0.6), 0 0 0 4px rgba(99,102,241,0.45), 0 0 20px rgba(99,102,241,0.5)"
                          : "0 2px 8px rgba(0,0,0,0.5), 0 0 0 3px rgba(79,70,229,0.3)",
                        zIndex: 10,
                        cursor: "pointer",
                        transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
                      }}
                    >
                      <span style={{ ...preset.nano, fontWeight: weight.semibold, color: "#fff", lineHeight: 1, fontSize: "10px" }}>
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Right: merged issue rows */}
                <div style={{ display: "flex", flexDirection: "column", margin: "0 -8px" }}>
                  {cs.research.uiAnalysis.issues.slice(0, UI_PINS[slug].length).map((issue, i) => (
                    <motion.div
                      key={issue.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07, ease }}
                      onMouseEnter={() => setHoveredPin(i)}
                      onMouseLeave={() => setHoveredPin(null)}
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        padding: "16px 8px",
                        display: "grid",
                        gridTemplateColumns: "28px 1fr",
                        columnGap: "12px",
                        background: hoveredPin === i ? "rgba(99,102,241,0.05)" : "transparent",
                        boxShadow: hoveredPin === i ? "inset 2px 0 0 rgba(99,102,241,0.55)" : "inset 2px 0 0 transparent",
                        borderRadius: "6px",
                        cursor: "default",
                        transition: "background 0.18s ease, box-shadow 0.18s ease",
                      }}
                    >
                      {/* Number */}
                      <div style={{ paddingTop: "2px" }}>
                        <div style={{
                          width: "22px", height: "22px", borderRadius: "50%",
                          background: hoveredPin === i ? "rgba(99,102,241,0.3)" : "rgba(79,70,229,0.15)",
                          border: hoveredPin === i ? "1px solid rgba(99,102,241,0.6)" : "1px solid rgba(79,70,229,0.35)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          transition: "background 0.18s ease, border-color 0.18s ease",
                        }}>
                          <span style={{ fontSize: "10px", fontWeight: weight.semibold, color: textColor.accent, lineHeight: 1 }}>
                            {issue.id}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        {/* Title */}
                        <span style={{ ...preset.small, fontWeight: weight.semibold, color: textColor.primary, display: "block", marginBottom: "10px" }}>
                          {t(issue.title, lang)}
                        </span>
                        {/* Insight + Decision — выровненная сетка */}
                        <div style={{ display: "grid", gridTemplateColumns: "58px 1fr", rowGap: "4px", columnGap: "12px" }}>
                          <span style={{ ...preset.nano, color: "rgba(99,102,241,0.6)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, paddingTop: "2px" }}>
                            {lang === "en" ? "Insight" : "Инсайт"}
                          </span>
                          <span style={{ ...preset.small, color: textColor.secondary, fontStyle: "italic" }}>
                            {t(issue.insight, lang)}
                          </span>
                          <span style={{ ...preset.nano, color: "rgba(74,222,128,0.6)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, paddingTop: "2px" }}>
                            {lang === "en" ? "Decision" : "Решение"}
                          </span>
                          <span style={{ ...preset.small, color: textColor.secondary }}>
                            {t(issue.decision, lang)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>
            </>
          )}

          {/* ── Competitive Analysis ── */}
          {cs.research.competitiveAnalysis && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "72px", paddingTop: "72px" }}>
              <motion.div {...inView} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                  <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                    {lang === "en" ? "Competitive Analysis" : "Анализ конкурентов"}
                  </div>
                  <span style={{ ...preset.nano, color: textColor.accent, background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.2)", padding: "3px 12px", borderRadius: "20px" }}>
                    {t(cs.research.competitiveAnalysis.stat, lang)}
                  </span>
                </div>
                <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose, maxWidth: "520px" }}>
                  {slug === "analytics-dashboard"
                    ? (lang === "en"
                        ? "I analysed 50+ Russian and international media sites, mapping content layout patterns, navigation approaches, visual hierarchy, and how each adapted to mobile-first reading. I also researched colour psychology across 30+ global brands to ground the accent palette decision."
                        : "Проанализировал более 50 российских и зарубежных медиасайтов: компоновка контента, паттерны навигации, визуальная иерархия и адаптация к мобильному потреблению. Отдельно изучил цветовую психологию на базе 30+ мировых брендов для обоснования выбора акцентной палитры.")
                    : (lang === "en"
                        ? "I went through deposit and checkout flows across 8 competitor products, mapping screen-by-screen where each one handled the same friction points I had identified."
                        : "Я прошёл флоу депозита и чекаута у 8 конкурентов - поэкранно фиксировал, как каждый из них справляется с теми же точками трения, которые я выявил.")}
                </p>
              </motion.div>

              {/* Main competitor cards — 3 columns */}
              <div className="comp-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
                {cs.research.competitiveAnalysis.competitors.slice(0, 3).map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease }}
                    style={{
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.018)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Screenshot */}
                    <div style={{ position: "relative", height: "148px", overflow: "hidden", background: "rgba(255,255,255,0.03)" }}>
                      <img
                        src={resolveCompetitorImg(c.image) || competitorScreenImg}
                        alt={c.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "brightness(0.72) saturate(0.85)" }}
                      />
                      <div style={{
                        position: "absolute", top: "12px", left: "14px",
                        ...preset.nano, fontWeight: weight.semibold, color: "#fff",
                        background: "rgba(3,7,18,0.72)",
                        backdropFilter: "blur(8px)",
                        padding: "4px 10px", borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        letterSpacing: tracking.wide,
                      }}>
                        {c.name}
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div>
                        <span style={{ ...preset.nano, color: "rgba(99,102,241,0.6)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, display: "block", marginBottom: "4px" }}>
                          {lang === "en" ? "Insight" : "Инсайт"}
                        </span>
                        <span style={{ ...preset.small, color: textColor.secondary, fontStyle: "italic", lineHeight: leading.loose }}>
                          {t(c.observation, lang)}
                        </span>
                      </div>
                      <div>
                        <span style={{ ...preset.nano, color: "rgba(74,222,128,0.6)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, display: "block", marginBottom: "4px" }}>
                          {lang === "en" ? "Decision" : "Решение"}
                        </span>
                        <span style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.loose }}>
                          {t(c.takeaway, lang)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Volume strip — conveys "many more screens were analysed" */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        flexShrink: 0,
                        width: "80px",
                        height: "56px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        opacity: Math.max(0.04, 0.32 - i * 0.03),
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: `rgba(255,255,255,${0.03 + (i % 3) * 0.015})`,
                      }}
                    />
                  ))}
                </div>
                {/* Right fade */}
                <div style={{
                  position: "absolute", top: 0, right: 0, bottom: 0, width: "220px",
                  background: "linear-gradient(to right, transparent, #030712)",
                  pointerEvents: "none",
                  display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "16px",
                }}>
                  <span style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wide }}>
                    {lang === "en" ? "+ 36 more screens" : "+ ещё 36 экранов"}
                  </span>
                </div>
              </motion.div>
            </div>
          )}



          {/* UI Analysis — card layout (when uiAnalysis exists but no pin overlay) */}
          {cs.research.uiAnalysis && !(slug && UI_PINS[slug]) && (
            <div style={{ marginBottom: "72px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
                <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                  {lang === "en" ? "Heuristic review — existing interface" : "Эвристический обзор — существующий интерфейс"}
                </div>
                {cs.research.uiAnalysis.totalIssues && (
                  <span style={{ ...preset.nano, color: textColor.accent, background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.2)", padding: "3px 12px", borderRadius: "20px" }}>
                    {cs.research.uiAnalysis.totalIssues} {lang === "en" ? "issues identified" : "проблемы выявлено"}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {cs.research.uiAnalysis.issues.map((issue, i) => (
                  <motion.div key={issue.id}
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    style={{ display: "grid", gridTemplateColumns: "28px 1fr", columnGap: "16px", alignItems: "start", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}
                  >
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(79,70,229,0.15)", border: "1px solid rgba(79,70,229,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3px", flexShrink: 0 }}>
                      <span style={{ fontSize: "10px", fontWeight: weight.semibold, color: textColor.accent, lineHeight: 1 }}>{issue.id}</span>
                    </div>
                    <div>
                      <p style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 6px", lineHeight: leading.snug }}>{t(issue.title, lang)}</p>
                      <p style={{ ...preset.small, color: textColor.secondary, margin: "0 0 14px", lineHeight: leading.loose }}>{t(issue.description, lang)}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", borderLeft: "2px solid rgba(255,255,255,0.08)" }}>
                          <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "4px" }}>{lang === "en" ? "Insight" : "Инсайт"}</div>
                          <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.normal }}>{t(issue.insight, lang)}</div>
                        </div>
                        <div style={{ padding: "10px 14px", background: "rgba(99,102,241,0.04)", borderRadius: "8px", borderLeft: "2px solid rgba(99,102,241,0.25)" }}>
                          <div style={{ ...preset.nano, color: "rgba(99,102,241,0.6)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "4px" }}>{lang === "en" ? "Decision" : "Решение"}</div>
                          <div style={{ ...preset.small, color: textColor.secondary, lineHeight: leading.normal }}>{t(issue.decision, lang)}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Mobile responsive */}
        <style>{`
          @media (max-width: 768px) {
            #research .ui-audit-grid { grid-template-columns: 1fr !important; }
            #research .insight-decision-grid { grid-template-columns: 1fr !important; }
            #research .comp-cards-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            #research .comp-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </Section>

      {/* ── ANALYTICS-DASHBOARD: visual showcase sections ───────────────── */}
      {slug === "analytics-dashboard" && (
        <>
          {/* Wireframe */}
          <Section id="wireframe">
            <div className="section-inner">
              <SectionLabel num="03" label={lang === "en" ? "Wireframe" : "Вайрфрейм"} />
              <div className="wireframe-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "56px", alignItems: "start" }}>
                <motion.div {...inView} style={{ position: "sticky", top: "100px" }}>
                  <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 20px" }}>
                    {lang === "en" ? "From insights to structure" : "От инсайтов к структуре"}
                  </h2>
                  <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
                    {lang === "en"
                      ? "Based on the competitive analysis of 50+ media sites, I built a detailed wireframe covering the key screens and user flows. The structure reflects the navigation patterns, content hierarchy and layout decisions I identified during research."
                      : "На основе анализа конкурентов из 50+ медиасайтов я составил детализированный вайрфрейм, охватывающий ключевые экраны и пользовательские флоу. Структура отражает паттерны навигации, контентную иерархию и компоновочные решения, выявленные в ходе исследования."}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  className="wireframe-img-wrap"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                    maxHeight: "560px",
                  }}
                >
                  <img
                    src={vedWireframeImg}
                    alt={lang === "en" ? "Wireframe" : "Вайрфрейм"}
                    style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", maxHeight: "560px" }}
                  />
                </motion.div>
              </div>
            </div>
            <style>{`
              @media(max-width:768px){
                #wireframe .wireframe-two-col{grid-template-columns:1fr!important;gap:32px!important}
                #wireframe .wireframe-img-wrap{max-height:280px!important}
                #wireframe .wireframe-img-wrap img{max-height:280px!important}
              }
            `}</style>
          </Section>

          {/* Timeline */}
          <Section id="ved-timeline">
            <div className="section-inner">
              <SectionLabel num="04" label={lang === "en" ? "Timeline" : "Таймлайн"} />

              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "start", marginBottom: "56px" }}>
                <motion.div {...inView}>
                  <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 16px" }}>
                    {lang === "en" ? "2 months, end to end" : "2 месяца от нуля до запуска"}
                  </h2>
                  <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose, maxWidth: "520px" }}>
                    {lang === "en"
                      ? "8 sequential phases, strict deadline. Research and wireframe first, then an investor-ready prototype, followed by iterative design and development of each content section."
                      : "8 последовательных фаз, жёсткий дедлайн. Сначала исследование и вайрфрейм, затем прототип для инвесторов, потом итеративный дизайн и разработка каждого раздела."}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", textAlign: "center", flexShrink: 0 }}
                >
                  <div style={{ ...preset.display, fontWeight: weight.light, color: textColor.primary, lineHeight: 1 }}>2</div>
                  <div style={{ ...preset.small, color: textColor.muted, marginTop: "6px" }}>
                    {lang === "en" ? "months" : "месяца"}
                  </div>
                  <div style={{ width: "28px", height: "1px", background: "rgba(255,255,255,0.12)", margin: "14px auto" }} />
                  <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                    {lang === "en" ? "8 phases" : "8 фаз"}
                  </div>
                </motion.div>
              </div>

              {/* Gantt bar */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                style={{ marginBottom: "40px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                    {lang === "en" ? "Month 1" : "Месяц 1"}
                  </span>
                  <span style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                    {lang === "en" ? "Month 2" : "Месяц 2"}
                  </span>
                  <span style={{ ...preset.nano, color: "#F97316", letterSpacing: tracking.wider, textTransform: "uppercase" as const }}>
                    {lang === "en" ? "Launch" : "Запуск"}
                  </span>
                </div>
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", height: "10px", borderRadius: "8px", overflow: "hidden", gap: "3px" }}>
                    {VED_TIMELINE.map(p => (
                      <div key={p.num} style={{ flex: p.days, background: p.color }} />
                    ))}
                  </div>
                  <div style={{ position: "absolute", top: "-4px", left: "50%", transform: "translateX(-50%)", width: "1px", height: "18px", background: "rgba(255,255,255,0.18)" }} />
                </div>
              </motion.div>

              {/* Phase cards */}
              <div className="timeline-phase-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
                {VED_TIMELINE.map((phase, i) => (
                  <motion.div
                    key={phase.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                    style={{
                      padding: "20px",
                      background: `${phase.color}0d`,
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderTop: `2px solid ${phase.color}`,
                      borderRadius: "14px",
                    }}
                  >
                    <div style={{ ...preset.nano, color: phase.color, letterSpacing: tracking.wider, marginBottom: "10px" }}>{phase.num}</div>
                    <div style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 12px", lineHeight: leading.snug }}>
                      {lang === "en" ? phase.en : phase.ru}
                    </div>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      background: `${phase.color}22`,
                      border: `1px solid ${phase.color}44`,
                    }}>
                      <span style={{ ...preset.nano, color: phase.color, letterSpacing: tracking.wide }}>
                        {lang === "en" ? phase.durEn : phase.durRu}
                      </span>
                    </div>
                    {phase.noteEn && (
                      <div style={{ ...preset.nano, color: textColor.muted, lineHeight: leading.loose, marginTop: "12px", fontStyle: "italic" }}>
                        {lang === "en" ? phase.noteEn : phase.noteRu}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <style>{`
              @media(max-width:1024px){ #ved-timeline .timeline-phase-grid { grid-template-columns: repeat(4, 1fr) !important; } }
              @media(max-width:900px){  #ved-timeline .timeline-phase-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media(max-width:480px){  #ved-timeline .timeline-phase-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; } }
            `}</style>
          </Section>

          {/* Final Design showcases */}
          <Section id="analytics-dashboard-design">
            <AnalyticsDashboardSection lang={lang} ease={ease} />
          </Section>
          <Section id="analytics-kpi">
            <AnalyticsKPISection lang={lang} ease={ease} />
          </Section>
          <Section id="analytics-filters">
            <AnalyticsFiltersSection lang={lang} ease={ease} />
          </Section>
          <Section id="analytics-states">
            <AnalyticsStateSection lang={lang} ease={ease} />
          </Section>
          <Section id="analytics-admin">
            <AnalyticsAdminSection lang={lang} ease={ease} />
          </Section>

          {/* Ideation */}
          <Section id="ideation">
            <div className="section-inner">
              <SectionLabel num="05" label={lang === "en" ? "Ideation" : "Идеация"} />
              <motion.div {...inView} style={{ marginBottom: "56px", paddingBottom: "56px", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
                <div style={{ ...preset.nano, color: "rgba(99,102,241,0.55)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "16px" }}>How Might We</div>
                <p style={{ ...preset.h2, fontWeight: weight.light, color: textColor.primary, margin: 0, maxWidth: "760px", fontStyle: "italic", lineHeight: leading.loose }}>
                  "{t(cs.hmw, lang)}"
                </p>
              </motion.div>
              <motion.p {...inView} style={{ ...preset.body, color: textColor.secondary, margin: "0 0 40px", lineHeight: leading.loose, maxWidth: "640px" }}>
                {t(cs.exploration.description, lang)}
              </motion.p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {cs.exploration.concepts.map((concept, i) => (
                  <ConceptCard key={i} concept={concept} lang={lang} />
                ))}
              </div>
            </div>
          </Section>

          {/* Solution */}
          <Section id="solution">
            <div className="section-inner">
              <SectionLabel num="06" label={lang === "en" ? "Solution" : "Решение"} />
              <div className="solution-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>
                <motion.div {...inView}>
                  <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 20px" }}>
                    {lang === "en" ? "Design decisions" : "Дизайн-решени��"}
                  </h2>
                  <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
                    {t(cs.solution.description, lang)}
                  </p>
                </motion.div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {cs.solution.decisions.map((d, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease }}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "22px 0 22px 20px", borderLeft: "2px solid rgba(99,102,241,0.25)" }}
                    >
                      <p style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 8px" }}>{t(d.title, lang)}</p>
                      <p style={{ ...preset.small, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>{t(d.rationale, lang)}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <style>{`@media(max-width:768px){#solution .solution-two-col{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
          </Section>
        </>
      )}

      {/* ── PAYMENT-FLOW: visual showcase sections ────────────────────────── */}
      {slug === "payment-flow" && (
        <>
          <Section id="exploration">
            <ExplorationSection lang={lang} ease={ease} inView={inView} />
          </Section>

          <Section id="final-design">
            <FinalDesignSection lang={lang} ease={ease} />
          </Section>

          <Section id="amount-input">
            <AmountInputSection lang={lang} ease={ease} />
          </Section>

          <Section id="crypto-deposit">
            <CryptoDepositSection lang={lang} ease={ease} />
          </Section>

          <Section id="deposit-status">
            <DepositStatusSection lang={lang} ease={ease} />
          </Section>

          <Section id="admin-panel">
            <AdminPanelSection lang={lang} ease={ease} />
          </Section>
        </>
      )}

      {/* ── GENERIC: Goals + Funnel → Ideation → Solution ────────────────── */}
      {slug !== "payment-flow" && slug !== "analytics-dashboard" && (
        <>
          {/* ── GOALS & PROBLEM FUNNEL ─────────────────────────────────── */}
          <Section id="goals">
            <div className="section-inner">
              <SectionLabel num="03" label={lang === "en" ? "Goals" : "Цели"} />
              <div className="goals-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>

                {/* Left: numbered goals list */}
                <motion.div {...inView}>
                  <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 32px", maxWidth: "420px" }}>
                    {lang === "en" ? "What we set out to achieve" : "Что мы хотели достичь"}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {cs.goals.map((goal, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease }}
                        style={{ display: "grid", gridTemplateColumns: "28px 1fr", columnGap: "16px", alignItems: "start", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "18px 0" }}
                      >
                        <span style={{ ...preset.nano, fontWeight: weight.light, color: textColor.accent, opacity: 0.5, paddingTop: "3px" }}>{"0" + (i + 1)}</span>
                        <div>
                          <p style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 4px", lineHeight: leading.snug }}>{t(goal.title, lang)}</p>
                          <p style={{ ...preset.nano, color: textColor.muted, margin: 0, letterSpacing: tracking.wide }}>{t(goal.metric, lang)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: drop-off funnel */}
                <motion.div {...inView}>
                  <div style={{ ...preset.nano, color: textColor.muted, letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "24px" }}>
                    {lang === "en" ? "User drop-off funnel" : "Воронка оттока пользователей"}
                  </div>
                  <FunnelChart steps={cs.problem.funnel} lang={lang} />
                </motion.div>
              </div>
            </div>
            <style>{`
              @media (max-width: 768px) {
                #goals .goals-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
              }
            `}</style>
          </Section>

          {/* ── IDEATION ─────────────────────────────────────────────── */}
          <Section id="ideation">
            <div className="section-inner">
              <SectionLabel num="05" label={lang === "en" ? "Ideation" : "Идеация"} />

              {/* HMW pull quote */}
              <motion.div {...inView} style={{ marginBottom: "56px", paddingBottom: "56px", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
                <div style={{ ...preset.nano, color: "rgba(99,102,241,0.55)", letterSpacing: tracking.wider, textTransform: "uppercase" as const, marginBottom: "16px" }}>
                  How Might We
                </div>
                <p style={{ ...preset.h2, fontWeight: weight.light, color: textColor.primary, margin: 0, maxWidth: "760px", fontStyle: "italic", lineHeight: leading.loose }}>
                  "{t(cs.hmw, lang)}"
                </p>
              </motion.div>

              {/* Exploration description */}
              <motion.p {...inView} style={{ ...preset.body, color: textColor.secondary, margin: "0 0 40px", lineHeight: leading.loose, maxWidth: "640px" }}>
                {t(cs.exploration.description, lang)}
              </motion.p>

              {/* Concept cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {cs.exploration.concepts.map((concept, i) => (
                  <ConceptCard key={i} concept={concept} lang={lang} />
                ))}
              </div>
            </div>
          </Section>

          {/* ── SOLUTION ─────────────────────────────────────────────── */}
          <Section id="solution">
            <div className="section-inner">
              <SectionLabel num="06" label={lang === "en" ? "Solution" : "Решение"} />
              <div className="solution-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>

                {/* Left: description */}
                <motion.div {...inView}>
                  <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 20px" }}>
                    {lang === "en" ? "Design decisions" : "Дизайн-решения"}
                  </h2>
                  <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
                    {t(cs.solution.description, lang)}
                  </p>
                </motion.div>

                {/* Right: decision rows */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {cs.solution.decisions.map((d, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease }}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "22px 0 22px 20px", borderLeft: "2px solid rgba(99,102,241,0.25)" }}
                    >
                      <p style={{ ...preset.small, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 8px" }}>{t(d.title, lang)}</p>
                      <p style={{ ...preset.small, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>{t(d.rationale, lang)}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 768px) {
                #solution .solution-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
              }
            `}</style>
          </Section>
        </>
      )}

      {/* ── TESTING ──────────────────────────────────────────────────────── */}
      <Section id="testing">
        <div className="section-inner">
          <SectionLabel num="07" label={lang === "en" ? "Testing" : "Тестирование"} />
          <motion.div {...inView} style={{ maxWidth: "640px" }}>
            <h2 style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 20px" }}>
              {lang === "en" ? "Testing" : "Тестирование"}
            </h2>
            <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
              {t(cs.testing.description, lang)}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ── RESULTS ───────────────���──────────────────────────────────────── */}
      <Section id="results" glow="rgba(74,222,128,0.04)">
        <div className="section-inner">
          <SectionLabel num="08" label={lang === "en" ? "Results & Impact" : "Результаты и эффект"} />
          <motion.h2 {...inView} style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 48px", maxWidth: "600px" }}>
            {t(cs.results.businessImpact, lang)}
          </motion.h2>

          {/* Metrics — same visual pattern as Hero section */}
          <motion.div
            {...inView}
            style={{ display: "flex", flexWrap: "wrap", gap: "0", marginBottom: "40px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", overflow: "hidden" }}
          >
            {cs.results.metrics.map((m, i) => (
              <div key={i} style={{ flex: "1 1 0", minWidth: "120px", padding: "14px 18px", borderRight: i < cs.results.metrics.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none", background: "rgba(255,255,255,0.018)" }}>
                <div style={{ ...preset.h3, fontWeight: weight.semibold, color: textColor.accent, lineHeight: 1, marginBottom: "4px" }}>{m.value}</div>
                <div style={{ ...preset.nano, fontWeight: weight.regular, color: textColor.muted, letterSpacing: tracking.wide }}>{t(m.label, lang)}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </Section>

      {/* ── LEARNINGS ───────────────────────────────────────���────────────── */}
      <Section id="learnings">
        <div className="section-inner">
          <SectionLabel num="09" label={lang === "en" ? "Learnings" : "Выводы"} />
          <motion.h2 {...inView} style={{ ...preset.h1, fontWeight: weight.medium, color: textColor.primary, margin: "0 0 40px", maxWidth: "560px" }}>
            {lang === "en" ? "What this project taught me" : "Чему научил этот проект"}
          </motion.h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: "720px" }}>
            {cs.learnings.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease }}
                style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "0 24px", alignItems: "baseline", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 0" }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(36px, 4vw, 48px)", fontWeight: weight.light, color: "rgba(99,102,241,0.15)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ ...preset.body, color: textColor.secondary, margin: 0, lineHeight: leading.loose }}>
                  {t(l, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── BACK NAV ──────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)", padding: "28px 0 0" }}>
        <div className="section-inner">
          <Link
            to="/#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", ...preset.small, color: textColor.muted, textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.secondary)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = textColor.muted)}
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            {lang === "en" ? "Back to all work" : "Все проекты"}
          </Link>
        </div>
      </div>

      <ContactSection lang={lang} />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          /* Hero: stack phone below text */
          .hero-grid { display: block !important; }
          .hero-mockup-col { position: static !important; padding-bottom: 48px !important; padding-top: 0 !important; }

          /* Two-column section layouts */
          #overview > div > div,
          #testing  > div > div  {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          #research > div > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}