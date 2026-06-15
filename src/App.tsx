import { useState } from "react"
import "./fonts.css"
import {
  isPlayUniverseScreen,
  playUniverses,
  type PlayExperience,
  type PlayUniverse,
} from "./playData"
import { formatBRL, type AtelierGood } from "./atelierShopData"
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
import { brincadeirasCards } from "./data/brincadeirasCards"
import { FeatureCard } from "./components/FeatureCard"
import { SoftNote } from "./components/SoftNote"
import { BottomNav } from "./components/BottomNav"
import { PlayExperienceCard } from "./components/PlayExperienceCard"
import { PlayExperienceDetailPanel } from "./components/PlayExperienceDetailPanel"
import { Home } from "./pages/Home"
import { ClubPage } from "./pages/ClubPage"
import { MinhaColecaoPage } from "./pages/MinhaColecaoPage"

type Screen =
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "diario"
  | "diario-guardar"
  | "colecoes"
  | CollectionDetailScreen
  | "tesouros"
  | "brincadeiras"
  | "natureza"
  | "arte"
  | "movimento"
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
  | "minha-colecao"
  | "clube"

type SimpleSubScreen = Exclude<
  Screen,
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "brincadeiras"
  | "natureza"
  | "arte"
  | "movimento"
  | "oficina"
  | "laboratorio"
  | "cozinha"
  | "atelie"
  | "figurinhas"
  | "minha-caixa"
  | "minha-colecao"
  | "clube"
>

type SubPageContent = {
  parent: "descobertas" | "brincadeiras" | "atelie" | "figurinhas" | "clube"
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
    text: "um convite para observar o mundo real com calma",
    image: "/cards/descobertas/descoberta-do-dia.png",
    target: "descoberta-do-dia",
  },
  {
    id: "diario",
    title: "Diário",
    text: "pequenas coisas que já foram guardadas",
    image: "/cards/descobertas/diario.png",
    target: "diario",
  },
  {
    id: "colecoes",
    title: "Coleções",
    text: "folhas, flores, pedras, sementes...",
    image: "/cards/descobertas/colecoes.png",
    target: "colecoes",
  },
  {
    id: "tesouros",
    title: "Tesouros",
    text: "achados especiais que aparecem de vez em quando",
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
    poetic: "materiais para imprimir e continuar o mundo da teca em casa.",
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
    poetic: "um lugar quieto para guardar o que não cabe em gavetas comuns.",
    image: "/cards/atelie/bau.png",
    noteLabel: "ateliê",
    noteText: "abrir o baú pode ser ritual: lento, cuidadoso, cheio de expectativa.",
  },
}

const parentLabels: Record<
  SubPageContent["parent"],
  string
