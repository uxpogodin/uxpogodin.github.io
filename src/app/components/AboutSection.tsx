import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { preset, weight, leading, tracking, textColor, glow, colors } from "../styles/typography";
import photo1 from "figma:asset/7222000094ab500bae9c7a812615cbe501511b48.png";
import photo2 from "figma:asset/aa070de0ffe9475f82945ec81458ca76863fabba.png";
import photo3 from "figma:asset/823baa981ae440b53439b1b3aca31f99a2c89746.png";

const CONTENT = {
  en: {
    label: "About",
    heading: "Designer by craft,\nexplorer at heart.",
    paragraphs: [
      "Product designer with six years of experience. I turn complex problems into interfaces that feel simple.",
      "Outside of work I climb mountains. Climbing teaches the same things as design: patience, clear thinking under pressure and knowing when to turn back.",
    ],
  },
  ru: {
    label: "О себе",
    heading: "Дизайнер по\nпрофессии. Исследователь\nпо духу.",
    paragraphs: [
      "Я продуктовый дизайнер, уже шесть лет работаю с цифровыми продуктами. Мне нравится разбирать сложные задачи и делать интерфейсы, которые кажутся очевидными.",
      "Вне работы хожу в горы. Альпинизм учит терпению, спокойствию под давлением и умению вовремя повернуть назад.",
    ],
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutSection({ lang }: { lang: "en" | "ru" }) {
  const t = CONTENT[lang];

  return (
    <section
      id="about"
      style={{ background: `radial-gradient(ellipse 80% 65% at -5% 15%, ${glow.subtle} 0%, transparent 52%), ${colors.bg}`, padding: "100px 0 120px", overflow: "hidden" }}
    >
      <div className="section-inner">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "56px" }}
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

        {/* Main grid */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >

          {/* ── Left: Text ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              style={{
                ...preset.h1,
                fontWeight: weight.medium,
                color: textColor.primary,
                whiteSpace: "pre-line",
                margin: "0 0 32px",
              }}
            >
              {t.heading}
            </motion.h2>

            {t.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease }}
                style={{
                  ...preset.body,
                  color: textColor.secondary,
                  margin: i === 0 ? "0 0 20px" : "0",
                  lineHeight: leading.loose,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* ── Right: Bento Photos ── */}
          <div
            className="about-photos"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gridTemplateRows: "230px 190px",
              gap: "10px",
            }}
          >
            <BentoPhoto
              src={photo2} alt="Elbrus summit"
              col="1" row="1"
              objectPosition="center top"
              delay={0.08}
            />
            <BentoPhoto
              src={photo1} alt="Himalayas trail"
              col="2" row="1 / 3"
              objectPosition="center center"
              delay={0.04}
            />
            <BentoPhoto
              src={photo3} alt="Billiards"
              col="1" row="2"
              objectPosition="center 30%"
              delay={0.16}
            />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-photos {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 180px 180px !important;
          }
          .about-photos > *:nth-child(2) {
            grid-column: 2 !important;
            grid-row: 1 / 3 !important;
          }
          .about-photos > *:nth-child(3) {
            grid-column: 1 !important;
            grid-row: 2 !important;
          }
        }
        @media (max-width: 480px) {
          .about-photos {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 140px 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Bento photo cell ──────────────────────────────────────────────────────────

function BentoPhoto({
  src, alt, col, row, objectPosition, delay,
}: {
  src: string;
  alt: string;
  col: string;
  row: string;
  objectPosition: string;
  delay: number;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), springConfig);
  const scale = useSpring(1, { stiffness: 250, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    scale.set(1.04);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease }}
      style={{ gridColumn: col, gridRow: row, perspective: "800px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          cursor: "default",
          willChange: "transform",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            display: "block",
          }}
        />
      </motion.div>
    </motion.div>
  );
}