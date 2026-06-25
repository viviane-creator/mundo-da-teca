import { meuMundoSections } from "../data/meuMundoMock"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

const tabStripStyles = [
  styles.meuMundoFicharioTabStripDiario,
  styles.meuMundoFicharioTabStripColecoes,
  styles.meuMundoFicharioTabStripBiblioteca,
] as const

export function MeuMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.meuMundo

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large" variant="art">
      <section style={styles.meuMundoFicharioBinder}>
        <span style={styles.meuMundoFicharioSpine} aria-hidden="true" />
        <div style={styles.meuMundoFicharioRings} aria-hidden="true">
          <span style={styles.meuMundoFicharioRing} />
          <span style={styles.meuMundoFicharioRing} />
          <span style={styles.meuMundoFicharioRing} />
        </div>

        <p style={styles.meuMundoFicharioKicker}>fichário de fichas</p>

        <div style={styles.meuMundoFicharioTabs}>
          {meuMundoSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              aria-label={section.buttonLabel}
              className="meu-mundo-ficha-card"
              style={styles.meuMundoFicharioTab}
              onClick={() => setScreen(section.screen)}
            >
              <span
                style={{
                  ...styles.meuMundoFicharioTabStrip,
                  ...tabStripStyles[index],
                }}
              >
                <span style={styles.meuMundoFicharioTabIcon} aria-hidden="true">
                  {section.icon}
                </span>
              </span>

              <span style={styles.meuMundoFicharioTabBody} data-meu-mundo-tab-body>
                <span style={styles.meuMundoFicharioTabTitle}>
                  {section.title}
                </span>
                <span style={styles.meuMundoFicharioTabText}>
                  {section.text}
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </WorldPortalLayout>
  )
}
