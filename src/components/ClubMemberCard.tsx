import { childFirstName } from "../auth/childPersonalization"
import { childProfileCardLabels } from "../auth/childProfileView"
import type { ChildProfile } from "../types/childProfile"
import { styles } from "../styles/appStyles"
import { tecaTilt } from "../tecaVisual"

function ClubMemberPhoto({ profile }: { profile: ChildProfile | null }) {
  const name = profile?.name ?? ""
  const label = name ? `Foto de ${childFirstName(name)}` : "Espaço para foto"

  return (
    <div style={styles.clubMemberPhotoWrap}>
      {profile?.photoUrl ? (
        <img
          src={profile.photoUrl}
          alt={label}
          style={styles.clubMemberPhotoImage}
        />
      ) : (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          aria-hidden
          style={styles.clubMemberPhotoSilhouette}
        >
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="rgba(248, 239, 228, 0.72)"
            stroke="rgba(196, 165, 141, 0.34)"
            strokeWidth="1"
          />
          <circle
            cx="40"
            cy="32"
            r="12"
            fill="rgba(183, 155, 120, 0.22)"
          />
          <path
            d="M18 68 C22 52 32 46 40 46 C48 46 58 52 62 68"
            fill="rgba(183, 155, 120, 0.18)"
          />
        </svg>
      )}
    </div>
  )
}

function ClubMemberField({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div style={styles.clubField}>
      <p style={styles.clubFieldLabel}>{label}</p>
      <p style={styles.clubFieldValue}>{value}</p>
    </div>
  )
}

export function ClubMemberCard({
  profile,
}: {
  profile: ChildProfile | null
}) {
  const labels = childProfileCardLabels(profile)

  return (
    <article style={{ ...styles.clubMemberCard, ...tecaTilt(-0.35) }}>
      <span aria-hidden="true" style={styles.clubMemberCardFrame} />
      <span aria-hidden="true" style={styles.clubMemberCardSeal} />

      <header style={styles.clubMemberCardHeader}>
        <p style={styles.clubMemberCardIssuer}>Mundo da Teca</p>
        <p style={styles.clubMemberNumber}>{labels.explorerNumber}</p>
      </header>

      <h2 style={styles.clubMemberCardTitle}>carteirinha da teca</h2>
      <p style={styles.clubMemberCardSubtitle}>
        documento de explorador — para guardar com orgulho
      </p>

      <div style={styles.clubMemberIdentity}>
        <ClubMemberPhoto profile={profile} />

        <div style={styles.clubMemberFields}>
          <ClubMemberField label="nome da criança" value={labels.displayName} />
          <ClubMemberField label="aniversário" value={labels.birthDate} />
          <ClubMemberField label="explorador desde" value={labels.joinedAt} />
        </div>
      </div>
    </article>
  )
}
