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
      "Acesso digital às experiências, registros e biblioteca.",
    pathCta: "Explorar Online",
    decor: [],
  },
  colecionador: {
    journeyTitle: "Colecionador",
    journeyText:
      "Leve o Mundo da Teca para casa com materiais físicos e conteúdos para continuar explorando longe das telas.",
    pathCta: "Receber em Casa",
    decor: [],
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
    ctaLabel: "Explorar Online",
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
