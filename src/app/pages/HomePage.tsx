import { useEffect } from "react";
import { useOutletContext, useLocation } from "react-router";
import { HeroSection }    from "../components/HeroSection";
import { CasesSection }   from "../components/CasesSection";
import { ProcessSection } from "../components/ProcessSection";
import { ToolsSection }   from "../components/ToolsSection";
import { AboutSection }   from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { SectionDivider } from "../components/SectionDivider";
import type { OutletCtx } from "../components/RootLayout";

export function HomePage() {
  const { lang, scrollTo } = useOutletContext<OutletCtx>();
  const location = useLocation();

  // When navigating here from another page via /#anchor, scroll to that section
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const t = setTimeout(() => scrollTo(hash), 120);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeroSection lang={lang} />
      <SectionDivider />
      <CasesSection   lang={lang} />
      <SectionDivider />
      <ProcessSection lang={lang} />
      <SectionDivider />
      <ToolsSection   lang={lang} />
      <SectionDivider />
      <AboutSection   lang={lang} />
      <SectionDivider />
      <ContactSection lang={lang} />
    </>
  );
}
