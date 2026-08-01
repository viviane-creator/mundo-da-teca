import { appRoutes } from "./appRoutes"

export const PRE_LAUNCH_PATH = "/pre-lancamento"

export function isPreLaunchPath(path: string): boolean {
  const normalized = path.replace(/\/$/, "") || "/"
  return (
    normalized === PRE_LAUNCH_PATH || normalized.endsWith("/pre-lancamento")
  )
}

export function screenFromPreLaunchPath(path: string): string | null {
  return isPreLaunchPath(path) ? appRoutes.preLancamento : null
}

export function pathForPreLaunchScreen(screen: string): string | null {
  return screen === appRoutes.preLancamento ? PRE_LAUNCH_PATH : null
}

/** Navegação SPA para a página de pré-lançamento (sem reload). */
export function navigateToPreLaunch() {
  if (window.location.pathname.replace(/\/$/, "") === PRE_LAUNCH_PATH) return
  window.history.pushState(
    { screen: appRoutes.preLancamento },
    "",
    PRE_LAUNCH_PATH,
  )
  window.dispatchEvent(new PopStateEvent("popstate"))
}
