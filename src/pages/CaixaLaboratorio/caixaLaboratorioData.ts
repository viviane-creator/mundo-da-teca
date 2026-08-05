import { HOTMART_CHECKOUT_URL } from "../../config/caixaLaboratorioCheckout"
import {
  entryProduct,
  entryProductShippingFaqAnswer,
  entryProductShippingLabel,
} from "../../config/productStrategy"
import { socialLinks } from "../../data/socialLinks"

const IMG = "/images/caixa-laboratorio"

/**
 * Subir este valor sempre que trocar os WebPs da landing.
 * Evita cache do CDN/navegador servir a imagem antiga sob o mesmo nome.
 */
export const CAIXA_IMAGE_VERSION = "20260804a"

function caixaImg(fileName: string): string {
  return `${IMG}/${fileName}?v=${CAIXA_IMAGE_VERSION}`
}

export const caixaLaboratorioImages = {
  /** Banner de convite com a caixa aberta (hero). */
  convite: caixaImg("caixa-convite.webp"),
  /** Infográfico com o que vem na caixa (conteúdos). */
  materiais: caixaImg("caixa-materiais.webp"),
  experienciasCompletas: caixaImg("experiencias-completas.webp"),
} as const

export const caixaLaboratorioData = {
  documentTitle: "Caixa Laboratório daTeca — 10 descobertas para experimentar em família",
  metaDescription:
    "Caixa Laboratório daTeca: kit completo com cerca de 45 itens, 9 experiências guiadas e a décima inventada pela criança. Preço de lançamento R$ 89,90 + frete promocional R$ 9,90.",
  canonicalPath: "/caixa-laboratorio",
  ogImage: caixaLaboratorioImages.experienciasCompletas,
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
    kicker: "CAIXA LABORATÓRIO daTeca",
    titleNum: "10",
    titleRestLines: [" descobertas", "dentro de uma caixa."],
    subtitle:
      "Um kit completo de experimentos para famílias — pronto para abrir, explorar e criar juntos.",
    text: "Uma caixa completa para experimentar, criar e descobrir com as próprias mãos.",
    cards: {
      tenth: {
        eyebrowPrefix: "9 + 1",
        eyebrowSuffix: " DESCOBERTAS",
        titleLines: ["A décima é inventada", "pela criança."],
        text: "Nove experiências vêm prontas para começar. A última nasce da curiosidade e da imaginação.",
      },
      ready: {
        eyebrow: "TUDO ORGANIZADO",
        titleLead: "Abriu a caixa, ",
        titleEmphasis: "escolheu uma descoberta",
        titleEnd: " e começou.",
        text: "Sem lista de compras. Sem correr atrás de material.",
      },
    },
    benefits: [
      "Cerca de 45 itens, cuidadosamente separados",
      "Manual ilustrado passo a passo",
      "Materiais extras para inventar além das nove experiências",
    ],
    image: caixaLaboratorioImages.experienciasCompletas,
    imageAlt:
      "Criança explorando descobertas com a Caixa Laboratório daTeca",
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
    shipping: entryProductShippingLabel,
  },

  offerTrust: [
    entryProductShippingLabel,
    "Envio em até 5 dias úteis",
    "Checkout seguro pela Hotmart",
    "Garantia oficial Hotmart",
    "Parcelamento em até 10x",
  ],

  discoveries: {
    titleLines: ["9 experiências prontas", "para começar."],
    text: "Cada descoberta foi pensada para provocar curiosidade, surpresa e vontade de explorar o que acontece.",
    items: [
      {
        name: "Tornado na Garrafa",
        hint: "Um redemoinho ganha forma dentro da garrafa.",
        image: caixaImg("experiencia-tornado.webp"),
      },
      {
        name: "Matéria Mutante",
        hint: "Um líquido muda de forma diante dos olhos.",
        image: caixaImg("experiencia-materia-mutante.webp"),
      },
      {
        name: "Monstro que Respira",
        hint: "Uma reação faz o frasco parecer respirar.",
        image: caixaImg("experiencia-monstro.webp"),
      },
      {
        name: "Vulcão Ativo",
        hint: "Uma erupção acontece em miniatura.",
        image: caixaImg("experiencia-vulcao.webp"),
      },
      {
        name: "Lava Viva",
        hint: "Um fluxo colorido se move como lava.",
        image: caixaImg("experiencia-lava-viva.webp"),
      },
      {
        name: "Água que Anda",
        hint: "A água parece desafiar a gravidade.",
        image: caixaImg("experiencia-agua-que-anda.webp"),
      },
      {
        name: "Pedra Líquida",
        hint: "Um líquido se transforma em algo sólido.",
        image: caixaImg("experiencia-pedra-liquida.webp"),
      },
      {
        name: "Cobra Arco-Íris",
        hint: "Cores se espalham em movimento.",
        image: caixaImg("experiencia-cobra-arco-iris.webp"),
      },
      {
        name: "Neve d’Água",
        hint: "Flocos surgem de uma reação delicada.",
        image: caixaImg("experiencia-neve-dagua.webp"),
      },
    ],
    tenthTitleLines: ["E a décima", "descoberta?"],
    tenthLead: "Essa é inventada pela própria criança.",
    tenthText:
      "A caixa inclui materiais extras — frascos, pózinhos e ingredientes — para misturar, testar e criar novas experiências além das nove guiadas.",
    tenthName: "A descoberta que ainda não existe.",
    tenthNameHintLead: "Essa ganha nome ",
    tenthNameHintEmphasis: "quando a criança inventar",
    tenthNameHintEnd: ".",
  },

  contents: {
    titleLines: ["Tudo organizado.", "Tudo pronto para começar."],
    lead: "Cerca de 45 itens, cuidadosamente separados dentro da caixa.",
    text: "Ingredientes, recipientes, frascos, equipamentos e manual ilustrado — tudo identificado e pronto para a família abrir e começar.",
    closing: "Sem precisar comprar materiais. Sem improvisar.",
    image: caixaLaboratorioImages.materiais,
    imageAlt:
      "O que vem na Caixa Laboratório daTeca: frascos, equipamentos, ingredientes e materiais organizados",
    items: [
      "Ingredientes separados e identificados",
      "Frascos, potinhos e recipientes",
      "Pipetas, copinhos e colheres",
      "Corantes e líquidos das experiências",
      "Óculos de proteção e equipamentos",
      "Materiais para as 9 descobertas guiadas",
      "Materiais extras para o laboratório livre",
      "Manual ilustrado com o passo a passo",
    ],
  },

  brandMoment: {
    titleLines: ["Existe um mundo inteiro", "esperando para ser descoberto."],
    text: "A daTeca acredita que a infância continua curiosa — e que as melhores descobertas acontecem longe das telas, com tempo, presença e as mãos na experiência.",
    note: "A Caixa Laboratório é uma porta de entrada para esse universo.",
  },

  water: {
    titleLines: ["Em casa, você só precisa", "adicionar água."],
    text: "Os ingredientes, frascos, equipamentos e demais materiais já vão separados e organizados dentro da caixa.",
    note: "Abriu, escolheu uma descoberta e começou.",
  },

  buy: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    titleLines: ["Caixa Laboratório", "daTeca"],
    summaryLines: [
      "10 descobertas para viver:",
      "9 experiências guiadas e a décima inventada pela criança.",
    ],
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
          "Não. A caixa traz tudo organizado para as nove experiências guiadas e para o laboratório livre. Em casa, a família só precisa adicionar água.",
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
        question: "Como funciona o frete?",
        answer: entryProductShippingFaqAnswer,
      },
      {
        question: "Em quanto tempo a caixa é enviada?",
        answer:
          "Após a confirmação do pagamento, o envio acontece em até 5 dias úteis. O prazo de entrega varia conforme a região e a transportadora.",
      },
      {
        question: "Posso parcelar a compra?",
        answer:
          "Sim. O checkout pela Hotmart permite parcelamento em até 10x, conforme as opções disponíveis no momento da compra.",
      },
      {
        question: "Como funciona a garantia?",
        answer:
          "A compra é processada pela Hotmart, que oferece garantia oficial conforme as condições informadas no checkout.",
      },
      {
        question: "E quando algum material acabar?",
        answer:
          "Vários itens da caixa podem ser reutilizados diversas vezes — frascos, potinhos, pipetas e equipamentos. Os consumíveis, como pózinhos e corantes, são fáceis de encontrar no dia a dia. Em breve, a daTeca também disponibilizará kits oficiais de reposição.",
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
        shippingRate: {
          "@type": "MonetaryAmount",
          value: String(entryProduct.shippingBRL),
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
