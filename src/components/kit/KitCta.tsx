import { kitPageCopy } from "../../data/kitPageCopy"
import { scrollToKitPricing } from "./kitScroll"

type KitCtaProps = {
  label: string
  variant?: "scroll" | "order"
  className?: string
}

export function KitCta({
  label,
  variant = "scroll",
  className = "",
}: KitCtaProps) {
  const classes = [
    "home-organic-cta",
    "home-organic-cta--club",
    "kit-cta",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (variant === "order") {
    return (
      <a
        className={classes}
        href={kitPageCopy.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={scrollToKitPricing}>
      {label}
    </button>
  )
}
