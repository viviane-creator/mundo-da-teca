import type { CSSProperties, ReactNode } from "react"
import { tecaFichario } from "../../tecaVisual"
import { FicharioAba } from "./FicharioAba"

export function FicharioDivisoria({
  abaIcon,
  abaLabel,
  children,
  style,
}: {
  abaIcon: string
  abaLabel: string
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <section style={{ ...tecaFichario.divisoria(), ...style }}>
      <FicharioAba variant="capitulo" icon={abaIcon} label={abaLabel} decorative />
      <div style={tecaFichario.divisoriaCorpo()}>{children}</div>
    </section>
  )
}
