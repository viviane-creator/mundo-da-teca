import { useEffect } from "react"
import {
  KitAdventures,
  KitBox,
  KitBrand,
  KitChildhood,
  KitFaq,
  KitGallery,
  KitHero,
  KitPricing,
  KitProduct,
  KitPromise,
  KitWater,
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
      <KitChildhood />
      <KitBrand />
      <KitProduct />
      <KitWater />
      <KitAdventures />
      <KitBox />
      <KitPromise />
      <KitGallery />
      <KitPricing />
      <KitFaq />
    </article>
  )
}
