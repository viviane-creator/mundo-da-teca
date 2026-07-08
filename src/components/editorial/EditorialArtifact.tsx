import type { CSSProperties, ReactNode } from "react"
import {
  getEditorialArtifactDefinition,
  type EditorialArtifactType,
} from "../../editorial"
import { tecaTilt } from "../../tecaVisual"

export type EditorialArtifactProps = {
  type: EditorialArtifactType
  tilt?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

function editorialArtifactClassName(type: EditorialArtifactType, extra?: string) {
  return ["editorial-artifact", `editorial-artifact--${type}`, extra]
    .filter(Boolean)
    .join(" ")
}

/** Peça editorial com WebP oficial — imagem isolada ou conteúdo diagramado (legado) */
export function EditorialArtifact({
  type,
  tilt,
  className,
  style,
  children,
}: EditorialArtifactProps) {
  const definition = getEditorialArtifactDefinition(type)
  const { assets, composition, contentRegion } = definition

  const rootStyle: CSSProperties = {
    ...tecaTilt(tilt ?? composition.tilt),
    marginLeft: composition.offsetLeft,
    marginRight: composition.offsetRight,
    ["--eo-ink" as string]: definition.pigment.ink,
    ...style,
  }

  const regionStyle: CSSProperties = {
    top: contentRegion.top,
    left: contentRegion.left,
    width: contentRegion.width,
    height: contentRegion.height,
  }

  return (
    <article
      className={editorialArtifactClassName(type, className)}
      data-editorial-type={type}
      style={rootStyle}
    >
      <div className="editorial-artifact__frame">
        <img
          key={assets.surface}
          className="editorial-artifact__surface"
          src={assets.surface}
          alt=""
          width={assets.width}
          height={assets.height}
          loading="lazy"
          decoding="async"
        />

        {children ? (
          <div className="editorial-artifact__region" style={regionStyle}>
            <div className="editorial-document__block">{children}</div>
          </div>
        ) : null}
      </div>
    </article>
  )
}
