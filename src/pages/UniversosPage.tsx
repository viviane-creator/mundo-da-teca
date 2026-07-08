import { universosPageCopy } from "../data/universosPageCopy"
import { HomeExploreMap } from "../components/HomeExploreMap"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"
import "../styles/universosPage.css"

export function UniversosPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.universos
  const copy = universosPageCopy

  return (
    <WorldPortalLayout {...portal} breath="none" variant="footer">
      <section style={styles.universosExploreSection} aria-label="Mapa de universos">
        <div style={styles.universosEditorialFlow}>
          <p style={styles.universosEpigraph}>{copy.epigraph}</p>
          <p style={styles.universosSubtitle}>{copy.subtitle}</p>

          <div style={styles.universosExploreMapWrap}>
            <div style={styles.editorialDecorContent}>
              <div className="universos-map-frame">
                <div className="universos-map-frame__inner">
                  <HomeExploreMap onSelect={setScreen} variant="full" />
                </div>
              </div>
              <p style={styles.homeV2TrailEnd}>{copy.trailEnd}</p>
            </div>
          </div>
        </div>
      </section>
    </WorldPortalLayout>
  )
}
