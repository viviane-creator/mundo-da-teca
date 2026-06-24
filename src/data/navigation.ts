import { appRoutes } from "../navigation/appRoutes"

export type NavItem = {
  label: string
  screen: string
  icon: string
  secondary?: boolean
}

export const navItems: NavItem[] = [
  { label: "Início", screen: appRoutes.home, icon: "/icons/estrela.png" },
  { label: "Universos", screen: appRoutes.brincadeiras, icon: "/icons/pipa.png" },
  {
    label: "Meu Mundo",
    screen: appRoutes.minhaColecao,
    icon: "/cards/descobertas/colecoes.png",
  },
  { label: "Clube", screen: appRoutes.clube, icon: "/icons/carteirinha.png" },
  {
    label: "Ateliê",
    screen: appRoutes.atelie,
    icon: "/icons/bau.png",
    secondary: true,
  },
]
