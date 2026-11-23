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
  /** Destaque de compra na landing Caixa (hero + fechamento). */
  purchaseHighlight?: boolean
  priceHint?: string
  /** Preço antigo riscado ao lado do priceHint (ex.: durante a Black). */
  priceWas?: string
}

function CtaContent({
  label,
  priceHint,
  priceWas,
}: {
  label: string
  priceHint?: string
  priceWas?: string
}) {
  if (!priceHint) {
    return <>{label}</>
  }

  return (
    <span className="clx-cta__inner">
      <span className="clx-cta__label">{label}</span>
      <span className="clx-cta__price-hint">
        {priceWas ? <s className="clx-cta__price-was">{priceWas}</s> : null}
        {priceHint}
      </span>
    </span>
  )
}

export function LandingCta({
  label,
  origin,
  variant = "primary",
  className = "",
  purchaseHighlight = false,
  priceHint,
  priceWas,
}: LandingCtaProps) {
  const salesOpen = isSalesOpen()
  const checkoutReady = isHotmartCheckoutReady
  const goToCheckout = salesOpen && checkoutReady

  const classes = [
    "clx-cta",
    variant === "header" ? "clx-cta--header" : "clx-cta--primary",
    purchaseHighlight ? "clx-cta--purchase" : "",
    !goToCheckout ? "clx-cta--prelaunch" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <CtaContent label={label} priceHint={priceHint} priceWas={priceWas} />
  )

  if (!goToCheckout) {
    return (
      <button type="button" className={classes} onClick={() => navigateToPreLaunch()}>
        {content}
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
      {content}
    </a>
  )
}
