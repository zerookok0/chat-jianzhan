import type { Product } from '../../data/types'

export interface LinkItem {
  label: string
  href: string
}

export interface SiteContent {
  brand: string
  brandCn: string
  tagline: string
  legalName: string
  email: string
  studio: string
  hours: string
  url: string
  currency: string
  social: LinkItem[]
  policies: LinkItem[]
  navigation: LinkItem[]
}

export interface HomeContent {
  hero: {
    kicker: string
    titleLine1: string
    titleLine2: string
    line: string
    sub: string
    cta: string
  }
  soul: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    body: string
    cta: string
    caption: string
  }
  collection: {
    eyebrow: string
    title: string
    note: string
    cta: string
  }
  craft: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  gifting: {
    eyebrow: string
    title: string
    body: string
    list: string[]
    cta: string
  }
  journal: {
    eyebrow: string
    title: string
    cta: string
  }
  closing: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
  }
}

export interface ContentBundle {
  products: Product[]
  site: SiteContent
  home: HomeContent
}

export interface RepoConfig {
  owner: string
  repo: string
  branch: string
  token: string
}

export interface RepoFile {
  path: string
  /** Base64-encoded file body */
  base64: string
}

export interface CommitResult {
  sha: string
  url: string
}

export type AdminStatus =
  | { kind: 'idle'; message: string }
  | { kind: 'loading'; message: string }
  | { kind: 'saving'; message: string }
  | { kind: 'success'; message: string; url?: string }
  | { kind: 'error'; message: string }
