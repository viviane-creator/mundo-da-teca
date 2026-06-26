import { appRoutes } from "../navigation/appRoutes"
import { useAuth } from "../auth/authContext"
import { styles } from "../styles/appStyles"
import { tecaFichario, tecaHierarchy } from "../tecaVisual"

export function ClubGateScreen({
  setScreen,
  returnScreen = appRoutes.minhaColecao,
}: {
  setScreen: (screen: string) => void
  returnScreen?: string
}) {
  const { openLogin } = useAuth()

  return (
    <section style={styles.clubGate}>
      <button
        type="button"
        onClick={() => setScreen(returnScreen)}
        style={styles.clubGateBack}
      >
        ← meu mundo
      </button>

      <div style={styles.clubGateContent}>
        <span style={styles.clubGateSeal} aria-hidden="true">
          clube
        </span>

        <h1 style={styles.clubGateTitle}>
          Este espaço é do Clube da Teca.
        </h1>

        <p style={styles.clubGateText}>
          Entre para acessar seu diário, suas descobertas e materiais
          exclusivos.
        </p>

        <div style={styles.clubGateActions}>
          <button
            type="button"
            style={{
              ...tecaFichario.etiquetaAction(),
              ...styles.clubGateButtonPrimary,
            }}
            onClick={() => openLogin()}
          >
            Entrar
          </button>
          <button
            type="button"
            style={{
              ...tecaFichario.etiquetaAction(),
              ...styles.clubGateButtonSecondary,
            }}
            onClick={() => setScreen(appRoutes.clube)}
          >
            Conhecer o Clube
          </button>
        </div>
      </div>

      <div style={tecaHierarchy.pageHeroBreath} aria-hidden="true" />
    </section>
  )
}
