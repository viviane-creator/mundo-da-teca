import type { PlayUniverseId } from "../playData"

export type UniversoCard = {
  id: string
  title: string
  text?: string
  image: string
  target: PlayUniverseId
}

export const universosCards: UniversoCard[] = [
  {
    id: "laboratorio",
    title: "Laboratório",
    text: "experiências suaves e curiosas",
    image: "/images/universos/laboratorio-capa.png",
    target: "laboratorio",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    text: "misturas e descobertas",
    image: "/images/universos/cozinha-capa.png",
    target: "cozinha",
  },
  {
    id: "oficina",
    title: "Oficina",
    text: "coisas feitas com as mãos",
    image: "/images/universos/oficina-capa.png",
    target: "oficina",
  },
  {
    id: "faz-de-conta",
    title: "Faz de Conta",
    text: "personagens, histórias e mundos inventados",
    image: "/images/universos/arte-capa.png",
    target: "faz-de-conta",
  },
  {
    id: "quintal",
    title: "Quintal",
    text: "calçada, vento e descobertas lá fora",
    image: "/images/universos/natureza-capa.png",
    target: "quintal",
  },
  {
    id: "observatorio",
    title: "Observatório",
    text: "céu, janela e perguntas curiosas",
    image: "/images/universos/movimento-capa.png",
    target: "observatorio",
  },
]
