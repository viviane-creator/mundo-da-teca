import { navItems } from "../data/navigation"
import { styles } from "../styles/appStyles"

export function BottomNav({
  active,
  setScreen,
}: {
  active: string
  setScreen: (screen: string) => void
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
                color: isActive ? "#c88757" : "#7a6858",
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
