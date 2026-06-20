export type MeuMundoSection = {
  id: string
  icon: string
  title: string
  text: string
  buttonLabel: string
  image: string
  screen: string
  stats?: { label: string; value: string }[]
}

export const meuMundoSections: MeuMundoSection[] = [
  {
    id: "diario",
    icon: "📖",
    title: "Diário",
    text: "O lugar onde observações viram fichas de memória.",
    buttonLabel: "Abrir Diário",
    image: "/cards/descobertas/diario.png",
    screen: "diario",
  },
  {
    id: "colecoes",
    icon: "📁",
    title: "Coleções",
    text: "O lugar onde as fichas das descobertas ficam guardadas.",
    buttonLabel: "Ver Coleções",
    image: "/cards/descobertas/colecoes.png",
    screen: "colecoes",
    stats: [
      { label: "fichas guardadas", value: "12" },
      { label: "coleções iniciadas", value: "3" },
      { label: "descobertas registradas", value: "18" },
    ],
  },
  {
    id: "biblioteca",
    icon: "📚",
    title: "Biblioteca",
    text: "Prateleira de materiais para imprimir.",
    buttonLabel: "Abrir Biblioteca",
    image: "/cards/descobertas/tesouros.png",
    screen: "biblioteca",
  },
]
