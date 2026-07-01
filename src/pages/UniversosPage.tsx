import { universosPageCopy } from "../data/universosPageCopy"
import { HomeExploreMap } from "../components/HomeExploreMap"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function UniversosPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.universos
  const copy = universosPageCopy

  return (
    <WorldPortalLayout {...portal} breath="large">
      <section style={styles.universosExploreSection} aria-label="Mapa de universos">
        <p style={styles.universosEpigraph}>{copy.epigraph}</p>
        <p style={styles.universosSubtitle}>{copy.subtitle}</p>

        <div style={styles.universosExploreMapWrap}>
          <div style={styles.editorialDecorContent}>
            <HomeExploreMap onSelect={setScreen} variant="full" />
            <p style={styles.homeV2TrailEnd}>{copy.trailEnd}</p>
          </div>
        </div>
      </section>
    </WorldPortalLayout>
  )
}
