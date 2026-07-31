import {
  HOTMART_CHECKOUT_URL,
  isHotmartCheckoutReady,
  trackBeginCheckout,
  type CheckoutClickOrigin,
} from "../../config/caixaLaboratorioCheckout"

type LandingCtaProps = {
  label: string
  origin: CheckoutClickOrigin
  variant?: "primary" | "header"
  className?: string
}

export function LandingCta({
  label,
  origin,
  variant = "primary",
  className = "",
}: LandingCtaProps) {
  const classes = [
    "clx-cta",
    variant === "header" ? "clx-cta--header" : "clx-cta--primary",
    !isHotmartCheckoutReady ? "clx-cta--pending" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (!isHotmartCheckoutReady) {
    return (
      <button
        type="button"
        className={classes}
        aria-disabled="true"
        title="Checkout Hotmart em configuração"
        onClick={(event) => {
          event.preventDefault()
        }}
      >
        {label}
      </button>
    )
  }

  return (
    <a
      className={classes}
      href={HOTMART_CHECKOUT_URL}
      onClick={() => trackBeginCheckout(origin)}
    >
      {label}
    </a>
  )
}
