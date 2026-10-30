import { useFavourites } from '../../lib/hooks'
import { Heart } from './Icons'
import { useI18n } from '../../i18n'

interface FavButtonProps {
  productId: string
  productName: string
  variant?: 'icon' | 'labelled'
  className?: string
}

/**
 * Favourites are stored in this browser only (localStorage).
 * The label says so explicitly — no cross-device sync is implied.
 */
export function FavButton({ productId, productName, variant = 'icon', className = '' }: FavButtonProps) {
  const { t } = useI18n()
  const { isFavourite, toggle } = useFavourites()
  const active = isFavourite(productId)

  return (
    <button
      type="button"
      className={`fav-btn fav-btn--${variant} ${active ? 'is-active' : ''} ${className}`}
      aria-pressed={active}
      aria-label={
        active
          ? t('fav.remove', { name: productName })
          : t('fav.save', { name: productName })
      }
      title={active ? t('fav.savedTitle') : t('fav.saveTitle')}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggle(productId)
      }}
    >
      <Heart filled={active} width={15} height={15} />
      {variant === 'labelled' && <span>{active ? t('fav.saved') : t('fav.saveLabel')}</span>}
    </button>
  )
}
