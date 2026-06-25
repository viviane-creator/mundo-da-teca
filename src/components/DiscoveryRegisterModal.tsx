import { useState } from "react"
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
  const [whatDiscovered, setWhatDiscovered] = useState("")
  const [whatSurprised, setWhatSurprised] = useState("")
  const [wantsToKeep, setWantsToKeep] = useState<boolean | null>(null)

  const handleSave = () => {
    onConfirm()
  }

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

        <label style={styles.discoveryRegisterField}>
          <span style={styles.discoveryRegisterLabel}>O que você descobriu?</span>
          <textarea
            value={whatDiscovered}
            onChange={(event) => setWhatDiscovered(event.target.value)}
            rows={3}
            style={styles.discoveryRegisterTextarea}
          />
        </label>

        <label style={styles.discoveryRegisterField}>
          <span style={styles.discoveryRegisterLabel}>
            O que mais te surpreendeu?
          </span>
          <textarea
            value={whatSurprised}
            onChange={(event) => setWhatSurprised(event.target.value)}
            rows={3}
            style={styles.discoveryRegisterTextarea}
          />
        </label>

        <div style={styles.discoveryRegisterField}>
          <span style={styles.discoveryRegisterLabel}>Desenho ou foto</span>
          <div style={styles.discoveryRegisterMediaPlaceholder}>
            <span style={styles.discoveryRegisterMediaHint}>
              Espaço para desenho ou foto
            </span>
          </div>
        </div>

        <fieldset style={styles.discoveryRegisterKeepFieldset}>
          <legend style={styles.discoveryRegisterLabel}>
            Gostaria de guardar essa descoberta?
          </legend>
          <div style={styles.discoveryRegisterKeepOptions}>
            <button
              type="button"
              onClick={() => setWantsToKeep(true)}
              style={{
                ...styles.discoveryRegisterKeepOption,
                ...(wantsToKeep === true
                  ? styles.discoveryRegisterKeepOptionActive
                  : {}),
                borderColor: accent.border,
              }}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => setWantsToKeep(false)}
              style={{
                ...styles.discoveryRegisterKeepOption,
                ...(wantsToKeep === false
                  ? styles.discoveryRegisterKeepOptionActive
                  : {}),
                borderColor: accent.border,
              }}
            >
              Não
            </button>
          </div>
        </fieldset>

        <div style={styles.discoveryRegisterActions}>
          <button
            type="button"
            onClick={onDismiss}
            style={styles.discoveryRegisterButtonSecondary}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            style={{
              ...styles.discoveryRegisterButtonPrimary,
              borderColor: accent.border,
              color: accent.spine,
              background: accent.badgeBg,
            }}
          >
            Guardar no Meu Mundo
          </button>
        </div>
      </div>
    </div>
  )
}
