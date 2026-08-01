/**
 * Blocos independentes da landing Caixa Laboratório.
 * Ativar, ocultar ou reordenar sem duplicar a página.
 */
export type CaixaLandingBlockId =
  | "manual"
  | "bridge"
  | "hero"
  | "experiences"
  | "contents"
  | "water"
  | "pricing"
  | "faq"

/** Ordem padrão da página de vendas (sem o presente do manual). */
export const CAIXA_SALES_BLOCKS: CaixaLandingBlockId[] = [
  "hero",
  "experiences",
  "contents",
  "water",
  "pricing",
  "faq",
]

/** Ordem quando a entrada é Instagram (?manual=true). */
export const CAIXA_MANUAL_ENTRY_BLOCKS: CaixaLandingBlockId[] = [
  "manual",
  "bridge",
  ...CAIXA_SALES_BLOCKS,
]

export function readManualGiftQuery(
  search: string = typeof window !== "undefined" ? window.location.search : "",
): boolean {
  const params = new URLSearchParams(search)
  const value = params.get("manual")
  if (value == null) return false
  const normalized = value.trim().toLowerCase()
  return normalized === "true" || normalized === "1"
}

export function resolveCaixaLandingBlocks(
  showManualGift: boolean,
): CaixaLandingBlockId[] {
  return showManualGift ? CAIXA_MANUAL_ENTRY_BLOCKS : CAIXA_SALES_BLOCKS
}
