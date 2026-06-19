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
  poetic: string
  image: string
  slots: FicharioSlot[]
}

export function getUniverseArchiveLabel(slots: FicharioSlot[]): string {
  const guardadas = slots.filter((slot) => slot.status === "concluida").length
  const recebidas = slots.filter((slot) => slot.status === "recebida").length

  if (guardadas === 0 && recebidas === 0) return "Coleção iniciada"

  const parts: string[] = []

  if (guardadas > 0) {
    parts.push(
      guardadas === 1
        ? "1 descoberta guardada"
        : `${guardadas} descobertas guardadas`,
    )
  }

  if (recebidas > 0) {
    parts.push(
      recebidas === 1
        ? "1 página recebida"
        : `${recebidas} páginas recebidas`,
    )
  }

  return parts.join(" · ")
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
    poetic: "experiências suaves e curiosas",
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
    poetic: "misturas e descobertas",
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
    poetic: "coisas feitas com as mãos",
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
    poetic: "personagens, histórias e mundos inventados",
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
    poetic: "ar livre, calçada e descobertas lá fora",
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
    poetic: "céu, curiosidade e olhar atento",
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
