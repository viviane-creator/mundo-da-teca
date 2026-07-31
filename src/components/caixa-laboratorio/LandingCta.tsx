import { CAIXA_LABORATORIO_ORDER_URL } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

type LandingCtaProps = {
  label: string
  variant?: "primary" | "header"
  className?: string
}

export function LandingCta({
  label,
  variant = "primary",
  className = "",
}: LandingCtaProps) {
  const classes = [
    "clx-cta",
    variant === "header" ? "clx-cta--header" : "clx-cta--primary",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <a
      className={classes}
      href={CAIXA_LABORATORIO_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}
