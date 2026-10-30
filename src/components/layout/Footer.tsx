import { site, navigation } from '../../data/site'
import { AppLink } from '../ui/Media'
import { visual } from '../../styles/visual'
import { useI18n } from '../../i18n'

/**
 * Footer — brand mark, navigation, studio details, policies, social.
 * Links and contact details come from src/data/site.ts; the labels come
 * from the dictionary so the footer follows the active language.
 */
export function Footer() {
  const { t, locale } = useI18n()

  /* Channels that have not been set up yet are simply not shown. */
  const social = site.social.filter((s) => s.href && s.href !== '#')

  const navKey = (href: string) =>
    href === '/'
      ? 'nav.home'
      : href === '/collection'
        ? 'nav.collection'
        : href === '/craft'
          ? 'nav.craft'
          : href === '/journal'
            ? 'nav.journal'
            : 'nav.about'

  /* site.ts holds the hrefs; the dictionary holds the labels. */
  const policyKey = (href: string) =>
    href === '/shipping'
      ? 'policy.shipping'
      : href === '/care'
        ? 'policy.care'
        : href === '/privacy'
          ? 'policy.privacy'
          : 'policy.terms'

  return (
    <footer className="site-footer grain" style={{ position: 'relative' }}>
      <div
        className="site-footer__bg"
        style={{ backgroundImage: `url(${visual.footer})` }}
        aria-hidden="true"
      />

      <div className="shell site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <AppLink href="/" className="brand brand--footer" ariaLabel={`${site.brand} — ${t('header.brandHome')}`}>
              <span className="brand__word">{site.brand}</span>
              <span className="brand__seal" aria-hidden="true">
                {site.brandCn.charAt(0)}
              </span>
            </AppLink>
            <p className="site-footer__tag">
              {locale === 'en' ? site.tagline : t('site.tagline')}
            </p>
          </div>

          <nav className="site-footer__nav" aria-label={t('footer.navAria')}>
            <p className="eyebrow">{t('footer.explore')}</p>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <AppLink href={item.href} className="footer-link">
                    {locale === 'en' ? item.label : t(navKey(item.href))}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__nav">
            <p className="eyebrow">{t('footer.studio')}</p>
            <ul>
              <li>
                <AppLink href={`mailto:${site.email}`} className="footer-link">
                  {site.email}
                </AppLink>
              </li>
              <li className="footer-address">
                {locale === 'en' ? site.studio : t('site.studio')}
              </li>
              <li className="footer-address">
                {locale === 'en' ? site.hours : t('site.hours')}
              </li>
            </ul>
          </div>

          <div className="site-footer__nav">
            <p className="eyebrow">{t('footer.policies')}</p>
            <ul>
              {site.policies.map((p) => (
                <li key={p.href}>
                  <AppLink href={p.href} className="footer-link">
                    {locale === 'en' ? p.label : t(policyKey(p.href))}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__legal">
            {t('footer.rights', { year: new Date().getFullYear(), name: site.legalName })}
          </p>

          <ul className="site-footer__social" aria-label={t('footer.socialAria')}>
            {social.map((s) => (
              <li key={s.label}>
                <AppLink href={s.href} className="footer-link footer-link--social" external>
                  {s.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <p className="site-footer__note">{t('footer.note')}</p>
      </div>
    </footer>
  )
}
