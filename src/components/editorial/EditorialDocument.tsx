import type { ReactNode } from "react"
import type { EditorialArtifactType, EditorialObjectKind } from "../../editorial"
import {
  editorialLabelForKind,
  editorialLabelForType,
  editorialTypeFromKind,
} from "../../editorial"
import { EditorialArtifact } from "./EditorialArtifact"
import {
  editorialDocumentCtaStyle,
  editorialDocumentDescriptionStyle,
  editorialDocumentEyebrowStyle,
  editorialDocumentLabelStyle,
  editorialDocumentTitleStyle,
} from "../../styles/editorialDocumentStyles"

export type EditorialDocumentCta = {
  label: string
  onClick: () => void
}

export type EditorialDocumentProps = {
  type?: EditorialArtifactType
  /** @deprecated Use type */
  kind?: EditorialObjectKind
  eyebrow?: string
  documentLabel?: string
  title: string
  description: string
  cta?: EditorialDocumentCta
  children?: ReactNode
  className?: string
}

export function EditorialDocument({
  type,
  kind,
  eyebrow,
  documentLabel,
  title,
  description,
  cta,
  children,
  className,
}: EditorialDocumentProps) {
  const resolvedType = type ?? (kind ? editorialTypeFromKind(kind) : undefined)

  if (!resolvedType) {
    throw new Error("EditorialDocument requer type ou kind.")
  }

  const label =
    documentLabel ??
    (kind ? editorialLabelForKind(kind) : editorialLabelForType(resolvedType))

  return (
    <EditorialArtifact type={resolvedType} className={className}>
      {eyebrow ? (
        <p className="editorial-document__eyebrow" style={editorialDocumentEyebrowStyle()}>
          {eyebrow}
        </p>
      ) : null}

      <p className="editorial-document__label" style={editorialDocumentLabelStyle(resolvedType)}>
        {label}
      </p>

      <h3 className="editorial-document__title" style={editorialDocumentTitleStyle(resolvedType)}>
        {title}
      </h3>

      <p className="editorial-document__description" style={editorialDocumentDescriptionStyle()}>
        {description}
      </p>

      {children}

      {cta ? (
        <button
          type="button"
          className="editorial-document__cta"
          style={editorialDocumentCtaStyle()}
          onClick={cta.onClick}
        >
          {cta.label}
        </button>
      ) : null}
    </EditorialArtifact>
  )
}
