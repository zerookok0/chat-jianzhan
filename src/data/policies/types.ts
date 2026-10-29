/**
 * POLICY CONTENT — TYPES
 * ------------------------------------------------------------------
 * The four footer policy pages live in this folder as structured data
 * so the copy can be revised without touching any component.
 *
 * Edit freely, but keep two commitments intact:
 *  1. The 30-day unconditional return promise (free return shipping,
 *     a prepaid label, and no restocking fee).
 *  2. No claim about certification, museum equivalence or appraisal.
 *
 * Have a lawyer review Shipping & Returns, Privacy and Terms before the
 * store opens in a new jurisdiction.
 */

export type BlockKind = 'p' | 'list' | 'callout'

export interface PolicyBlock {
  kind: BlockKind
  /** Paragraph copy for 'p' and 'callout' */
  text?: string
  /** Optional heading for a callout */
  title?: string
  /** Bullet items for 'list', or the key terms of a 'callout' */
  items?: string[]
}

export interface PolicySection {
  id: string
  heading: string
  blocks: PolicyBlock[]
}

export interface Policy {
  slug: string
  eyebrow: string
  title: string
  metaTitle: string
  description: string
  intro: string
  updated: string
  sections: PolicySection[]
}
