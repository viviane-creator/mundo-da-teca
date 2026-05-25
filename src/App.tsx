import { useState } from "react"
import "./fonts.css"

type Screen =
  | "home"
  | "descobertas"
  | "descoberta-do-dia"
  | "diario"
  | "colecoes"
  | "tesouros"
  | "brincadeiras"
  | "brincar-na-rua"
  | "brincar-sozinho"
  | "dias-de-chuva"
  | "cozinha"
  | "laboratorio"
  | "oficina"
  | "linha"
  | "faz-de-conta"
  | "construcoes"
  | "natureza"
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
  | "clube"
  | "carteirinha"
  | "correio"
  | "colecoes-especiais"
  | "assinatura"

type SimpleSubScreen = Exclude<
  Screen,
  "home" | "descobertas" | "descoberta-do-dia" | "brincadeiras" | "atelie" | "clube"
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
    title: "Brincar na rua",
    text: "aventuras do lado de fora",
    image: "/cards/brincadeiras/brincar-na-rua.png",
    target: "brincar-na-rua",
  },
  {
    id: "brincar-sozinho",
    title: "Brincar sozinho",
    text: "imaginação e silêncio",
    image: "/cards/brincadeiras/brincar-sozinho.png",
    target: "brincar-sozinho",
  },
  {
    id: "dias-de-chuva",
    title: "Dias de chuva",
    text: "brincadeiras para dentro de casa",
    image: "/cards/brincadeiras/dias-de-chuva.png",
    target: "dias-de-chuva",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    text: "misturas e descobertas",
    image: "/cards/brincadeiras/cozinha.png",
    target: "cozinha",
  },
  {
    id: "laboratorio",
    title: "Laboratório",
    text: "experiências suaves e curiosas",
    image: "/cards/brincadeiras/laboratorio.png",
    target: "laboratorio",
  },
  {
    id: "oficina",
    title: "Oficina",
    text: "coisas feitas com as mãos",
    image: "/cards/brincadeiras/oficina.png",
    target: "oficina",
  },
  {
    id: "linha",
    title: "Fios e linhas",
    text: "fios, nós e invenções",
    image: "/cards/brincadeiras/linha.png",
    target: "linha",
  },
  {
    id: "faz-de-conta",
    title: "Faz de conta",
    text: "mundos imaginários e histórias inventadas",
    image: "/cards/brincadeiras/faz-de-conta.png",
    target: "faz-de-conta",
  },
  {
    id: "construcoes",
    title: "Construções",
    text: "papelão, caixas e mundos inventados",
    image: "/cards/brincadeiras/construcoes.png",
    target: "construcoes",
  },
  {
    id: "natureza",
    title: "Natureza",
    text: "brincar com folhas, terra, água e vento",
    image: "/cards/brincadeiras/natureza.png",
    target: "natureza",
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
  "brincar-na-rua": {
    parent: "brincadeiras",
    title: "brincar na rua",
    poetic: "o lado de fora guarda aventuras que não cabem na tela.",
    image: "/cards/brincadeiras/brincar-na-rua.png",
    noteLabel: "convite",
    noteText: "saia sem pressa. o bairro também é um mapa.",
  },
  "brincar-sozinho": {
    parent: "brincadeiras",
    title: "brincar sozinho",
    poetic: "no silêncio, a imaginação cresce sem precisar de plateia.",
    image: "/cards/brincadeiras/brincar-sozinho.png",
    noteLabel: "convite",
    noteText: "ficar a sós também é companhia, quando há curiosidade.",
  },
  "dias-de-chuva": {
    parent: "brincadeiras",
    title: "dias de chuva",
    poetic: "quando a chuva bate na janela, a casa vira outro mundo.",
    image: "/cards/brincadeiras/dias-de-chuva.png",
    noteLabel: "convite",
    noteText: "luz baixa, passos lentos, brincadeiras que cabem no quarto.",
  },
  cozinha: {
    parent: "brincadeiras",
    title: "cozinha de descobertas",
    poetic: "misturar, cheirar e esperar ensina paciência nas mãos.",
    image: "/cards/brincadeiras/cozinha.png",
    noteLabel: "convite",
    noteText: "receitas simples, sem pressa e com adulto por perto.",
  },
  laboratorio: {
    parent: "brincadeiras",
    title: "laboratório curioso",
    poetic: "perguntas pequenas merecem experimentos suaves.",
    image: "/cards/brincadeiras/laboratorio.png",
    noteLabel: "convite",
    noteText: "observe o que muda devagar, sem querer explicar tudo.",
  },
  oficina: {
    parent: "brincadeiras",
    title: "oficina das mãos",
    poetic: "fazer com as próprias mãos deixa a tarde mais presente.",
    image: "/cards/brincadeiras/oficina.png",
    noteLabel: "convite",
    noteText: "ferramentas leves, materiais simples, tempo generoso.",
  },
  linha: {
    parent: "brincadeiras",
    title: "fios e linhas",
    poetic: "um fio pode virar caminho, laço ou história pendurada.",
    image: "/cards/brincadeiras/linha.png",
    noteLabel: "convite",
    noteText: "nós desajeitados também contam. tente de novo.",
  },
  "faz-de-conta": {
    parent: "brincadeiras",
    title: "faz de conta",
    poetic: "mundos inventados nascem de objetos comuns e voz baixa.",
    image: "/cards/brincadeiras/faz-de-conta.png",
    noteLabel: "convite",
    noteText: "deixe a criança conduzir a história, você só acompanha.",
  },
  construcoes: {
    parent: "brincadeiras",
    title: "construções",
    poetic: "caixas e papelão viram cidades que duram até o fim da tarde.",
    image: "/cards/brincadeiras/construcoes.png",
    noteLabel: "convite",
    noteText: "o que importa é montar e desmontar sem medo de errar.",
  },
  natureza: {
    parent: "brincadeiras",
    title: "brincar com a natureza",
    poetic: "folhas, terra, água e vento são brinquedos antigos e generosos.",
    image: "/cards/brincadeiras/natureza.png",
    noteLabel: "convite",
    noteText: "volte sujo de terra e cheio de histórias pequenas.",
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
  papelaria: {
    parent: "atelie",
    title: "papelaria",
    poetic: "coleções afetivas para tocar, cheirar e guardar perto.",
    image: "/cards/atelie/papelaria.png",
    noteLabel: "ateliê",
    noteText: "papel também guarda memória quando se escolhe com carinho.",
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

        {isSimpleSubScreen(screen) && (
          <SimpleSubPage
            setScreen={setScreen}
            content={subPageData[screen]}
            backLabel={parentLabels[subPageData[screen].parent]}
          />
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