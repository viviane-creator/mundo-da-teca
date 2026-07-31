import { appRoutes } from "./appRoutes"

export const PEDIDO_CONFIRMADO_PATH = "/pedido-confirmado"

export function isPedidoConfirmadoPath(path: string): boolean {
  const normalized = path.replace(/\/$/, "") || "/"
  return (
    normalized === PEDIDO_CONFIRMADO_PATH ||
    normalized.endsWith("/pedido-confirmado")
  )
}

export function screenFromPedidoConfirmadoPath(path: string): string | null {
  return isPedidoConfirmadoPath(path) ? appRoutes.pedidoConfirmado : null
}

export function pathForPedidoConfirmadoScreen(screen: string): string | null {
  return screen === appRoutes.pedidoConfirmado ? PEDIDO_CONFIRMADO_PATH : null
}
