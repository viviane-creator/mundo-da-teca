import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function FinalCta() {
  const { finalCta } = caixaLaboratorioData

  return (
    <section className="clx-section clx-final" aria-labelledby="clx-final-title">
      <h2 id="clx-final-title" className="clx-section__title">
        {finalCta.title}
      </h2>
      <p className="clx-section__lead">{finalCta.text}</p>
      <LandingCta label={finalCta.cta} variant="order" />
    </section>
  )
}
