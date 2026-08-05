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
      <p className="clx-price-label">{pricing.label}</p>
      <p className="clx-price">{pricing.price}</p>
      <p className="clx-price-next">
        {pricing.nextLotLabel}{" "}
        <span className="clx-price-next__value">{pricing.nextPrice}</span>
      </p>
      <p className="clx-price-savings">{pricing.savings}</p>
      <p className="clx-price-units">{pricing.units}</p>
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
