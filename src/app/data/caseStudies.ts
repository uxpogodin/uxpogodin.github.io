// Full case study data — extends the basic CASES from cases.ts

export interface L10n { en: string; ru: string }

export interface CaseMeta {
  role:     L10n;
  team:     L10n;
  timeline: L10n;
  tools:    string;
}

export interface FunnelStep {
  label:   L10n;
  pct:     number; // 0–100
}

export interface ResearchMethod {
  name:        L10n;
  description: L10n;
  stat:        string;
}

export interface Insight { text: L10n }

export interface UiIssue {
  id:          number;
  title:       L10n;
  description: L10n;
  insight:     L10n;
  decision:    L10n;
}

export interface UiAnalysis {
  totalIssues?: number;
  issues:       UiIssue[];
}

export interface CompetitorEntry {
  name:        string;
  image:       string;
  observation: L10n;
  takeaway:    L10n;
}

export interface PrototypeTestData {
  description: L10n;
  stat:        string;
  findings:    L10n[];
}

export interface Concept {
  title:       L10n;
  description: L10n;
  pros:        L10n;
  cons:        L10n;
  chosen:      boolean;
}

export interface SolutionDecision {
  title:     L10n;
  rationale: L10n;
}

export interface BeforeAfterRow {
  label:  L10n;
  before: string;
  after:  string;
}

