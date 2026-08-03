import { useEffect, useState, type ReactNode } from "react"
import "./fonts.css"
import "./styles/tecaTypography.css"
import "./styles/organicCta.css"
import "./styles/mobile.css"
import {
  isPlayUniverseScreen,
  playUniverses,
} from "./playData"
import { getAtelierGoodById, type AtelierGood } from "./atelierShopData"
import {
  getAtelierProductId,
  isAtelierProductScreen,
  toAtelierProductScreen,
  type AtelierProductScreen,
} from "./atelierNavigation"
import { AtelierShopPage } from "./atelierPages"
import { FigurinhasPage } from "./figurinhasPage"
import {
  WorldPortalLayout,
  portalPages,
} from "./worldPortal"
import {
  tecaColors,
  tecaFont,
  tecaObjects,
  tecaRadius,
  tecaRadiusAt,
  tecaTilt,
  tecaType,
} from "./tecaVisual"
import { styles } from "./styles/appStyles"
import {
  atelierPoeticPages,
  type AtelierPoeticScreen,
} from "./atelierSubPages"
import {
  initialDiaryEntries,
  isCollectionDetailScreen,
  type CollectionDetailScreen,
  type DiaryEntry,
} from "./discoveryData"
import {
  CollectionDetailPage,
  CollectionsPage,
  DiaryNewEntryPage,
  DiaryPage,
} from "./discoveryPages"
import { pageData } from "./data/pageData"
import { UniversosPage } from "./pages/UniversosPage"
import { PlayUniversePage } from "./pages/PlayUniversePage"
import { FeatureCard } from "./components/FeatureCard"
import { SoftNote } from "./components/SoftNote"
import { BottomNav } from "./components/BottomNav"
import { InstitutionalFooter } from "./components/InstitutionalFooter"
import { Home } from "./pages/Home"
import { ClubPage } from "./pages/ClubPage"
import { ClubModalityPage } from "./pages/ClubModalityPage"
import { KitPage } from "./pages/KitPage"
import { CaixaLaboratorioPage } from "./pages/CaixaLaboratorio/CaixaLaboratorioPage"
import { PedidoConfirmadoPage } from "./pages/CaixaLaboratorio/PedidoConfirmadoPage"
import { PreLaunchPage } from "./pages/PreLaunchPage"
import { CONHECA_SHARE_PATH } from "./data/conhecaPageCopy"
import { clubPageCopy } from "./data/clubPageCopy"
import { applyKitPageMeta } from "./data/kitPageCopy"
import { applyCaixaLaboratorioMeta } from "./pages/CaixaLaboratorio/caixaLaboratorioData"
import {
  CLUB_MARKETING_ENABLED,
  SHOW_BAU_AND_FICHARIO_PRODUCTS,
} from "./config/productStrategy"
import { appRoutes } from "./navigation/appRoutes"
import {
  clubModalityIdFromScreen,
  isClubModalityScreen,
  pathForClubScreen,
  screenFromClubPath,
} from "./navigation/clubNavigation"
import {
  hrefForCaixaLaboratorioScreen,
  pathForCaixaLaboratorioScreen,
  screenFromCaixaLaboratorioPath,
} from "./navigation/caixaLaboratorioNavigation"
import {
  pathForPedidoConfirmadoScreen,
  screenFromPedidoConfirmadoPath,
} from "./navigation/pedidoConfirmadoNavigation"
import {
  pathForPreLaunchScreen,
  screenFromPreLaunchPath,
} from "./navigation/preLaunchNavigation"
import {
  pathForKitScreen,
  screenFromKitPath,
} from "./navigation/kitNavigation"
import { MeuMundoPage } from "./pages/MeuMundoPage"
import { BibliotecaPage } from "./pages/BibliotecaPage"
import { AtelierProductPage } from "./pages/AtelierProductPage"
import { BauTreasurePage } from "./pages/BauTreasurePage"
import { MinhaCaixaPage } from "./pages/MinhaCaixaPage"
import { AuthProvider, useAuth } from "./auth/authContext"
import { isClubExclusiveScreen } from "./auth/clubExclusiveScreens"
import { TopAccessLink } from "./components/TopAccessLink"
import { LoginModal } from "./components/LoginModal"
import { AccountModal } from "./components/AccountModal"
import { ClubGateScreen } from "./components/ClubGateScreen"
import { MetaPixelTracker } from "./analytics/MetaPixelTracker"
import { LaunchPage } from "./pages/LaunchPage"
import { HOME_PREVIEW_PATH, LAUNCH_MODE } from "./config/launchGate"
import {
  applyLaunchPageMeta,
  clearLaunchPageMeta,
} from "./data/launchPageCopy"
import "./styles/editorialResponsive.css"

