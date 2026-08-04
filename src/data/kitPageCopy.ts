import { socialLinks } from "./socialLinks"

export type KitAdventure = {
  id: string
  name: string
  line: string
  image: string
}

export type KitGallerySlot = {
  id: string
  kind: "photo" | "video"
  label: string
  src?: string
  alt?: string
}

export const kitPageCopy = {
  documentTitle: "Kit de Experiências daTeca",
  metaDescription:
    "As melhores descobertas da infância não acontecem na tela. Kit de Experiências daTeca — você só precisa adicionar água. R$ 89,90 + frete R$ 10.",
  canonicalPath: "/kit",
  ogImage: "/images/hero-home.webp",
  orderUrl: socialLinks.instagram,

  hero: {
    image: "/images/hero-home.webp",
    imageAlt: "Um mundo de descobertas esperando para ser explorado",
    title: "Existe um mundo inteiro esperando para ser descoberto.",
    subtitleLead:
      "As melhores descobertas da infância não acontecem na tela.",
    subtitleFollow:
      "Acontecem quando uma pergunta vira uma experiência.",
    cta: "Quero começar minha primeira expedição.",
  },

  childhood: {
    kicker: "Capítulo I",
    title: "A infância mudou.",
    lines: [
      "As crianças continuam curiosas.",
      "Elas ainda fazem perguntas.",
      "Ainda inventam mundos.",
      "Ainda encontram tesouros onde os adultos passam depressa.",
    ],
    closing:
      "O que mudou é o espaço para experimentar com as próprias mãos.",
    image: "/images/teca.webp",
    imageAlt: "A anfitriã daTeca",
  },

  brand: {
    kicker: "Capítulo II",
    title: "Foi por isso que nasceu a daTeca.",
    text: "Um lugar para preservar o jeito lento, encantado e presente de descobrir — em família, longe da pressa.",
    image: "/images/mapa-exploracao.webp",
    imageAlt: "Mapa de exploração daTeca",
    secondaryImage: "/images/laboratorio/papel-artesanal.webp",
    secondaryAlt: "Registros de uma jornada de descobertas",
  },

  product: {
    kicker: "Capítulo III",
    title: "O Kit",
    lead: "Uma caixa que convida a família a sair da rotina e entrar numa pequena expedição.",
    image: "/images/laboratorio/pocoes-cores-vivas.webp",
    imageAlt: "Kit de Experiências daTeca",
    details: [
      {
        id: "materiais",
        image: "/images/laboratorio/pocoes-cores-vivas.webp",
        alt: "Materiais e cores do kit",
        caption: "Materiais",
      },
      {
        id: "frascos",
        image: "/images/laboratorio/monstro-que-respira.webp",
        alt: "Frascos e texturas",
        caption: "Frascos",
      },
      {
        id: "manual",
        image: "/images/laboratorio/carta-invisivel.webp",
        alt: "Manual e papéis",
        caption: "Manual",
      },
      {
        id: "texturas",
        image: "/images/laboratorio/papel-artesanal.webp",
        alt: "Papéis e texturas",
        caption: "Texturas",
      },
    ],
  },

  water: {
    title: "Só água.",
    line: "Todo o resto já está aqui.",
    whisper: "Você só precisa adicionar água.",
  },

  adventures: {
    kicker: "Capítulo IV",
    title: "Pequenas aventuras",
    lead: "Cada experiência é um convite. Um instante em que a curiosidade ganha forma.",
    items: [
      {
        id: "tornado-na-garrafa",
        name: "Tornado na Garrafa",
        line: "Um tornado cabe dentro de uma garrafa. E dentro da imaginação de uma criança.",
        image: "/images/laboratorio/pintura-flutuante.webp",
      },
      {
        id: "materia-mutante",
        name: "Matéria Mutante",
        line: "Quando a matéria muda de ideia, a criança muda o olhar.",
        image: "/images/laboratorio/leite-psicodelico.webp",
      },
      {
        id: "monstro-que-respira",
        name: "Monstro que Respira",
        line: "Nem todo monstro assusta. Alguns só pedem um pouco de atenção.",
        image: "/images/laboratorio/monstro-que-respira.webp",
      },
      {
        id: "vulcao-ativo",
        name: "Vulcão Ativo",
        line: "Uma erupção pequena. Uma emoção enorme.",
        image: "/images/laboratorio/pocoes-cores-vivas.webp",
      },
      {
        id: "lava-viva",
        name: "Lava Viva",
        line: "Cores que se movem. Perguntas que não param.",
        image: "/images/laboratorio/tintas-nascidas-da-cozinha.webp",
      },
      {
        id: "agua-que-anda",
        name: "Água que Anda",
        line: "Água que escolhe um caminho. E leva a conversa junto.",
        image: "/images/laboratorio/agua-que-anda.webp",
      },
      {
        id: "pedra-liquida",
        name: "Pedra Líquida",
        line: "O sólido e o líquido trocam de lugar — e a tarde inteira acompanha.",
        image: "/images/laboratorio/agua-solida.webp",
      },
      {
        id: "cobra-arco-iris",
        name: "Cobra Arco-Íris",
        line: "Uma serpente de cores nasce na mesa da cozinha.",
        image: "/images/laboratorio/cobra-de-espuma.webp",
      },
      {
        id: "neve-dagua",
        name: "Neve d'Água",
        line: "Neve sem inverno. Só curiosidade e um pouco de água.",
        image: "/images/laboratorio/ovo-saltador.webp",
      },
    ] satisfies KitAdventure[],
  },

  box: {
    kicker: "Capítulo V",
    title: "A caixa",
    lead: "Não é só embalagem. É um objeto que a criança vai querer abrir, reabrir e guardar.",
    frames: [
      {
        id: "aberta",
        image: "/images/laboratorio/pocoes-cores-vivas.webp",
        alt: "Caixa aberta",
        caption: "Aberta",
      },
      {
        id: "organizacao",
        image: "/images/laboratorio/monstro-que-respira.webp",
        alt: "Organização dos materiais",
        caption: "Organização",
      },
      {
        id: "detalhe",
        image: "/images/laboratorio/papel-artesanal.webp",
        alt: "Detalhe de papel e textura",
        caption: "Papel",
      },
      {
        id: "carimbo",
        image: "/images/laboratorio/carimbos-improvaveis.webp",
        alt: "Detalhe de carimbo e marca",
        caption: "Marca",
      },
    ],
  },

  promise: {
    kicker: "Capítulo VI",
    title: "O que realmente estamos entregando",
    items: [
      "Mais perguntas.",
      "Mais conversa.",
      "Mais imaginação.",
      "Mais autonomia.",
      "Mais tempo juntos.",
      "Mais memórias.",
    ],
    closing: "Não é uma caixa. São tardes que ficam.",
  },

  gallery: {
    kicker: "Capítulo VII",
    title: "Galeria",
    slots: [
      {
        id: "g1",
        kind: "photo",
        label: "Descoberta",
        src: "/images/laboratorio/monstro-que-respira.webp",
        alt: "Experiência em família",
      },
      {
        id: "g2",
        kind: "photo",
        label: "Textura",
        src: "/images/laboratorio/agua-que-anda.webp",
        alt: "Água em movimento",
      },
      {
        id: "g3",
        kind: "video",
        label: "Estela na expedição",
      },
      {
        id: "g4",
        kind: "photo",
        label: "Cores",
        src: "/images/laboratorio/cobra-de-espuma.webp",
        alt: "Cores da experiência",
      },
      {
        id: "g5",
        kind: "video",
        label: "Um instante em casa",
      },
      {
        id: "g6",
        kind: "photo",
        label: "Mesa",
        src: "/images/laboratorio/pocoes-cores-vivas.webp",
        alt: "Mesa de descobertas",
      },
    ] satisfies KitGallerySlot[],
  },

  pricing: {
    title: "Kit de Experiências daTeca",
    price: "R$ 89,90",
    priceValue: "89.90",
    shipping: "Frete R$ 10,00",
    shippingNote: "para todo o Brasil",
    batch: "Primeiro lote limitado a 100 unidades.",
    reminder: "Você só precisa adicionar água.",
    cta: "Quero começar minha primeira expedição.",
  },

  faq: {
    title: "Perguntas",
    items: [
      {
        question: "Qual idade?",
        answer:
          "Para famílias com crianças curiosas, sempre com um adulto por perto. A descoberta acontece juntos.",
      },
      {
        question: "Preciso comprar ingredientes?",
        answer: "Não. O kit chega praticamente completo.",
      },
      {
        question: "O que preciso ter em casa?",
        answer: "Apenas água.",
      },
      {
        question: "É seguro?",
        answer:
          "Experiências pensadas para o cotidiano familiar, com materiais organizados e manual ilustrado. Sempre com supervisão.",
      },
      {
        question: "Como funciona o envio?",
        answer: "Para todo o Brasil, com frete fixo de R$ 10,00.",
      },
      {
        question: "Prazo de postagem",
        answer:
          "Os pedidos do primeiro lote saem conforme a ordem de chegada.",
      },
    ],
  },
} as const

