import { socialLinks } from "./socialLinks"

export type KitExperience = {
  id: string
  name: string
  image: string
}

export type KitProblemItem = {
  id: string
  label: string
  icon: "search" | "flask" | "cart" | "scale"
}

export type KitContentItem = {
  id: string
  label: string
  icon: "vial" | "bottle" | "tools" | "book" | "box" | "spark"
}

export type KitGallerySlot = {
  id: string
  kind: "photo" | "video"
  label: string
  src?: string
  alt?: string
}

export const kitPageCopy = {
  documentTitle: "Kit de Experiências daTeca — R$ 89,90",
  metaDescription:
    "Kit de Experiências daTeca com nove descobertas prontas. Você só precisa adicionar água. R$ 89,90 + frete R$ 10 para todo o Brasil. Primeiro lote: 100 unidades.",
  canonicalPath: "/kit",
  ogImage: "/images/bau-tesouros-open.webp",
  orderUrl: socialLinks.instagram,
  hero: {
    image: "/images/bau-tesouros-open.webp",
    imageAlt: "Caixa do Kit de Experiências daTeca",
    logo: "/logo/logo.webp",
    logoAlt: "daTeca",
    title: "Kit de Experiências daTeca",
    subtitle:
      "Nove descobertas prontas para transformar uma tarde em casa numa pequena expedição.",
    highlight: "Você só precisa adicionar água.",
    cta: "Quero meu Kit",
  },
  discovery: {
    title: "Transforme uma tarde comum em uma grande descoberta.",
    text: "Longe das telas, perto um do outro. Uma caixa pensada para despertar curiosidade, observar o mundo e guardar memórias — com calma, presença e imaginação.",
    image: "/images/laboratorio/pocoes-cores-vivas.webp",
    imageAlt: "Experiência colorida do Kit daTeca",
  },
  problem: {
    title: "O problema",
    lead: "Para viver uma experiência em casa, as famílias normalmente precisam:",
    items: [
      { id: "materiais", label: "Procurar materiais", icon: "search" },
      { id: "pesquisar", label: "Pesquisar experiências", icon: "flask" },
      { id: "comprar", label: "Comprar ingredientes", icon: "cart" },
      { id: "separar", label: "Separar quantidades", icon: "scale" },
    ] satisfies KitProblemItem[],
  },
  solution: {
    title: "A solução",
    text: "O kit chega praticamente completo. Materiais organizados, experiências prontas e um manual ilustrado — para a descoberta começar sem correria.",
    image: "/images/fichario-open.webp",
    imageAlt: "Kit aberto com materiais organizados",
    items: [
      "Ingredientes já separados",
      "Frascos e acessórios",
      "Manual ilustrado",
      "Experiências prontas para viver",
    ],
    waterNote: "A família precisa fornecer apenas água.",
  },
  contents: {
    title: "O que vem dentro",
    subtitle: "Tudo organizado para a expedição começar.",
    image: "/images/universos/laboratorio-capa.webp",
    imageAlt: "Conteúdo visual do Kit de Experiências",
    items: [
      { id: "ingredientes", label: "Ingredientes separados", icon: "vial" },
      { id: "frascos", label: "Frascos", icon: "bottle" },
      { id: "acessorios", label: "Acessórios", icon: "tools" },
      { id: "manual", label: "Manual ilustrado", icon: "book" },
      { id: "materiais", label: "Materiais organizados", icon: "box" },
      { id: "experiencias", label: "Experiências prontas", icon: "spark" },
    ] satisfies KitContentItem[],
  },
  experiences: {
    title: "As experiências",
    subtitle: "Nove capítulos de curiosidade para viver em família.",
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
  water: {
    title: "Você só precisa adicionar água.",
    text: "O diferencial do kit: ele chega pronto para a descoberta. Em casa, a família acrescenta apenas água — e a expedição começa.",
  },
  gallery: {
    title: "Galeria",
    subtitle: "Fotos, vídeos e a Estela realizando experiências.",
    slots: [
      {
        id: "foto-1",
        kind: "photo",
        label: "Foto da experiência",
        src: "/images/laboratorio/monstro-que-respira.webp",
        alt: "Monstro que Respira",
      },
      {
        id: "foto-2",
        kind: "photo",
        label: "Foto da experiência",
        src: "/images/laboratorio/agua-que-anda.webp",
        alt: "Água que Anda",
      },
      {
        id: "video-estela-1",
        kind: "video",
        label: "Estela realizando experiências",
      },
      {
        id: "foto-3",
        kind: "photo",
        label: "Foto da experiência",
        src: "/images/laboratorio/cobra-de-espuma.webp",
        alt: "Cobra Arco-Íris",
      },
      {
        id: "video-estela-2",
        kind: "video",
        label: "Vídeo da descoberta",
      },
      {
        id: "foto-4",
        kind: "photo",
        label: "Foto da experiência",
        src: "/images/laboratorio/pocoes-cores-vivas.webp",
        alt: "Poções e cores do kit",
      },
    ] satisfies KitGallerySlot[],
  },
  benefits: {
    title: "O que a família leva",
    items: [
      {
        id: "curiosidade",
        title: "Mais curiosidade.",
        text: "Perguntas, hipóteses e o prazer de descobrir com as próprias mãos.",
      },
      {
        id: "tempo",
        title: "Mais tempo juntos.",
        text: "Uma tarde compartilhada, sem pressa e com presença.",
      },
      {
        id: "telas",
        title: "Menos telas.",
        text: "Atenção no que acontece na mesa, no frasco, no olhar um do outro.",
      },
      {
        id: "pratica",
        title: "Aprendizado pela prática.",
        text: "Ciência viva, sensorial e memorável — sem parecer aula.",
      },
      {
        id: "memorias",
        title: "Momentos inesquecíveis.",
        text: "Histórias que ficam: o vulcão, a neve, a água que anda.",
      },
    ],
  },
  pricing: {
    kicker: "Kit",
    title: "Kit de Experiências daTeca",
    priceLabel: "R$ 89,90",
    priceValue: "89.90",
    shippingLabel: "Frete",
    shippingValue: "R$ 10,00",
    shippingNote: "para todo o Brasil",
    batchLabel: "Primeiro lote",
    batchValue: "100 unidades",
    waterReminder: "Você só precisa adicionar água.",
    cta: "Quero meu Kit",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        question: "Qual idade?",
        answer:
          "Pensado para famílias com crianças curiosas, sempre com supervisão de um adulto. A descoberta acontece juntos.",
      },
      {
        question: "Preciso comprar ingredientes?",
        answer:
          "Não. O kit chega praticamente completo, com ingredientes e materiais organizados.",
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
        question: "Prazo de postagem.",
        answer:
          "Os pedidos do primeiro lote são postados conforme a ordem de chegada, com cuidado em cada caixa.",
      },
    ],
  },
  finalCta: {
    title: "Seu filho vai viver algo incrível.",
    text: "Reserve o Kit de Experiências daTeca e transforme a próxima tarde em uma expedição. Você só precisa adicionar água.",
    image: "/images/hero-home.webp",
    imageAlt: "Universo visual da daTeca",
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
    brand: {
      "@type": "Brand",
      name: "daTeca",
    },
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
