import { useState, type CSSProperties } from "react"
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
  | "brincar-na-rua"
  | "dias-de-chuva"
  | "faz-de-conta"
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
  | "clube"

type SimpleSubScreen = Exclude<
  Screen,
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "brincadeiras"
  | "brincar-na-rua"
  | "dias-de-chuva"
  | "faz-de-conta"
  | "oficina"
  | "laboratorio"
  | "cozinha"
  | "atelie"
  | "figurinhas"
  | "minha-caixa"
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

const navItems = [
  { label: "Início", screen: "home" as Screen, icon: "/icons/estrela.png" },
  { label: "Descobertas", screen: "descobertas" as Screen, icon: "/icons/lupa.png" },
  { label: "Brincadeiras", screen: "brincadeiras" as Screen, icon: "/icons/pipa.png" },
  { label: "Ateliê", screen: "atelie" as Screen, icon: "/icons/bau.png" },
  { label: "Clube", screen: "clube" as Screen, icon: "/icons/carteirinha.png" },
]

const pageData = {
  descobertas: {
    title: "Descobertas",
    intro: "pequenas coisas que o mundo esconde para quem olha devagar.",
    cover: "/covers/descobertas.png",
  },
  brincadeiras: {
    title: "Brincadeiras",
    intro: "ideias para sair da tela e entrar no mundo real.",
    cover: "/covers/brincadeiras.png",
  },
  atelie: {
    title: "Ateliê",
    intro: "figurinhas, papéis, coleções e pequenos tesouros para guardar.",
    cover: "/covers/atelie.png",
  },
  clube: {
    title: "Clube da Teca",
    intro: "para famílias do Mundo da Teca.",
    cover: "/covers/clube.png",
  },
}

const homeCards: CardItem[] = [
  {
    id: "descobertas",
    title: "Descobertas",
    text: "olhar o mundo com calma",
    image: "/cards/home/descobertas.png",
    target: "descobertas",
  },
  {
    id: "brincadeiras",
    title: "Brincadeiras",
    text: "ideias para sair da tela",
    image: "/cards/home/brincadeiras.png",
    target: "brincadeiras",
  },
  {
    id: "atelie",
    title: "Ateliê",
    text: "figurinhas e tesouros",
    image: "/cards/home/atelie.png",
    target: "atelie",
  },
  {
    id: "clube",
    title: "Clube",
    text: "pertencer ao universo",
    image: "/cards/home/clube.png",
    target: "clube",
  },
]

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

const playCards: CardItem[] = [
  {
    id: "brincar-na-rua",
    title: "Brincar na Rua",
    text: "aventuras do lado de fora",
    image: "/cards/brincadeiras/brincar-na-rua.png",
    target: "brincar-na-rua",
  },
  {
    id: "dias-de-chuva",
    title: "Dias de Chuva",
    text: "brincadeiras para dentro de casa",
    image: "/cards/brincadeiras/dias-de-chuva.png",
    target: "dias-de-chuva",
  },
  {
    id: "faz-de-conta",
    title: "Faz de Conta",
    text: "mundos imaginários e histórias inventadas",
    image: "/cards/brincadeiras/faz-de-conta.png",
    target: "faz-de-conta",
  },
  {
    id: "oficina",
    title: "Oficina",
    text: "coisas feitas com as mãos",
    image: "/cards/brincadeiras/oficina.png",
    target: "oficina",
  },
  {
    id: "laboratorio",
    title: "Laboratório",
    text: "experiências suaves e curiosas",
    image: "/cards/brincadeiras/laboratorio.png",
    target: "laboratorio",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    text: "misturas e descobertas",
    image: "/cards/brincadeiras/cozinha.png",
    target: "cozinha",
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
            cards={playCards}
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

        <BottomNav
          active={screen === "figurinhas" ? "atelie" : screen}
          setScreen={setScreen}
        />
      </section>
    </main>
  )
}
function Home({
  setScreen,
}: {
  setScreen: (screen: Screen) => void
}) {
  const portal = portalPages.home

  return (
  <WorldPortalLayout {...portal} variant="home">
        <SoftNote label="janela da teca" highlight>
          encontre uma pequena coisa que parecia invisível antes.
        </SoftNote>

        <p style={styles.homeSectionLead}>por onde vamos começar?</p>

        <div style={styles.gridTwo}>
          {homeCards.map((card, index) => (
            <FeatureCard
              key={card.id}
              card={card}
              compact
              tilt={index % 2 === 0 ? 0.25 : -0.3}
              radiusKey={index % 4}
              onClick={() => card.target && setScreen(card.target)}
            />
          ))}
        </div>
  </WorldPortalLayout>
  )
}

