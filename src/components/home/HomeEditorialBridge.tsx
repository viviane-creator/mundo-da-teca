import { styles } from "../../styles/appStyles"

/** Costura editorial entre a capa e o primeiro capítulo — aquarela + papel, sem linhas */
export function HomeEditorialBridge() {
  return (
    <div className="home-editorial-bridge" style={styles.homeEditorialBridge} aria-hidden="true">
      <div style={styles.homeEditorialBridgeWash} />
      <div style={styles.homeEditorialBridgeSpeckle} />
    </div>
  )
}
