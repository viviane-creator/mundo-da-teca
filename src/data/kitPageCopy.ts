export type KitExperience = {
  id: string
  name: string
  image: string
}

export const kitPageCopy = {
  documentTitle: "Kit de Experiências daTeca",
  metaDescription:
    "Kit de Experiências daTeca — nove descobertas prontas para viver em casa. Você só precisa adicionar água. Frete R$ 10 para todo o Brasil.",
  canonicalPath: "/kit",
  ogImage: "/images/laboratorio/monstro-que-respira.webp",
  hero: {
    image: "/images/laboratorio/pocoes-cores-vivas.webp",
    imageAlt: "Kit de Experiências daTeca",
    logo: "/logo/logo.webp",
    logoAlt: "daTeca",
    title: "Kit de Experiências daTeca",
    subtitle: "Nove descobertas prontas para transformar uma tarde em casa.",
    highlight: "Você só precisa adicionar água.",
    cta: "Quero meu Kit",
  },
  discovery: {
    title: "Transforme uma tarde comum em uma grande descoberta.",
    text: "Uma caixa que convida a família a explorar, observar e guardar memórias — sem pressa e sem tela.",
  },
  problem: {
    title: "O desafio",
    text: "Entre telas e rotinas, faltam momentos reais de curiosidade juntos.",
  },
  solution: {
    title: "A solução",
    text: "Um kit quase completo chega à sua porta. A família adiciona apenas água — e começa a expedição.",
  },
  waterNote: "A família precisa fornecer apenas água.",
  contents: {
    title: "O que vem dentro",
    subtitle: "Tudo organizado para a descoberta começar sem correria.",
    items: [
      "Ingredientes separados",
      "Frascos",
      "Acessórios",
      "Manual ilustrado",
      "Materiais organizados",
      "Experiências prontas",
    ],
  },
  experiences: {
    title: "As experiências",
    subtitle: "Cada uma é um pequeno capítulo de curiosidade.",
    items: [
      {
        id: "tornado-na-garrafa",
        name: "Tornado na Garrafa",
        image: "/images/laboratorio/pintura-flutuante.webp",
      },
      {
        id: "materia-mutante",
        name: "Matéria Mutante",
        image: "/images/laboratorio/leite-psicodelico.webp",
      },
      {
        id: "monstro-que-respira",
        name: "Monstro que Respira",
        image: "/images/laboratorio/monstro-que-respira.webp",
      },
      {
        id: "vulcao-ativo",
        name: "Vulcão Ativo",
        image: "/images/laboratorio/pocoes-cores-vivas.webp",
      },
      {
        id: "lava-viva",
        name: "Lava Viva",
        image: "/images/laboratorio/tintas-nascidas-da-cozinha.webp",
      },
      {
        id: "agua-que-anda",
        name: "Água que Anda",
        image: "/images/laboratorio/agua-que-anda.webp",
      },
      {
        id: "pedra-liquida",
        name: "Pedra Líquida",
        image: "/images/laboratorio/agua-solida.webp",
      },
      {
        id: "cobra-arco-iris",
        name: "Cobra Arco-Íris",
        image: "/images/laboratorio/cobra-de-espuma.webp",
      },
      {
        id: "neve-dagua",
        name: "Neve d'Água",
        image: "/images/laboratorio/ovo-saltador.webp",
      },
    ] satisfies KitExperience[],
  },
  gallery: {
    title: "Galeria",
    subtitle: "Objetos, texturas e o clima da expedição.",
    images: [
      {
        src: "/images/laboratorio/monstro-que-respira.webp",
        alt: "Experiência Monstro que Respira",
      },
      {
        src: "/images/laboratorio/agua-que-anda.webp",
        alt: "Experiência Água que Anda",
      },
      {
        src: "/images/laboratorio/cobra-de-espuma.webp",
        alt: "Experiência com espuma colorida",
      },
      {
        src: "/images/laboratorio/pocoes-cores-vivas.webp",
        alt: "Poções e cores do kit",
      },
    ],
  },
  videos: {
    title: "Vídeos",
    subtitle: "Estela realizando experiências.",
    placeholder: "Em breve — registros da Estela com o kit.",
  },
  benefits: {
    title: "O que a família leva",
    items: [
      "Mais curiosidade.",
      "Mais tempo juntos.",
      "Menos telas.",
      "Aprendizado através da prática.",
      "Momentos inesquecíveis.",
    ],
  },
  pricing: {
    title: "Kit de Experiências daTeca",
    price: "R$ 89,90",
    shipping: "Frete R$ 10,00 para todo o Brasil",
    batch: "Primeiro lote: 100 unidades",
    waterReminder: "Você só precisa adicionar água.",
    cta: "Quero meu Kit",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Qual idade?",
        answer:
          "Pensado para famílias com crianças curiosas, com supervisão de um adulto. A descoberta acontece juntos.",
      },
      {
        question: "Preciso comprar ingredientes?",
        answer:
          "Não. O kit chega praticamente completo. Em casa, você só precisa de água.",
      },
      {
        question: "O que preciso ter em casa?",
        answer: "Apenas água.",
      },
      {
        question: "É seguro?",
        answer:
          "As experiências foram pensadas para o cotidiano familiar, com materiais organizados e manual ilustrado. Sempre com supervisão de um adulto.",
      },
      {
        question: "Como funciona o envio?",
        answer:
          "Enviamos para todo o Brasil com frete fixo de R$ 10,00.",
      },
      {
        question: "Qual o prazo de postagem?",
        answer:
          "Os pedidos do primeiro lote são postados conforme a ordem de chegada, com cuidado artesanal em cada caixa.",
      },
    ],
  },
  finalCta: {
    title: "Pronto para a primeira descoberta?",
    text: "O kit chega quase completo. Você só precisa adicionar água.",
    cta: "Quero meu Kit",
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
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
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
    brand: {
      "@type": "Brand",
      name: "daTeca",
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "BRL",
      price: "89.90",
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
