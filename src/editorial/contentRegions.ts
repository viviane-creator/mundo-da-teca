/** Diagramação do conteúdo sobre cada artefato — offsets únicos por tipo */
import type { EditorialArtifactType, EditorialContentRegion } from "./types"

export const EDITORIAL_CONTENT_REGIONS: Record<
  EditorialArtifactType,
  EditorialContentRegion
> = {
  /** Área livre à direita da lombada; evita clipe, selo e ilustração botânica */
  "ficha-campo": {
    top: "23%",
    left: "19%",
    width: "40%",
    height: "38%",
  },
  /** Páginas pautadas centrais; evita aba, furos e rodapé botânico */
  "pagina-fichario": {
    top: "17%",
    left: "15%",
    width: "38%",
    height: "42%",
  },
  /** Miolo do envelope; evita aba, cordão, etiqueta e selo */
  "envelope-expedicao": {
    top: "37%",
    left: "11%",
    width: "58%",
    height: "34%",
  },
  /** Corpo da carta; evita carimbo, timbre e rodapé decorativo */
  "carta-oficial": {
    top: "27%",
    left: "10%",
    width: "62%",
    height: "38%",
  },
}

export function getEditorialContentRegion(
  type: EditorialArtifactType,
): EditorialContentRegion {
  return EDITORIAL_CONTENT_REGIONS[type]
}
