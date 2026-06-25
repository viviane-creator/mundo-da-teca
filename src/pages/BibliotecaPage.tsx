import { bibliotecaShelfItems } from "../data/bibliotecaMock"
import { styles } from "../styles/appStyles"

function BibliotecaHeroDecor() {
  return (
    <svg
      style={styles.bibliotecaHeroDecorSvg}
      viewBox="0 0 320 80"
      aria-hidden="true"
    >
      <ellipse cx="48" cy="44" rx="24" ry="18" fill="#d9c4ad" opacity={0.1} />
      <path
        d="M 270 20 Q 284 28, 278 38"
        fill="none"
        stroke="#c4a58d"
        strokeWidth="0.6"
        opacity={0.18}
        strokeLinecap="round"
      />
      <text x="24" y="22" fill="#b8987a" fontSize="7" opacity={0.2}>
        ✦
      </text>
    </svg>
  )
}

export function BibliotecaPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  return (
    <section style={styles.subPage}>
      <button
        type="button"
        onClick={() => setScreen("meu-mundo")}
        style={styles.backButton}
      >
        ← meu mundo
      </button>

      <section style={styles.bibliotecaHero}>
        <span style={styles.bibliotecaHeroSpine} aria-hidden="true" />
        <BibliotecaHeroDecor />

        <div style={styles.bibliotecaPagesIllustration} aria-hidden="true">
          <img
            src="/cards/descobertas/colecoes.png"
            alt=""
            style={{
              ...styles.bibliotecaPageSheet,
              ...styles.bibliotecaPageSheetBack,
            }}
          />
          <img
            src="/cards/descobertas/diario.png"
            alt=""
            style={{
              ...styles.bibliotecaPageSheet,
              ...styles.bibliotecaPageSheetMid,
            }}
          />
          <img
            src="/cards/descobertas/tesouros.png"
            alt=""
            style={{
              ...styles.bibliotecaPageSheet,
              ...styles.bibliotecaPageSheetFront,
            }}
          />
        </div>
      </section>

      <div style={styles.pageIntroBlock}>
        <p style={styles.bibliotecaKicker}>materiais de exploração</p>
        <h1 style={styles.bibliotecaTitle}>Biblioteca</h1>
        <p style={styles.bibliotecaIntro}>
          Materiais para imprimir e continuar explorando.
        </p>
      </div>

      <p style={styles.bibliotecaShelfLabel}>Na prateleira</p>

      <div style={styles.bibliotecaShelf}>
        <span style={styles.bibliotecaShelfBoard} aria-hidden="true" />
        {bibliotecaShelfItems.map((item, index) => (
          <article
            key={item.id}
            style={{
              ...styles.bibliotecaShelfItem,
              transform: `rotate(${index === 0 ? -0.8 : index === 2 ? 0.7 : 0}deg)`,
            }}
          >
            <img
              src={item.image}
              alt=""
              style={styles.bibliotecaShelfThumb}
              aria-hidden="true"
            />
            <div style={styles.bibliotecaShelfBody}>
              <span style={styles.bibliotecaShelfIcon} aria-hidden="true">
                {item.icon}
              </span>
              <h2 style={styles.bibliotecaShelfTitle}>{item.title}</h2>
              <p style={styles.bibliotecaShelfText}>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <article style={styles.bibliotecaQuietNote}>
        <p style={styles.bibliotecaQuietLabel}>em preparação</p>
        <p style={styles.bibliotecaQuietText}>
          A prateleira está sendo montada devagar. Por enquanto, use o diário
          para observações livres e Minhas Descobertas para as experiências que
          você realizou.
        </p>
      </article>
    </section>
  )
}
