import { atelierPortalCopy } from "./atelierPortalCopy"

export const pageData = {
  descobertas: {
    title: "Descobertas",
    intro: "pequenas coisas que o mundo esconde para quem olha devagar.",
    cover: "/covers/meu-mundo.webp",
  },
  universos: {
    title: "Universos",
    intro: "seis mundos para explorar experiências e sair da tela.",
    cover: "/covers/universos.webp",
  },
  atelie: {
    title: atelierPortalCopy.title,
    intro: atelierPortalCopy.description,
    cover: "/covers/atelie.webp",
  },
  clube: {
    title: "Clube daTeca",
    intro: "para famílias daTeca.",
    cover: "/covers/clube.webp",
  },
} as const
