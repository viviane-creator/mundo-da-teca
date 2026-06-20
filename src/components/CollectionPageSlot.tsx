import type { FicharioSlot, FicharioSlotStatus } from "../data/minhaColecaoMock"
import { formatDiscoveryTitle } from "../playData"
import { FicharioFicha } from "./fichario"

const slotSealLabel: Record<FicharioSlotStatus, string | null> = {
  concluida: "guardada",
  recebida: "em construção",
  aguardando: null,
}

function slotCodigo(slotId: string): string {
  return slotId.replace(/-/g, "·").toUpperCase()
}

export function CollectionPageSlot({
  slot,
  index,
}: {
  slot: FicharioSlot
  index: number
}) {
  const seal = slotSealLabel[slot.status]

  if (slot.status === "aguardando") {
    return (
      <FicharioFicha
        compact
        empty
        variant="descoberta"
        codigo={slotCodigo(slot.id)}
        emptyLabel="espaço para nova ficha"
        tilt={index % 2 === 0 ? 0.08 : -0.08}
      />
    )
  }

  return (
    <FicharioFicha
      compact
      variant="descoberta"
      codigo={slotCodigo(slot.id)}
      title={formatDiscoveryTitle(slot.title ?? "")}
      seal={seal}
      tilt={index % 2 === 0 ? 0.08 : -0.08}
    >
      {slot.note && (
        <p
          style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            color: "#9a8475",
            lineHeight: 1.35,
          }}
        >
          {slot.note}
        </p>
      )}
    </FicharioFicha>
  )
}
