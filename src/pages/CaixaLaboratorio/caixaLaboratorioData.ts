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
export const CAIXA_IMAGE_VERSION = "20260805a"

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
    "Caixa Laboratório daTeca: kit completo com mais de 45 itens, experiências guiadas e Laboratório Livre. Preço de lançamento R$ 89,90 + frete promocional R$ 9,90.",
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
      "Um kit completo de experiências para famílias — pronto para abrir, explorar e criar juntos.",
    cards: {
      tenth: {
        eyebrowPrefix: "9 + 1",
        eyebrowSuffix: " DESCOBERTAS",
        titleLines: ["E o Laboratório Livre?", "A sua própria descoberta."],
        text: "As experiências guiadas vêm no manual. O Laboratório Livre é aberto — frascos, pipetas e equipamentos para inventar.",
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
      "Frascos, pipetas e equipamentos incluídos",
      "Manual ilustrado passo a passo",
      "Materiais extras para o Laboratório Livre",
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
    "Frete promocional R$ 9,90 para todo Brasil",
    "Envio em até 5 dias úteis",
    "Checkout seguro pela Hotmart",
    "Garantia oficial Hotmart",
    "Parcelamento em até 10x",
  ],

  discoveries: {
    titleLines: ["Uma tarde inteira", "de descobertas."],
    text: "Oito experiências guiadas e um laboratório livre — cada convite para brincar, observar e estar presente, juntos.",
    items: [
      {
        num: 1,
        name: "Tornado na Garrafa",
        hint:
          "Gire as garrafas outra vez — o redemoinho volta, e a diversão também. Uma experiência que se repete quantas vezes a criança quiser.",
        image: caixaImg("experiencia-tornado.webp"),
      },
      {
        num: 2,
        name: "Matéria Mutante",
        hint:
          "A criança cria seu próprio slime e leva o resultado adiante: para brincar, esticar e explorar durante muito tempo.",
        image: caixaImg("experiencia-materia-mutante.webp"),
      },
      {
        num: 3,
        name: "Monstro que Respira",
        hint:
          "Montagem, reação e surpresa — o balão do monstrinho parece respirar diante dos olhos, num instante de pura fascinação.",
        image: caixaImg("experiencia-monstro.webp"),
      },
      {
        num: 4,
        name: "Vulcão Ativo",
        hint:
          "A criança monta seu vulcão, prepara tudo com calma e assiste à erupção — do começo ao fim, cerca de quinze minutos de descoberta.",
        image: caixaImg("experiencia-vulcao.webp"),
      },
      {
        num: 5,
        name: "Lava Viva",
        hint:
          "Cores que fluem como lava num instante hipnotizante — breve, visual e cheia de encanto compartilhado.",
        image: caixaImg("experiencia-lava-viva.webp"),
      },
      {
        num: 6,
        name: "Água que Anda",
        hint:
          "As cores caminham devagar entre os recipientes — e, ao longo de cerca de duas horas, a criança acompanha a transformação, voltando para ver o que mudou.",
        image: caixaImg("experiencia-agua-que-anda.webp"),
      },
      {
        num: 8,
        name: "Cobra Arco-Íris",
        hint:
          "A cobra cresce enquanto a reação acontece — movimento, cor e risadas à beira da mesa.",
        image: caixaImg("experiencia-cobra-arco-iris.webp"),
      },
      {
        num: 9,
        name: "Neve d’Água",
        hint:
          "O pó vira neve macia nas mãos — uma transformação delicada que convida a sentir e explorar.",
        image: caixaImg("experiencia-neve-dagua.webp"),
      },
      {
        num: 10,
        name: "Laboratório Livre",
        subtitle: "A sua própria descoberta.",
        hint:
          "Depois das experiências guiadas, a Caixa Laboratório continua sendo um pequeno laboratório de invenções.",
        hintExtra:
          "Frascos, pipetas e equipamentos para testar ideias, criar combinações e imaginar novas descobertas — sem passo a passo, só curiosidade e experimentação.",
        image: caixaImg("decima.webp"),
        imageAlt:
          "Frascos, pipetas, recipientes e equipamentos organizados para o Laboratório Livre",
        variant: "freeLab",
      },
    ],
    continuation: {
      titleLines: ["As descobertas podem", "continuar."],
      paragraphs: [
        "Algumas experiências podem ser repetidas imediatamente.",
        "Outras utilizam materiais consumíveis que podem ser repostos sempre que a família desejar.",
        "Os ingredientes são simples e fáceis de encontrar.",
        "Para quem preferir praticidade, a daTeca também oferecerá o Kit de Reposição, com os materiais novamente separados e organizados para continuar explorando.",
      ],
    },
  },

  contents: {
    titleLines: ["Tudo organizado.", "Tudo pronto para começar."],
    lead: "Mais de 45 itens cuidadosamente organizados dentro da caixa.",
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
      "Materiais para as experiências guiadas",
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
      "Experiências guiadas e o Laboratório Livre.",
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
          "A caixa inclui os ingredientes, frascos, potinhos, pipetas, copinhos, colheres, corantes, óculos de proteção e outros materiais utilizados nas experiências guiadas. Ela também acompanha um manual ilustrado e equipamentos para o Laboratório Livre.",
      },
      {
        question: "Preciso comprar algum outro material?",
        answer:
          "Não. A caixa traz tudo organizado para as experiências guiadas e para o Laboratório Livre. Em casa, a família só precisa adicionar água.",
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
