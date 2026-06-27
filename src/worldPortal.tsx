import type { CSSProperties, ReactNode } from "react"
import { PageCover } from "./components/PageCover"
import { HomeEditorialBridge } from "./components/home/HomeEditorialBridge"
import { HomeHeroMist, HomeHeroTextMist, homeHeroMistZoneStyle } from "./components/HomeHeroMist"
import { atelierPortalCopy } from "./data/atelierPortalCopy"
import { pageCovers } from "./data/pageCovers"
import { tecaColors, tecaFichario, tecaFont, tecaHierarchy, tecaSpacing } from "./tecaVisual"

const theme = {
  text: tecaColors.text,
  muted: tecaColors.muted,
  shell: tecaColors.shell,
}

export type WorldPortalConfig = {
  cover: string
  coverAlt: string
  title: string
  tagline: string
  kicker?: string
}

export type PortalHeroProps = {
  kicker?: string
  title: string
  tagline: string
  compactTitle?: boolean
  variant?: "home" | "portal" | "art"
  action?: {
    label: string
    onClick: () => void
    style?: CSSProperties
    className?: string
  }
}

export const portalPages = {
  home: {
    cover: pageCovers.home,
    coverAlt: "Mundo da Teca",
    title: "Existe um mundo inteiro\nesperando para ser descoberto.",
    tagline:
      "Menos tempo nas telas.\nMais tempo explorando, criando e colecionando descobertas.",
    kicker: "observa • cria • imagina",
  },
  descobertas: {
    cover: pageCovers.meuMundo,
    coverAlt: "Descobertas",
    title: "descobertas",
    tagline: "pequenas coisas que o mundo esconde para quem olha devagar.",
  },
  universos: {
    cover: pageCovers.universos,
    coverAlt: "Universos",
    title: "Universos",
    tagline: "Seis trilhas. Seis jeitos de descobrir o mundo.",
  },
  atelie: {
    cover: pageCovers.atelie,
    coverAlt: "Ateliê",
    title: atelierPortalCopy.title,
    tagline: atelierPortalCopy.description,
  },
  figurinhas: {
    cover: "/cards/atelie/album.png",
    coverAlt: "Figurinhas",
    title: "figurinhas",
    tagline:
      "álbuns, pacotinhos e descobertas raras — edições feitas devagar, como folhas entre páginas de um livro.",
  },
  clube: {
    cover: pageCovers.clube,
    coverAlt: "Clube da Teca",
    title: "Clube da Teca",
    tagline: "Descobrir. Registrar. Colecionar.",
  },
  meuMundo: {
    cover: pageCovers.meuMundo,
    coverAlt: "Meu Mundo",
    title: "Meu Mundo",
    tagline: "Toda descoberta precisa de um lugar para morar.",
    kicker: "seu fichário de descobertas",
  },
} as const

