import { useState } from "react"
import { clubExclusiveSeal, isClubExclusiveFicha } from "../auth/clubExclusiveScreens"
import {
  formatDiscoveryTitle,
  formatFichaCodigo,
  type PlayExperience,
  type PlayUniverseId,
  usesSquareExperienceArt,
} from "../playData"
import { getUniverseAccent } from "../data/universeAccent"
import { styles } from "../styles/appStyles"
import { FicharioFicha, FicharioRegistro } from "./fichario"
import { PlayExperienceDetailPanel } from "./PlayExperienceDetailPanel"

const discoveryMetaFields = [
  { label: "Materiais", key: "materials" },
  { label: "Tempo", key: "time" },
  { label: "Bagunça", key: "mess" },
  { label: "Vira coleção", key: "collectible" },
] as const

function usesNeutralFichaImage(universeId: PlayUniverseId): boolean {
  return universeId !== "laboratorio"
}

export function PlayExperienceCard({
  experience,
  universeId,
  index,
  expanded,
  isLast = false,
  onToggle,
}: {
  experience: PlayExperience
  universeId: PlayUniverseId
  index: number
  expanded: boolean
  isLast?: boolean
  onToggle: () => void
}) {
  const [imageSrc, setImageSrc] = useState(experience.image)
  const [hideImage, setHideImage] = useState(false)
  const neutralImage = usesNeutralFichaImage(universeId)
  const displayTitle = formatDiscoveryTitle(experience.title)
  const accent = getUniverseAccent(universeId)

  return (
    <article
      style={{
        ...styles.experienceAccordionItem,
        ...(expanded ? styles.experienceAccordionItemOpen : {}),
        ...(isLast ? { borderBottom: "none" } : {}),
        borderBottomColor: accent.line,
        position: "relative",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: expanded ? "28px" : "18%",
          bottom: expanded ? undefined : "18%",
          width: "4px",
          height: expanded ? "56px" : undefined,
          borderRadius: "2px",
          background: accent.ink,
          opacity: 0.42,
        }}
      />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          ...styles.experienceAccordionTrigger,
          ...(expanded ? styles.experienceAccordionTriggerOpen : {}),
          paddingLeft: "36px",
        }}
      >
        <span
          style={{ ...styles.experienceAccordionArrow, color: accent.ink }}
          aria-hidden="true"
        >
          {expanded ? "▾" : "▸"}
        </span>
        <span style={styles.experienceAccordionTitle}>{displayTitle}</span>
        {isClubExclusiveFicha(experience) ? (
          <span
            style={{
              ...styles.experienceAccordionSeal,
              color: accent.ink,
              borderColor: accent.border,
              background: accent.badgeBg,
            }}
          >
            {clubExclusiveSeal}
          </span>
        ) : null}
      </button>

      {expanded ? (
        <div style={styles.experienceAccordionPanel}>
          <FicharioFicha
            variant="descoberta"
            codigo={formatFichaCodigo(universeId, index)}
            catalogAccent={accent}
            image={neutralImage || hideImage ? undefined : imageSrc}
            imageAlt={experience.title}
            imageVariant={
              usesSquareExperienceArt(universeId) ? "squareCapa" : "default"
            }
            neutralImageBlock={neutralImage}
            seal={null}
            onImageError={
              neutralImage
                ? undefined
                : () => {
                    const pngFallback = experience.image.replace(/\.webp$/, ".png")
                    if (imageSrc.endsWith(".webp") && pngFallback !== imageSrc) {
                      setImageSrc(pngFallback)
                      return
                    }
                    setHideImage(true)
                  }
            }
          >
            <p style={styles.experienceCardInvite}>{experience.invite}</p>

            <FicharioRegistro
              variant="discovery"
              labelColor={accent.ink}
              fields={discoveryMetaFields.map((field) => ({
                label: field.label,
                value: experience[field.key],
              }))}
            />
          </FicharioFicha>

          <PlayExperienceDetailPanel experience={experience} accent={accent} />
        </div>
      ) : null}
    </article>
  )
}
