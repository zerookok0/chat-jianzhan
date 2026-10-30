import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider } from './lib/hooks'
import { I18nProvider } from './i18n'
import {
  resolveByGeo,
  resolveInitialLocale,
  GEO_COOKIE_SETTLED,
  readCookie,
  type ResolvedLocale,
} from './lib/locale'

import './styles/global.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/pages.css'
import './styles/policy.css'
import './styles/refine.css'
import './styles/i18n.css'

/**
 * BOOTSTRAP
 * ------------------------------------------------------------------
 * The first paint must already be in the right language, so the initial
 * locale is resolved synchronously from what is already on disk
 * (manual choice → navigator.language → default).
 *
 * IP detection runs after mount and only when the visitor has never made
 * a choice; a stored choice is never overridden. Failure or a 3s timeout
 * leaves the synchronous result in place — the page never waits on it,
 * and nothing is thrown if the lookup dies.
 */

/**
 * One lookup per page load, shared across React's double-invoked effects.
 * Without this, StrictMode in development fires the request twice.
 */
let geoAttempt: Promise<ResolvedLocale | null> | null = null

function resolveGeoOnce(): Promise<ResolvedLocale | null> {
  if (!geoAttempt) geoAttempt = resolveByGeo()
  return geoAttempt
}

function Root() {
  const [initial] = useState(() => resolveInitialLocale())

  /*
   * A single state object, so the locale and its provenance can never drift
   * apart: whenever the geo result lands, both move together.
   */
  const [{ locale, auto }, setResolution] = useState<ResolvedLocale>(initial)

  useEffect(() => {
    /* A settled cookie means geo has already been decided for this visitor. */
    if (readCookie(GEO_COOKIE_SETTLED)) return

    let cancelled = false

    resolveGeoOnce()
      .then((resolved) => {
        if (cancelled || !resolved) return
        setResolution((current) =>
          current.locale === resolved.locale && current.auto === resolved.auto ? current : resolved,
        )
      })
      .catch(() => {
        /* Detection is best-effort; the synchronous locale stays. */
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <I18nProvider initialLocale={locale} autoDetected={auto}>
      <RouterProvider>
        <App />
      </RouterProvider>
    </I18nProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
