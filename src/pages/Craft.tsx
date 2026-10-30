import { useDocumentMeta, useReveal } from '../lib/hooks'
import { MediaImage, AppLink } from '../components/ui/Media'
import { visual } from '../styles/visual'
import { ArrowRight } from '../components/ui/Icons'
import { useI18n } from '../i18n'

const STEP_KEYS = ['s1', 's2', 's3', 's4', 's5'] as const

export function Craft() {
  const { t } = useI18n()

  useDocumentMeta(t('meta.craftTitle'), t('meta.craftDesc'))
  useReveal()

  return (
    <div className="craft-page">
      <header className="page-hero" aria-labelledby="craft-hero-title">
        <div className="page-hero__media" aria-hidden="true">
          <img src={visual.craftFire} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="shell page-hero__inner">
          <p className="eyebrow reveal">{t('craft.eyebrow')}</p>
          <h1
            id="craft-hero-title"
            className="display display--lg page-hero__title reveal"
            data-delay="1"
          >
            {t('craft.title1')}
            <br />
            {t('craft.title2')}
          </h1>
          <p className="lede reveal" data-delay="2">
            {t('craft.lede')}
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="process-title">
        <div className="shell">
          <div className="craft-intro">
            <div>
              <p className="eyebrow reveal">{t('craft.process')}</p>
              <h2 id="process-title" className="display display--md reveal" data-delay="1">
                {t('craft.processTitle')}
              </h2>
            </div>
            <p className="body reveal" data-delay="2">
              {t('craft.processBody')}
            </p>
          </div>

          <ol className="steps">
            {STEP_KEYS.map((key, i) => (
              <li key={key} className="step reveal" data-delay={(i % 3) + 1}>
                <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{t(`craft.${key}t`)}</h3>
                <p className="step__text">{t(`craft.${key}b`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="split-feature" aria-labelledby="kiln-title">
        <div className="split-feature__media">
          <MediaImage
            image="kiln-glow"
            alt={t('craft.kilnAlt')}
            ratio={4 / 3}
            sizes="(min-width: 900px) 50vw, 92vw"
          />
        </div>
        <div className="split-feature__text">
          <p className="eyebrow reveal">{t('craft.kilnEyebrow')}</p>
          <h2 id="kiln-title" className="display display--md reveal" data-delay="1">
            {t('craft.kilnTitle')}
          </h2>
          <p className="body reveal" data-delay="2">
            {t('craft.kilnBody')}
          </p>
          <AppLink href="/collection" className="btn reveal" data-delay="3">
            {t('craft.kilnCta')}
            <ArrowRight width={16} height={16} className="btn__arrow" />
          </AppLink>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="hands-title">
        <div className="shell">
          <header className="section-head">
            <div>
              <p className="eyebrow reveal">{t('craft.handsEyebrow')}</p>
              <h2 id="hands-title" className="display display--md reveal" data-delay="1">
                {t('craft.handsTitle')}
              </h2>
            </div>
          </header>

          <div className="craft-gallery">
            <figure className="craft-gallery__a reveal">
              <MediaImage
                image="kiln-hands"
                alt={t('craft.handsAlt1')}
                ratio={4 / 5}
                sizes="(min-width: 900px) 34vw, 92vw"
              />
              <figcaption className="meta">{t('craft.fig1')}</figcaption>
            </figure>
            <figure className="craft-gallery__b reveal" data-delay="1">
              <MediaImage
                image="kiln-hands-4"
                alt={t('craft.handsAlt2')}
                ratio={1}
                sizes="(min-width: 900px) 30vw, 92vw"
              />
            </figure>
            <figure className="craft-gallery__c reveal" data-delay="2">
              <MediaImage
                image="kiln-studio"
                alt={t('craft.handsAlt3')}
                ratio={3 / 4}
                sizes="(min-width: 900px) 30vw, 92vw"
              />
              <figcaption className="meta">{t('craft.fig2')}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section closing-band" aria-labelledby="honest-title">
        <div className="shell closing-band__inner">
          <p className="eyebrow">{t('craft.claimsEyebrow')}</p>
          <h2 id="honest-title" className="display display--md reveal">
            {t('craft.claimsTitle')}
          </h2>
          <p className="body reveal" data-delay="1">
            {t('craft.claimsBody')}
          </p>
          <AppLink href="/about" className="btn reveal" data-delay="2">
            {t('craft.claimsCta')}
            <ArrowRight width={16} height={16} className="btn__arrow" />
          </AppLink>
        </div>
      </section>

      <div className="visually-hidden-link">
        <img src={visual.craftDetail} alt="" loading="lazy" decoding="async" />
      </div>
    </div>
  )
}
