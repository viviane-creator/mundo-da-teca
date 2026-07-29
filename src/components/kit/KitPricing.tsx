import { kitPageCopy } from "../../data/kitPageCopy"
import { KitCta } from "./KitCta"
import { KitReveal } from "./KitReveal"

export function KitPricing() {
  const { pricing } = kitPageCopy

  return (
    <section
      id="kit-pricing"
      className="kit-pricing"
      aria-labelledby="kit-pricing-title"
    >
      <KitReveal>
        <h2 id="kit-pricing-title" className="kit-pricing__title">
          {pricing.title}
        </h2>
        <p className="kit-pricing__price">{pricing.price}</p>
        <p className="kit-pricing__shipping">
          {pricing.shipping}
          <span>{pricing.shippingNote}</span>
        </p>
        <p className="kit-pricing__batch">{pricing.batch}</p>
        <p className="kit-pricing__reminder">{pricing.reminder}</p>
        <KitCta label={pricing.cta} variant="order" />
      </KitReveal>
    </section>
  )
}
