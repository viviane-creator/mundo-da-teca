import type { UniverseAccent } from "../data/universeAccent"
import type { PlayExperience } from "../playData"
import { styles } from "../styles/appStyles"

export function PlayExperienceDetailPanel({
  experience,
  accent,
}: {
  experience: PlayExperience
  accent?: UniverseAccent
}) {
  const sections = [
    { label: "mini vídeo", text: experience.detail.atmosphericVideo || "em breve" },
    { label: "arte-guia", text: experience.detail.collectibleArt || "em breve" },
    { label: "materiais", text: experience.detail.materialsExpanded },
    { label: "regras", text: experience.detail.rules },
    { label: "como começa", text: experience.detail.howToStart },
    { label: "toque da teca", text: experience.detail.tecaTouch },
    { label: "e se…", text: experience.detail.whatIf },
  ]

  return (
    <article
      style={{
        ...styles.experienceDetail,
        borderTopColor: accent?.line ?? "rgba(196, 165, 141, 0.35)",
      }}
    >
      <p style={styles.experienceDetailTitle}>{experience.title}</p>

      {sections.map((section) => (
        <div key={section.label} style={styles.experienceDetailSection}>
          <p
            style={{
              ...styles.experienceDetailLabel,
              color: accent?.ink ?? "#b3815f",
            }}
          >
            {section.label}
          </p>
          <p style={styles.experienceDetailText}>
            {section.text || "em breve, com calma."}
          </p>
        </div>
      ))}
    </article>
  )
}
