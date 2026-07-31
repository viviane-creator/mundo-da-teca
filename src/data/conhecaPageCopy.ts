import { pageCovers } from "./pageCovers"

export const conhecaPageCopy = {
  documentTitle: "Conheça a daTeca",
  hero: {
    text:
      "Experiências criativas, coleções e um clube — pensados para famílias viverem uma jornada de descobertas.",
  },
  curiosity: {
    title: "",
    lines: [] as const,
    closing: "",
  },
  journey: {
    epigraph: "",
    title: "",
    body: "",
    steps: [] as const,
    closing: "",
  },
  howItWorks: {
    title: "",
    subtitle: "",
    steps: [] as const,
  },
  pillars: {
    title: "O ecossistema",
    subtitle: "Tudo foi pensado para funcionar junto.",
    items: [
      {
        id: "plataforma-digital",
        title: "Plataforma Digital",
        text: "O ponto de partida de toda a jornada, com experiências, coleções e conteúdos exclusivos.",
        abaLabel: "exploração",
        cover: pageCovers.universos,
        coverAlt: "Capa dos Universos",
        screen: "universos" as const,
        tone: "clubeExplorador" as const,
        featured: false,
      },
      {
        id: "clube",
        title: "Clube",
        text: "Em breve, um Clube único e simples — uma assinatura, envios mensais e uma coleção que cresce aos poucos.",
        abaLabel: "clube",
        cover: pageCovers.clube,
        coverAlt: "Capa do Clube",
        screen: "home" as const,
        tone: "clubeColecionador" as const,
        featured: true,
      },
      {
        id: "meu-mundo",
        title: "Meu Mundo",
        text: "O espaço onde a criança acompanha sua coleção e registra tudo o que descobriu.",
        abaLabel: "meu mundo",
        cover: pageCovers.meuMundo,
        coverAlt: "Capa do Meu Mundo",
        screen: "meu-mundo" as const,
        tone: "meuMundo" as const,
        featured: false,
      },
      {
        id: "atelie",
        title: "Ateliê",
        text: "Objetos, papelaria e coleções especiais para continuar explorando além da plataforma.",
        abaLabel: "ateliê",
        cover: pageCovers.atelie,
        coverAlt: "Capa do Ateliê",
        screen: "atelie" as const,
        tone: "atelie" as const,
        featured: false,
      },
    ],
  },
  audience: {
    title: "Para quem é?",
    paragraphs: [
      "Para famílias que acreditam que a curiosidade merece tempo e que uma boa pergunta vale mais do que uma resposta pronta.",
      "Famílias em que algumas das melhores memórias da infância nascem quando pais e filhos descobrem algo juntos.",
    ],
  },
  invitation: {
    title: "Sua jornada começa aqui.",
    lines: [
      "Comece pela Caixa Laboratório e descubra um novo jeito de viver a infância em família.",
    ],
    cta: {
      label: "Conhecer a daTeca",
      screen: "home" as const,
      tone: "clubeColecionador" as const,
    },
    secondaryCta: {
      label: "Explorar universos",
      screen: "universos" as const,
      tone: "clubeExplorador" as const,
    },
  },
  signature: {
    logo: "/logo/logo.webp",
    logoAlt: "daTeca",
  },
} as const

export const CONHECA_SHARE_PATH = "/conheca"
