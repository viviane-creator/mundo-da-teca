import {
  HOTMART_CHECKOUT_URL,
  isHotmartCheckoutReady,
  trackBeginCheckout,
  type CheckoutClickOrigin,
} from "../../config/caixaLaboratorioCheckout"
import { isSalesOpen } from "../../config/salesLaunch"
import { navigateToPreLaunch } from "../../navigation/preLaunchNavigation"

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
  const salesOpen = isSalesOpen()
  const checkoutReady = isHotmartCheckoutReady
  const goToCheckout = salesOpen && checkoutReady

  const classes = [
    "clx-cta",
    variant === "header" ? "clx-cta--header" : "clx-cta--primary",
    !goToCheckout ? "clx-cta--prelaunch" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (!goToCheckout) {
    return (
      <button
        type="button"
        className={classes}
        onClick={() => navigateToPreLaunch()}
      >
        {label}
      </button>
    )
  }

  return (
    <a
      className={classes}
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBeginCheckout(origin)}
    >
      {label}
    </a>
  )
}
