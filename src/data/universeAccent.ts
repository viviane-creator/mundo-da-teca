import type { UniverseId } from "./universeAssets"

export type UniverseAccent = {
  ink: string
  line: string
  border: string
  badgeBg: string
  titleWash: string
}

const accents: Record<UniverseId, UniverseAccent> = {
  laboratorio: {
    ink: "#5C6B94",
    line: "rgba(92, 107, 148, 0.28)",
    border: "rgba(92, 107, 148, 0.38)",
    badgeBg: "rgba(92, 107, 148, 0.08)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(92, 107, 148, 0.11) 0%, transparent 70%)",
  },
  cozinha: {
    ink: "#B07A5F",
    line: "rgba(176, 122, 95, 0.28)",
    border: "rgba(176, 122, 95, 0.36)",
    badgeBg: "rgba(176, 122, 95, 0.09)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(176, 122, 95, 0.1) 0%, transparent 70%)",
  },
  oficina: {
    ink: "#7A8060",
    line: "rgba(122, 128, 96, 0.28)",
    border: "rgba(122, 128, 96, 0.36)",
    badgeBg: "rgba(122, 128, 96, 0.09)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(122, 128, 96, 0.1) 0%, transparent 70%)",
  },
  "faz-de-conta": {
    ink: "#907088",
    line: "rgba(144, 112, 136, 0.28)",
    border: "rgba(144, 112, 136, 0.34)",
    badgeBg: "rgba(144, 112, 136, 0.09)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(144, 112, 136, 0.1) 0%, transparent 70%)",
  },
  quintal: {
    ink: "#C4A04E",
    line: "rgba(196, 160, 78, 0.3)",
    border: "rgba(196, 160, 78, 0.36)",
    badgeBg: "rgba(196, 160, 78, 0.1)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(196, 160, 78, 0.11) 0%, transparent 70%)",
  },
  observatorio: {
    ink: "#3E5C72",
    line: "rgba(62, 92, 114, 0.28)",
    border: "rgba(62, 92, 114, 0.36)",
    badgeBg: "rgba(62, 92, 114, 0.09)",
    titleWash:
      "radial-gradient(ellipse 88% 72% at 42% 48%, rgba(62, 92, 114, 0.1) 0%, transparent 70%)",
  },
}

export function getUniverseAccent(universeId: UniverseId): UniverseAccent {
  return accents[universeId]
}
