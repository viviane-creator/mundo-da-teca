import type { CSSProperties, ReactNode } from "react"
import {
  editorialTypeFromKind,
  EDITORIAL_TYPE_TO_KIND,
  type EditorialArtifactType,
  type EditorialObjectKind,
} from "../../editorial"
import { EditorialArtifact, type EditorialArtifactProps } from "./EditorialArtifact"

export type EditorialObjectProps = {
  kind: EditorialObjectKind
  tilt?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/** @deprecated Preferir EditorialArtifact com prop type */
export function EditorialObject({
  kind,
  tilt,
  className,
  style,
  children,
}: EditorialObjectProps) {
  return (
    <EditorialArtifact type={editorialTypeFromKind(kind)} tilt={tilt} className={className} style={style}>
      {children}
    </EditorialArtifact>
  )
}

export type { EditorialArtifactProps }

export function editorialKindFromType(type: EditorialArtifactType): EditorialObjectKind {
  return EDITORIAL_TYPE_TO_KIND[type]
}

export { editorialTypeFromKind }
