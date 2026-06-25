export const bibliotecaAtlas = {
  spine: "#7E93A8",
  accent: "#879BAE",
  deep: "#73899E",
  wash: "rgba(126, 147, 168, 0.1)",
  line: "rgba(126, 147, 168, 0.26)",
} as const

export type BibliotecaCategory =
  | "Para imprimir"
  | "Novo"
  | "Coleção"
  | "Laboratório"
  | "Cozinha"
  | "Faz de Conta"
  | "Observatório"

export const bibliotecaCategoryTone: Record<
  BibliotecaCategory,
  { background: string; color: string; border: string }
> = {
  "Para imprimir": {
    background: "rgba(126, 147, 168, 0.14)",
    color: "#5E7290",
    border: "rgba(126, 147, 168, 0.34)",
  },
  Novo: {
    background: "rgba(196, 165, 141, 0.18)",
    color: "#8A6F58",
    border: "rgba(196, 165, 141, 0.38)",
  },
  Coleção: {
    background: "rgba(140, 151, 112, 0.16)",
    color: "#6E7857",
    border: "rgba(140, 151, 112, 0.36)",
  },
  Laboratório: {
    background: "rgba(126, 150, 184, 0.14)",
    color: "#627A96",
    border: "rgba(126, 150, 184, 0.32)",
  },
  Cozinha: {
    background: "rgba(201, 138, 107, 0.14)",
    color: "#9A6B52",
    border: "rgba(201, 138, 107, 0.34)",
  },
  "Faz de Conta": {
    background: "rgba(184, 155, 201, 0.14)",
    color: "#7D6890",
    border: "rgba(184, 155, 201, 0.32)",
  },
  Observatório: {
    background: "rgba(115, 137, 158, 0.14)",
    color: "#5C7084",
    border: "rgba(115, 137, 158, 0.34)",
  },
}
