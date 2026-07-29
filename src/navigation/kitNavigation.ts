import { appRoutes } from "./appRoutes"

export const KIT_PATH = "/kit"

export function isKitPath(path: string): boolean {
  const normalized = path.replace(/\/$/, "") || "/"
  return normalized === KIT_PATH || normalized.endsWith("/kit")
}

export function screenFromKitPath(path: string): string | null {
  return isKitPath(path) ? appRoutes.kit : null
}

export function pathForKitScreen(screen: string): string | null {
  return screen === appRoutes.kit ? KIT_PATH : null
}
