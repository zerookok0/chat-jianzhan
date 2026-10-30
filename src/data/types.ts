/**
 * PRODUCT DATA — single source of truth
 * ------------------------------------------------------------------
 * Home, Collection, Quick View, glaze explorer and the product page all
 * read from this file. Nothing else defines a product.
 *
 * PURCHASING
 * This site never takes payment. Each piece either carries a direct link
 * to its product page in the store (`purchaseUrl`), or is sold through the
 * cart, which hands the selection to the store at checkout. A piece with
 * neither is offered by letter, from the studio.
 */

export type Availability = 'available' | 'made-to-order' | 'sold-out' | 'enquire'

export type GlazeId = 'oil-spot' | 'hare-fur' | 'iridescent' | 'jade' | 'tea-dust'

export type CategoryId = 'tea-bowl' | 'vessel' | 'set'

export interface SpecItem {
  label: string
  value: string
}

export interface Variant {
  id: string
  label: string
  /** Absolute URL on your WordPress site. null = not configured yet. */
  purchaseUrl: string | null
  /** WooCommerce variation ID. Required before this size can be added to the cart. */
  wooVariationId?: number
}

export interface Product {
  id: string
  slug: string
  name: string
  /** Short editorial line used in grids */
  subtitle: string
  description: string
  price: number
  currency: string
  images: string[]
  category: CategoryId
  glaze: GlazeId
  specifications: SpecItem[]
  /** Primary buy link. null = not configured. */
  purchaseUrl: string | null
  /**
   * WooCommerce product ID. Required for "add to cart" — without it the
   * piece can still be viewed but cannot be handed to the store.
   */
  wooId?: number
  /** Optional per-size links; when present the UI asks for a size first. */
  variants?: Variant[]
  featured: boolean
  availability: Availability
  year: string
}
