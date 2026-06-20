import { AtelierGoodCard } from "./atelierGoodCard"
import { EditorialDecor } from "./components/EditorialDecor"
import { editorialDecorAtelierTop } from "./data/editorialDecorPresets"
import { getAtelierCatalogSections, type AtelierGood } from "./atelierShopData"
import { styles } from "./styles/appStyles"

const atelierCategories = [
  { id: "atelier-figurinhas", label: "Figurinhas" },
  { id: "atelier-papelaria", label: "Papelaria" },
  { id: "atelier-colecoes", label: "Colecionáveis" },
  { id: "atelier-especiais", label: "Edições Especiais" },
] as const

type SetScreen = (screen: string) => void

function scrollToAtelierSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}

export function AtelierShopPage({
  setScreen,
  box,
  onAddToBox,
  onOpenProduct,
}: {
  setScreen: SetScreen
  box: AtelierGood[]
  onAddToBox: (good: AtelierGood) => void
  onOpenProduct: (good: AtelierGood) => void
}) {
  const catalog = getAtelierCatalogSections()

  return (
    <section style={styles.subPage}>
      <div style={styles.atelierIntroArea}>
        <EditorialDecor items={editorialDecorAtelierTop} />

        <div style={styles.editorialDecorContent}>
          <header style={styles.pageHeroBlock}>
            <p style={styles.atelierFichaKicker}>complementos das fichas</p>
            <h1 style={styles.pageHeroTitle}>Ateliê</h1>
            <p style={styles.pageHeroPoetic}>
              Objetos que continuam o que as fichas começaram.
            </p>
            <p style={styles.pageHeroSubtitle}>
              Figurinhas, papelaria e colecionáveis — peças para acompanhar as
              descobertas.
            </p>
          </header>

          <nav
            style={styles.atelierCategoryNav}
            aria-label="Categorias do Ateliê"
          >
            {atelierCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                style={styles.atelierCategoryPill}
                onClick={() => scrollToAtelierSection(category.id)}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {catalog.map((section, index) => (
        <section
          key={section.id}
          id={`atelier-${section.id}`}
          style={{
            ...styles.atelierCatalogSection,
            ...(index === 0 ? styles.atelierCatalogSectionFirst : {}),
          }}
        >
          <h2 style={styles.atelierCatalogSectionTitle}>
            Fichas complemento — {section.title}
          </h2>

          <div style={styles.atelierCatalogStack}>
            {section.goods.map((good) => (
              <AtelierGoodCard
                key={good.id}
                good={good}
                inBox={box.some((item) => item.id === good.id)}
                onAddToBox={() => onAddToBox(good)}
                onOpenProduct={() => onOpenProduct(good)}
                onOpenPoetic={
                  good.poeticScreen
                    ? () => setScreen(good.poeticScreen!)
                    : undefined
                }
                poeticLinkLabel={good.poeticLinkLabel}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}
