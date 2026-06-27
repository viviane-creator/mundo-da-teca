import { HomeAboutSection } from "../components/home/HomeAboutSection"
import { HomeExploreMap } from "../components/HomeExploreMap"
import { MeuMundoCollectionSeals } from "../components/MeuMundoCollectionSeals"
import { FicharioDivisoria, FicharioEtiqueta } from "../components/fichario"
import { ParticipationSection } from "../components/ParticipationSection"
import type { ParticipationPlanId } from "../data/participationPlans"
import { appRoutes, resolveUniverseRoute } from "../navigation/appRoutes"
import { styles } from "../styles/appStyles"
import {
  homeCtaClassName,
  homeCtaStyle,
  homeHeroCtaClassName,
} from "../styles/homeCta"
import { WorldPortalLayout, portalPages } from "../worldPortal"

const homeMeuMundoCopy =
  "O lugar onde suas descobertas ganham uma casa."

const homeAtelierCopy =
  "Objetos para guardar descobertas e continuar explorando."

export function Home({
  setScreen,
  onGoToClube,
}: {
  setScreen: (screen: string) => void
  onGoToClube: (planId: ParticipationPlanId) => void
}) {
  const portal = portalPages.home

  return (
    <WorldPortalLayout
      {...portal}
      variant="home"
      heroAction={{
        label: "Começar a explorar",
        onClick: () => setScreen(appRoutes.brincadeiras),
        className: homeHeroCtaClassName,
      }}
    >
      <HomeAboutSection />

      <div style={styles.homeV2Journey}>
        <span style={styles.homeFicharioSpine} aria-hidden="true" />

        <FicharioDivisoria chapter="exploracao" style={styles.homeUniversosDivisoria}>
          <div style={styles.homeExploreSectionPaperCompact}>
            <p style={styles.homeV2SectionKicker}>mapa de exploração</p>
            <h2 style={styles.homeSectionHeadingCompact}>
              Escolha sua primeira descoberta.
            </h2>
            <p style={styles.homeSectionSubtitleCompact}>
              Seis universos cheios de experiências para observar, criar,
              imaginar e colecionar.
            </p>

            <div style={styles.homeV2UniversosWrap}>
              <HomeExploreMap
                onSelect={(target) => setScreen(resolveUniverseRoute(target))}
              />
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria chapter="meuMundo">
          <div style={styles.homeV2MeuMundoCard}>
            <div style={styles.homeV2MeuMundoHeroWash} aria-hidden="true" />
            <div style={styles.homeV2MeuMundoInner}>
              <span style={styles.homeV2MeuMundoSpine} aria-hidden="true" />
              <div style={styles.homeV2MeuMundoPerforation} aria-hidden="true">
                {[0, 1, 2, 3].map((hole) => (
                  <span key={hole} style={styles.homeV2MeuMundoFuro} />
                ))}
              </div>
              <div style={styles.homeV2MeuMundoHeader}>
                <FicharioEtiqueta style={styles.homeV2MeuMundoIdEtiqueta}>
                  coleção digital
                </FicharioEtiqueta>
                <span style={styles.homeV2MeuMundoStamp} aria-hidden="true">
                  exp · 01
                </span>
              </div>
              <h2 style={styles.homeV2ChapterPlaceTitle}>Meu Mundo</h2>
              <p style={styles.homeV2ChapterSubtitleShort}>{homeMeuMundoCopy}</p>
              <MeuMundoCollectionSeals />
              <FicharioEtiqueta
                action
                onClick={() => setScreen(appRoutes.minhaColecao)}
                className={homeCtaClassName("meuMundo")}
                style={{
                  ...styles.homeV2ChapterCta,
                  ...homeCtaStyle("meuMundo"),
                }}
              >
                Abrir Minha Coleção
              </FicharioEtiqueta>
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria chapter="clube">
          <ParticipationSection
            variant="home-path"
            onGoToClube={onGoToClube}
          />
        </FicharioDivisoria>

        <FicharioDivisoria chapter="atelie" style={styles.homeV2ClubeEnd}>
          <div style={styles.homeV2AtelierShop}>
            <p style={styles.homeV2ChapterKicker}>Leve o Mundo da Teca para casa</p>
            <h2 style={styles.homeV2ChapterPlaceTitle}>Ateliê</h2>
            <p style={styles.homeV2ChapterSubtitleShort}>{homeAtelierCopy}</p>
            <FicharioEtiqueta
              action
              onClick={() => setScreen(appRoutes.atelie)}
              className={homeCtaClassName("atelie")}
              style={{
                ...styles.homeV2ChapterCta,
                ...homeCtaStyle("atelie"),
              }}
            >
              Entrar no Ateliê
            </FicharioEtiqueta>
          </div>
        </FicharioDivisoria>
      </div>
    </WorldPortalLayout>
  )
}
