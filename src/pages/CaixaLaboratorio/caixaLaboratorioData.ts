import { HOTMART_CHECKOUT_URL } from "../../config/caixaLaboratorioCheckout"
import {
  caixaLaboratorioShippingFaqAnswer,
  caixaLaboratorioShippingNote,
  entryProduct,
} from "../../config/productStrategy"
import { socialLinks } from "../../data/socialLinks"

const IMG = "/images/caixa-laboratorio"

/**
 * Subir este valor sempre que trocar os WebPs da landing.
 * Evita cache do CDN/navegador servir a imagem antiga sob o mesmo nome.
 */
export const CAIXA_IMAGE_VERSION = "20260922c"

function caixaImg(fileName: string): string {
  return `${IMG}/${fileName}?v=${CAIXA_IMAGE_VERSION}`
}

export const caixaLaboratorioImages = {
  /** Abertura da campanha — criança explorando (hero). */
  abertura: caixaImg("abertura-crianca-9-guiadas.webp"),
  /** Caixa fechada — logo após o CTA do hero. */
  caixaFechada: caixaImg("caixa-fechada-9-guiadas.webp"),
  /** Vista de cima da caixa aberta — conteúdos da campanha. */
  materiais: caixaImg("caixa-materiais.webp"),
} as const

export const caixaLaboratorioData = {
  documentTitle:
    "Caixa Laboratório daTeca — presente de Dia das Crianças que vira laboratório em casa",
  metaDescription:
    "Presente de Dia das Crianças: Caixa Laboratório daTeca com 9 experiências guiadas. É só acrescentar água — materiais organizados, manual ilustrado e convite para explorar e inventar. R$ 129,00.",
  canonicalPath: "/caixa-laboratorio",
  ogImage: caixaLaboratorioImages.abertura,
  /** Sempre o link central Hotmart — ver `caixaLaboratorioCheckout.ts`. */
  orderUrl: HOTMART_CHECKOUT_URL,

  header: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    cta: "Quero presentear com a Caixa Laboratório",
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
      "A criança abre a caixa, acrescenta água e começa a explorar. São 9 experiências guiadas — com os materiais organizados, instruções ilustradas e materiais que também convidam a explorar e inventar.",
    ageNote: "Para crianças de 6 a 10 anos, com a supervisão de um adulto.",
    cards: {
      ready: {
        titleLead: "Abriu a caixa, ",
        titleEmphasis: "escolheu uma experiência",
        titleEnd: " e começou.",
        text: "Os materiais das experiências guiadas já vão organizados dentro da caixa.",
      },
    },
    benefits: [
      "Ingredientes, frascos e equipamentos incluídos",
      "Manual ilustrado passo a passo",
      "Materiais que convidam a explorar e inventar",
    ],
    image: caixaLaboratorioImages.abertura,
    imageAlt:
      "Criança explorando uma experiência com a Caixa Laboratório daTeca — 9 experiências guiadas",
    conviteImage: caixaLaboratorioImages.caixaFechada,
    conviteImageAlt:
      "Caixa Laboratório daTeca fechada, com materiais das experiências organizados ao redor da embalagem",
    cta: "Quero presentear com a Caixa Laboratório",
    note: "Compra única.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  /** Mesmo bloco de preço no hero e no fechamento. */
  pricing: {
    price: entryProduct.priceBRL.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    priceValue: String(entryProduct.priceBRL),
    shippingNote: caixaLaboratorioShippingNote,
  },

  offerTrust: ["Checkout seguro pela Hotmart"],

  discoveries: {
    introImage: caixaImg("cartas.webp"),
    introImageAlt:
      "Cartas ilustradas passo a passo das experiências da Caixa Laboratório daTeca",
    titleLines: ["9 experiências guiadas.", "Depois, a curiosidade continua."],
    text: "Nove experiências com passo a passo no manual. Os materiais da caixa também convidam a criança a explorar e inventar — um convite para curiosidade, surpresa e presença juntos.",
    items: [
      {
        num: 1,
        name: "Tinta Invisível",
        hint: "Um desenho escondido aparece quando o revelador passa pelo papel.",
        hintExtra: "Segredos que só se revelam passo a passo.",
        image: caixaImg("tinta-invisivel.webp"),
      },
      {
        num: 2,
        name: "Pedra Líquida",
        hint: "Algo entre sólido e líquido nas mãos.",
        hintExtra: "Uma matéria que muda de ideia conforme se toca.",
        image: caixaImg("experiencia-pedra-liquida.webp"),
      },
      {
        num: 3,
        name: "Tornado na Garrafa",
        hint: "Basta girar outra vez.",
        hintExtra: "O redemoinho volta a aparecer sempre que a curiosidade chamar.",
        image: caixaImg("experiencia-tornado.webp"),
      },
      {
        num: 4,
        name: "Água que Anda",
        hint: "A água desafia o caminho esperado.",
        hintExtra:
          "Uma descoberta que acontece aos poucos, revelando uma surpresa de cada vez.",
        image: caixaImg("experiencia-agua-que-anda.webp"),
      },
      {
        num: 5,
        name: "Matéria Mutante",
        hint: "Uma mistura que muda de personalidade.",
        hintExtra:
          "Depois de pronta, continua convidando a apertar, esticar e descobrir.",
        image: caixaImg("experiencia-materia-mutante.webp"),
      },
      {
        num: 6,
        name: "Monstro que Respira",
        hint: "Ele realmente parece respirar.",
        hintExtra: "Uma reação silenciosa que prende o olhar de perto.",
        image: caixaImg("experiencia-monstro-que-respira.webp"),
      },
      {
        num: 7,
        name: "Força que Move",
        hint: "Algo se move sem ser empurrado.",
        hintExtra: "Um encontro entre magnetismo e curiosidade.",
        image: caixaImg("força-que-move.webp"),
      },
      {
        num: 8,
        name: "Cobra de Espuma",
        hint: "Quanto mais espuma, maior a cobra.",
        hintExtra: "Bolhas que crescem e risadas que acompanham.",
        image: caixaImg("experiencia-cobra-arco-iris.webp"),
      },
      {
        num: 9,
        name: "Neve d’Água",
        hint: "Um pozinho que vira neve.",
        hintExtra: "Uma transformação macia que dá vontade de tocar.",
        image: caixaImg("experiencia-neve-dagua.webp"),
      },
      {
        name: "Agora é sua vez de inventar",
        hint: "Depois de seguir as experiências, explore os materiais, faça perguntas e invente suas próprias descobertas com a supervisão de um adulto.",
        image: caixaImg("decima.webp"),
        imageAlt:
          "Materiais da Caixa Laboratório daTeca para explorar e inventar novas descobertas",
        variant: "invent",
        hideNum: true,
      },
    ],
  },

  contents: {
    titleLines: ["Tudo organizado."],
    lead: "Frascos, ferramentas, ingredientes identificados e manual ilustrado — separados dentro da caixa.",
    closing: "Sem precisar comprar materiais. Sem improvisar.",
    image: caixaLaboratorioImages.materiais,
    imageAlt:
      "Vista de cima da Caixa Laboratório daTeca aberta, com frascos, ingredientes, óculos de proteção e manual organizados",
    items: [
      "Ingredientes separados e identificados",
      "Frascos, potinhos e recipientes",
      "Pipetas, copinhos e colheres",
      "Corantes e líquidos das experiências",
      "Óculos de proteção e equipamentos",
      "Materiais para as nove experiências guiadas",
      "Materiais que convidam a explorar e inventar",
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
    text: "Os ingredientes, frascos, equipamentos e demais materiais das experiências guiadas já vão separados e organizados dentro da caixa.",
    note: "Abriu, escolheu uma experiência e começou.",
  },

  buy: {
    logoSrc: "/logo/logo.webp",
    logoAlt: "daTeca",
    titleLines: ["Caixa Laboratório", "daTeca"],
    summaryLines: [
      "Presente de Dia das Crianças:",
      "9 experiências guiadas. Depois, a curiosidade continua.",
    ],
    cta: "Quero presentear com a Caixa Laboratório",
    note: "Compra única.",
    paymentNote: "Pagamento seguro pela Hotmart.",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "O que vem na Caixa Laboratório?",
        answer:
          "A caixa inclui os ingredientes, frascos, potinhos, pipetas, copinhos, colheres, corantes, óculos de proteção e outros materiais utilizados nas nove experiências guiadas. Ela também acompanha manual ilustrado e materiais que convidam a criança a explorar e inventar.",
      },
      {
        question: "Preciso comprar algum outro material?",
        answer:
          "Não. A caixa traz tudo organizado para as nove experiências guiadas. Os demais materiais também convidam a criança a explorar e inventar. Em casa, é só acrescentar água.",
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
        answer: caixaLaboratorioShippingFaqAnswer,
      },
      {
        question: "Em quanto tempo a caixa é enviada?",
        answer:
          "Após a confirmação do pagamento, preparamos e enviamos o pedido. O prazo de entrega varia conforme seu CEP — consulte no checkout da Hotmart.",
      },
      {
        question: "Posso parcelar a compra?",
        answer:
          "O checkout pela Hotmart pode oferecer opções de parcelamento. Consulte as condições disponíveis no momento da compra.",
      },
      {
        question: "Como funciona a garantia?",
        answer:
          "A compra é processada pela Hotmart. Consulte as condições de garantia informadas no checkout.",
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
  const caixaFechadaUrl = new URL(caixaLaboratorioImages.caixaFechada, origin).href

  setHeroImagePreloads([imageUrl, caixaFechadaUrl])

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
    image: [imageUrl, caixaFechadaUrl],
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
