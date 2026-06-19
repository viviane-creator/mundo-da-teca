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
    icon: string
    journeyTitle: string
    journeyPoetic: string
    pathCta: string
  }
> = {
  explorador: {
    icon: "🌿",
    journeyTitle: "Explorar Digitalmente",
    journeyPoetic: "Universos, experiências e Meu Mundo — pelo caminho digital.",
    pathCta: "Seguir pelo digital",
  },
  colecionador: {
    icon: "📦",
    journeyTitle: "Receber em Casa",
    journeyPoetic:
      "Materiais e tesouros que chegam devagar, para guardar com as mãos.",
    pathCta: "Seguir com o físico",
  },
}

export const clubParticipationPlans: ParticipationPlan[] = [
  {
    id: "explorador",
    title: "Plano Explorador",
    benefits: [
      "plano digital",
      "Universos, experiências e Meu Mundo digital",
      "Diário, Coleções e Biblioteca de materiais para imprimir",
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
