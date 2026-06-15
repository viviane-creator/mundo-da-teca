import type { FicharioUniverse } from "../data/minhaColecaoMock"
import { CollectionPageSlot } from "./CollectionPageSlot"
import { styles } from "../styles/appStyles"
import { tecaObjects } from "../tecaVisual"

export function FicharioUniversePanel({
  universe,
  expanded,
  onToggle,
}: {
  universe: FicharioUniverse
  expanded: boolean
  onToggle: () => void
}) {
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
            ...tecaObjects.card("md"),
            ...(expanded ? styles.ficharioUniverseHeaderOpen : {}),
          }}
        >
          <img
            src={universe.image}
            alt={universe.title}
            style={styles.ficharioUniverseThumb}
          />

          <div style={styles.ficharioUniverseHeaderBody}>
            <h3 style={styles.ficharioUniverseTitle}>{universe.title}</h3>
            <p style={styles.ficharioUniversePoetic}>{universe.poetic}</p>
            <p style={styles.ficharioProgressSecondary}>
              {universe.progressLabel}
            </p>
          </div>

          <span style={styles.ficharioUniverseChevron}>
            {expanded ? "−" : "+"}
          </span>
        </article>
      </button>

      {expanded && (
        <div style={styles.ficharioSlotsStack}>
          {universe.slots.map((slot, index) => (
            <CollectionPageSlot key={slot.id} slot={slot} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}
