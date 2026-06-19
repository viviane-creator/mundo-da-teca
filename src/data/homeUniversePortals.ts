export type HomeUniversePortal = {
  id: string
  icon: string
  title: string
  phrase: string
  target: string
}

export const homeUniversePortals: HomeUniversePortal[] = [
  {
    id: "laboratorio",
    icon: "⚗️",
    title: "Laboratório",
    phrase: "Onde as coisas se transformam.",
    target: "laboratorio",
  },
  {
    id: "cozinha",
    icon: "🥄",
    title: "Cozinha",
    phrase: "Onde receitas viram descobertas.",
    target: "cozinha",
  },
  {
    id: "oficina",
    icon: "🔧",
    title: "Oficina",
    phrase: "Onde as mãos constroem ideias.",
    target: "oficina",
  },
  {
    id: "faz-de-conta",
    icon: "🗝️",
    title: "Faz de Conta",
    phrase: "Onde a imaginação ganha forma.",
    target: "faz-de-conta",
  },
  {
    id: "quintal",
    icon: "🪁",
    title: "Quintal",
    phrase: "Onde o mundo lá fora vira aventura.",
    target: "quintal",
  },
  {
    id: "observatorio",
    icon: "🧭",
    title: "Observatório",
    phrase: "Onde a curiosidade encontra o invisível.",
    target: "observatorio",
  },
]

export function getUniverseEmblem(universeId: string): string {
  return (
    homeUniversePortals.find((portal) => portal.id === universeId)?.icon ?? "✦"
  )
}
