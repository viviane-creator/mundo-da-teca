/**
 * Estratégia comercial daTeca — fonte de verdade do posicionamento atual.
 *
 * Modelo descontinuado (NÃO usar em UI ou cópia nova):
 * - Explorador Digital
 * - Meu Mundo de Descobertas
 * - Meu Mundo de Tesouros
 * - Expedição Completa
 *
 * Não existem mais planos, comparativos nem escolha entre modalidades.
 */

/** Páginas e CTAs do Clube antigo (4 modalidades). Manter `false` até a nova página do Clube. */
export const CLUB_MARKETING_ENABLED = false

/**
 * Produtos físicos Baú e Fichário — existem no projeto, mas ainda não entram
 * no primeiro envio nem devem aparecer no site neste momento.
 */
export const SHOW_BAU_AND_FICHARIO_PRODUCTS = false

/**
 * Produto de entrada e prioridade atual de conversão.
 * Landing de alta conversão ainda será criada — não implementar aqui.
 */
export const entryProduct = {
  id: "caixa-laboratorio",
  name: "Caixa Laboratório daTeca",
  priceBRL: 89.9,
  shippingBRL: 10,
  shippingScope: "todo o Brasil",
  firstBatchUnits: 100,
} as const

/**
 * Visão do Clube único (futuro — página ainda não implementada).
 * Um só Clube. Assinatura única. Valor fixo. Sem upgrades.
 */
export const clubVision = {
  name: "Clube daTeca",
  model: "single-subscription" as const,
  firstShipment: {
    name: "Caixa Laboratório daTeca",
    includes: [
      "Caixa Laboratório daTeca",
      "Manual ilustrado",
      "Ingredientes organizados",
      "Frascos",
      "Materiais",
      "Ferramentas básicas para começar",
    ],
    excludesUntilLater: ["Baú", "Fichário"],
    note: "Custo maior no primeiro envio porque cria a base da coleção.",
  },
  monthlyShipments: {
    description:
      "Após o primeiro envio, todos os meses o assinante recebe uma nova caixa que complementa a coleção.",
    mayInclude: [
      "novas ferramentas",
      "novos ingredientes",
      "novos materiais",
      "novos acessórios",
      "novas experiências",
      "novos desafios",
    ],
  },
  perks: [
    "Surpresas ao longo do ano",
    "Brindes ocasionais",
    "Sorteios exclusivos para assinantes",
    "Presente especial de aniversário",
    "Coleção construída ao longo dos meses",
    "Ferramentas que vão chegando aos poucos",
  ],
} as const

/** IDs legados das quatro modalidades — só para redirecionar rotas antigas. */
export const DEPRECATED_CLUB_MODALITY_IDS = [
  "explorador-digital",
  "mundo-descobertas",
  "mundo-tesouros",
  "expedicao-completa",
] as const
