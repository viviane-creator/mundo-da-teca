import type { UniverseAccent } from "../data/universeAccent"
import type { FicharioSlot } from "../data/minhaColecaoMock"
import { discoverySlotKey } from "../data/discoveryRegistry"
import { formatDiscoveryTitle } from "../playData"
import { styles } from "../styles/appStyles"
import { FicharioFicha } from "./fichario"

function slotCodigo(slotId: string): string {
  return slotId.replace(/-/g, "·").toUpperCase()
}

export function CollectionPageSlot({
  universeId,
  slot,
  index,
  accent,
  registeredKeys,
  onRegisterRequest,
}: {
  universeId: string
  slot: FicharioSlot
  index: number
  accent: UniverseAccent
  registeredKeys: Set<string>
  onRegisterRequest: (slot: FicharioSlot) => void
}) {
  const isGuardada = registeredKeys.has(discoverySlotKey(universeId, slot.id))
  const tilt = index % 2 === 0 ? 0.08 : -0.08

  if (slot.status === "aguardando") {
    return (
      <FicharioFicha
        compact
        empty
        variant="descoberta"
        codigo={slotCodigo(slot.id)}
        emptyLabel="espaço para nova experiência"
        tilt={tilt}
        onSelect={() => onRegisterRequest(slot)}
      />
    )
  }

  const title = formatDiscoveryTitle(slot.title ?? "")
  const guardadaStyle = isGuardada
    ? {
        borderColor: accent.border,
        borderStyle: "solid" as const,
        background: "rgba(255, 253, 249, 0.96)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
      }
    : undefined

  return (
    <FicharioFicha
      compact
      variant="descoberta"
      codigo={slotCodigo(slot.id)}
      title={title}
      seal={isGuardada ? "✓ Experiência guardada" : null}
      tilt={tilt}
      onSelect={() => onRegisterRequest(slot)}
      style={guardadaStyle}
    >
      {!isGuardada && slot.note ? (
        <p style={styles.discoverySlotPendingNote}>{slot.note}</p>
      ) : null}
    </FicharioFicha>
  )
}
