import { entryProduct } from "../../config/productStrategy"
import { socialLinks } from "../../data/socialLinks"

const IMG = "/images/caixa-laboratorio"

export const caixaLaboratorioImages = {
  heroCaixaFechada: `${IMG}/hero-caixa-fechada.webp`,
  caixaAberta: `${IMG}/caixa-aberta.webp`,
  materiais: `${IMG}/materiais.webp`,
  experienciasCompletas: `${IMG}/experiencias-completas.webp`,
} as const

export const caixaLaboratorioData = {
  documentTitle: "Caixa Laboratório da daTeca",
  metaDescription:
    "Caixa Laboratório da daTeca — a primeira expedição física da marca. Manual, ingredientes, frascos e ferramentas para começar. R$ 89,90 + frete R$ 10 para todo o Brasil.",
  canonicalPath: "/caixa-laboratorio",
  ogImage: "/covers/home.webp",
  orderUrl: socialLinks.instagram,

  header: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    cta: "Quero a minha",
  },

  hero: {
    image: "/covers/home.webp",
    imageAlt: "daTeca",
    kicker: "Primeira expedição física",
    title: "Caixa Laboratório da daTeca",
    subtitle:
      "A base da coleção. Uma caixa para explorar, experimentar e descobrir com as próprias mãos.",
    cta: "Quero começar",
  },

  contents: {
    title: "O que vem na caixa",
    lead: "Tudo o que a família precisa para abrir a primeira expedição.",
    image: caixaLaboratorioImages.caixaAberta,
    imageAlt: "Caixa Laboratório aberta com materiais",
    materialsImage: caixaLaboratorioImages.materiais,
    materialsAlt: "Materiais e ingredientes organizados",
    items: [
      "Caixa Laboratório da daTeca",
      "Manual ilustrado",
      "Ingredientes organizados",
      "Frascos",
      "Materiais",
      "Ferramentas básicas para começar",
    ],
  },

  experiences: {
    title: "Experiências que esperam por vocês",
    lead: "Nove descobertas prontas — e materiais para a criança inventar a décima.",
    image: caixaLaboratorioImages.experienciasCompletas,
    imageAlt:
      "As dez experiências da Caixa Laboratório da daTeca reunidas",
  },

  water: {
    title: "Só água.",
    line: "Todo o resto já está na caixa.",
    whisper: "Você só precisa adicionar água.",
  },

  benefits: {
    title: "Por que começar por aqui",
    items: [
      "Primeira experiência física da daTeca",
      "Base completa para a coleção",
      "Manual ilustrado para acompanhar cada descoberta",
      "Ingredientes e ferramentas organizados",
      "Pensada para famílias explorarem juntas",
      "Frete único para todo o Brasil",
    ],
  },

  pricing: {
    title: "Caixa Laboratório da daTeca",
    price: "R$ 89,90",
    priceValue: String(entryProduct.priceBRL),
    shipping: `Frete R$ ${entryProduct.shippingBRL.toFixed(0)},00`,
    shippingNote: `para ${entryProduct.shippingScope}`,
    batch: `Primeiro lote: ${entryProduct.firstBatchUnits} unidades`,
    reminder: "Enquanto houver disponibilidade neste lote.",
    cta: "Quero a minha caixa",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que é a Caixa Laboratório?",
        answer:
          "É o primeiro envio físico da daTeca: uma caixa completa com manual, ingredientes, frascos, materiais e ferramentas básicas para começar a coleção.",
      },
      {
        question: "Preciso de algum material em casa?",
        answer:
          "Na maioria das experiências, basta adicionar água. O restante já vem organizado na caixa.",
      },
      {
        question: "Qual o valor do frete?",
        answer: "O frete é R$ 10,00 para todo o Brasil.",
      },
      {
        question: "Quantas unidades existem neste lote?",
        answer:
          "O primeiro lote tem 100 unidades. Assim que acabar, avisaremos sobre a próxima disponibilidade.",
      },
      {
        question: "Isso é uma assinatura?",
        answer:
          "Não. Nesta etapa você compra a Caixa Laboratório avulsa. O Clube da daTeca chegará depois, como uma assinatura única e simples.",
      },
      {
        question: "A caixa inclui Baú ou Fichário?",
        answer:
          "Ainda não. Baú e Fichário fazem parte da jornada futura e serão lançados em outro momento.",
      },
    ],
  },

  finalCta: {
    title: "Sua primeira expedição começa aqui.",
    text: "Garanta a Caixa Laboratório e abra um mundo de descobertas em família.",
    cta: "Quero a minha caixa",
  },
} as const

const META_KEYS = [
  { attr: "name", key: "description" },
  { attr: "property", key: "og:title" },
  { attr: "property", key: "og:description" },
  { attr: "property", key: "og:image" },
  { attr: "property", key: "og:type" },
  { attr: "property", key: "og:url" },
  { attr: "name", key: "twitter:card" },
  { attr: "name", key: "twitter:title" },
  { attr: "name", key: "twitter:description" },
  { attr: "name", key: "twitter:image" },
] as const

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement("link")
    link.setAttribute("rel", "canonical")
    document.head.appendChild(link)
  }
  link.setAttribute("href", href)
}

function setJsonLd(data: Record<string, unknown>) {
  const id = "caixa-laboratorio-jsonld"
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement("script")
    script.id = id
    script.type = "application/ld+json"
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export function applyCaixaLaboratorioMeta() {
  const { documentTitle, metaDescription, ogImage, canonicalPath, pricing } =
    caixaLaboratorioData
  const origin = window.location.origin
  const pageUrl = new URL(canonicalPath, origin).href
  const imageUrl = new URL(ogImage, origin).href

  document.title = documentTitle
  setMeta("name", "description", metaDescription)
  setMeta("property", "og:title", documentTitle)
  setMeta("property", "og:description", metaDescription)
  setMeta("property", "og:image", imageUrl)
  setMeta("property", "og:type", "product")
  setMeta("property", "og:url", pageUrl)
  setMeta("name", "twitter:card", "summary_large_image")
  setMeta("name", "twitter:title", documentTitle)
  setMeta("name", "twitter:description", metaDescription)
  setMeta("name", "twitter:image", imageUrl)
  setCanonical(pageUrl)

  setJsonLd({
    "@context": "https://schema.org",
    "@type": "Product",
    name: pricing.title,
    description: metaDescription,
    image: [imageUrl],
    brand: { "@type": "Brand", name: "daTeca" },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "BRL",
      price: pricing.priceValue,
      availability: "https://schema.org/LimitedAvailability",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "10.00",
          currency: "BRL",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BR",
        },
      },
    },
  })
}

export function clearCaixaLaboratorioMeta() {
  for (const { attr, key } of META_KEYS) {
    document.querySelector(`meta[${attr}="${key}"]`)?.remove()
  }
  document.querySelector('link[rel="canonical"]')?.remove()
  document.getElementById("caixa-laboratorio-jsonld")?.remove()
}
