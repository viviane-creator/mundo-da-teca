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
    icon: "/universos/laboratorio.svg",
    title: "Laboratório",
    phrase: "Onde as coisas se transformam.",
    target: "laboratorio",
  },
  {
    id: "cozinha",
    icon: "/universos/cozinha.svg",
    title: "Cozinha",
    phrase: "Onde receitas viram descobertas.",
    target: "cozinha",
  },
  {
    id: "oficina",
    icon: "/universos/oficina.svg",
    title: "Oficina",
    phrase: "Onde as mãos constroem ideias.",
    target: "oficina",
  },
  {
    id: "faz-de-conta",
    icon: "/universos/faz-de-conta.svg",
    title: "Faz de Conta",
    phrase: "Onde a imaginação ganha forma.",
    target: "faz-de-conta",
  },
  {
    id: "quintal",
    icon: "/universos/quintal.svg",
    title: "Quintal",
    phrase: "Onde o mundo lá fora vira aventura.",
    target: "quintal",
  },
  {
    id: "observatorio",
    icon: "/universos/observatorio.svg",
    title: "Observatório",
    phrase: "Onde a curiosidade encontra o invisível.",
    target: "observatorio",
  },
]

export function getUniverseEmblem(universeId: string): string {
  return (
    homeUniversePortals.find((portal) => portal.id === universeId)?.icon ??
    "/universos/laboratorio.svg"
  )
}

export function getUniverseChapterTitle(universeId: string): string {
  return (
    homeUniversePortals.find((portal) => portal.id === universeId)?.title ??
    universeId
  )
}

export function getUniverseChapterPhrase(universeId: string): string {
  return (
    homeUniversePortals.find((portal) => portal.id === universeId)?.phrase ?? ""
  )
}

export function getUniverseChapterIndex(universeId: string): number {
  const index = homeUniversePortals.findIndex(
    (portal) => portal.id === universeId
  )
  return index === -1 ? 0 : index + 1
}
