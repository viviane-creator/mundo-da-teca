import { isFloripaSoftLaunchActive } from "../../config/floripaSoftLaunch"

/**
 * Blocos independentes da landing Caixa Laboratório.
 * Ativar, ocultar ou reordenar sem duplicar a página.
 */
export type CaixaLandingBlockId =
  | "manual"
  | "bridge"
  | "floripaIntro"
  | "hero"
  | "experiences"
  | "contents"
  | "water"
  | "howToOrder"
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

/** Ordem na abertura especial Florianópolis. */
export const CAIXA_FLORIPA_BLOCKS: CaixaLandingBlockId[] = [
  "floripaIntro",
  "hero",
  "experiences",
  "contents",
  "water",
  "howToOrder",
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
  if (showManualGift) {
    if (!isFloripaSoftLaunchActive()) return CAIXA_MANUAL_ENTRY_BLOCKS
    return [
      "manual",
      "bridge",
      "floripaIntro",
      "hero",
      "experiences",
      "contents",
      "water",
      "howToOrder",
      "pricing",
      "faq",
    ]
  }
  if (isFloripaSoftLaunchActive()) return CAIXA_FLORIPA_BLOCKS
  return CAIXA_SALES_BLOCKS
}