type Screen =
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "diario"
  | "diario-guardar"
  | "colecoes"
  | CollectionDetailScreen
  | "tesouros"
  | "universos"
  | "biblioteca"
  | "faz-de-conta"
  | "quintal"
  | "observatorio"
  | "oficina"
  | "laboratorio"
  | "cozinha"
  | "atelie"
  | "figurinhas"
  | "papel-de-carta"
  | AtelierPoeticScreen
  | "bonequinhas"
  | "origami"
  | "imprimiveis"
  | "cartoes"
  | "adesivos"
  | "carimbos"
  | "bau"
  | "minha-caixa"
  | AtelierProductScreen
  | "meu-mundo"
  | "clube"
  | "clube-explorador-digital"
  | "clube-mundo-descobertas"
  | "clube-mundo-tesouros"
  | "clube-expedicao-completa"
  | "kit"
  | "caixa-laboratorio"
  | "pre-lancamento"
  | "pedido-confirmado"
  | "launch"

type SimpleSubScreen = Exclude<
  Screen,
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "universos"
  | "biblioteca"
  | "faz-de-conta"
  | "quintal"
  | "observatorio"
  | "oficina"
  | "laboratorio"
  | "cozinha"
  | "atelie"
  | "figurinhas"
  | "minha-caixa"
  | "meu-mundo"
  | "clube"
  | "clube-explorador-digital"
  | "clube-mundo-descobertas"
  | "clube-mundo-tesouros"
  | "clube-expedicao-completa"
  | "kit"
  | "caixa-laboratorio"
  | "pre-lancamento"
  | "pedido-confirmado"
  | "launch"
>

type SubPageContent = {
  parent: "descobertas" | "universos" | "atelie" | "figurinhas" | "clube"
  title: string
  poetic: string
  image: string
  noteLabel: string
  noteText: string
}

type CardItem = {
  id: string
  title: string
  text?: string
  image: string
  target?: Screen
}

const theme = {
  text: "#6a4f3c",
  muted: "#8b7668",
  line: "#ead8c5",
  accent: "#c88757",
}

const discoveryCards: CardItem[] = [
  {
    id: "descoberta-do-dia",
    title: "Descoberta do dia",
    text: "uma ficha para observar o mundo real com calma",
    image: "/cards/descobertas/descoberta-do-dia.png",
    target: "descoberta-do-dia",
  },
  {
    id: "diario",
    title: "Diário",
    text: "fichas de memória já guardadas",
    image: "/cards/descobertas/diario.png",
    target: "diario",
  },
  {
    id: "colecoes",
    title: "Coleções",
    text: "fichas reunidas por universo",
    image: "/cards/descobertas/colecoes.png",
    target: "colecoes",
  },
  {
    id: "tesouros",
    title: "Tesouros",
    text: "fichas especiais que aparecem de vez em quando",
    image: "/cards/descobertas/tesouros.png",
    target: "tesouros",
  },
]

