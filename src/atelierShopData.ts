export type AtelierCollection =
  | "Coleção Chuva"
  | "Coleção Quintal"
  | "Coleção Correio"
  | "Coleção Vento"
  | "Gaveta do Ateliê"

export type AtelierGood = {
  id: string
  title: string
  poetic: string
  image: string
  price: number
  clubPrice: number
  isLimited: boolean
  stock: number
  madeToOrder: boolean
  collection: AtelierCollection
  isClubExclusive: boolean
  description: string
}

export type AtelierGoodStatusKind =
  | "club-collection"
  | "made-to-order"
  | "limited-run"
  | "few-units"

export type AtelierGoodStatus = {
  kind: AtelierGoodStatusKind
  label: string
}

export const atelierCoverImage = "/covers/atelie.png"

export function atelierGoodImage(id: string): string {
  return `/cards/atelie/${id}.png`
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export function clubPriceFrom(price: number): number {
  return Math.round(price * 0.7)
}

export function getAtelierGoodStatus(
  good: AtelierGood
): AtelierGoodStatus | null {
  if (good.isClubExclusive) {
    return { kind: "club-collection", label: "coleção do clube" }
  }
  if (good.madeToOrder) {
    return { kind: "made-to-order", label: "preparado sob encomenda" }
  }
  if (good.stock > 0 && good.stock <= 5) {
    return { kind: "few-units", label: "restam poucas" }
  }
  if (good.isLimited) {
    return { kind: "limited-run", label: "pequena tiragem" }
  }
  return null
}

export const atelierGoods: AtelierGood[] = [
  {
    id: "papel-de-carta",
    title: "papel de carta",
    poetic: "folhas delicadas esperam palavras que não precisam ser perfeitas.",
    image: atelierGoodImage("papel-de-carta"),
    price: 34,
    clubPrice: 24,
    isLimited: false,
    stock: 14,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: false,
    description:
      "pacote com folhas vergê e algodão, textura macia, bordas levemente irregulares. para cartas escritas à mão.",
  },
  {
    id: "album",
    title: "álbum de figurinhas",
    poetic: "completar devagar é outra forma de cuidar do tempo.",
    image: atelierGoodImage("album"),
    price: 52,
    clubPrice: 36,
    isLimited: true,
    stock: 5,
    madeToOrder: false,
    collection: "Coleção Quintal",
    isClubExclusive: false,
    description:
      "álbum com páginas grossas e elástico de linho. espaço para figurinhas do mundo real e do universo da Teca.",
  },
  {
    id: "bonequinhas",
    title: "bonequinhas da teca",
    poetic: "personagens de papel também precisam de silêncio para existir.",
    image: atelierGoodImage("bonequinhas"),
    price: 44,
    clubPrice: 31,
    isLimited: false,
    stock: 10,
    madeToOrder: false,
    collection: "Gaveta do Ateliê",
    isClubExclusive: false,
    description:
      "recortes e figurinos em papel cartão, roupinhas de tecido leve. para histórias inventadas em voz baixa.",
  },
  {
    id: "origami",
    title: "origami",
    poetic: "uma dobra de cada vez, até o papel ganhar asas.",
    image: atelierGoodImage("origami"),
    price: 28,
    clubPrice: 20,
    isLimited: false,
    stock: 16,
    madeToOrder: false,
    collection: "Coleção Vento",
    isClubExclusive: false,
    description:
      "papel quadrado em tons naturais e guia ilustrado de dobras simples. sem pressa de acertar o primeiro.",
  },
  {
    id: "imprimiveis",
    title: "imprimíveis",
    poetic: "materiais para imprimir e continuar o mundo da teca em casa.",
    image: atelierGoodImage("imprimiveis"),
    price: 22,
    clubPrice: 15,
    isLimited: false,
    stock: 30,
    madeToOrder: false,
    collection: "Gaveta do Ateliê",
    isClubExclusive: false,
    description:
      "arquivo digital com atividades calmas para imprimir em casa. papel comum já basta.",
  },
  {
    id: "cartoes",
    title: "cartões",
    poetic: "mensagens pequenas atravessam distâncias sem fazer barulho.",
    image: atelierGoodImage("cartoes"),
    price: 26,
    clubPrice: 18,
    isLimited: false,
    stock: 18,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: false,
    description:
      "cartões em branco com envelopes delicados. para entregar na mão ou deixar na porta.",
  },
  {
    id: "adesivos",
    title: "adesivos",
    poetic: "detalhes coloridos para marcar páginas e sorrisos.",
    image: atelierGoodImage("adesivos"),
    price: 30,
    clubPrice: 21,
    isLimited: false,
    stock: 20,
    madeToOrder: false,
    collection: "Coleção Chuva",
    isClubExclusive: false,
    description:
      "lâminas de adesivos em papel fosco, motivos do céu e da terra. colagem lenta e feliz.",
  },
  {
    id: "carimbos",
    title: "carimbos",
    poetic: "marcas repetidas deixam rastro de quem esteve ali.",
    image: atelierGoodImage("carimbos"),
    price: 40,
    clubPrice: 28,
    isLimited: false,
    stock: 7,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: true,
    description:
      "conjunto de carimbos de madeira com símbolos da Teca. tinta à parte, escolha a cor do dia.",
  },
  {
    id: "bau",
    title: "baú da teca",
    poetic: "um lugar quieto para guardar o que não cabe em gavetas comuns.",
    image: atelierGoodImage("bau"),
    price: 72,
    clubPrice: 50,
    isLimited: true,
    stock: 0,
    madeToOrder: true,
    collection: "Gaveta do Ateliê",
    isClubExclusive: false,
    description:
      "baú de papelão reforçado, fecho de barbante, interior forrado. preparado sob encomenda.",
  },
  {
    id: "papelaria",
    title: "papelaria",
    poetic: "coleções afetivas para tocar, cheirar e guardar perto.",
    image: atelierGoodImage("papelaria"),
    price: 38,
    clubPrice: 27,
    isLimited: false,
    stock: 12,
    madeToOrder: false,
    collection: "Gaveta do Ateliê",
    isClubExclusive: false,
    description:
      "kit surpresa com papéis, fitas e detalhes de coleção. cada caixa é um pouco diferente.",
  },
]
