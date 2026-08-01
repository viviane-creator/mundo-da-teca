import { appRoutes } from "./appRoutes"

export const CAIXA_LABORATORIO_PATH = "/caixa-laboratorio"

export function isCaixaLaboratorioPath(path: string): boolean {
  const normalized = path.replace(/\/$/, "") || "/"
  return (
    normalized === CAIXA_LABORATORIO_PATH ||
    normalized.endsWith("/caixa-laboratorio")
  )
}

export function screenFromCaixaLaboratorioPath(path: string): string | null {
  return isCaixaLaboratorioPath(path) ? appRoutes.caixaLaboratorio : null
}

export function pathForCaixaLaboratorioScreen(screen: string): string | null {
  return screen === appRoutes.caixaLaboratorio ? CAIXA_LABORATORIO_PATH : null
}

/** Mantém query string (ex.: ?manual=true) ao sincronizar a rota. */
export function hrefForCaixaLaboratorioScreen(screen: string): string | null {
  const path = pathForCaixaLaboratorioScreen(screen)
  if (!path) return null
  return `${path}${window.location.search}`
}
