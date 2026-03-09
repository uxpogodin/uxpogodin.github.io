import { motion } from "motion/react";
import { glow } from "../styles/typography";

/**
 * Full-viewport-width 1px separator with a centred indigo radial glow.
 * Animates in from the centre as the user scrolls to it.
 */
export function SectionDivider() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scaleX: 0.3 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "100%",
        height: "1px",
        background:
          `radial-gradient(ellipse 55% 100% at 50% 50%, ${glow.divider} 0%, transparent 100%)`,
        transformOrigin: "center",
        flexShrink: 0,
      }}
    />
  );
}