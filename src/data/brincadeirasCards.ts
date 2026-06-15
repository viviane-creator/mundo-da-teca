export type BrincadeirasCard = {
  id: string
  title: string
  text?: string
  image: string
  target: string
}

export const brincadeirasCards: BrincadeirasCard[] = [
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
    target: "arte",
  },
  {
    id: "brincar-na-rua",
    title: "Brincar na Rua",
    text: "calçada, vento e brincadeiras lá fora",
    image: "/images/universos/natureza-capa.png",
    target: "natureza",
  },
  {
    id: "dias-de-chuva",
    title: "Dias de Chuva",
    text: "janela, chuva e tardes de dentro",
    image: "/images/universos/movimento-capa.png",
    target: "movimento",
  },
]
