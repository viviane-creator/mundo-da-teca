import type { CSSProperties, ReactNode } from "react"
import { PageCover } from "./components/PageCover"
import { HomeHeroMist, HomeHeroTextMist, homeHeroMistZoneStyle, homeHeroMistZoneStyleHome } from "./components/HomeHeroMist"
import { atelierPortalCopy } from "./data/atelierPortalCopy"
import { pageCovers } from "./data/pageCovers"
import { heroCoverFadeStyle } from "./styles/heroCoverFade"
import { tecaColors, tecaFont, tecaHierarchy, tecaSpacing } from "./tecaVisual"

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
  variant?: "home" | "portal" | "art" | "footer"
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
    tagline: "",
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
  /** Universos e capas com logo + título no pé da imagem */
  heroContentStackFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
    padding:
      "clamp(8px, 2vw, 12px) clamp(20px, 5vw, 28px) clamp(10px, 2.5vw, 14px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "clamp(4px, 1vw, 6px)",
    textAlign: "center",
    pointerEvents: "none",
    overflow: "visible",
  },
  logoInFooter: {
    width: "clamp(108px, 26vw, 142px)",
    opacity: 0.97,
    filter: "drop-shadow(0 3px 10px rgba(90,60,30,0.12))",
    marginBottom: "clamp(2px, 0.6vw, 4px)",
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
  homeHeroIntro: {
    position: "relative",
    zIndex: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "calc(clamp(22px, 4.7vw, 32px) * 1.08 * -9)",
    padding:
      "clamp(18px, 4.5vw, 26px) clamp(20px, 5vw, 28px) clamp(8px, 2vw, 12px)",
    gap: "clamp(4px, 1vw, 6px)",
  },
  homeHeroIntroLogo: {
    width: "clamp(148px, 38vw, 190px)",
    height: "auto",
    marginBottom: "clamp(6px, 1.5vw, 10px)",
    opacity: 0.98,
    filter:
      "drop-shadow(0 4px 14px rgba(90,60,30,0.13)) contrast(1.02) saturate(0.94) brightness(1.02)",
  },
  homeHeroIntroTitle: {
    ...tecaFont.portalTitle,
    margin: 0,
    fontSize: "clamp(22px, 4.7vw, 32px)",
    lineHeight: 1.08,
    letterSpacing: "0.01em",
    maxWidth: "min(520px, 90vw)",
    color: tecaColors.text,
    textShadow:
      "0 1px 3px rgba(255,253,249,0.9), 0 4px 26px rgba(255,253,249,0.84), 0 1px 0 rgba(90,60,30,0.07)",
  },
  homeHeroIntroTagline: {
    ...tecaFont.prose,
    fontStyle: "normal",
    margin: 0,
    fontSize: "clamp(16px, 3.8vw, 20px)",
    fontWeight: 400,
    color: tecaColors.muted,
    lineHeight: 1.45,
    letterSpacing: "0.2px",
    maxWidth: "min(340px, 88vw)",
    textShadow:
      "0 1px 3px rgba(255,253,249,0.94), 0 3px 22px rgba(255,253,249,0.88), 0 1px 0 rgba(90,60,30,0.1)",
  },
  heroTitle: {
    ...tecaHierarchy.l1PageTitle,
    margin: 0,
    lineHeight: 1.08,
  },
  heroTitleFooter: {
    ...tecaFont.portalTitle,
    margin: 0,
    fontSize: "clamp(29px, 7.2vw, 41px)",
    lineHeight: 1.06,
    letterSpacing: "0.01em",
    color: tecaColors.text,
  },
  titleCompact: {
    fontSize: "clamp(32px, 8.5vw, 57.6px)",
    lineHeight: 1.06,
    maxWidth: "min(100%, 14ch)",
    marginInline: "auto",
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
    padding: "0 20px clamp(16px, 4vw, 24px)",
    marginTop: 0,
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 35%, rgba(72,48,32,0.18) 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
  fade: {
    ...heroCoverFadeStyle,
    zIndex: 3,
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
    height: "clamp(20px, 5vw, 28px)",
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

function PortalMultiline({ text }: { text: string }) {
  return text.split("\n").map((line, index, lines) => (
    <span key={line}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ))
}

function HomeHeroIntro({
  title,
  tagline,
}: {
  title: string
  tagline: string
}) {
  return (
    <header style={p.homeHeroIntro} className="home-hero-intro">
      <img
        src="/logo/logo.webp"
        alt="Mundo da Teca"
        width={190}
        height={80}
        loading="eager"
        decoding="async"
        style={p.homeHeroIntroLogo}
      />
      <h1 style={p.homeHeroIntroTitle}>
        <PortalMultiline text={title} />
      </h1>
      {tagline.trim() ? (
        <p style={p.homeHeroIntroTagline}>
          <PortalMultiline text={tagline} />
        </p>
      ) : null}
    </header>
  )
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
  const logoInFooter = variant === "footer"
  const contentStackStyle = logoInArt
    ? p.heroContentStackArt
    : logoInFooter
      ? p.heroContentStackFooter
      : p.heroContentStack

  return (
    <>
      <div style={{ ...p.vignette, ...(vignetteHome ? p.vignetteHome : {}) }} />
      <div style={vignetteHome ? homeHeroMistZoneStyleHome : homeHeroMistZoneStyle}>
        <HomeHeroMist />
        {!vignetteHome ? <HomeHeroTextMist /> : null}
      </div>
      <div style={p.fade} />
      {logoInArt ? (
        <img
          src="/logo/logo.webp"
          alt="Mundo da Teca"
          className="world-portal-logo-art"
          style={p.logoInArt}
        />
      ) : null}
      {variant !== "home" ? (
        <div style={contentStackStyle}>
          {!logoInArt ? (
            <img
              src="/logo/logo.webp"
              alt="Mundo da Teca"
              style={logoInFooter ? p.logoInFooter : p.logoInMist}
            />
          ) : null}
          {hero ? (
            <>
              {hero.kicker && variant !== "footer" ? (
                <p style={p.heroKicker}>{hero.kicker}</p>
              ) : null}
              <h1
                className={
                  variant === "footer"
                    ? "world-portal-hero-title-footer"
                    : hero.compactTitle && variant !== "footer"
                      ? "world-portal-title-compact"
                      : undefined
                }
                style={{
                  ...(variant === "footer"
                    ? p.heroTitleFooter
                    : p.heroTitle),
                  ...(hero.compactTitle && variant !== "footer"
                    ? p.titleCompact
                    : {}),
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <PortalMultiline text={hero.title} />
              </h1>
              {hero.tagline.trim() ? (
                <p
                  style={{
                    ...p.heroTagline,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <PortalMultiline text={hero.tagline} />
                </p>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
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
  breath?: "normal" | "large" | "none"
}) {
  return (
    <header style={p.header}>
      {kicker && <p style={p.kicker}>{kicker}</p>}
      <h1
        className={compactTitle ? "world-portal-title-compact" : undefined}
        style={{
          ...p.title,
          ...(compactTitle ? p.titleCompact : {}),
        }}
      >
        {title}
      </h1>
      <p style={p.tagline}>{tagline}</p>
      <div
        style={
          breath === "none" ? { height: 0 } : breath === "large" ? p.breathLarge : p.breath
        }
      />
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
  children,
}: WorldPortalConfig & {
  variant?: "default" | "home" | "art" | "footer"
  compactTitle?: boolean
  breath?: "normal" | "large" | "none"
  children: ReactNode
}) {
  const hero: PortalHeroProps = {
    kicker,
    title,
    tagline,
    compactTitle,
    variant:
      variant === "home"
        ? "home"
        : variant === "art"
          ? "art"
          : variant === "footer"
            ? "footer"
            : "portal",
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
      <section
        className={`world-portal-body${variant === "home" ? " world-portal-body--home" : ""}`}
        style={variant === "home" ? p.bodyHome : p.body}
      >
        {variant === "home" ? (
          <HomeHeroIntro title={title} tagline={tagline} />
        ) : null}
        <div
          className={variant === "home" ? "home-body-breath" : undefined}
          style={
            variant === "home"
              ? p.breathHome
              : breath === "none"
                ? { height: 0 }
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
