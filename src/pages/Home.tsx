import { HomeExploreMap } from "../components/HomeExploreMap"
import { EditorialDecor } from "../components/EditorialDecor"
import { FicharioDivisoria, FicharioEtiqueta } from "../components/fichario"
import { ParticipationSection } from "../components/ParticipationSection"
import { WorldAtlasFooter } from "../components/WorldAtlasFooter"
import type { ParticipationPlanId } from "../data/participationPlans"
import { appRoutes, resolveUniverseRoute } from "../navigation/appRoutes"
import { editorialDecorMapCorners } from "../data/editorialDecorPresets"
import { styles } from "../styles/appStyles"
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

        <FicharioDivisoria abaIcon="🗺️" abaLabel="exploração">
          <div style={styles.homeExploreSectionPaper}>
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
                <HomeExploreMap
                  onSelect={(target) => setScreen(resolveUniverseRoute(target))}
                />
              </div>
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="📖" abaLabel="meu mundo">
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
              <h2 style={styles.homePlaceTitle}>Meu Mundo</h2>
              <p style={styles.homeSectionSubtitle}>
                O lugar onde suas descobertas ganham uma casa.
              </p>
              <FicharioEtiqueta
                action
                onClick={() => setScreen(appRoutes.minhaColecao)}
                style={styles.homeV2SoftButton}
              >
                Abrir Minha Coleção
              </FicharioEtiqueta>
            </div>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="✦" abaLabel="ateliê">
          <div style={styles.homeV2AtelierShop}>
            <p style={styles.homeV2AtelierKicker}>CURADORIA</p>
            <h2 style={styles.homePlaceTitle}>Ateliê</h2>
            <p style={styles.homeSectionSubtitle}>
              Tesouros criados para continuar explorando.
            </p>

            <article style={styles.homeV2AtelierFeatured}>
              <div style={styles.homeV2AtelierFeaturedPedestal} aria-hidden="true">
                <img
                  src="/cards/atelie/bau.png"
                  alt=""
                  style={styles.homeV2AtelierFeaturedImage}
                />
              </div>
              <div style={styles.homeV2AtelierFeaturedBody}>
                <h3 style={styles.homeV2AtelierFeaturedTitle}>Baú de Tesouros</h3>
                <p style={styles.homeV2AtelierFeaturedText}>
                  O primeiro grande tesouro do Mundo da Teca.
                </p>
                <FicharioEtiqueta
                  action
                  onClick={() => setScreen(appRoutes.bauDeTesouros)}
                  style={styles.homeV2AtelierFeaturedButton}
                >
                  Conhecer o Baú
                </FicharioEtiqueta>
              </div>
            </article>
          </div>
        </FicharioDivisoria>

        <FicharioDivisoria abaIcon="📬" abaLabel="clube">
          <ParticipationSection
            variant="home-path"
            onGoToClube={onGoToClube}
          />
        </FicharioDivisoria>
      </div>

      <WorldAtlasFooter />
    </WorldPortalLayout>
  )
}
