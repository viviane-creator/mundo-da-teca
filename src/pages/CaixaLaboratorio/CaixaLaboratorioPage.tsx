import { useEffect } from "react"
import {
  BenefitsSection,
  ExperiencesGrid,
  FaqSection,
  FinalCta,
  HeroLaboratorio,
  KitContents,
  LandingHeader,
  LandingImage,
  PricingSection,
  WaterOnlySection,
} from "../../components/caixa-laboratorio"
import {
  applyCaixaLaboratorioMeta,
  caixaLaboratorioData,
  clearCaixaLaboratorioMeta,
} from "./caixaLaboratorioData"
import "./caixaLaboratorio.css"

export function CaixaLaboratorioPage() {
  useEffect(() => {
    applyCaixaLaboratorioMeta()
    return () => {
      clearCaixaLaboratorioMeta()
    }
  }, [])

  const { hero } = caixaLaboratorioData

  return (
    <article className="clx-page">
      <div className="clx-page__backdrop" aria-hidden="true">
        <LandingImage
          className="clx-page__backdrop-image"
          src={hero.image}
          alt=""
          width={1600}
          height={1200}
          loading="eager"
          fetchPriority="high"
        />
        <div className="clx-page__backdrop-veil" />
      </div>

      <div className="clx-page__foreground">
        <LandingHeader />
        <HeroLaboratorio />
        <KitContents />
        <ExperiencesGrid />
        <WaterOnlySection />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </div>
    </article>
  )
}
