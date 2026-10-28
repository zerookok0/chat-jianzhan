import { useMemo, useState } from 'react'
import type { Product } from '../../data/types'
import { resolvePurchaseUrl } from '../../lib/purchase'
import { ArrowUpRight, Info } from './Icons'

interface BuyButtonProps {
  product: Product
  variant?: 'solid' | 'outline' | 'link'
  block?: boolean
  label?: string
  /** Show size chips when the product has variants */
  showVariants?: boolean
  onNavigate?: () => void
}

type Notice = 'none' | 'choose-size' | 'not-configured'

/**
 * Buying always happens on the WordPress / WooCommerce store.
 * This site has no cart, checkout, payment or stock logic.
 *
 * If an option has no configured URL we say so plainly and never
 * fabricate a link. Back-order and archive pieces invite an enquiry.
 */
export function BuyButton({
  product,
  variant = 'solid',
  block = true,
  label = 'Buy on our store',
  showVariants = true,
  onNavigate,
}: BuyButtonProps) {
  const variants = product.variants ?? []
  const [selected, setSelected] = useState<string | undefined>(
    variants.length === 1 ? variants[0].id : undefined,
  )
  const [notice, setNotice] = useState<Notice>('none')

  const needsVariant = variants.length > 0 && !selected
  const url = useMemo(() => resolvePurchaseUrl(product, selected), [product, selected])

  const availability = product.availability
  const archived = availability === 'sold-out'
  const backOrder = availability === 'made-to-order'
  const enquiry = availability === 'enquire'

  const handleClick = () => {
    if (needsVariant) {
      setNotice('choose-size')
      return
    }
    if (!url) {
      setNotice('not-configured')
      return
    }
    setNotice('none')
    onNavigate?.()
    // Deliberate normal navigation — the store owns the purchase.
    window.location.assign(url)
  }

  const buttonClass =
    variant === 'solid' ? 'btn btn--solid' : variant === 'outline' ? 'btn btn--outline' : 'btn btn--link'

  const buttonLabel = archived
    ? 'Archived — not for sale'
    : enquiry
      ? 'Enquire about this piece'
      : needsVariant
        ? 'Choose a size'
        : backOrder
          ? 'Order via our store'
          : label

  return (
    <div className="buy">
      {showVariants && variants.length > 0 && (
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
      )}

      {enquiry ? (
        <a className={`${buttonClass} ${block ? 'btn--block' : ''}`} href="#enquiry">
          <span>{buttonLabel}</span>
          <ArrowUpRight width={14} height={14} />
        </a>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className={`${buttonClass} ${block ? 'btn--block' : ''}`}
          disabled={archived}
          aria-describedby={notice !== 'none' ? `buy-notice-${product.id}` : undefined}
        >
          <span>{buttonLabel}</span>
          {!archived && <ArrowUpRight width={14} height={14} />}
        </button>
      )}

      <p className="buy__note">
        {enquiry
          ? 'Back-order and archive pieces are arranged directly with the studio.'
          : 'Secure checkout on our WordPress store — opens in this tab.'}{' '}
        Demo prices are illustrative, not live.
      </p>

      {notice !== 'none' && (
        <p className="buy__notice" id={`buy-notice-${product.id}`} role="status">
          <Info width={14} height={14} aria-hidden="true" />
          <span>
            {notice === 'choose-size'
              ? 'Select a size to continue.'
              : 'Purchase link not configured yet. Add this piece’s WordPress product URL in src/data/products.ts to enable checkout.'}
          </span>
        </p>
      )}
    </div>
  )
}
