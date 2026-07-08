export type HomeModalityId =
  | "explorador-digital"
  | "mundo-descobertas"
  | "mundo-tesouros"
  | "expedicao-completa"

/** Manifesto reservado para a futura página Sobre */
export const homeAboutManifesto = {
  lines: [
    "A infância continua curiosa.",
    "Continua fazendo perguntas.",
    "Continua inventando mundos dentro do mundo.",
    "Continua encontrando tesouros onde os adultos passam depressa.",
  ],
  closing:
    "O Mundo da Teca nasceu para preservar esse jeito lento, encantado e presente de descobrir.",
} as const

export const homeCopy = {
  whatIs: {
    title: "O que é o Mundo da Teca?",
    paragraphs: [
      "Uma plataforma de descobertas para crianças\nexplorarem, criarem e colecionarem.",
    ],
    cta: {
      label: "Quero entender mais",
    },
  },

  howItWorks: {
    kicker: "Como funciona",
    steps: [
      "Escolha como participar",
      "Receba novas descobertas",
      "Brinque",
      "Colecione",
      "Continue explorando",
    ],
  },

  participate: {
    title: "Clube",
    lead: ["Escolha como sua família quer viver essa experiência."],
    modalities: [
      {
        id: "explorador-digital" as const,
        name: "Explorador Digital",
        summary: "Para quem quer começar pelo digital.",
      },
      {
        id: "mundo-descobertas" as const,
        name: "Meu Mundo de Descobertas",
        summary: "Todo mês, novas descobertas chegam à sua casa.",
      },
      {
        id: "mundo-tesouros" as const,
        name: "Meu Mundo de Tesouros",
        summary: "Para quem gosta de guardar e cada descoberta.",
      },
      {
        id: "expedicao-completa" as const,
        name: "Expedição Completa",
        summary: "A experiência mais completa do Mundo da Teca.",
      },
    ],
  },

  finalCta: {
    title: "Ainda em dúvida?",
    lines: [
      "Compare todas as formas de participar e descubra qual combina mais com sua família.",
    ],
    label: "Quero entender todos",
  },
} as const
