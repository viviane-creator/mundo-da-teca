import { useAuth, userDisplayName } from "../auth/authContext"
import { styles } from "../styles/appStyles"

export function AccountModal() {
  const { accountModalOpen, closeAccount, user, logout } = useAuth()

  if (!accountModalOpen || !user) return null

  const greeting = userDisplayName(user)
    ? `Olá, ${userDisplayName(user)}`
    : "Minha Conta"

  return (
    <div
      style={styles.authOverlay}
      role="presentation"
      onClick={closeAccount}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-modal-title"
        style={styles.authModal}
        onClick={(event) => event.stopPropagation()}
      >
        <span aria-hidden style={styles.authModalSpine} />
        <p style={styles.authModalKicker}>minha conta</p>
        <h2 id="account-modal-title" style={styles.authModalTitle}>
          {greeting}
        </h2>
        <p style={styles.authModalText}>{user.email}</p>

        <div style={styles.authActions}>
          <button
            type="button"
            onClick={closeAccount}
            style={styles.authButtonSecondary}
          >
            Fechar
          </button>
          <button
            type="button"
            onClick={logout}
            style={styles.authButtonPrimary}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}
