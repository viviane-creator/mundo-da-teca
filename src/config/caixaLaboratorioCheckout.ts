import { entryProduct } from "./productStrategy"

/**
 * Checkout Hotmart — Caixa Laboratório da daTeca
 *
 * Único ponto do link de pagamento. Todos os botões de compra usam isto.
 * Não usar Instagram nos botões de compra.
 *
 * Também aceita override via VITE_HOTMART_CHECKOUT_URL no .env / Vercel.
 */
const checkoutUrl = "https://pay.hotmart.com/D106988435D"

export const HOTMART_CHECKOUT_URL =
  checkoutUrl.trim() ||
  String(import.meta.env.VITE_HOTMART_CHECKOUT_URL ?? "").trim()

/** `true` somente quando o link oficial da Hotmart estiver configurado. */
export const isHotmartCheckoutReady = HOTMART_CHECKOUT_URL.length > 0

export type CheckoutClickOrigin = "header" | "hero" | "bloco_final"

type BeginCheckoutPayload = {
  event: "begin_checkout"
  product: string
  value: number
  currency: "BRL"
  origem: CheckoutClickOrigin
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Clique de saída para o checkout Hotmart — sem dados pessoais. */
export function trackBeginCheckout(origem: CheckoutClickOrigin) {
  const payload: BeginCheckoutPayload = {
    event: "begin_checkout",
    product: entryProduct.name,
    value: entryProduct.priceBRL,
    currency: "BRL",
    origem,
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ ...payload })

  if (typeof window.gtag === "function") {
    window.gtag("event", "begin_checkout", {
      currency: payload.currency,
      value: payload.value,
      items: [
        {
          item_name: payload.product,
          price: payload.value,
          quantity: 1,
        },
      ],
      checkout_origin: origem,
    })
  }
}
