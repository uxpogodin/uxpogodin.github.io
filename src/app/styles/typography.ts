/**
 * Typography scale
 * Используется во всех секциях сайта.
 * Базовая единица — 4px.
 *
 * display   → hero-заголовок
 * h1        → заголовок секции (Projects, About…)
 * h2        → подзаголовок / название кейса
 * h3        → карточки, лейблы внутри кейса
 * body      → основной текст параграфов
 * small     → подписи, мета-информация
 * micro     → теги, капшены, кнопки
 * nano      → очень мелкие лейблы (nav switcher)
 * emailCta  → крупный email-CTA
 */

export const type = {
  display:  "clamp(30px, 3.8vw, 48px)",
  h1:       "clamp(24px, 2.6vw, 36px)",
  h2:       "clamp(19px, 2vw,   28px)",
  h3:       "clamp(15px, 1.4vw, 20px)",
  body:     "16px",
  small:    "14px",
  micro:    "12px",
  nano:     "11px",
  emailCta: "clamp(28px, 4vw, 52px)",
} as const;

export const weight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
} as const;

export const leading = {
  tight:  1.1,
  snug:   1.25,
  normal: 1.5,
  loose:  1.7,
} as const;

export const tracking = {
  tight:  "-0.025em",
  normal: "-0.01em",
  wide:   "0.02em",
  wider:  "0.05em",
} as const;

/**
 * Цветовая палитра текста.
 * Никогда не используем чистый #ffffff — только эти значения.
 *
 * primary      → заголовки, важный текст
 * secondary    → параграфы, описания
 * muted        → мета, подписи, плейсхолдеры
 * accent       → акцентный цвет (Product Designer и т.п.)
 * accentLight  → акцент при hover
 * onAccent     → тёмный текст поверх акцентного фона (CTA-кнопка)
 * success      → позитивное состояние (скопировано и т.п.)
 * error        → негативное состояние (ошибка и т.п.)
 */
export const textColor = {
  primary:     "#F1F5F9",
  secondary:   "#94A3B8",
  muted:       "#6E7F94",   // was #475569 — raised from 2.67:1 to 4.91:1 on #030712
  accent:      "#818cf8",
  accentLight: "#a5b4fc",
  onAccent:    "#030712",
  success:     "#4ade80",
  error:       "#f87171",
} as const;

/**
 * Фоновые цвета.
 *
 * bg        → основной фон страницы
 * bgAlpha85 → полупрозрачный фон (header backdrop)
 * bgAlpha96 → тёмный overlay (fullscreen menu)
 */
export const colors = {
  bg:        "#030712",
  bgAlpha85: "rgba(3,7,18,0.85)",
  bgAlpha96: "rgba(3,7,18,0.96)",
} as const;

/**
 * Ambient glow system — единый холодный индиго-язык (#6366f1).
 *
 * strong  → hero (самый заметный, один на всей странице)
 * medium  → process, contact (мягкий фон)
 * subtle  → cases, about (почти невидимый, только ощущение)
 * none    → tools (чистый тёмный, без помех для иконок)
 * divider → разделитель секций
 * loader  → прогресс-бар загрузчика
 */
export const glow = {
  strong:  "rgba(99, 102, 241, 0.11)",
  medium:  "rgba(99, 102, 241, 0.08)",
  subtle:  "rgba(99, 102, 241, 0.06)",
  divider: "rgba(99, 102, 241, 0.22)",
  loader:  "rgba(99, 102, 241, 0.65)",
} as const;

/**
 * Акцентная CTA-кнопка (See my work / Telegram в акцентном состоянии).
 * Единый токен для градиента и теней — не дублируем в компонентах.
 */
export const ctaButton = {
  gradient:    "linear-gradient(135deg, #4338ca 0%, #5254e0 45%, #5a5de8 100%)", // end darkened: 4.64:1 with #F1F5F9
  shadow:      "0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
  shadowHover: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.22)",
} as const;

/** Готовые пресеты — просто spread в style={} */
export const preset = {
  display: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.display,
    fontWeight: weight.medium,
    lineHeight: leading.tight,
    letterSpacing: tracking.tight,
  },
  h1: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.h1,
    fontWeight: weight.medium,
    lineHeight: leading.snug,
    letterSpacing: tracking.tight,
  },
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.h2,
    fontWeight: weight.medium,
    lineHeight: leading.snug,
    letterSpacing: tracking.normal,
  },
  h3: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.h3,
    fontWeight: weight.medium,
    lineHeight: leading.normal,
    letterSpacing: tracking.normal,
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.body,
    fontWeight: weight.regular,
    lineHeight: leading.normal,
    letterSpacing: tracking.normal,
  },
  small: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.small,
    fontWeight: weight.regular,
    lineHeight: leading.normal,
    letterSpacing: tracking.normal,
  },
  micro: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.micro,
    fontWeight: weight.regular,
    lineHeight: leading.normal,
    letterSpacing: tracking.wide,
  },
  nano: {
    fontFamily: "'Inter', sans-serif",
    fontSize:   type.nano,
    fontWeight: weight.regular,
    lineHeight: leading.normal,
    letterSpacing: tracking.wider,
  },
} as const;
