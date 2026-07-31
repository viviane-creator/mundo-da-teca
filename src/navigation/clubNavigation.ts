import { CLUB_MARKETING_ENABLED } from "../config/productStrategy"
import type { ClubModalityId } from "../data/clubModalities"
import { appRoutes } from "./appRoutes"

export type ClubModalityScreen =
  | "clube-explorador-digital"
  | "clube-mundo-descobertas"
  | "clube-mundo-tesouros"
  | "clube-expedicao-completa"

export const CLUB_HUB_PATH = "/clube"

type ClubRoute = {
  screen: ClubModalityScreen
  path: string
}

export const clubModalityRoutes: Record<ClubModalityId, ClubRoute> = {
  "explorador-digital": {
    screen: "clube-explorador-digital",
    path: "/clube/explorador-digital",
  },
  "mundo-descobertas": {
    screen: "clube-mundo-descobertas",
    path: "/clube/meu-mundo-descobertas",
  },
  "mundo-tesouros": {
    screen: "clube-mundo-tesouros",
    path: "/clube/meu-mundo-tesouros",
  },
  "expedicao-completa": {
    screen: "clube-expedicao-completa",
    path: "/clube/expedicao-completa",
  },
}

const screenToModalityId = Object.fromEntries(
  Object.entries(clubModalityRoutes).map(([id, route]) => [route.screen, id]),
) as Record<ClubModalityScreen, ClubModalityId>

export function isClubModalityScreen(
  screen: string,
): screen is ClubModalityScreen {
  return screen in screenToModalityId
}

export function clubModalityIdFromScreen(
  screen: ClubModalityScreen,
): ClubModalityId {
  return screenToModalityId[screen]
}

export function clubModalityScreen(id: ClubModalityId): ClubModalityScreen {
  return clubModalityRoutes[id].screen
}

export function clubModalityPath(id: ClubModalityId): string {
  return clubModalityRoutes[id].path
}

export function screenFromClubPath(path: string): string | null {
  const normalized = path.replace(/\/$/, "") || "/"
  const isClubPath =
    normalized === CLUB_HUB_PATH ||
    normalized.endsWith("/clube") ||
    Object.values(clubModalityRoutes).some(
      (route) =>
        normalized === route.path || normalized.endsWith(route.path),
    )

  if (!isClubPath) return null

  // Rotas antigas do Clube redirecionam para a Home enquanto o marketing estiver off.
  if (!CLUB_MARKETING_ENABLED) {
    return appRoutes.home
  }

  if (normalized === CLUB_HUB_PATH || normalized.endsWith("/clube")) {
    return appRoutes.clube
  }

  for (const route of Object.values(clubModalityRoutes)) {
    if (normalized === route.path || normalized.endsWith(route.path)) {
      return route.screen
    }
  }

  return null
}

export function pathForClubScreen(screen: string): string | null {
  if (!CLUB_MARKETING_ENABLED) return null

  if (screen === appRoutes.clube) return CLUB_HUB_PATH

  if (isClubModalityScreen(screen)) {
    const id = clubModalityIdFromScreen(screen)
    return clubModalityRoutes[id].path
  }

  return null
}
