import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"
import { OfferPricing } from "./OfferPricing"

export function PricingSection() {
  const { buy } = caixaLaboratorioData

  return (
    <div className="clx-buy-wrap">
      <figure className="clx-caixa-fechada" aria-label={buy.imageAlt}>
        <LandingImage
          className="clx-caixa-fechada__image"
          src={buy.image}
          alt={buy.imageAlt}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

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
        <BalancedLines
          as="h2"
          id="clx-buy-title"
          className="clx-buy__title"
          lines={buy.titleLines}
        />
        <OfferPricing origin="bloco_final" />
      </section>
    </div>
  )
}
