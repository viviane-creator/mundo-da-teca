import type { CSSProperties, ReactNode } from "react"
import type { UniverseAccent } from "../../data/universeAccent"
import { tecaFichario, tecaFont, tecaTilt } from "../../tecaVisual"

const FURO_COUNT = 5

function FichaCatalogChrome({
  codigo,
  compact = false,
  enlarged = false,
  label = "ficha nº",
  accentInk,
  accentBorder,
  accentBadgeBg,
}: {
  codigo?: string
  compact?: boolean
  enlarged?: boolean
  label?: string
  accentInk?: string
  accentBorder?: string
  accentBadgeBg?: string
}) {
  const codigoStyle = accentInk
    ? {
        ...tecaFichario.fichaCodigo(),
        fontSize: enlarged ? "18px" : "9px",
        letterSpacing: enlarged ? "3px" : "1.5px",
        color: accentInk,
        opacity: 0.9,
        border: `1px solid ${accentBorder ?? accentInk}`,
        borderRadius: "999px",
        padding: enlarged ? "4px 16px" : "2px 8px",
        background: accentBadgeBg ?? "transparent",
      }
    : {
        ...tecaFichario.fichaCodigo(),
        ...(enlarged
          ? { fontSize: "18px", letterSpacing: "3px", padding: "4px 16px" }
          : {}),
      }

  const codigoCompactStyle = accentInk
    ? {
        ...tecaFichario.fichaCodigoCompact(),
        fontSize: enlarged ? "16px" : "8px",
        letterSpacing: enlarged ? "2.6px" : "1.3px",
        color: accentInk,
        opacity: 0.9,
      }
    : {
        ...tecaFichario.fichaCodigoCompact(),
        ...(enlarged ? { fontSize: "16px", letterSpacing: "2.6px" } : {}),
      }

  if (compact) {
    if (!codigo) return null
    return (
      <span style={codigoCompactStyle}>
        {label} {codigo}
      </span>
    )
  }

  return (
    <div
      style={{
        ...tecaFichario.fichaPerforacaoWrap(),
        ...(enlarged
          ? { gap: "20px", padding: "14px 28px 12px" }
          : {}),
      }}
    >
      <div
        style={{
          ...tecaFichario.fichaPerforacao(),
          ...(enlarged ? { gap: "10px" } : {}),
        }}
        aria-hidden="true"
      >
        {Array.from({ length: FURO_COUNT }, (_, index) => (
          <span
            key={index}
            style={{
              ...tecaFichario.fichaFuro(),
              ...(enlarged ? { width: "10px", height: "10px" } : {}),
            }}
          />
        ))}
      </div>
      {codigo && (
        <span style={codigoStyle}>
          {label} {codigo}
        </span>
      )}
    </div>
  )
}

