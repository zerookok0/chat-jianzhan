import { useDocumentMeta, useReveal } from '../lib/hooks'
import { AppLink } from '../components/ui/Media'
import { ArrowRight } from '../components/ui/Icons'
import { site } from '../data/site'
import { policies, getPolicy, type PolicyBlock } from '../data/policies'

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
  const policy = getPolicy(slug)

  useDocumentMeta(policy ? policy.metaTitle : 'Policy not found | JIANZHAN', policy?.description)
  useReveal([slug])

  if (!policy) {
    return (
      <div className="shell not-found-page">
        <p className="eyebrow">Not Found</p>
        <h1 className="display display--lg">This policy could not be found</h1>
        <p className="body">
          The page may have moved. Every policy is linked from the footer of any page on the site.
        </p>
        <AppLink href="/" className="btn btn--outline">
          Back to the home page
        </AppLink>
      </div>
    )
  }

  return (
    <div className="policy-page">
      <header className="policy-hero">
        <div className="shell">
          <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
            <AppLink href="/">Home</AppLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{policy.title}</span>
          </nav>

          <p className="eyebrow reveal">{policy.eyebrow}</p>
          <h1 id="policy-title" className="display display--lg policy-hero__title reveal" data-delay="1">
            {policy.title}
          </h1>
          <p className="lede policy-hero__intro reveal" data-delay="2">
            {policy.intro}
          </p>
          <p className="meta policy-hero__updated reveal" data-delay="3">
            Last updated {policy.updated}
          </p>
        </div>
      </header>

      <div className="shell policy-layout">
        {/* Section index — anchors, not a second navigation system */}
        <nav className="policy-index" aria-label={`${policy.title} contents`}>
          <p className="eyebrow">Contents</p>
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
            <section key={section.id} id={section.id} className="policy-section" aria-labelledby={`${section.id}-h`}>
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
            <p className="body">
              Questions about this policy, an order, or a piece already in your hands? The studio
              answers every message within one business day.
            </p>
            <div className="policy-foot__actions">
              <AppLink href={`mailto:${site.email}`} className="btn btn--solid">
                Contact the studio
              </AppLink>
              <AppLink href="/collection" className="btn">
                Explore the collection
                <ArrowRight width={16} height={16} className="btn__arrow" />
              </AppLink>
            </div>
          </footer>
        </div>
      </div>

      {/* Cross-links to the other policies, so none is a dead end */}
      <nav className="shell policy-others" aria-label="Other policies">
        <p className="eyebrow">Also in this section</p>
        <ul>
          {policies
            .filter((p) => p.slug !== policy.slug)
            .map((p) => (
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
