/**
 * BRAND & SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Everything a non-developer needs to change lives here.
 * Product data is NOT here — see src/data/products.ts
 */

/**
 * The store that owns checkout and payment. Read from the build environment
 * so the "buy directly" links can never drift from the real checkout host.
 */
const STORE_URL = ((import.meta.env.VITE_WP_SITE_URL as string | undefined) ?? '').replace(/\/+$/, '')

export const site = {
  brand: 'JIANZHAN',
  brandCn: '建盏',
  tagline: 'The Earth in Your Hands, the Cosmos in the Glaze.',
  legalName: 'JIANZHAN Studio',
  email: 'studio@jianzhan.studio',
  studio: 'Jianyang, Nanping, Fujian, China',
  hours: 'Mon – Fri, 09:00 – 18:00 (GMT+8)',
  /** Public domain of this site, used for canonical links and metadata. */
  url: 'https://jianzhan.studio',
  /** The shop. All buying, payment and fulfilment happen there. */
  shopBaseUrl: STORE_URL,
  /** Product links fall back to `${shopBaseUrl}/product/${slug}` when no direct URL is set */
  autoDerivePurchaseUrl: true,
  currency: 'USD',
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  policies: [
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Care & Use', href: '/care' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'Our Craft', href: '/craft' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
] as const
