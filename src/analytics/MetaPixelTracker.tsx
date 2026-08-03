import { useEffect, useRef } from "react"
import { appRoutes } from "../navigation/appRoutes"
import { isCaixaLaboratorioPath } from "../navigation/caixaLaboratorioNavigation"
import {
  initMetaPixel,
  trackMetaPageView,
  trackMetaViewContent,
} from "./metaPixel"

type MetaPixelTrackerProps = {
  screen: string
}

function readNormalizedPath(): string {
  return window.location.pathname.replace(/\/$/, "") || "/"
}

/**
 * Dispara PageView nas mudanças de rota da SPA e ViewContent na landing da caixa.
 * Deve ficar dentro de AppContent, após a sincronização de URL do App.
 */
export function MetaPixelTracker({ screen }: MetaPixelTrackerProps) {
  const lastPageViewPathRef = useRef<string | null>(null)
  const wasOnCaixaRef = useRef(false)

  useEffect(() => {
    let cancelled = false

    void initMetaPixel().then(() => {
      if (cancelled) return

      const path = readNormalizedPath()

      if (lastPageViewPathRef.current !== path) {
        trackMetaPageView()
        lastPageViewPathRef.current = path
      }

      const onCaixa =
        screen === appRoutes.caixaLaboratorio || isCaixaLaboratorioPath(path)

      if (onCaixa && !wasOnCaixaRef.current) {
        trackMetaViewContent()
      }

      wasOnCaixaRef.current = onCaixa
    })

    return () => {
      cancelled = true
    }
  }, [screen])

  return null
}
