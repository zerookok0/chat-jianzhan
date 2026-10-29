import type { Policy } from './types'
import { shipping } from './shipping'
import { care } from './care'
import { privacy } from './privacy'
import { terms } from './terms'

export type { Policy, PolicySection, PolicyBlock, BlockKind } from './types'

/**
 * Every policy page, in footer order.
 * Add a new policy here and it is routed, titled and linked automatically.
 */
export const policies: Policy[] = [shipping, care, privacy, terms]

/** Slug → policy lookup used by the router. */
export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug)
}
