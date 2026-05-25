import { useState } from "react"
import "./fonts.css"

type Screen = "home" | "descobertas" | "brincadeiras" | "atelie" | "clube"

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
    intro: "um cantinho especial para quem faz parte desse universo.",
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
  },
  {
    id: "minhas-descobertas",
    title: "Minhas descobertas",
    text: "pequenas coisas que já foram guardadas",
    image: "/cards/descobertas/minhas-descobertas.png",
  },
  {
    id: "colecoes",
    title: "Coleções",
    text: "folhas, flores, pedras, sementes...",
    image: "/cards/descobertas/colecoes.png",
  },
  {
    id: "tesouros",
    title: "Tesouros",
    text: "achados especiais que aparecem de vez em quando",
    image: "/cards/descobertas/tesouros.png",
  },
]

const playCards: CardItem[] = [
  {
    id: "brincar-na-rua",
    title: "Brincar na rua",
    text: "aventuras do lado de fora",
    image: "/cards/brincadeiras/brincar-na-rua.png",
  },
  {
    id: "brincar-sozinho",
    title: "Brincar sozinho",
    text: "imaginação e silêncio",
    image: "/cards/brincadeiras/brincar-sozinho.png",
  },
  {
    id: "dias-de-chuva",
    title: "Dias de chuva",
    text: "brincadeiras para dentro de casa",
    image: "/cards/brincadeiras/dias-de-chuva.png",
  },
  {
    id: "cozinha",
    title: "Cozinha",
    text: "misturas e descobertas",
    image: "/cards/brincadeiras/cozinha.png",
  },
  {
    id: "laboratorio",
    title: "Laboratório",
    text: "experiências suaves e curiosas",
    image: "/cards/brincadeiras/laboratorio.png",
  },
  {
    id: "oficina",
    title: "Oficina",
    text: "coisas feitas com as mãos",
    image: "/cards/brincadeiras/oficina.png",
  },
  {
    id: "linha",
    title: "Experimentos com linha",
    text: "fios, nós e invenções",
    image: "/cards/brincadeiras/linha.png",
  },
  {
    id: "faz-de-conta",
    title: "Faz de conta",
    text: "mundos imaginários e histórias inventadas",
    image: "/cards/brincadeiras/faz-de-conta.png",
  },
  {
    id: "construcoes",
    title: "Construções",
    text: "papelão, caixas e mundos inventados",
    image: "/cards/brincadeiras/construcoes.png",
  },
  {
    id: "natureza",
    title: "Natureza",
    text: "brincar com folhas, terra, água e vento",
    image: "/cards/brincadeiras/natureza.png",
  },
]

const atelierCards: CardItem[] = [
  {
    id: "papel-de-carta",
    title: "Papel de carta",
    text: "folhas delicadas para escrever e guardar",
    image: "/cards/atelie/papel-de-carta.png",
  },
  {
    id: "album",
    title: "Álbum de figurinhas",
    text: "coleções para completar devagar",
    image: "/cards/atelie/album.png",
  },
  {
    id: "bonequinhas",
    title: "Bonequinhas da Teca",
    text: "personagens, roupinhas e recortes",
    image: "/cards/atelie/bonequinhas.png",
  },
  {
    id: "origami",
    title: "Origami",
    text: "dobras simples e poéticas",
    image: "/cards/atelie/origami.png",
  },
  {
    id: "imprimiveis",
    title: "Imprimíveis",
    text: "atividades e materiais para imprimir",
    image: "/cards/atelie/imprimiveis.png",
  },
  {
    id: "cartoes",
    title: "Cartões",
    text: "pequenas mensagens para entregar",
    image: "/cards/atelie/cartoes.png",
  },
  {
    id: "adesivos",
    title: "Adesivos",
    text: "detalhes para decorar cartas e diários",
    image: "/cards/atelie/adesivos.png",
  },
  {
    id: "carimbos",
    title: "Carimbos",
    text: "marcas, símbolos e selos do universo",
    image: "/cards/atelie/carimbos.png",
  },
  {
    id: "bau",
    title: "Baú da Teca",
    text: "um lugar para guardar tesouros de verdade",
    image: "/cards/atelie/bau.png",
  },
  {
    id: "papelaria",
    title: "Papelaria",
    text: "coleções afetivas para tocar e guardar",
    image: "/cards/atelie/papelaria.png",
  },
]

const clubCards: CardItem[] = [
  {
    id: "carteirinha",
    title: "Carteirinha",
    text: "a entrada oficial no Clube da Teca",
    image: "/cards/clube/carteirinha.png",
  },
  {
    id: "correio",
    title: "Correio da Teca",
    text: "cartinhas e pequenas surpresas",
    image: "/cards/clube/correio.png",
  },
  {
    id: "conquistas",
    title: "Conquistas",
    text: "pequenas marcas do caminho",
    image: "/cards/clube/conquistas.png",
  },
  {
    id: "colecoes",
    title: "Coleções especiais",
    text: "tesouros para membros do clube",
    image: "/cards/clube/colecoes.png",
  },
  {
    id: "assinatura",
    title: "Assinatura",
    text: "conteúdos e vantagens desbloqueadas",
    image: "/cards/clube/assinatura.png",
  },
  {
    id: "vantagens",
    title: "Vantagens",
    text: "benefícios para quem faz parte",
    image: "/cards/clube/vantagens.png",
  },
]

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
          />
        )}

        {screen === "brincadeiras" && (
          <Page
            data={pageData.brincadeiras}
            cards={playCards}
          />
        )}

        {screen === "atelie" && (
          <Page
            data={pageData.atelie}
            cards={atelierCards}
          />
        )}

        {screen === "clube" && (
          <ClubPage
            data={pageData.clube}
            cards={clubCards}
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
}: {
  data: { title: string; intro: string; cover: string }
  cards: CardItem[]
}) {
  return (
    <>
      <PageCover data={data} />

      <section style={styles.pageContent}>
        <h1 style={styles.pageTitle}>{data.title}</h1>
        <p style={styles.pageIntro}>{data.intro}</p>

        <div style={styles.gridTwo}>
          {cards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </>
  )
}

function ClubPage({
  data,
  cards,
}: {
  data: { title: string; intro: string; cover: string }
  cards: CardItem[]
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
            <FeatureCard key={card.id} card={card} />
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
    height: "100%",
    objectFit: "cover",
    display: "block",
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
    fontSize: "56px",
    lineHeight: "0.95",
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
