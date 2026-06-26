import { useAuth, topAccessLabel } from "../auth/authContext"
import { styles } from "../styles/appStyles"

export function TopAccessLink() {
  const { isAuthenticated, user, openLogin, openAccount } = useAuth()
  const label = topAccessLabel(user, isAuthenticated)

  return (
    <button
      type="button"
      className="top-access-link"
      style={styles.topAccessLink}
      onClick={() => (isAuthenticated ? openAccount() : openLogin())}
      aria-label={isAuthenticated ? "Minha conta" : "Entrar"}
    >
      {label}
    </button>
  )
}
