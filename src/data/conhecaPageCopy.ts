export const conhecaPageCopy = {
  documentTitle: "Conheça o Mundo da Teca",
  hero: {
    title: "Existe um mundo inteiro esperando para ser descoberto.",
    text:
      "Aqui, a curiosidade das crianças vira descobertas, memórias e coleções que crescem junto com a infância.",
    image: "/images/hero-home.webp",
    imageAlt: "Cena de descoberta no Mundo da Teca",
  },
  curiosity: {
    title: "Manifesto",
    lines: [
      "A infância continua curiosa.",
      "As crianças continuam fazendo perguntas.",
      "Continuam imaginando.",
      "Continuam observando o mundo com encantamento.",
    ],
    closing: "Este é um lugar para preservar esse jeito de descobrir.",
  },
  journey: {
    epigraph: "Não são apenas atividades.",
    title: "Mais do que brincadeiras.",
    body: "Cada experiência faz parte de uma jornada.",
    steps: ["A criança brinca.", "Descobre.", "Registra.", "Coleciona."],
    closing:
      "E, pouco a pouco, constrói uma coleção única da própria infância.",
    image: "/images/fichario-open.webp",
    imageAlt: "Fichário de descobertas aberto",
  },
  howItWorks: {
    title: "Como funciona?",
    steps: [
      "Escolha um universo.",
      "Escolha uma experiência.",
      "Brinque.",
      "Registre.",
      "Colecione.",
      "Recomece.",
    ],
  },
  pillars: {
    title: "Escolha por onde começar.",
    subtitle:
      "Cada caminho revela uma parte diferente do Mundo da Teca.",
    items: [
      {
        id: "universos",
        title: "Universos",
        text: "Seis caminhos para descobrir, criar, imaginar e colecionar com presença.",
        screen: "universos" as const,
        tone: "clubeExplorador" as const,
        featured: true,
      },
      {
        id: "meu-mundo",
        title: "Meu Mundo",
        text: "O lugar onde cada descoberta vira capítulo da sua própria história.",
        screen: "meu-mundo" as const,
        tone: "meuMundo" as const,
        featured: false,
      },
      {
        id: "clube",
        title: "Clube",
        text: "Novas experiências e materiais para manter a curiosidade viva todos os meses.",
        screen: "clube" as const,
        tone: "clubeColecionador" as const,
        featured: false,
      },
      {
        id: "atelie",
        title: "Ateliê",
        text: "Tesouros e objetos para levar a experiência da descoberta para casa.",
        screen: "atelie" as const,
        tone: "atelie" as const,
        featured: false,
      },
    ],
  },
  audience: {
    opener: "Não importa se são cinco minutos ou uma tarde inteira.",
    title: "Para quem é?",
    text: "Famílias que acreditam que a infância merece tempo para observar, experimentar, imaginar e colecionar memórias.",
    closing: "O importante é viver a descoberta.",
  },
  philosophy: {
    title: "Nossa filosofia.",
    lead: "Aqui, cada descoberta pode virar uma lembrança.",
    principles: [
      "A curiosidade vem antes da resposta.",
      "A experiência vem antes da explicação.",
      "A descoberta vem antes do conteúdo.",
      "Cada criança constrói sua própria coleção.",
    ],
  },
  invitation: {
    title: "Sua jornada começa aqui.",
    lines: [
      "O Mundo da Teca não termina aqui.",
      "Ele começa quando uma criança faz sua primeira descoberta.",
    ],
    cta: {
      label: "Começar a explorar",
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