const subPageData: Record<SimpleSubScreen, SubPageContent> = {
  tesouros: {
    parent: "descobertas",
    title: "tesouros que aparecem de repente",
    poetic: "alguns achados chegam sem aviso, como presentes do caminho.",
    image: "/cards/descobertas/tesouros.png",
    noteLabel: "janela da teca",
    noteText: "guarde o que tocou o coração, mesmo que pareça pequeno.",
  },
  "papel-de-carta": {
    parent: "atelie",
    title: "papel de carta",
    poetic: "folhas delicadas esperam palavras que não precisam ser perfeitas.",
    image: "/cards/atelie/papel-de-carta.png",
    noteLabel: "ateliê",
    noteText: "escreva devagar, como quem conversa com alguém querido.",
  },
  ...atelierPoeticPages,
  bonequinhas: {
    parent: "atelie",
    title: "bonequinhas da teca",
    poetic: "personagens de papel também precisam de silêncio para existir.",
    image: "/cards/atelie/bonequinhas.png",
    noteLabel: "ateliê",
    noteText: "recorte, vista e invente histórias sem pressa de terminar.",
  },
  origami: {
    parent: "atelie",
    title: "origami",
    poetic: "uma dobra de cada vez, até o papel ganhar asas.",
    image: "/cards/atelie/origami.png",
    noteLabel: "ateliê",
    noteText: "dobras simples bastam. a beleza está no gesto repetido.",
  },
  imprimiveis: {
    parent: "atelie",
    title: "imprimíveis",
    poetic: "materiais para imprimir e continuar a daTeca em casa.",
    image: "/cards/atelie/imprimiveis.png",
    noteLabel: "ateliê",
    noteText: "imprima com calma e deixe a criança escolher por onde começar.",
  },
  cartoes: {
    parent: "atelie",
    title: "cartões",
    poetic: "mensagens pequenas atravessam distâncias sem fazer barulho.",
    image: "/cards/atelie/cartoes.png",
    noteLabel: "ateliê",
    noteText: "um cartão feito à mão vale mais que muitas palavras prontas.",
  },
  adesivos: {
    parent: "atelie",
    title: "adesivos",
    poetic: "detalhes coloridos para marcar páginas e sorrisos.",
    image: "/cards/atelie/adesivos.png",
    noteLabel: "ateliê",
    noteText: "cole onde fizer sentido, não onde parecer perfeito.",
  },
  carimbos: {
    parent: "atelie",
    title: "carimbos",
    poetic: "marcas repetidas deixam rastro de quem esteve ali.",
    image: "/cards/atelie/carimbos.png",
    noteLabel: "ateliê",
    noteText: "selos e símbolos contam histórias sem precisar de frases longas.",
  },
  bau: {
    parent: "atelie",
    title: "baú da teca",
    poetic: "um baú para abrir com calma — feito para pequenos tesouros especiais.",
    image: "/images/bau-tesouros-open.webp",
    noteLabel: "ateliê",
    noteText: "abrir o baú pode ser ritual: lento, cuidadoso, cheio de expectativa.",
  },
}

const parentLabels: Record<
  SubPageContent["parent"],
  string
> = {
  descobertas: "descobertas",
  universos: "universos",
  atelie: "ateliê",
  figurinhas: "figurinhas",
  clube: "clube",
}

function isSimpleSubScreen(screen: Screen): screen is SimpleSubScreen {
  return screen in subPageData
}

function isDiscoveryFlowScreen(screen: Screen): boolean {
  return (
    screen === "diario" ||
    screen === "diario-guardar" ||
    screen === "colecoes" ||
    isCollectionDetailScreen(screen)
  )
}

function readInitialScreen(): Screen {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  if (path === CONHECA_SHARE_PATH || path.endsWith("/conheca")) {
    return appRoutes.home
  }
  if (path === HOME_PREVIEW_PATH || path.endsWith("/home-preview")) {
    return appRoutes.home
  }
  if (LAUNCH_MODE && path === "/") {
    return appRoutes.launch
  }

  const clubScreen = screenFromClubPath(path)
  if (clubScreen) {
    return clubScreen as Screen
  }

  const kitScreen = screenFromKitPath(path)
  if (kitScreen) {
    return kitScreen as Screen
  }

  const caixaLaboratorioScreen = screenFromCaixaLaboratorioPath(path)
  if (caixaLaboratorioScreen) {
    return caixaLaboratorioScreen as Screen
  }

  const pedidoConfirmadoScreen = screenFromPedidoConfirmadoPath(path)
  if (pedidoConfirmadoScreen) {
    return pedidoConfirmadoScreen as Screen
  }

  const preLaunchScreen = screenFromPreLaunchPath(path)
  if (preLaunchScreen) {
    return preLaunchScreen as Screen
  }

  return appRoutes.home
}

