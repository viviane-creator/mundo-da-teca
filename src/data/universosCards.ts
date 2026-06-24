import { universeCoverPath, type UniverseId } from "./universeAssets"

export type UniversosCard = {
  id: UniverseId
  title: string
  text?: string
  image: string
  target: UniverseId
}

const universosCardSeeds: Array<{
  id: UniverseId
  title: string
  text?: string
  target: UniverseId
}> = [
  {
    id: "laboratorio",
    title: "Laboratório",
    text: "experiências suaves e curiosas",
    target: "laboratorio",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    text: "misturas e descobertas",
    target: "cozinha",
  },
  {
    id: "oficina",
    title: "Oficina",
    text: "coisas feitas com as mãos",
    target: "oficina",
  },
  {
    id: "faz-de-conta",
    title: "Faz de Conta",
    text: "personagens, histórias e mundos inventados",
    target: "faz-de-conta",
  },
  {
    id: "quintal",
    title: "Quintal",
    text: "ar livre, quintal e descobertas lá fora",
    target: "quintal",
  },
  {
    id: "observatorio",
    title: "Observatório",
    text: "céu, curiosidade e olhar atento",
    target: "observatorio",
  },
]

export const universosCards: UniversosCard[] = universosCardSeeds.map(
  (card) => ({
    ...card,
    image: universeCoverPath(card.id),
  }),
)
