import { useState } from "react"
import {
  formatDiscoveryTitle,
  formatFichaCodigo,
  type PlayExperience,
  type PlayUniverseId,
  usesSquareExperienceArt,
} from "../playData"
import { tecaHierarchy } from "../tecaVisual"
import { FicharioFicha, FicharioRegistro } from "./fichario"

const discoveryMetaFields = [
  { label: "Materiais", key: "materials" },
  { label: "Tempo", key: "time" },
  { label: "Bagunça", key: "mess" },
  { label: "Vira coleção", key: "collectible" },
] as const

export function PlayExperienceCard({
  experience,
  universeId,
  index,
  fallbackImage,
  selected,
  onSelect,
}: {
  experience: PlayExperience
  universeId: PlayUniverseId
  index: number
  fallbackImage: string
  selected: boolean
  onSelect: () => void
}) {
  const [imageSrc, setImageSrc] = useState(experience.image)
  const [hideImage, setHideImage] = useState(false)

  return (
    <FicharioFicha
      variant="descoberta"
      codigo={formatFichaCodigo(universeId, index)}
      title={formatDiscoveryTitle(experience.title)}
      image={hideImage ? undefined : imageSrc}
      imageAlt={experience.title}
      imageVariant={
        usesSquareExperienceArt(universeId) ? "squareCapa" : "default"
      }
      seal={!experience.isFree ? "clube da teca" : null}
      selected={selected}
      onSelect={onSelect}
      onImageError={() => {
        if (universeId === "laboratorio") {
          const pngFallback = experience.image.replace(/\.webp$/, ".png")
          if (imageSrc.endsWith(".webp") && pngFallback !== imageSrc) {
            setImageSrc(pngFallback)
            return
          }
          setHideImage(true)
          return
        }
        if (universeId === "cozinha") {
          setHideImage(true)
          return
        }
        if (imageSrc !== fallbackImage) setImageSrc(fallbackImage)
      }}
    >
      <p
        style={{
          margin: "0 0 12px",
          ...tecaHierarchy.l5Body,
          fontSize: "16px",
          lineHeight: 1.5,
        }}
      >
        {experience.invite}
      </p>

      <FicharioRegistro
        fields={discoveryMetaFields.map((field) => ({
          label: field.label,
          value: experience[field.key],
        }))}
      />
    </FicharioFicha>
  )
}
