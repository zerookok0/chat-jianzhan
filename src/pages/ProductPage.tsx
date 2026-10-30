import { useState } from 'react'
import { formatPrice } from '../data/products'
import { useDocumentMeta, useReveal } from '../lib/hooks'
import { MediaImage, AppLink } from '../components/ui/Media'
import { BuyButton } from '../components/ui/BuyButton'
import { FavButton } from '../components/ui/FavButton'
import { Lightbox } from '../components/ui/Lightbox'
import { ProductCard } from '../components/ui/ProductCard'
import { ArrowRight, Expand } from '../components/ui/Icons'
import type { Product } from '../data/types'
import { useI18n } from '../i18n'
import { localisedProductBySlug, localisedRelated, localisedGlaze } from '../lib/content'

interface ProductPageProps {
  slug: string
  onQuickView: (p: Product) => void
}

export function ProductPage({ slug, onQuickView }: ProductPageProps) {
  const { t, locale } = useI18n()
  const product = localisedProductBySlug(slug, locale)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  useDocumentMeta(
    product
      ? (product.seoTitle ??
        t('meta.productTitle', {
          name: product.name,
          price: formatPrice(product.price, product.currency),
        }))
      : t('meta.productNotFound'),
    product ? (product.seoDescription ?? product.description.slice(0, 155)) : undefined,
  )
  useReveal([slug, locale])

  if (!product) {
    return (
      <div className="shell not-found-page">
        <p className="eyebrow">{t('prod.notFoundEyebrow')}</p>
        <h1 className="display display--lg">{t('prod.notFoundTitle')}</h1>
        <p className="body">{t('prod.notFoundBody')}</p>
        <AppLink href="/collection" className="btn btn--outline">
          {t('prod.notFoundCta')}
        </AppLink>
      </div>
    )
  }

  const related = localisedRelated(product, locale, 3)
  const glaze = localisedGlaze(product.glaze, locale)

  return (
    <div className="product-page" key={`${product.id}-${locale}`}>
      {/* Breadcrumb */}
      <nav className="breadcrumb shell" aria-label={t('common.breadcrumb')}>
        <AppLink href="/">{t('common.home')}</AppLink>
        <span aria-hidden="true">/</span>
        <AppLink href="/collection">{t('common.collection')}</AppLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <div className="shell product-layout">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="product-gallery__main">
            <button
              type="button"
              className="product-gallery__open"
              onClick={() => setLightbox(activeImage)}
              aria-label={t('prod.openImage', {
                name: product.name,
                index: activeImage + 1,
              })}
            >
              <MediaImage
                image={product.images[activeImage]}
                alt={t('prod.imageAlt', {
                  name: product.name,
                  subtitle: product.subtitle,
                  index: activeImage + 1,
                })}
                ratio={1}
                sizes="(min-width: 1024px) 52vw, 92vw"
                priority
                showFallbackNote
              />
              <span className="product-gallery__zoom" aria-hidden="true">
                <Expand width={14} height={14} /> {t('prod.zoom')}
              </span>
            </button>
          </div>

          <div className="product-gallery__thumbs" role="tablist" aria-label={t('prod.thumbsAria')}>
            {product.images.map((im, i) => (
              <button
                key={im + i}
                type="button"
                role="tab"
                aria-selected={i === activeImage}
                aria-label={t('prod.showImage', { index: i + 1 })}
                className={`product-gallery__thumb ${i === activeImage ? 'is-active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <MediaImage image={im} alt="" ratio={1} sizes="120px" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="product-info">
          <div className="product-info__head">
            <div>
              <p className="eyebrow">
                {t(`avail.${product.availability}`)} · {product.year}
              </p>
              <h1 className="display display--lg product-info__title">{product.name}</h1>
              <p className="serif-italic product-info__sub">{product.subtitle}</p>
            </div>
            <FavButton productId={product.id} productName={product.name} />
          </div>

          <div className="product-info__price-row">
            <p className="product-info__price">{formatPrice(product.price, product.currency)}</p>
            <p className="meta">{t('prod.duties')}</p>
          </div>

          <p className="body product-info__desc">{product.description}</p>

          <BuyButton product={product} />

          <div className="product-info__meta">
            <AppLink href={`/collection?glaze=${product.glaze}`} className="tag">
              {glaze?.name ?? product.glaze}
            </AppLink>
            <span className="tag">{t(`cat.${product.category}`)}</span>
            <span className="tag">{t('prod.singleFiring')}</span>
          </div>

          {/* Specifications */}
          <section className="product-specs" aria-labelledby="specs-title">
            <h2 id="specs-title" className="eyebrow">
              {t('prod.specs')}
            </h2>
            <dl className="specs">
              {product.specifications.map((s) => (
                <div key={s.label} className="specs__row">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Accordions */}
          <div className="accordions">
            <details className="accordion" open>
              <summary>{t('prod.making')}</summary>
              <div className="accordion__body">
                <p>{t('prod.makingBody')}</p>
              </div>
            </details>

            <details className="accordion">
              <summary>{t('prod.careTitle')}</summary>
              <div className="accordion__body">
                <p>{t('prod.careBody')}</p>
              </div>
            </details>

            <details className="accordion">
              <summary>{t('prod.shippingTitle')}</summary>
              <div className="accordion__body">
                <p>{t('prod.shippingBody')}</p>
              </div>
            </details>

            <details className="accordion">
              <summary>{t('prod.packagingTitle')}</summary>
              <div className="accordion__body">
                <p>{t('prod.packagingBody')}</p>
              </div>
            </details>

            <details className="accordion">
              <summary>{t('prod.characteristicsTitle')}</summary>
              <div className="accordion__body">
                <p>{t('prod.characteristicsBody')}</p>
              </div>
            </details>
          </div>

          <p className="product-info__disclaimer">{t('prod.disclaimer')}</p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="section related" aria-labelledby="related-title">
          <div className="shell">
            <header className="section-head">
              <div>
                <p className="eyebrow">{t('prod.relatedEyebrow')}</p>
                <h2 id="related-title" className="display display--md">
                  {t('prod.relatedTitle')}
                </h2>
              </div>
              <AppLink href="/collection" className="btn section-head__link">
                {t('common.allPieces')}
                <ArrowRight width={16} height={16} className="btn__arrow" />
              </AppLink>
            </header>
            <div className="card-grid">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Lightbox
        images={product.images}
        alts={product.images.map((_, i) =>
          t('prod.imageAlt', { name: product.name, subtitle: product.subtitle, index: i + 1 }),
        )}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(i) => {
          setLightbox(i)
          setActiveImage(i)
        }}
      />
    </div>
  )
}
