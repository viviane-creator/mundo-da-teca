import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"

type LandingCtaProps = {
  label: string
  variant?: "scroll" | "order"
  className?: string
}

function scrollToPricing() {
  document
    .getElementById("clx-pricing")
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function LandingCta({
  label,
  variant = "scroll",
  className = "",
}: LandingCtaProps) {
  const classes = [
    "home-organic-cta",
    "home-organic-cta--club",
    "clx-cta",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (variant === "order") {
    return (
      <a
        className={classes}
        href={caixaLaboratorioData.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={scrollToPricing}>
      {label}
    </button>
  )
}
