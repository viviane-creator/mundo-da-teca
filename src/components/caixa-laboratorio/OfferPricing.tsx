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
  const { pricing, hero, offerTrust } = caixaLaboratorioData
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
      {origin === "hero" && "offerLead" in pricing && pricing.offerLead ? (
        <p className="clx-offer-lead">{pricing.offerLead}</p>
      ) : null}
      <p className="clx-price">{pricing.price}</p>
      {"shippingNote" in pricing && pricing.shippingNote ? (
        <p className="clx-shipping">{pricing.shippingNote}</p>
      ) : null}
      <ul className="clx-offer-trust">
        {offerTrust.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <LandingCta label={hero.cta} origin={origin} />
      <p className="clx-note">{hero.note}</p>
    </>
  )
}
