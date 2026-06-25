import type { CSSProperties, ReactNode } from "react"
import { styles } from "../styles/appStyles"

export function PageCover({
  image,
  alt,
  priority = false,
  style,
  imageStyle,
  children,
}: {
  image: string
  alt: string
  priority?: boolean
  style?: CSSProperties
  imageStyle?: CSSProperties
  children?: ReactNode
}) {
  return (
    <div style={{ ...styles.pageCoverWrap, ...style }}>
      <img
        src={image}
        alt={alt}
        width={1000}
        height={1500}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ ...styles.pageCoverImage, ...imageStyle }}
      />
      {children}
    </div>
  )
}
