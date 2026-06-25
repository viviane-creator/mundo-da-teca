import type { CSSProperties } from "react"
import { getUniverseAccent } from "../data/universeAccent"
import { UNIVERSE_IDS, universeIconPath } from "../data/universeAssets"
import { UniverseIcon } from "./UniverseIcon"
import { styles } from "../styles/appStyles"

function sealMedallionStyle(universeId: (typeof UNIVERSE_IDS)[number]): CSSProperties {
  const accent = getUniverseAccent(universeId)
  return {
    ...styles.homeV2MeuMundoSeal,
    border: `1px solid ${accent.border}`,
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.45), 0 1px 3px rgba(120,90,60,0.04)",
  }
}

export function MeuMundoCollectionSeals() {
  return (
    <div style={styles.homeV2MeuMundoSeals} aria-hidden="true">
      {UNIVERSE_IDS.map((universeId) => (
        <span key={universeId} style={sealMedallionStyle(universeId)}>
          <UniverseIcon
            src={universeIconPath(universeId)}
            variant="emblem"
            style={styles.homeV2MeuMundoSealIcon}
          />
        </span>
      ))}
    </div>
  )
}