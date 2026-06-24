import { HomeExploreMap } from "../components/HomeExploreMap"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function UniversosPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.universos

  return (
    <WorldPortalLayout {...portal} breath="large">
      <section style={styles.universosExploreSection}>
        <p style={styles.universosExploreKicker}>trilha de exploração</p>

        <div style={styles.universosExploreMapWrap}>
          <div style={styles.editorialDecorContent}>
            <HomeExploreMap onSelect={setScreen} variant="full" />
            <p style={styles.homeV2TrailEnd}>
              · · · seis caminhos · seis coleções de fichas · · ·
            </p>
          </div>
        </div>
      </section>
    </WorldPortalLayout>
  )
}
