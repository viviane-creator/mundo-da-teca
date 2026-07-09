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
        text: "Comece pela Plataforma Digital ou escolha uma das modalidades do Clube para viver a experiência da forma que mais combina com a sua família.",
      },
      {
        title: "Comece imediatamente.",
        text: "Assim que entrar, seu acesso à Plataforma Digital é liberado para explorar experiências, registrar descobertas e acompanhar sua coleção.",
      },
      {
        title: "Receba novos capítulos em casa.",
        text: "Nas modalidades com envios físicos, novos materiais chegam todos os meses à sua casa, ampliando a jornada de descobertas.",
      },
      {
        title: "Veja sua coleção crescer.",
        text: "Ao longo de seis meses, cada nova descoberta passa a fazer parte de uma coleção única, construída pela própria criança.",
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
        summary:
          "Toda a experiência do Mundo da Teca na plataforma digital. Explore, registre e acompanhe sua jornada desde o primeiro dia.",
      },
      {
        id: "mundo-descobertas" as const,
        name: "Meu Mundo de Descobertas",
        summary:
          "Além do acesso digital, receba todos os meses novos materiais para registrar, criar e ampliar cada descoberta.",
      },
      {
        id: "mundo-tesouros" as const,
        name: "Meu Mundo de Tesouros",
        summary:
          "Além do acesso digital, receba objetos e pequenos tesouros que transformam cada descoberta em uma lembrança para guardar.",
      },
      {
        id: "expedicao-completa" as const,
        name: "Expedição Completa",
        summary:
          "A jornada completa: plataforma digital, materiais de registro e tesouros que chegam à sua casa todos os meses.",
      },
    ],
  },

  finalCta: {
    title: "Ainda em dúvida?",
    lines: [
      "Compare todas as formas de participar e descubra qual combina mais com sua família.",
    ],
    label: "Escolher como participar",
  },
} as const
