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
      "O Mundo da Teca é uma plataforma de descobertas para famílias.",
      "Aqui, crianças exploram experiências criativas, registram o que descobrem e constroem, aos poucos, uma coleção que cresce junto com a infância.",
    ],
    closing: "",
  },

  howItWorks: {
    title: "Como funciona?",
    subtitle: "Uma jornada que acontece aos poucos.",
    steps: [
      {
        title: "Escolha como participar.",
        text: "Comece apenas pela plataforma digital ou escolha uma das modalidades do Clube.",
      },
      {
        title: "Acesse imediatamente a plataforma.",
        text: "Explore experiências, registre descobertas e acompanhe sua coleção.",
      },
      {
        title: "Receba novos capítulos em casa.",
        text: "Nas modalidades físicas, novos materiais chegam todos os meses para ampliar a experiência.",
      },
      {
        title: "Construa uma coleção única.",
        text: "Ao longo de seis meses, cada descoberta passa a fazer parte da história da criança.",
      },
    ],
  },

  participate: {
    title: "Clube Mundo da Teca",
    lead: ["Escolha como quer viver essa experiência."],
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
