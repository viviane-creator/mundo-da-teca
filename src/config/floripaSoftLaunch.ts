/**
 * Pré-venda pelo WhatsApp (temporária).
 * Pedidos via WhatsApp + Pix para todo o Brasil.
 * Desligar com `WHATSAPP_PRESALE_ENABLED = false` quando for para Hotmart.
 */
export const WHATSAPP_PRESALE_ENABLED = true

/** Mantido para compatibilidade — abertura Hotmart futura. */
export const BRAZIL_NATIONAL_OPEN_AT = new Date("2026-08-10T12:00:00-03:00")

/** @deprecated use WHATSAPP_PRESALE_ENABLED */
export const FLORIPA_SOFT_LAUNCH_ENABLED = WHATSAPP_PRESALE_ENABLED

/**
 * WhatsApp de pedidos — só dígitos com DDI.
 * Override opcional: VITE_WHATSAPP_ORDER_PHONE no .env / Vercel.
 */
const DEFAULT_WHATSAPP_PHONE = "5548988600150"

const phoneFromEnv = String(
  import.meta.env.VITE_WHATSAPP_ORDER_PHONE ?? "",
).replace(/\D/g, "")

export const FLORIPA_WHATSAPP_PHONE =
  phoneFromEnv.length >= 12 ? phoneFromEnv : DEFAULT_WHATSAPP_PHONE

export const FLORIPA_WHATSAPP_MESSAGE =
  "Oi! Quero garantir minha Caixa Laboratório da daTeca na pré-venda. 💛"

export function isFloripaSoftLaunchActive(): boolean {
  return WHATSAPP_PRESALE_ENABLED
}

export function getFloripaWhatsAppUrl(): string {
  const text = encodeURIComponent(FLORIPA_WHATSAPP_MESSAGE)
  if (FLORIPA_WHATSAPP_PHONE.length >= 12) {
    return `https://wa.me/${FLORIPA_WHATSAPP_PHONE}?text=${text}`
  }
  return `https://wa.me/?text=${text}`
}

export const floripaSoftLaunchCopy = {
  banner: {
    title: "Pré-venda aberta",
    lead: "Pedidos para todo o Brasil pelo WhatsApp.",
    note: "Frete fixo de R$ 20 para todo o Brasil e entrega gratuita em Florianópolis.",
  },
  intro: {
    title: "A Caixa Laboratório está em pré-venda.",
    paragraphs: [
      "Garanta uma das primeiras unidades da Caixa Laboratório da daTeca diretamente pelo WhatsApp.",
      "Envios para todo o Brasil com frete fixo de R$ 20.",
      "Entrega gratuita em Florianópolis.",
    ],
    closing:
      "As primeiras descobertas já podem começar. Pré-venda pelo WhatsApp, com envio para todo o Brasil.",
  },
  ctaLabel: "QUERO GARANTIR MINHA CAIXA",
  headerCtaLabel: "Quero garantir minha caixa",
  pricing: {
    label: "Valor especial de lançamento",
    price: "R$ 89,90",
    shippingBrazil: "Frete fixo para todo o Brasil: R$ 20",
    shippingFloripa: "Entrega gratuita em Florianópolis",
    payment: "Pagamento por Pix.",
    deliveryNotice:
      "Frete fixo de R$ 20 para entregas em todo o Brasil. Para endereços em Florianópolis, a entrega é gratuita — válida somente no município de Florianópolis.",
    note: "Pré-venda pelo WhatsApp.",
  },
  howTo: {
    title: "Como garantir a sua",
    steps: [
      "Clique no botão e fale conosco pelo WhatsApp.",
      "Informe seu nome, endereço completo e quantidade desejada.",
      "Confirmaremos o valor total e enviaremos os dados para pagamento por Pix.",
      "Após a confirmação, seu pedido estará garantido na pré-venda.",
    ],
  },
} as const
