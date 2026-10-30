/**
 * LANGUAGE SWITCHER
 * ------------------------------------------------------------------
 * A small popover, not a <details> element: the trigger needs to close
 * on outside click, on Escape, and on selection, which <details> does
 * not handle without extra listeners anyway.
 *
 * The current locale is always visible on the trigger, so the control
 * reads as "EN ▾" rather than as a mystery globe.
 */

import { useEffect, useRef, useState } from 'react'
import { useI18n, LOCALE_LABEL, LOCALE_SHORT, LOCALES, HTML_LANG } from '../../i18n'
import { Globe, Check } from '../ui/Icons'

interface LanguageSwitcherProps {
  /** 'header' sits in the tool row; 'menu' sits in the mobile panel footer. */
  variant?: 'header' | 'menu'
}

export function LanguageSwitcher({ variant = 'header' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  /* Close on outside click and on Escape. */
  useEffect(() => {
    if (!open) return

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const choose = (next: (typeof LOCALES)[number]) => {
    setLocale(next)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const label = LOCALE_SHORT[locale]

  return (
    <div className={`lang ${variant === 'menu' ? 'lang--menu' : ''}`} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="lang__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.switcherAria', { language: LOCALE_LABEL[locale] })}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe width={15} height={15} />
        <span className="lang__code" aria-hidden="true">
          {label}
        </span>
        <span className={`lang__chevron ${open ? 'is-open' : ''}`} aria-hidden="true" />
      </button>

      <div className={`lang__panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <p className="lang__title" id="lang-panel-title">
          {t('lang.groupAria')}
        </p>
        <ul role="listbox" aria-labelledby="lang-panel-title" aria-label={t('lang.menuAria')}>
          {LOCALES.map((code) => {
            const active = code === locale
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`lang__option ${active ? 'is-active' : ''}`}
                  lang={HTML_LANG[code]}
                  onClick={() => choose(code)}
                  /* Keep keyboard users inside the panel while it is open. */
                  tabIndex={open ? 0 : -1}
                >
                  <span className="lang__option-name">{LOCALE_LABEL[code]}</span>
                  <span className="lang__option-code">{LOCALE_SHORT[code]}</span>
                  {active && <Check width={13} height={13} className="lang__check" />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
