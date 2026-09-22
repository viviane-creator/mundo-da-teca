import { HOTMART_CHECKOUT_URL } from "../../config/caixaLaboratorioCheckout"
import { entryProduct } from "../../config/productStrategy"
import { socialLinks } from "../../data/socialLinks"

const IMG = "/images/caixa-laboratorio"

/**
 * Subir este valor sempre que trocar os WebPs da landing.
 * Evita cache do CDN/navegador servir a imagem antiga sob o mesmo nome.
 */
export const CAIXA_IMAGE_VERSION = "20260922y"

function caixaImg(fileName: string): string {
  return `${IMG}/${fileName}?v=${CAIXA_IMAGE_VERSION}`
}

export const caixaLaboratorioImages = {
  /** Abertura da campanha — criança explorando (hero). */
  abertura: caixaImg("abertura-crianca-9-guiadas.webp"),
  /** Pôster campanha 9 guiadas — após o 1º bloco de preço no hero. */
  caixaFechada9Guiadas: caixaImg("caixa-fechada-9-guiadas-2.webp"),
  /** Foto da caixa fechada — seção Tudo organizado. */
  caixaFechada: caixaImg("caixa-fechada.webp"),
  /** Variação da caixa fechada — antes do último bloco de preço. */
  caixaFechada2: caixaImg("caixa-fechada-2.webp"),
  /** Vista de cima da caixa aberta — conteúdos da campanha. */
  materiais: caixaImg("caixa-materiais.webp"),
} as const

