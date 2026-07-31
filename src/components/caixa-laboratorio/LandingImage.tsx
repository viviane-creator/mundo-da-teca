import { useState } from "react"

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
  const [failed, setFailed] = useState(false)

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
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  )
}
