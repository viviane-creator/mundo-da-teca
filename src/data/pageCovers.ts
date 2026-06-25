/** Capas oficiais — /public/covers/ */
export const pageCovers = {
  home: "/covers/home.webp",
  universos: "/covers/universos.webp",
  meuMundo: "/covers/meu-mundo.webp",
  atelie: "/covers/atelie.webp",
  clube: "/covers/clube.webp",
} as const

export type PageCoverId = keyof typeof pageCovers