export const caixaLaboratorioData = {
  documentTitle:
    "Caixa Laboratório daTeca — presente de Dia das Crianças que vira laboratório em casa",
  metaDescription:
    "Presente de Dia das Crianças: Caixa Laboratório daTeca com 9 experiências guiadas. É só acrescentar água — materiais organizados, manual ilustrado e convite para explorar e inventar. R$ 129,90.",
  canonicalPath: "/caixa-laboratorio",
  ogImage: caixaLaboratorioImages.abertura,
  /** Sempre o link central Hotmart — ver `caixaLaboratorioCheckout.ts`. */
  orderUrl: HOTMART_CHECKOUT_URL,

  header: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    cta: "QUERO PRESENTEAR COM A CAIXA LABORATÓRIO",
  },

  /**
   * Presente para quem chega pelo Instagram (comentário QUERO).
   * Só aparece com `/caixa-laboratorio?manual=true`.
   */
  manualGift: {
    kicker: "Presente daTeca",
    title: "💛 Seu Manual de Descobertas está pronto!",
    paragraphs: [
      "Que alegria ter você por aqui.",
      "Preparei este Manual de Descobertas com o passo a passo das 9 experiências apresentadas nos vídeos.",
      "Espero que ele renda muitos momentos especiais para você e sua família.",
    ],
    cta: "📖 Baixar Manual",
    pdfHref: "/manual-descobertas.pdf",
    pdfFileName: "manual-descobertas.pdf",
    welcomeLines: [
      "✨ Este é apenas o começo.",
      "Bem-vindo à daTeca.",
    ],
  },

  offerBridge: {
    titleLines: [
      "Quer viver essas descobertas",
      "sem sair atrás de material?",
    ],
    text: "O Manual ensina o passo a passo. A Caixa Laboratório já traz ingredientes, frascos e ferramentas organizados — para a família abrir e começar, sem lista de compras e sem improvisar.",
  },

  hero: {
    titleAccessible:
      "Neste Dia das Crianças, dê um presente que vira um laboratório de descobertas.",
    subtitle:
      "Tudo organizado, identificado e guiado para a criança abrir a caixa, escolher uma experiência e começar. Para crianças de 6 a 10 anos, com supervisão de um adulto.",
    dispatchNote: "Envio em até 5 dias úteis.",
    cards: {
      ready: {
        title: "Abriu a caixa, escolheu uma experiência e começou.",
        text: "",
      },
    },
    image: caixaLaboratorioImages.abertura,
    imageAlt:
      "Criança explorando uma experiência com a Caixa Laboratório daTeca — 9 experiências guiadas",
    poster9Guiadas: caixaLaboratorioImages.caixaFechada9Guiadas,
    poster9GuiadasAlt:
      "Dia das Crianças — Caixa Laboratório daTeca: um presente que vira descoberta, 9 experiências guiadas",
    cta: "QUERO PRESENTEAR COM A CAIXA LABORATÓRIO",
    note: "Compra única. Não é assinatura.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  /** Mesmo bloco de preço no hero e no fechamento. */
  pricing: {
    price: entryProduct.priceBRL.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    priceValue: entryProduct.priceBRL.toFixed(2),
    shippingLine1: "Frete fixo de R$ 10 para Sul e Sudeste.",
    shippingLine2: "Frete e prazo calculados no checkout.",
    dispatchNote: "Envio em até 5 dias úteis.",
    purchaseTypeNote: "Compra única. Não é assinatura.",
  },

  offerTrust: ["Checkout seguro pela Hotmart"],

  discoveries: {
    introImage: caixaImg("cartas.webp"),
    introImageAlt:
      "Cartas ilustradas passo a passo das experiências da Caixa Laboratório daTeca",
    titleLines: ["9 experiências guiadas."],
    text: "O manual ilustrado conduz cada experiência passo a passo.",
    items: [
      {
        num: 1,
        name: "Tinta Invisível",
        hint: "Um desenho escondido aparece quando o revelador passa pelo papel.",
        image: caixaImg("tinta-invisivel.webp"),
      },
      {
        num: 2,
        name: "Pedra Líquida",
        hint: "Uma mistura que muda de comportamento quando a criança a toca.",
        image: caixaImg("experiencia-pedra-liquida.webp"),
      },
      {
        num: 3,
        name: "Tornado na Garrafa",
        hint: "Um redemoinho aparece quando a garrafa gira.",
        image: caixaImg("experiencia-tornado.webp"),
      },
      {
        num: 4,
        name: "Água que Anda",
        hint: "A água colorida passa de um copo para outro.",
        image: caixaImg("experiencia-agua-que-anda.webp"),
      },
      {
        num: 5,
        name: "Matéria Mutante",
        hint: "Uma mistura para apertar, esticar e observar.",
        image: caixaImg("experiencia-materia-mutante.webp"),
      },
      {
        num: 6,
        name: "Monstro que Respira",
        hint: "Uma reação faz o balão se encher.",
        image: caixaImg("experiencia-monstro-que-respira.webp"),
      },
      {
        num: 7,
        name: "Força que Move",
        hint: "O magnetismo move pequenos fragmentos sem tocá-los.",
        image: caixaImg("forca-que-move.webp"),
      },
      {
        num: 8,
        name: "Cobra de Espuma",
        hint: "O sopro faz uma cobra de bolhas crescer.",
        image: caixaImg("experiencia-cobra-arco-iris.webp"),
      },
      {
        num: 9,
        name: "Neve d’Água",
        hint: "Um pozinho se transforma em neve ao receber água.",
        image: caixaImg("experiencia-neve-dagua.webp"),
      },
    ],
  },

  freeExploration: {
    titleLines: ["E depois, a curiosidade continua."],
    text: "Depois das experiências guiadas, os materiais que permanecem na caixa convidam a criança a testar ideias, combinar possibilidades e inventar do seu jeito.",
    image: caixaImg("decima.webp"),
    imageAlt:
      "Criança explorando com pipeta e frascos da Caixa Laboratório daTeca",
  },

  contents: {
    titleLines: ["Tudo organizado."],
    lead: "Ingredientes identificados, ferramentas e manual ilustrado dentro da caixa.",
    closedImage: caixaLaboratorioImages.caixaFechada,
    closedImageAlt:
      "Caixa Laboratório daTeca fechada, com materiais das experiências organizados ao redor da embalagem",
    image: caixaLaboratorioImages.materiais,
    imageAlt:
      "Vista de cima da Caixa Laboratório daTeca aberta, com frascos, ingredientes, óculos de proteção e manual organizados",
    items: [
      "Ingredientes separados e identificados",
      "Frascos, copinhos e ferramentas",
      "Óculos de proteção e materiais de apoio",
      "Manual ilustrado com o passo a passo",
    ],
  },

  brandMoment: {
    titleLines: ["Existe um mundo inteiro", "esperando para ser descoberto."],
    text: "A daTeca acredita que a infância continua curiosa — e que as melhores descobertas acontecem com tempo, presença e as mãos na experiência.",
    note: "Um presente que também convida a um tempo fora das telas — sem pressa, só curiosidade compartilhada.",
  },

  water: {
    titleLines: ["É só acrescentar água."],
    text: "Os ingredientes e materiais das experiências guiadas já estão na caixa.",
  },

  buy: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    titleLines: ["Caixa Laboratório", "daTeca"],
    image: caixaLaboratorioImages.caixaFechada2,
    imageAlt:
      "Caixa Laboratório daTeca fechada — vista alternativa antes da compra",
    cta: "QUERO PRESENTEAR COM A CAIXA LABORATÓRIO",
    note: "Compra única. Não é assinatura.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que vem na Caixa Laboratório?",
        answer:
          "A caixa vem com os materiais e ferramentas necessários para realizar 9 experiências guiadas, além de um manual ilustrado com o passo a passo. Os ingredientes vêm separados e identificados para facilitar o uso.",
      },
      {
        question: "Preciso comprar algum outro material?",
        answer:
          "Para as experiências guiadas, os materiais principais já estão na caixa. É só acrescentar água.",
      },
      {
        question: "Para qual idade a Caixa Laboratório é indicada?",
        answer:
          "Ela foi pensada principalmente para crianças de 6 a 10 anos, sempre com a supervisão de um adulto.",
      },
      {
        question: "É uma assinatura?",
        answer: "Não. A Caixa Laboratório é uma compra única.",
      },
      {
        question: "Quantas experiências vêm na caixa?",
        answer:
          "São 9 experiências guiadas. Depois delas, alguns materiais ainda podem ser usados para novas explorações e brincadeiras livres.",
      },
      {
        question: "Como funciona o frete?",
        answer:
          "O frete é fixo em R$ 10 para Sul e Sudeste. Para as demais regiões, valor e prazo são calculados no checkout.",
      },
      {
        question: "Em quanto tempo a caixa é enviada?",
        answer:
          "O pedido é preparado e enviado em até 5 dias úteis após a confirmação do pagamento.",
      },
      {
        question: "Precisa de supervisão de um adulto?",
        answer:
          "Sim. A proposta é que a criança explore com autonomia, mas sempre com um adulto por perto durante as experiências.",
      },
      {
        question: "Os materiais vêm identificados?",
        answer:
          "Sim. Os ingredientes e materiais vêm organizados e identificados para facilitar o uso junto ao manual.",
      },
      {
        question: "Posso dar de presente?",
        answer:
          "Sim. A Caixa Laboratório foi pensada também como presente e reúne as experiências e os materiais em uma única embalagem.",
      },
    ],
  },

  footer: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    text: "Experiências para descobrir, criar e brincar com as próprias mãos.",
    instagramLabel: "Instagram",
    instagramUrl: socialLinks.instagram,
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

