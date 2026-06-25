import { AtelierComingSoonVisual } from "./components/AtelierComingSoonVisual"
import { FicharioEtiqueta } from "./components/fichario"
import {
  atelierComingSoonItems,
  atelierFeaturedTreasure,
  atelierShowcaseFootnote,
} from "./data/atelierShowcase"
import { pageCovers } from "./data/pageCovers"
import { toAtelierProductScreen } from "./atelierNavigation"
import { styles } from "./styles/appStyles"
import { WorldPortalCover, worldPortalStyles } from "./worldPortal"

type SetScreen = (screen: string) => void

export function AtelierShopPage({ setScreen }: { setScreen: SetScreen }) {
  return (
    <>
      <WorldPortalCover
        cover={pageCovers.atelie}
        alt="Ateliê"
        hero={{
          kicker: "complementos das fichas",
          title: "Ateliê",
          tagline: "Objetos que continuam o que as fichas começaram.",
          compactTitle: true,
          variant: "art",
        }}
      />
      <section style={worldPortalStyles.body}>
        <p style={styles.atelierHeroSubtitle}>
          Figurinhas, papelaria e colecionáveis — peças para acompanhar as
          descobertas.
        </p>

        <div style={styles.atelierShowcase}>
          <article style={styles.atelierShowcaseFeatured}>
            <img
              src={atelierFeaturedTreasure.image}
              alt={atelierFeaturedTreasure.imageAlt}
              style={styles.atelierShowcaseFeaturedImage}
            />
            <div style={styles.atelierShowcaseFeaturedBody}>
              <h2 style={styles.atelierShowcaseFeaturedTitle}>
                {atelierFeaturedTreasure.title}
              </h2>
              <p style={styles.atelierShowcaseFeaturedText}>
                {atelierFeaturedTreasure.text}
              </p>
              <FicharioEtiqueta
                action
                onClick={() =>
                  setScreen(
                    toAtelierProductScreen(atelierFeaturedTreasure.productId),
                  )
                }
                style={styles.atelierShowcaseFeaturedButton}
              >
                {atelierFeaturedTreasure.ctaLabel}
              </FicharioEtiqueta>
            </div>
          </article>

          <div style={styles.atelierShowcaseGrid}>
            {atelierComingSoonItems.map((item) => (
              <article key={item.id} style={styles.atelierShowcaseCard}>
                <AtelierComingSoonVisual />
                <div style={styles.atelierShowcaseCardBody}>
                  <span style={styles.atelierShowcaseBadge}>{item.statusLabel}</span>
                  <h3 style={styles.atelierShowcaseCardTitle}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <p style={styles.atelierShowcaseFootnote}>{atelierShowcaseFootnote}</p>
        </div>
      </section>
    </>
  )
}
