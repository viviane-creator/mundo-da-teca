import { AtelierComingSoonVisual } from "./components/AtelierComingSoonVisual"
import { HomeFirstProductCard } from "./components/home/HomeFirstProductCard"
import { atelierEmptyState } from "./data/atelierShowcase"
import { atelierPortalCopy } from "./data/atelierPortalCopy"
import { pageCovers } from "./data/pageCovers"
import { styles } from "./styles/appStyles"
import { WorldPortalCover, worldPortalStyles } from "./worldPortal"

export function AtelierShopPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
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
        <p style={styles.atelierPageIntro}>{atelierPortalCopy.pageIntro}</p>

        <HomeFirstProductCard setScreen={setScreen} />

        <div className="atelier-showcase" style={styles.atelierShowcase}>
          <div style={styles.atelierEmptyPlaceholder} aria-label={atelierEmptyState.label}>
            <AtelierComingSoonVisual compact />
            <p style={styles.atelierEmptyPlaceholderLabel}>{atelierEmptyState.label}</p>
            <p style={styles.atelierEmptyPlaceholderNote}>{atelierEmptyState.note}</p>
          </div>
        </div>
      </section>
    </>
  )
}