const META_KEYS = [
  { attr: "name" as const, key: "description" },
  { attr: "property" as const, key: "og:title" },
  { attr: "property" as const, key: "og:description" },
  { attr: "property" as const, key: "og:image" },
  { attr: "property" as const, key: "og:type" },
  { attr: "property" as const, key: "og:url" },
  { attr: "name" as const, key: "twitter:card" },
  { attr: "name" as const, key: "twitter:title" },
  { attr: "name" as const, key: "twitter:description" },
  { attr: "name" as const, key: "twitter:image" },
]

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
  let link = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null
  if (!link) {
    link = document.createElement("link")
    link.rel = "canonical"
    document.head.appendChild(link)
  }
  link.href = href
}

function setJsonLd(data: Record<string, unknown>) {
  const id = "kit-product-jsonld"
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement("script")
    script.id = id
    script.type = "application/ld+json"
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export function applyKitPageMeta() {
  const { documentTitle, metaDescription, ogImage, canonicalPath, pricing } =
    kitPageCopy
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

export function clearKitPageMeta() {
  for (const { attr, key } of META_KEYS) {
    document.querySelector(`meta[${attr}="${key}"]`)?.remove()
  }
  document.querySelector('link[rel="canonical"]')?.remove()
  document.getElementById("kit-product-jsonld")?.remove()
}
