export type AtelierFeaturedItemState = "available" | "developing"

export type AtelierFeaturedItem = {
  id: string
  title: string
  seal: string
  description: string
  complementaryText?: string
  image?: string
  imageAlt: string
  state: AtelierFeaturedItemState
  ctaLabel: string
  productId?: string
}

export type AtelierComingSoonItem = {
  id: string
  title: string
  statusLabel: "Em preparação" | "Chegando em breve"
}

export const atelierFeaturedItems: AtelierFeaturedItem[] = [
  {
    id: "fichario-descobertas",
    title: "Meu Fichário de Descobertas",
    seal: "Em desenvolvimento",
    description:
      "O lugar onde as fichas de descoberta encontram uma casa. Organize universos, coleções e registros em um único fichário criado para acompanhar anos de exploração.",
    complementaryText:
      "Projetado para guardar as fichas dos seis universos do Mundo da Teca e crescer junto com novas descobertas.",
    image: "/images/fichario-open.webp",
    imageAlt: "Meu Fichário de Descobertas",
    state: "developing",
    ctaLabel: "Em preparação",
  },
  {
    id: "bau",
    title: "Meu Mundo de Tesouros",
    seal: "O primeiro grande tesouro do Mundo da Teca",
    description:
      "Um lugar para guardar aquilo que merece continuar com você.",
    image: "/images/bau-tesouros-open.webp",
    imageAlt: "Meu Mundo de Tesouros",
    state: "available",
    ctaLabel: "Ver detalhes",
    productId: "bau",
  },
]

export const atelierComingSoonItems: AtelierComingSoonItem[] = [
  {
    id: "album-figurinhas",
    title: "Álbum de Figurinhas",
    statusLabel: "Em preparação",
  },
  {
    id: "colecionaveis",
    title: "Colecionáveis",
    statusLabel: "Chegando em breve",
  },
  {
    id: "edicoes-especiais",
    title: "Edições Especiais",
    statusLabel: "Em preparação",
  },
]

export const atelierShowcaseFootnote =
  "Alguns objetos ainda estão sendo preparados — para continuar a jornada quando chegarem."
