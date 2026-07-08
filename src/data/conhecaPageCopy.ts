import { pageCovers } from "./pageCovers"

export const conhecaPageCopy = {
  documentTitle: "Conheça o Mundo da Teca",
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
        text: "Ao longo de aproximadamente seis meses, cada descoberta passa a fazer parte da história da criança.",
      },
    ],
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
        text: "Quatro maneiras de participar, com acesso digital imediato e modalidades que incluem envios físicos mensais.",
        abaLabel: "clube",
        cover: pageCovers.clube,
        coverAlt: "Capa do Clube",
        screen: "clube" as const,
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
      "Escolha a forma de participar e descubra um novo jeito de viver a infância em família.",
    ],
    cta: {
      label: "Conhecer o Clube",
      screen: "clube" as const,
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
    logoAlt: "Mundo da Teca",
  },
} as const

export const CONHECA_SHARE_PATH = "/conheca"
