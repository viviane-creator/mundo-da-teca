import type { CSSProperties } from "react"
import { tecaFichario } from "../../tecaVisual"

const discoveryRegistroRow: CSSProperties = {
  ...tecaFichario.registroRow(),
  fontSize: "13px",
  lineHeight: 1.45,
}

const discoveryRegistroLabel: CSSProperties = {
  ...tecaFichario.registroLabel(),
  fontSize: "12px",
  minWidth: "78px",
}

const discoveryRegistroValor: CSSProperties = {
  ...tecaFichario.registroValor(),
  fontSize: "13px",
  lineHeight: 1.45,
}

export function FicharioRegistro({
  fields,
  style,
  labelColor,
  variant = "default",
}: {
  fields: ReadonlyArray<{ label: string; value: string }>
  style?: CSSProperties
  labelColor?: string
  variant?: "default" | "discovery"
}) {
  const rowStyle =
    variant === "discovery" ? discoveryRegistroRow : tecaFichario.registroRow()
  const labelStyle =
    variant === "discovery"
      ? discoveryRegistroLabel
      : tecaFichario.registroLabel()
  const valueStyle =
    variant === "discovery"
      ? discoveryRegistroValor
      : tecaFichario.registroValor()

  return (
    <div style={{ ...tecaFichario.registro(), ...style }}>
      {fields.map((field) => (
        <p key={field.label} style={rowStyle}>
          <span
            style={{
              ...labelStyle,
              ...(labelColor ? { color: labelColor, opacity: 0.82 } : {}),
            }}
          >
            {field.label}
          </span>
          <span style={valueStyle}>{field.value}</span>
        </p>
      ))}
    </div>
  )
}
