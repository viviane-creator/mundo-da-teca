export type ParticipationPlanId = "explorador" | "colecionador"

export type ParticipationPlan = {
  id: ParticipationPlanId
  title: string
  benefits: string[]
  ctaLabel: string
}

export const whatIsMundoDaTeca =
  "Mundo da Teca é uma coleção de experiências criativas para crianças explorarem o mundo real, registrarem suas descobertas e construírem sua própria coleção ao longo do tempo."

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
      "fichário físico",
      "novas páginas mensais",
      "materiais para experiências",
      "coleção física",
    ],
    ctaLabel: "Quero ser Colecionador",
  },
]

export const clubParticipationPlans: ParticipationPlan[] = [
  {
    id: "explorador",
    title: "Explorador",
    benefits: [
      "acesso digital",
      "experiências",
      "6 universos",
      "coleção digital",
    ],
    ctaLabel: "Quero ser Explorador",
  },
  {
    id: "colecionador",
    title: "Colecionador",
    benefits: [
      "tudo do Explorador",
      "fichário físico",
      "novas páginas para a coleção",
      "materiais para experiências",
      "adesivos, selos e pequenos tesouros",
    ],
    ctaLabel: "Quero ser Colecionador",
  },
]

export const collectionConceptNote =
  "a coleção do Mundo da Teca cresce devagar: experiências vividas, páginas guardadas e pequenas memórias construídas com as mãos e com o tempo."
