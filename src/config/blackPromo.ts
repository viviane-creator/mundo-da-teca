/**
 * Black daTeca — Caixa Laboratório (temporária).
 *
 * A faixa e o preço promocional aparecem sozinhos até `endsAt` e somem
 * sozinhos depois disso, voltando ao preço normal sem precisar publicar nada.
 * O preço promocional precisa ser o mesmo configurado na loja Nuvemshop.
 */
export const blackPromo = {
  /** Primeiro instante SEM promoção (01/12/2026, 00:00, horário de Brasília). */
  endsAt: new Date("2026-12-01T00:00:00-03:00"),
  regularBRL: 129.9,
  promoBRL: 109.9,
  title: "Black daTeca",
  until: "até 30/11",
  note: "Preço especial só até o fim de novembro.",
  /** Precisa bater com a regra de frete grátis da Nuvemshop (PAC, Sul e Sudeste). */
  freeShipping: "Frete grátis para Sul e Sudeste",
  freeShippingShort: "Sul e Sudeste",
} as const

export function isBlackPromoActive(now: Date = new Date()): boolean {
  return now.getTime() < blackPromo.endsAt.getTime()
}

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}
