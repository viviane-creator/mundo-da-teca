import { appRoutes } from "../navigation/appRoutes"

export type BottomNavIllustrationId =
  | "home"
  | "universos"
  | "meuMundo"
  | "atelie"

export type BottomNavItem = {
  label: string
  screen: string
  illustration: BottomNavIllustrationId
  /** Tom aquarelado do estado ativo */
  activeTint: string
}

/** Menu principal — Clube antigo removido até a nova página do Clube. */
export const bottomNavItems: BottomNavItem[] = [
  {
    label: "Início",
    screen: appRoutes.home,
    illustration: "home",
    activeTint: "#A8947E",
  },
  {
    label: "Universos",
    screen: appRoutes.brincadeiras,
    illustration: "universos",
    activeTint: "#7F95A6",
  },
  {
    label: "Meu Mundo",
    screen: appRoutes.minhaColecao,
    illustration: "meuMundo",
    activeTint: "#8A9870",
  },
  {
    label: "Ateliê",
    screen: appRoutes.atelie,
    illustration: "atelie",
    activeTint: "#B47A63",
  },
]
