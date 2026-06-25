export type MeuMundoSection = {
  id: string
  icon: string
  title: string
  text: string
  buttonLabel: string
  screen: string
}

export const meuMundoSections: MeuMundoSection[] = [
  {
    id: "diario",
    icon: "📖",
    title: "Diário de Descobertas",
    text: "Onde observações viram memórias.",
    buttonLabel: "Abrir Diário de Descobertas",
    screen: "diario",
  },
  {
    id: "colecoes",
    icon: "📁",
    title: "Coleções",
    text: "Onde suas descobertas encontram um lugar para morar.",
    buttonLabel: "Abrir Coleções",
    screen: "colecoes",
  },
  {
    id: "biblioteca",
    icon: "📚",
    title: "Biblioteca",
    text: "Materiais para imprimir e continuar explorando.",
    buttonLabel: "Abrir Biblioteca",
    screen: "biblioteca",
  },
]
