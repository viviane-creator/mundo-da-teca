import type { CSSProperties, ReactNode } from "react"
import { HomeHeroMist, HomeHeroTextMist } from "./components/HomeHeroMist"
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

export const portalPages = {
  home: {
    cover: "/images/hero-home.webp",
    coverAlt: "Mundo da Teca",
    title: "Existe um mundo inteiro\nesperando para ser descoberto.",
    tagline: "Observe. Descubra. Colecione.",
    kicker: "observa • cria • imagina",
  },
  descobertas: {
    cover: "/covers/descobertas.png",
    coverAlt: "Descobertas",
    title: "descobertas",
    tagline: "pequenas coisas que o mundo esconde para quem olha devagar.",
  },
  universos: {
    cover: "/covers/brincadeiras.png",
    coverAlt: "Universos",
    title: "Universos",
    tagline: "Seis trilhas. Seis jeitos de descobrir o mundo.",
  },
  atelie: {
    cover: "/covers/atelie.png",
    coverAlt: "Ateliê",
    title: "ateliê",
    tagline:
      "a loja do Mundo da Teca — onde o encantamento vira objeto físico ou digital.",
  },
  figurinhas: {
    cover: "/cards/atelie/album.png",
    coverAlt: "Figurinhas",
    title: "figurinhas",
    tagline:
      "álbuns, pacotinhos e descobertas raras — coleções feitas devagar, como quem guarda folhas dentro de livros.",
  },
  clube: {
    cover: "/covers/clube.png",
    coverAlt: "Clube da Teca",
    title: "Clube da Teca",
    tagline: "Descobrir. Registrar. Colecionar.",
  },
  meuMundo: {
    cover: "/cards/descobertas/diario.png",
    coverAlt: "Meu Mundo",
    title: "Meu Mundo",
    tagline: "Toda descoberta precisa de um lugar para morar.",
    kicker: "seu fichário de descobertas",
  },
} as const

