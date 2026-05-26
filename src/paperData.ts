export type PaperCollection =
  | "Coleção Chuva"
  | "Coleção Quintal"
  | "Coleção Correio"
  | "Coleção Vento"

export type PaperGood = {
  id: string
  title: string
  poetic: string
  image: string
  price: number
  clubPrice: number
  isLimited: boolean
  stock: number
  madeToOrder: boolean
  collection: PaperCollection
  isClubExclusive: boolean
  description: string
}

export type PaperGoodStatusKind =
  | "club-collection"
  | "made-to-order"
  | "limited-run"
  | "few-units"
  | "few-made"

export type PaperGoodStatus = {
  kind: PaperGoodStatusKind
  label: string
}

const papelariaCover = "/cards/atelie/papelaria.png"

export function paperGoodImage(id: string): string {
  return `/cards/papelaria/${id}.png`
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

export function getPaperGoodStatus(good: PaperGood): PaperGoodStatus | null {
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

export const paperGoods: PaperGood[] = [
  {
    id: "caderno-das-descobertas",
    title: "caderno das descobertas",
    poetic: "páginas em branco para guardar o que o dia revelou.",
    image: paperGoodImage("caderno-das-descobertas"),
    price: 48,
    clubPrice: 34,
    isLimited: false,
    stock: 12,
    madeToOrder: false,
    collection: "Coleção Quintal",
    isClubExclusive: false,
    description:
      "caderno de papel macio, costura visível, capa com textura de linho. para desenhos, listas e pequenas observações do mundo real.",
  },
  {
    id: "adesivos-da-chuva",
    title: "adesivos da chuva",
    poetic: "gotas e nuvens para colar em cartas e diários.",
    image: paperGoodImage("adesivos-da-chuva"),
    price: 32,
    clubPrice: 22,
    isLimited: false,
    stock: 18,
    madeToOrder: false,
    collection: "Coleção Chuva",
    isClubExclusive: false,
    description:
      "lâmina de adesivos em papel fosco, cores suaves, recortes imperfeitos de propósito. cheiram a giz e tarde molhada.",
  },
  {
    id: "cartas-do-vento",
    title: "cartas do vento",
    poetic: "mensagens leves para enviar sem pressa de resposta.",
    image: paperGoodImage("cartas-do-vento"),
    price: 28,
    clubPrice: 20,
    isLimited: false,
    stock: 20,
    madeToOrder: false,
    collection: "Coleção Vento",
    isClubExclusive: false,
    description:
      "conjunto de cartões em papel algodão, envelopes delicados e selos pequenos. para escrever devagar, à mão.",
  },
  {
    id: "album-de-pequenos-tesouros",
    title: "álbum de pequenos tesouros",
    poetic: "páginas que esperam folhas, pedras e memórias.",
    image: paperGoodImage("album-de-pequenos-tesouros"),
    price: 56,
    clubPrice: 39,
    isLimited: true,
    stock: 4,
    madeToOrder: false,
    collection: "Coleção Quintal",
    isClubExclusive: false,
    description:
      "álbum com cantos de papel kraft, elástico de linho e páginas para colar achados. feito em tiragem pequena.",
  },
  {
    id: "carimbos-da-teca",
    title: "carimbos da teca",
    poetic: "marcas suaves para deixar rastro nos seus cadernos.",
    image: paperGoodImage("carimbos-da-teca"),
    price: 42,
    clubPrice: 29,
    isLimited: false,
    stock: 8,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: true,
    description:
      "três carimbos de madeira com motivos do universo da Teca. tinta não inclusa — use a que combinar com o seu dia.",
  },
  {
    id: "fita-do-correio",
    title: "fita do correio",
    poetic: "laços para embrulhar cartas como pequenos presentes.",
    image: paperGoodImage("fita-do-correio"),
    price: 24,
    clubPrice: 17,
    isLimited: false,
    stock: 15,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: false,
    description:
      "fitas de algodão em tons de creme e terracota, três metros cada. para pacotes que parecem feitos à mão.",
  },
  {
    id: "caixa-de-segredos",
    title: "caixa de segredos",
    poetic: "um lugar quieto para guardar o que não cabe na gaveta.",
    image: paperGoodImage("caixa-de-segredos"),
    price: 68,
    clubPrice: 48,
    isLimited: true,
    stock: 0,
    madeToOrder: true,
    collection: "Coleção Chuva",
    isClubExclusive: false,
    description:
      "caixa de papelão revestido, fecho de barbante, interior forrado. preparada sob encomenda, uma a uma.",
  },
  {
    id: "papeis-do-quintal",
    title: "papéis do quintal",
    poetic: "folhas com textura de terra, luz e tarde lenta.",
    image: paperGoodImage("papeis-do-quintal"),
    price: 36,
    clubPrice: 25,
    isLimited: false,
    stock: 0,
    madeToOrder: true,
    collection: "Coleção Quintal",
    isClubExclusive: false,
    description:
      "pacote com vinte folhas de papéis mistos — kraft, vergê, reciclado. preparado sob encomenda em poucos dias.",
  },
]

export const papelariaCoverImage = papelariaCover