const CAIXA_HERO_PRELOAD_ID = "caixa-laboratorio-hero-preload"

function setHeroImagePreloads(urls: string[]) {
  clearHeroImagePreloads()
  urls.forEach((href, index) => {
    const link = document.createElement("link")
    link.id = `${CAIXA_HERO_PRELOAD_ID}-${index}`
    link.rel = "preload"
    link.as = "image"
    link.href = href
    document.head.appendChild(link)
  })
}

function clearHeroImagePreloads() {
  document
    .querySelectorAll(`link[id^="${CAIXA_HERO_PRELOAD_ID}"]`)
    .forEach((el) => el.remove())
}

export function applyCaixaLaboratorioMeta() {
  const { documentTitle, metaDescription, ogImage, canonicalPath, buy, pricing } =
    caixaLaboratorioData
  const origin = window.location.origin
  const pageUrl = new URL(canonicalPath, origin).href
  const imageUrl = new URL(ogImage, origin).href
  const poster9GuiadasUrl = new URL(
    caixaLaboratorioImages.caixaFechada9Guiadas,
    origin,
  ).href
  const caixaFechadaUrl = new URL(caixaLaboratorioImages.caixaFechada, origin).href
  const caixaFechada2Url = new URL(caixaLaboratorioImages.caixaFechada2, origin).href

  setHeroImagePreloads([imageUrl, poster9GuiadasUrl, caixaFechadaUrl, caixaFechada2Url])

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
    name: buy.titleLines.join(" "),
    description: metaDescription,
    image: [imageUrl, poster9GuiadasUrl, caixaFechadaUrl, caixaFechada2Url],
    brand: { "@type": "Brand", name: "daTeca" },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "BRL",
      price: pricing.priceValue,
      availability: "https://schema.org/InStock",
    },
  })
}

export function clearCaixaLaboratorioMeta() {
  for (const { attr, key } of META_KEYS) {
    document.querySelector(`meta[${attr}="${key}"]`)?.remove()
  }
  document.querySelector('link[rel="canonical"]')?.remove()
  document.getElementById("caixa-laboratorio-jsonld")?.remove()
  clearHeroImagePreloads()
}
