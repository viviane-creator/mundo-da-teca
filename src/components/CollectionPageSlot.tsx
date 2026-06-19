import type { FicharioSlot, FicharioSlotStatus } from "../data/minhaColecaoMock"
import { styles } from "../styles/appStyles"
import { tecaTilt } from "../tecaVisual"

const slotSealLabel: Record<FicharioSlotStatus, string | null> = {
  concluida: "guardada",
  recebida: "recebida",
  aguardando: null,
}

function slotStyle(status: FicharioSlotStatus) {
  if (status === "concluida") return styles.ficharioSlotConcluida
  if (status === "recebida") return styles.ficharioSlotRecebida
  return styles.ficharioSlotAguardando
}

export function CollectionPageSlot({
  slot,
  index,
}: {
  slot: FicharioSlot
  index: number
}) {
  const seal = slotSealLabel[slot.status]

  return (
    <article
      style={{
        ...styles.ficharioSlot,
        ...slotStyle(slot.status),
        ...tecaTilt(index % 2 === 0 ? 0.12 : -0.12),
      }}
    >
      {slot.status === "aguardando" ? (
        <>
          <div style={styles.ficharioSlotEmptyFrame} />
          <p style={styles.ficharioSlotEmptyText}>
            espaço reservado para futuras descobertas
          </p>
        </>
      ) : (
        <>
          <div style={styles.ficharioSlotHeader}>
            {seal && <span style={styles.ficharioSlotSeal}>{seal}</span>}
          </div>
          <h4 style={styles.ficharioSlotTitle}>{slot.title}</h4>
          {slot.note && <p style={styles.ficharioSlotNote}>{slot.note}</p>}
        </>
      )}
    </article>
  )
}
