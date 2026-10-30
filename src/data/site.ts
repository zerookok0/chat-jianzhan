/**
 * BRAND & SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Everything a non-developer needs to change lives here.
 * Product data is NOT here — see src/data/products.ts
 */

import { defaultSite } from './content'

/**
 * The store that owns checkout and payment. Read from the build environment
 * so the "buy directly" links can never drift from the real checkout host.
 */
const STORE_URL = ((import.meta.env.VITE_WP_SITE_URL as string | undefined) ?? '').replace(/\/+$/, '')

export const site = {
  ...defaultSite,
  /** The shop. All buying, payment and fulfilment happen there. */
  shopBaseUrl: STORE_URL,
  /** Product links fall back to `${shopBaseUrl}/product/${slug}` when no direct URL is set */
  autoDerivePurchaseUrl: true,
} as const

export const navigation = defaultSite.navigation
