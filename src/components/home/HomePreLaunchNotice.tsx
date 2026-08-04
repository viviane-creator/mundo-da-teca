import { DaTecaInText } from "../brand/DaTecaInText"
import { homeCopy } from "../../data/homeCopy"
import "../../styles/homePreLaunchNotice.css"

/**
 * Faixa de boas-vindas na Home.
 * Remover: desligar SHOW_HOME_PRELAUNCH_NOTICE em config/launchGate.ts
 * (ou apagar este componente + o CSS + o uso em Home.tsx).
 */
function PreLaunchCompassGlyph() {
  return (
    <svg
      className="home-prelaunch-notice__glyph"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" fill="#B89A62" opacity={0.1} />
      <path
        d="M24 8 L24 40 M8 24 L40 24 M13 13 L35 35 M35 13 L13 35"
        stroke="#C4B49A"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.72}
      />
      <path d="M24 11 L21 22 L24 19 L27 22 Z" fill="#8A7348" opacity={0.88} />
      <path d="M24 19 L18 24 L24 21 L30 24 Z" fill="#B89A62" opacity={0.55} />
      <path d="M24 27 L21 36 L24 33 L27 36 Z" fill="#A9864F" opacity={0.5} />
      <circle cx="24" cy="24" r="2.2" fill="#8A7348" opacity={0.85} />
    </svg>
  )
}

function PreLaunchHeartIcon() {
  return (
    <svg
      className="home-prelaunch-notice__heart"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 20.4 10.55 19.1C5.4 14.5 2 11.45 2 7.75 2 4.75 4.4 2.4 7.35 2.4c1.7 0 3.35.8 4.4 2.05C12.8 3.2 14.45 2.4 16.15 2.4 19.1 2.4 21.5 4.75 21.5 7.75c0 3.7-3.4 6.75-8.55 11.35L12 20.4Z"
        fill="#B89A62"
        stroke="#8A7348"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HomePreLaunchNotice() {
  const copy = homeCopy.welcomeNotice

  return (
    <aside className="home-prelaunch-notice" aria-label="Mensagem de boas-vindas">
      <PreLaunchCompassGlyph />
      <div className="home-prelaunch-notice__copy">
        <p className="home-prelaunch-notice__lead">
          <DaTecaInText text={copy.lead} wordmarkSize="inherit" />
          <PreLaunchHeartIcon />
        </p>
        {copy.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              index === 0
                ? "home-prelaunch-notice__line"
                : "home-prelaunch-notice__body"
            }
          >
            <DaTecaInText text={paragraph} wordmarkSize="inherit" />
          </p>
        ))}
        <p className="home-prelaunch-notice__closing">{copy.closing}</p>
      </div>
    </aside>
  )
}