function resolveNavActive(screen: Screen): string {
  if (
    screen === "figurinhas" ||
    screen === "minha-caixa" ||
    isAtelierProductScreen(screen)
  ) {
    return "atelie"
  }

  if (isSimpleSubScreen(screen)) {
    const parent = subPageData[screen].parent
    if (parent === "atelie" || parent === "figurinhas") return "atelie"
    if (parent === "descobertas") return "meu-mundo"
    if (parent === "universos") return "universos"
    if (parent === "clube") return appRoutes.home
  }

  if (isPlayUniverseScreen(screen)) return "universos"

  if (screen === "biblioteca") return "meu-mundo"

  if (isDiscoveryFlowScreen(screen)) return "meu-mundo"

  if (screen === appRoutes.clube || isClubModalityScreen(screen)) {
    return appRoutes.home
  }

  if (
    screen === "descobertas" ||
    screen === "descoberta-do-dia" ||
    screen === "tesouros"
  ) {
    return "meu-mundo"
  }

  return screen
}

function ClubGated({
  screen,
  setScreen,
  children,
}: {
  screen: Screen
  setScreen: (screen: Screen) => void
  children: ReactNode
}) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated && isClubExclusiveScreen(screen)) {
    return <ClubGateScreen setScreen={setScreen} />
  }

  return <>{children}</>
}

