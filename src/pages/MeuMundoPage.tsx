import { EditorialDecor } from "../components/EditorialDecor"
import {
  editorialDecorMeuMundoChoices,
  editorialDecorMeuMundoHero,
} from "../data/editorialDecorPresets"
import { meuMundoSections } from "../data/meuMundoMock"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

function MeuMundoHeroDecor() {
  return (
    <svg
      style={styles.meuMundoHeroDecorSvg}
      viewBox="0 0 320 120"
      aria-hidden="true"
    >
      <ellipse cx="42" cy="68" rx="28" ry="20" fill="#d9c4ad" opacity={0.1} />
      <ellipse cx="278" cy="36" rx="22" ry="16" fill="#dcc9b4" opacity={0.09} />
      <path
        d="M 18 24 Q 32 18, 44 26"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.7"
        opacity={0.2}
        strokeLinecap="round"
      />
      <path
        d="M 260 88 Q 274 82, 286 90"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.6"
        opacity={0.18}
        strokeLinecap="round"
      />
      <text x="288" y="22" fill="#b8987a" fontSize="8" opacity={0.2}>
        ✦
      </text>
      <circle
        cx="52"
        cy="28"
        r="6"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.45"
        opacity={0.18}
        strokeDasharray="1 2"
      />
    </svg>
  )
}

export function MeuMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.meuMundo

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <section style={styles.meuMundoHero}>
        <span style={styles.meuMundoHeroSpine} aria-hidden="true" />
        <EditorialDecor items={editorialDecorMeuMundoHero} />
        <MeuMundoHeroDecor />

        <div style={styles.editorialDecorContent}>
          <div style={styles.meuMundoFicharioIllustration} aria-hidden="true">
          <img
            src="/cards/descobertas/colecoes.png"
            alt=""
            style={{
              ...styles.meuMundoFicharioPage,
              ...styles.meuMundoFicharioPageBack,
            }}
          />
          <img
            src="/cards/descobertas/diario.png"
            alt=""
            style={{
              ...styles.meuMundoFicharioPage,
              ...styles.meuMundoFicharioPageMid,
            }}
          />
          <img
            src="/cards/descobertas/tesouros.png"
            alt=""
            style={{
              ...styles.meuMundoFicharioPage,
              ...styles.meuMundoFicharioPageFront,
            }}
          />
        </div>

        <p style={styles.meuMundoHeroComplement}>
          Registre, guarde e colecione tudo aquilo que despertou sua curiosidade.
        </p>
        </div>
      </section>

      <section style={styles.meuMundoChoicesSection}>
        <EditorialDecor items={editorialDecorMeuMundoChoices} />
        <div style={styles.editorialDecorContent}>
        <h2 style={styles.meuMundoChoicesHeading}>
          O que você quer abrir hoje?
        </h2>

        <div style={styles.meuMundoChoicesStack}>
          {meuMundoSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              aria-label={section.buttonLabel}
              style={{
                ...styles.meuMundoChoice,
                transform: `rotate(${index === 0 ? -0.6 : index === 2 ? 0.5 : 0}deg)`,
              }}
              onClick={() => setScreen(section.screen)}
            >
              <span style={styles.meuMundoChoiceIcon} aria-hidden="true">
                {section.icon}
              </span>
              <span style={styles.meuMundoChoiceBody}>
                <span style={styles.meuMundoChoiceTitle}>{section.title}</span>
                <span style={styles.meuMundoChoiceHint}>{section.text}</span>
              </span>
              <span style={styles.meuMundoChoiceArrow} aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>
        </div>
      </section>
    </WorldPortalLayout>
  )
}
