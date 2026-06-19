export type AtelierProductScreen = `produto-${string}`

export function isAtelierProductScreen(
  screen: string,
): screen is AtelierProductScreen {
  return screen.startsWith("produto-")
}

export function getAtelierProductId(screen: string): string {
  return screen.slice("produto-".length)
}

export function toAtelierProductScreen(id: string): AtelierProductScreen {
  return `produto-${id}`
}
