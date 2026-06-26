import type { UniverseId } from "../data/universeAssets"
import { styles } from "../styles/appStyles"
import { UniverseSealGlyph } from "./UniverseSealGlyph"

export function UniverseChapterFrame({
  src,
  alt,
  universeId,
}: {
  src: string
  alt: string
  universeId: UniverseId
}) {
  return (
    <figure style={styles.universeChapterFrame}>
      <span style={styles.universeChapterFrameSeal} aria-hidden="true">
        <UniverseSealGlyph universeId={universeId} />
      </span>
      <div style={styles.universeChapterFrameInner}>
        <img
          src={src}
          alt={alt}
          style={styles.universeChapterFrameImage}
        />
      </div>
    </figure>
  )
}
