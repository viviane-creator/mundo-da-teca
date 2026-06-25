export type AtelierComingSoonItem = {
  id: string
  title: string
  statusLabel: "Em preparação" | "Chegando em breve"
}

export type AtelierShowcaseItem = {
  id: string
  title: string
  image: string
  imageAlt: string
}

export const atelierFeaturedTreasure: AtelierShowcaseItem & {
  text: string
  ctaLabel: string
  productId: string
} = {
  id: "bau",
  title: "Baú de Tesouros",
  text: "O primeiro grande tesouro do Mundo da Teca.",
  image: "/images/bau-tesouros-open.webp",
  imageAlt: "Baú de Tesouros",
  ctaLabel: "Ver detalhes",
  productId: "bau",
}

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
  "Novos tesouros estão sendo preparados. Alguns itens aparecerão primeiro para membros do Clube."
