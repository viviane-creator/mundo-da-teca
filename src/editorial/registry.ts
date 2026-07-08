import type { HomeModalityId } from "../data/homeCopy"
import type {
  EditorialArtifactType,
  EditorialObjectDefinition,
  EditorialObjectKind,
} from "./types"
import { EDITORIAL_CONTENT_REGIONS } from "./contentRegions"
import { editorialArtifactUrl } from "./assetUrls"

export const EDITORIAL_OBJECT_REGISTRY: Record<
  EditorialObjectKind,
  EditorialObjectDefinition
> = {
  "ficha-de-campo": {
    kind: "ficha-de-campo",
    type: "ficha-campo",
    label: "ficha de campo",
    pigment: { ink: "#5A6648" },
    composition: {
      tilt: 0.35,
      offsetLeft: "0",
      offsetRight: "0",
    },
    assets: {
      surface: editorialArtifactUrl("ficha-campo.webp"),
      width: 1122,
      height: 1402,
    },
    contentRegion: EDITORIAL_CONTENT_REGIONS["ficha-campo"],
  },
  "pagina-de-fichario": {
    kind: "pagina-de-fichario",
    type: "pagina-fichario",
    label: "página de fichário",
    pigment: { ink: "#8F5E48" },
    composition: {
      tilt: -0.42,
      offsetLeft: "0",
      offsetRight: "0",
    },
    assets: {
      surface: editorialArtifactUrl("pagina-fichario.webp"),
      width: 1122,
      height: 1402,
    },
    contentRegion: EDITORIAL_CONTENT_REGIONS["pagina-fichario"],
  },
  "envelope-de-expedicao": {
    kind: "envelope-de-expedicao",
    type: "envelope-expedicao",
    label: "envelope de expedição",
    pigment: { ink: "#3E5568" },
    composition: {
      tilt: 0.28,
      offsetLeft: "0",
      offsetRight: "0",
    },
    assets: {
      surface: editorialArtifactUrl("envelope-expedicao.webp"),
      width: 1122,
      height: 1402,
    },
    contentRegion: EDITORIAL_CONTENT_REGIONS["envelope-expedicao"],
  },
  "carta-de-expedicao": {
    kind: "carta-de-expedicao",
    type: "carta-oficial",
    label: "carta oficial de expedição",
    pigment: { ink: "#9A7B3C" },
    composition: {
      tilt: -0.22,
      offsetLeft: "0",
      offsetRight: "0",
    },
    assets: {
      surface: editorialArtifactUrl("carta-oficial.webp"),
      width: 1122,
      height: 1402,
    },
    contentRegion: EDITORIAL_CONTENT_REGIONS["carta-oficial"],
  },
}

export const EDITORIAL_TYPE_TO_KIND: Record<
  EditorialArtifactType,
  EditorialObjectKind
> = {
  "ficha-campo": "ficha-de-campo",
  "pagina-fichario": "pagina-de-fichario",
  "envelope-expedicao": "envelope-de-expedicao",
  "carta-oficial": "carta-de-expedicao",
}

export const HOME_MODALITY_TO_EDITORIAL_TYPE: Record<
  HomeModalityId,
  EditorialArtifactType
> = {
  "explorador-digital": "ficha-campo",
  "mundo-descobertas": "pagina-fichario",
  "mundo-tesouros": "envelope-expedicao",
  "expedicao-completa": "carta-oficial",
}

export const HOME_MODALITY_TO_EDITORIAL_KIND: Record<
  HomeModalityId,
  EditorialObjectKind
> = {
  "explorador-digital": "ficha-de-campo",
  "mundo-descobertas": "pagina-de-fichario",
  "mundo-tesouros": "envelope-de-expedicao",
  "expedicao-completa": "carta-de-expedicao",
}

export function getEditorialObjectDefinition(
  kind: EditorialObjectKind,
): EditorialObjectDefinition {
  return EDITORIAL_OBJECT_REGISTRY[kind]
}

export function getEditorialArtifactDefinition(
  type: EditorialArtifactType,
): EditorialObjectDefinition {
  return EDITORIAL_OBJECT_REGISTRY[EDITORIAL_TYPE_TO_KIND[type]]
}

export function editorialKindForModality(
  modalityId: HomeModalityId,
): EditorialObjectKind {
  return HOME_MODALITY_TO_EDITORIAL_KIND[modalityId]
}

export function editorialTypeForModality(
  modalityId: HomeModalityId,
): EditorialArtifactType {
  return HOME_MODALITY_TO_EDITORIAL_TYPE[modalityId]
}

export function editorialLabelForKind(kind: EditorialObjectKind): string {
  return EDITORIAL_OBJECT_REGISTRY[kind].label
}

export function editorialLabelForType(type: EditorialArtifactType): string {
  return getEditorialArtifactDefinition(type).label
}

export function editorialTypeFromKind(kind: EditorialObjectKind): EditorialArtifactType {
  return EDITORIAL_OBJECT_REGISTRY[kind].type
}

export { EDITORIAL_CONTENT_REGIONS, getEditorialContentRegion } from "./contentRegions"
