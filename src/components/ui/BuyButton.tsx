import { useMemo, useState } from 'react'
import type { Product } from '../../data/types'
import { resolvePurchaseUrl } from '../../lib/purchase'
import { useCart } from '../../lib/cart'
import { site } from '../../data/site'
import { ArrowUpRight, Check, Info } from './Icons'
import { useI18n } from '../../i18n'

interface BuyButtonProps {
  product: Product
  variant?: 'solid' | 'outline' | 'link'
  block?: boolean
  label?: string
  /** Show size chips when the product has variants */
  showVariants?: boolean
  /** Show the quantity stepper (off inside compact contexts like Quick View) */
  showQty?: boolean
  onNavigate?: () => void
}

type Notice = 'none' | 'choose-size' | 'added'

/**
 * BUYING
 * ------------------------------------------------------------------
 * Adding to the cart is a request to reserve a piece, not a payment.
 * The selection is handed to our store, which owns the transaction.
 *
 * Pieces offered through the studio — one-of-a-kind works, commissions,
 * and archive pieces — are arranged by letter rather than through the
 * cart, so the visitor is never left with a button that does nothing.
 */
export function BuyButton({
  product,
  variant = 'solid',
  block = true,
  label,
  showVariants = true,
  showQty = true,
  onNavigate,
}: BuyButtonProps) {
  const { t } = useI18n()
  const { addItem, openCart } = useCart()
  const [selected, setSelected] = useState<string | undefined>(
    product.variants?.length === 1 ? product.variants[0].id : undefined,
  )
  const [qty, setQty] = useState(1)
  const [notice, setNotice] = useState<Notice>('none')

  /* A stable array reference, so the memo below does not re-run needlessly. */
  const variants = useMemo(() => product.variants ?? [], [product.variants])

  const selectedVariant = useMemo(
    () => variants.find((v) => v.id === selected),
    [variants, selected],
  )

  const availability = product.availability
  const archived = availability === 'sold-out'
  const backOrder = availability === 'made-to-order'
  const enquiry = availability === 'enquire'
  const hasVariants = variants.length > 0

  /* Sold by the studio rather than through the store's own checkout. */
  const directOnly = !product.wooId
  const studioOnly = directOnly || Boolean(selectedVariant && !selectedVariant.wooVariationId)

  const storeUrl = resolvePurchaseUrl(product, selected)
  const addLabel = label ?? t('buy.addToCart')

  const subject = t('buy.enquirySubject', {
    name: `${product.name}${selectedVariant ? ` (${selectedVariant.label})` : ''}`,
  })
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent(subject)}`

  const handleAdd = () => {
    if (archived || studioOnly) return

    if (hasVariants && !selected) {
      setNotice('choose-size')
      return
    }

    const result = addItem(product, { variant: selectedVariant, qty })

    if (result === 'added') {
      setNotice('added')
      openCart()
      onNavigate?.()
      return
    }

    /* 'unavailable' is already handled by the archived/enquiry branch above. */
    if (result !== 'unavailable') setNotice('choose-size')
  }

  const buttonClass =
    variant === 'solid' ? 'btn btn--solid' : variant === 'outline' ? 'btn btn--outline' : 'btn btn--link'

  const buttonLabel = archived
    ? t('buy.archived')
    : hasVariants && !selected
      ? t('buy.chooseSize')
      : backOrder
        ? t('buy.orderViaStore')
        : addLabel

  const variantsField = showVariants && hasVariants && (
    <fieldset className="buy__variants">
      <legend className="buy__legend">{t('buy.size')}</legend>
      <div className="chip-row">
        {variants.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`chip ${selected === v.id ? 'is-active' : ''}`}
            aria-pressed={selected === v.id}
            onClick={() => {
              setSelected(v.id)
              setNotice('none')
            }}
          >
            {v.label}
          </button>
        ))}
      </div>
    </fieldset>
  )

  /* -------------------- Archive, commission and studio pieces -------------------- */
  if (archived || enquiry || studioOnly) {
    const viaStudio = !archived

    return (
      <div className="buy">
        {variantsField}

        {viaStudio ? (
          <a className={`${buttonClass} ${block ? 'btn--block' : ''}`} href={enquiryHref}>
            <span>{enquiry ? t('buy.enquirePiece') : t('buy.requestPiece')}</span>
            <ArrowUpRight width={14} height={14} />
          </a>
        ) : (
          <button type="button" className={`${buttonClass} ${block ? 'btn--block' : ''}`} disabled>
            <span>{t('buy.archived')}</span>
          </button>
        )}

        <p className="buy__note">
          {archived
            ? t('buy.noteArchived')
            : backOrder
              ? t('buy.noteBackOrder')
              : t('buy.noteStudio')}
        </p>

        {storeUrl && viaStudio && (
          <p className="buy__note buy__note--secondary">
            <a className="buy__direct" href={storeUrl} target="_blank" rel="noopener noreferrer">
              {t('buy.seeInStore')}
            </a>
          </p>
        )}
      </div>
    )
  }

  /* -------------------- Standard purchase -------------------- */
  return (
    <div className="buy">
      {variantsField}

      <div className={`buy__actions ${showQty ? '' : 'buy__actions--compact'}`}>
        {showQty && (
          <div className="qty qty--lg">
            <button
              type="button"
              className="qty__btn"
              onClick={() => setQty((n) => Math.max(1, n - 1))}
              aria-label={t('buy.decreaseQty')}
              disabled={qty <= 1}
            >
              <span aria-hidden="true">−</span>
            </button>
            <span className="qty__value" aria-live="polite" aria-label={t('buy.quantityN', { count: qty })}>
              {qty}
            </span>
            <button
              type="button"
              className="qty__btn"
              onClick={() => setQty((n) => Math.min(99, n + 1))}
              aria-label={t('buy.increaseQty')}
              disabled={qty >= 99}
            >
              <span aria-hidden="true">+</span>
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={handleAdd}
          className={`${buttonClass} ${block ? 'btn--block' : ''} buy__add`}
          aria-describedby={notice === 'choose-size' ? `buy-notice-${product.id}` : undefined}
        >
          <span>{notice === 'added' ? t('buy.added') : buttonLabel}</span>
          {notice === 'added' ? <Check width={14} height={14} /> : <ArrowUpRight width={14} height={14} />}
        </button>
      </div>

      <p className="buy__note">
        {t('buy.noteShipping')}
        {storeUrl && (
          <>
            {' '}
            <a className="buy__direct" href={storeUrl} target="_blank" rel="noopener noreferrer">
              {t('buy.buyDirect')}
            </a>
            .
          </>
        )}
      </p>

      {notice === 'choose-size' && (
        <p className="buy__notice" id={`buy-notice-${product.id}`} role="status">
          <Info width={14} height={14} aria-hidden="true" />
          <span>{t('buy.selectSize')}</span>
        </p>
      )}
    </div>
  )
}
