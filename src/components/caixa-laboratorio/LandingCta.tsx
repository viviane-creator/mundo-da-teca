import {
  HOTMART_CHECKOUT_URL,
  isHotmartCheckoutReady,
  trackBeginCheckout,
  type CheckoutClickOrigin,
} from "../../config/caixaLaboratorioCheckout"
import {
  floripaSoftLaunchCopy,
  getFloripaWhatsAppUrl,
  isFloripaSoftLaunchActive,
} from "../../config/floripaSoftLaunch"
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
  const floripaActive = isFloripaSoftLaunchActive()
  const salesOpen = isSalesOpen()
  const checkoutReady = isHotmartCheckoutReady
  const goToCheckout = !floripaActive && salesOpen && checkoutReady

  const resolvedLabel = floripaActive ? floripaSoftLaunchCopy.ctaLabel : label

  const classes = [
    "clx-cta",
    variant === "header" ? "clx-cta--header" : "clx-cta--primary",
    !goToCheckout && !floripaActive ? "clx-cta--prelaunch" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (floripaActive) {
    return (
      <a
        className={classes}
        href={getFloripaWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBeginCheckout(origin)}
      >
        {resolvedLabel}
      </a>
    )
  }

  if (!goToCheckout) {
    return (
      <button
        type="button"
        className={classes}
        onClick={() => navigateToPreLaunch()}
      >
        {resolvedLabel}
      </button>
    )
  }

  return (
    <a
      className={classes}
      href={HOTMART_CHECKOUT_URL}
      onClick={() => trackBeginCheckout(origin)}
    >
      {resolvedLabel}
    </a>
  )
}
