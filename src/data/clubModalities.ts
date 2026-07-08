import type { HomeModalityId } from "./homeCopy"
import type { HomeCtaTone } from "../styles/homeCta"

export type ClubModalityId = HomeModalityId

export type ClubModality = {
  id: ClubModalityId
  chapter: string
  title: string
  description: string
  benefits: readonly string[]
  price: string
  ctaLabel: string
  ctaTone: HomeCtaTone
}

export const clubModalities: ClubModality[] = [
  {
    id: "explorador-digital",
    chapter: "I",
    title: "Explorador Digital",
    description:
      "Comece pela plataforma digital e tenha acesso às experiências, universos e coleções do Mundo da Teca.",
    benefits: [
      "Plataforma Digital",
      "Todas as experiências digitais",
      "Minha Coleção",
      "Diário",
      "Biblioteca de materiais",
    ],
    price: "R$ 19,90 / mês",
    ctaLabel: "Conhecer Explorador",
    ctaTone: "clubeExplorador",
  },
  {
    id: "mundo-descobertas",
    chapter: "II",
    title: "Meu Mundo de Descobertas",
    description:
      "Receba todos os meses novas descobertas para construir sua coleção física junto com seu filho.",
    benefits: [
      "Tudo do Explorador Digital",
      "Fichário Oficial",
      "Novas páginas mensais",
      "Materiais exclusivos",
    ],
    price: "R$ 49,90 / mês",
    ctaLabel: "Conhecer Descobertas",
    ctaTone: "meuMundo",
  },
  {
    id: "mundo-tesouros",
    chapter: "III",
    title: "Meu Mundo de Tesouros",
    description:
      "Para famílias que desejam guardar cada descoberta em uma coleção cheia de significado.",
    benefits: [
      "Tudo do Explorador Digital",
      "Baú Oficial",
      "Objetos colecionáveis",
      "Novos envios mensais",
    ],
    price: "R$ 69,90 / mês",
    ctaLabel: "Conhecer Tesouros",
    ctaTone: "atelie",
  },
  {
    id: "expedicao-completa",
    chapter: "IV",
    title: "Expedição Completa",
    description: "A experiência completa do Mundo da Teca.",
    benefits: [
      "Plataforma Digital",
      "Fichário Oficial",
      "Baú Oficial",
      "Objetos colecionáveis",
      "Todos os benefícios",
    ],
    price: "R$ 105,90 / mês",
    ctaLabel: "Conhecer Expedição",
    ctaTone: "clubeColecionador",
  },
]

export const clubModalityById: Record<ClubModalityId, ClubModality> =
  Object.fromEntries(clubModalities.map((m) => [m.id, m])) as Record<
    ClubModalityId,
    ClubModality
  >

/** Selo editorial — ex.: "Clube I", "Clube II" */
export function clubSealLabel(id: ClubModalityId): string {
  return `Clube ${clubModalityById[id].chapter}`
}

export const clubComparisonCopy = {
  title: "Em resumo",
  lead: "Cada modalidade reúne um conjunto diferente de experiências e objetos.",
  columns: [
    {
      key: "plataforma" as const,
      label: "Plataforma",
      illustration: "/assets/editorial/plans/plan-explorador.webp",
      illustrationAlt: "Plataforma digital do Mundo da Teca",
    },
    {
      key: "fichario" as const,
      label: "Fichário",
      illustration: "/assets/editorial/artifacts/pagina-fichario.webp",
      illustrationAlt: "Página do fichário oficial",
    },
    {
      key: "bau" as const,
      label: "Baú",
      illustration: "/images/bau-tesouros-open.webp",
      illustrationAlt: "Baú oficial de tesouros",
    },
  ],
  rows: [
    {
      modalityId: "explorador-digital" as const,
      label: "Explorador",
      plataforma: true,
      fichario: false,
      bau: false,
    },
    {
      modalityId: "mundo-descobertas" as const,
      label: "Descobertas",
      plataforma: true,
      fichario: true,
      bau: false,
    },
    {
      modalityId: "mundo-tesouros" as const,
      label: "Tesouros",
      plataforma: true,
      fichario: false,
      bau: true,
    },
    {
      modalityId: "expedicao-completa" as const,
      label: "Expedição",
      plataforma: true,
      fichario: true,
      bau: true,
    },
  ],
} as const

export const clubModalityPagePlaceholders = {
  benefits: {
    title: "O que está incluído",
  },
  renders: {
    title: "O que você recebe",
    text: "Espaço reservado para renders e ilustrações dos materiais desta modalidade.",
  },
  howItWorks: {
    title: "Como funciona",
    text: "Espaço reservado para explicar o funcionamento mensal, envios e acesso digital.",
  },
  faq: {
    title: "Perguntas frequentes",
    text: "Espaço reservado para as dúvidas mais comuns sobre esta modalidade.",
  },
  subscribe: {
    label: "Assinar esta modalidade",
    note: "A assinatura será disponibilizada em breve nesta página.",
  },
} as const
