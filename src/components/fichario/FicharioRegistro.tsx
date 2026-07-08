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

const discoveryRegistroRowLarge: CSSProperties = {
  ...discoveryRegistroRow,
  fontSize: "26px",
  lineHeight: 1.45,
  gap: "16px",
}

const discoveryRegistroLabelLarge: CSSProperties = {
  ...discoveryRegistroLabel,
  fontSize: "24px",
  minWidth: "156px",
  letterSpacing: "2.4px",
}

const discoveryRegistroValorLarge: CSSProperties = {
  ...discoveryRegistroValor,
  fontSize: "26px",
  lineHeight: 1.45,
}

export function FicharioRegistro({
  fields,
  style,
  labelColor,
  variant = "default",
  enlarged = false,
}: {
  fields: ReadonlyArray<{ label: string; value: string }>
  style?: CSSProperties
  labelColor?: string
  variant?: "default" | "discovery"
  enlarged?: boolean
}) {
  const rowStyle =
    variant === "discovery"
      ? enlarged
        ? discoveryRegistroRowLarge
        : discoveryRegistroRow
      : tecaFichario.registroRow()
  const labelStyle =
    variant === "discovery"
      ? enlarged
        ? discoveryRegistroLabelLarge
        : discoveryRegistroLabel
      : tecaFichario.registroLabel()
  const valueStyle =
    variant === "discovery"
      ? enlarged
        ? discoveryRegistroValorLarge
        : discoveryRegistroValor
      : tecaFichario.registroValor()

  return (
    <div
      style={{
        ...tecaFichario.registro(),
        ...(variant === "discovery" && enlarged
          ? { gap: "8px", paddingTop: "20px" }
          : {}),
        ...style,
      }}
    >
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
