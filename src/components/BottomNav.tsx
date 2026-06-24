import { bottomNavItems } from "../data/bottomNav"
import { styles } from "../styles/appStyles"
import { BottomNavIllustration } from "./BottomNavIllustration"

export function BottomNav({
  active,
  setScreen,
}: {
  active: string
  setScreen: (screen: string) => void
}) {
  return (
    <nav style={styles.bottomNav} aria-label="Navegação principal">
      {bottomNavItems.map((item) => {
        const isActive = active === item.screen

        return (
          <button
            key={item.screen}
            type="button"
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            onClick={() => setScreen(item.screen)}
            style={styles.navButton}
          >
            <span style={styles.navIconWrap}>
              {isActive ? (
                <span
                  style={{
                    ...styles.navActiveHalo,
                    background: `radial-gradient(circle, ${item.activeTint}40 0%, ${item.activeTint}22 48%, transparent 72%)`,
                  }}
                  aria-hidden
                />
              ) : null}
              <span
                style={{
                  ...styles.navIconFrame,
                  opacity: isActive ? 1 : 0.58,
                  transform: isActive ? "translateY(-1px) scale(1.04)" : "none",
                }}
              >
                <BottomNavIllustration id={item.illustration} />
              </span>
            </span>
            <span
              style={{
                ...styles.navLabel,
                opacity: isActive ? 0.62 : 0.28,
              }}
              aria-hidden
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
