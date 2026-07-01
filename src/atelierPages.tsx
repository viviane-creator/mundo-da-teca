import { AtelierComingSoonVisual } from "./components/AtelierComingSoonVisual"
import { AtelierFeaturedCard } from "./components/AtelierFeaturedCard"
import {
  atelierComingSoonItems,
  atelierFeaturedItems,
  atelierShowcaseFootnote,
} from "./data/atelierShowcase"
import { atelierPortalCopy } from "./data/atelierPortalCopy"
import { pageCovers } from "./data/pageCovers"
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
          kicker: atelierPortalCopy.kicker,
          title: atelierPortalCopy.title,
          tagline: atelierPortalCopy.description,
          compactTitle: true,
          variant: "art",
        }}
      />
      <section style={worldPortalStyles.body}>
        <h2 style={styles.clubEntryHeading}>{atelierPortalCopy.pageTitle}</h2>
        <p style={styles.clubFichaHint}>{atelierPortalCopy.pageIntro}</p>

        <div style={styles.atelierShowcase}>
          {atelierFeaturedItems.map((item) => (
            <AtelierFeaturedCard key={item.id} item={item} setScreen={setScreen} />
          ))}

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
