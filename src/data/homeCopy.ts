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
      "O Mundo da Teca é uma plataforma digital onde crianças e famílias encontram experiências para fazer em casa, organizadas em uma jornada de descobertas.",
    ],
    closing:
      "Ao entrar, você recebe acesso imediato à plataforma e pode começar a explorar no mesmo dia. Se escolher uma modalidade do Clube, sua família também participa das expedições mensais, recebendo novos capítulos dessa jornada em casa.",
    highlights: [
      "Acesso imediato à Plataforma Digital",
      "Jornada organizada em aproximadamente 6 meses",
      "Modalidades com envios físicos mensais",
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
