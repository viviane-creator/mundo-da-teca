import type { CSSProperties } from "react"
import type { FicharioUniverse } from "../data/minhaColecaoMock"
import { getUniverseAccent } from "../data/universeAccent"
import type { UniverseId } from "../data/universeAssets"
import { CollectionPageSlot } from "./CollectionPageSlot"
import { styles } from "../styles/appStyles"

export function FicharioUniversePanel({
  universe,
  expanded,
  onToggle,
}: {
  universe: FicharioUniverse
  expanded: boolean
  onToggle: () => void
}) {
  const accent = getUniverseAccent(universe.id as UniverseId)

  return (
    <section style={styles.ficharioUniversePanel}>
      <button
        type="button"
        onClick={onToggle}
        className="fichario-colecao-divider"
        style={
          {
            ...styles.ficharioUniverseHeaderButton,
            "--universe-border": accent.border,
          } as CSSProperties
        }
        aria-expanded={expanded}
      >
        <article
          className="fichario-colecao-card"
          data-open={expanded ? "true" : "false"}
          style={{
            ...styles.ficharioUniverseHeader,
            ...(expanded
              ? {
                  borderColor: accent.border,
                  borderStyle: "solid",
                  background: "rgba(255, 253, 249, 0.96)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                }
              : {}),
          }}
        >
          <span
            aria-hidden
            style={{
              ...styles.ficharioUniverseSpine,
              background: accent.spine,
            }}
          />

          <div style={styles.ficharioUniverseHeaderBody}>
            <span
              style={{
                ...styles.ficharioUniverseEtiqueta,
                color: accent.spine,
              }}
            >
              {universe.title}
            </span>
            <h3 style={styles.ficharioUniverseTitle}>
              {universe.collectionTitle}
            </h3>
            <p style={styles.ficharioUniversePoetic}>{universe.poetic}</p>
          </div>

          <span
            style={{
              ...styles.ficharioUniverseChevron,
              color: accent.spine,
              opacity: expanded ? 1 : 0.88,
            }}
            aria-hidden="true"
          >
            {expanded ? "−" : "+"}
          </span>
        </article>
      </button>

      {expanded && (
        <div
          style={{
            ...styles.ficharioAlbumSpread,
            borderColor: accent.line,
          }}
        >
          <div style={styles.ficharioAlbumGrid}>
            {universe.slots.map((slot, index) => (
              <CollectionPageSlot key={slot.id} slot={slot} index={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
