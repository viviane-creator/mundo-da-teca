import type { EditorialDecorItem } from "../components/EditorialDecor"
import { tecaEditorialArt as art } from "./tecaEditorialArt"

export const editorialDecorManifesto: EditorialDecorItem[] = [
  {
    src: art.contracapaDescobertas,
    centered: true,
    top: "48%",
    left: "50%",
    width: "300px",
    opacity: 0.07,
    rotate: -3,
  },
  {
    src: art.diario,
    top: "-8%",
    right: "-6%",
    width: "130px",
    opacity: 0.09,
    rotate: 8,
  },
]

export const editorialDecorMapCorners: EditorialDecorItem[] = [
  {
    src: art.colecoes,
    bottom: "-10%",
    left: "-8%",
    width: "190px",
    opacity: 0.08,
    rotate: -14,
  },
  {
    src: art.contracapaUniversos,
    top: "-6%",
    right: "-10%",
    width: "210px",
    opacity: 0.06,
    rotate: 6,
  },
  {
    src: art.tesouros,
    bottom: "4%",
    right: "-4%",
    width: "150px",
    opacity: 0.07,
    rotate: 10,
  },
]

export const editorialDecorAtelierTop: EditorialDecorItem[] = [
  {
    src: art.contracapaAtelie,
    centered: true,
    top: "38%",
    left: "50%",
    width: "280px",
    opacity: 0.08,
    rotate: -2,
  },
  {
    src: art.tesouros,
    bottom: "-12%",
    left: "-10%",
    width: "170px",
    opacity: 0.07,
    rotate: -8,
  },
  {
    src: art.colecoes,
    top: "8%",
    right: "-8%",
    width: "140px",
    opacity: 0.06,
    rotate: 12,
  },
]

export const editorialDecorMeuMundoHero: EditorialDecorItem[] = [
  {
    src: art.diario,
    centered: true,
    top: "42%",
    left: "50%",
    width: "250px",
    opacity: 0.08,
    rotate: 2,
  },
  {
    src: art.colecoes,
    bottom: "-6%",
    left: "-6%",
    width: "160px",
    opacity: 0.07,
    rotate: -10,
  },
]

export const editorialDecorMeuMundoChoices: EditorialDecorItem[] = [
  {
    src: art.contracapaDescobertas,
    top: "-14%",
    right: "-12%",
    width: "200px",
    opacity: 0.06,
    rotate: 5,
  },
  {
    src: art.tesouros,
    bottom: "-8%",
    left: "-6%",
    width: "150px",
    opacity: 0.07,
    rotate: -6,
  },
]
