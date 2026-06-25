import { ficharioUniverses } from "./minhaColecaoMock"

export function discoverySlotKey(universeId: string, slotId: string): string {
  return `${universeId}::${slotId}`
}

export function buildInitialDiscoveryRegistry(): Set<string> {
  const registered = new Set<string>()

  for (const universe of ficharioUniverses) {
    for (const slot of universe.slots) {
      if (slot.status === "concluida") {
        registered.add(discoverySlotKey(universe.id, slot.id))
      }
    }
  }

  return registered
}
