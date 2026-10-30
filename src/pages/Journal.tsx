import { useDocumentMeta, useReveal } from '../lib/hooks'
import { AppLink, MediaImage } from '../components/ui/Media'
import type { ImageKey } from '../data/images'
import { ArrowRight } from '../components/ui/Icons'
import { useI18n } from '../i18n'
import { localisedPosts, localisedPostBySlug } from '../lib/content'

export function Journal() {
  const { t, locale } = useI18n()

  useDocumentMeta(t('meta.journalTitle'), t('meta.journalDesc'))
  useReveal()
  const posts = localisedPosts(locale)

  return (
    <div className="journal-page">
      <header className="journal-hero shell">
        <p className="eyebrow reveal">{t('journal.eyebrow')}</p>
        <h1 className="display display--lg journal-hero__title reveal" data-delay="1">
          {t('journal.title')}
        </h1>
        <p className="lede reveal" data-delay="2">
          {t('journal.lede')}
        </p>
      </header>

      <section className="shell journal-list" aria-label={t('journal.listAria')}>
        {posts.map((post, i) => (
          <AppLink
            key={post.slug}
            href={`/journal/${post.slug}`}
            className={`jrow reveal ${i % 2 === 1 ? 'jrow--flip' : ''}`}
          >
            <div className="jrow__media">
              <MediaImage
                image={post.image as ImageKey}
                alt=""
                ratio={16 / 10}
                sizes="(min-width: 900px) 48vw, 92vw"
              />
            </div>
            <div className="jrow__body">
              <p className="meta">
                {post.kicker} · {t('journal.minRead', { count: post.readMinutes })}
              </p>
              <h2 className="display display--sm jrow__title">{post.title}</h2>
              <p className="body">{post.excerpt}</p>
              <span className="btn btn--link jrow__more">
                {t('common.readEntry')}
                <ArrowRight width={16} height={16} className="btn__arrow" />
              </span>
            </div>
          </AppLink>
        ))}
      </section>

      <section className="section section--tight">
        <div className="shell journal-cta">
          <p className="eyebrow">{t('journal.ctaEyebrow')}</p>
          <p className="body">{t('journal.ctaBody')}</p>
          <AppLink href="/collection" className="btn btn--outline">
            {t('journal.ctaBtn')}
          </AppLink>
        </div>
      </section>
    </div>
  )
}

export function JournalPost({ slug }: { slug: string }) {
  const { t, locale } = useI18n()
  const post = localisedPostBySlug(slug, locale)

  useDocumentMeta(
    post ? t('meta.postTitle', { title: post.title }) : t('meta.postNotFound'),
    post?.excerpt,
  )
  useReveal([slug, locale])

  if (!post) {
    return (
      <div className="shell not-found-page">
        <p className="eyebrow">{t('prod.notFoundEyebrow')}</p>
        <h1 className="display display--lg">{t('journal.postNotFoundTitle')}</h1>
        <AppLink href="/journal" className="btn btn--outline">
          {t('journal.postNotFoundCta')}
        </AppLink>
      </div>
    )
  }

  const others = localisedPosts(locale)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  /* Dates follow the active locale rather than a fixed en-GB format. */
  const dateLocale = locale === 'vi' ? 'vi-VN' : 'en-GB'

  return (
    <article className="post-page">
      <header className="post-hero">
        <div className="shell">
          <nav className="breadcrumb breadcrumb--light" aria-label={t('common.breadcrumb')}>
            <AppLink href="/journal">{t('nav.journal')}</AppLink>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.kicker}</span>
          </nav>
          <p className="eyebrow">{post.kicker}</p>
          <h1 className="display display--lg post-hero__title">{post.title}</h1>
          <p className="post-hero__meta">
            {new Date(post.date).toLocaleDateString(dateLocale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {t('journal.minRead', { count: post.readMinutes })}
          </p>
        </div>
      </header>

      <div className="post-figure">
        <MediaImage
          image={post.image as ImageKey}
          alt=""
          ratio={21 / 9}
          sizes="100vw"
          priority
        />
      </div>

      <div className="shell post-body">
        {post.body.map((block, i) => (
          <section key={i} className="post-block reveal">
            {block.heading && <h2 className="post-block__h">{block.heading}</h2>}
            <p>{block.text}</p>
          </section>
        ))}

        <div className="post-foot reveal">
          <p className="meta">{t('journal.publishedBy')}</p>
          <AppLink href="/journal" className="btn btn--link">
            {t('common.allEntries')}
            <ArrowRight width={16} height={16} />
          </AppLink>
        </div>
      </div>

      <section className="section section--tight" aria-labelledby="more-posts">
        <div className="shell">
          <p className="eyebrow">{t('journal.continue')}</p>
          <h2 id="more-posts" className="display display--sm journal-more-title">
            {t('journal.more')}
          </h2>
          <div className="journal-grid">
            {others.map((p, i) => (
              <AppLink
                key={p.slug}
                href={`/journal/${p.slug}`}
                className="jcard reveal"
                data-delay={i + 1}
              >
                <MediaImage
                  image={p.image as ImageKey}
                  alt=""
                  ratio={16 / 10}
                  sizes="(min-width: 900px) 40vw, 92vw"
                />
                <div className="jcard__body">
                  <p className="meta">
                    {p.kicker} · {t('journal.min', { count: p.readMinutes })}
                  </p>
                  <h3 className="jcard__title">{p.title}</h3>
                  <p className="jcard__excerpt">{p.excerpt}</p>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
