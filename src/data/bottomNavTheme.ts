export const bottomNavTheme = {
  bar: "#EFE6D8",
  barTopLine: "rgba(196, 165, 110, 0.28)",
  ink: "#F7F3EA",
  inkInactive: "#8B7668",
  capsuleBg: "#B79A79",
  capsuleBorder: "rgba(255, 253, 249, 0.14)",
  capsuleShadow: "0 1px 3px rgba(90, 70, 50, 0.06)",
} as const

export type NavIconPalette = {
  main: string
  soft: string
  muted: string
}

export const navIconPalettePaper: NavIconPalette = {
  main: "#7A6254",
  soft: "#8B7668",
  muted: "#9A8475",
}

export const navIconPaletteCapsule: NavIconPalette = {
  main: "#F7F3EA",
  soft: "#E8DDD0",
  muted: "#D9CFC2",
}
