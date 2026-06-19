export type FicharioSlotStatus = "concluida" | "recebida" | "aguardando"

export type FicharioSlot = {
  id: string
  status: FicharioSlotStatus
  title?: string
  note?: string
}

export type FicharioUniverse = {
  id: string
  title: string
  poetic: string
  image: string
  progressLabel: string
  slots: FicharioSlot[]
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
    title: "Laboratório",
    poetic: "experiências suaves e curiosas",
    image: "/images/universos/laboratorio-capa.png",
    progressLabel: "3 de 12 páginas guardadas",
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
    title: "Cozinha",
    poetic: "misturas e descobertas",
    image: "/images/universos/cozinha-capa.png",
    progressLabel: "2 de 12 páginas guardadas",
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
    title: "Oficina",
    poetic: "coisas feitas com as mãos",
    image: "/images/universos/oficina-capa.png",
    progressLabel: "1 de 12 páginas guardadas",
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
    title: "Faz de Conta",
    poetic: "personagens, histórias e mundos inventados",
    image: "/images/universos/arte-capa.png",
    progressLabel: "2 de 12 páginas guardadas",
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
    title: "Quintal",
    poetic: "ar livre, calçada e descobertas lá fora",
    image: "/images/universos/natureza-capa.png",
    progressLabel: "4 de 12 páginas guardadas",
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
    title: "Observatório",
    poetic: "céu, curiosidade e olhar atento",
    image: "/images/universos/movimento-capa.png",
    progressLabel: "1 de 12 páginas guardadas",
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
