export type NavItem = {
  label: string
  screen: string
  icon: string
  secondary?: boolean
}

export const navItems: NavItem[] = [
  { label: "Início", screen: "home", icon: "/icons/estrela.png" },
  { label: "Universos", screen: "universos", icon: "/icons/pipa.png" },
  {
    label: "Meu Mundo",
    screen: "meu-mundo",
    icon: "/cards/descobertas/colecoes.png",
  },
  { label: "Clube", screen: "clube", icon: "/icons/carteirinha.png" },
  {
    label: "Ateliê",
    screen: "atelie",
    icon: "/icons/bau.png",
    secondary: true,
  },
]
