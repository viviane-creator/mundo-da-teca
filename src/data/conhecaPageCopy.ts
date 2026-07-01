export const conhecaPageCopy = {
  documentTitle: "Conheça o Mundo da Teca",
  hero: {
    title: "Existe um mundo inteiro esperando para ser descoberto.",
    text:
      "Aqui, a curiosidade das crianças vira descobertas, memórias e coleções que crescem junto com a infância.",
    cta: "Começar a explorar",
    image: "/images/hero-home.webp",
    imageAlt: "Cena de descoberta no Mundo da Teca",
  },
  curiosity: {
    lines: [
      "A infância continua curiosa.",
      "As crianças continuam fazendo perguntas.",
      "Continuam imaginando.",
      "Continuam observando o mundo com encantamento.",
    ],
    closing: "Este é um lugar para preservar esse jeito de descobrir.",
    image: "/images/teca.webp",
    imageAlt: "Teca, anfitriã do Mundo da Teca",
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
      "Escolha uma brincadeira.",
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
        text: "Seis caminhos diferentes para descobrir, criar, imaginar e colecionar.",
        screen: "universos" as const,
        tone: "clubeExplorador" as const,
        featured: true,
      },
      {
        id: "meu-mundo",
        title: "Meu Mundo",
        text: "O lugar onde cada descoberta ganha uma história.",
        screen: "meu-mundo" as const,
        tone: "meuMundo" as const,
        featured: false,
      },
      {
        id: "clube",
        title: "Clube",
        text: "Receba novas experiências e materiais para continuar explorando todos os meses.",
        screen: "clube" as const,
        tone: "clubeColecionador" as const,
        featured: false,
      },
      {
        id: "atelie",
        title: "Ateliê",
        text: "Tesouros, papelaria e objetos para levar o Mundo da Teca para casa.",
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
  closing: {
    title: "Agora você já conhece este mundo.",
    lead:
      "Mas ele só existe de verdade quando uma criança faz uma pergunta, abre um frasco, encontra uma pedra diferente ou guarda uma folha dentro do seu diário.",
    body: "Porque não é apenas um lugar.",
    closing: "É uma maneira de viver a infância.",
  },
  invitation: {
    title: "Sua primeira descoberta começa aqui.",
    ctas: [
      {
        label: "Explorar Universos",
        screen: "universos" as const,
        tone: "clubeExplorador" as const,
      },
      {
        label: "Conhecer o Clube",
        screen: "clube" as const,
        tone: "clubeColecionador" as const,
      },
      {
        label: "Visitar o Ateliê",
        screen: "atelie" as const,
        tone: "atelie" as const,
      },
    ],
  },
  signature: {
    mantra: ["Observe.", "Descubra.", "Colecione."],
    quote:
      "Algumas das lembranças mais bonitas da infância começam com uma simples descoberta.",
    logo: "/logo/logo.webp",
    logoAlt: "Mundo da Teca",
  },
} as const

export const CONHECA_SHARE_PATH = "/conheca"
