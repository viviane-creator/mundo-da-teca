import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"
import { BalancedLines } from "./BalancedLines"
import type { CheckoutClickOrigin } from "../../config/caixaLaboratorioCheckout"
import {
  floripaSoftLaunchCopy,
  isFloripaSoftLaunchActive,
} from "../../config/floripaSoftLaunch"

type OfferPricingProps = {
  origin: CheckoutClickOrigin
}

export function OfferPricing({ origin }: OfferPricingProps) {
  const { pricing, hero } = caixaLaboratorioData
  const floripaActive = isFloripaSoftLaunchActive()
  const floripa = floripaSoftLaunchCopy.pricing

  if (floripaActive) {
    return (
      <>
        <p className="clx-price-label">{floripa.label}</p>
        <p className="clx-price">{floripa.price}</p>
        <p className="clx-floripa-ship">{floripa.shippingBrazil}</p>
        <p className="clx-floripa-ship clx-floripa-ship--soft">
          {floripa.shippingFloripa}
        </p>
        <p className="clx-floripa-pay">{floripa.payment}</p>
        <LandingCta label={floripaSoftLaunchCopy.ctaLabel} origin={origin} />
        <p className="clx-floripa-delivery-notice">
          <BalancedLines lines={floripa.deliveryNoticeLines} />
        </p>
        <p className="clx-note">{floripa.note}</p>
      </>
    )
  }

  return (
    <>
      <p className="clx-price-label">{pricing.label}</p>
      <p className="clx-price">{pricing.price}</p>
      <p className="clx-price-next">
        {pricing.nextLotLabel}{" "}
        <span className="clx-price-next__value">{pricing.nextPrice}</span>
      </p>
      <p className="clx-price-savings">{pricing.savings}</p>
      <p className="clx-price-units">{pricing.units}</p>
      <p className="clx-shipping">{pricing.shipping}</p>
      <LandingCta label={hero.cta} origin={origin} />
      <p className="clx-note">{hero.note}</p>
      <p className="clx-payment-note">
        <span className="clx-payment-note__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" focusable="false">
            <path
              d="M7 10V8a5 5 0 0110 0v2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <rect
              x="5"
              y="10"
              width="14"
              height="10"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        {hero.paymentNote}
      </p>
    </>
  )
}
