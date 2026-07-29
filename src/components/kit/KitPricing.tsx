import { kitPageCopy } from "../../data/kitPageCopy"
import { KitCta } from "./KitCta"

export function KitPricing() {
  const { pricing } = kitPageCopy

  return (
    <section
      id="kit-pricing"
      className="kit-pricing"
      aria-labelledby="kit-pricing-title"
    >
      <p className="kit-pricing__kicker">{pricing.kicker}</p>
      <h2 id="kit-pricing-title" className="kit-page__section-title">
        {pricing.title}
      </h2>
      <p className="kit-pricing__price">{pricing.priceLabel}</p>
      <dl className="kit-pricing__meta">
        <div className="kit-pricing__row">
          <dt>{pricing.shippingLabel}</dt>
          <dd>
            <strong>{pricing.shippingValue}</strong>
            <span>{pricing.shippingNote}</span>
          </dd>
        </div>
        <div className="kit-pricing__row">
          <dt>{pricing.batchLabel}</dt>
          <dd>
            <strong>{pricing.batchValue}</strong>
          </dd>
        </div>
      </dl>
      <p className="kit-page__water-note">{pricing.waterReminder}</p>
      <KitCta label={pricing.cta} variant="order" large />
    </section>
  )
}
