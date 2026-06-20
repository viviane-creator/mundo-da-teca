import { getUniverseCollectionSummary } from "../data/minhaColecaoMock"
import type { FicharioUniverse } from "../data/minhaColecaoMock"
import { CollectionPageSlot } from "./CollectionPageSlot"
import { UniverseIcon } from "./UniverseIcon"
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
  const collectionSummary = getUniverseCollectionSummary(universe.slots)
  const guardadas = universe.slots.filter(
    (slot) => slot.status === "concluida" || slot.status === "recebida"
  ).length
  const aguardando = universe.slots.filter(
    (slot) => slot.status === "aguardando"
  ).length

  return (
    <section style={styles.ficharioUniversePanel}>
      <button
        type="button"
        onClick={onToggle}
        style={styles.ficharioUniverseHeaderButton}
        aria-expanded={expanded}
      >
        <article
          style={{
            ...styles.ficharioUniverseHeader,
            ...(expanded ? styles.ficharioUniverseHeaderOpen : {}),
          }}
        >
          <UniverseIcon
            src={universe.icon}
            variant="panel"
            style={styles.ficharioUniverseEmblemWatermark}
          />

          <div style={styles.ficharioUniverseHeaderBody}>
            <h3 style={styles.ficharioUniverseTitle}>
              {universe.collectionTitle}
            </h3>
            <p style={styles.ficharioUniversePoetic}>{universe.poetic}</p>
            <p style={styles.ficharioArchiveLabel}>{collectionSummary}</p>
          </div>

          <span style={styles.ficharioUniverseChevron} aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </article>
      </button>

      {expanded && (
        <div style={styles.ficharioAlbumSpread}>
          <div style={styles.ficharioAlbumLegend}>
            <span style={styles.ficharioAlbumLegendItem}>
              {guardadas} fichas guardadas
            </span>
            <span style={styles.ficharioAlbumLegendDot}>·</span>
            <span style={styles.ficharioAlbumLegendItem}>
              {aguardando} espaços livres
            </span>
          </div>

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