> = {
  descobertas: "descobertas",
  brincadeiras: "brincadeiras",
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

function resolveNavActive(screen: Screen): string {
  if (screen === "figurinhas" || screen === "minha-caixa") return "atelie"

  if (isSimpleSubScreen(screen)) {
    const parent = subPageData[screen].parent
    if (parent === "atelie" || parent === "figurinhas") return "atelie"
    if (parent === "descobertas") return "minha-colecao"
    if (parent === "brincadeiras") return "brincadeiras"
    if (parent === "clube") return "clube"
  }

  if (isPlayUniverseScreen(screen)) return "brincadeiras"

  if (isDiscoveryFlowScreen(screen)) return "minha-colecao"

  if (
    screen === "descobertas" ||
    screen === "descoberta-do-dia" ||
    screen === "tesouros"
  ) {
    return "minha-colecao"
  }

  return screen
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")
  const [box, setBox] = useState<AtelierGood[]>([])
  const [diaryEntries, setDiaryEntries] =
    useState<DiaryEntry[]>(initialDiaryEntries)

  const addToBox = (good: AtelierGood) => {
    setBox((current) => {
      if (current.some((item) => item.id === good.id)) return current
      return [...current, good]
    })
  }

  return (
    <main style={styles.main}>
      <section style={styles.appShell}>
        {screen === "home" && <Home setScreen={setScreen} />}

        {screen === "descobertas" && (
          <Page
            portalKey="descobertas"
            cards={discoveryCards}
            setScreen={setScreen}
          />
        )}

{screen === "descoberta-do-dia" && (
          <DiscoveryDay setScreen={setScreen} />
        )}

        {isPlayUniverseScreen(screen) && (
          <PlayUniversePage
            setScreen={setScreen}
            universe={playUniverses[screen]}
          />
        )}

        {isDiscoveryFlowScreen(screen) && (
          <>
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
          </>
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

        {screen === "brincadeiras" && (
          <Page
            portalKey="brincadeiras"
            cards={brincadeirasCards}
            sectionTitle="Mundos de Brincar"
            horizontalCards
            setScreen={setScreen}
          />
        )}

        {screen === "atelie" && (
          <AtelierShopPage
            setScreen={setScreen}
            box={box}
            onAddToBox={addToBox}
          />
        )}

        {screen === "figurinhas" && (
          <FigurinhasPage
            setScreen={setScreen}
            box={box}
            onAddToBox={addToBox}
          />
        )}

        {screen === "clube" && <ClubPage />}

        {screen === "minha-colecao" && (
          <MinhaColecaoPage setScreen={setScreen} />
        )}

        <BottomNav active={resolveNavActive(screen)} setScreen={setScreen} />
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

function MinhaCaixaPage({
  setScreen,
  box,
}: {
  setScreen: (screen: Screen) => void
  box: AtelierGood[]
}) {
  return (
    <section style={styles.subPage}>
      <button
        onClick={() => setScreen("atelie")}
        style={styles.backButton}
      >
        ← ateliê
      </button>

      <div style={styles.minhaCaixaHero}>
        <span style={styles.minhaCaixaBadge}>caixa</span>
        <h1 style={styles.pageTitle}>minha caixa</h1>
        <p style={{ ...styles.pageIntro, textAlign: "left" }}>
          um canto quieto para o que você escolheu levar pra casa.
        </p>
      </div>

      {box.length === 0 ? (
        <SoftNote label="vazia por enquanto">
          nenhum tesouro ainda. volte ao ateliê e escolha com calma.
        </SoftNote>
      ) : (
        <>
          <div style={styles.paperStack}>
            {box.map((good) => (
              <article key={good.id} style={styles.boxItem}>
                <p style={styles.boxItemTitle}>{good.title}</p>
                <p style={styles.boxItemPoetic}>{good.poetic}</p>
                <p style={styles.boxItemPrice}>
                  {formatBRL(good.price)} · clube {formatBRL(good.clubPrice)}
                </p>
              </article>
            ))}
          </div>

          <SoftNote label="em breve">
            o caminho até a sua casa ainda está sendo costurado com carinho.
            por enquanto, guarde aqui o que deseja levar.
          </SoftNote>
        </>
      )}

      <button
        type="button"
        onClick={() => setScreen("atelie")}
        style={styles.paperBackToShopButton}
      >
        continuar escolhendo
      </button>
    </section>
  )
}

function PlayUniversePage({
  setScreen,
  universe,
}: {
  setScreen: (screen: Screen) => void
  universe: PlayUniverse
}) {
  const [openedId, setOpenedId] = useState<string | null>(null)
  const openedExperience = universe.experiences.find(
    (item) => item.id === openedId
  )

  return (
    <section style={styles.subPage}>
      <button
        onClick={() => setScreen("brincadeiras")}
        style={styles.backButton}
      >
        ← brincadeiras
      </button>

      <img
        src={universe.image}
        alt={universe.title}
        style={styles.subPageImage}
      />

      <div style={styles.pageIntroBlock}>
        <h1 style={styles.pageTitle}>{universe.title}</h1>
        <p style={styles.pageIntro}>{universe.poetic}</p>
      </div>

      <SoftNote label="convite">{universe.noteText}</SoftNote>

      <section style={styles.experienceCollection}>
        <h2 style={styles.experienceCollectionTitle}>fichas deste universo</h2>
        <p style={styles.experienceCollectionIntro}>
          quinze convites para escolher devagar. as três primeiras estão
          abertas; as demais aguardam no clube.
        </p>

        <div style={styles.experienceStack}>
          {universe.experiences.map((experience) => (
            <div key={experience.id} style={styles.experienceStackItem}>
              <PlayExperienceCard
                experience={experience}
                fallbackImage={universe.image}
                selected={openedId === experience.id}
                onSelect={() =>
                  setOpenedId((current) =>
                    current === experience.id ? null : experience.id
                  )
                }
              />

              {openedId === experience.id && openedExperience && (
                <PlayExperienceDetailPanel experience={openedExperience} />
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
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

      <div style={styles.pageIntroBlock}>
        <h1 style={styles.pageTitle}>{content.title}</h1>
        <p style={styles.pageIntro}>{content.poetic}</p>
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
        onClick={() => setScreen("descobertas")}
        style={styles.backButton}
      >
        ← descobertas
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
