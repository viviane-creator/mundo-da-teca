export type MeuMundoPortal = {
  id: string
  title: string
  text: string
  buttonLabel: string
  screen: string
  spine: string
  border: string
}

export const meuMundoSections: MeuMundoPortal[] = [
  {
    id: "diario",
    title: "Diário",
    text: "Um lugar para escrever, desenhar e registrar aquilo que chamou sua atenção.",
    buttonLabel: "Abrir Diário",
    screen: "diario",
    spine: "#7E96B8",
    border: "rgba(126, 150, 184, 0.42)",
  },
  {
    id: "colecoes",
    title: "Minhas Descobertas",
    text: "As experiências que você realizou e decidiu guardar.",
    buttonLabel: "Abrir Minhas Descobertas",
    screen: "colecoes",
    spine: "#8C9770",
    border: "rgba(140, 151, 112, 0.42)",
  },
  {
    id: "biblioteca",
    title: "Biblioteca",
    text: "Materiais para imprimir e continuar explorando.",
    buttonLabel: "Abrir Biblioteca",
    screen: "biblioteca",
    spine: "#C98A6B",
    border: "rgba(201, 138, 107, 0.42)",
  },
]
