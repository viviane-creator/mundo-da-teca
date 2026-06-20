export type DiaryEntry = {
  id: string
  title: string
  datePoetic: string
  description: string
  icon: string
  imagePreview?: string
}

export type DiscoveryCollectionSummary = {
  id: string
  name: string
  found: number
  total: number
  image: string
  poetic: string
  screen: CollectionDetailScreen
}

export type CollectionItem = {
  id: string
  name: string
  note?: string
  dateFound?: string
  image?: string
  found: boolean
}

export type CollectionDetail = {
  id: string
  name: string
  poetic: string
  image: string
  items: CollectionItem[]
}

export type CollectionDetailScreen =
  | "colecao-folhas"
  | "colecao-flores"
  | "colecao-pedras"
  | "colecao-sementes"
  | "colecao-conchas"
  | "colecao-cores-do-mundo"

const monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
]

const weekDayNames = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
]

export function formatPoeticDate(date: Date = new Date()): string {
  const day = weekDayNames[date.getDay()]
  const num = date.getDate()
  const month = monthNames[date.getMonth()]
  return `${day} · ${num} de ${month}`
}

export { diaryMarkerChoices } from "./tecaVisual"

export const initialDiaryEntries: DiaryEntry[] = [
  {
    id: "asa",
    title: "folha que parecia uma asa",
    datePoetic: "manhã de vento leve",
    description: "encontrei perto do portão, dançando baixinho no chão.",
    icon: "folha",
  },
  {
    id: "lua",
    title: "pedra com formato de lua",
    datePoetic: "tarde dourada no quintal",
    description: "cabia na palma da mão e parecia ter guardado luz.",
    icon: "pedra",
  },
  {
    id: "flor",
    title: "flor caída no caminho",
    datePoetic: "depois da chuva miúda",
    description: "ficou no bolso até chegar em casa e virou memória.",
    icon: "flor",
  },
]

