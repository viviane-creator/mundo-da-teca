import { styles } from "../../styles/appStyles"

/** Teca — anfitriã institucional; recebe as famílias na Home */
export function HomeTecaHostess() {
  return (
    <div style={styles.homeTecaHostessFrame}>
      <img
        src="/images/teca.webp"
        alt="Teca, anfitriã do Mundo da Teca"
        width={240}
        height={240}
        loading="lazy"
        decoding="async"
        style={styles.homeTecaHostessImage}
      />
    </div>
  )
}
