import { useDocumentMeta, useReveal } from '../lib/hooks'
import { AppLink } from '../components/ui/Media'
import { ArrowRight } from '../components/ui/Icons'
import { site } from '../data/site'
import type { PolicyBlock } from '../data/policies'
import { useI18n } from '../i18n'
import { localisedPolicy, localisedPolicies } from '../lib/content'

interface PolicyPageProps {
  slug: string
}

function Block({ block }: { block: PolicyBlock }) {
  if (block.kind === 'list') {
    return (
      <ul className="policy__list">
        {(block.items ?? []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }

  if (block.kind === 'callout') {
    return (
      <aside className="policy__callout">
        {block.title && <p className="policy__callout-title">{block.title}</p>}
        {block.text && <p className="policy__callout-text">{block.text}</p>}
        {block.items && (
          <ul className="policy__list policy__list--tight">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </aside>
    )
  }

  return <p className="policy__p">{block.text}</p>
}

export function PolicyPage({ slug }: PolicyPageProps) {
  const { t, locale } = useI18n()
  const policy = localisedPolicy(slug, locale)

  useDocumentMeta(
    policy ? policy.metaTitle : t('meta.policyNotFound'),
    policy?.description,
  )
  useReveal([slug, locale])

  if (!policy) {
    return (
      <div className="shell not-found-page">
        <p className="eyebrow">{t('policy.notFoundEyebrow')}</p>
        <h1 className="display display--lg">{t('policy.notFoundTitle')}</h1>
        <p className="body">{t('policy.notFoundBody')}</p>
        <AppLink href="/" className="btn btn--outline">
          {t('policy.notFoundCta')}
        </AppLink>
      </div>
    )
  }

  const others = localisedPolicies(locale).filter((p) => p.slug !== policy.slug)

  return (
    <div className="policy-page">
      <header className="policy-hero">
        <div className="shell">
          <nav className="breadcrumb breadcrumb--light" aria-label={t('common.breadcrumb')}>
            <AppLink href="/">{t('common.home')}</AppLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{policy.title}</span>
          </nav>

          <p className="eyebrow reveal">{policy.eyebrow}</p>
          <h1
            id="policy-title"
            className="display display--lg policy-hero__title reveal"
            data-delay="1"
          >
            {policy.title}
          </h1>
          <p className="lede policy-hero__intro reveal" data-delay="2">
            {policy.intro}
          </p>
          <p className="meta policy-hero__updated reveal" data-delay="3">
            {t('policy.updated', { date: policy.updated })}
          </p>
        </div>
      </header>

      <div className="shell policy-layout">
        {/* Section index — anchors, not a second navigation system */}
        <nav className="policy-index" aria-label={t('policy.contentsAria', { title: policy.title })}>
          <p className="eyebrow">{t('policy.contents')}</p>
          <ol>
            {policy.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="policy-body">
          {policy.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="policy-section"
              aria-labelledby={`${section.id}-h`}
            >
              <p className="policy-section__n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 id={`${section.id}-h`} className="policy-section__h">
                {section.heading}
              </h2>
              <div className="policy-section__content">
                {section.blocks.map((block, j) => (
                  <Block key={`${section.id}-${j}`} block={block} />
                ))}
              </div>
            </section>
          ))}

          <footer className="policy-foot">
            <p className="body">{t('policy.footBody')}</p>
            <div className="policy-foot__actions">
              <AppLink href={`mailto:${site.email}`} className="btn btn--solid">
                {t('policy.footCta1')}
              </AppLink>
              <AppLink href="/collection" className="btn">
                {t('policy.footCta2')}
                <ArrowRight width={16} height={16} className="btn__arrow" />
              </AppLink>
            </div>
          </footer>
        </div>
      </div>

      {/* Cross-links to the other policies, so none is a dead end */}
      <nav className="shell policy-others" aria-label={t('policy.others')}>
        <p className="eyebrow">{t('policy.others')}</p>
        <ul>
          {others.map((p) => (
            <li key={p.slug}>
              <AppLink href={`/${p.slug}`} className="policy-others__link">
                <span>{p.title}</span>
                <ArrowRight width={14} height={14} className="btn__arrow" />
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
