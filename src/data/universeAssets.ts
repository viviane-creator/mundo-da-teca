export type UniverseId =
  | "laboratorio"
  | "cozinha"
  | "oficina"
  | "faz-de-conta"
  | "quintal"
  | "observatorio"

export const UNIVERSE_IDS: readonly UniverseId[] = [
  "laboratorio",
  "cozinha",
  "oficina",
  "faz-de-conta",
  "quintal",
  "observatorio",
] as const

const UNIVERSE_COVER_DIR = "/images/universos"

/** Capa editorial padrão: /images/universos/{id}-capa.webp */
export function universeCoverPath(universeId: UniverseId): string {
  return `${UNIVERSE_COVER_DIR}/${universeId}-capa.webp`
}

export function universeIconPath(universeId: UniverseId): string {
  return `/universos/${universeId}.svg`
}
