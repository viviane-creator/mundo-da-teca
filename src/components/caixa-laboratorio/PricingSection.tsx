import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function PricingSection() {
  const { buy } = caixaLaboratorioData

  return (
    <section
      id="clx-buy"
      className="clx-buy"
      aria-labelledby="clx-buy-title"
    >
      <h2 id="clx-buy-title" className="clx-buy__title">
        {buy.title}
      </h2>
      <p className="clx-buy__summary">{buy.summary}</p>
      <p className="clx-price">{buy.price}</p>
      <p className="clx-shipping">{buy.shipping}</p>
      <p className="clx-batch">{buy.batch}</p>
      <LandingCta label={buy.cta} />
      <p className="clx-note">{buy.note}</p>
    </section>
  )
}
