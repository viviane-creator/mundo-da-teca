import { HomeExploreMap } from "../components/HomeExploreMap"
import { MeuMundoCollectionSeals } from "../components/MeuMundoCollectionSeals"
import { FicharioDivisoria, FicharioEtiqueta } from "../components/fichario"
import { ParticipationSection } from "../components/ParticipationSection"
import type { ParticipationPlanId } from "../data/participationPlans"
import { appRoutes, resolveUniverseRoute } from "../navigation/appRoutes"
import { styles } from "../styles/appStyles"
import { homeCtaClassName, homeCtaStyle } from "../styles/homeCta"
import { WorldPortalLayout, portalPages } from "../worldPortal"

export function Home({
  setScreen,
  onGoToClube,
}: {
  setScreen: (screen: string) => void
  onGoToClube: (planId: ParticipationPlanId) => void
}) {
  const portal = portalPages.home

  return (
    <WorldPortalLayout {...portal} variant="home">
      <div style={styles.homeV2Journey}>
        <span style={styles.homeFicharioSpine} aria-hidden="true" />

        <FicharioDivisoria chapter="exploracao">
          <div style={styles.homeExploreSectionPaper}>
            <p style={styles.homeV2SectionKicker}>mapa de exploração</p>
            <h2 style={styles.homeSectionHeading}>
              Escolha por onde começar.
            </h2>
            <p style={styles.homeSectionSubtitle}>
              Seis universos para explorar, criar, imaginar e descobrir.
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
              <p style={styles.homeV2ChapterSubtitle}>
                O lugar onde suas descobertas ganham uma casa.
              </p>
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

        <FicharioDivisoria chapter="atelie">
          <div style={styles.homeV2AtelierShop}>
            <p style={styles.homeV2ChapterKicker}>CURADORIA</p>
            <h2 style={styles.homeV2ChapterPlaceTitle}>Ateliê</h2>
            <p style={styles.homeV2ChapterSubtitle}>
              Tesouros criados para continuar explorando.
            </p>

            <article style={styles.homeV2AtelierFeatured}>
              <img
                src="/images/bau-tesouros-open.webp"
                alt="Baú de Tesouros"
                style={styles.homeV2AtelierFeaturedImage}
              />
              <div style={styles.homeV2AtelierFeaturedBody}>
                <h3 style={styles.homeV2AtelierFeaturedTitle}>Baú de Tesouros</h3>
                <p style={styles.homeV2AtelierFeaturedText}>
                  O primeiro grande tesouro do Mundo da Teca.
                </p>
                <FicharioEtiqueta
                  action
                  onClick={() => setScreen(appRoutes.bauDeTesouros)}
                  className={homeCtaClassName("atelie")}
                  style={{
                    ...styles.homeV2AtelierFeaturedButton,
                    ...homeCtaStyle("atelie"),
                  }}
                >
                  Conhecer o Baú
                </FicharioEtiqueta>
              </div>
            </article>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria chapter="clube" style={styles.homeV2ClubeEnd}>
          <ParticipationSection
            variant="home-path"
            onGoToClube={onGoToClube}
          />
        </FicharioDivisoria>
      </div>
    </WorldPortalLayout>
  )
}
