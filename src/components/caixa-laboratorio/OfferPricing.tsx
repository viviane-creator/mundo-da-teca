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

  const purchaseNote =
    "purchaseTypeNote" in pricing && pricing.purchaseTypeNote
      ? pricing.purchaseTypeNote
      : hero.note

  return (
    <>
      <p className="clx-price">{pricing.price}</p>
      {"shippingLine1" in pricing && pricing.shippingLine1 ? (
        <p className="clx-shipping">{pricing.shippingLine1}</p>
      ) : null}
      {"shippingLine2" in pricing && pricing.shippingLine2 ? (
        <p className="clx-shipping clx-shipping--soft">{pricing.shippingLine2}</p>
      ) : null}
      <ul className="clx-offer-trust">
        {offerTrust.map((item) => (
          <li key={item}>
            <span aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="clx-purchase-cta-wrap">
        <LandingCta
          label={hero.cta}
          origin={origin}
          purchaseHighlight
          priceHint={
            origin !== "bloco_final" && "ctaPriceHint" in hero
              ? hero.ctaPriceHint
              : undefined
          }
          className={
            origin === "bloco_final" ? "clx-cta--purchase-final" : undefined
          }
        />
      </div>
      {"dispatchNote" in pricing && pricing.dispatchNote ? (
        <p className="clx-dispatch-note">{pricing.dispatchNote}</p>
      ) : null}
      <p className="clx-note">{purchaseNote}</p>
    </>
  )
}
