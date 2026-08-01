import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { OfferPricing } from "./OfferPricing"

export function PricingSection() {
  const { buy } = caixaLaboratorioData

  return (
    <section
      id="clx-buy"
      className="clx-buy"
      aria-labelledby="clx-buy-title"
    >
      <img
        className="clx-buy__logo"
        src={buy.logoSrc}
        alt={buy.logoAlt}
        width={72}
        height={72}
        decoding="async"
      />
      <h2 id="clx-buy-title" className="clx-buy__title">
        {buy.title}
      </h2>
      <p className="clx-buy__summary">{buy.summary}</p>
      <OfferPricing origin="bloco_final" />
    </section>
  )
}
