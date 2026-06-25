export type ParticipationPlanId = "explorador" | "colecionador"

export type ParticipationPlan = {
  id: ParticipationPlanId
  title: string
  benefits: string[]
  ctaLabel: string
}

export const whatIsMundoDaTeca = [
  "Mundo da Teca é um ecossistema de descobertas para crianças curiosas.",
  "Aqui, cada experiência convida a observar, experimentar, registrar e colecionar o mundo de um jeito mais lento, criativo e encantado.",
] as const

export const participationPlans: ParticipationPlan[] = [
  {
    id: "explorador",
    title: "Explorador",
    benefits: [
      "acesso digital",
      "experiências",
      "coleção digital",
    ],
    ctaLabel: "Quero ser Explorador",
  },
  {
    id: "colecionador",
    title: "Colecionador",
    benefits: [
      "experiência física + digital",
      "caderno da coleção",
      "novas páginas mensais",
      "materiais para experiências",
      "coleção física",
    ],
    ctaLabel: "Quero ser Colecionador",
  },
]

export const homeParticipationJourneys: Record<
  ParticipationPlanId,
  {
    journeyTitle: string
    journeyText: string
    pathCta: string
    decor: {
      src: string
      w: number
      h: number
      top?: string
      bottom?: string
      left?: string
      right?: string
      rotate: number
    }[]
  }
> = {
  explorador: {
    journeyTitle: "Explorador",
    journeyText:
      "Acesse experiências, registre descobertas e monte sua coleção digital.",
    pathCta: "Explorar online",
    decor: [
      {
        src: "/cards/descobertas/diario.png",
        w: 46,
        h: 34,
        top: "6%",
        left: "5%",
        rotate: -11,
      },
      {
        src: "/cards/descobertas/colecoes.png",
        w: 40,
        h: 36,
        bottom: "16%",
        right: "6%",
        rotate: 9,
      },
      {
        src: "/cards/descobertas/descoberta-do-dia.png",
        w: 34,
        h: 34,
        top: "18%",
        right: "8%",
        rotate: 6,
      },
    ],
  },
  colecionador: {
    journeyTitle: "Colecionador",
    journeyText:
      "Receba páginas, materiais e tesouros para continuar explorando em casa.",
    pathCta: "Receber em casa",
    decor: [
      {
        src: "/cards/clube/correio.png",
        w: 50,
        h: 38,
        top: "8%",
        right: "5%",
        rotate: 7,
      },
      {
        src: "/cards/atelie/pacotinho-folhas.png",
        w: 44,
        h: 44,
        bottom: "12%",
        left: "4%",
        rotate: -9,
      },
      {
        src: "/cards/atelie/papel-de-carta.png",
        w: 42,
        h: 32,
        top: "20%",
        left: "7%",
        rotate: -13,
      },
    ],
  },
}

export const clubParticipationPlans: ParticipationPlan[] = [
  {
    id: "explorador",
    title: "Plano Explorador",
    benefits: [
      "plano digital",
      "Universos, experiências e Meu Mundo digital",
      "Diário, Minhas Descobertas e Biblioteca de materiais para imprimir",
    ],
    ctaLabel: "Começar pelo digital",
  },
  {
    id: "colecionador",
    title: "Plano Colecionador",
    benefits: [
      "plano físico + digital",
      "tudo do Explorador",
      "envio do Meu Mundo de Descobertas em casa",
      "materiais, páginas, fichas, colecionáveis e pequenos tesouros",
    ],
    ctaLabel: "Receber em casa",
  },
]
