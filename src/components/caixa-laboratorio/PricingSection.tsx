import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function PricingSection() {
  const { pricing } = caixaLaboratorioData

  return (
    <section
      id="clx-pricing"
      className="clx-section clx-pricing"
      aria-labelledby="clx-pricing-title"
    >
      <h2 id="clx-pricing-title" className="clx-section__title">
        {pricing.title}
      </h2>
      <p className="clx-pricing__price">{pricing.price}</p>
      <p className="clx-pricing__shipping">
        {pricing.shipping}
        <span>{pricing.shippingNote}</span>
      </p>
      <p className="clx-pricing__batch">{pricing.batch}</p>
      <p className="clx-pricing__reminder">{pricing.reminder}</p>
      <LandingCta label={pricing.cta} variant="order" />
    </section>
  )
}
