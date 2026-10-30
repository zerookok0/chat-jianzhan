import { useState } from 'react'
import { getProduct, getRelated, getGlaze, formatPrice, availabilityLabels } from '../data/products'
import { sortImages } from '../data/images'
import { useDocumentMeta, useReveal } from '../lib/hooks'
import { MediaImage, AppLink } from '../components/ui/Media'
import { BuyButton } from '../components/ui/BuyButton'
import { FavButton } from '../components/ui/FavButton'
import { Lightbox } from '../components/ui/Lightbox'
import { ProductCard } from '../components/ui/ProductCard'
import { ArrowRight, Expand } from '../components/ui/Icons'
import type { Product } from '../data/types'

interface ProductPageProps {
  slug: string
  onQuickView: (p: Product) => void
}

export function ProductPage({ slug, onQuickView }: ProductPageProps) {
  const product = getProduct(slug)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  useDocumentMeta(
    product ? `${product.name} — ${formatPrice(product.price, product.currency)} | JIANZHAN` : 'Piece not found | JIANZHAN',
    product?.description.slice(0, 155),
  )
  useReveal([slug])

  if (!product) {
    return (
      <div className="shell not-found-page">
        <p className="eyebrow">Not Found</p>
        <h1 className="display display--lg">This piece is no longer listed</h1>
        <p className="body">
          It may have been archived or moved. The current catalogue is the best place to look next.
        </p>
        <AppLink href="/collection" className="btn btn--outline">
          Back to the collection
        </AppLink>
      </div>
    )
  }

  const related = getRelated(product, 3)
  const glaze = getGlaze(product.glaze)
  const images = sortImages(product.images)

  return (
    <div className="product-page" key={product.id}>
      {/* Breadcrumb */}
      <nav className="breadcrumb shell" aria-label="Breadcrumb">
        <AppLink href="/">Home</AppLink>
        <span aria-hidden="true">/</span>
        <AppLink href="/collection">Collection</AppLink>
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
              aria-label={`Open ${product.name} image ${activeImage + 1} full screen`}
            >
              <MediaImage
                image={images[activeImage]}
                alt={`${product.name} — ${product.subtitle}, view ${activeImage + 1}`}
                ratio={1}
                sizes="(min-width: 1024px) 52vw, 92vw"
                priority
                showFallbackNote
              />
              <span className="product-gallery__zoom" aria-hidden="true">
                <Expand width={14} height={14} /> Zoom
              </span>
            </button>
          </div>

          <div className="product-gallery__thumbs" role="tablist" aria-label="Product images">
            {images.map((im, i) => (
              <button
                key={im + i}
                type="button"
                role="tab"
                aria-selected={i === activeImage}
                aria-label={`Show image ${i + 1}`}
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
                {availabilityLabels[product.availability]} · {product.year}
              </p>
              <h1 className="display display--lg product-info__title">{product.name}</h1>
              <p className="serif-italic product-info__sub">{product.subtitle}</p>
            </div>
            <FavButton productId={product.id} productName={product.name} />
          </div>

          <div className="product-info__price-row">
            <p className="product-info__price">{formatPrice(product.price, product.currency)}</p>
            <p className="meta">Duties included · 30-day returns</p>
          </div>

          <p className="body product-info__desc">{product.description}</p>

          <BuyButton product={product} />

          <div className="product-info__meta">
            <AppLink href={`/collection?glaze=${product.glaze}`} className="tag">
              {glaze?.name ?? product.glaze}
            </AppLink>
            <span className="tag">{product.category.replace('-', ' ')}</span>
            <span className="tag">Single firing</span>
          </div>

          {/* Specifications */}
          <section className="product-specs" aria-labelledby="specs-title">
            <h2 id="specs-title" className="eyebrow">
              Specifications
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
              <summary>The making</summary>
              <div className="accordion__body">
                <p>
                  Thrown by hand on the wheel, dried slowly, then glazed and fired in a wood kiln.
                  The final surface depends on how heat and ash moved through the chamber and on the
                  pace of cooling afterwards — factors the maker guides but does not control.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary>Care</summary>
              <div className="accordion__body">
                <p>
                  Hand wash only, with warm water and a soft cloth; never use abrasive scouring pads
                  or harsh detergents. Avoid thermal shock — do not pour boiling water into a cold
                  vessel. Not suitable for microwave, oven or dishwasher. The iron-rich glaze darkens
                  and gains a soft lustre with use; this patina is the mark of a lived-in piece.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary>Delivery</summary>
              <div className="accordion__body">
                <p>
                  Born in Nanping, Fujian, China. Every piece currently listed has already reached
                  our local warehouse and will be delivered within 2–3 working days.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary>Packaging</summary>
              <div className="accordion__body">
                <p>
                  Each piece travels by insured express courier, cushioned in a custom wooden crate
                  and shock-resistant packing. Live tracking is issued the moment the parcel leaves
                  the studio, and every cup arrives with its firing note. Returns are accepted within
                  30 days of receipt, free of charge.
                </p>
              </div>
            </details>

            <details className="accordion">
              <summary>Characteristics</summary>
              <div className="accordion__body">
                <p>
                  Jianzhan is shaped as much by chance as by hand. The flame, the ash and the cooling
                  glaze decide the final pattern, so no two cups can ever be alike — each is a
                  singular work, unrepeatable by design.
                </p>
              </div>
            </details>
          </div>

          <p className="product-info__disclaimer">
            Includes a studio-signed paulownia wooden presentation box and recorded firing
            certificate.
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="section related" aria-labelledby="related-title">
          <div className="shell">
            <header className="section-head">
              <div>
                <p className="eyebrow">Continue</p>
                <h2 id="related-title" className="display display--md">
                  Related works
                </h2>
              </div>
              <AppLink href="/collection" className="btn section-head__link">
                All pieces
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
        images={images}
        alts={images.map(
          (_, i) => `${product.name} — ${product.subtitle}, view ${i + 1}`,
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
