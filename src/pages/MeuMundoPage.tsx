import { meuMundoSections } from "../data/meuMundoMock"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function MeuMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.meuMundo

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <div style={styles.meuMundoSectionsStack}>
        {meuMundoSections.map((section) => (
          <article key={section.id} style={styles.meuMundoSectionCard}>
            <img
              src={section.image}
              alt={section.title}
              style={styles.meuMundoSectionImage}
            />
            <div style={styles.ficharioComplementBody}>
              <h3 style={styles.ficharioComplementTitle}>{section.title}</h3>
              <p style={styles.ficharioComplementText}>{section.text}</p>
              <button
                type="button"
                style={styles.collectionButton}
                onClick={() => setScreen(section.screen)}
              >
                {section.buttonLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </WorldPortalLayout>
  )
}
