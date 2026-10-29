import { useEffect, useRef, useState } from 'react'
import { products, formatPrice, glazes } from '../data/products'
import { posts } from '../data/posts'
import { visual } from '../styles/visual'
import { img } from '../data/images'
import { AppLink, MediaImage } from '../components/ui/Media'
import { ProductCard } from '../components/ui/ProductCard'
import type { Product } from '../data/types'
import { ArrowDown, ArrowRight, ScrollIndicator } from '../components/ui/Icons'
import { usePrefersReducedMotion, useReveal } from '../lib/hooks'
import { GlazeExplorer } from '../components/sections/GlazeExplorer'

interface HomeProps {
  onQuickView: (p: Product) => void
}

export function Home({ onQuickView }: HomeProps) {
  useReveal()
  const [heroLoaded, setHeroLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const reduce = usePrefersReducedMotion()

  /* Subtle parallax on the hero photograph only — never on text. */
  useEffect(() => {
    if (reduce) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = heroRef.current?.querySelector<HTMLElement>('.hero__bowl-inner')
        if (!el) return
        const y = Math.min(window.scrollY, window.innerHeight)
        el.style.transform = `translate3d(0, ${y * 0.08}px, 0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [reduce])

  const featured = products.filter((p) => p.featured).slice(0, 3)
  const latest = posts.slice(0, 3)

  return (
    <>
      {/* ================= HERO ================= */}
      {/*
        Layered composition, following the reference: misty ridges receding into
        darkness, a low moon, warm firelight at the horizon, and a single lit
        bowl in the foreground. Scrims are deliberately light so the photograph
        still reads — no blur, no heavy veil over the whole frame.
      */}
      <section className="hero" ref={heroRef} aria-labelledby="hero-title">
        <div className="hero__media">
          <div className="hero__layer hero__layer--sky">
            <img
              src={visual.heroMountain}
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="hero__moon" aria-hidden="true" />

          <div className="hero__layer hero__layer--ember" aria-hidden="true" />

          <div className="hero__layer hero__layer--bowl">
            <div className="hero__bowl-inner">
              <img
                src={visual.heroBowl}
                alt="A dark-glazed Jian ware tea bowl catching a single warm light against stone"
                onLoad={() => setHeroLoaded(true)}
                fetchPriority="high"
                decoding="sync"
                className={heroLoaded ? 'is-loaded' : ''}
              />
            </div>
          </div>

          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__content shell">
          <div className="hero__aside" aria-hidden="true">
            <span className="hero__aside-line" />
            <span className="hero__cn">建盏</span>
            <span className="seal">盏</span>
          </div>

          <div className="hero__text">
            <p className="eyebrow hero__kicker reveal">Jian Ware · Song Dynasty Lineage</p>
            <h1 id="hero-title" className="display display--xl hero__title reveal" data-delay="1">
              The Cosmos Held
              <br />
              in a Cup
            </h1>
            <p className="hero__line serif-italic reveal" data-delay="2">
              Where fire is the only author.
            </p>
            <p className="hero__sub reveal" data-delay="3">
              Iron-rich earth, pine wood fire, and stilled time. A Song Dynasty lineage capturing
              fleeting constellations in dark glaze.
            </p>
            <div className="hero__cta reveal" data-delay="4">
              <AppLink href="/collection" className="btn">
                Explore Collection
                <ArrowRight width={18} height={18} className="btn__arrow" />
              </AppLink>
            </div>
          </div>

          <div className="hero__scroll" aria-hidden="true">
            <ScrollIndicator />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ================= SOUL ================= */}
      <section className="section soul" aria-labelledby="soul-title">
        <div className="shell">
          <div className="soul__grid">
            <div className="soul__text">
              <p className="eyebrow reveal">The Soul of Jianzhan</p>
              <h2 id="soul-title" className="display display--lg soul__title reveal" data-delay="1">
                Born from Fire,
                <br />
                Shaped by Time
              </h2>
              <p className="lede reveal" data-delay="2">
                Jianzhan is more than a tea bowl; it is an encounter between earth and cosmic chance.
                Thrown by hand and fired in ancient dragon kilns, one clay enters the kiln, yet ten
                thousand colours emerge. What the flame decides, the artisan accepts.
              </p>
              <div className="reveal" data-delay="3">
                <AppLink href="/craft" className="btn">
                  Discover More
                  <ArrowRight width={18} height={18} className="btn__arrow" />
                </AppLink>
              </div>
            </div>

            <figure className="soul__figure reveal" data-delay="2">
              <MediaImage
                image="glaze-detail"
                alt="Close detail of a dark glazed surface catching warm light"
                ratio={4 / 5}
                sizes="(min-width: 900px) 44vw, 92vw"
              />
              <figcaption className="soul__caption">
                <span className="meta">Fig. 01</span>
                <span>Glaze detail — iron crystals on a black ground</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <span className="soul__watermark cn-mark" aria-hidden="true">
          建盏
        </span>
      </section>

      {/* ================= COLLECTION ================= */}
      <section className="section section--tight" aria-labelledby="featured-title">
        <div className="shell">
          <header className="section-head">
            <div>
              <p className="eyebrow reveal">Our Collection</p>
              <h2 id="featured-title" className="display display--md reveal" data-delay="1">
                Selected Works
              </h2>
            </div>
            <p className="body section-head__note reveal" data-delay="2">
              Each vessel is a singular occurrence — glazes born from momentary alignments of heat,
              draft, and mineral ash that human hands cannot replicate.
            </p>
            <AppLink href="/collection" className="btn section-head__link reveal" data-delay="2">
              All pieces
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </header>

          <div className="card-grid">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} onQuickView={onQuickView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CRAFT ================= */}
      <section className="craft-band" aria-labelledby="craft-title">
        <div className="craft-band__media">
          <img
            src={visual.craft}
            alt="Hands shaping a vessel on a potter's wheel in a dim studio"
            loading="lazy"
            decoding="async"
          />
          <div className="craft-band__scrim" aria-hidden="true" />
        </div>

        <div className="shell craft-band__inner">
          <div className="craft-band__text">
            <p className="eyebrow reveal">Traditional Craftsmanship</p>
            <h2 id="craft-title" className="display display--md reveal" data-delay="1">
              Passed down through generations
            </h2>
            <p className="body reveal" data-delay="2">
              Our artisans preserve Song-era methods, firing unrefined minerals in wood-fuelled
              kilns. Nothing is hurried: forming, drying, glazing, and days inside the fire are
              entirely surrendered to the patient rhythm of the kiln.
            </p>
            <AppLink href="/craft" className="btn reveal" data-delay="3">
              Learn More
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </div>
        </div>
      </section>

      {/* ================= GLAZE EXPLORER ================= */}
      <GlazeExplorer glazes={glazes} />

      {/* ================= GIFTING ================= */}
      <section className="section gifting" aria-labelledby="gift-title">
        <div className="shell gifting__inner">
          <div className="gifting__text">
            <p className="eyebrow reveal">Collecting & Gifting</p>
            <h2 id="gift-title" className="display display--md reveal" data-delay="1">
              A quiet object, kept for a lifetime
            </h2>
            <p className="body reveal" data-delay="2">
              Each piece arrives linen-wrapped with a recorded firing note — the year, the kiln and
              the conditions of its making. Suitable for a collector’s shelf, a tea table, or a gift
              that outlives the occasion.
            </p>
            <ul className="gifting__list reveal" data-delay="3">
              <li>Linen-wrapped presentation box</li>
              <li>Firing note signed by the studio</li>
              <li>Care card with use and washing guidance</li>
            </ul>
            <AppLink href="/collection" className="btn reveal" data-delay="3">
              Browse collectible works
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </div>
          <figure className="gifting__figure reveal" data-delay="2">
            <MediaImage
              image="bowl-set"
              alt="A group of handcrafted bowls arranged together on a dark surface"
              ratio={1}
              sizes="(min-width: 900px) 42vw, 92vw"
            />
          </figure>
        </div>
      </section>

      {/* ================= JOURNAL TEASER ================= */}
      <section className="section section--tight journal-teaser" aria-labelledby="journal-title">
        <div className="shell">
          <header className="section-head">
            <div>
              <p className="eyebrow reveal">Journal</p>
              <h2 id="journal-title" className="display display--md reveal" data-delay="1">
                Notes on glaze & making
              </h2>
            </div>
            <AppLink href="/journal" className="btn section-head__link reveal" data-delay="2">
              All entries
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </header>

          <div className="journal-grid">
            {latest.map((post, i) => (
              <AppLink key={post.slug} href={`/journal/${post.slug}`} className="jcard reveal" data-delay={i + 1}>
                <MediaImage
                  image={post.image as never}
                  alt=""
                  ratio={16 / 10}
                  sizes="(min-width: 900px) 30vw, 92vw"
                />
                <div className="jcard__body">
                  <p className="meta">
                    {post.kicker} · {post.readMinutes} min
                  </p>
                  <h3 className="jcard__title">{post.title}</h3>
                  <p className="jcard__excerpt">{post.excerpt}</p>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="closing" aria-labelledby="closing-title">
        <div className="closing__media" aria-hidden="true">
          <img src={visual.parting} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="shell closing__inner">
          <p className="eyebrow reveal">The Earth in Your Hands</p>
          <h2 id="closing-title" className="display display--lg closing__title reveal" data-delay="1">
            Fire and time,
            <br />
            held still
          </h2>
          <p className="lede closing__lede reveal" data-delay="2">
            The kiln does not bend to human will. We merely shape the clay; nature finishes the
            glaze.
          </p>
          <div className="closing__cta reveal" data-delay="3">
            <AppLink href="/collection" className="btn btn--solid">
              View the Collection
            </AppLink>
            <AppLink href="/about" className="btn">
              Our Story
              <ArrowDown width={16} height={16} className="btn__arrow" />
            </AppLink>
          </div>
        </div>

        <div className="closing__marquee" aria-hidden="true">
          <span>{Array.from({ length: 6 }).map(() => '建盏 · ').join('')}</span>
        </div>
      </section>

      {/* Price reference for screen readers and search snippets */}
      <p className="sr-only">
        Catalogue contains {products.length} pieces. Featured pieces from{' '}
        {formatPrice(Math.min(...featured.map((p) => p.price)))}.
      </p>
      {/* Preload hint for the next section image */}
      <link rel="prefetch" href={img('kiln-glow', 800)} as="image" />
    </>
  )
}
