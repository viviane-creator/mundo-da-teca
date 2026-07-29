import type { AtelierPoeticScreen } from "./atelierSubPages"

export type AtelierCollection =
  | "Álbum das Descobertas"
  | "Pacotinho — Folhas do Mundo"
  | "Pacotinho — Coisas da Chuva"
  | "Pacotinho — Quintal"
  | "Pacotinho — Céu e Vento"
  | "Coleção Chuva"
  | "Coleção Quintal"
  | "Coleção Correio"
  | "Coleção Vento"
  | "Linha Ateliê"
  | "ABUH × daTeca"

export type AtelierSectionId =
  | "figurinhas"
  | "colecoes"
  | "papelaria"
  | "especiais"

export type AtelierVisualKind =
  | "standard"
  | "envelope"
  | "album"
  | "collab"

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
  section: AtelierSectionId
  visualKind: AtelierVisualKind
  collabPartner?: string
  poeticScreen?: AtelierPoeticScreen
  poeticLinkLabel?: string
}

export type AtelierSection = {
  id: AtelierSectionId
  title: string
  intro: string
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

export const atelierCoverImage = "/covers/atelie.webp"

export const atelierSections: AtelierSection[] = [
  {
    id: "figurinhas",
    title: "Figurinhas",
    intro: "",
  },
  {
    id: "papelaria",
    title: "Papelaria",
    intro: "",
  },
  {
    id: "colecoes",
    title: "Colecionáveis",
    intro: "",
  },
  {
    id: "especiais",
    title: "Edições Especiais",
    intro: "",
  },
]

export function atelierGoodImage(id: string): string {
  if (id === "bau") return "/images/bau-tesouros-open.webp"
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
  good: AtelierGood,
): AtelierGoodStatus | null {
  if (good.isClubExclusive) {
    return { kind: "club-collection", label: "exclusivo do clube" }
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

export function getFigurinhasGoods(): AtelierGood[] {
  return atelierGoods.filter((good) => good.section === "figurinhas")
}

export function getFigurinhasSeasonalTeasers() {
  return [
    {
      id: "sazonal-outono",
      title: "coleções sazonais",
      poetic: "novos pacotinhos chegam devagar, como estações que passam sem pressa.",
    },
  ]
}

export function getAtelierCatalogSections() {
  return atelierSections
    .map((section) => ({
      ...section,
      goods: atelierGoods.filter((good) => good.section === section.id),
    }))
    .filter((section) => section.goods.length > 0)
}

export function getAtelierGoodById(id: string): AtelierGood | undefined {
  return atelierGoods.find((good) => good.id === id)
}

export function getAtelierSectionTitle(sectionId: AtelierSectionId): string {
  return atelierSections.find((section) => section.id === sectionId)?.title ?? ""
}

export const atelierGoods: AtelierGood[] = [
  {
    id: "album-descobertas",
    title: "álbum das descobertas",
    poetic:
      "um lugar grosso de papel para prender figurinhas como folhas entre páginas.",
    image: atelierGoodImage("album"),
    price: 58,
    clubPrice: clubPriceFrom(58),
    isLimited: true,
    stock: 6,
    madeToOrder: false,
    collection: "Álbum das Descobertas",
    isClubExclusive: false,
    description:
      "álbum com páginas texturizadas, elástico de linho e divisórias suaves. feito para colar devagar o que o caminho trouxe — sem pressa de completar.",
    section: "figurinhas",
    visualKind: "album",
    poeticScreen: "album-descobertas",
    poeticLinkLabel: "folhear o álbum das descobertas",
  },
  {
    id: "pacotinho-folhas",
    title: "pacotinho — folhas do mundo",
    poetic:
      "pequenas imagens do caminho — como folhas encontradas dentro de um caderno antigo.",
    image: atelierGoodImage("pacotinho-folhas"),
    price: 28,
    clubPrice: clubPriceFrom(28),
    isLimited: true,
    stock: 4,
    madeToOrder: false,
    collection: "Pacotinho — Folhas do Mundo",
    isClubExclusive: false,
    description:
      "envelope de papel kraft com selo de cera ilustrado. dentro, figurinhas em papel fosco — veias, bordas e formas de folhas vistas de perto.",
    section: "figurinhas",
    visualKind: "envelope",
    poeticScreen: "pacotinho-folhas",
    poeticLinkLabel: "conhecer este pacotinho",
  },
  {
    id: "pacotinho-chuva",
    title: "pacotinho — coisas da chuva",
    poetic:
      "figurinhas que parecem ter sido encontradas depois da chuva miúda, ainda com cheiro de terra molhada.",
    image: atelierGoodImage("pacotinho-chuva"),
    price: 28,
    clubPrice: clubPriceFrom(28),
    isLimited: false,
    stock: 9,
    madeToOrder: false,
    collection: "Pacotinho — Coisas da Chuva",
    isClubExclusive: false,
    description:
      "pacotinho surpresa com gotas, nuvens e pequenos objetos de dia cinza. para colar no álbum ou levar no bolso.",
    section: "figurinhas",
    visualKind: "envelope",
    poeticScreen: "pacotinho-chuva",
    poeticLinkLabel: "conhecer este pacotinho",
  },
  {
    id: "pacotinho-quintal",
    title: "pacotinho — quintal",
    poetic:
      "um punhado de imagens do quintal — pedras, galhos, flores caídas — como tesouros de tarde calma.",
    image: atelierGoodImage("pacotinho-quintal"),
    price: 28,
    clubPrice: clubPriceFrom(28),
    isLimited: true,
    stock: 5,
    madeToOrder: false,
    collection: "Pacotinho — Quintal",
    isClubExclusive: false,
    description:
      "envelope artesanal com ilustrações do quintal e da calçada. cada pacote traz uma combinação um pouco diferente.",
    section: "figurinhas",
    visualKind: "envelope",
    poeticScreen: "pacotinho-quintal",
    poeticLinkLabel: "conhecer este pacotinho",
  },
  {
    id: "pacotinho-ceu",
    title: "pacotinho — céu e vento",
    poetic:
      "figurinhas leves de nuvens, pipas e brisa — para quem olha o céu sem pressa de nomear tudo.",
    image: atelierGoodImage("pacotinho-ceu"),
    price: 28,
    clubPrice: clubPriceFrom(28),
    isLimited: false,
    stock: 11,
    madeToOrder: false,
    collection: "Pacotinho — Céu e Vento",
    isClubExclusive: false,
    description:
      "pacotinho com selo de vento. figurinhas em tons suaves de céu, para trocar ou encaixar entre as páginas do álbum.",
    section: "figurinhas",
    visualKind: "envelope",
    poeticScreen: "pacotinho-ceu",
    poeticLinkLabel: "conhecer este pacotinho",
  },
  {
    id: "adesivos",
    title: "adesivos",
    poetic: "detalhes coloridos para marcar páginas e sorrisos.",
    image: atelierGoodImage("adesivos"),
    price: 30,
    clubPrice: clubPriceFrom(30),
    isLimited: false,
    stock: 20,
    madeToOrder: false,
    collection: "Coleção Chuva",
    isClubExclusive: false,
    description:
      "lâminas de adesivos em papel fosco, motivos do céu e da terra. colagem lenta e feliz.",
    section: "colecoes",
    visualKind: "standard",
  },
  {
    id: "bonequinhas",
    title: "bonequinhas da teca",
    poetic: "personagens de papel também precisam de silêncio para existir.",
    image: atelierGoodImage("bonequinhas"),
    price: 44,
    clubPrice: clubPriceFrom(44),
    isLimited: false,
    stock: 10,
    madeToOrder: false,
    collection: "Coleção Quintal",
    isClubExclusive: false,
    description:
      "recortes e figurinos em papel cartão, roupinhas de tecido leve. para histórias inventadas em voz baixa.",
    section: "colecoes",
    visualKind: "standard",
  },
  {
    id: "origami",
    title: "origami",
    poetic: "uma dobra de cada vez, até o papel ganhar asas.",
    image: atelierGoodImage("origami"),
    price: 28,
    clubPrice: clubPriceFrom(28),
    isLimited: false,
    stock: 16,
    madeToOrder: false,
    collection: "Coleção Vento",
    isClubExclusive: false,
    description:
      "papel quadrado em tons naturais e guia ilustrado de dobras simples. sem pressa de acertar o primeiro.",
    section: "colecoes",
    visualKind: "standard",
  },
  {
    id: "carimbos",
    title: "carimbos",
    poetic: "marcas repetidas deixam rastro de quem esteve ali.",
    image: atelierGoodImage("carimbos"),
    price: 40,
    clubPrice: clubPriceFrom(40),
    isLimited: false,
    stock: 7,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: true,
    description:
      "conjunto de carimbos de madeira com símbolos da Teca. tinta à parte, escolha a cor do dia.",
    section: "colecoes",
    visualKind: "standard",
  },
  {
    id: "papel-de-carta",
    title: "papel de carta",
    poetic: "folhas delicadas esperam palavras que não precisam ser perfeitas.",
    image: atelierGoodImage("papel-de-carta"),
    price: 34,
    clubPrice: clubPriceFrom(34),
    isLimited: false,
    stock: 14,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: false,
    description:
      "pacote com folhas vergê e algodão, textura macia, bordas levemente irregulares. para cartas escritas à mão.",
    section: "papelaria",
    visualKind: "standard",
  },
  {
    id: "cartoes",
    title: "cartões",
    poetic: "mensagens pequenas atravessam distâncias sem fazer barulho.",
    image: atelierGoodImage("cartoes"),
    price: 26,
    clubPrice: clubPriceFrom(26),
    isLimited: false,
    stock: 18,
    madeToOrder: false,
    collection: "Coleção Correio",
    isClubExclusive: false,
    description:
      "cartões em branco com envelopes delicados. para entregar na mão ou deixar na porta.",
    section: "papelaria",
    visualKind: "standard",
  },
  {
    id: "imprimiveis",
    title: "imprimíveis",
    poetic: "materiais para imprimir e continuar a daTeca em casa.",
    image: atelierGoodImage("imprimiveis"),
    price: 22,
    clubPrice: clubPriceFrom(22),
    isLimited: false,
    stock: 30,
    madeToOrder: false,
    collection: "Linha Ateliê",
    isClubExclusive: false,
    description:
      "arquivo digital com materiais calmos para imprimir em casa e continuar a daTeca — papel comum já basta.",
    section: "papelaria",
    visualKind: "standard",
  },
  {
    id: "papelaria",
    title: "papelaria",
    poetic: "peças afetivas para tocar, cheirar e levar para casa.",
    image: atelierGoodImage("papelaria"),
    price: 38,
    clubPrice: clubPriceFrom(38),
    isLimited: false,
    stock: 12,
    madeToOrder: false,
    collection: "Linha Ateliê",
    isClubExclusive: false,
    description:
      "kit surpresa com papéis, fitas e detalhes de edição. cada caixa é um pouco diferente.",
    section: "papelaria",
    visualKind: "standard",
    poeticScreen: "papelaria",
    poeticLinkLabel: "conhecer esta linha",
  },
  {
    id: "bau",
    title: "baú de tesouros",
    poetic:
      "um lugar para guardar aquilo que a criança considera especial — folhas, pedras, cartas e pequenas coleções.",
    image: atelierGoodImage("bau"),
    price: 72,
    clubPrice: clubPriceFrom(72),
    isLimited: true,
    stock: 12,
    madeToOrder: false,
    collection: "Linha Ateliê",
    isClubExclusive: false,
    description:
      "não é um brinquedo — é um lugar de pertencimento para as descobertas.",
    section: "especiais",
    visualKind: "standard",
  },
  {
    id: "calendario-abuh",
    title: "calendário de pequenas coisas",
    poetic:
      "dias pequenos também merecem ser lembrados — um calendário para acompanhar o ano devagar.",
    image: atelierGoodImage("calendario-abuh"),
    price: 68,
    clubPrice: clubPriceFrom(68),
    isLimited: true,
    stock: 8,
    madeToOrder: false,
    collection: "ABUH × daTeca",
    isClubExclusive: false,
    description:
      "calendário de mesa com imagens contemplativas, papel espesso e argola de linho. um encontro quieto entre dois universos que acreditam em olhar devagar.",
    section: "especiais",
    visualKind: "collab",
    collabPartner: "ABUH × daTeca",
    poeticScreen: "calendario-abuh",
    poeticLinkLabel: "conhecer este encontro",
  },
]