const p: Record<string, CSSProperties> = {
  vignetteHome: {
    background:
      "radial-gradient(ellipse 96% 88% at 50% 44%, transparent 58%, rgba(72,48,32,0.05) 100%)",
  },
  heroContentStack: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    bottom: 0,
    zIndex: 4,
    padding:
      "clamp(10px, 2vh, 16px) clamp(18px, 5vw, 28px) clamp(4px, 1.1vh, 8px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "2px",
    textAlign: "center",
    pointerEvents: "none",
    overflow: "visible",
  },
  /** Meu Mundo e Ateliê — texto no pé da capa, sem sobrepor a arte central */
  heroContentStackArt: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    bottom: 0,
    zIndex: 4,
    padding:
      "clamp(10px, 2vh, 16px) clamp(18px, 5vw, 28px) clamp(14px, 3vh, 24px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "6px",
    textAlign: "center",
    pointerEvents: "none",
    overflow: "visible",
  },
  logoInMist: {
    width: "clamp(148px, 38vw, 190px)",
    opacity: 0.98,
    filter:
      "drop-shadow(0 4px 14px rgba(90,60,30,0.13)) contrast(1.02) saturate(0.94) brightness(1.02)",
    marginBottom: "2px",
  },
  logoInArt: {
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "158px",
    zIndex: 5,
    opacity: 0.97,
    filter: "drop-shadow(0 6px 16px rgba(90,60,30,0.15))",
    pointerEvents: "none",
  },
  heroKicker: {
    ...tecaHierarchy.l6Micro,
    margin: 0,
    opacity: 0.85,
  },
  homeHeroTitle: {
    ...tecaFont.heading,
    fontStyle: "normal",
    fontWeight: 400,
    margin: 0,
    fontSize: "clamp(24px, 5.2vw, 36px)",
    lineHeight: 1.28,
    letterSpacing: "0.015em",
    maxWidth: "min(520px, 90vw)",
    color: tecaColors.text,
    textShadow:
      "0 1px 3px rgba(255,253,249,0.9), 0 4px 26px rgba(255,253,249,0.84), 0 1px 0 rgba(90,60,30,0.07)",
  },
  homeHeroTagline: {
    ...tecaFont.prose,
    fontStyle: "normal",
    margin: 0,
    fontSize: "clamp(16px, 3.8vw, 20px)",
    fontWeight: 400,
    color: tecaColors.muted,
    lineHeight: 1.45,
    letterSpacing: "0.2px",
    maxWidth: "min(340px, 88vw)",
    textAlign: "center",
    textShadow:
      "0 1px 3px rgba(255,253,249,0.94), 0 3px 22px rgba(255,253,249,0.88), 0 1px 0 rgba(90,60,30,0.1)",
  },
  homeHeroAction: {
    ...tecaFichario.etiquetaAction(),
    position: "relative",
    zIndex: 2,
    marginTop: "3px",
    pointerEvents: "auto",
    fontSize: "17px",
    padding: "8px 20px",
  },
  heroTitle: {
    ...tecaHierarchy.l1PageTitle,
    margin: 0,
    lineHeight: 1.08,
  },
  titleCompact: {
    fontSize: "48px",
  },
  heroTagline: {
    ...tecaHierarchy.l2Poetic,
    margin: 0,
    fontSize: "clamp(17px, 4vw, 20px)",
    lineHeight: 1.38,
    maxWidth: "min(360px, 90vw)",
  },
  bodyHome: {
    position: "relative",
    zIndex: 6,
    padding: "0 20px 0",
    marginTop: "-14px",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 35%, rgba(72,48,32,0.18) 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
  fadeHome: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "56%",
    background: `linear-gradient(180deg, rgba(246,237,226,0) 0%, rgba(255,251,245,0.16) 20%, rgba(246,237,226,0.46) 54%, rgba(246,237,226,0.78) 80%, ${theme.shell} 100%)`,
    zIndex: 3,
    pointerEvents: "none",
    WebkitMaskImage:
      "linear-gradient(to top, #000 0%, #000 60%, transparent 100%)",
    maskImage: "linear-gradient(to top, #000 0%, #000 60%, transparent 100%)",
  },
  fade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
    background: `linear-gradient(180deg, rgba(246,237,226,0) 0%, rgba(255,251,245,0.32) 30%, rgba(246,237,226,0.68) 68%, ${theme.shell} 100%)`,
    zIndex: 3,
    pointerEvents: "none",
    WebkitMaskImage:
      "linear-gradient(to top, #000 0%, #000 48%, transparent 100%)",
    maskImage: "linear-gradient(to top, #000 0%, #000 48%, transparent 100%)",
  },
  body: {
    position: "relative",
    zIndex: 6,
    padding: "12px 24px 32px",
    marginTop: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: 0,
  },
  kicker: {
    ...tecaHierarchy.l6Micro,
    opacity: 0.85,
  },
  title: {
    ...tecaHierarchy.l1PageTitle,
  },
  tagline: {
    ...tecaHierarchy.l2Poetic,
  },
  breath: {
    ...tecaHierarchy.pageHeroBreath,
  },
  breathHome: {
    height: `${Math.round(tecaSpacing.poeticToSection * 0.375)}px`,
  },
  breathLarge: {
    height: `${tecaSpacing.poeticToSection}px`,
  },
  sectionLabel: {
    ...tecaHierarchy.l3SectionTitle,
    ...tecaHierarchy.l3SectionTitleFlush,
    textAlign: "left",
    marginBottom: `${tecaSpacing.sectionTitleToSubtitle}px`,
  },
  sectionIntro: {
    ...tecaHierarchy.l4Subtitle,
    textAlign: "left",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: "0 2px",
  },
}

