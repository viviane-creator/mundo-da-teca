import { useState } from "react"
import type { PlayExperience } from "../playData"
import { styles } from "../styles/appStyles"

export function PlayExperienceCard({
  experience,
  fallbackImage,
  selected,
  onSelect,
}: {
  experience: PlayExperience
  fallbackImage: string
  selected: boolean
  onSelect: () => void
}) {
  const [imageSrc, setImageSrc] = useState(experience.image)

  return (
    <button onClick={onSelect} style={styles.experienceCardButton}>
      <article
        style={{
          ...styles.experienceCard,
          ...(selected ? styles.experienceCardSelected : {}),
        }}
      >
        <img
          src={imageSrc}
          alt={experience.title}
          style={styles.experienceCardImage}
          onError={() => {
            if (imageSrc !== fallbackImage) setImageSrc(fallbackImage)
          }}
        />

        <div style={styles.experienceCardBody}>
          <div style={styles.experienceCardHeader}>
            <h3 style={styles.experienceCardTitle}>{experience.title}</h3>
          </div>

          <p style={styles.experienceCardInvite}>{experience.invite}</p>

          <div style={styles.experienceCardMeta}>
            <span>{experience.materials}</span>
            <span>{experience.people}</span>
            <span>{experience.place}</span>
          </div>
        </div>
      </article>
    </button>
  )
}
