import { caixaLaboratorioData } from "../../pages/CaixaLaboratorio/caixaLaboratorioData"
import { LandingCta } from "./LandingCta"

export function HeroLaboratorio() {
  const { hero } = caixaLaboratorioData

  return (
    <section className="clx-hero">
      <div className="clx-hero__content">
        <p className="clx-hero__kicker">{hero.kicker}</p>
        <h1 className="clx-hero__title">{hero.title}</h1>
        <p className="clx-hero__subtitle">{hero.subtitle}</p>
        <LandingCta label={hero.cta} variant="scroll" />
      </div>
    </section>
  )
}
