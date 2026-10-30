import { useEffect, useRef, useState } from 'react'
import { products, formatPrice, glazes } from '../data/products'
import { defaultHome as home } from '../data/content'
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
            <p className="eyebrow hero__kicker reveal">{home.hero.kicker}</p>
            <h1 id="hero-title" className="display display--xl hero__title reveal" data-delay="1">
              {home.hero.titleLine1}
              <br />
              {home.hero.titleLine2}
            </h1>
            <p className="hero__line serif-italic reveal" data-delay="2">
              {home.hero.line}
            </p>
            <p className="hero__sub reveal" data-delay="3">
              {home.hero.sub}
            </p>
            <div className="hero__cta reveal" data-delay="4">
              <AppLink href="/collection" className="btn">
                {home.hero.cta}
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
              <p className="eyebrow reveal">{home.soul.eyebrow}</p>
              <h2 id="soul-title" className="display display--lg soul__title reveal" data-delay="1">
                {home.soul.titleLine1}
                <br />
                {home.soul.titleLine2}
              </h2>
              <p className="lede reveal" data-delay="2">
                {home.soul.body}
              </p>
              <div className="reveal" data-delay="3">
                <AppLink href="/craft" className="btn">
                  {home.soul.cta}
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
                <span>{home.soul.caption}</span>
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
              <p className="eyebrow reveal">{home.collection.eyebrow}</p>
              <h2 id="featured-title" className="display display--md reveal" data-delay="1">
                {home.collection.title}
              </h2>
            </div>
            <p className="body section-head__note reveal" data-delay="2">
              {home.collection.note}
            </p>
            <AppLink href="/collection" className="btn section-head__link reveal" data-delay="2">
              {home.collection.cta}
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
            <p className="eyebrow reveal">{home.craft.eyebrow}</p>
            <h2 id="craft-title" className="display display--md reveal" data-delay="1">
              {home.craft.title}
            </h2>
            <p className="body reveal" data-delay="2">
              {home.craft.body}
            </p>
            <AppLink href="/craft" className="btn reveal" data-delay="3">
              {home.craft.cta}
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
            <p className="eyebrow reveal">{home.gifting.eyebrow}</p>
            <h2 id="gift-title" className="display display--md reveal" data-delay="1">
              {home.gifting.title}
            </h2>
            <p className="body reveal" data-delay="2">
              {home.gifting.body}
            </p>
            <ul className="gifting__list reveal" data-delay="3">
              {home.gifting.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <AppLink href="/collection" className="btn reveal" data-delay="3">
              {home.gifting.cta}
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
              <p className="eyebrow reveal">{home.journal.eyebrow}</p>
              <h2 id="journal-title" className="display display--md reveal" data-delay="1">
                {home.journal.title}
              </h2>
            </div>
            <AppLink href="/journal" className="btn section-head__link reveal" data-delay="2">
              {home.journal.cta}
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
          <p className="eyebrow reveal">{home.closing.eyebrow}</p>
          <h2 id="closing-title" className="display display--lg closing__title reveal" data-delay="1">
            {home.closing.titleLine1}
            <br />
            {home.closing.titleLine2}
          </h2>
          <p className="lede closing__lede reveal" data-delay="2">
            {home.closing.body}
          </p>
          <div className="closing__cta reveal" data-delay="3">
            <AppLink href="/collection" className="btn btn--solid">
              {home.closing.ctaPrimary}
            </AppLink>
            <AppLink href="/about" className="btn">
              {home.closing.ctaSecondary}
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