function Page({
  portalKey,
  cards,
  setScreen,
}: {
  portalKey: keyof typeof portalPages
  cards: CardItem[]
  setScreen: (screen: Screen) => void
}) {
  const portal = portalPages[portalKey]

  return (
    <WorldPortalLayout {...portal} compactTitle>
      <div style={styles.gridTwo}>
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            card={card}
            onClick={() => card.target && setScreen(card.target)}
          />
        ))}
      </div>
    </WorldPortalLayout>
  )
}

function ClubPage() {
  const [childName, setChildName] = useState("teca")
  const [birthday, setBirthday] = useState("12 de abril")
  const [memberSince, setMemberSince] = useState("maio de 2026")
  const portal = portalPages.clube

  return (
    <WorldPortalLayout {...portal} compactTitle breath="large">
      <article style={{ ...styles.clubMemberCard, ...tecaTilt(-0.35) }}>
        <div style={styles.clubMemberCardTop}>
          <span style={styles.clubSealBadge}>teca</span>
          <p style={styles.clubMemberNumber}>carteirinha nº 024</p>
        </div>

        <h2 style={styles.clubMemberCardTitle}>carteirinha da teca</h2>
        <p style={styles.clubFichaHint}>ficha de pertencimento — preencha com calma</p>

        <div style={styles.clubField}>
          <p style={styles.clubFieldLabel}>nome da criança</p>
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            style={styles.clubFieldLine}
            aria-label="nome da criança"
          />
        </div>

        <div style={styles.clubField}>
          <p style={styles.clubFieldLabel}>aniversário</p>
          <input
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            style={styles.clubFieldLine}
            aria-label="aniversário"
          />
        </div>

        <div style={styles.clubField}>
          <p style={styles.clubFieldLabel}>membro desde</p>
          <input
            type="text"
            value={memberSince}
            onChange={(e) => setMemberSince(e.target.value)}
            style={styles.clubFieldLine}
            aria-label="membro desde"
          />
        </div>
      </article>

      <article style={styles.clubBelongingCard}>
        <p style={styles.clubBelongingLead}>
          membros do clube têm 30% de desconto em todos os tesouros do
          ateliê.
        </p>
        <p style={styles.clubBelongingText}>
          também acessam as brincadeiras completas do Mundo da Teca.
        </p>
      </article>

      <button type="button" style={styles.clubJoinButton}>
        quero fazer parte
      </button>
    </WorldPortalLayout>
  )
}

