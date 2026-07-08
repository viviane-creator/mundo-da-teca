import type { CSSProperties } from "react"
import type { EditorialArtifactType } from "../editorial"
import { getEditorialArtifactDefinition } from "../editorial"
import { tecaFont } from "../tecaVisual"

const bodyInk = "rgba(79, 67, 54, 0.88)"

export function editorialDocumentEyebrowStyle(): CSSProperties {
  return {
    ...tecaFont.body,
    fontSize: "9px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: bodyInk,
    margin: 0,
  }
}

export function editorialDocumentLabelStyle(type: EditorialArtifactType): CSSProperties {
  const { pigment } = getEditorialArtifactDefinition(type)

  return {
    ...tecaFont.body,
    fontSize: "9px",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: pigment.ink,
    margin: 0,
    opacity: 0.9,
  }
}

export function editorialDocumentTitleStyle(type: EditorialArtifactType): CSSProperties {
  const { pigment } = getEditorialArtifactDefinition(type)

  return {
    ...tecaFont.portalTitle,
    fontSize: "clamp(20px, 5.2vw, 24px)",
    lineHeight: 1.06,
    margin: 0,
    maxWidth: "13ch",
    color: pigment.ink,
    opacity: 0.92,
  }
}

export function editorialDocumentDescriptionStyle(): CSSProperties {
  return {
    ...tecaFont.poetic,
    fontSize: "clamp(13px, 3.4vw, 15px)",
    lineHeight: 1.5,
    margin: 0,
    maxWidth: "30ch",
    color: "#4f4336",
    opacity: 0.88,
  }
}

export function editorialDocumentCtaStyle(): CSSProperties {
  return {
    ...tecaFont.poetic,
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.02em",
    color: "#4f4336",
    opacity: 0.88,
    cursor: "pointer",
    margin: 0,
  }
}

export const editorialCollectionStackStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "28px",
  width: "100%",
}
