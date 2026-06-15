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
        const isSecondary = item.secondary === true

        return (
          <button
            key={item.screen}
            onClick={() => setScreen(item.screen)}
            style={{
              ...styles.navButton,
              ...(isSecondary ? styles.navButtonSecondary : {}),
            }}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                ...styles.navIcon,
                ...(isSecondary ? styles.navIconSecondary : {}),
                opacity: isActive ? 1 : isSecondary ? 0.5 : 0.62,
                transform: isActive ? "translateY(-2px)" : "none",
              }}
            />

            <span
              style={{
                ...styles.navLabel,
                ...(isSecondary ? styles.navLabelSecondary : {}),
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
