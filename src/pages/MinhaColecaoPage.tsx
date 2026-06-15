import { useState } from "react"
import {
  ficharioComplements,
  ficharioDefaultExpandedId,
  ficharioUniverses,
} from "../data/minhaColecaoMock"
import { FicharioUniversePanel } from "../components/FicharioUniversePanel"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function MinhaColecaoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const [expandedId, setExpandedId] = useState(ficharioDefaultExpandedId)
  const portal = portalPages.minhaColecao

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <section style={styles.ficharioUniversosSection}>
        <h2 style={styles.ficharioSectionLabel}>seus universos</h2>
        <p style={styles.ficharioSectionIntro}>
          cada universo guarda páginas do seu fichário — abra devagar, como quem
          folheia um álbum.
        </p>

        <div style={styles.ficharioUniversosStack}>
          {ficharioUniverses.map((universe) => (
            <FicharioUniversePanel
              key={universe.id}
              universe={universe}
              expanded={expandedId === universe.id}
              onToggle={() =>
                setExpandedId((current) =>
                  current === universe.id ? "" : universe.id
                )
              }
            />
          ))}
        </div>
      </section>

      <div style={styles.homeEditorialDivider} />

      <section style={styles.ficharioComplementsSection}>
        <h2 style={styles.ficharioComplementsLabel}>também guardado por aqui</h2>

        <div style={styles.ficharioComplementsStack}>
          {ficharioComplements.map((item) => (
            <button
              key={item.id}
              type="button"
              style={styles.ficharioComplementButton}
              onClick={() => setScreen(item.screen)}
            >
              <article style={styles.ficharioComplementCard}>
                <div style={styles.ficharioComplementBody}>
                  <h3 style={styles.ficharioComplementTitle}>{item.title}</h3>
                  <p style={styles.ficharioComplementText}>{item.text}</p>
                </div>
                <span style={styles.ficharioComplementArrow}>→</span>
              </article>
            </button>
          ))}
        </div>
      </section>
    </WorldPortalLayout>
  )
}
