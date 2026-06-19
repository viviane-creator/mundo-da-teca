import { HomeExploreMap } from "../components/HomeExploreMap"
import { EditorialDecor } from "../components/EditorialDecor"
import { ParticipationSection } from "../components/ParticipationSection"
import { editorialDecorMapCorners } from "../data/editorialDecorPresets"
import { styles } from "../styles/appStyles"
import { WorldPortalLayout, portalPages } from "../worldPortal"

const atelierCabinetDecor = [
  { src: "/cards/atelie/album.png", w: 72, h: 48, top: "8%", right: "6%", rotate: 12 },
  { src: "/cards/atelie/pacotinho-folhas.png", w: 56, h: 56, bottom: "14%", left: "4%", rotate: -8 },
  { src: "/cards/atelie/papel-de-carta.png", w: 64, h: 48, top: "38%", left: "8%", rotate: -14 },
  { src: "/cards/descobertas/tesouros.png", w: 52, h: 52, bottom: "8%", right: "10%", rotate: 6 },
  { src: "/cards/atelie/bonequinhas.png", w: 48, h: 48, top: "18%", left: "22%", rotate: -5 },
  { src: "/cards/atelie/papelaria.png", w: 58, h: 44, bottom: "22%", right: "28%", rotate: 10 },
] as const

export function Home({
  setScreen,
}: {
  setScreen: (screen: string) => void
}) {
  const portal = portalPages.home

  return (
    <WorldPortalLayout {...portal} variant="home">
      <div style={styles.homeV2Journey}>
        <section style={styles.homeSectionBlock}>
          <p style={styles.homeV2SectionKicker}>mapa de exploração</p>
          <h2 style={styles.homeSectionHeading}>
            Escolha por onde começar.
          </h2>

          <div style={styles.homeV2UniversosWrap}>
            <EditorialDecor items={editorialDecorMapCorners} />
            <div style={styles.editorialDecorContent}>
              <HomeExploreMap onSelect={setScreen} />
              <p style={styles.homeV2TrailEnd}>
                · · · a trilha encontra seu lugar · · ·
              </p>
            </div>
          </div>
        </section>

        <div style={styles.homeEditorialDivider} />

        <div style={styles.homeV2DestinationWrap}>
          <section style={styles.homeV2Destination}>
            <span style={styles.homeV2DestinationSpine} aria-hidden="true" />

            <p style={styles.homeV2DestinationArrow}>
              ↓ seu destino · onde a trilha encontra casa
            </p>

            <div style={styles.homeV2FicharioIllustration} aria-hidden="true">
              <img
                src="/cards/descobertas/colecoes.png"
                alt=""
                style={{
                  ...styles.homeV2FicharioPage,
                  ...styles.homeV2FicharioPageBack,
                }}
              />
              <img
                src="/cards/descobertas/diario.png"
                alt=""
                style={{
                  ...styles.homeV2FicharioPage,
                  ...styles.homeV2FicharioPageMid,
                }}
              />
              <img
                src="/cards/descobertas/tesouros.png"
                alt=""
                style={{
                  ...styles.homeV2FicharioPage,
                  ...styles.homeV2FicharioPageFront,
                }}
              />
            </div>

            <h2 style={styles.homeV2DestinationHeading}>Meu Mundo</h2>
            <p style={styles.homeV2DestinationPromise}>
              Toda descoberta precisa de um lugar para morar.
            </p>

            <button
              type="button"
              style={styles.homeV2DestinationButton}
              onClick={() => setScreen("meu-mundo")}
            >
              Abrir Meu Mundo
            </button>
          </section>
        </div>

        <div style={styles.homeEditorialDivider} />

        <div id="home-como-participar">
          <ParticipationSection
            variant="home-path"
            onGoToClube={() => setScreen("clube")}
          />
        </div>

        <div style={styles.homeEditorialDivider} />

        <section style={styles.homeV2Cabinet}>
          <div style={styles.homeV2CabinetDecor} aria-hidden="true">
            {atelierCabinetDecor.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt=""
                style={{
                  ...styles.homeV2CabinetDecorImg,
                  width: `${item.w}px`,
                  height: `${item.h}px`,
                  ...(item.top ? { top: item.top } : {}),
                  ...(item.bottom ? { bottom: item.bottom } : {}),
                  ...(item.left ? { left: item.left } : {}),
                  ...(item.right ? { right: item.right } : {}),
                  transform: `rotate(${item.rotate}deg)`,
                }}
              />
            ))}
            <span
              style={{
                ...styles.homeV2CabinetDecorStamp,
                top: "22%",
                right: "18%",
              }}
            />
            <span
              style={{
                ...styles.homeV2CabinetDecorStamp,
                width: "22px",
                height: "22px",
                bottom: "28%",
                right: "6%",
                opacity: 0.28,
              }}
            />
          </div>

          <div style={styles.homeV2CabinetInner}>
            <span
              style={{ ...styles.homeV2CabinetShelf, top: "42%" }}
              aria-hidden="true"
            />
            <span
              style={{ ...styles.homeV2CabinetShelf, top: "68%" }}
              aria-hidden="true"
            />
            <p style={styles.homeV2SectionKicker}>gabinete de curiosidades</p>
            <h2 style={styles.homeSectionHeading}>Ateliê</h2>
            <p style={styles.homeV2CabinetLead}>
              Alguns tesouros insistem em vir para casa.
            </p>
            <button
              type="button"
              style={styles.homeV2SoftButton}
              onClick={() => setScreen("atelie")}
            >
              Visitar Ateliê
            </button>
          </div>
        </section>
      </div>
    </WorldPortalLayout>
  )
}
