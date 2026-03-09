export interface Metric {
  value: string;
  label: { en: string; ru: string };
}

export interface CaseData {
  id: number;
  slug: string;
  industry: { en: string; ru: string };
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  metrics: Metric[];
}

export const CASES: CaseData[] = [
  {
    id: 1,
    slug: "payment-flow",
    industry: { en: "Fintech", ru: "Финтех" },
    title: { en: "Payment Widget Redesign", ru: "Редизайн платёжного виджета" },
    description: {
      en: "Deposit widget for an iGaming platform in 50+ countries. Simplified the deposit flow and improved conversion.",
      ru: "Виджет пополнения для iGaming-платформы в 50+ странах. Упростил депозит и повысил конверсию.",
    },
    metrics: [
      { value: "+2–4%",  label: { en: "CR by Deposit",           ru: "CR в депозит"         } },
      { value: "+3–5%",  label: { en: "Bonus Deposit Share",     ru: "Доля бонусных депозитов" } },
      { value: "+2–4%",  label: { en: "First-time Deposit",      ru: "Первый депозит"          } },
    ],
  },
  {
    id: 2,
    slug: "analytics-dashboard",
    industry: { en: "Digital Media Platform", ru: "Медиа-платформа" },
    title: { en: "Ved", ru: "Веды" },
    description: {
      en: "A new digital media project by Vedomosti for Gen Z. Led design and art direction from concept to launch.",
      ru: "Новый медиа-проект Ведомостей для поколения Z. Отвечал за дизайн и арт-дирекцию проекта от идеи до запуска.",
    },
    metrics: [
      { value: "45 000", label: { en: "MAU",                ru: "MAU"                  } },
      { value: "↓3×",    label: { en: "Support tickets",   ru: "Тикеты" } },
      { value: "↑22 pt", label: { en: "NPS",               ru: "NPS" } },
    ],
  },
];