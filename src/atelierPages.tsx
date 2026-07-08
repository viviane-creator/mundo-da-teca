import { AtelierComingSoonVisual } from "./components/AtelierComingSoonVisual"
import { atelierEmptyState } from "./data/atelierShowcase"
import { atelierPortalCopy } from "./data/atelierPortalCopy"
import { pageCovers } from "./data/pageCovers"
import { styles } from "./styles/appStyles"
import { WorldPortalCover, worldPortalStyles } from "./worldPortal"

export function AtelierShopPage() {
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

        <div style={styles.atelierShowcase}>
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
