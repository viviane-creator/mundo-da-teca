export type NavItem = {
  label: string
  screen: string
  icon: string
  secondary?: boolean
}

export const navItems: NavItem[] = [
  { label: "Início", screen: "home", icon: "/icons/estrela.png" },
  { label: "Clube", screen: "clube", icon: "/icons/carteirinha.png" },
  { label: "Brincadeiras", screen: "brincadeiras", icon: "/icons/pipa.png" },
  {
    label: "Minha Coleção",
    screen: "minha-colecao",
    icon: "/cards/descobertas/colecoes.png",
  },
  {
    label: "Ateliê",
    screen: "atelie",
    icon: "/icons/bau.png",
    secondary: true,
  },
]
