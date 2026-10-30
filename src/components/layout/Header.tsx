import { useEffect, useState } from 'react'
import { navigation, site } from '../../data/site'
import { useRoute, useScrollLock } from '../../lib/hooks'
import { useCart } from '../../lib/cart'
import { useI18n } from '../../i18n'
import { AppLink } from '../ui/Media'
import { Cart, Close, Search } from '../ui/Icons'
import { SearchOverlay } from './SearchOverlay'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Header: transparent over the hero, then settles into a dark bar.
 * Mobile menu is a full-height dark panel with staggered links.
 */
export function Header() {
  const route = useRoute()
  const { count, openCart } = useCart()
  const { t, locale } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useScrollLock(menuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [route.path])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? route.path === '/' : route.path === href || route.path.startsWith(`${href}/`)

  /* Nav labels come from the dictionary; the hrefs stay in site.ts. */
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

  const items = navigation.map((item) => ({
    ...item,
    label: locale === 'en' ? item.label : t(navKey(item.href)),
  }))

  return (
    <>
      <a href="#main" className="skip-link">
        {t('common.skip')}
      </a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <AppLink href="/" className="brand" ariaLabel={`${site.brand} — ${t('header.brandHome')}`}>
            <span className="brand__word">{site.brand}</span>
            <span className="brand__seal" aria-hidden="true">
              {site.brandCn.charAt(0)}
            </span>
          </AppLink>

          <nav className="nav-desktop" aria-label={t('nav.primaryAria')}>
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <AppLink
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'is-active' : ''}`}
                    ariaLabel={item.label}
                  >
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__tools">
            <LanguageSwitcher />

            <button
              type="button"
              className="icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label={t('header.searchAria')}
            >
              <Search width={16} height={16} />
            </button>

            <button
              type="button"
              className="icon-btn cart-btn"
              onClick={openCart}
              aria-label={count > 0 ? t('header.cartAria', { count }) : t('header.cartAriaEmpty')}
            >
              <Cart width={16} height={16} />
              {count > 0 && (
                <span className="cart-btn__count" aria-hidden="true">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="menu-btn__bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__head">
          <span className="brand__word">{site.brand}</span>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setMenuOpen(false)}
            aria-label={t('header.closeMenu')}
          >
            <Close width={18} height={18} />
          </button>
        </div>

        <nav aria-label={t('nav.mobileAria')}>
          <ul className="mobile-menu__list">
            {items.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: `${0.06 + i * 0.05}s` }}>
                <AppLink
                  href={item.href}
                  className={`mobile-menu__link ${isActive(item.href) ? 'is-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mobile-menu__index">0{i + 1}</span>
                  <span>{item.label}</span>
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__foot">
          <LanguageSwitcher variant="menu" />
          <p className="mobile-menu__tag">{locale === 'en' ? site.tagline : t('site.tagline')}</p>
          <p className="meta">{site.email}</p>
          <p className="meta">{locale === 'en' ? site.hours : t('site.hours')}</p>
        </div>
      </div>

      {menuOpen && <div className="menu-scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
