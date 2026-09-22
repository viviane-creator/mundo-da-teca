import { useEffect, useMemo, useState } from "react"

function pngFallbackSrc(src: string): string | null {
  const withoutQuery = src.split("?")[0] ?? src
  if (!/\.webp$/i.test(withoutQuery)) return null
  const png = withoutQuery.replace(/\.webp$/i, ".png")
  const query = src.includes("?") ? src.slice(src.indexOf("?")) : ""
  return `${png}${query}`
}

/** Imagem da landing com placeholder discreto se o arquivo ainda não existir. */
export function LandingImage({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  fetchPriority,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
}) {
  const candidates = useMemo(() => {
    const list = [src]
    const png = pngFallbackSrc(src)
    if (png) list.push(png)
    return list
  }, [src])

  const [candidateIndex, setCandidateIndex] = useState(0)

  useEffect(() => {
    setCandidateIndex(0)
  }, [src])

  const activeSrc = candidates[candidateIndex] ?? src
  const failed = candidateIndex >= candidates.length

  if (failed) {
    return (
      <div
        className={`clx-placeholder${className ? ` ${className}` : ""}`}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <img
      className={className}
      src={activeSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setCandidateIndex((i) => i + 1)}
    />
  )
}
