import { blackPromo, formatBRL, isBlackPromoActive } from "../../config/blackPromo"

/** Faixa da Black no topo da landing — some sozinha depois de `blackPromo.endsAt`. */
export function BlackPromoBanner() {
  if (!isBlackPromoActive()) return null

  return (
    <aside className="clx-black-banner" aria-label={blackPromo.title}>
      <p className="clx-black-banner__title">
        {blackPromo.title} · {blackPromo.until}
      </p>
      <p className="clx-black-banner__lead">
        De <s>{formatBRL(blackPromo.regularBRL)}</s> por{" "}
        <strong>{formatBRL(blackPromo.promoBRL)}</strong>
      </p>
      <p className="clx-black-banner__note">{blackPromo.note}</p>
    </aside>
  )
}
