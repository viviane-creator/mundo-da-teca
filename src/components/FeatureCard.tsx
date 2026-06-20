import { styles } from "../styles/appStyles"
import { FicharioFicha } from "./fichario"

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
  void compact
  void radiusKey

  return (
    <FicharioFicha
      variant="referencia"
      layout={horizontal ? "horizontal" : "vertical"}
      codigo={card.id.slice(0, 6).toUpperCase()}
      title={card.title}
      image={card.image}
      imageAlt={card.title}
      onSelect={onClick}
      tilt={tilt}
    >
      {card.text && <p style={styles.cardText}>{card.text}</p>}
    </FicharioFicha>
  )
}
