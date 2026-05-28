import { styles } from "../styles/appStyles"
import { tecaRadiusAt, tecaTilt } from "../tecaVisual"

type FeatureCardItem = {
  id: string
  title: string
  text?: string
  image: string
}

export function FeatureCard({
  card,
  compact = false,
  horizontal = false,
  tilt = 0,
  radiusKey = 0,
  onClick,
}: {
  card: FeatureCardItem
  compact?: boolean
  horizontal?: boolean
  tilt?: number
  radiusKey?: number
  onClick?: () => void
}) {
  return (
    <button onClick={onClick} style={styles.cardButton}>
      <article
        style={{
          ...styles.featureCard,
          ...(horizontal ? styles.featureCardHorizontal : {}),
          borderRadius: tecaRadiusAt(radiusKey),
          ...(horizontal ? {} : tecaTilt(tilt)),
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={{
            ...styles.cardImage,
            ...(horizontal ? styles.cardImageHorizontal : {}),
          }}
        />

        <div style={styles.cardTextWrap}>
          <h3 style={compact ? styles.cardTitleCompact : styles.cardTitle}>
            {card.title}
          </h3>

          {card.text && <p style={styles.cardText}>{card.text}</p>}
        </div>
      </article>
    </button>
  )
}