function FeatureCard({
  card,
  compact = false,
  tilt = 0,
  radiusKey = 0,
  onClick,
}: {
  card: CardItem
  compact?: boolean
  tilt?: number
  radiusKey?: number
  onClick?: () => void
}) {
  return (
    <button onClick={onClick} style={styles.cardButton}>
      <article
        style={{
          ...styles.featureCard,
          borderRadius: tecaRadiusAt(radiusKey),
          ...tecaTilt(tilt),
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={styles.cardImage}
        />

        <div style={styles.cardTextWrap}>
          <h3 style={compact ? styles.cardTitleCompact : styles.cardTitle}>
            {card.title}
          </h3>

          {card.text && (
            <p style={styles.cardText}>{card.text}</p>
          )}
        </div>
      </article>
    </button>
  )
}

function SoftNote({
  label,
  children,
  highlight = false,
}: {
  label: string
  children: string
  highlight?: boolean
}) {
  return (
    <article
      style={
        highlight
          ? { ...tecaObjects.noteHighlight(), marginBottom: "22px", textAlign: "left" }
          : { ...tecaObjects.note(tecaRadius.lg), marginBottom: "18px", textAlign: "left" }
      }
    >
      <p style={styles.tag}>{label}</p>
      <p style={styles.noteText}>{children}</p>
    </article>
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

function PlayExperienceCard({
  experience,
  fallbackImage,
  selected,
  onSelect,
}: {
  experience: PlayExperience
  fallbackImage: string
  selected: boolean
  onSelect: () => void
}) {
  const [imageSrc, setImageSrc] = useState(experience.image)

  return (
    <button onClick={onSelect} style={styles.experienceCardButton}>
      <article
        style={{
          ...styles.experienceCard,
          ...(selected ? styles.experienceCardSelected : {}),
        }}
      >
        <img
          src={imageSrc}
          alt={experience.title}
          style={styles.experienceCardImage}
          onError={() => {
            if (imageSrc !== fallbackImage) setImageSrc(fallbackImage)
          }}
        />

        <div style={styles.experienceCardBody}>
          <div style={styles.experienceCardHeader}>
            <h3 style={styles.experienceCardTitle}>{experience.title}</h3>
            {!experience.isFree && (
              <span style={styles.clubeSeal}>clube da teca</span>
            )}
          </div>

          <p style={styles.experienceCardInvite}>{experience.invite}</p>

          <div style={styles.experienceCardMeta}>
            <span>{experience.materials}</span>
            <span>{experience.people}</span>
            <span>{experience.place}</span>
          </div>
        </div>
      </article>
    </button>
  )
}

function PlayExperienceDetailPanel({
  experience,
}: {
  experience: PlayExperience
}) {
  const sections = [
    { label: "mini vídeo", text: experience.detail.atmosphericVideo || "em breve" },
    { label: "arte-guia", text: experience.detail.collectibleArt || "em breve" },
    { label: "materiais", text: experience.detail.materialsExpanded },
    { label: "regras", text: experience.detail.rules },
    { label: "como começa", text: experience.detail.howToStart },
    { label: "toque da teca", text: experience.detail.tecaTouch },
    { label: "e se…", text: experience.detail.whatIf },
  ]

  return (
    <article style={styles.experienceDetail}>
      <p style={styles.experienceDetailTitle}>{experience.title}</p>

      {sections.map((section) => (
        <div key={section.label} style={styles.experienceDetailSection}>
          <p style={styles.experienceDetailLabel}>{section.label}</p>
          <p style={styles.experienceDetailText}>
            {section.text || "em breve, com calma."}
          </p>
        </div>
      ))}
    </article>
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

function BottomNav({
  active,
  setScreen,
}: {
  active: Screen
  setScreen: (screen: Screen) => void
}) {
  return (
    <nav style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = active === item.screen

        return (
          <button
            key={item.screen}
            onClick={() => setScreen(item.screen)}
            style={styles.navButton}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                ...styles.navIcon,
                opacity: isActive ? 1 : 0.62,
                transform: isActive ? "translateY(-2px)" : "none",
              }}
            />

            <span
              style={{
                ...styles.navLabel,
                color: isActive ? theme.accent : "#7a6858",
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "#e8e0d5",
    display: "flex",
    justifyContent: "center",
    padding: "24px 16px",
    fontFamily: "'Nunito', sans-serif",
  },

  appShell: {
    width: "100%",
    maxWidth: "520px",
    minHeight: "92vh",
    background: tecaColors.shell,
    borderRadius: "42px",
    overflow: "hidden",
    border: "1px solid rgba(232, 210, 190, 0.8)",
    boxShadow: "0 22px 70px rgba(90,60,30,0.13)",
    position: "relative",
    paddingBottom: "98px",
  },

  homeHeroWrap: {
    position: "relative",
    width: "100%",
  },

  homeHeroImage: {
    width: "100%",
    display: "block",
  },

  homeLogo: {
    position: "absolute",
    top: "52px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "185px",
    zIndex: 5,
    opacity: 0.96,
  },

  heroFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "130px",
    background:
      "linear-gradient(180deg, rgba(246,237,226,0) 0%, #f6ede2 92%)",
  },

  homeContent: {
    position: "relative",
    zIndex: 6,
    padding: "0 24px 28px",
    marginTop: "-24px",
  },

  kicker: {
    color: "#b3815f",
    fontSize: "10px",
    letterSpacing: "5px",
    textTransform: "uppercase",
    opacity: 0.75,
    textAlign: "center",
    margin: "0 0 12px",
  },

  homeTitle: {
    textAlign: "center",
    fontSize: "44px",
    margin: "0 0 12px",
    ...tecaFont.portalTitle,
  },

  homeIntro: {
    textAlign: "center",
    fontSize: "20px",
    margin: "0 10px 22px",
    ...tecaFont.poetic,
  },

  coverWrap: {
    position: "relative",
    height: "270px",
    overflow: "hidden",
  },

  coverImage: {
    width: "100%",
    borderRadius: 28,
    objectFit: "cover",
    marginBottom: 34,
  },

  smallLogo: {
    position: "absolute",
    top: "28px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "118px",
    opacity: 0.92,
    zIndex: 5,
  },

  coverFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "110px",
    background:
      "linear-gradient(180deg, rgba(246,237,226,0) 0%, #f6ede2 92%)",
  },

  pageContent: {
    position: "relative",
    zIndex: 6,
    padding: "0 24px 28px",
    marginTop: "-22px",
  },

  pageTitle: {
    textAlign: "center",
    fontSize: "38px",
    margin: "0 0 8px",
    ...tecaFont.portalTitle,
  },

  pageIntro: {
    fontSize: "20px",
    textAlign: "left",
    margin: "0 0 26px",
    ...tecaFont.poetic,
  },

  subPage: {
    padding: "24px 24px 28px",
  },

  backButton: {
    border: "none",
    background: "transparent",
    color: "#9a7f6d",
    fontSize: "17px",
    cursor: "pointer",
    padding: "0 0 18px",
    textAlign: "left",
    ...tecaFont.poetic,
  },

  pageIntroBlock: {
    marginBottom: "8px",
  },

  subPageImage: {
    width: "100%",
    borderRadius: "28px",
    objectFit: "cover",
    display: "block",
    marginBottom: "22px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.06)",
  },

  page: {
    padding: "24px 24px 28px",
    display: "flex",
    flexDirection: "column",
  },

  discoveryButton: {
    marginTop: 28,
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "16px 24px",
    fontSize: "20px",
    cursor: "pointer",
  },

  tipBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    background: tecaColors.paperNote,
    borderRadius: tecaRadius.sm,
    padding: "14px 16px",
    marginTop: 12,
    color: "#6a4f3c",
    fontSize: "16px",
    lineHeight: 1.5,
    border: `1px solid ${theme.line}`,
    boxShadow: "0 2px 8px rgba(120,90,60,0.03)",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    textAlign: "left",
  },

  tipDot: {
    ...tecaObjects.dot(),
    marginTop: "6px",
  },

  rewardBox: {
    marginTop: 28,
    background: tecaColors.paperWarm,
    borderRadius: tecaRadius.lg,
    padding: "22px 18px",
    textAlign: "left",
    color: "#6a4f3c",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.05)",
  },

  rewardTitle: {
    margin: "0 0 10px",
    fontSize: "26px",
    ...tecaFont.heading,
  },

  rewardItem: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
  },

  rewardNote: {
    margin: 0,
    fontSize: "13px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  tag: {
    ...tecaType.labelSmall,
  },

  noteText: {
    ...tecaType.bodyPoetic,
    fontSize: "19px",
    lineHeight: 1.75,
  },

  sectionTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    marginTop: "24px",
    marginBottom: "18px",
    fontSize: "30px",
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
  },

  homeSectionLead: {
    textAlign: "left",
    color: "#8a6f5d",
    marginTop: "4px",
    marginBottom: "22px",
    fontSize: "24px",
    lineHeight: 1.15,
    ...tecaFont.heading,
  },

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  experienceCollection: {
    marginTop: "10px",
  },

  experienceCollectionTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    margin: "4px 0 8px",
    fontSize: "28px",
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
  },

  experienceCollectionIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.5,
    margin: "0 2px 22px",
  },

  experienceStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  experienceStackItem: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  experienceCardButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  },

  experienceCard: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.md,
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 24px rgba(120,90,60,0.05)",
    transition: "box-shadow 0.2s ease",
  },

  experienceCardSelected: {
    border: "1px solid #dcc3aa",
    boxShadow: "0 10px 28px rgba(120,90,60,0.08)",
  },

  experienceCardImage: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    display: "block",
  },

  experienceCardBody: {
    padding: "16px 18px 18px",
  },

  experienceCardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "6px",
  },

  experienceCardTitle: {
    margin: 0,
    fontFamily: "'Caveat', cursive",
    fontSize: "30px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  clubeSeal: {
    flexShrink: 0,
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#a67c52",
    border: "1px solid #e2cdb8",
    borderRadius: "999px",
    padding: "5px 9px",
    background: "rgba(248, 236, 223, 0.7)",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  experienceCardInvite: {
    margin: "0 0 12px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "18px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  experienceCardMeta: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "12px",
    lineHeight: 1.4,
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
  },

  experienceDetail: {
    background: tecaColors.paperWarm,
    borderRadius: tecaRadius.sm,
    padding: "18px 16px",
    border: `1px solid ${theme.line}`,
  },

  experienceDetailTitle: {
    margin: "0 0 14px",
    textAlign: "center",
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    color: theme.text,
  },

  experienceDetailSection: {
    marginBottom: "12px",
  },

  experienceDetailLabel: {
    margin: "0 0 4px",
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },

  experienceDetailText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#7a6254",
  },

  atelierTopBar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
  },

  minhaCaixaLinkMain: {
    border: "none",
    background: "rgba(255, 253, 249, 0.75)",
    borderRadius: "999px",
    padding: "10px 20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    color: "#8a6f5d",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.line,
    boxShadow: "0 4px 14px rgba(120,90,60,0.05)",
  },

  minhaCaixaLink: {
    border: "none",
    background: "rgba(255, 253, 249, 0.6)",
    borderRadius: "999px",
    padding: "8px 14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "'Caveat', cursive",
    fontSize: "20px",
    color: "#8a6f5d",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.line,
    flexShrink: 0,
  },

  minhaCaixaIcon: {
    fontSize: "16px",
    opacity: 0.85,
  },

  minhaCaixaCount: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "11px",
    background: "#efe0d0",
    color: "#8a6f5d",
    borderRadius: "999px",
    padding: "2px 7px",
    minWidth: "18px",
    textAlign: "center",
  },

  paperCatalog: {
    marginTop: "6px",
  },

  paperCatalogTitle: {
    textAlign: "center",
    color: "#8a6f5d",
    margin: "0 0 8px",
    fontSize: "28px",
    fontFamily: "'Caveat', cursive",
    fontWeight: 400,
  },

  paperCatalogIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.5,
    margin: "0 2px 24px",
  },

  paperStack: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },

  paperCard: {
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "28px",
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.05)",
  },

  paperCardImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    display: "block",
  },

  paperCardBody: {
    padding: "18px 20px 22px",
  },

  paperCardTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "10px",
  },

  paperCollectionTag: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },

  paperStatusSeal: {
    fontSize: "9px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9a7f6d",
    border: "1px solid #e8d8c8",
    borderRadius: "999px",
    padding: "4px 8px",
    background: "rgba(248, 240, 232, 0.8)",
    fontFamily: "'Nunito', sans-serif",
    textAlign: "right",
    lineHeight: 1.3,
  },

  paperCardTitleButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
    width: "100%",
  },

  paperCardTitle: {
    margin: "0 0 8px",
    fontFamily: "'Caveat', cursive",
    fontSize: "34px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  paperCardPoetic: {
    margin: "0 0 16px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "19px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  paperPriceBlock: {
    marginBottom: "16px",
  },

  paperPrice: {
    margin: "0 0 4px",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "22px",
    color: theme.text,
  },

  paperClubPrice: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: "#a67c52",
  },

  paperTakeHomeButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "linear-gradient(180deg, #f3e6d8 0%, #e8d5c3 100%)",
    borderRadius: "999px",
    padding: "14px 20px",
    fontFamily: "'Caveat', cursive",
    fontSize: "26px",
    color: theme.text,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(120,90,60,0.06)",
  },

  paperTakeHomeButtonDone: {
    opacity: 0.72,
    cursor: "default",
    background: "#f5ebe2",
  },

  paperCardDescription: {
    margin: "16px 0 0",
    paddingTop: "14px",
    borderTop: `1px solid ${theme.line}`,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.55,
    color: "#7a6254",
  },

  paperPoeticLink: {
    marginTop: "12px",
    border: "none",
    background: "transparent",
    padding: 0,
    fontFamily: "'Caveat', cursive",
    fontSize: "20px",
    color: "#9a7f6d",
    cursor: "pointer",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },

  minhaCaixaHero: {
    textAlign: "center",
    marginBottom: "8px",
  },

  minhaCaixaBadge: {
    ...tecaObjects.etiqueta(),
    marginBottom: "10px",
    display: "inline-block",
  },

  boxItem: {
    background: tecaColors.paper,
    borderRadius: tecaRadius.md,
    padding: "16px 18px",
    border: `1px solid ${theme.line}`,
  },

  boxItemTitle: {
    margin: "0 0 6px",
    fontFamily: "'Caveat', cursive",
    fontSize: "28px",
    color: theme.text,
  },

  boxItemPoetic: {
    margin: "0 0 8px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: theme.muted,
  },

  boxItemPrice: {
    margin: 0,
    fontSize: "13px",
    color: "#9a8475",
    fontFamily: "'Nunito', sans-serif",
  },

  paperBackToShopButton: {
    marginTop: "20px",
    width: "100%",
    border: "none",
    background: "transparent",
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    color: "#9a7f6d",
    cursor: "pointer",
    padding: "12px",
  },

  clubPage: {
    padding: "28px 24px 32px",
    maxWidth: "100%",
  },

  clubHeroImage: {
    width: "100%",
    maxWidth: "220px",
    display: "block",
    margin: "0 auto 24px",
    borderRadius: "20px",
    opacity: 0.92,
  },

  clubHeader: {
    textAlign: "center",
    marginBottom: "32px",
  },

  clubTitle: {
    margin: "0 0 10px",
    fontFamily: "'Caveat', cursive",
    fontSize: "42px",
    fontWeight: 400,
    color: theme.text,
    lineHeight: 1,
  },

  clubTagline: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "20px",
    lineHeight: 1.45,
    color: theme.muted,
  },

  clubMemberCard: {
    ...tecaObjects.ficha(tecaRadius.lg),
    marginBottom: "24px",
    borderTop: `3px solid ${tecaColors.lineSoft}`,
  },

  clubFichaHint: {
    margin: "-8px 0 16px",
    fontSize: "14px",
    ...tecaFont.poetic,
    color: "#9a8475",
  },

  clubMemberCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },

  clubSealBadge: {
    ...tecaObjects.seal(),
  },

  clubMemberNumber: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "15px",
    color: "#9a8475",
  },

  clubMemberCardTitle: {
    margin: "0 0 6px",
    textAlign: "left",
    fontSize: "32px",
    ...tecaFont.portalTitle,
  },

  clubField: {
    marginBottom: "14px",
  },

  clubFieldLabel: {
    ...tecaType.labelSmall,
  },

  clubFieldLine: {
    ...tecaType.fichaLine,
  },

  clubBelongingCard: {
    ...tecaObjects.note(tecaRadius.md),
    marginBottom: "28px",
    textAlign: "left",
  },

  clubBelongingLead: {
    margin: "0 0 10px",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "16px",
    lineHeight: 1.55,
    color: theme.text,
    fontWeight: 600,
  },

  clubBelongingText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.45,
    color: theme.muted,
    textAlign: "left",
  },

  clubJoinButton: {
    width: "100%",
    ...tecaObjects.buttonPrimary(),
    padding: "18px 24px",
    fontSize: "28px",
    ...tecaFont.accentHand,
  },

  diaryStack: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "18px",
  },

  diaryEntryCard: {
    background: "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "22px",
    border: `1px solid ${theme.line}`,
    padding: "14px 16px",
  },

  diaryEntryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },

  diaryEntryIcon: {
    fontSize: "16px",
  },

  diaryEntryDate: {
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#b3815f",
    fontWeight: 700,
  },

  diaryEntryTitle: {
    margin: "0 0 6px",
    fontFamily: "'Caveat', cursive",
    fontSize: "28px",
    color: theme.text,
    fontWeight: 400,
  },

  diaryEntryText: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    color: theme.muted,
    fontSize: "17px",
    lineHeight: 1.45,
  },

  collectionsStack: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  collectionCard: {
    background: "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "24px",
    border: `1px solid ${theme.line}`,
    padding: "14px 14px 16px",
  },

  collectionTop: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginBottom: "10px",
  },

  collectionThumb: {
    width: "66px",
    height: "66px",
    borderRadius: "14px",
    objectFit: "cover",
    border: `1px solid ${theme.line}`,
  },

  collectionTitle: {
    margin: "0 0 4px",
    fontFamily: "'Caveat', cursive",
    fontSize: "30px",
    lineHeight: 1,
    color: theme.text,
    fontWeight: 400,
  },

  collectionPoetic: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: theme.muted,
  },

  collectionProgressRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },

  collectionDots: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    maxWidth: "62%",
  },

  collectionDot: {
    width: "10px",
    height: "10px",
    borderRadius: "999px",
    border: `1px solid ${theme.line}`,
    background: "#fffdf9",
  },

  collectionDotFilled: {
    background: "#e7c8a8",
    borderColor: "#d8b590",
  },

  collectionCount: {
    margin: 0,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "16px",
    color: "#8a6f5d",
  },

  collectionButton: {
    width: "100%",
    border: `1px solid ${theme.line}`,
    background: "rgba(255,253,249,0.8)",
    borderRadius: "999px",
    padding: "10px 16px",
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    color: theme.text,
    cursor: "pointer",
  },

  cardButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
  },

  featureCard: {
    background: tecaColors.paper,
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 22px rgba(120,90,60,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
    minHeight: "100%",
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    display: "block",
  },

  cardTextWrap: {
    padding: "14px 14px 16px",
    textAlign: "left",
  },

  cardTitle: {
    fontSize: "26px",
    margin: 0,
    ...tecaFont.heading,
  },

  cardTitleCompact: {
    fontSize: "22px",
    margin: 0,
    ...tecaFont.heading,
  },

  cardText: {
    margin: "8px 0 0 0",
    fontSize: "14px",
    textAlign: "left",
    ...tecaFont.poetic,
  },

  primaryButton: {
    width: "100%",
    background:
      "linear-gradient(180deg, #d9a06e 0%, #c88757 100%)",
    border: "none",
    borderRadius: "999px",
    padding: "20px",
    color: "#fffaf5",
    fontSize: "32px",
    marginTop: "28px",
    fontFamily: "'Caveat', cursive",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(195,133,87,0.18)",
  },

  bottomNav: {
    position: "absolute",
    left: "16px",
    right: "16px",
    bottom: "16px",
    height: "68px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...tecaObjects.navStrip(),
    borderRadius: "22px",
    padding: "0 10px",
    zIndex: 20,
  },

  navButton: {
    border: "none",
    background: "transparent",
    width: "20%",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  navIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginBottom: "2px",
    transition: "0.2s ease",
  },

  navLabel: {
    ...tecaFont.navLabel,
    lineHeight: "1.05",
  },
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