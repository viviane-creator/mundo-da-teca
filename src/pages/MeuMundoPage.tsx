import type { CSSProperties } from "react"
import { useAuth } from "../auth/authContext"
import {
  bibliotecaDeChild,
  colecaoDeChild,
  diarioDeChild,
  mundoDeChild,
} from "../auth/childPersonalization"
import { meuMundoClubSeal, meuMundoSections } from "../data/meuMundoMock"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function MeuMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const { user, isAuthenticated } = useAuth()
  const portal = portalPages.meuMundo
  const portalTitle =
    isAuthenticated && user ? mundoDeChild(user.childName) : portal.title

  const sectionTitle = (sectionId: string, fallback: string) => {
    if (!isAuthenticated || !user) return fallback
    if (sectionId === "diario") return diarioDeChild(user.childName)
    if (sectionId === "colecoes") return colecaoDeChild(user.childName)
    if (sectionId === "biblioteca") return bibliotecaDeChild(user.childName)
    return fallback
  }

  return (
    <WorldPortalLayout
      {...portal}
      title={portalTitle}
      compactTitle
      breath="large"
      variant="art"
    >
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
              <span style={styles.meuMundoPortalClubSeal} aria-hidden="true">
                {meuMundoClubSeal}
              </span>
              <span
                aria-hidden
                style={{
                  ...styles.meuMundoPortalSpine,
                  background: section.spine,
                }}
              />
              <div style={styles.meuMundoPortalBody}>
                <h2 style={styles.meuMundoPortalTitle}>
                  {sectionTitle(section.id, section.title)}
                </h2>
                <p style={styles.meuMundoPortalText}>{section.text}</p>
              </div>
            </article>
          </button>
        ))}
      </div>
    </WorldPortalLayout>
  )
}
