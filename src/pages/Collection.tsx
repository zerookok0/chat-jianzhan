import { useEffect, useMemo, useState } from 'react'
import { formatPrice } from '../data/products'
import { useDocumentMeta, useReveal, useRoute } from '../lib/hooks'
import { ProductCard } from '../components/ui/ProductCard'
import { MediaImage, AppLink } from '../components/ui/Media'
import { visual } from '../styles/visual'
import { Close, ArrowRight } from '../components/ui/Icons'
import { site } from '../data/site'
import type { Product, CategoryId, GlazeId } from '../data/types'
import { useI18n } from '../i18n'
import { localisedProducts, localisedGlazes, localisedCategories } from '../lib/content'

type SortKey = 'curated' | 'price-asc' | 'price-desc' | 'newest'

interface CollectionProps {
  onQuickView: (p: Product) => void
}

const PAGE = 9

export function Collection({ onQuickView }: CollectionProps) {
  const { t, locale } = useI18n()

  useDocumentMeta(t('meta.collectionTitle'), t('meta.collectionDesc'))
  useReveal()

  const route = useRoute()
  const [glazeFilter, setGlazeFilter] = useState<GlazeId | 'all'>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>('all')
  const [sort, setSort] = useState<SortKey>('curated')
  const [visible, setVisible] = useState(PAGE)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const products = useMemo(() => localisedProducts(locale), [locale])
  const glazes = useMemo(() => localisedGlazes(locale), [locale])
  const categories = useMemo(() => localisedCategories(locale), [locale])

  /* Honour ?glaze= from the home page explorer */
  useEffect(() => {
    const g = route.query.get('glaze')
    if (g) setGlazeFilter(g as GlazeId)
  }, [route.query])

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (glazeFilter === 'all' || p.glaze === glazeFilter) &&
        (categoryFilter === 'all' || p.category === categoryFilter),
    )
    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'newest':
        return [...list].sort((a, b) => Number(b.year) - Number(a.year))
      default:
        return [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }
  }, [products, glazeFilter, categoryFilter, sort])

  const shown = filtered.slice(0, visible)
  const activeCount = (glazeFilter === 'all' ? 0 : 1) + (categoryFilter === 'all' ? 0 : 1)

  const reset = () => {
    setGlazeFilter('all')
    setCategoryFilter('all')
    setSort('curated')
    setVisible(PAGE)
  }

  return (
    <div className="collection-page">
      <header className="collection-hero" aria-labelledby="collection-title">
        <div className="collection-hero__media" aria-hidden="true">
          <img src={visual.collectionHero} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="shell collection-hero__inner">
          <p className="eyebrow reveal">{t('coll.eyebrow')}</p>
          <h1
            id="collection-title"
            className="display display--lg collection-hero__title reveal"
            data-delay="1"
          >
            {t('coll.title1')}
            <br />
            {t('coll.title2')}
          </h1>
          <p className="lede reveal" data-delay="2">
            {t('coll.lede')}
          </p>
          <dl className="collection-hero__facts reveal" data-delay="3">
            <div>
              <dt>{t('coll.factPieces')}</dt>
              <dd>{products.length}</dd>
            </div>
            <div>
              <dt>{t('coll.factGlazes')}</dt>
              <dd>{glazes.length}</dd>
            </div>
            <div>
              <dt>{t('coll.factFrom')}</dt>
              <dd>{formatPrice(Math.min(...products.map((p) => p.price)))}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="shell collection-body">
        <div className="collection-toolbar">
          <button
            type="button"
            className="chip collection-toolbar__toggle"
            aria-expanded={filtersOpen}
            aria-controls="collection-filters"
            onClick={() => setFiltersOpen((v) => !v)}
          >
            {activeCount > 0
              ? t('coll.filtersCount', { count: activeCount })
              : t('coll.filters')}
          </button>

          <p className="collection-toolbar__count" role="status" aria-live="polite">
            {filtered.length === 1
              ? t('coll.count', { count: filtered.length })
              : t('coll.countPlural', { count: filtered.length })}
          </p>

          <div className="collection-toolbar__sort">
            <label htmlFor="sort" className="meta">
              {t('coll.sort')}
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortKey)
                setVisible(PAGE)
              }}
              className="select"
            >
              <option value="curated">{t('coll.sortCurated')}</option>
              <option value="newest">{t('coll.sortNewest')}</option>
              <option value="price-asc">{t('coll.sortPriceAsc')}</option>
              <option value="price-desc">{t('coll.sortPriceDesc')}</option>
            </select>
          </div>
        </div>

        <div id="collection-filters" className={`collection-filters ${filtersOpen ? 'is-open' : ''}`}>
          <div className="filter-group">
            <p className="eyebrow">{t('coll.glaze')}</p>
            <div className="chip-row">
              <button
                type="button"
                className={`chip ${glazeFilter === 'all' ? 'is-active' : ''}`}
                aria-pressed={glazeFilter === 'all'}
                onClick={() => {
                  setGlazeFilter('all')
                  setVisible(PAGE)
                }}
              >
                {t('coll.all')}
              </button>
              {glazes.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={`chip ${glazeFilter === g.id ? 'is-active' : ''}`}
                  aria-pressed={glazeFilter === g.id}
                  onClick={() => {
                    setGlazeFilter(g.id)
                    setVisible(PAGE)
                  }}
                >
                  {g.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <p className="eyebrow">{t('coll.category')}</p>
            <div className="chip-row">
              <button
                type="button"
                className={`chip ${categoryFilter === 'all' ? 'is-active' : ''}`}
                aria-pressed={categoryFilter === 'all'}
                onClick={() => {
                  setCategoryFilter('all')
                  setVisible(PAGE)
                }}
              >
                {t('coll.all')}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip ${categoryFilter === c.id ? 'is-active' : ''}`}
                  aria-pressed={categoryFilter === c.id}
                  onClick={() => {
                    setCategoryFilter(c.id)
                    setVisible(PAGE)
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {activeCount > 0 && (
            <button type="button" className="btn btn--link collection-filters__reset" onClick={reset}>
              {t('coll.clear')}
              <Close width={12} height={12} />
            </button>
          )}
        </div>

        {activeCount > 0 && (
          <div className="active-filters" aria-live="polite">
            {glazeFilter !== 'all' && (
              <button
                type="button"
                className="tag tag--removable"
                onClick={() => setGlazeFilter('all')}
              >
                {glazes.find((g) => g.id === glazeFilter)?.name}
                <Close width={10} height={10} />
              </button>
            )}
            {categoryFilter !== 'all' && (
              <button
                type="button"
                className="tag tag--removable"
                onClick={() => setCategoryFilter('all')}
              >
                {categories.find((c) => c.id === categoryFilter)?.label}
                <Close width={10} height={10} />
              </button>
            )}
          </div>
        )}

        {shown.length > 0 ? (
          <div className="card-grid card-grid--collection">
            {shown.map((p, i) => (
              <ProductCard key={p.id} product={p} onQuickView={onQuickView} index={i} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="display display--sm">{t('coll.emptyTitle')}</p>
            <p className="body">{t('coll.emptyBody', { count: products.length })}</p>
            <button type="button" className="btn btn--outline" onClick={reset}>
              {t('coll.emptyCta')}
            </button>
          </div>
        )}

        {visible < filtered.length && (
          <div className="collection-more">
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => setVisible((v) => v + PAGE)}
            >
              {t('coll.loadMore', { count: filtered.length - visible })}
            </button>
          </div>
        )}

        <aside className="collection-note">
          <MediaImage
            image="kiln-studio"
            alt={t('coll.noteAlt')}
            ratio={16 / 9}
            sizes="92vw"
          />
          <div className="collection-note__body">
            <p className="eyebrow">{t('coll.noteEyebrow')}</p>
            <p className="body">{t('coll.noteBody')}</p>
            <AppLink href={`mailto:${site.email}`} className="btn collection-note__link">
              {t('coll.noteCta')}
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </div>
        </aside>
      </div>
    </div>
  )
}
