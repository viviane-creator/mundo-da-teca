import type { EditorialArtifactType } from "../../editorial"
import { getEditorialArtifactDefinition } from "../../editorial"
import { EditorialArtifact } from "./EditorialArtifact"

export type EditorialModalityProps = {
  type: EditorialArtifactType
  title: string
  summary: string
  includes: string
  ctaLabel: string
  onCta: () => void
  className?: string
}

/** Artefato ilustrativo + bloco de conteúdo abaixo — sem texto sobre o WebP */
export function EditorialModality({
  type,
  title,
  summary,
  includes,
  ctaLabel,
  onCta,
  className,
}: EditorialModalityProps) {
  const { pigment } = getEditorialArtifactDefinition(type)

  return (
    <article
      className={["editorial-modality", className].filter(Boolean).join(" ")}
      data-editorial-type={type}
    >
      <EditorialArtifact type={type} className="editorial-modality__artifact" />

      <div className="editorial-modality__body">
        <h3 className="editorial-modality__title" style={{ color: pigment.ink }}>
          {title}
        </h3>
        <p className="editorial-modality__summary">{summary}</p>
        <p className="editorial-modality__includes">{includes}</p>
        <button type="button" className="editorial-modality__cta" onClick={onCta}>
          {ctaLabel}
        </button>
      </div>
    </article>
  )
}
