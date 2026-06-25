import type { UniverseAccent } from "../data/universeAccent"
import { styles } from "../styles/appStyles"

export function DiscoveryRegisterModal({
  title,
  accent,
  onDismiss,
  onConfirm,
}: {
  title: string
  accent: UniverseAccent
  onDismiss: () => void
  onConfirm: () => void
}) {
  return (
    <div
      style={styles.discoveryRegisterOverlay}
      role="presentation"
      onClick={onDismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="discovery-register-title"
        style={{
          ...styles.discoveryRegisterModal,
          borderColor: accent.border,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <span
          aria-hidden
          style={{
            ...styles.discoveryRegisterModalSpine,
            background: accent.spine,
          }}
        />
        <p style={styles.discoveryRegisterKicker}>registro de descoberta</p>
        <h2 id="discovery-register-title" style={styles.discoveryRegisterTitle}>
          {title}
        </h2>
        <p style={styles.discoveryRegisterQuestion}>
          Você já realizou esta descoberta?
        </p>
        <div style={styles.discoveryRegisterActions}>
          <button
            type="button"
            onClick={onDismiss}
            style={styles.discoveryRegisterButtonSecondary}
          >
            Ainda não
          </button>
          <button
            type="button"
            onClick={onConfirm}
            style={{
              ...styles.discoveryRegisterButtonPrimary,
              borderColor: accent.border,
              color: accent.spine,
              background: accent.badgeBg,
            }}
          >
            Sim, já fiz
          </button>
        </div>
      </div>
    </div>
  )
}
