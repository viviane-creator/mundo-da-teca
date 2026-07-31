import { toAtelierProductScreen } from "../atelierNavigation"
import type { ParticipationPlanId } from "../data/participationPlans"
import { isPlayUniverseScreen } from "../playData"

/** Destinos canônicos — nomes de produto vs. id técnico de tela */
export const appRoutes = {
  /** Página de abertura temporária — capa do livro */
  launch: "launch",
  home: "home",
  /** Hub Brincadeiras / mapa de universos */
  brincadeiras: "universos",
  /** Minha Coleção (fichário digital) */
  minhaColecao: "meu-mundo",
  clube: "clube",
  kit: "kit",
  /** Landing de vendas — Caixa Laboratório (fora do menu) */
  caixaLaboratorio: "caixa-laboratorio",
  /** Pós-compra Hotmart (página externa configurável na Hotmart) */
  pedidoConfirmado: "pedido-confirmado",
  atelie: "atelie",
  bauDeTesouros: toAtelierProductScreen("bau"),
} as const

export type ClubNavigation = {
  screen: typeof appRoutes.clube
  plan: ParticipationPlanId
}

export function clubNavigation(plan: ParticipationPlanId): ClubNavigation {
  return { screen: appRoutes.clube, plan }
}

/** Página do universo ou hub Brincadeiras se a rota ainda não existir */
export function resolveUniverseRoute(target: string): string {
  return isPlayUniverseScreen(target) ? target : appRoutes.brincadeiras
}
