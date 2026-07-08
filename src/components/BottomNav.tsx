import { bottomNavItems } from "../data/bottomNav"
import { bottomNavTheme } from "../data/bottomNavTheme"
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
    <nav className="bottom-nav" style={styles.bottomNav} aria-label="Navegação principal">
      {bottomNavItems.map((item) => {
        const isActive = active === item.screen

        return (
          <button
            key={item.screen}
            type="button"
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            onClick={() => setScreen(item.screen)}
            style={{
              ...styles.navButton,
              ...(isActive ? styles.navButtonActive : null),
            }}
            className="bottom-nav__button"
          >
            <span
              className={
                isActive
                  ? "bottom-nav__active-cluster"
                  : "bottom-nav__item-content"
              }
              style={
                isActive ? styles.navActiveCluster : styles.navItemContent
              }
            >
              {isActive ? (
                <span style={styles.navActiveCapsule} aria-hidden="true" />
              ) : null}

              <span className="bottom-nav__icon-wrap" style={styles.navIconWrap}>
                <span
                  className="bottom-nav__icon-frame"
                  style={{
                    ...styles.navIconFrame,
                    opacity: isActive ? 1 : 0.88,
                    transform: isActive ? "translateY(-1px) scale(1.03)" : "none",
                  }}
                >
                  <BottomNavIllustration id={item.illustration} active={isActive} />
                </span>
              </span>

              <span
                className={
                  isActive
                    ? "bottom-nav__label bottom-nav__label--active"
                    : "bottom-nav__label"
                }
                style={{
                  ...styles.navLabel,
                  color: isActive
                    ? bottomNavTheme.ink
                    : bottomNavTheme.inkInactive,
                  fontWeight: 500,
                  ...(isActive ? styles.navLabelActive : null),
                }}
                aria-hidden
              >
                {item.label}
              </span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}
