import type { BibliotecaCategory } from "./bibliotecaAtlas"

export type BibliotecaShelfGlyph =
  | "paginas"
  | "fichas"
  | "caderno"
  | "colecoes"

export const bibliotecaShelfItems: {
  id: string
  glyph: BibliotecaShelfGlyph
  category: BibliotecaCategory
  title: string
  text: string
}[] = [
  {
    id: "paginas",
    glyph: "paginas",
    category: "Para imprimir",
    title: "Páginas para Explorar",
    text: "Folhas para observar, colorir, registrar e continuar descobrindo.",
  },
  {
    id: "fichas",
    glyph: "fichas",
    category: "Novo",
    title: "Fichas de Descoberta",
    text: "Pequenos registros para guardar observações e experiências.",
  },
  {
    id: "caderno",
    glyph: "caderno",
    category: "Laboratório",
    title: "Caderno de Campo",
    text: "Folhas livres para desenhar, escrever e colecionar ideias.",
  },
  {
    id: "colecoes",
    glyph: "colecoes",
    category: "Coleção",
    title: "Coleções para Imprimir",
    text: "Materiais especiais para acompanhar suas coleções.",
  },
]
