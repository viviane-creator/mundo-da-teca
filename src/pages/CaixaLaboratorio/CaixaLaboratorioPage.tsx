import { useEffect, useState, type ReactNode } from "react"
import {
  ExperiencesGrid,
  FaqSection,
  HeroLaboratorio,
  KitContents,
  LandingFooter,
  LandingHeader,
  ManualGiftHero,
  ManualOfferBridge,
  PricingSection,
  WaterOnlySection,
} from "../../components/caixa-laboratorio"
import {
  resolveCaixaLandingBlocks,
  readManualGiftQuery,
  type CaixaLandingBlockId,
} from "./caixaLaboratorioBlocks"
import {
  applyCaixaLaboratorioMeta,
  clearCaixaLaboratorioMeta,
} from "./caixaLaboratorioData"
import "./caixaLaboratorio.css"

const blockRenderers: Record<CaixaLandingBlockId, () => ReactNode> = {
  manual: () => <ManualGiftHero />,
  bridge: () => <ManualOfferBridge />,
  hero: () => <HeroLaboratorio />,
  experiences: () => <ExperiencesGrid />,
  contents: () => <KitContents />,
  water: () => <WaterOnlySection />,
  pricing: () => <PricingSection />,
  faq: () => <FaqSection />,
}

export function CaixaLaboratorioPage() {
  const [showManualGift, setShowManualGift] = useState(() =>
    readManualGiftQuery(),
  )

  useEffect(() => {
    applyCaixaLaboratorioMeta()
    return () => {
      clearCaixaLaboratorioMeta()
    }
  }, [])

  useEffect(() => {
    const syncFromUrl = () => setShowManualGift(readManualGiftQuery())
    syncFromUrl()
    window.addEventListener("popstate", syncFromUrl)
    return () => window.removeEventListener("popstate", syncFromUrl)
  }, [])

  const blocks = resolveCaixaLandingBlocks(showManualGift)

  return (
    <article
      className={`clx-page${showManualGift ? " clx-page--manual-entry" : ""}`}
    >
      <LandingHeader />
      {blocks.map((blockId) => (
        <div key={blockId} data-clx-block={blockId}>
          {blockRenderers[blockId]()}
        </div>
      ))}
      <LandingFooter />
    </article>
  )
}
