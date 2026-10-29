import { useMemo, useState } from 'react'
import type { Product } from '../../data/types'
import { resolvePurchaseUrl } from '../../lib/purchase'
import { useCart } from '../../lib/cart'
import { site } from '../../data/site'
import { ArrowUpRight, Check, Info } from './Icons'

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
  label = 'Add to cart',
  showVariants = true,
  showQty = true,
  onNavigate,
}: BuyButtonProps) {
  const variants = product.variants ?? []
  const { addItem, openCart } = useCart()
  const [selected, setSelected] = useState<string | undefined>(
    variants.length === 1 ? variants[0].id : undefined,
  )
  const [qty, setQty] = useState(1)
  const [notice, setNotice] = useState<Notice>('none')

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

  const subject = `Enquiry — ${product.name}${selectedVariant ? ` (${selectedVariant.label})` : ''}`
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
    ? 'Archived — not for sale'
    : hasVariants && !selected
      ? 'Choose a size'
      : backOrder
        ? 'Order via our store'
        : label

  const variantsField = showVariants && hasVariants && (
    <fieldset className="buy__variants">
      <legend className="buy__legend">Size</legend>
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
            <span>{enquiry ? 'Enquire about this piece' : 'Request this piece'}</span>
            <ArrowUpRight width={14} height={14} />
          </a>
        ) : (
          <button type="button" className={`${buttonClass} ${block ? 'btn--block' : ''}`} disabled>
            <span>Archived — not for sale</span>
          </button>
        )}

        <p className="buy__note">
          {archived
            ? 'This piece has left the studio and is held in the archive. Comparable works are released each firing.'
            : backOrder
              ? 'Fired to order in the studio. Write to us and we will confirm the current lead time and hold a place in the next firing.'
              : 'One of a kind, held by the studio. Write to us and we will confirm availability, dimensions and shipping.'}
        </p>

        {storeUrl && viaStudio && (
          <p className="buy__note buy__note--secondary">
            <a className="buy__direct" href={storeUrl} target="_blank" rel="noopener noreferrer">
              See this piece in our store
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
              aria-label="Decrease quantity"
              disabled={qty <= 1}
            >
              <span aria-hidden="true">−</span>
            </button>
            <span className="qty__value" aria-live="polite" aria-label={`Quantity ${qty}`}>
              {qty}
            </span>
            <button
              type="button"
              className="qty__btn"
              onClick={() => setQty((n) => Math.min(99, n + 1))}
              aria-label="Increase quantity"
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
          <span>{notice === 'added' ? 'Added to cart' : buttonLabel}</span>
          {notice === 'added' ? <Check width={14} height={14} /> : <ArrowUpRight width={14} height={14} />}
        </button>
      </div>

      <p className="buy__note">
        Insured worldwide express shipping in custom wooden crating. Returns accepted within 30
        days, free of charge.
        {storeUrl && (
          <>
            {' '}
            <a className="buy__direct" href={storeUrl} target="_blank" rel="noopener noreferrer">
              Or buy this piece directly
            </a>
            .
          </>
        )}
      </p>

      {notice === 'choose-size' && (
        <p className="buy__notice" id={`buy-notice-${product.id}`} role="status">
          <Info width={14} height={14} aria-hidden="true" />
          <span>Select a size to continue.</span>
        </p>
      )}
    </div>
  )
}
