/**
 * LOCALISED DATA LAYER
 * ------------------------------------------------------------------
 * The English content in src/data/ stays exactly as it was — it is still
 * the fallback and the source of truth. This module merges Vietnamese
 * copy over it at render time, keyed by slug.
 *
 * Nothing here mutates the imported data: `withLocale` returns new arrays
 * and objects, so no component can accidentally rewrite the catalogue.
 */

import type { Locale } from '../i18n/types'
import { products as productsEn, glazes as glazesEn } from '../data/products'
import { posts as postsEn } from '../data/posts'
import { policies as policiesEn, getPolicy as getPolicyEn } from '../data/policies'
import type { Product, GlazeId, CategoryId } from '../data/types'
import type { Post } from '../data/posts'
import type { Policy } from '../data/policies'
import type { Glaze } from '../data/products'

import { productsVi, glazesVi, categoriesVi } from '../i18n/content/vi/products'
import { postsVi } from '../i18n/content/vi/posts'
import { policiesVi } from '../i18n/content/vi/policies'
import en from '../i18n/locales/en'
import vi from '../i18n/locales/vi'

/** Looks up a dotted key in the locale dictionary, with the same fallback the runtime uses. */
function label(locale: Locale, key: string, fallback: string): string {
  const dict = locale === 'vi' ? vi : en
  const value = dict[key]
  if (typeof value === 'string' && value !== '') return value
  return fallback
}

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export function localiseProduct(product: Product, locale: Locale): Product {
  if (locale !== 'vi') return product

  const copy = productsVi[product.slug]
  if (!copy) return product

  return {
    ...product,
    name: copy.name,
    subtitle: copy.subtitle,
    description: copy.description,
    specifications: copy.specifications,
    // SEO copy is optional on both sides: fall back to the English values.
    seoTitle: copy.seoTitle ?? product.seoTitle,
    seoDescription: copy.seoDescription ?? product.seoDescription,
    // Size labels are the only free-text field left inside a variant.
    variants: product.variants?.map((v) => ({
      ...v,
      label: localiseVariantLabel(v.label, v.id),
    })),
  }
}

/** "Small — 12.6 cm" / "Large — 14.2 cm" → Vietnamese, keeping the measurement. */
function localiseVariantLabel(text: string, id: string): string {
  if (id.endsWith('-a')) return text.replace(/^Small\s*—\s*/, 'Nhỏ — ')
  if (id.endsWith('-b')) return text.replace(/^Large\s*—\s*/, 'Lớn — ')
  return text
}

export function localisedProducts(locale: Locale): Product[] {
  return productsEn.map((p) => localiseProduct(p, locale))
}

export function localisedProductBySlug(slug: string, locale: Locale): Product | undefined {
  const found = productsEn.find((p) => p.slug === slug)
  return found ? localiseProduct(found, locale) : undefined
}

export function localisedRelated(product: Product, locale: Locale, count = 3): Product[] {
  return productsEn
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const score = (p: Product) => (p.glaze === product.glaze ? 2 : 0) + (p.featured ? 1 : 0)
      return score(b) - score(a)
    })
    .slice(0, count)
    .map((p) => localiseProduct(p, locale))
}

/* ------------------------------------------------------------------ */
/* Glazes & categories                                                 */
/* ------------------------------------------------------------------ */

export function localisedGlazes(locale: Locale): Glaze[] {
  if (locale !== 'vi') return glazesEn
  return glazesEn.map((g) => {
    const copy = glazesVi[g.id]
    if (!copy) return g
    return { ...g, name: copy.name, tagline: copy.tagline, description: copy.description }
  })
}

export function localisedGlaze(id: GlazeId, locale: Locale): Glaze | undefined {
  return localisedGlazes(locale).find((g) => g.id === id)
}

export function localisedCategories(locale: Locale): { id: CategoryId; label: string }[] {
  const base: { id: CategoryId; label: string }[] = [
    { id: 'tea-bowl', label: 'Tea Bowls' },
    { id: 'vessel', label: 'Vessels' },
    { id: 'set', label: 'Sets' },
  ]

  return base.map((c) => ({
    ...c,
    label: locale === 'vi' ? (categoriesVi[c.id] ?? c.label) : label(locale, `cat.${c.id}`, c.label),
  }))
}

/* ------------------------------------------------------------------ */
/* Journal                                                             */
/* ------------------------------------------------------------------ */

export function localisePost(post: Post, locale: Locale): Post {
  if (locale !== 'vi') return post
  const copy = postsVi[post.slug]
  if (!copy) return post

  return {
    ...post,
    title: copy.title,
    kicker: copy.kicker,
    excerpt: copy.excerpt,
    body: copy.body,
  }
}

export function localisedPosts(locale: Locale): Post[] {
  return postsEn.map((p) => localisePost(p, locale))
}

export function localisedPostBySlug(slug: string, locale: Locale): Post | undefined {
  const found = postsEn.find((p) => p.slug === slug)
  return found ? localisePost(found, locale) : undefined
}

/* ------------------------------------------------------------------ */
/* Policies                                                            */
/* ------------------------------------------------------------------ */

export function localisedPolicy(slug: string, locale: Locale): Policy | undefined {
  if (locale === 'vi') {
    const copy = policiesVi[slug]
    if (copy) return copy
  }
  return getPolicyEn(slug)
}

export function localisedPolicies(locale: Locale): Policy[] {
  if (locale !== 'vi') return policiesEn
  return policiesEn.map((p) => policiesVi[p.slug] ?? p)
}

/** Policy link labels for the footer, localised. */
export function policyLabel(slug: string, locale: Locale, fallback: string): string {
  return label(locale, `policy.${slug}`, fallback)
}
