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
  image: "/cards/atelie/bau.png",
  imageAlt: "Baú de Tesouros",
  ctaLabel: "Conhecer o Baú",
  productId: "bau",
}

export const atelierComingSoonItems: AtelierShowcaseItem[] = [
  {
    id: "album-figurinhas",
    title: "Álbum de Figurinhas",
    image: "/cards/descobertas/colecoes.png",
    imageAlt: "Álbum de Figurinhas",
  },
  {
    id: "colecionaveis",
    title: "Colecionáveis",
    image: "/cards/descobertas/tesouros.png",
    imageAlt: "Colecionáveis",
  },
  {
    id: "edicoes-especiais",
    title: "Edições Especiais",
    image: "/cards/clube/colecoes-especiais.png",
    imageAlt: "Edições Especiais",
  },
]

export const atelierShowcaseFootnote =
  "Novos tesouros estão sendo preparados. Alguns itens aparecerão primeiro para membros do Clube."
