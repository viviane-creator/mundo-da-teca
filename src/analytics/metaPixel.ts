import { entryProduct } from "../config/productStrategy"

export const META_PIXEL_ID = "1363721089222083"

export const META_CAIXA_PRODUCT = {
  content_name: entryProduct.name,
  content_type: "product" as const,
  value: entryProduct.priceBRL,
  currency: "BRL" as const,
}

type FbqCommand = "init" | "track"

type FbqFunction = {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  loaded?: boolean
  version?: string
  push?: FbqFunction
}

declare global {
  interface Window {
    fbq?: FbqFunction
    _fbq?: FbqFunction
  }
}

let initPromise: Promise<void> | null = null
let pixelInitialized = false

function bootstrapFbq(): FbqFunction {
  if (window.fbq) return window.fbq

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args)
      return
    }
    fbq.queue.push(args)
  } as FbqFunction

  fbq.queue = []
  fbq.loaded = true
  fbq.version = "2.0"
  fbq.push = fbq
  window.fbq = fbq
  window._fbq = fbq

  if (!document.querySelector('script[data-meta-pixel="true"]')) {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"
    script.dataset.metaPixel = "true"
    const firstScript = document.getElementsByTagName("script")[0]
    firstScript.parentNode?.insertBefore(script, firstScript)
  }

  return fbq
}

/** Carrega o script e inicializa o pixel uma única vez. */
export function initMetaPixel(): Promise<void> {
  if (pixelInitialized) return Promise.resolve()
  if (initPromise) return initPromise

  initPromise = new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve()
      return
    }

    const fbq = bootstrapFbq()
    fbq("init", META_PIXEL_ID)
    pixelInitialized = true
    resolve()
  })

  return initPromise
}

export function trackMetaPageView(): void {
  if (!pixelInitialized || typeof window.fbq !== "function") return
  window.fbq("track", "PageView")
}

export function trackMetaViewContent(): void {
  if (!pixelInitialized || typeof window.fbq !== "function") return
  window.fbq("track", "ViewContent", {
    content_name: META_CAIXA_PRODUCT.content_name,
    content_type: META_CAIXA_PRODUCT.content_type,
    value: META_CAIXA_PRODUCT.value,
    currency: META_CAIXA_PRODUCT.currency,
  })
}

export function trackMetaInitiateCheckout(): void {
  if (!pixelInitialized || typeof window.fbq !== "function") return
  window.fbq("track", "InitiateCheckout", {
    content_name: META_CAIXA_PRODUCT.content_name,
    value: META_CAIXA_PRODUCT.value,
    currency: META_CAIXA_PRODUCT.currency,
  })
}
