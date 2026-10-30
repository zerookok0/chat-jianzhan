import { useDocumentMeta, useReveal } from '../lib/hooks'
import { MediaImage, AppLink } from '../components/ui/Media'
import { visual } from '../styles/visual'
import { ArrowRight } from '../components/ui/Icons'
import { site } from '../data/site'
import { useI18n } from '../i18n'

const VALUE_KEYS = ['v1', 'v2', 'v3', 'v4'] as const

export function About() {
  const { t } = useI18n()

  useDocumentMeta(t('meta.aboutTitle'), t('meta.aboutDesc'))
  useReveal()

  return (
    <div className="about-page">
      <header className="page-hero page-hero--tall" aria-labelledby="about-hero-title">
        <div className="page-hero__media" aria-hidden="true">
          <img src={visual.aboutHero} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="shell page-hero__inner">
          <p className="eyebrow reveal">{t('about.eyebrow')}</p>
          <h1
            id="about-hero-title"
            className="display display--lg page-hero__title reveal"
            data-delay="1"
          >
            {site.brand}
            <span className="about-page__cn cn-mark">{site.brandCn}</span>
          </h1>
          <p className="lede reveal" data-delay="2">
            {t('about.lede')}
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="about-statement">
        <div className="shell about-grid">
          <div className="about-grid__lead">
            <p className="eyebrow reveal">{t('about.statement')}</p>
            <h2 id="about-statement" className="display display--md reveal" data-delay="1">
              {t('about.statementTitle')}
            </h2>
          </div>
          <div className="about-grid__text">
            <p className="body reveal" data-delay="1">
              {t('about.p1')}
            </p>
            <p className="body reveal" data-delay="2">
              {t('about.p2')}
            </p>
            <p className="body reveal" data-delay="3">
              {t('about.p3')}
            </p>
          </div>
        </div>
      </section>

      <section className="about-figures" aria-label={t('about.figAria')}>
        <div className="shell about-figures__inner">
          <figure className="about-figures__a reveal">
            <MediaImage
              image="kiln-hands-3"
              alt={t('about.figAlt1')}
              ratio={3 / 4}
              sizes="(min-width: 900px) 34vw, 92vw"
            />
            <figcaption className="meta">{t('about.fig1')}</figcaption>
          </figure>
          <figure className="about-figures__b reveal" data-delay="1">
            <MediaImage
              image="kiln-tools"
              alt={t('about.figAlt2')}
              ratio={4 / 5}
              sizes="(min-width: 900px) 32vw, 92vw"
            />
            <figcaption className="meta">{t('about.fig2')}</figcaption>
          </figure>
          <div className="about-figures__quote reveal" data-delay="2">
            <blockquote className="serif-italic">{t('about.quote')}</blockquote>
            <p className="meta">{t('about.quoteBy')}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="shell">
          <p className="eyebrow reveal">{t('about.principles')}</p>
          <h2 id="values-title" className="display display--md reveal" data-delay="1">
            {t('about.principlesTitle')}
          </h2>

          <ul className="values">
            {VALUE_KEYS.map((key, i) => (
              <li key={key} className="value reveal" data-delay={(i % 3) + 1}>
                <h3 className="value__title">{t(`about.${key}t`)}</h3>
                <p className="value__text">{t(`about.${key}d`)}</p>
              </li>
            ))}
          </ul>

          <div className="about-cta reveal">
            <AppLink href="/collection" className="btn btn--solid">
              {t('about.cta1')}
            </AppLink>
            <AppLink href="/journal" className="btn">
              {t('about.cta2')}
              <ArrowRight width={16} height={16} className="btn__arrow" />
            </AppLink>
          </div>
        </div>
      </section>
    </div>
  )
}
