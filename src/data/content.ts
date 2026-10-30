import productsJson from '../../content/products.json'
import siteJson from '../../content/site.json'
import homeJson from '../../content/home.json'
import type { Product } from './types'
import type { HomeContent, SiteContent } from '../lib/admin/types'

/**
 * CONTENT
 * ------------------------------------------------------------------
 * Editable copy and product data live in /content as JSON so the admin
 * page can commit changes to GitHub without touching component code.
 * The JSON is bundled at build time for the public storefront.
 */

export const defaultProducts = productsJson.products as Product[]
export const defaultSite = siteJson as SiteContent
export const defaultHome = homeJson as HomeContent
