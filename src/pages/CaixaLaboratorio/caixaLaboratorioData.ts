import { HOTMART_CHECKOUT_URL } from "../../config/caixaLaboratorioCheckout"
import { entryProduct } from "../../config/productStrategy"
import { socialLinks } from "../../data/socialLinks"

const IMG = "/images/caixa-laboratorio"

export const caixaLaboratorioImages = {
  caixaAberta: `${IMG}/caixa-experiencias.webp`,
  experienciasCompletas: `${IMG}/experiencias-completas.webp`,
} as const

export const caixaLaboratorioData = {
  documentTitle: "Manual de Descobertas + Caixa Laboratório da daTeca",
  metaDescription:
    "Baixe o Manual de Descobertas da daTeca e conheça a Caixa Laboratório: 9 experiências guiadas e a décima inventada pela criança. Preço de lançamento R$ 89,90.",
  canonicalPath: "/caixa-laboratorio",
  ogImage: caixaLaboratorioImages.caixaAberta,
  /** Sempre o link central Hotmart — ver `caixaLaboratorioCheckout.ts`. */
  orderUrl: HOTMART_CHECKOUT_URL,

  header: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    cta: "Quero garantir a minha Caixa Laboratório",
  },

  /**
   * Presente para quem chega pelo Instagram (comentário QUERO).
   * Só aparece com `/caixa-laboratorio?manual=true`.
   */
  manualGift: {
    kicker: "Presente da daTeca",
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
    title: "Quer viver essas descobertas sem sair atrás de material?",
    text: "O Manual ensina o passo a passo. A Caixa Laboratório já traz ingredientes, frascos e ferramentas organizados — para a família abrir e começar, sem lista de compras e sem improvisar.",
  },

  hero: {
    kicker: "CAIXA LABORATÓRIO daTeca",
    titleNum: "10",
    titleRest: " descobertas dentro de uma caixa.",
    text: "Uma caixa completa para experimentar, criar e descobrir com as próprias mãos.",
    cards: {
      tenth: {
        eyebrowPrefix: "9 + 1",
        eyebrowSuffix: " DESCOBERTAS",
        title: "A décima é inventada pela criança.",
        text: "Nove experiências vêm prontas para começar. A última nasce da curiosidade e da imaginação.",
      },
      water: {
        eyebrow: "TUDO PRONTO",
        titleLead: "Você ",
        titleEmphasis: "só adiciona água",
        titleEnd: ".",
        text: "Os outros materiais necessários já vão separados e organizados dentro da caixa.",
      },
    },
    benefits: [
      "Materiais organizados",
      "Manual ilustrado",
      "Frascos, pipetas e ferramentas incluídos",
    ],
    image: caixaLaboratorioImages.caixaAberta,
    imageAlt: "Caixa Laboratório da daTeca aberta com materiais",
    cta: "QUERO MINHA CAIXA LABORATÓRIO",
    note: "Compra única.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  /** Mesmo bloco de preço no hero e no fechamento. */
  pricing: {
    label: "PREÇO DE LANÇAMENTO",
    price: "R$ 89,90",
    priceValue: String(entryProduct.priceBRL),
    nextLotLabel: "Próximo lote:",
    nextPrice: "R$ 119,90",
    savings: "Você economiza R$ 30 neste primeiro lote.",
    units: `Somente ${entryProduct.firstBatchUnits} unidades neste valor.`,
    shipping: "Frete calculado pelo CEP no checkout.",
  },

  discoveries: {
    title: "9 experiências prontas para começar.",
    text: "Cada experiência foi pensada para provocar curiosidade, surpresa e vontade de descobrir o que acontece.",
    items: [
      "Tornado na Garrafa",
      "Matéria Mutante",
      "Monstro que Respira",
      "Vulcão Ativo",
      "Lava Viva",
      "Água que Anda",
      "Pedra Líquida",
      "Cobra Arco-Íris",
      "Neve d’Água",
    ],
    image: caixaLaboratorioImages.experienciasCompletas,
    imageAlt: "As nove experiências da Caixa Laboratório da daTeca",
    tenthTitle: "E a décima descoberta?",
    tenthLead: "Essa é inventada pela própria criança.",
    tenthText:
      "A caixa também inclui materiais para misturar, testar e criar novas experiências.",
    tenthName: "A descoberta que ainda não existe.",
    tenthNameHintLead: "Essa ganha nome ",
    tenthNameHintEmphasis: "quando a criança inventar",
    tenthNameHintEnd: ".",
  },

  contents: {
    title: "Tudo organizado. Tudo pronto para começar.",
    text: "Dentro da Caixa Laboratório, a criança encontra os ingredientes, recipientes e ferramentas utilizados nas experiências.",
    items: [
      "Ingredientes separados e identificados",
      "Frascos e potinhos para as experiências",
      "Pipetas, copinhos e colheres",
      "Corantes",
      "Óculos de proteção",
      "Materiais para as 9 descobertas",
      "Materiais extras para o laboratório livre",
      "Manual ilustrado com o passo a passo",
    ],
  },

  water: {
    title: "Em casa, você só precisa adicionar água.",
    text: "Os outros materiais necessários para as experiências já vão organizados dentro da caixa.",
    note: "Abra a caixa, escolha uma descoberta e comece.",
  },

  buy: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    title: "Caixa Laboratório da daTeca",
    summary:
      "10 descobertas para viver: 9 experiências guiadas e a décima inventada pela criança.",
    cta: "QUERO MINHA CAIXA LABORATÓRIO",
    note: "Compra única.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que vem na Caixa Laboratório?",
        answer:
          "A caixa inclui os ingredientes, frascos, potinhos, pipetas, copinhos, colheres, corantes, óculos de proteção e outros materiais utilizados nas nove experiências. Ela também acompanha um manual ilustrado e materiais extras para a criança criar novas descobertas.",
      },
      {
        question: "Preciso comprar algum outro material?",
        answer:
          "Não. Para realizar as experiências, a família só precisa adicionar água. Os demais materiais necessários já vão organizados dentro da caixa.",
      },
      {
        question: "Para qual idade a caixa é indicada?",
        answer:
          "A Caixa Laboratório foi pensada especialmente para crianças de 6 a 10 anos. As experiências devem ser realizadas com a presença e a participação de um adulto.",
      },
      {
        question: "A Caixa Laboratório é uma assinatura?",
        answer:
          "Não. A Caixa Laboratório é uma compra única. Você recebe a caixa completa com os materiais e o manual das experiências.",
      },
      {
        question: "Como é calculado o frete?",
        answer:
          "O valor e o prazo de entrega são calculados no checkout de acordo com o CEP informado. Enviamos para todo o Brasil.",
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

export function applyCaixaLaboratorioMeta() {
  const { documentTitle, metaDescription, ogImage, canonicalPath, buy, pricing } =
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
    name: buy.title,
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
