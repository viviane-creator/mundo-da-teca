import type { CSSProperties, ReactNode } from "react"
import { tecaColors, tecaFont } from "./tecaVisual"

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
    cover: "/characters/teca-estrelinha-praia.png",
    coverAlt: "Teca no mundo real",
    title: "coisas pequenas para imaginar, brincar e guardar",
    tagline:
      "descobertas, brincadeiras, papelaria, coleções e pequenas memórias para uma infância mais lenta, criativa e viva.",
    kicker: "observa • cria • imagina",
  },
  descobertas: {
    cover: "/covers/descobertas.png",
    coverAlt: "Descobertas",
    title: "descobertas",
    tagline: "pequenas coisas que o mundo esconde para quem olha devagar.",
  },
  brincadeiras: {
    cover: "/covers/brincadeiras.png",
    coverAlt: "Brincadeiras",
    title: "brincadeiras",
    tagline: "ideias para sair da tela e entrar no mundo real.",
  },
  atelie: {
    cover: "/covers/atelie.png",
    coverAlt: "Ateliê",
    title: "ateliê",
    tagline:
      "figurinhas, papéis, coleções e pequenas coisas para guardar.",
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
    title: "clube da teca",
    tagline: "um lugar para continuar guardando infância devagar.",
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
    minHeight: "min(58vh, 540px)",
    maxHeight: "580px",
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
    top: "52px",
    width: "176px",
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
    marginBottom: "4px",
  },
  kicker: {
    ...tecaFont.label,
    letterSpacing: "4px",
    textAlign: "center",
    margin: "0 0 16px",
    opacity: 0.85,
  },
  title: {
    margin: "0 0 14px",
    fontSize: "48px",
    ...tecaFont.portalTitle,
  },
  titleCompact: {
    fontSize: "44px",
  },
  tagline: {
    margin: "0 auto",
    maxWidth: "340px",
    fontSize: "21px",
    ...tecaFont.poetic,
    textAlign: "center",
  },
  breath: {
    height: "32px",
  },
  breathLarge: {
    height: "40px",
  },
  sectionLabel: {
    textAlign: "left",
    margin: "0 0 8px",
    fontSize: "22px",
    ...tecaFont.heading,
    color: "#8a6f5d",
  },
  sectionIntro: {
    textAlign: "left",
    margin: "0 0 28px",
    fontSize: "17px",
    ...tecaFont.poetic,
    padding: "0 2px",
  },
}

export function WorldPortalCover({
  cover,
  alt,
  variant = "default",
}: {
  cover: string
  alt: string
  variant?: "default" | "home"
}) {
  return (
    <div
      style={{
        ...p.coverWrap,
        ...(variant === "home" ? p.coverWrapHome : {}),
      }}
    >
      <img src={cover} alt={alt} style={p.coverImage} />
      <div style={p.vignette} />
      <img
        src="/logo/logo.png"
        alt="Mundo da Teca"
        style={{
          ...p.logo,
          ...(variant === "home" ? p.logoHome : {}),
        }}
      />
      <div style={p.fade} />
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