function emptySlots(prefix: string, count: number): CollectionItem[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${prefix}-aguardando-${index}`,
    name: "",
    found: false,
  }))
}

function mergeItems(found: CollectionItem[], total: number, prefix: string) {
  return [...found, ...emptySlots(prefix, total - found.length)]
}

const collectionDetailsById: Record<string, CollectionDetail> = {
  folhas: {
    id: "folhas",
    name: "coleção de folhas",
    poetic: "texturas do vento guardadas página por página.",
    image: "/cards/descobertas/colecoes.png",
    items: mergeItems(
      [
        {
          id: "folha-pena",
          name: "folha que parecia pena",
          note: "leve, quase flutuando no ar da calçada",
          dateFound: "manhã de brisa",
          image: "/cards/descobertas/colecoes.png",
          found: true,
        },
        {
          id: "folha-dourada",
          name: "folha dourada do caminho",
          note: "parecia ter guardado um pedaço de sol",
          dateFound: "fim de tarde",
          image: "/cards/descobertas/colecoes.png",
          found: true,
        },
        {
          id: "folha-chuva",
          name: "folha minúscula encontrada depois da chuva",
          note: "ficou brilhando no bolso por um tempo",
          dateFound: "depois da chuva miúda",
          image: "/cards/descobertas/diario.png",
          found: true,
        },
      ],
      10,
      "folhas",
    ),
  },
  flores: {
    id: "flores",
    name: "coleção de flores",
    poetic: "cores delicadas encontradas pelo caminho.",
    image: "/cards/descobertas/colecoes.png",
    items: mergeItems(
      [
        {
          id: "flor-caminho",
          name: "flor caída no caminho",
          note: "cheirava a jardim mesmo longe de casa",
          dateFound: "tarde quieta",
          image: "/cards/descobertas/diario.png",
          found: true,
        },
        {
          id: "flor-bolinha",
          name: "flor em forma de bolinha",
          note: "parecia um pequeno sol de algodão",
          dateFound: "manhã de primavera",
          found: true,
        },
        {
          id: "flor-roxa",
          name: "pétala roxa no muro",
          note: "ficou pressionada entre as páginas do caderno",
          dateFound: "depois do almoço",
          found: true,
        },
        {
          id: "flor-branca",
          name: "flor branca no quintal",
          note: "abriu devagar, como quem acorda sem pressa",
          dateFound: "domingo calmo",
          found: true,
        },
      ],
      10,
      "flores",
    ),
  },
  pedras: {
    id: "pedras",
    name: "coleção de pedras",
    poetic: "formas pequenas que parecem mapas antigos.",
    image: "/cards/descobertas/tesouros.png",
    items: mergeItems(
      [
        {
          id: "pedra-lua",
          name: "pedra com formato de lua",
          note: "cabia na palma e parecia ter guardado luz",
          dateFound: "tarde dourada no quintal",
          image: "/cards/descobertas/tesouros.png",
          found: true,
        },
        {
          id: "pedra-lisa",
          name: "pedra lisa de riacho",
          note: "fria e redonda, como um segredo polido",
          dateFound: "passeio de verão",
          found: true,
        },
      ],
      10,
      "pedras",
    ),
  },
  sementes: {
    id: "sementes",
    name: "coleção de sementes",
    poetic: "promessas de jardim em miniatura.",
    image: "/cards/descobertas/colecoes.png",
    items: mergeItems(
      [
        {
          id: "semente-asa",
          name: "semente que parecia asa",
          note: "girou no ar antes de pousar na mão",
          dateFound: "vento de tarde",
          found: true,
        },
        {
          id: "semente-castanha",
          name: "castanha pequena no bolso",
          note: "peso bom para guardar até em casa",
          dateFound: "caminho da escola",
          found: true,
        },
        {
          id: "semente-silhueta",
          name: "semente em forma de coração",
          note: "encontrada perto do banco da praça",
          dateFound: "sábado devagar",
          found: true,
        },
        {
          id: "semente-dupla",
          name: "duas sementes grudadas",
          note: "pareciam conversar baixinho",
          dateFound: "manhã de outono",
          found: true,
        },
        {
          id: "semente-dourada",
          name: "semente dourada no chão",
          note: "brilhou um instante antes de ser guardada",
          dateFound: "fim de tarde",
          found: true,
        },
      ],
      10,
      "sementes",
    ),
  },
  conchas: {
    id: "conchas",
    name: "coleção de conchas",
    poetic: "ecos do mar guardados com calma.",
    image: "/cards/descobertas/tesouros.png",
    items: mergeItems(
      [
        {
          id: "concha-espiral",
          name: "concha em espiral suave",
          note: "parecia guardar o som distante do mar",
          dateFound: "dia de praia",
          image: "/cards/descobertas/tesouros.png",
          found: true,
        },
      ],
      10,
      "conchas",
    ),
  },
  "cores-do-mundo": {
    id: "cores-do-mundo",
    name: "coleção de cores do mundo",
    poetic: "tons vistos em tardes diferentes.",
    image: "/cards/descobertas/diario.png",
    items: mergeItems(
      [
        {
          id: "cor-terracota",
          name: "terracota do telhado",
          note: "cor quente que apareceu depois da chuva",
          dateFound: "tarde de nuvens",
          found: true,
        },
        {
          id: "cor-verde-musgo",
          name: "verde musgo no muro",
          note: "macio, quase uma pequena floresta",
          dateFound: "manhã fresca",
          found: true,
        },
        {
          id: "cor-azul-tarde",
          name: "azul quieto do céu",
          note: "ficou olhando por um tempo sem pressa",
          dateFound: "domingo à tarde",
          found: true,
        },
        {
          id: "cor-amarelo-luz",
          name: "amarelo de luz na parede",
          note: "mancha de sol que parecia pintura",
          dateFound: "início da manhã",
          found: true,
        },
        {
          id: "cor-rosa-petala",
          name: "rosa de pétala caída",
          note: "tom delicado no caminho até a porta",
          dateFound: "depois do almoço",
          found: true,
        },
        {
          id: "cor-cinza-pedra",
          name: "cinza suave da pedra molhada",
          note: "cor que só aparece quando chove",
          dateFound: "chuva miúda",
          found: true,
        },
      ],
      10,
      "cores",
    ),
  },
}

export const discoveryCollections: DiscoveryCollectionSummary[] = [
  {
    id: "folhas",
    name: "folhas",
    found: 3,
    total: 10,
    image: "/cards/descobertas/colecoes.png",
    poetic: "texturas do vento guardadas página por página.",
    screen: "colecao-folhas",
  },
  {
    id: "flores",
    name: "flores",
    found: 4,
    total: 10,
    image: "/cards/descobertas/colecoes.png",
    poetic: "cores delicadas encontradas pelo caminho.",
    screen: "colecao-flores",
  },
  {
    id: "pedras",
    name: "pedras",
    found: 2,
    total: 10,
    image: "/cards/descobertas/tesouros.png",
    poetic: "formas pequenas que parecem mapas antigos.",
    screen: "colecao-pedras",
  },
  {
    id: "sementes",
    name: "sementes",
    found: 5,
    total: 10,
    image: "/cards/descobertas/colecoes.png",
    poetic: "promessas de jardim em miniatura.",
    screen: "colecao-sementes",
  },
  {
    id: "conchas",
    name: "conchas",
    found: 1,
    total: 10,
    image: "/cards/descobertas/tesouros.png",
    poetic: "ecos do mar guardados com calma.",
    screen: "colecao-conchas",
  },
  {
    id: "cores-do-mundo",
    name: "cores do mundo",
    found: 6,
    total: 10,
    image: "/cards/descobertas/diario.png",
    poetic: "tons vistos em tardes diferentes.",
    screen: "colecao-cores-do-mundo",
  },
]

export function isCollectionDetailScreen(
  screen: string,
): screen is CollectionDetailScreen {
  return screen.startsWith("colecao-")
}

export function getCollectionDetail(
  screen: CollectionDetailScreen,
): CollectionDetail | null {
  const id = screen.replace("colecao-", "")
  return collectionDetailsById[id] ?? null
}

export function buildDiaryDescription(parts: {
  unexpected: string
  observed: string
  curious: string
}): string {
  const lines = [
    parts.observed.trim() && `observei: ${parts.observed.trim()}.`,
    parts.unexpected.trim() &&
      `não esperava: ${parts.unexpected.trim()}.`,
    parts.curious.trim() &&
      `agora quero descobrir: ${parts.curious.trim()}.`,
  ].filter(Boolean)

  return lines.join(" ") || "uma observação guardada com calma."
}
