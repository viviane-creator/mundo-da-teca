import type { CSSProperties, ReactNode } from "react"
import type { FicharioChapterId } from "../../tecaVisual"
import { tecaFichario } from "../../tecaVisual"
import { FicharioAba } from "./FicharioAba"

export function FicharioDivisoria({
  chapter,
  children,
  style,
}: {
  chapter: FicharioChapterId
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <section style={{ ...tecaFichario.divisoria(), ...style }}>
      <FicharioAba variant="capitulo" chapter={chapter} decorative />
      <div style={tecaFichario.divisoriaCorpo()}>{children}</div>
    </section>
  )
}