function PortalHeroOverlay({
  hero,
  vignetteHome = false,
}: {
  hero?: PortalHeroProps
  vignetteHome?: boolean
}) {
  const variant = hero?.variant ?? "portal"
  const logoInArt = variant === "art"

  return (
    <>
      <div style={{ ...p.vignette, ...(vignetteHome ? p.vignetteHome : {}) }} />
      <div style={homeHeroMistZoneStyle}>
        <HomeHeroMist />
        <HomeHeroTextMist />
      </div>
      <div style={vignetteHome ? p.fadeHome : p.fade} />
      {logoInArt ? (
        <img
          src="/logo/logo.webp"
          alt="Mundo da Teca"
          style={p.logoInArt}
        />
      ) : null}
      <div style={logoInArt ? p.heroContentStackArt : p.heroContentStack}>
        {!logoInArt ? (
          <img
            src="/logo/logo.webp"
            alt="Mundo da Teca"
            style={p.logoInMist}
          />
        ) : null}
        {hero ? (
          <>
            {hero.kicker && variant !== "home" ? (
              <p style={p.heroKicker}>{hero.kicker}</p>
            ) : null}
            <h1
              style={{
                ...(variant === "home" ? p.homeHeroTitle : p.heroTitle),
                ...(hero.compactTitle && variant !== "home"
                  ? p.titleCompact
                  : {}),
                position: "relative",
                zIndex: 1,
              }}
            >
              {hero.title.split("\n").map((line, index, lines) => (
                <span key={line}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p
              style={{
                ...(variant === "home" ? p.homeHeroTagline : p.heroTagline),
                position: "relative",
                zIndex: 1,
              }}
            >
              {hero.tagline.split("\n").map((line, index, lines) => (
                <span key={line}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            {hero.action ? (
              <button
                type="button"
                className={hero.action.className}
                onClick={hero.action.onClick}
                style={{
                  ...p.homeHeroAction,
                  ...hero.action.style,
                }}
              >
                {hero.action.label}
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  )
}

export function WorldPortalCover({
  cover,
  alt,
  hero,
  vignetteHome = false,
}: {
  cover: string
  alt: string
  hero?: PortalHeroProps
  vignetteHome?: boolean
}) {
  return (
    <PageCover image={cover} alt={alt}>
      <PortalHeroOverlay hero={hero} vignetteHome={vignetteHome} />
    </PageCover>
  )
}

export function WorldPortalHeader({
  title,
  tagline,
  kicker,
  compactTitle = false,
  breath = "normal",
}: {
  title: string
  tagline: string
  kicker?: string
  compactTitle?: boolean
  breath?: "normal" | "large"
}) {
  return (
    <header style={p.header}>
      {kicker && <p style={p.kicker}>{kicker}</p>}
      <h1
        style={{
          ...p.title,
          ...(compactTitle ? p.titleCompact : {}),
        }}
      >
        {title}
      </h1>
      <p style={p.tagline}>{tagline}</p>
      <div style={breath === "large" ? p.breathLarge : p.breath} />
    </header>
  )
}

export function WorldPortalSectionIntro({
  title,
  intro,
}: {
  title: string
  intro: string
}) {
  return (
    <>
      <h2 style={p.sectionLabel}>{title}</h2>
      <p style={p.sectionIntro}>{intro}</p>
    </>
  )
}

export function WorldPortalLayout({
  cover,
  coverAlt,
  title,
  tagline,
  kicker,
  variant = "default",
  compactTitle,
  breath = "normal",
  heroAction,
  children,
}: WorldPortalConfig & {
  variant?: "default" | "home" | "art"
  compactTitle?: boolean
  breath?: "normal" | "large"
  heroAction?: PortalHeroProps["action"]
  children: ReactNode
}) {
  const hero: PortalHeroProps = {
    kicker,
    title,
    tagline,
    compactTitle,
    action: heroAction,
    variant:
      variant === "home" ? "home" : variant === "art" ? "art" : "portal",
  }

  return (
    <>
      <PageCover
        image={cover}
        alt={coverAlt}
        priority={variant === "home"}
      >
        <PortalHeroOverlay hero={hero} vignetteHome={variant === "home"} />
      </PageCover>
      <section style={variant === "home" ? p.bodyHome : p.body}>
        {variant === "home" ? <HomeEditorialBridge /> : null}
        <div
          style={
            variant === "home"
              ? p.breathHome
              : breath === "large"
                ? p.breathLarge
                : p.breath
          }
        />
        {children}
      </section>
    </>
  )
}

export const worldPortalStyles = p
