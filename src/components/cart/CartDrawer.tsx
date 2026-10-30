import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useEscape, useScrollLock } from '../../lib/hooks'
import { useCart } from '../../lib/cart'
import { formatPrice } from '../../data/products'
import { site } from '../../data/site'
import { checkout } from '../../lib/wordpress'
import { AppLink } from '../ui/Media'
import { ArrowUpRight, Close, Minus, Plus } from '../ui/Icons'
import { useI18n } from '../../i18n'

/**
 * CART DRAWER
 * ------------------------------------------------------------------
 * A right-hand panel listing what the visitor picked. It deliberately
 * holds no payment or address fields: "Checkout" hands the list to the
 * WordPress store, which owns the rest of the purchase.
 */
export function CartDrawer() {
  const { t } = useI18n()
  const { lines, isOpen, closeCart, count, subtotal, currency, setQty, removeItem } = useCart()
  const panelRef = useRef<HTMLDivElement>(null)
  /*
   * True from the click until the store takes over. It is set before the
   * navigation starts, so the overlay paints on the very next frame and the
   * drawer never looks frozen during the handoff.
   */
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [handoffFailed, setHandoffFailed] = useState(false)

  /* Closing mid-handoff would unmount the overlay, so it is ignored. */
  const handleClose = useCallback(() => {
    if (isRedirecting) return
    closeCart()
  }, [isRedirecting, closeCart])

  useScrollLock(isOpen)
  useEscape(isOpen, handleClose)

  // Move focus into the panel when it opens so keyboard users land here.
  useEffect(() => {
    if (!isOpen) return
    const first = panelRef.current?.querySelector<HTMLElement>('button, a[href]')
    first?.focus({ preventScroll: true })
  }, [isOpen])

  if (!isOpen) return null

  const handleCheckout = () => {
    if (isRedirecting) return

    setHandoffFailed(false)
    /* Paint the overlay first — it must be on screen before we navigate. */
    setIsRedirecting(true)

    /*
     * Two frames guarantee the overlay has actually been painted before the
     * document starts unloading. Without this pause a fast store response can
     * replace the page while the overlay is still only in React state.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const ok = checkout(
          lines.map((line) => ({
            id: line.wooId,
            qty: line.qty,
            variationId: line.variationId,
          })),
        )

        /* The store could not be reached: the handoff never happened, so undo it. */
        if (!ok) {
          setIsRedirecting(false)
          setHandoffFailed(true)
        }
      })
    })
  }

  return createPortal(
    <div className="cart-drawer" role="presentation">
      <div className="cart-drawer__scrim" onClick={handleClose} aria-hidden="true" />

      <div
        className="cart-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        ref={panelRef}
        tabIndex={-1}
      >
        <header className="cart-drawer__head">
          <div>
            <p className="eyebrow">{t('cart.eyebrow')}</p>
            <h2 id="cart-title" className="display display--sm">
              {t('cart.title')}
              {count > 0 && <span className="cart-drawer__count"> ({count})</span>}
            </h2>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={handleClose}
            aria-label={t('cart.close')}
          >
            <Close width={18} height={18} />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="cart-drawer__empty">
            <p className="serif-italic cart-drawer__empty-line">{t('cart.emptyLine')}</p>
            <p className="body">{t('cart.emptyBody')}</p>
            <AppLink href="/collection" className="btn btn--outline" onClick={closeCart}>
              {t('cart.browse')}
            </AppLink>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {lines.map((line) => (
                <li key={line.key} className="cart-line">
                  <AppLink
                    href={`/collection/${line.slug}`}
                    className="cart-line__media"
                    onClick={closeCart}
                    ariaLabel={t('cart.viewName', { name: line.name })}
                  >
                    <img src={line.image} alt="" loading="lazy" width={80} height={96} />
                  </AppLink>

                  <div className="cart-line__body">
                    <AppLink
                      href={`/collection/${line.slug}`}
                      className="cart-line__name"
                      onClick={closeCart}
                    >
                      {line.name}
                    </AppLink>

                    {line.variantLabel && (
                      <p className="cart-line__variant">{line.variantLabel}</p>
                    )}

                    <p className="cart-line__unit">
                      {formatPrice(line.price, line.currency)} <span>{t('cart.each')}</span>
                    </p>

                    <div className="cart-line__foot">
                      <div className="qty">
                        <button
                          type="button"
                          className="qty__btn"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label={t('cart.decrease', { name: line.name })}
                          disabled={line.qty <= 1}
                        >
                          <Minus width={12} height={12} />
                        </button>
                        <span className="qty__value" aria-live="polite">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="qty__btn"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label={t('cart.increase', { name: line.name })}
                          disabled={line.qty >= 99}
                        >
                          <Plus width={12} height={12} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-line__remove"
                        onClick={() => removeItem(line.key)}
                        aria-label={t('cart.removeAria', { name: line.name })}
                      >
                        {t('cart.remove')}
                      </button>
                    </div>
                  </div>

                  <p className="cart-line__total">
                    {formatPrice(line.price * line.qty, line.currency)}
                  </p>
                </li>
              ))}
            </ul>

            <footer className="cart-drawer__foot">
              <div className="cart-drawer__subtotal">
                <span>{t('cart.subtotal')}</span>
                <strong>{formatPrice(subtotal, currency)}</strong>
              </div>

              <button
                type="button"
                className={`btn btn--solid btn--block ${isRedirecting ? 'btn--loading' : ''}`}
                onClick={handleCheckout}
                disabled={isRedirecting}
                aria-busy={isRedirecting}
              >
                <span>{isRedirecting ? t('cart.connecting') : t('cart.checkout')}</span>
                {isRedirecting ? (
                  <span className="btn__spinner" aria-hidden="true" />
                ) : (
                  <ArrowUpRight width={14} height={14} />
                )}
              </button>

              <p className="cart-drawer__note">{t('cart.taxNote')}</p>

              {handoffFailed && (
                <p className="cart-drawer__error" role="status">
                  {t('cart.handoffError', { email: site.email })}
                  <AppLink href={`mailto:${site.email}`} className="cart-drawer__error-link">
                    {site.email}
                  </AppLink>
                </p>
              )}
            </footer>
          </>
        )}
      </div>

      {/*
        Painted the moment Checkout is pressed, above the drawer (z-index 160).
        The handoff is a single top-level navigation, so this overlay is what
        the visitor sees while the store responds — never a frozen cart.
      */}
      {isRedirecting && (
        <div className="checkout-overlay" role="status" aria-live="assertive">
          <div className="checkout-overlay__inner">
            <span className="checkout-overlay__spinner" aria-hidden="true" />
            <p className="checkout-overlay__title">{t('cart.overlayTitle')}</p>
            <p className="checkout-overlay__note">{t('cart.overlayNote')}</p>
          </div>
        </div>
      )}
    </div>,
    document.body,
  )
}