const p: Record<string, CSSProperties> = {
  coverWrap: {
    position: "relative",
    width: "100%",
    minHeight: "min(52vh, 500px)",
    maxHeight: "540px",
    overflow: "hidden",
    background: "#e8ddd0",
  },
  coverWrapHome: {
    minHeight: "min(78vh, 700px)",
    maxHeight: "780px",
  },
  coverImageHome: {
    objectPosition: "center 36%",
  },
  vignetteHome: {
    background:
      "radial-gradient(ellipse 96% 88% at 50% 44%, transparent 58%, rgba(72,48,32,0.07) 100%)",
  },
  homeHeroTextOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "62%",
    zIndex: 4,
    padding: "0 clamp(18px, 5vw, 28px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    pointerEvents: "none",
    overflow: "visible",
  },
  homeHeroTitle: {
    ...tecaFont.heading,
    fontStyle: "normal",
    fontWeight: 400,
    margin: "0 0 14px",
    fontSize: "clamp(24px, 5.2vw, 36px)",
    lineHeight: 1.3,
    letterSpacing: "0.015em",
    maxWidth: "min(520px, 90vw)",
    color: tecaColors.text,
    textShadow:
      "0 1px 2px rgba(255,253,249,0.92), 0 3px 22px rgba(255,253,249,0.78), 0 1px 0 rgba(90,60,30,0.1)",
  },
  homeHeroTagline: {
    ...tecaFont.prose,
    fontStyle: "normal",
    margin: "0 auto",
    fontSize: "clamp(20px, 4.8vw, 24px)",
    fontWeight: 500,
    color: tecaColors.text,
    lineHeight: 1.35,
    letterSpacing: "0.35px",
    maxWidth: "min(400px, 88vw)",
    textAlign: "center",
    textShadow:
      "0 1px 2px rgba(255,253,249,0.96), 0 2px 18px rgba(255,253,249,0.9), 0 1px 0 rgba(90,60,30,0.16)",
  },
  bodyHome: {
    position: "relative",
    zIndex: 6,
    padding: "56px 24px 32px",
    marginTop: 0,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    minHeight: "inherit",
    objectFit: "cover",
    objectPosition: "center 28%",
    display: "block",
    filter: "saturate(0.92) contrast(1.02)",
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 35%, rgba(72,48,32,0.18) 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
  logo: {
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "158px",
    zIndex: 5,
    opacity: 0.97,
    filter: "drop-shadow(0 6px 16px rgba(90,60,30,0.15))",
  },
  logoHome: {
    top: "clamp(40px, 6vh, 52px)",
    left: "50%",
    width: "clamp(240px, 58vw, 281px)",
    transform: "translateX(-50%)",
    opacity: 0.99,
    filter:
      "drop-shadow(0 4px 14px rgba(90,60,30,0.16)) contrast(1.06) saturate(0.96) brightness(1.02)",
  },
  fade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "180px",
    background: `linear-gradient(180deg, rgba(246,237,226,0) 0%, rgba(246,237,226,0.55) 45%, ${theme.shell} 96%)`,
    zIndex: 2,
    pointerEvents: "none",
  },
  body: {
    position: "relative",
    zIndex: 6,
    padding: "0 24px 32px",
    marginTop: "-36px",
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
  titleCompact: {
    fontSize: "48px",
  },
  tagline: {
    ...tecaHierarchy.l2Poetic,
  },
  breath: {
    ...tecaHierarchy.pageHeroBreath,
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

export function WorldPortalCover({
  cover,
  alt,
  variant = "default",
  showFade = true,
}: {
  cover: string
  alt: string
  variant?: "default" | "home"
  showFade?: boolean
}) {
  return (
    <div
      style={{
        ...p.coverWrap,
        ...(variant === "home" ? p.coverWrapHome : {}),
      }}
    >
      <img
        src={cover}
        alt={alt}
        style={{
          ...p.coverImage,
          ...(variant === "home" ? p.coverImageHome : {}),
        }}
      />
      <div style={p.vignette} />
      <img
        src="/logo/logo.png"
        alt="Mundo da Teca"
        style={{
          ...p.logo,
          ...(variant === "home" ? p.logoHome : {}),
        }}
      />
      {variant === "home" ? (
        <HomeHeroMist />
      ) : (
        showFade && <div style={p.fade} />
      )}
    </div>
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
  children,
}: WorldPortalConfig & {
  variant?: "default" | "home"
  compactTitle?: boolean
  breath?: "normal" | "large"
  children: ReactNode
}) {
  if (variant === "home") {
    return (
      <>
        <div
          style={{
            ...p.coverWrap,
            ...p.coverWrapHome,
          }}
        >
          <img
            src={cover}
            alt={coverAlt}
            width={1000}
            height={1500}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            style={{ ...p.coverImage, ...p.coverImageHome }}
          />
          <div style={{ ...p.vignette, ...p.vignetteHome }} />
          <img
            src="/logo/logo.png"
            alt="Mundo da Teca"
            style={{ ...p.logo, ...p.logoHome }}
          />
          <HomeHeroMist />
          <div style={p.homeHeroTextOverlay}>
            <HomeHeroTextMist />
            <h1 style={{ ...p.homeHeroTitle, position: "relative", zIndex: 1 }}>
              {title.split("\n").map((line, index, lines) => (
                <span key={line}>
                  {line}
                  {index < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p style={{ ...p.homeHeroTagline, position: "relative", zIndex: 1 }}>
              {tagline}
            </p>
          </div>
        </div>
        <section style={p.bodyHome}>{children}</section>
      </>
    )
  }

  return (
    <>
      <WorldPortalCover cover={cover} alt={coverAlt} variant={variant} />
      <section style={p.body}>
        <WorldPortalHeader
          title={title}
          tagline={tagline}
          kicker={kicker}
          compactTitle={compactTitle}
          breath={breath}
        />
        {children}
      </section>
    </>
  )
}

export const worldPortalStyles = p
