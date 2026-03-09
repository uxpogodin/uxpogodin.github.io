import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { colors } from "../styles/typography";

interface PageLoaderProps {
  onDone: () => void;
}

export function PageLoader({ onDone }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setTimeout(() => setVisible(false), 80);

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      const fallback = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(fallback);
    }
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: colors.bg,
          }}
        />
      )}
    </AnimatePresence>
  );
}
