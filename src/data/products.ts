import type { Product, GlazeId, CategoryId } from './types'
import { defaultProducts } from './content'

/**
 * THE CATALOGUE
 * ------------------------------------------------------------------
 * Every piece the studio currently offers, in one place. Home, the
 * collection, quick view, the glaze explorer and the product page all
 * read from this file.
 *
 * To list a new work, copy an existing object and edit it. Leave
 * `purchaseUrl` at null while a piece is still held by the studio — the
 * product page then offers it by letter instead of inventing a link.
 */

export const products: Product[] = defaultProducts

/* ---------------- Glaze taxonomy (only glazes with real photos appear) ---------------- */

export interface Glaze {
  id: GlazeId
  name: string
  cn: string
  tagline: string
  description: string
  image: Product['images'][number]
}

export const glazes: Glaze[] = [
  {
    id: 'oil-spot',
    name: 'Oil Spot',
    cn: '油滴',
    tagline: 'Iron crystals, cooled slowly',
    description:
      'During firing, iron oxide in the glaze gathers into droplets. If the kiln cools at the right pace, those droplets crystallise into bright metallic spots that sit proud of the dark ground.',
    image: 'bowl-oil-spot',
  },
  {
    id: 'iridescent',
    name: 'Blue Iridescent',
    cn: '曜变',
    tagline: 'Colour without pigment',
    description:
      'A microscopic surface layer that splits raw light into violet, copper, and celestial blue. An elusive shimmer that moves with the gaze, long prized as the pinnacle of tea wares.',
    image: 'bowl-iris',
  },
  {
    id: 'hare-fur',
    name: "Hare's Fur",
    cn: '兔毫',
    tagline: 'Streaks left by the flame',
    description:
      'Iron-rich glaze runs in fine vertical lines as it melts, drawing streaks of bronze and rust from rim toward foot. The direction of each streak records how heat moved through the kiln.',
    image: 'bowl-hare',
  },
  {
    id: 'jade',
    name: 'Jade Glaze',
    cn: '青釉',
    tagline: 'Green held under shadow',
    description:
      'A cooler counterpoint to the iron glazes. Where the others glitter, this one absorbs light, pooling into a soft celadon green inside an otherwise dark bowl.',
    image: 'bowl-jade',
  },
  {
    id: 'tea-dust',
    name: 'Tea Dust',
    cn: '茶叶末',
    tagline: 'Matte, mineral, quiet',
    description:
      'A matte glaze flecked with olive and ash. It is the least reflective surface in the collection, and the one that changes most slowly with handling.',
    image: 'bowl-minimal',
  },
]

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'tea-bowl', label: 'Tea Bowls' },
  { id: 'vessel', label: 'Vessels' },
  { id: 'set', label: 'Sets' },
]

/* ---------------- Helpers ---------------- */

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getGlaze(id: GlazeId): Glaze | undefined {
  return glazes.find((g) => g.id === id)
}

export function getRelated(product: Product, count = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const score = (p: Product) => (p.glaze === product.glaze ? 2 : 0) + (p.featured ? 1 : 0)
      return score(b) - score(a)
    })
    .slice(0, count)
}

export function formatPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const availabilityLabels: Record<Product['availability'], string> = {
  available: 'Available',
  'made-to-order': 'Made to order',
  'sold-out': 'Sold — archive',
  enquire: 'Enquire',
}
