import "../../styles/homePreLaunchNotice.css"

/**
 * Faixa temporária de pré-lançamento na Home.
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

export function HomePreLaunchNotice() {
  return (
    <aside
      className="home-prelaunch-notice"
      aria-label="Aviso de pré-lançamento"
    >
      <PreLaunchCompassGlyph />
      <div className="home-prelaunch-notice__copy">
        <p className="home-prelaunch-notice__lead">
          Bem-vindo ao Mundo da Teca.
        </p>
        <p className="home-prelaunch-notice__line">Que bom ter você por aqui.</p>
        <p className="home-prelaunch-notice__body">
          Pode explorar à vontade. Estamos nos últimos preparativos para o
          lançamento oficial e, muito em breve, este será um lugar cheio de
          descobertas para crianças e famílias.
        </p>
        <p className="home-prelaunch-notice__closing">
          Enquanto isso, sinta-se em casa.
        </p>
      </div>
    </aside>
  )
}
