import { useEffect, useMemo, useRef, useState } from 'react'
import { formatPrice } from '../../data/products'
import { useEscape, useScrollLock } from '../../lib/hooks'
import { navigate } from '../../lib/hooks'
import { Close, Search } from '../ui/Icons'
import { MediaImage } from '../ui/Media'
import { useI18n } from '../../i18n'
import { localisedProducts, localisedPosts } from '../../lib/content'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

/** Lightweight client-side search across pieces and journal entries. */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const { t, locale } = useI18n()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  useScrollLock(open)
  useEscape(open, onClose)

  useEffect(() => {
    if (open) {
      setQuery('')
      const timer = window.setTimeout(() => inputRef.current?.focus(), 60)
      return () => window.clearTimeout(timer)
    }
  }, [open])

  const q = query.trim().toLowerCase()

  const productHits = useMemo(() => {
    const products = localisedProducts(locale)
    if (!q) return products.slice(0, 3)
    return products
      .filter((p) =>
        [p.name, p.subtitle, p.glaze, p.description, p.category].join(' ').toLowerCase().includes(q),
      )
      .slice(0, 5)
  }, [q, locale])

  const postHits = useMemo(() => {
    if (!q) return []
    return localisedPosts(locale)
      .filter((p) => `${p.title} ${p.excerpt} ${p.kicker}`.toLowerCase().includes(q))
      .slice(0, 3)
  }, [q, locale])

  if (!open) return null

  return (
    <div className="search" role="dialog" aria-modal="true" aria-label={t('search.dialog')}>
      <div className="search__head">
        <Search width={18} height={18} />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          aria-label={t('search.inputAria')}
          className="search__input"
        />
        <button type="button" className="icon-btn" onClick={onClose} aria-label={t('search.close')}>
          <Close width={18} height={18} />
        </button>
      </div>

      <div className="search__results">
        <p className="eyebrow">{q ? t('search.pieces') : t('search.selected')}</p>
        {productHits.length === 0 && (
          <p className="search__empty">{t('search.empty', { query })}</p>
        )}
        <ul className="search__list">
          {productHits.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className="search__item"
                onClick={() => {
                  onClose()
                  navigate(`/collection/${p.slug}`)
                }}
              >
                <MediaImage image={p.images[0]} alt="" ratio={1} sizes="56px" className="search__thumb" />
                <span className="search__item-text">
                  <span className="search__item-name">{p.name}</span>
                  <span className="search__item-sub">{p.subtitle}</span>
                </span>
                <span className="search__item-price">{formatPrice(p.price, p.currency)}</span>
              </button>
            </li>
          ))}
        </ul>

        {postHits.length > 0 && (
          <>
            <p className="eyebrow search__group">{t('search.journal')}</p>
            <ul className="search__list">
              {postHits.map((post) => (
                <li key={post.slug}>
                  <button
                    type="button"
                    className="search__item"
                    onClick={() => {
                      onClose()
                      navigate(`/journal/${post.slug}`)
                    }}
                  >
                    <span className="search__item-text">
                      <span className="search__item-name">{post.title}</span>
                      <span className="search__item-sub">{post.kicker}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
