export type FicharioSlotStatus = "concluida" | "recebida" | "aguardando"

export type FicharioSlot = {
  id: string
  status: FicharioSlotStatus
  title?: string
  note?: string
}

export type FicharioUniverse = {
  id: string
  icon: string
  title: string
  collectionTitle: string
  poetic: string
  image: string
  slots: FicharioSlot[]
}

export function getUniverseCollectionSummary(slots: FicharioSlot[]): string {
  const guardadas = slots.filter((slot) => slot.status === "concluida").length
  const emConstrucao = slots.filter((slot) => slot.status === "recebida").length
  const aguardando = slots.filter((slot) => slot.status === "aguardando").length

  if (guardadas === 0 && emConstrucao === 0) {
    return aguardando > 0
      ? `Coleção iniciada · ${aguardando} espaços para novas fichas`
      : "Coleção iniciada"
  }

  const parts: string[] = []

  if (guardadas > 0) {
    parts.push(
      guardadas === 1
        ? "1 ficha guardada"
        : `${guardadas} fichas guardadas`,
    )
  }

  if (emConstrucao > 0) {
    parts.push(
      emConstrucao === 1
        ? "1 ficha em construção"
        : `${emConstrucao} fichas em construção`,
    )
  }

  if (aguardando > 0) {
    parts.push(
      aguardando === 1
        ? "1 espaço para nova ficha"
        : `${aguardando} espaços para novas fichas`,
    )
  }

  return parts.join(" · ")
}

/** @deprecated Use getUniverseCollectionSummary */
export function getUniverseArchiveLabel(slots: FicharioSlot[]): string {
  return getUniverseCollectionSummary(slots)
}

function padSlots(
  filled: Omit<FicharioSlot, "id">[],
  prefix: string
): FicharioSlot[] {
  const slots: FicharioSlot[] = filled.map((slot, index) => ({
    id: `${prefix}-${index}`,
    ...slot,
  }))

  while (slots.length < 12) {
    slots.push({
      id: `${prefix}-${slots.length}`,
      status: "aguardando",
    })
  }

  return slots
}

export const ficharioUniverses: FicharioUniverse[] = [
  {
    id: "laboratorio",
    icon: "⚗️",
    title: "Laboratório",
    collectionTitle: "Coleção do Laboratório",
    poetic: "Onde as coisas se transformam.",
    image: "/images/universos/laboratorio-capa.png",
    slots: padSlots(
      [
        {
          status: "concluida",
          title: "ovo saltador",
          note: "guardada numa tarde de perguntas",
        },
        {
          status: "concluida",
          title: "carta invisível",
          note: "escrita com calma na mesa",
        },
        {
          status: "concluida",
          title: "pintura flutuante",
          note: "cores que pareciam dançar",
        },
        {
          status: "recebida",
          title: "papel que encolhe",
          note: "página recebida, ainda por viver",
        },
      ],
      "lab"
    ),
  },
  {
    id: "cozinha",
    icon: "🥄",
    title: "Cozinha",
    collectionTitle: "Coleção da Cozinha",
    poetic: "Onde receitas viram descobertas.",
    image: "/images/universos/cozinha-capa.png",
    slots: padSlots(
      [
        {
          status: "concluida",
          title: "bolo mínimo",
          note: "cheiro de tarde na cozinha",
        },
        {
          status: "recebida",
          title: "salada de cores",
        },
      ],
      "coz"
    ),
  },
  {
    id: "oficina",
    icon: "🔧",
    title: "Oficina",
    collectionTitle: "Coleção da Oficina",
    poetic: "Onde as mãos constroem ideias.",
    image: "/images/universos/oficina-capa.png",
    slots: padSlots(
      [
        {
          status: "concluida",
          title: "caixa de segredos",
          note: "guardada depois da primeira dobra",
        },
      ],
      "ofi"
    ),
  },
  {
    id: "faz-de-conta",
    icon: "🗝️",
    title: "Faz de Conta",
    collectionTitle: "Coleção do Faz de Conta",
    poetic: "Onde a imaginação ganha forma.",
    image: "/images/universos/arte-capa.png",
    slots: padSlots(
      [
        {
          status: "concluida",
          title: "teatro de sombras",
        },
        {
          status: "recebida",
          title: "mapa do reino",
        },
      ],
      "faz"
    ),
  },
  {
    id: "quintal",
    icon: "🪁",
    title: "Quintal",
    collectionTitle: "Coleção do Quintal",
    poetic: "Onde o mundo lá fora vira aventura.",
    image: "/images/universos/natureza-capa.png",
    slots: padSlots(
      [
        { status: "concluida", title: "caça ao vento" },
        { status: "concluida", title: "pedras especiais" },
        { status: "concluida", title: "bolhas ao vento" },
        { status: "recebida", title: "mapa da calçada" },
      ],
      "rua"
    ),
  },
  {
    id: "observatorio",
    icon: "🧭",
    title: "Observatório",
    collectionTitle: "Coleção do Observatório",
    poetic: "Onde a curiosidade encontra o invisível.",
    image: "/images/universos/movimento-capa.png",
    slots: padSlots(
      [
        {
          status: "concluida",
          title: "gotas na vidraça",
          note: "tarde fechada e silenciosa",
        },
      ],
      "chuva"
    ),
  },
]

export const ficharioDefaultExpandedId = "laboratorio"

export const ficharioComplements = [
  {
    id: "diario",
    title: "Diário",
    text: "pequenas descobertas anotadas",
    screen: "diario",
  },
  {
    id: "colecoes",
    title: "Coleções de descoberta",
    text: "folhas, pedras, cores do caminho",
    screen: "colecoes",
  },
] as const
