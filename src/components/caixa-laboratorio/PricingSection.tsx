import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { BalancedLines } from "./BalancedLines"
import { LandingImage } from "./LandingImage"
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
      <BalancedLines
        as="h2"
        id="clx-buy-title"
        className="clx-buy__title"
        lines={buy.titleLines}
      />
      <figure className="clx-buy__media">
        <LandingImage
          className="clx-buy__image"
          src={buy.image}
          alt={buy.imageAlt}
          loading="lazy"
        />
      </figure>
      <OfferPricing origin="bloco_final" />
    </section>
  )
}
