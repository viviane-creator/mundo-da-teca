import {
  getUniverseArchiveLabel,
  type FicharioUniverse,
} from "../data/minhaColecaoMock"
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
  const archiveLabel = getUniverseArchiveLabel(universe.slots)

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
          <span style={styles.ficharioUniverseIcon} aria-hidden="true">
            {universe.icon}
          </span>

          <img
            src={universe.image}
            alt=""
            style={styles.ficharioUniverseThumb}
          />

          <div style={styles.ficharioUniverseHeaderBody}>
            <h3 style={styles.ficharioUniverseTitle}>{universe.title}</h3>
            <p style={styles.ficharioUniversePoetic}>{universe.poetic}</p>
            <p style={styles.ficharioArchiveLabel}>{archiveLabel}</p>
          </div>

          <span style={styles.ficharioUniverseChevron} aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </article>
      </button>

      {expanded && (
        <div style={styles.ficharioSlotsStack}>
          {universe.slots
            .filter((slot) => slot.status !== "aguardando")
            .map((slot, index) => (
              <CollectionPageSlot key={slot.id} slot={slot} index={index} />
            ))}
          {universe.slots.some((slot) => slot.status === "aguardando") && (
            <p style={styles.ficharioDrawerHint}>
              · · · gavetas ainda vazias, prontas para guardar · · ·
            </p>
          )}
        </div>
      )}
    </section>
  )
}
