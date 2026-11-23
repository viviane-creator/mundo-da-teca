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
      <p className="clx-black-banner__ship">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path
            d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7 18.5a1.5 1.5 0 1 0 0-.01M17 18.5a1.5 1.5 0 1 0 0-.01"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        {blackPromo.freeShipping}
      </p>
      <p className="clx-black-banner__note">{blackPromo.note}</p>
    </aside>
  )
}