export function FicharioFicha({
  title,
  image,
  imageAlt,
  seal,
  codigo,
  codigoLabel,
  catalogAccent,
  selected = false,
  compact = false,
  enlarged = false,
  flat = false,
  variant = "descoberta",
  layout = "vertical",
  tilt,
  onSelect,
  onImageError,
  imageVariant = "default",
  neutralImageBlock = false,
  children,
  style,
  empty,
  emptyLabel,
}: {
  title?: string
  image?: string
  imageAlt?: string
  seal?: string | null
  codigo?: string
  codigoLabel?: string
  catalogAccent?: Pick<UniverseAccent, "ink" | "border" | "badgeBg">
  selected?: boolean
  compact?: boolean
  enlarged?: boolean
  flat?: boolean
  variant?: "descoberta" | "referencia" | "memoria" | "complemento"
  layout?: "vertical" | "horizontal"
  tilt?: number
  onSelect?: () => void
  onImageError?: () => void
  imageVariant?: "default" | "squareCapa" | "editorialCapa"
  /** Bloco creme vazio no lugar da imagem — fichas de universo */
  neutralImageBlock?: boolean
  children?: ReactNode
  style?: CSSProperties
  empty?: boolean
  emptyLabel?: string
}) {
  const chromeLabel =
    codigoLabel ??
    (variant === "memoria"
      ? "memória nº"
      : variant === "complemento"
        ? "complemento nº"
        : "ficha nº")

  const showCatalogChrome =
    variant === "descoberta" ||
    variant === "memoria" ||
    variant === "complemento"

  const isEditorialCapa = imageVariant === "editorialCapa"
  const isHorizontal = layout === "horizontal" && !compact
  const titleInHeader =
    !compact &&
    !isHorizontal &&
    variant !== "memoria" &&
    variant !== "complemento" &&
    !isEditorialCapa

  const fichaStyle = compact
    ? { ...tecaFichario.fichaCompact(), ...tecaTilt(tilt ?? 0) }
    : variant === "memoria"
      ? {
          ...tecaFichario.fichaMemoria(),
          ...(selected ? tecaFichario.fichaSelected() : {}),
          ...tecaTilt(tilt ?? 0),
        }
      : variant === "complemento"
        ? {
            ...tecaFichario.fichaComplemento(),
            ...(selected ? tecaFichario.fichaSelected() : {}),
            ...tecaTilt(tilt ?? 0),
          }
        : variant === "referencia"
          ? {
              ...tecaFichario.fichaReferencia(),
              ...(isEditorialCapa ? tecaFichario.fichaEditorialCoverCard() : {}),
              ...(isHorizontal
                ? { display: "flex", flexDirection: "row" as const }
                : {}),
              ...(selected ? tecaFichario.fichaSelected() : {}),
              ...tecaTilt(tilt ?? 0),
            }
          : flat
            ? {
                ...tecaFichario.ficha(),
                padding: enlarged ? "36px 32px 32px" : "18px 16px 16px",
                ...(selected ? tecaFichario.fichaSelected() : {}),
                ...tecaTilt(tilt ?? 0),
              }
            : {
                ...tecaFichario.ficha(),
                ...(selected ? tecaFichario.fichaSelected() : {}),
                ...tecaTilt(tilt ?? 0),
              }

  const imageStyle: CSSProperties = isHorizontal
    ? {
        width: "42%",
        minWidth: "120px",
        aspectRatio: imageVariant === "squareCapa" ? "1 / 1" : "16 / 7",
        objectFit: imageVariant === "squareCapa" ? "contain" : "cover",
        display: "block",
        flexShrink: 0,
        ...(imageVariant === "squareCapa"
          ? {
              background: "rgba(248,239,228,0.55)",
              border: `1px dashed ${tecaFichario.material.lineSoft}`,
              borderRadius: "12px",
            }
          : {}),
      }
    : variant === "complemento"
      ? {
          ...tecaFichario.fichaImage(),
          aspectRatio: "4 / 3",
        }
      : imageVariant === "squareCapa"
        ? {
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
            display: "block",
            background: "rgba(248,239,228,0.55)",
            border: `1px dashed ${tecaFichario.material.lineSoft}`,
            borderRadius: enlarged ? "24px" : "12px",
          }
        : imageVariant === "editorialCapa"
          ? tecaFichario.fichaEditorialCapaImage()
          : tecaFichario.fichaImage()

  const bodyStyle =
    variant === "memoria"
      ? tecaFichario.fichaMemoriaBody()
      : flat
        ? undefined
        : enlarged
          ? { padding: "24px 32px 28px" }
          : tecaFichario.fichaBody()

  const article = (
    <article style={{ ...fichaStyle, ...style }}>
      {empty ? (
        <>
          {showCatalogChrome && (
            <FichaCatalogChrome
              codigo={codigo}
              compact={compact}
              enlarged={enlarged}
              label={chromeLabel}
              accentInk={catalogAccent?.ink}
              accentBorder={catalogAccent?.border}
              accentBadgeBg={catalogAccent?.badgeBg}
            />
          )}
          <div
            style={{
              width: "100%",
              height: "48px",
              borderRadius: "10px",
              border: `1px dashed ${tecaFichario.material.lineSoft}`,
              background: "rgba(255,253,249,0.45)",
              margin: compact ? undefined : "12px 14px 8px",
              marginBottom: compact ? "8px" : undefined,
            }}
          />
          <p
            style={{
              margin: compact ? 0 : "0 14px 12px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "13px",
              color: "#b5a090",
              letterSpacing: "0.3px",
            }}
          >
            {emptyLabel ?? "espaço para nova ficha"}
          </p>
        </>
      ) : (
        <>
          {variant === "memoria" && (
            <span style={tecaFichario.fichaMemoriaSpine()} aria-hidden="true" />
          )}

          {showCatalogChrome && (
            <FichaCatalogChrome
              codigo={codigo}
              compact={compact}
              enlarged={enlarged}
              label={chromeLabel}
              accentInk={catalogAccent?.ink}
              accentBorder={catalogAccent?.border}
              accentBadgeBg={catalogAccent?.badgeBg}
            />
          )}

          {(title || seal) && titleInHeader && (
            <div style={tecaFichario.fichaHeader()}>
              {title && <h3 style={tecaFichario.fichaTitle()}>{title}</h3>}
              {seal && (
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "9px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#a67c52",
                    border: "1px solid #e2cdb8",
                    borderRadius: "999px",
                    padding: "5px 9px",
                    background: "rgba(248, 236, 223, 0.7)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    marginTop: "4px",
                  }}
                >
                  {seal}
                </span>
              )}
            </div>
          )}

          {compact && seal && (
            <div style={{ marginBottom: "6px" }}>
              <span
                style={{
                  fontSize: "8px",
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  color: "#a67c52",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {seal}
              </span>
            </div>
          )}

          {compact && title && (
            <h4
              style={{
                margin: "0 0 4px",
                ...tecaFichario.fichaTitle(),
                fontSize: "22px",
              }}
            >
              {title}
            </h4>
          )}

          {neutralImageBlock && !compact && (
            <div
              style={{
                width: "100%",
                aspectRatio:
                  imageVariant === "squareCapa" ? "1 / 1" : "5 / 3",
                display: "block",
                background: "#fffdf9",
                ...(imageVariant === "squareCapa"
                  ? { borderRadius: enlarged ? "24px" : "12px" }
                  : {}),
              }}
              aria-hidden="true"
            />
          )}

          {image && compact && (
            <img
              src={image}
              alt={imageAlt ?? title ?? ""}
              style={{
                width: "100%",
                height: "72px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "8px",
                border: `1px dashed ${tecaFichario.material.lineSoft}`,
                display: "block",
              }}
              onError={onImageError}
            />
          )}

          {image && !compact && !neutralImageBlock && (
            <img
              src={image}
              alt={imageAlt ?? title ?? ""}
              style={
                variant === "memoria"
                  ? {
                      width: "100%",
                      maxHeight: "120px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "10px",
                      border: `1px dashed ${tecaFichario.material.lineSoft}`,
                      display: "block",
                    }
                  : imageStyle
              }
              onError={onImageError}
            />
          )}

          {(title || children || seal) &&
            (isHorizontal || compact || variant === "memoria" || variant === "complemento") && (
              <div
                style={
                  isHorizontal
                    ? { padding: "14px 14px 16px", flex: 1, minWidth: 0 }
                    : bodyStyle
                }
              >
                {isHorizontal && title && (
                  <h3
                    style={{
                      margin: 0,
                      ...tecaFont.heading,
                      fontSize: "22px",
                    }}
                  >
                    {title}
                  </h3>
                )}

                {variant === "memoria" && (seal || title) && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "10px",
                      marginBottom: title ? "8px" : 0,
                    }}
                  >
                    {seal && (
                      <span style={tecaFichario.etiqueta()}>{seal}</span>
                    )}
                  </div>
                )}

                {variant === "complemento" && (title || seal) && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {title && (
                      <h3 style={tecaFichario.fichaComplementoTitle()}>
                        {title}
                      </h3>
                    )}
                    {seal && (
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: "9px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "#9a7f6d",
                          border: "1px solid #e8d8c8",
                          borderRadius: "999px",
                          padding: "4px 8px",
                          background: "rgba(248, 240, 232, 0.8)",
                          fontFamily: "'Cormorant Garamond', serif",
                          lineHeight: 1.3,
                        }}
                      >
                        {seal}
                      </span>
                    )}
                  </div>
                )}

                {variant === "memoria" && title && (
                  <h3 style={tecaFichario.fichaMemoriaTitle()}>{title}</h3>
                )}

                {children}
              </div>
            )}

          {children &&
            !compact &&
            !isHorizontal &&
            variant !== "memoria" &&
            variant !== "complemento" &&
            !isEditorialCapa && (
              <div style={bodyStyle}>{children}</div>
            )}
        </>
      )}
    </article>
  )

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        style={tecaFichario.fichaButton()}
      >
        {article}
      </button>
    )
  }

  return article
}