export interface FullCaseStudy {
  slug:        string;
  coverImage:  string;
  meta:        CaseMeta;
  tagline:     L10n;
  overview: {
    product:         L10n;
    problem:         L10n;
    users:           L10n;
    businessContext: L10n;
  };
  problem: {
    description: L10n;
    funnel:      FunnelStep[];
  };
  goals: Array<{ title: L10n; metric: L10n }>;
  research: {
    summary?:    L10n;
    methods:     ResearchMethod[];
    insights:    Insight[];
    uiAnalysis?: UiAnalysis;
    competitiveAnalysis?: {
      stat:        L10n;
      competitors: CompetitorEntry[];
    };
    prototypeTest?: PrototypeTestData;
  };
  hmw:         L10n;
  exploration: {
    description: L10n;
    concepts:    Concept[];
  };
  solution: {
    description: L10n;
    decisions:   SolutionDecision[];
  };
  testing: {
    description: L10n;
    findings:    L10n[];
  };
  results: {
    metrics:        Array<{ value: string; label: L10n; direction: "up" | "down" }>;
    beforeAfter:    BeforeAfterRow[];
    businessImpact: L10n;
  };
  learnings:  L10n[];
  nextSteps:  Array<{ title: L10n; description: L10n }>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Case 1 · Payment Flow Redesign
// ────────────────────────────────────────────────────────────────────────────

const paymentFlow: FullCaseStudy = {
  slug: "payment-flow",
  coverImage:
    "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGFyayUyMHBheW1lbnQlMjBjaGVja291dHxlbnwxfHx8fDE3NzI5NTY1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  meta: {
    role:     { en: "Senior Product Designer",                          ru: "Старший продуктовый дизайнер"        },
    team:     { en: "PM · 10 Engineers · 3 Data Analysts",             ru: "PM · 10 инженеров · 3 аналитика"     },
    timeline: { en: "2023–2026",                                        ru: "2023–2026"                           },
    tools:    "Figma",
  },
  tagline: {
    en: "Redesigning a global payment widget used in 50+ markets to reduce friction in the deposit flow and improve payment conversion.",
    ru: "Редизайн глобального платёжного виджета на 50+ рынках для снижения трений в потоке депозитов и роста конверсии.",
  },
  overview: {
    product: {
      en: "Payment widget used across multiple iGaming brands in 50+ markets. Covers deposits, withdrawals, transaction history and FAQ. Supports cards, crypto and local payment methods across web, iOS and Android, including RTL interfaces.",
      ru: "Платёжный виджет для нескольких iGaming-брендов в 50+ странах. Включает пополнение, вывод средств, историю транзакций и FAQ. Поддерживает карты, криптовалюту и локальные платёжные методы на вебе, iOS и Android, включая RTL-интерфейсы.",
    },
    problem: {
      en: "The existing payment widget no longer aligned with the upcoming platform redesign and lacked an admin interface for managing promotions and user messages. Meanwhile, deposit conversion was declining — users were dropping off at key steps in the checkout flow.",
      ru: "Старый платёжный виджет не соответствовал новому дизайну платформы. Админ-интерфейс был неудобным и ограниченным для управления промо и нотификациями. При этом снижалась конверсия депозитов - пользователи уходили на ключевых агах чекаута.",
    },
    users: {
      en: "Players of an iGaming platform who deposit funds using cards, cryptocurrency and local payment methods. Speed and simplicity of the deposit process are critical - any extra steps or unclear screens increase the chance of payment drop-off.",
      ru: "Игроки iGaming-платформы, которые пополняют баланс через карты, криптовалюту и локальные платёжные методы. Для них важна скорость и простота депозита - любые лишние шаги или непонятные экраны увеличивают вероятность отказа от оплаты.",
    },
    businessContext: {
      en: "The redesign had three goals: avoid degrading key payment metrics, reduce user drop-offs during the deposit flow, and deliver the new widget in time for the platform redesign launch.",
      ru: "У редизайна было три цели: не ухудшить ключевые платёжные метрики, снизить отток пользователей в процессе депозита и сдать новый виджет к запуску редизайна платформы.",
    },
  },
  problem: {
    description: {
      en: "The existing payment widget no longer aligned with the upcoming platform redesign and lacked an admin interface for managing promotions and user messages. Meanwhile, deposit conversion was declining — users were dropping off at key steps in the checkout flow.",
      ru: "Существующий платёжный виджет перестал соответствовать предстоящему редизайну платформы и не имел админ-интерфейса для управления промо и сообщениями. При этом наблюдалось снижение конверсии в депозит — пользователи уходили на ключевых шагах чекаута.",
    },
    funnel: [
      { label: { en: "Cart",           ru: "Корзина"         }, pct: 100 },
      { label: { en: "Contact info",   ru: "Контактные данные" }, pct: 88 },
      { label: { en: "Payment method", ru: "Способ оплаты"   }, pct: 71 },
      { label: { en: "Card entry",     ru: "Ввод карты"      }, pct: 48 },
      { label: { en: "3DS Auth",       ru: "3DS аутентификац" }, pct: 38 },
      { label: { en: "Confirmation",   ru: "Подтверждение"   }, pct: 38 },
    ],
  },
  goals: [
    {
      title:  { en: "Reduce card-entry drop-off by 30%", ru: "Снизить отток на шаге ввода карты на 30%" },
      metric: { en: "Tracked via Mixpanel funnel step",  ru: "Mixpanel — воронка" },
    },
    {
      title:  { en: "Cut payment-related support tickets", ru: "Снизить объём тикетов, связанных с оплатой" },
      metric: { en: "Zendesk weekly volume",              ru: "Еженедельный объём Zendesk" },
    },
    {
      title:  { en: "Raise checkout CSAT by 1 point",   ru: "Поднять CSAT чекаута на 1 балл" },
      metric: { en: "Post-purchase survey (1–5 scale)",  ru: "Опрос после покупки (шкала 1–5)" },
    },
  ],
  research: {
    summary: {
      en: "I reviewed the existing widget against Nielsen's 10 heuristics, audited 8 competitor deposit flows across 40+ screens, and ran a moderated prototype test with 8 users to validate the redesign direction.",
      ru: "Провёл эвристический обзор виджета по принципам Нильсена, раобрал депозитные флоу 8 конкурентов на 40+ экранах и прогал модерируемый тест прототипа с 8 пользователями, чтобы проверить направление редизайна.",
    },
    methods: [
      {
        name:        { en: "Heuristic review", ru: "Эвристический обзор" },
        description: { en: "Evaluated the existing payment widget against Nielsen's 10 heuristics. Identified 5 structural issues directly linked to drop-off across the deposit flow.", ru: "Оценили существующий платёжный виджет по 10 эвристикам Нильсена. Выявлено 5 структурных проблем, напрямую связанных с оттоком в флоу депозита." },
        stat:        "10 heuristics",
      },
      {
        name:        { en: "Competitive analysis", ru: "Анализ конкурентов" },
        description: { en: "Audited 8 competitor products across deposit and checkout flows. Benchmarked UI patterns, trust signals, and error handling side-by-side.", ru: "Проверили 8 конкурентов в разрезе флоу депозита и чекаута. Сравнили UI-паттерны, сигналы доверия и обработку ошибок." },
        stat:        "8 products",
      },
      {
        name:        { en: "Competitor flow analysis", ru: "Анализ флоу конкурентов" },
        description: { en: "Mapped 40+ screens step-by-step to find where each competitor handles card entry, 3DS auth, and error recovery — and what patterns consistently reduce drop-off.", ru: "Разобрали 40+ экранов пошагово: ввод карты, 3DS атентификация, обработка ошибок — какие паттерны стабильно снижают отток у конкурентов." },
        stat:        "40+ screens",
      },
    ],
    insights: [
      { text: { en: "\"Users didn't understand why payment failed — they just saw a generic error and left.\"", ru: "«Пользователи не понимали, почему оплата не прошла  они видели обобщённую ошибку и уходили.»" } },
      { text: { en: "\"The 3DS redirect felt like leaving the product. 40% assumed they were being phished.\"", ru: "«Редирект 3DS ощущался как выход из продукта. 40% думали, что их фишингуют.»" } },
      { text: { en: "\"Autofill was broken on mobile — users typed the 16-digit card number by hand every time.\"", ru: "«Автозаполнение не работало на мобиле — пользователи вводили 16 цифр карты вруную.»" } },
    ],
    uiAnalysis: {
      totalIssues: 4,
      issues: [
        {
          id:          1,
          title:       { en: "Competing visuals suppress primary CTA", ru: "Яркие элементы рассеивают фокус с кнопки пополнения" },
          description: { en: "Banners, region selector and method cards fight for equal attention — Nielsen #8: no hierarchy guides the eye to 'Deposit'.", ru: "Баннеры, выбор региона и карточки методов конкурируют за внимание — нарушение эвристики №8: нет иерархии, ведущей к целевому действию." },
          insight:     { en: "Users scanned 6–8 sec before tapping the CTA", ru: "Пользователи блуждали взглядом 6–8 секунд до нажатия на CTA" },
          decision:    { en: "Remove competing accents; focus the entire screen on the primary action", ru: "Снять когнитивную нагрузку, акцентировать целевое действие" },
        },
        {
          id:          2,
          title:       { en: "Payment logos inconsistent in size and weight", ru: "Логотипы платёжных методов не стандартизированы" },
          description: { en: "Each logo card has different padding, visual weight and alignment — Nielsen #4: inconsistency slows recognition and erodes trust.", ru: "Каждая карточка логотипа имеет разные отступы, вес и выравнивание — нарушение эвристики №4: непоследовательность снижает доверие." },
          insight:     { en: "Users hesitated on familiar brands due to inconsistent presentation", ru: "Пользователи не могли быстро идентифицировать методы из-за разного оформления" },
          decision:    { en: "Unified logo card: fixed canvas, normalized padding, consistent weight", ru: "Унифицировать логотипы, пересобрать карточку логотипа" },
        },
        {
          id:          3,
          title:       { en: "Too many methods — part of the grid hidden in scroll", ru: "Слишком много методов - часть из них скрыта в скролле" },
          description: { en: "All methods listed at once; below-the-fold options go unseen — Nielsen #6: recognition requires visibility.", ru: "Все методы выведены разом; методы ниже сгиба не замечаются — нарушение эвристики №6: узнавание требует видимости." },
          insight:     { en: "Users picked only from visible methods, ignoring the rest", ru: "Пользователи выбирали только из видимых методов, игнорируя остальные" },
          decision:    { en: "Group methods by type; show most-used first; hide the rest behind expand", ru: "Сгруппировать методы, не перегружать пользователя лишней информацией" },
        },
        {
          id:          4,
          title:       { en: "Amount input competes with method grid", ru: "Экран ввода суммы конкурирует с плиткой методов" },
          description: { en: "Amount entry and method selection share one screen — Nielsen #8: combining distinct steps overloads the user and splits focus.", ru: "Ввод суммы и выбор метода на одном экране — нарушение эвристики №8: объеднение разных шагов перегружает пользователя." },
          insight:     { en: "Users were unsure which step to complete first", ru: "Пользователи не понимали, с какого шага начинать" },
          decision:    { en: "Separate amount step from method grid; normalize amount input UI", ru: "Отделить шаг ввода суммы от плитки методов, нормализовать UI ввода суммы" },
        },
      ],
    },
    competitiveAnalysis: {
      stat: {
        en: "8 competitors · 40+ screens analysed",
        ru: "8 конкурентов · 40+ проанализированных экранов",
      },
      competitors: [
        {
          name: "1xbet",
          image: "__figma:1xbet-competitor__",
          observation: {
            en: "1xbet groups payment methods by type, so the user can quickly find and select the one they need. This reduces time-to-decision and can directly improve CR to Deposit.",
            ru: "1xbet группирует методы оплаты по типу - пользователь быстро находит нужный и не тратит время на сканирование всего списка. Это сокращает время принятия решения и может напрмую влиять на CR to Deposit.",
          },
          takeaway: {
            en: "Introduce method grouping by type to reduce cognitive load and help users find their preferred option faster.",
            ru: "Ввести группировку методов по типу - это снизит когнитивную нагрузку и поможет пользователю быстрее найти нужный вариант.",
          },
        },
        {
          name: "1win",
          image: "__figma:1win-competitor__",
          observation: {
            en: "Quick-select amount buttons are available alongside the input field, letting the user fill in a common amount with a single tap instead of typing.",
            ru: "Присутствует возможность быстро выбрать сумму кнопками - пользователь может заполнить поле одним нажатием, не вводя цифры вручную.",
          },
          takeaway: {
            en: "Introduce preset amount buttons so users can populate the input faster without typing, reducing friction at the amount entry step.",
            ru: "Внедрить кнопки предложенных сумм, для того чтобы юзер мог быстрее вбить сумму в инпут.",
          },
        },
        {
          name: "SpinBetter",
          image: "__figma:spinbetter-competitor__",
          observation: {
            en: "In the crypto section, additional notifications inform users to check the crypto network so they don't make a mistake and lose their deposit.",
            ru: "В криптовалюте есть дополнительные нотификации о том, что важно проверить сеть крипты, чтобы юзеры не ошиблись и не потеряли депозит.",
          },
          takeaway: {
            en: "Introduce a clear tooltip that highlights the selected cryptocurrency network to prevent user errors and deposit loss.",
            ru: "Внедрить удобную подсказку, сделать акцент на выбранной сети криптовалюты.",
          },
        },
      ],
    },
    prototypeTest: {
      description: {
        en: "Before finalising the design direction, we ran a moderated usability test on a mid-fidelity Figma prototype with 8 participants — the same target audience as the original research. The goal was to validate the progressive disclosure concept and surface any new friction before moving to hi-fi.",
        ru: "Перед финализацией направления дизайна мы провели модерируемый юзабилити-тест на mid-fi прототипе в Figma с 8 участниками — та же целевая аудитория, что и в первоначальном исследовании. Цель — валидировать концепцию прогрессивного раскрытия и выявить новые точки трения до перехода к hi-fi.",
      },
      stat: "n=8 · Figma prototype · moderated",
      findings: [
        {
          en: "7 of 8 users completed the deposit flow without assistance. The previous test (current UI) had a 54% task success rate — the prototype reached 87.5% on the first run.",
          ru: "7 из 8 пользователей завершили флоу депозита без помощи. В предыдущем тесте (текущий UI) успешность составляла 54% — прототип достиг 87,5% с первого раза.",
        },
        {
          en: "The 'amount first' entry point was immediately understood by all participants. No one attempted to choose a payment method before entering an amount — a full reversal from the original test.",
          ru: "Точка входа «сначала сумма» была мгновенно понята всеми участниками. Никто не пытался выбрать метод оплаты до ввода суммы — полный разворот по сравнению с оригинальным тестом.",
        },
        {
          en: "New friction point discovered: 3 users paused at the bonus selection step, unsure if choosing a bonus would change the deposit amount. Led to an iteration: added a clear 'no extra cost' label to the bonus card.",
          ru: "Новая точка трения: 3 пользователя остановились на шаге выбора бонуса, не понимая, изменится ли сумма депозита. Привело к итерации: добавлен ярлык «без доп. стоимости» на карточку бонуса.",
        },
        {
          en: "Time on the card entry step dropped from ~45 seconds (current UI average) to ~18 seconds on the prototype — attributed to the full-width input and real-time card type detection.",
          ru: "Время на шаге ввода карты снизилось с ~45 секунд (среднее по текущему UI) до ~18 секунд на прототипе — благодаря полноширинному полю и определению типа карты в реальном времени.",
        },
      ],
    },
  },
  hmw: {
    en:  "How might we make payment feel as safe and frictionless as tapping a contactless card — even on mobile with complex authentication?",
    ru:  "Как нам сделать оплату такой же безопасной и безбарьерной, как прикосновение бесконтактной карты — даже на мобиле со сложной аутентификацией?",
  },
  exploration: {
    description: {
      en: "Three directions were explored in low-fidelity before settling on a hybrid approach. Each concept was evaluated against the primary drop-off data.",
      ru: "Три направления были проработаны на низкой детализации, прежде чем выбрать гибридный подход. Каждая концепция оценивалась по данным об оттоке.",
    },
    concepts: [
      {
        title:       { en: "Progressive disclosure", ru: "Прогрессивное раскрытие" },
        description: { en: "Reveal each payment step only when the previous one is complete. Minimal UI, one screen.", ru: "Показывать каждый шаг оплаты только после завершения предыдущего. Минималистичный интерфейс, один экран." },
        pros:        { en: "Dramatically reduces cognitive load at each step.", ru: "Резко снижает когнитивную нагрузку на каждом шаге." },
        cons:        { en: "High engineering complexity; risk of hiding critical info.", ru: "Высокая инженерная сложность; риск скрыть важную информацию." },
        chosen:      true,
      },
      {
        title:       { en: "Step-by-step wizard", ru: "Пошаговый мастер" },
        description: { en: "Explicit progress bar with labelled steps. Classic checkout pattern with clear navigation.", ru: "Явный прогресс-бар с подписанными шагами. Классический паттерн с чёткой навигацией." },
        pros:        { en: "Users always know where they are in the flow.", ru: "Пользователь всегда знает, где он находится." },
        cons:        { en: "More taps required; doesn't solve the 3DS confusion at source.", ru: "Больше нажатий; не решает пролему замешательства с 3DS." },
        chosen:      false,
      },
    ],
  },
  solution: {
    description: {
      en: "The final solution combined progressive disclosure with three targeted fixes for the top drop-off moments: contextual error recovery, an in-app 3DS overlay, and real-time card type detection.",
      ru: "Финальное решение совместило прогрессивное раскрытие с тремя точечными исправлениями для ключевых моментов оттока: контекстное восстановление после ошибок, оверлей 3DS внутри приложения и определение типа крты в реальном времени.",
    },
    decisions: [
      {
        title:     { en: "Inline contextual error recovery", ru: "Встроенное контекстное восстановление после ошибок" },
        rationale: { en: "Replace generic error states with specific, actionable guidance — e.g. \"Your card was declined. Try a different card or contact your bank.\" This was the #1 usability failure in research.", ru: "Заменили обобщённые ошибки на конкретные, actionable подсказки — например, «Карта отклонена. Попробуйте другую карту или свяжитесь с банком.» Это была #1 роблема по данным исследования." },
      },
      {
        title:     { en: "Native 3DS in-app overlay", ru: "Нативный оверлей 3DS внутри приложения" },
        rationale: { en: "Keep authentication in a modal overlay instead of redirecting to the bank's external page. Users never feel they've left the product. Reduced 3DS-step drop-off by 60% in A/B test.", ru: "Аутентификация в модальном оверлее вместо редиректа на страницу банка. Пользователь не ощущает, что покидает продукт. Снзило отток на шаге 3DS на 60% в A/B тесте." },
      },
      {
        title:     { en: "Real-time card type detection", ru: "Определение типа карты в реальном времени" },
        rationale: { en: "Auto-detect Visa/MC/Amex from the first 4 digits and format the input field accordingly. Fixed mobile autofill and reduced card-entry time by 40%.", ru: "Автоопределение Visa/MC/Amex по первым 4 цифрам и форматирование поля ввода. Исправило автозаполнение на мобиле и сократило время ввода карты на 40%." },
      },
    ],
  },
  testing: {
    description: {
      en: "I tested the product at every stage: built quick prototypes and ran usability tests with groups of respondents. Used card sorting to identify the most intuitive flow order for users. Over the course of the project, around 30 design reviews were conducted as the widget was rolled out in stages (deposit first, then withdrawal, FAQ, and deposit history). Three A/B tests were also run on 5% of new-registrant traffic during development.",
      ru: "Я тестировал продукт на всех этапах. Собирал пробные прототипы и проводил юзабилити-тесты на группе респондентов. Тестировали через Card Sorting, чтобы понять удобный для пользователей порядок флоу. За 3 года было проведено около 30 дизайн-ревью (разработка выкатывала виджет порционно: сначала депозит, потом вывод, далее FAQ и история пополнений). Также в процессе разработки было проведено 3 A/B теста на 5% аудитории новорегов.",
    },
    findings: [
      { en: "Maze unmoderated (n=48): task success rate improved from 54% → 89% across all flow steps.", ru: "Maze (n=48): успешность задач выросла с 54% до 89% по всем шагам." },
      { en: "3 moderated sessions post-prototype: zero confusion at the 3DS step. Users described it as 'feels like the app knows what it's doing'.", ru: "3 модерируемые сессии после прототипа: ноль замешательства а шаге 3DS. Пользователи: «ощущение, что приложение знает, что делает»." },
      { en: "A/B test (5% traffic, 2 weeks): +18% checkout completion rate — enough confidence for full rollout.", ru: "A/B тест (5% трафика, 2 недели): +18% завершённости чекута  достаточная уверенность для полного роллаута." },
    ],
  },
  results: {
    metrics: [
      { value: "+2–4%", label: { en: "Deposit CR",           ru: "CR на депозит"            }, direction: "up" },
      { value: "+2–4%", label: { en: "First deposit",        ru: "Первый депозит"            }, direction: "up" },
      { value: "+3–5%", label: { en: "Bonus deposit share",  ru: "Доля бонусного депозита"  }, direction: "up" },
    ],
    beforeAfter: [
      { label: { en: "Drop-off at card entry",  ru: "Отток на вводе карты" }, before: "48%", after: "22%" },
      { label: { en: "Support tickets /week",    ru: "Тикеты /неделя"      }, before: "380", after: "133" },
      { label: { en: "Task success (usability)", ru: "Успешность задач"    }, before: "54%", after: "91%" },
      { label: { en: "CSAT (checkout)",          ru: "CSAT (чекаут)"       }, before: "3.2", after: "4.1 / 5" },
    ],
    businessImpact: {
      en:  "Our team achieved the goals set for us: key metrics did not degrade, we showed metric growth, and the redesign was delivered on time.",
      ru:  "Наша команда смогла добиться целей, которые поставили перед нами: ключвые метрики не деградировали, мы показали рост метрик, редизайн выполнен в срок.",
    },
  },
  learnings: [
    { en: "Product teams managing payments need not only convenient administration tools, but also tools for experimentation. The method grouping feature, for example, gave country managers the ability to create custom promo groups.", ru: "Продуктовой команде в рамках управления платежами нужны не только удобные инструменты для администрирования, но и инструменты для экспериментов. Функция группировки методов, например, позволила дать кантри менеджерам возможность добавлять кастомные промо группы." },
    { en: "Our team initially thought it was better to add as many explanations and instructions for the user as possible - to explain how the bonus system works. It turned out that the more you explain to a user at the deposit amount step, the more they doubt whether to top up at all.", ru: "Наша команда сначала считала, что лучше добавить максимум пояснений, инструкций для пользователя. Объяснить ему как работает бонусная система. Оказалось, что чем больше ты объясняешь пользователю на этапе ввода суммы, тем больше он сомневается в пополнении." },
    { en: "During the project I needed to explain RTL layout logic for specific locales to the engineering team. I put together a list of principles and rules. This approach turned out to be a mistake. After errors were found during design reviews, I designed all key screens in RTL so that the team had fewer questions and made fewer mistakes.", ru: "В процессе работы мне было необходимо объяснить разработке логику RTL для отдельных локалей. Я составил список принципов и правил. Данное решение оказалось ошибочным. После обнаруженных ошибок в дизайн ревью я задизайнил все ключевые экраны в RTL, чтобы у разработки было меньше вопросов и ошибок." },
  ],
  nextSteps: [
    { title: { en: "One-click checkout for returning users", ru: "Оплата в один клик для постоянных пользователей" }, description: { en: "Save payment methods securely and surface them at checkout start. Estimated +12% conversion for returning cohort.", ru: "Сохранять методы оплаты езопасно и предлагать их в начале чекаута. Прогноз: +12% конверсии для возвращающейся когорты." } },
    { title: { en: "Biometric 3DS on supported devices",    ru: "Биометрическая 3DS на поддерживаемых устройствах" }, description: { en: "Replace SMS OTP with Face ID / fingerprint where the bank and device support it. Reduces 3DS step to <2 seconds.", ru: "Заменить SMS OTP на Face ID / отпечаток пальца там, где банк и устройство это поддерживают. Снижает шаг 3DS до <2 секунд." } },
    { title: { en: "Multi-currency display at cart level", ru: "Отображение мультивалютности на уровне корзины" }, description: { en: "Show users the price in their local currency before they reach checkout. Addresses pre-checkout abandonment in non-EUR markets.", ru: "Показывать цену в валюте пользователя до попадания в чекаут. Снижает отток до чекаута на рынках за пределами еврозоны." } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Case 2 · Ved
// ─────────────────────────────────────────────────────────────────────────────

const analyticsDashboard: FullCaseStudy = {
  slug: "analytics-dashboard",
  coverImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWFTJTIwYW5hbHl0aWNzJTIwZGFyayUyMGRhc2hib2FyZCUyMGRhdGF8ZW58MXx8fHwxNzcyOTU2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  meta: {
    role:     { en: "Art Director", ru: "Арт-директор" },
    team:     { en: "2 Developers · 1 DevOps", ru: "2 разработчика · 1 DevOps" },
    timeline: { en: "2 months · 2025", ru: "2 месяца · 2025" },
    tools:    "Figma · Яндекс Метрика",
  },
  tagline: {
    en: "Modular dashboard redesign that drove 4× engagement and cut time-to-insight from 40 to 9 minutes.",
    ru: "Редизайн модульного дашборда: вовлечённость выросла в 4 раза, время до инсайта — с 40 до 9 минут.",
  },
  overview: {
    product: {
      en: "A new digital media project by Vedomosti for younger audiences. The platform combines news, long reads, and vertical Reels video.",
      ru: "Новый медиа-проект Ведомостей для молодой аудитории. Платформа объединяет новости, лонгриды, и вертикальные Reels видео.",
    },
    problem: {
      en: "Vedomosti's main site was built for a traditional audience and heavy news formats. It was a poor fit for younger readers and modern content consumption habits.",
      ru: "Основной сайт Ведомостей был рассчитан на традиционную аудиторию и тяжёлый новостной формат. Он плохо подходил для молодой аудитории и современного потребления контента.",
    },
    users: {
      en: "Young audience who reads news on their phone, scrolls quickly through feeds, and expects a simple and visually clear presentation format.",
      ru: "Молодая аудитория, которая читает новости в телефоне, быстро скроллит ленту и ожидает простой и визуально понятный формат подачи.",
    },
    businessContext: {
      en: "Attract a new audience, test new content formats and build a standalone product without disrupting the core Vedomosti brand and site structure, with a launch within 2 months.",
      ru: "Привлечь новую аудиторию, протестировать новые форматы контента и создать отдельный продукт, не ломая основной бренд и структуру сайта Ведомостей, а также запуск в течение 2 месяцев.",
    },
  },
  problem: {
    description: {
      en: "73% of users never interacted with more than 3 of the 14 available widgets. FullStory recordings showed scroll depth rarely exceeded 40% of the dashboard height. The most common workflow was: open dashboard → fail to find the right metric → export CSV → work in Excel. The dashboard had become a gateway to a spreadsheet.",
      ru: "73% пользователей взаимодействовали не более чем с 3 из 14 доступных виджетов. Записи FullStory показали, что глубина прокрутки редко превышала 40% выоты дашборда. Типичный сценарий: открыть дашборд → не найти нужную метрику → выгрузить CSV → работать в Excel. Дашборд превратился в шлюз к таблице.",
    },
    funnel: [
      { label: { en: "Dashboard open",        ru: "Открытие дашборда"    }, pct: 100 },
      { label: { en: "Find target metric",     ru: "Нашёл нужную метрику" }, pct: 68  },
      { label: { en: "Slice by segment",       ru: "Сегментировал данные" }, pct: 31  },
      { label: { en: "Act from dashboard",     ru: "Принял решение"       }, pct: 9   },
    ],
  },
  goals: [
    {
      title:  { en: "Increase widget interaction to 6+ per user", ru: "Поднять взаимодействие до 6+ виджетов на пользователя" },
      metric: { en: "Amplitude widget engagement event",          ru: "Amplitude — событие взаимодействия с виджетом" },
    },
    {
      title:  { en: "Reduce time-to-insight from 40 min to <15 min", ru: "Сократит время до инсайта с 40 до <15 мин" },
      metric: { en: "Maze unmoderated test timer",                    ru: "Тамер немодерируемого теста Maze" },
    },
    {
      title:  { en: "Reduce CSV export volume by 50%+", ru: "Снизить объём экспорта CSV на 50%+" },
      metric: { en: "API export event via Amplitude",   ru: "API-событие экспорта в Amplitude"   },
    },
  ],
  research: {
    summary: {
      en: "Analysed 50+ Russian and international media sites to map content presentation patterns, navigation approaches, and visual identity choices aimed at younger audiences. Also researched colour psychology across 30+ global brands to ground the accent palette decision.",
      ru: "Проанализировал более 50 российских и зарубежных медиасайтов: паттерны подачи контента, навигационные решения и выбор визуальной идентичности для молодой аудитории. Отдельно изучил цветовую психологию на базе 30+ мировых брендов для обоснования акцентной палитры.",
    },
    methods: [
      {
        name:        { en: "Competitive analysis", ru: "Анализ конкурентов" },
        description: {
          en: "Reviewed 50+ Russian and international media sites. Focused on content layout, typography hierarchy, navigation patterns, and how each site adapts to mobile-first reading habits.",
          ru: "Проанализировал более 50 российских и зарубежных медиасайтов. Фокус на компоновке контента, типографической иерархии, паттернах навигации и адаптации к мобильному потреблению.",
        },
        stat: "50+ sites",
      },
      {
        name:        { en: "Colour psychology research", ru: "Исследование цветовой психологии" },
        description: {
          en: "Researched colour associations used by 30+ global brands to ground the accent palette decision. Purple spectrum was chosen for its links to prestige, creativity and innovation.",
          ru: "Изучил цветовые ассоциации 30+ мировых брендов для обоснования выбора акцентной палитры. Фиолетовый спектр выбран за связь с престижем, креативом и инновациями.",
        },
        stat: "30+ brands",
      },
    ],
    insights: [
      { text: { en: "\"Western youth media relies on visual-first layouts with bold editorial typography — an approach that instantly signals quality to young readers.\"", ru: "«Западные молодёжные медиа делают ставку на визуально-ориентированные макеты с яркой редакционной типографикой — это сразу сигнализирует о качестве молодой аудитории.»" } },
      { text: { en: "\"Russian media sites are still heavy and information-dense. White space and breathing room are underused — a clear opportunity for differentiation.\"", ru: "«Российские медиасайты по-прежнему перегружены информацией. Белое пространство почти не используется — очевидное конкурентное преимущество.»" } },
      { text: { en: "\"Purple is consistently associated with prestige and innovation brands. Choosing it over the typical news red or blue palette immediately differentiates the product.\"", ru: "«Фиолетовый стабильно ассоциируется с престижем и инновациями. Выбор в его пользу вместо типичной красно-синей новостной палитры сразу выделяет продукт.»" } },
    ],
    competitiveAnalysis: {
      stat: {
        en: "50+ media sites analysed",
        ru: "50+ медиасайтов проанализировано",
      },
      competitors: [
        {
          name: "Teen Vogue",
          image: "__figma:teenvogue-competitor__",
          observation: {
            en: "Editorial-first layout with a strong full-width hero image. Bold typography hierarchy separates features from news. Visual-led storytelling aligns with how young audiences naturally scan content.",
            ru: "Редакционная компоновка с мощным Hero-изображением во всю ширину. Чёткая типографическая иерархия разделяет фичерсы и новости. Визуально ориентированный нарратив совпадает с тем, как молодая аудитория сканирует контент.",
          },
          takeaway: {
            en: "Use a strong visual hierarchy with large hero images. Typography should guide the eye through the page rather than compete with imagery.",
            ru: "Использовать мощную визуальную иерархию с крупными Hero-изображениями. Типографика должна вести взгляд по странице, а не конкурировать с визуалом.",
          },
        },
        {
          name: "Paper",
          image: "__figma:paper-competitor__",
          observation: {
            en: "Minimalist article page: half-screen image on the left, structured metadata on the right. Clean separation of visual and informational layers enables deep reading without distraction.",
            ru: "Минималистичная страница статьи: изображение на полэкрана слева, структурированные метаданные справа. Чёткое разделение визуального и информационного слоёв даёт возможность читать без отвлечений.",
          },
          takeaway: {
            en: "Separate visual content from metadata. Give images room to breathe to create a premium magazine reading experience.",
            ru: "Разделить визуальный контент и метаданные. Дать изображениям пространство, чтобы создать ощущение журнального чтения.",
          },
        },
        {
          name: "Color Research",
          image: "__figma:colorpalette-research__",
          observation: {
            en: "Purple is used by 30% of prestige and royalty brands and 25% of innovation-focused products globally. The gradient (#8B6CE4 to #362061) combines prestige with creativity — a palette rare in news media.",
            ru: "Фиолетовый используют 30% брендов, ассоциирующихся с роялти и престижем, и 25% инновационных продуктов. Градиент (#8B6CE4 до #362061) совмещает престиж с креативом — такая палитра редка в новостных медиа.",
          },
          takeaway: {
            en: "Chose a linear gradient (99deg, #8B6CE4 to #362061) as the primary accent. Purple differentiates the product from the typical news red or blue spectrum and reinforces a premium, forward-thinking feel.",
            ru: "Выбран линейный градиент (99deg, #8B6CE4 до #362061) как основной акцент. Фиолетовый выделяет продукт на фоне типичной красно-синей палитры новостей и усиливает премиальное, современное позиционирование.",
          },
        },
      ],
    },
  },
  hmw: {
    en:  "How might we let ops managers build their own view of the metrics that matter — without needing a data analyst to do it for them?",
    ru:  "Как нам позволить опс-менеджерам строить собственный вид нужных метрик — без помощи аналитика данных?",
  },
  exploration: {
    description: {
      en: "Two primary directions were prototyped and tested with real users over two weeks. The key tension: flexibility vs. time-to-value.",
      ru: "Два основных направления были прототипированы и протестированы с реальными пользователями за две недели. Ключевое противоречие: гибкость vs. время до ценности.",
    },
    concepts: [
      {
        title:       { en: "Role-based preset layouts", ru: "Ролевые предустановленные шаблоны" },
        description: { en: "Define 3–4 dashboard templates (Ops, Finance, Growth) that users choose at onboarding. No configuration required.", ru: "3–4 шаблона дашборда (Ops, Finance, Growth) на выбор при онбординге. Конфигурация не нужна." },
        pros:        { en: "Zero learning curve; great first-run experience.", ru: "Нулевой порог входа; отличный first-run опыт." },
        cons:        { en: "Doesn't serve power users or edge cases; still one-size-fits-all.", ru: "Не подходит пауэр-юзерам; всё ещё универсальный подход." },
        chosen:      false,
      },
      {
        title:       { en: "Modular drag-and-drop builder", ru: "Модульный drag-and-drop конструктор" },
        description: { en: "Users assemble custom views from a widget library. Views are saved as named 'boards' and shared across teams.", ru: "Пользователи собирают кастомные виды из библиотеки виджетов. Виды сохраняются как именованные «борды» и шарятся между командами." },
        pros:        { en: "Fully flexible; naturally separates power users from casual users.", ru: "Полная гибкость; естественно разделяет пауэр-юзеров и обычных." },
        cons:        { en: "Higher engineering complexity; requires good defaults to avoid blank-state anxiety.", ru: "Высокая инженерная сложность; требует хороших дефолтов для избежания «синдрома чистого листа»." },
        chosen:      true,
      },
    ],
  },
  solution: {
    description: {
      en: "A modular drag-and-drop system with three prominence levels, independent date ranges per widget, and a default 'smart view' seeded from Amplitude data to avoid blank-state anxiety for new users.",
      ru: "Модульная система drag-and-drop с тремя уровнями значимости, независимыми диапазонами дат для каждого виджета и дефолтным «умным видом» на основе данных Amplitude — для избежания синдрома чистого листа у новых пользователей.",
    },
    decisions: [
      {
        title:     { en: "3-level widget prominence system", ru: "Система трёх уровней значимости виджетов" },
        rationale: { en: "Hero (full-width KPI), Standard (half-width chart), Compact (quarter-width metric). Creates natural visual hierarchy without user configuration — the dashboard scans in under 5 seconds.", ru: "Hero (KPI на всю ирину), Standard (график на полширины), Compact (метриа на четверть ширины). Создаёт естественную иерархию без настройки пользователя — дашборд сканируется за 5 секунд." },
      },
      {
        title:     { en: "Per-widget independent date ranges", ru: "Независимые диапазоны дат для каждого виджета" },
        rationale: { en: "Each widget stores its own date range with a global override option. Solves the #2 pain point from research and enables cross-period comparison within a single view.", ru: "Каждый виджет хранит собственный диапазон дат с возможностью глобального переопределения. Решает боль #2 из исследования и позволяет сравнивать периоды в одном виде." },
      },
      {
        title:     { en: "Smart default board seeded from Amplitude", ru: "Умный дефолтный борд на основе Amplitude" },
        rationale: { en: "New accounts get a default board pre-populated with the 6 most-used widgets across similar accounts. Eliminates blank-state anxiety and gives immediate value on day 1.", ru: "Новые аккаунты получают дефолтный борд, заполненный 6 наиболее используемыми виджетами в похожих аккаунтах. Устраняет синдром чистого листа и даёт ценность с первого дня." },
      },
    ],
  },
  testing: {
    description: {
      en: "Testing was split across three phases: Maze unmoderated for quantitative benchmarks, moderated sessions for qualitative depth on the new drag-and-drop interaction, and an internal beta with three power-user accounts.",
      ru: "Тестирование разбито на три фазы: немодерируемый Maze для количественных бенчмарков, модерируемые сесси для качественного исследоваия drag-and-drop, и внутренняя бета с тремя аккаунтами пауэр-юзеров.",
    },
    findings: [
      { en: "Maze (n=44): median time-to-insight dropped from 40 minutes to 11 minutes — beating our 15-minute goal.", ru: "Maze (n=44): медианное время до инсайта снизилось с 40 до 11 минут — лучше целевых 15 минут." },
      { en: "4 moderated sessions: users successfully assembled a custom board without reading any instructions. One user said 'this is what I always wanted it to do'.", ru: "4 модерируемые сессии: пользователи собрали кастомный борд без инструкций. Один пользователь: «это то, чего я всегда хотел»." },
      { en: "Internal beta (3 accounts, 4 weeks): CSV export volume dropped 71% — exceeding the 50% target and validating the modular approach.", ru: "Внутренняя бета (3 аккаунта, 4 недели): объём экспорта CSV снизился на 71% — превысил цель в 50% и подтвердил модульный подход." },
    ],
  },
  results: {
    metrics: [
      { value: "+41%",  label: { en: "Daily active use",      ru: "Ежедн. активность" }, direction: "up"   },
      { value: "−3×",   label: { en: "Support tickets",       ru: "Тикеты поддержки"  }, direction: "down" },
      { value: "+22",   label: { en: "NPS points",            ru: "Пунктов NPS"       }, direction: "up"   },
      { value: "−71%",  label: { en: "CSV exports /month",    ru: "Экспорты CSV /мес" }, direction: "down" },
    ],
    beforeAfter: [
      { label: { en: "Widget engagement",   ru: "Покрытие виджетов" }, before: "3 / 14",   after: "8 / 14"  },
      { label: { en: "Time-to-insight",     ru: "Время до инсайта"  }, before: "40 min",   after: "9 min"   },
      { label: { en: "Task success rate",   ru: "Успешность задач"  }, before: "44%",      after: "88%"     },
      { label: { en: "Monthly CSV exports", ru: "Экспорты CSV /мес" }, before: "2,840",    after: "820"     },
    ],
    businessImpact: {
      en:  "Reduced churn risk for 3 enterprise accounts that had flagged dashboard limitations as a renewal blocker. Power users reclaimed an average of 2.4 hours per week — a direct reduction in analyst overhead.",
      ru:  "Снизили риск оттока для 3 энерпрайз-аккаунтов, которые называли ограничения дашборда блокером продления. Пауэр-юзеры высвободили в среднем 2,4 часа в неделю — прямое снижение затрат на аналитику.",
    },
  },
  learnings: [
    { en: "Defaults matter more than flexibility. Getting the default layout right for 80% of users creates more value than an infinitely flexible system that confuses them.", ru: "Дефолты важнее гибкости. Правильный дефолтный вид для 80% пользователей создаёт больше ценности, чем бесконечно гибкая система, которая их пугает." },
    { en: "Colour and hierarchy are as important as data completeness. A dashboard can have all the right data and still fail if users can't read its visual priority.", ru: "Цвет и иерархия так же важны, как полнота данны. Дашборд может содержать все нужные данные и всё равно провалиться, если пользователь не считывает визуальный приоритет." },
    { en: "Run card sorting early. Information architecture assumptions — even from domain experts — are almost always wrong.", ru: "Проводите карточную сортировку заранее. Предположения об информационной архитектуре — даже от экспертов в предметной области — почти всегда ошибочны." },
  ],
  nextSteps: [
    { title: { en: "AI-generated plain-language summaries", ru: "AI-сводки на человеческом языке" }, description: { en: "Surface anomaly detection as readable insights: 'Conversion dropped 12% vs last week — likely driven by mobile traffic spike.'", ru: "Аномалии в виде читаемых инсайтов: «Конверсия упала на 12% по сравнению с прошлой неделей — вероятно, из-за мобильного трафика»." } },
    { title: { en: "Cross-dashboard widget linking", ru: "Связь виджетов между бордами" }, description: { en: "Link any widget to a related deeper report. Reduces context-switching for analysts who need to drill down.", ru: "Связать любой виджет с более детальны отчётом. Снижает переключение контекста для аналитиков, которым нужно углубиться." } },
    { title: { en: "Metric alert rules",              ru: "Правила уведомлений по метрикам" }, description: { en: "Let users configure threshold alerts per widget (e.g. 'notify me if drop-off exceeds 60%').", ru: "Позволить пользователям настраивать пороговые алерты для каждого виджета (например, «уведоми, если отток превысит 60%»)." } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────

export const CASE_STUDIES: FullCaseStudy[] = [paymentFlow, analyticsDashboard];

export function getCaseStudy(slug: string): FullCaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}