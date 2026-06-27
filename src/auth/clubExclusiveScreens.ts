import { isCollectionDetailScreen } from "../discoveryData"
import { meuMundoClubSeal } from "../data/meuMundoMock"

const CLUB_EXCLUSIVE_SCREENS = new Set([
  "diario",
  "diario-guardar",
  "colecoes",
  "biblioteca",
])

export { meuMundoClubSeal as clubExclusiveSeal }

export function isClubExclusiveScreen(screen: string): boolean {
  return CLUB_EXCLUSIVE_SCREENS.has(screen) || isCollectionDetailScreen(screen)
}

/** Fichas dos universos marcadas como exclusivas do Clube */
export function isClubExclusiveFicha(content: { isFree: boolean }): boolean {
  return !content.isFree
}
