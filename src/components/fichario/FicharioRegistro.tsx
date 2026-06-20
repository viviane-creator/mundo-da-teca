import type { CSSProperties } from "react"
import { tecaFichario } from "../../tecaVisual"

export function FicharioRegistro({
  fields,
  style,
}: {
  fields: ReadonlyArray<{ label: string; value: string }>
  style?: CSSProperties
}) {
  return (
    <div style={{ ...tecaFichario.registro(), ...style }}>
      {fields.map((field) => (
        <p key={field.label} style={tecaFichario.registroRow()}>
          <span style={tecaFichario.registroLabel()}>{field.label}</span>
          <span style={tecaFichario.registroValor()}>{field.value}</span>
        </p>
      ))}
    </div>
  )
}
