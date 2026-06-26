import { isCollectionDetailScreen } from "../discoveryData"

const CLUB_EXCLUSIVE_SCREENS = new Set([
  "diario",
  "diario-guardar",
  "colecoes",
  "biblioteca",
])

export function isClubExclusiveScreen(screen: string): boolean {
  return CLUB_EXCLUSIVE_SCREENS.has(screen) || isCollectionDetailScreen(screen)
}
