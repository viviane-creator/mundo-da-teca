import { useState } from "react"
import {
  formatDiscoveryTitle,
  formatFichaCodigo,
  type PlayExperience,
  type PlayUniverseId,
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

  return (
    <FicharioFicha
      variant="descoberta"
      codigo={formatFichaCodigo(universeId, index)}
      title={formatDiscoveryTitle(experience.title)}
      image={imageSrc}
      imageAlt={experience.title}
      seal={!experience.isFree ? "clube da teca" : null}
      selected={selected}
      onSelect={onSelect}
      onImageError={() => {
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