function AppContent() {
  const [screen, setScreen] = useState<Screen>(readInitialScreen)
  const [box, setBox] = useState<AtelierGood[]>([])
  const [diaryEntries, setDiaryEntries] =
    useState<DiaryEntry[]>(initialDiaryEntries)

  const addToBox = (good: AtelierGood) => {
    setBox((current) => {
      if (current.some((item) => item.id === good.id)) return current
      return [...current, good]
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [screen])

  useEffect(() => {
    if (
      !CLUB_MARKETING_ENABLED &&
      (screen === appRoutes.clube || isClubModalityScreen(screen))
    ) {
      setScreen(appRoutes.home)
    }
  }, [screen])

  useEffect(() => {
    if (
      !SHOW_BAU_AND_FICHARIO_PRODUCTS &&
      isAtelierProductScreen(screen) &&
      getAtelierProductId(screen) === "bau"
    ) {
      setScreen(appRoutes.atelie)
    }
  }, [screen])

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/"

    if (LAUNCH_MODE) {
      if (screen === appRoutes.launch) {
        if (path !== "/") {
          window.history.pushState({ screen: appRoutes.launch }, "", "/")
        }
        applyLaunchPageMeta()
        return
      }

      if (screen === appRoutes.home) {
        if (path !== HOME_PREVIEW_PATH) {
          window.history.pushState({ screen: appRoutes.home }, "", HOME_PREVIEW_PATH)
        }
        clearLaunchPageMeta()
        document.title = "daTeca"
        return
      }

      const launchClubPath = pathForClubScreen(screen)
      if (launchClubPath) {
        if (path !== launchClubPath) {
          window.history.pushState({ screen }, "", launchClubPath)
        }
        document.title =
          screen === appRoutes.clube
            ? clubPageCopy.documentTitle
            : "daTeca"
        clearLaunchPageMeta()
        return
      }

      const launchKitPath = pathForKitScreen(screen)
      if (launchKitPath) {
        if (path !== launchKitPath) {
          window.history.pushState({ screen }, "", launchKitPath)
        }
        clearLaunchPageMeta()
        applyKitPageMeta()
        return
      }

      const launchCaixaHref = hrefForCaixaLaboratorioScreen(screen)
      if (launchCaixaHref) {
        const launchCaixaPath = pathForCaixaLaboratorioScreen(screen)!
        if (path !== launchCaixaPath) {
          window.history.pushState({ screen }, "", launchCaixaHref)
        }
        clearLaunchPageMeta()
        applyCaixaLaboratorioMeta()
        return
      }

      const launchPedidoPath = pathForPedidoConfirmadoScreen(screen)
      if (launchPedidoPath) {
        if (path !== launchPedidoPath) {
          window.history.pushState({ screen }, "", launchPedidoPath)
        }
        clearLaunchPageMeta()
        document.title = "Pedido recebido — daTeca"
        return
      }

      if (path === CONHECA_SHARE_PATH || path === HOME_PREVIEW_PATH) {
        window.history.pushState({ screen }, "", "/")
      }

      clearLaunchPageMeta()
      document.title = "daTeca"
      return
    }

    if (path === CONHECA_SHARE_PATH) {
      window.history.pushState({ screen }, "", "/")
    }

    if (path === HOME_PREVIEW_PATH || path.endsWith("/home-preview")) {
      window.history.replaceState({ screen: appRoutes.home }, "", "/")
    }

    const clubPath = pathForClubScreen(screen)
    if (clubPath) {
      if (path !== clubPath) {
        window.history.pushState({ screen }, "", clubPath)
      }
      document.title =
        screen === appRoutes.clube
          ? clubPageCopy.documentTitle
          : "daTeca"
      clearLaunchPageMeta()
      return
    }

    const kitPath = pathForKitScreen(screen)
    if (kitPath) {
      if (path !== kitPath) {
        window.history.pushState({ screen }, "", kitPath)
      }
      clearLaunchPageMeta()
      applyKitPageMeta()
      return
    }

    const caixaHref = hrefForCaixaLaboratorioScreen(screen)
    if (caixaHref) {
      const caixaPath = pathForCaixaLaboratorioScreen(screen)!
      if (path !== caixaPath) {
        window.history.pushState({ screen }, "", caixaHref)
      }
      clearLaunchPageMeta()
      applyCaixaLaboratorioMeta()
      return
    }

    const pedidoPath = pathForPedidoConfirmadoScreen(screen)
    if (pedidoPath) {
      if (path !== pedidoPath) {
        window.history.pushState({ screen }, "", pedidoPath)
      }
      clearLaunchPageMeta()
      document.title = "Pedido recebido — daTeca"
      return
    }

    const preLaunchPath = pathForPreLaunchScreen(screen)
    if (preLaunchPath) {
      if (path !== preLaunchPath) {
        window.history.pushState({ screen }, "", preLaunchPath)
      }
      clearLaunchPageMeta()
      document.title = "Pré-lançamento — daTeca"
      return
    }

    clearLaunchPageMeta()
    document.title = "daTeca"
  }, [screen])

  useEffect(() => {
    const onPopState = () => {
      setScreen(readInitialScreen())
    }

    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const isLaunchScreen = LAUNCH_MODE && screen === appRoutes.launch
  const isCaixaLaboratorioLanding = screen === appRoutes.caixaLaboratorio
  const isPedidoConfirmado = screen === appRoutes.pedidoConfirmado
  const isPreLaunch = screen === appRoutes.preLancamento
  const hideChrome =
    isLaunchScreen ||
    isCaixaLaboratorioLanding ||
    isPedidoConfirmado ||
    isPreLaunch

  return (
    <main
      className="app-main"
      style={{
        ...styles.main,
        ...(isLaunchScreen ? { padding: 0, overflow: "hidden" } : null),
        ...(isCaixaLaboratorioLanding ||
        isPedidoConfirmado ||
        isPreLaunch
          ? { padding: 0 }
          : null),
      }}
    >
      <section
        className="app-shell"
        style={{
          ...styles.appShell,
          ...(isLaunchScreen
            ? {
                paddingBottom: 0,
                overflow: "hidden",
                minHeight: "100vh",
                maxHeight: "100vh",
              }
            : null),
          ...(isCaixaLaboratorioLanding ||
          isPedidoConfirmado ||
          isPreLaunch
            ? {
                paddingBottom: 0,
                maxWidth: "100%",
                borderRadius: 0,
              }
            : null),
        }}
      >
        {!hideChrome ? <TopAccessLink /> : null}
        <MetaPixelTracker screen={screen} />
        <LoginModal setScreen={setScreen} />
        <AccountModal />

        {screen === appRoutes.launch && <LaunchPage setScreen={setScreen} />}

        {screen === "home" && (
          <Home setScreen={setScreen} />
        )}

        {screen === "descobertas" && (
          <Page
            portalKey="descobertas"
            cards={discoveryCards}
            sectionTitle="Fichas do caminho"
            setScreen={setScreen}
          />
        )}

{screen === "descoberta-do-dia" && (
          <DiscoveryDay setScreen={setScreen} />
        )}

        {isPlayUniverseScreen(screen) && playUniverses[screen] && (
          <PlayUniversePage
            setScreen={setScreen}
            universe={playUniverses[screen]}
          />
        )}

        {isDiscoveryFlowScreen(screen) && (
          <ClubGated screen={screen} setScreen={setScreen}>
            {screen === "diario" && (
              <DiaryPage setScreen={setScreen} entries={diaryEntries} />
            )}
            {screen === "diario-guardar" && (
              <DiaryNewEntryPage
                setScreen={setScreen}
                onSave={(entry) =>
                  setDiaryEntries((current) => [entry, ...current])
                }
              />
            )}
            {screen === "colecoes" && <CollectionsPage setScreen={setScreen} />}
            {isCollectionDetailScreen(screen) && (
              <CollectionDetailPage setScreen={setScreen} screen={screen} />
            )}
          </ClubGated>
        )}

        {isSimpleSubScreen(screen) && (
          <SimpleSubPage
            setScreen={setScreen}
            content={subPageData[screen]}
            backLabel={parentLabels[subPageData[screen].parent]}
          />
        )}

        {screen === "minha-caixa" && (
          <MinhaCaixaPage setScreen={setScreen} box={box} />
        )}

        {screen === "universos" && (
          <UniversosPage setScreen={setScreen} />
        )}

        {screen === "atelie" && <AtelierShopPage />}

        {isAtelierProductScreen(screen) && (() => {
          const good = getAtelierGoodById(getAtelierProductId(screen))
          if (!good) {
            return (
              <section style={styles.subPage}>
                <button
                  type="button"
                  onClick={() => setScreen("atelie")}
                  style={styles.backButton}
                >
                  ← ateliê
                </button>
                <SoftNote label="sumiu do caminho">
                  este tesouro não foi encontrado. volte ao ateliê.
                </SoftNote>
              </section>
            )
          }
          return good.id === "bau" ? (
            <BauTreasurePage
              setScreen={setScreen}
              inBox={box.some((item) => item.id === good.id)}
              onAddToBox={() => addToBox(good)}
            />
          ) : (
            <AtelierProductPage
              setScreen={setScreen}
              good={good}
              inBox={box.some((item) => item.id === good.id)}
              onAddToBox={() => addToBox(good)}
            />
          )
        })()}

        {screen === "figurinhas" && (
          <FigurinhasPage
            setScreen={setScreen}
            box={box}
            onAddToBox={addToBox}
            onOpenProduct={(good) =>
              setScreen(toAtelierProductScreen(good.id))
            }
          />
        )}

        {CLUB_MARKETING_ENABLED && screen === "clube" && (
          <ClubPage setScreen={setScreen} />
        )}

        {CLUB_MARKETING_ENABLED && isClubModalityScreen(screen) && (
          <ClubModalityPage
            modalityId={clubModalityIdFromScreen(screen)}
            setScreen={setScreen}
          />
        )}

        {screen === appRoutes.kit && <KitPage />}

        {screen === appRoutes.caixaLaboratorio && <CaixaLaboratorioPage />}

        {screen === appRoutes.preLancamento && (
          <PreLaunchPage setScreen={setScreen} />
        )}

        {screen === appRoutes.pedidoConfirmado && (
          <PedidoConfirmadoPage setScreen={setScreen} />
        )}

        {screen === "meu-mundo" && <MeuMundoPage setScreen={setScreen} />}

        {screen === "biblioteca" && (
          <ClubGated screen={screen} setScreen={setScreen}>
            <BibliotecaPage setScreen={setScreen} />
          </ClubGated>
        )}

        {!isLaunchScreen &&
        !isCaixaLaboratorioLanding &&
        !isPedidoConfirmado &&
        !isPreLaunch ? (
          <InstitutionalFooter />
        ) : null}

        {!hideChrome ? (
          <BottomNav active={resolveNavActive(screen)} setScreen={setScreen} />
        ) : null}
      </section>
    </main>
  )
}

function Page({
  portalKey,
  cards,
  sectionTitle,
  horizontalCards = false,
  setScreen,
}: {
  portalKey: keyof typeof portalPages
  cards: CardItem[]
  sectionTitle?: string
  horizontalCards?: boolean
  setScreen: (screen: Screen) => void
}) {
  const portal = portalPages[portalKey]

  return (
    <WorldPortalLayout {...portal} compactTitle>
      {sectionTitle && <h2 style={styles.sectionHeading}>{sectionTitle}</h2>}
      <div style={horizontalCards ? styles.worldsStack : styles.gridTwo}>
        {cards.map((card, index) => (
          <FeatureCard
            key={card.id}
            card={card}
            compact
            horizontal={horizontalCards}
            tilt={index % 2 === 0 ? 0.2 : -0.2}
            radiusKey={index % 4}
            onClick={() => card.target && setScreen(card.target)}
          />
        ))}
      </div>
    </WorldPortalLayout>
  )
}

function SimpleSubPage({
  setScreen,
  content,
  backLabel,
}: {
  setScreen: (screen: Screen) => void
  content: SubPageContent
  backLabel: string
}) {
  return (
    <section style={styles.subPage}>
      <button
        onClick={() => setScreen(content.parent as Screen)}
        style={styles.backButton}
      >
        ← {backLabel}
      </button>

      <img
        src={content.image}
        alt={content.title}
        style={styles.subPageImage}
      />

      <div style={styles.pageHeroBlock}>
        <h1 style={styles.pageHeroTitle}>{content.title}</h1>
        <p style={{ ...styles.pageHeroPoetic, textAlign: "left", marginLeft: 0, marginRight: 0 }}>
          {content.poetic}
        </p>
      </div>

      <SoftNote label={content.noteLabel}>{content.noteText}</SoftNote>
    </section>
  )
}

function DiscoveryDay({
  setScreen,
}: {
  setScreen: (screen: Screen) => void
}) {
  const [found, setFound] = useState(false)

  return (
    <section style={styles.subPage}>
      <button
        onClick={() => setScreen("meu-mundo")}
        style={styles.backButton}
      >
        ← meu mundo
      </button>

      <img
        src="/cards/descobertas/descoberta-do-dia.png"
        alt="Descoberta do dia"
        style={styles.subPageImage}
      />

      <div style={styles.pageIntroBlock}>
        <h1 style={styles.pageTitle}>
          hoje encontre algo que o vento mexe
        </h1>

        <p style={styles.pageIntro}>
          observe devagar. talvez esteja perto das árvores.
        </p>
      </div>

      <div style={styles.tipBox}>
        <span style={styles.tipDot} />
        <span>escute o movimento</span>
      </div>

      <div style={styles.tipBox}>
        <span style={styles.tipDot} />
        <span>talvez esteja escondido</span>
      </div>

      <div style={styles.tipBox}>
        <span style={styles.tipDot} />
        <span>procure algo leve</span>
      </div>

      {!found ? (
        <button
          style={styles.discoveryButton}
          onClick={() => setFound(true)}
        >
          quero guardar isso
        </button>
      ) : (
        <div style={styles.rewardBox}>
          <p style={styles.rewardTitle}>mais uma descoberta guardada</p>
          <p style={styles.rewardItem}>folha dançando</p>
          <p style={styles.rewardNote}>guardado no seu álbum</p>
        </div>
      )}
    </section>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
