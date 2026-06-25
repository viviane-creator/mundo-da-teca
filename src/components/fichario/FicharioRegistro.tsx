import type { CSSProperties } from "react"
import { tecaFichario } from "../../tecaVisual"

export function FicharioRegistro({
  fields,
  style,
  labelColor,
}: {
  fields: ReadonlyArray<{ label: string; value: string }>
  style?: CSSProperties
  labelColor?: string
}) {
  return (
    <div style={{ ...tecaFichario.registro(), ...style }}>
      {fields.map((field) => (
        <p key={field.label} style={tecaFichario.registroRow()}>
          <span
            style={{
              ...tecaFichario.registroLabel(),
              ...(labelColor ? { color: labelColor, opacity: 0.82 } : {}),
            }}
          >
            {field.label}
          </span>
          <span style={tecaFichario.registroValor()}>{field.value}</span>
        </p>
      ))}
    </div>
  )
}
