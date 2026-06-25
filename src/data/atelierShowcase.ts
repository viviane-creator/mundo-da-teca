import { atelierCommerceCopy } from "./atelierCommerce"

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
      "O lugar onde as descobertas ganham uma história. Organize experiências, registros e coleções em um único fichário criado para acompanhar anos de exploração.",
    complementaryText:
      "Projetado para guardar as fichas dos seis universos do Mundo da Teca.",
    image: "/images/fichario-open.webp",
    imageAlt: "Meu Fichário de Descobertas",
    state: "developing",
    ctaLabel: atelierCommerceCopy.notifyWhenAvailable,
  },
  {
    id: "bau",
    title: "Baú de Tesouros",
    seal: "",
    description:
      "Um lugar para guardar aquilo que a criança considera especial.",
    image: "/images/bau-tesouros-open.webp",
    imageAlt: "Baú de Tesouros",
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
