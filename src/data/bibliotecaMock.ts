export type BibliotecaShelfGlyph =
  | "paginas"
  | "fichas"
  | "caderno"
  | "colecoes"

export const bibliotecaShelfItems: {
  id: string
  glyph: BibliotecaShelfGlyph
  etiqueta: string
  title: string
  text: string
}[] = [
  {
    id: "paginas",
    glyph: "paginas",
    etiqueta: "PAG · 01",
    title: "Páginas para Explorar",
    text: "Folhas para observar, colorir, registrar e continuar descobrindo.",
  },
  {
    id: "fichas",
    glyph: "fichas",
    etiqueta: "FCH · 02",
    title: "Fichas de Descoberta",
    text: "Pequenos registros para guardar observações e experiências.",
  },
  {
    id: "caderno",
    glyph: "caderno",
    etiqueta: "CAM · 03",
    title: "Caderno de Campo",
    text: "Folhas livres para desenhar, escrever e colecionar ideias.",
  },
  {
    id: "colecoes",
    glyph: "colecoes",
    etiqueta: "COL · 04",
    title: "Coleções para Imprimir",
    text: "Materiais especiais para acompanhar suas coleções.",
  },
]
