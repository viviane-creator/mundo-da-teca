export const launchPageCopy = {
  documentTitle:
    "daTeca — Existe um mundo inteiro esperando para ser descoberto",
  metaDescription:
    "Menos tempo nas telas. Mais tempo explorando, criando e colecionando descobertas.",
  ogImage: "/images/hero-home.webp",
  logo: "/logo/logo.webp",
  logoAlt: "daTeca",
  title: "Existe um mundo inteiro esperando para ser descoberto.",
  text: [
    "Menos tempo nas telas.",
    "Mais tempo explorando, criando e colecionando descobertas.",
  ],
  illustration: "/images/hero-home.webp",
  illustrationAlt: "Ilustração daTeca",
  cta: "Abrir o livro",
} as const

const META_KEYS = [
  { attr: "name" as const, key: "description" },
  { attr: "property" as const, key: "og:title" },
  { attr: "property" as const, key: "og:description" },
  { attr: "property" as const, key: "og:image" },
  { attr: "property" as const, key: "og:type" },
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

export function applyLaunchPageMeta() {
  const { documentTitle, metaDescription, ogImage } = launchPageCopy
  const imageUrl = new URL(ogImage, window.location.origin).href

  document.title = documentTitle
  setMeta("name", "description", metaDescription)
  setMeta("property", "og:title", documentTitle)
  setMeta("property", "og:description", metaDescription)
  setMeta("property", "og:image", imageUrl)
  setMeta("property", "og:type", "website")
  setMeta("name", "twitter:card", "summary_large_image")
  setMeta("name", "twitter:title", documentTitle)
  setMeta("name", "twitter:description", metaDescription)
  setMeta("name", "twitter:image", imageUrl)
}

export function clearLaunchPageMeta() {
  for (const { attr, key } of META_KEYS) {
    document.querySelector(`meta[${attr}="${key}"]`)?.remove()
  }
}
