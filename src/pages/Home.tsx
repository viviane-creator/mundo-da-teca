import { HomeExploreMap } from "../components/HomeExploreMap"
import { EditorialDecor } from "../components/EditorialDecor"
import { FicharioDivisoria, FicharioEtiqueta } from "../components/fichario"
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
        <span style={styles.homeFicharioSpine} aria-hidden="true" />

        <FicharioDivisoria abaIcon="🗺️" abaLabel="exploração">
          <p style={styles.homeV2SectionKicker}>mapa de exploração</p>
          <h2 style={styles.homeSectionHeading}>
            Escolha por onde começar.
          </h2>
          <p style={styles.homeSectionSubtitle}>
            Seis universos para explorar, criar, imaginar e descobrir.
          </p>

          <div style={styles.homeV2UniversosWrap}>
            <EditorialDecor items={editorialDecorMapCorners} />
            <div style={styles.editorialDecorContent}>
              <HomeExploreMap onSelect={setScreen} />
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="📖" abaLabel="meu mundo">
          <h2 style={styles.homePlaceTitle}>Meu Mundo</h2>
          <p style={styles.homeSectionSubtitle}>
            Toda descoberta precisa de um lugar para morar.
          </p>
          <FicharioEtiqueta
            action
            onClick={() => setScreen("meu-mundo")}
            style={styles.homeV2SoftButton}
          >
            abrir fichário pessoal →
          </FicharioEtiqueta>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="✨" abaLabel="gaveta">
          <div style={{ position: "relative" }}>
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
            </div>

            <div style={styles.homeV2CabinetInner}>
              <p style={styles.homeV2SectionKicker}>gaveta de tesouros</p>
              <h2 style={styles.homePlaceTitle}>Ateliê</h2>
              <p style={styles.homeSectionSubtitle}>
                Complementos das fichas — figurinhas, papelaria e colecionáveis
                para continuar explorando.
              </p>
              <FicharioEtiqueta
                action
                onClick={() => setScreen("atelie")}
                style={styles.homeV2SoftButton}
              >
                abrir gaveta →
              </FicharioEtiqueta>
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="📬" abaLabel="clube">
          <ParticipationSection
            variant="home-path"
            onGoToClube={() => setScreen("clube")}
          />
        </FicharioDivisoria>
      </div>
    </WorldPortalLayout>
  )
}
