import { useEffect } from "react"
import {
  ExperiencesGrid,
  FaqSection,
  HeroLaboratorio,
  KitContents,
  LandingFooter,
  LandingHeader,
  PricingSection,
  WaterOnlySection,
} from "../../components/caixa-laboratorio"
import {
  applyCaixaLaboratorioMeta,
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

  return (
    <article className="clx-page">
      <LandingHeader />
      <HeroLaboratorio />
      <ExperiencesGrid />
      <KitContents />
      <WaterOnlySection />
      <PricingSection />
      <FaqSection />
      <LandingFooter />
    </article>
  )
}
