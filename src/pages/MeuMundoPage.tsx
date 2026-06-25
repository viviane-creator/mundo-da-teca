import type { CSSProperties } from "react"
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
    <WorldPortalLayout {...portal} compactTitle breath="large" variant="art">
      <div style={styles.meuMundoPortalStack}>
        {meuMundoSections.map((section) => (
          <button
            key={section.id}
            type="button"
            aria-label={section.buttonLabel}
            className="meu-mundo-portal"
            style={
              {
                ...styles.meuMundoPortalButton,
                "--portal-border": section.border,
              } as CSSProperties
            }
            onClick={() => setScreen(section.screen)}
          >
            <article className="meu-mundo-portal-card" style={styles.meuMundoPortalCard}>
              <span
                aria-hidden
                style={{
                  ...styles.meuMundoPortalSpine,
                  background: section.spine,
                }}
              />
              <div style={styles.meuMundoPortalBody}>
                <h2 style={styles.meuMundoPortalTitle}>{section.title}</h2>
                <p style={styles.meuMundoPortalText}>{section.text}</p>
              </div>
            </article>
          </button>
        ))}
      </div>
    </WorldPortalLayout>
  )
}
