import { useState } from "react"
import "./fonts.css"
import {
  isPlayUniverseScreen,
  playUniverses,
  type PlayExperience,
  type PlayUniverse,
} from "./playData"
import {
  formatBRL,
  getPaperGoodStatus,
  paperGoods,
  papelariaCoverImage,
  type PaperGood,
} from "./paperData"

type Screen =
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "diario"
  | "colecoes"
  | "tesouros"
  | "brincadeiras"
  | "brincar-na-rua"
  | "dias-de-chuva"
  | "faz-de-conta"
  | "oficina"
  | "laboratorio"
  | "cozinha"
  | "atelie"
  | "papel-de-carta"
  | "album"
  | "bonequinhas"
  | "origami"
  | "imprimiveis"
  | "cartoes"
  | "adesivos"
  | "carimbos"
  | "bau"
  | "papelaria"
  | "minha-caixa"
  | "clube"
  | "carteirinha"
  | "correio"
  | "colecoes-especiais"
  | "assinatura"

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
  | "papelaria"
  | "minha-caixa"
  | "clube"
>

type SubPageContent = {
  parent: "descobertas" | "brincadeiras" | "atelie" | "clube"
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
    intro: "papéis, coleções, tesouros e coisinhas para guardar.",
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
    text: "papéis e tesouros",
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

const atelierCards: CardItem[] = [
  {
    id: "papel-de-carta",
    title: "Papel de carta",
    text: "folhas delicadas para escrever e guardar",
    image: "/cards/atelie/papel-de-carta.png",
    target: "papel-de-carta",
  },
  {
    id: "album",
    title: "Álbum de figurinhas",
    text: "coleções para completar devagar",
    image: "/cards/atelie/album.png",
    target: "album",
  },
  {
    id: "bonequinhas",
    title: "Bonequinhas da Teca",
    text: "personagens, roupinhas e recortes",
    image: "/cards/atelie/bonequinhas.png",
    target: "bonequinhas",
  },
  {
    id: "origami",
    title: "Origami",
    text: "dobras simples e poéticas",
    image: "/cards/atelie/origami.png",
    target: "origami",
  },
  {
    id: "imprimiveis",
    title: "Imprimíveis",
    text: "atividades e materiais para imprimir",
    image: "/cards/atelie/imprimiveis.png",
    target: "imprimiveis",
  },
  {
    id: "cartoes",
    title: "Cartões",
    text: "pequenas mensagens para entregar",
    image: "/cards/atelie/cartoes.png",
    target: "cartoes",
  },
  {
    id: "adesivos",
    title: "Adesivos",
    text: "detalhes para decorar cartas e diários",
    image: "/cards/atelie/adesivos.png",
    target: "adesivos",
  },
  {
    id: "carimbos",
    title: "Carimbos",
    text: "marcas, símbolos e selos do universo",
    image: "/cards/atelie/carimbos.png",
    target: "carimbos",
  },
  {
    id: "bau",
    title: "Baú da Teca",
    text: "um lugar para guardar tesouros de verdade",
    image: "/cards/atelie/bau.png",
    target: "bau",
  },
  {
    id: "papelaria",
    title: "Papelaria",
    text: "coleções afetivas para tocar e guardar",
    image: "/cards/atelie/papelaria.png",
    target: "papelaria",
  },
]

const clubCards: CardItem[] = [
  {
    id: "carteirinha",
    title: "Carteirinha",
    text: "a entrada oficial no Clube da Teca",
    image: "/cards/clube/carteirinha.png",
    target: "carteirinha",
  },
  {
    id: "correio",
    title: "Correio da Teca",
    text: "cartas, envios e pequenas surpresas",
    image: "/cards/clube/correio.png",
    target: "correio",
  },
  {
    id: "colecoes-especiais",
    title: "Coleções especiais",
    text: "tesouros e conteúdos para membros",
    image: "/cards/clube/colecoes-especiais.png",
    target: "colecoes-especiais",
  },
  {
    id: "assinatura",
    title: "Assinatura",
    text: "planos e acesso ao universo completo",
    image: "/cards/clube/assinatura.png",
    target: "assinatura",
  },
]

const subPageData: Record<SimpleSubScreen, SubPageContent> = {
  diario: {
    parent: "descobertas",
    title: "diário de pequenas descobertas",
    poetic: "o que já foi visto e guardado com carinho pode voltar em outro dia.",
    image: "/cards/descobertas/diario.png",
    noteLabel: "janela da teca",
    noteText: "folheie devagar. cada página guarda um pedaço de atenção.",
  },
  colecoes: {
    parent: "descobertas",
    title: "coleções do mundo real",
    poetic: "folhas, flores, pedras e sementes esperam um lugar quieto para ficar.",
    image: "/cards/descobertas/colecoes.png",
    noteLabel: "janela da teca",
    noteText: "não precisa completar tudo de uma vez. cole com calma.",
  },
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
  album: {
    parent: "atelie",
    title: "álbum de figurinhas",
    poetic: "completar devagar é outra forma de cuidar do tempo.",
    image: "/cards/atelie/album.png",
    noteLabel: "ateliê",
    noteText: "cada figurinha guarda um dia que valeu a pena lembrar.",
  },
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
  carteirinha: {
    parent: "clube",
    title: "carteirinha da teca",
    poetic: "a entrada suave para quem quer pertencer a este universo.",
    image: "/cards/clube/carteirinha.png",
    noteLabel: "clube",
    noteText: "pertencer não é pressa: é presença, cuidado e continuidade.",
  },
  correio: {
    parent: "clube",
    title: "correio da teca",
    poetic: "cartas e surpresas que atravessam o tempo até a sua casa.",
    image: "/cards/clube/correio.png",
    noteLabel: "clube",
    noteText: "esperar o correio também é parte da magia.",
  },
  "colecoes-especiais": {
    parent: "clube",
    title: "coleções especiais",
    poetic: "tesouros reservados para quem caminha junto com a teca.",
    image: "/cards/clube/colecoes-especiais.png",
    noteLabel: "clube",
    noteText: "conteúdos que chegam em capítulos, não de uma vez só.",
  },
  assinatura: {
    parent: "clube",
    title: "assinatura",
    poetic: "planos para continuar recebendo o universo em pedaços cuidadosos.",
    image: "/cards/clube/assinatura.png",
    noteLabel: "clube",
    noteText: "escolha o ritmo da família. o mundo da teca não tem pressa.",
  },
}

const parentLabels: Record<
  SubPageContent["parent"],
  string
> = {
  descobertas: "descobertas",
  brincadeiras: "brincadeiras",
  atelie: "ateliê",
  clube: "clube",
}

function isSimpleSubScreen(screen: Screen): screen is SimpleSubScreen {
  return screen in subPageData
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")
  const [box, setBox] = useState<PaperGood[]>([])

  const addToBox = (good: PaperGood) => {
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
    data={pageData.descobertas}
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

        {isSimpleSubScreen(screen) && (
          <SimpleSubPage
            setScreen={setScreen}
            content={subPageData[screen]}
            backLabel={parentLabels[subPageData[screen].parent]}
          />
        )}

        {screen === "papelaria" && (
          <PapelariaPage
            setScreen={setScreen}
            box={box}
            onAddToBox={addToBox}
          />
        )}

        {screen === "minha-caixa" && (
          <MinhaCaixaPage setScreen={setScreen} box={box} />
        )}

        {screen === "brincadeiras" && (
          <Page
            data={pageData.brincadeiras}
            cards={playCards}
            setScreen={setScreen}
          />
        )}

        {screen === "atelie" && (
          <Page
            data={pageData.atelie}
            cards={atelierCards}
            setScreen={setScreen}
          />
        )}

        {screen === "clube" && (
          <ClubPage
            data={pageData.clube}
            cards={clubCards}
            setScreen={setScreen}
          />
        )}

        <BottomNav active={screen} setScreen={setScreen} />
      </section>
    </main>
  )
}
function Home({
  setScreen,
}: {
  setScreen: (screen: Screen) => void
}) {
  return (
    <>
      <div style={styles.homeHeroWrap}>
        <img
          src="/characters/teca-estrelinha-praia.png"
          alt="Teca brincando na praia"
          style={styles.homeHeroImage}
        />

        <img
          src="/logo/logo.png"
          alt="Mundo da Teca"
          style={styles.homeLogo}
        />

        <div style={styles.heroFade} />
      </div>

      <section style={styles.homeContent}>
        <p style={styles.kicker}>observa • cria • imagina</p>

        <h1 style={styles.homeTitle}>
          uma tecnologia que convida a sair das telas
        </h1>

        <p style={styles.homeIntro}>
          descobertas, brincadeiras, papelaria, coleções e pequenas memórias
          para uma infância mais lenta, criativa e viva.
        </p>

        <SoftNote label="janela da teca" highlight>
          encontre uma pequena coisa que parecia invisível antes.
        </SoftNote>

        <h2 style={styles.sectionTitle}>
          por onde vamos começar?
        </h2>

        <div style={styles.gridTwo}>
          {homeCards.map((card) => (
            <FeatureCard
              key={card.id}
              card={card}
              compact
              onClick={() => card.target && setScreen(card.target)}
            />
          ))}
        </div>
      </section>
    </>
  )
}

function Page({
  data,
  cards,
  setScreen,
}: {
  data: { title: string; intro: string; cover: string }
  cards: CardItem[]
  setScreen: (screen: Screen) => void
}) {
  return (

    <>
      <PageCover data={data} />

      <section style={styles.pageContent}>
        <h1 style={styles.pageTitle}>{data.title}</h1>
        <p style={styles.pageIntro}>{data.intro}</p>

        <div style={styles.gridTwo}>
          {cards.map((card) => (
            <FeatureCard
            key={card.id}
            card={card}
            onClick={() => card.target && setScreen(card.target)}
          />
          ))}
        </div>
      </section>
    </>
  )
}

function ClubPage({
  data,
  cards,
  setScreen,
}: {
  data: { title: string; intro: string; cover: string }
  cards: CardItem[]
  setScreen: (screen: Screen) => void
}) {
  return (
    <>
      <PageCover data={data} />

      <section style={styles.pageContent}>
        <h1 style={styles.pageTitle}>{data.title}</h1>
        <p style={styles.pageIntro}>{data.intro}</p>

        <SoftNote label="clube" highlight>
          cartas, coleções, vantagens e pequenas surpresas para continuar o
          universo da Teca em casa.
        </SoftNote>

        <div style={styles.gridTwo}>
          {cards.map((card) => (
            <FeatureCard
            key={card.id}
            card={card}
            onClick={() => card.target && setScreen(card.target)}
          />
          ))}
        </div>

        <button style={styles.primaryButton}>
          entrar para o clube
        </button>
      </section>
    </>
  )
}

function PageCover({
  data,
}: {
  data: { title: string; intro: string; cover: string }
}) {
  return (
    <div style={styles.coverWrap}>
      <img
        src={data.cover}
        alt={data.title}
        style={styles.coverImage}
      />

      <img
        src="/logo/logo.png"
        alt="Mundo da Teca"
        style={styles.smallLogo}
      />

      <div style={styles.coverFade} />
    </div>
  )
}

function FeatureCard({
  card,
  compact = false,
  onClick,
}: {
  card: CardItem
  compact?: boolean
  onClick?: () => void
}) {
  return (
    <button onClick={onClick} style={styles.cardButton}>
      <article style={styles.featureCard}>
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
            <p style={styles.cardText}>
              {card.text}
            </p>
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
    <article style={highlight ? styles.noteHighlight : styles.note}>
      <p style={styles.tag}>{label}</p>
      <p style={styles.noteText}>{children}</p>
    </article>
  )
}

function PaperGoodCard({
  good,
  inBox,
  expanded,
  onToggleExpand,
  onAddToBox,
}: {
  good: PaperGood
  inBox: boolean
  expanded: boolean
  onToggleExpand: () => void
  onAddToBox: () => void
}) {
  const [imageSrc, setImageSrc] = useState(good.image)
  const status = getPaperGoodStatus(good)

  return (
    <article style={styles.paperCard}>
      <img
        src={imageSrc}
        alt={good.title}
        style={styles.paperCardImage}
        onError={() => {
          if (imageSrc !== papelariaCoverImage) setImageSrc(papelariaCoverImage)
        }}
      />

      <div style={styles.paperCardBody}>
        <div style={styles.paperCardTopRow}>
          <p style={styles.paperCollectionTag}>{good.collection}</p>
          {status && (
            <span style={styles.paperStatusSeal}>{status.label}</span>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleExpand}
          style={styles.paperCardTitleButton}
        >
          <h3 style={styles.paperCardTitle}>{good.title}</h3>
        </button>

        <p style={styles.paperCardPoetic}>{good.poetic}</p>

        <div style={styles.paperPriceBlock}>
          <p style={styles.paperPrice}>{formatBRL(good.price)}</p>
          <p style={styles.paperClubPrice}>
            membros do clube levam por {formatBRL(good.clubPrice)}
          </p>
        </div>

        <button
          type="button"
          onClick={onAddToBox}
          style={{
            ...styles.paperTakeHomeButton,
            ...(inBox ? styles.paperTakeHomeButtonDone : {}),
          }}
          disabled={inBox}
        >
          {inBox ? "já está na sua caixa" : "levar pra casa"}
        </button>

        {expanded && (
          <p style={styles.paperCardDescription}>{good.description}</p>
        )}
      </div>
    </article>
  )
}

function PapelariaPage({
  setScreen,
  box,
  onAddToBox,
}: {
  setScreen: (screen: Screen) => void
  box: PaperGood[]
  onAddToBox: (good: PaperGood) => void
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const boxCount = box.length

  return (
    <section style={styles.subPage}>
      <div style={styles.paperHeaderRow}>
        <button
          onClick={() => setScreen("atelie")}
          style={styles.backButton}
        >
          ← ateliê
        </button>

        <button
          type="button"
          onClick={() => setScreen("minha-caixa")}
          style={styles.minhaCaixaLink}
        >
          <span style={styles.minhaCaixaIcon}>✉</span>
          minha caixa
          {boxCount > 0 && (
            <span style={styles.minhaCaixaCount}>{boxCount}</span>
          )}
        </button>
      </div>

      <img
        src={papelariaCoverImage}
        alt="Papelaria"
        style={styles.subPageImage}
      />

      <div style={styles.pageIntroBlock}>
        <h1 style={styles.pageTitle}>papelaria</h1>
        <p style={styles.pageIntro}>
          coleções afetivas para tocar, cheirar e guardar perto — como uma
          gaveta de tesouros que não tem pressa.
        </p>
      </div>

      <SoftNote label="clube da teca" highlight>
        quem pertence ao clube tem 30% de cuidado a menos no preço — um
        desconto fixo em toda a papelaria, sem barulho de promoção.
      </SoftNote>

      <section style={styles.paperCatalog}>
        <h2 style={styles.paperCatalogTitle}>objetos da coleção</h2>
        <p style={styles.paperCatalogIntro}>
          escolha devagar. cada peça foi pensada para continuar o universo da
          Teca em casa.
        </p>

        <div style={styles.paperStack}>
          {paperGoods.map((good) => (
            <PaperGoodCard
              key={good.id}
              good={good}
              inBox={box.some((item) => item.id === good.id)}
              expanded={expandedId === good.id}
              onToggleExpand={() =>
                setExpandedId((current) =>
                  current === good.id ? null : good.id
                )
              }
              onAddToBox={() => onAddToBox(good)}
            />
          ))}
        </div>
      </section>
    </section>
  )
}

function MinhaCaixaPage({
  setScreen,
  box,
}: {
  setScreen: (screen: Screen) => void
  box: PaperGood[]
}) {
  return (
    <section style={styles.subPage}>
      <button
        onClick={() => setScreen("papelaria")}
        style={styles.backButton}
      >
        ← papelaria
      </button>

      <div style={styles.minhaCaixaHero}>
        <span style={styles.minhaCaixaHeroIcon}>✉</span>
        <h1 style={styles.pageTitle}>minha caixa</h1>
        <p style={styles.pageIntro}>
          um canto quieto para o que você escolheu levar pra casa.
        </p>
      </div>

      {box.length === 0 ? (
        <SoftNote label="vazia por enquanto">
          nenhum tesouro ainda. volte à papelaria e escolha com calma.
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
        onClick={() => setScreen("papelaria")}
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
        onClick={() => setScreen(content.parent)}
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

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #f7dfcf 0%, transparent 34%), linear-gradient(180deg, #e8e0d5 0%, #ded6cb 100%)",
    display: "flex",
    justifyContent: "center",
    padding: "24px 16px",
    fontFamily: "'Nunito', sans-serif",
  },

  appShell: {
    width: "100%",
    maxWidth: "520px",
    minHeight: "92vh",
    background:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 0%, transparent 22%), radial-gradient(circle at 80% 0%, rgba(245,215,190,0.35) 0%, transparent 28%), linear-gradient(180deg, #fbf4eb 0%, #f6ede2 100%)",
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
    color: theme.text,
    fontFamily: "'Caveat', cursive",
    fontSize: "44px",
    lineHeight: "0.95",
    fontWeight: 400,
    margin: "0 0 12px",
  },

  homeIntro: {
    textAlign: "center",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    fontSize: "20px",
    lineHeight: "1.45",
    margin: "0 10px 22px",
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
    lineHeight: "1.2",
    color: "#5f4738",
    fontFamily: "'Caveat', cursive",
    fontWeight: 500,
    margin: "0 0 8px",
  },

  pageIntro: {
    color: theme.muted,
    fontSize: "20px",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
    textAlign: "center",
    margin: "0 8px 26px",
    lineHeight: "1.4",
  },

  subPage: {
    padding: "24px 24px 28px",
  },

  backButton: {
    border: "none",
    background: "transparent",
    color: "#9a7f6d",
    fontFamily: "'Caveat', cursive",
    fontSize: "24px",
    cursor: "pointer",
    padding: "0 0 18px",
    textAlign: "left",
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
    border: "none",
    background: "#c88757",
    color: "#fffdf8",
    padding: "16px 34px",
    borderRadius: 999,
    fontSize: "18px",
    fontFamily: "'Nunito', sans-serif",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease",
    alignSelf: "center",
  },

  tipBox: {
    background: "#f7efe6",
    borderRadius: 20,
    padding: "14px 18px",
    marginTop: 12,
    color: "#6a4f3c",
    fontSize: "15px",
    lineHeight: 1.5,
    border: "1px solid #ead8c5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  },

  rewardBox: {
    marginTop: 28,
    background: "#f7efe6",
    borderRadius: 28,
    padding: "26px 22px",
    textAlign: "center",
    color: "#6a4f3c",
    border: "1px solid #ead8c5",
    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
  },

  note: {
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "28px",
    padding: "22px",
    marginBottom: "18px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 24px rgba(120,90,60,0.05)",
  },

  noteHighlight: {
    background:
      "linear-gradient(180deg, #f8ecdf 0%, #efe0d0 100%)",
    borderRadius: "30px",
    padding: "24px",
    marginBottom: "22px",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 8px 24px rgba(120,90,60,0.05)",
  },

  tag: {
    color: "#b3815f",
    fontSize: "10px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: "0 0 10px",
    fontWeight: 700,
    textAlign: "center",
  },

  noteText: {
    color: "#7a6254",
    lineHeight: "1.75",
    fontSize: "20px",
    margin: 0,
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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

  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
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
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "26px",
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
    background: "linear-gradient(180deg, #f8ecdf 0%, #f3e4d4 100%)",
    borderRadius: "22px",
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

  paperHeaderRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "4px",
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

  minhaCaixaHero: {
    textAlign: "center",
    marginBottom: "8px",
  },

  minhaCaixaHeroIcon: {
    display: "block",
    fontSize: "28px",
    marginBottom: "8px",
    opacity: 0.7,
  },

  boxItem: {
    background: "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "22px",
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

  cardButton: {
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    width: "100%",
  },

  featureCard: {
    background:
      "linear-gradient(180deg, #fffdf9 0%, #f8efe5 100%)",
    borderRadius: "30px",
    overflow: "hidden",
    border: `1px solid ${theme.line}`,
    boxShadow: "0 10px 28px rgba(120,90,60,0.06)",
    minHeight: "100%",
  },

  cardImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    display: "block",
  },

  cardTextWrap: {
    padding: "14px 12px 16px",
    textAlign: "center",
  },

  cardTitle: {
    fontFamily: "'Caveat', cursive",
    fontSize: "32px",
    color: theme.text,
    margin: 0,
    lineHeight: "0.98",
    fontWeight: 400,
  },

  cardTitleCompact: {
    fontFamily: "'Caveat', cursive",
    fontSize: "32px",
    color: theme.text,
    margin: 0,
    lineHeight: "0.98",
    fontWeight: 400,
  },

  cardText: {
    margin: "8px 0 0 0",
    fontSize: "15px",
    lineHeight: "1.35",
    color: theme.muted,
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: "italic",
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
    left: "18px",
    right: "18px",
    bottom: "18px",
    height: "66px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 253, 249, 0.78)",
    backdropFilter: "blur(14px)",
    borderRadius: "999px",
    border: "1px solid rgba(234, 216, 197, 0.85)",
    boxShadow: "0 12px 28px rgba(90, 60, 38, 0.12)",
    padding: "0 12px",
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
    fontSize: "11px",
    lineHeight: "1.05",
    fontFamily: "'Caveat', cursive",
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
        🍃 escute o movimento
      </div>

      <div style={styles.tipBox}>
        🍃 talvez esteja escondido
      </div>

      <div style={styles.tipBox}>
        🍃 procure algo leve
      </div>

      {!found ? (
        <button
          style={styles.discoveryButton}
          onClick={() => setFound(true)}
        >
          eu encontrei
        </button>
      ) : (
        <div style={styles.rewardBox}>
          ✨ figurinha desbloqueada

          <div style={{ marginTop: 10 }}>
            folha dançando
          </div>

          <div style={{ marginTop: 14, fontSize: 13 }}>
            guardado no seu álbum
          </div>
        </div>
      )}
    </section>
  )
}