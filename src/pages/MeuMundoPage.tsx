import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

const meuMundoBlocks = [
  {
    id: "diario",
    title: "Meu Diário",
    text: "Registre tudo o que você observou, criou e descobriu.",
    buttonLabel: "Abrir Diário",
    screen: "diario",
  },
  {
    id: "colecoes",
    title: "Minhas Coleções",
    text: "Complete coleções e acompanhe tudo o que já faz parte do seu mundo.",
    buttonLabel: "Ver Coleções",
    screen: "colecoes",
  },
  {
    id: "biblioteca",
    title: "Biblioteca",
    text: "Baixe páginas, fichas e materiais para imprimir.",
    buttonLabel: "Abrir Biblioteca",
  },
] as const

export function MeuMundoPage({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.meuMundo

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <section style={styles.ficharioComplementsSection}>
        <div style={styles.ficharioComplementsStack}>
          {meuMundoBlocks.map((item) => (
            <article key={item.id} style={styles.ficharioComplementCard}>
              <div style={styles.ficharioComplementBody}>
                <h3 style={styles.ficharioComplementTitle}>{item.title}</h3>
                <p style={styles.ficharioComplementText}>{item.text}</p>
              </div>

              <button
                type="button"
                style={{
                  ...styles.collectionButton,
                  width: "auto",
                  minWidth: "136px",
                }}
                aria-disabled={!("screen" in item)}
                onClick={() => {
                  if ("screen" in item) setScreen(item.screen)
                }}
              >
                {item.buttonLabel}
              </button>
            </article>
          ))}
        </div>
      </section>
    </WorldPortalLayout>
  )
}
