import { useEffect, useState } from "react"
import { isClubExclusiveFicha } from "../auth/clubExclusiveScreens"
import { useAuth } from "../auth/authContext"
import { getUniverseChapterTitle } from "../data/homeUniversePortals"
import { getUniverseAccent } from "../data/universeAccent"
import type { PlayExperience, PlayUniverse } from "../playData"
import { ClubGateScreen } from "../components/ClubGateScreen"
import { PlayExperienceCard } from "../components/PlayExperienceCard"
import { UniverseChapterFrame } from "../components/UniverseChapterFrame"
import { styles } from "../styles/appStyles"

export function PlayUniversePage({
  setScreen,
  universe,
}: {
  setScreen: (screen: string) => void
  universe: PlayUniverse
}) {
  const { isAuthenticated } = useAuth()
  const [openedId, setOpenedId] = useState<string | null>(null)
  const [showClubGate, setShowClubGate] = useState(false)
  const accent = getUniverseAccent(universe.id)

  useEffect(() => {
    if (isAuthenticated) {
      setShowClubGate(false)
    }
  }, [isAuthenticated])

  const handleExperienceToggle = (experience: PlayExperience) => {
    if (isClubExclusiveFicha(experience) && !isAuthenticated) {
      setShowClubGate(true)
      return
    }

    setOpenedId((current) =>
      current === experience.id ? null : experience.id,
    )
  }

  if (showClubGate) {
    return (
      <ClubGateScreen
        setScreen={setScreen}
        backLabel={getUniverseChapterTitle(universe.id).toLowerCase()}
        onBack={() => setShowClubGate(false)}
      />
    )
  }

  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("universos")}
        style={styles.backButton}
      >
        ← universos
      </button>

      <UniverseChapterFrame
        src={universe.image}
        alt={getUniverseChapterTitle(universe.id)}
        universeId={universe.id}
      />

      <header style={styles.playUniverseChapterEditorial}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(320px, 88vw)",
              height: "72px",
              background: accent.titleWash,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <h1
            style={{
              ...styles.playUniverseChapterTitle,
              position: "relative",
              zIndex: 1,
            }}
          >
            {getUniverseChapterTitle(universe.id)}
          </h1>
        </div>
        <p style={styles.playUniverseChapterTagline}>
          {universe.chapterTagline}
        </p>
      </header>

      <section style={styles.experienceCollection}>
        <h2
          style={{
            ...styles.experienceCollectionTitle,
            paddingBottom: "10px",
            borderBottom: `1px solid ${accent.line}`,
            maxWidth: "220px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Fichas deste universo
        </h2>

        <div
          style={{
            ...styles.experienceAccordion,
            borderColor: accent.border,
          }}
        >
          {universe.experiences.map((experience, index) => (
            <PlayExperienceCard
              key={experience.id}
              experience={experience}
              universeId={universe.id}
              index={index}
              isLast={index === universe.experiences.length - 1}
              expanded={openedId === experience.id}
              onToggle={() => handleExperienceToggle(experience)}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
