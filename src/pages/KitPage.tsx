import { useEffect } from "react"
import {
  KitBenefits,
  KitContents,
  KitDiscovery,
  KitExperiences,
  KitFaq,
  KitFinalCta,
  KitGallery,
  KitHero,
  KitPricing,
  KitProblem,
  KitSolution,
  KitWaterDifferential,
} from "../components/kit"
import { applyKitPageMeta, clearKitPageMeta } from "../data/kitPageCopy"
import "../styles/kitPage.css"

export function KitPage() {
  useEffect(() => {
    applyKitPageMeta()
    return () => {
      clearKitPageMeta()
    }
  }, [])

  return (
    <article className="kit-page">
      <KitHero />
      <KitDiscovery />
      <KitProblem />
      <KitSolution />
      <KitContents />
      <KitExperiences />
      <KitWaterDifferential />
      <KitGallery />
      <KitBenefits />
      <KitPricing />
      <KitFaq />
      <KitFinalCta />
    </article>
  )
}
