import type { Policy } from './types'

export const terms: Policy = {
  slug: 'terms',
  eyebrow: 'Policy',
  title: 'Terms of Service',
  metaTitle: 'Terms of Service | JIANZHAN',
  description:
    'The terms governing use of the JIANZHAN website and the purchase of studio works: intellectual property, the artisan craftsmanship and kiln-variation notice, order acceptance, liability and governing law.',
  intro:
    'These terms govern your use of this website and any purchase you make from the studio. They are written to be read, not to be survived. If something is unclear, ask before you order.',
  updated: '1 January 2025',
  sections: [
    {
      id: 'agreement',
      heading: 'Agreement to these terms',
      blocks: [
        {
          kind: 'p',
          text: 'By browsing this website or placing an order, you agree to these terms and to our Privacy Policy. If you do not accept them, please do not use the site. Nothing here affects rights you have under mandatory consumer law in your country of residence; where these terms conflict with such rights, those rights prevail.',
        },
        {
          kind: 'p',
          text: 'This site is operated by JIANZHAN Studio. You must be at least eighteen, or the age of majority where you live, to place an order.',
        },
      ],
    },
    {
      id: 'ip',
      heading: 'Intellectual property',
      blocks: [
        {
          kind: 'p',
          text: 'All content on this website — photography, video, written copy, the JIANZHAN name and mark, layout, typography and code — is owned by JIANZHAN Studio or licensed to it, and is protected by copyright, trade mark and design law.',
        },
        {
          kind: 'list',
          items: [
            'You may view, download and print pages for personal, non-commercial use.',
            'You may share links to any page freely.',
            'You may not reproduce, republish, sell, scrape or redistribute substantial parts of the site, or use its content to train a machine-learning model, without written permission.',
            'You may not use our name, mark or photography to imply endorsement, partnership or provenance that has not been given in writing.',
            'Artwork, diagrams and photographs of individual pieces remain the studio’s property; purchase of a piece conveys the object, not the copyright in its image.',
          ],
        },
        {
          kind: 'p',
          text: 'The ceramic works themselves are handmade objects, not registered designs, and no claim to exclusivity of form or glaze is asserted against the historical Song-era tradition from which the method derives.',
        },
      ],
    },
    {
      id: 'craft',
      heading: 'Artisan craftsmanship and kiln variation',
      blocks: [
        {
          kind: 'callout',
          title: 'Every piece is singular — and that is the point',
          text: 'Our works are handmade and wood-fired. Glaze pooling, colour shifts, oil-spot density, hare’s-fur striation, small pinholes, kiln scars, uneven rims and differences in weight or dimension are the expected result of the process, not faults. The piece you receive will resemble — but will not be identical to — the piece photographed.',
        },
        {
          kind: 'p',
          text: 'Photographs are taken under controlled studio lighting and colours may render differently on different screens. We do not retouch a glaze to make it more regular than it is. Where a piece carries a pronounced kiln mark, we aim to show it.',
        },
        {
          kind: 'p',
          text: 'Because variation is inherent, it is not a ground for return or refund as "not as described". It is, however, no barrier to return at all: our thirty-day unconditional return policy applies to every piece, for any reason or none, with free return shipping and no restocking fee. Kiln variation is not damage; wanting a different bowl is reason enough.',
        },
        {
          kind: 'p',
          text: 'We make no claim that any piece is museum-equivalent, certified, appraised or of verified antique origin. The lineage we claim is a method — the iron-rich clay, dragon kilns and wood firing of the Song-era Jian kilns of Fujian — not a title. Any statement of provenance accompanies the piece in writing; anything not stated in writing is not claimed.',
        },
      ],
    },
    {
      id: 'orders',
      heading: 'Orders and acceptance',
      blocks: [
        {
          kind: 'p',
          text: 'Your order is an offer to buy. A contract is formed only when we send a written dispatch confirmation. Until then, we may decline an order — for example where a piece has sold, where a price or description error is obvious, where stock cannot be verified, or where we suspect fraud. If we decline after payment, we refund in full immediately.',
        },
        {
          kind: 'list',
          items: [
            'Prices are shown in the currency selected at checkout and may change without notice; the price at the moment of order governs.',
            'Duties and import taxes are shown at checkout where we collect them, and are otherwise the recipient’s responsibility.',
            'Made-to-order works begin production on acceptance and are subject to the lead time stated on the product page.',
            'We may limit quantities on a single order or per customer where a firing yields very few pieces.',
            'Where a piece is one of one and sells twice in error, the earlier accepted order prevails and the later is refunded in full.',
          ],
        },
      ],
    },
    {
      id: 'payment',
      heading: 'Pricing, payment and title',
      blocks: [
        {
          kind: 'p',
          text: 'Payment is taken at the time of order through our payment processor. Card details are handled entirely within their PCI-DSS compliant environment and never reach our servers. All amounts are payable in the currency shown at checkout; your bank may apply its own conversion or foreign-transaction fee, over which we have no control.',
        },
        {
          kind: 'p',
          text: 'Title to a piece passes to you on full payment and delivery. Risk passes on delivery, or on collection by your nominated carrier where you arrange carriage yourself. Until risk passes, the shipment is insured for its full value and handled as fragile freight.',
        },
      ],
    },
    {
      id: 'shipping',
      heading: 'Shipping, returns and cancellation',
      blocks: [
        {
          kind: 'p',
          text: 'Shipping, delivery windows, damage procedure and the full thirty-day unconditional return policy — free return shipping, prepaid label, no restocking fee, full refund — are set out in the Shipping & Returns policy, which forms part of these terms.',
        },
        {
          kind: 'p',
          text: 'If you are a consumer in the UK or EU, you also have a statutory right to cancel a distance contract within fourteen days of delivery, separate from and in addition to our thirty-day promise. You do not need to give a reason, and we do not charge for exercising it. Where the two overlap, the longer and more generous term applies.',
        },
      ],
    },
    {
      id: 'use',
      heading: 'Acceptable use of this site',
      blocks: [
        {
          kind: 'p',
          text: 'You agree not to interfere with the operation or security of the site, attempt to gain unauthorised access to any account or system, introduce malicious code, place automated load on our servers beyond ordinary browsing, or use the site in a way that is unlawful or misleading.',
        },
        {
          kind: 'p',
          text: 'We may suspend or withdraw access to the site, in whole or in part, for maintenance or where we reasonably believe these terms have been breached. We will not use that power to avoid an outstanding order or a refund obligation.',
        },
      ],
    },
    {
      id: 'availability',
      heading: 'Availability and accuracy',
      blocks: [
        {
          kind: 'p',
          text: 'We take care with every description, dimension and photograph, but the site is a catalogue and errors occur. If an obvious pricing or descriptive error affects your order, we will contact you before dispatch and offer the corrected terms, or cancel and refund in full — your choice.',
        },
        {
          kind: 'p',
          text: 'We do not guarantee uninterrupted availability of the site. Access may be suspended for repair, maintenance or reasons outside our control.',
        },
      ],
    },
    {
      id: 'liability',
      heading: 'Limitation of liability',
      blocks: [
        {
          kind: 'p',
          text: 'Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, for breach of your statutory consumer rights, or for any other liability that cannot lawfully be limited.',
        },
        {
          kind: 'p',
          text: 'Subject to that, and to the fullest extent permitted by law: we are not liable for indirect or consequential loss, loss of profit, loss of business, loss of anticipated savings or loss of data; and our total liability arising from any order is limited to the amount you paid for that order.',
        },
        {
          kind: 'p',
          text: 'We are not responsible for loss or damage arising from use of a piece contrary to our Care & Use guidance — for example thermal shock from pouring boiling water into a chilled bowl, or damage from a microwave, oven or dishwasher — nor for ordinary wear, patina or crazing that develops within the glaze through normal use.',
        },
      ],
    },
    {
      id: 'third-party',
      heading: 'Third-party links and services',
      blocks: [
        {
          kind: 'p',
          text: 'The site may link to external sites, including our payment processor and courier tracking pages. Those sites are not under our control and we are not responsible for their content, terms or privacy practices. A link is not an endorsement.',
        },
      ],
    },
    {
      id: 'law',
      heading: 'Governing law and disputes',
      blocks: [
        {
          kind: 'p',
          text: 'These terms are governed by the laws of the People’s Republic of China, and the courts of Fujian Province have non-exclusive jurisdiction. Nothing in this clause deprives a consumer of the protection of the mandatory laws of their country of habitual residence, or of the right to bring proceedings in the courts of that country.',
        },
        {
          kind: 'p',
          text: 'Before any formal step, please write to the studio. Most disputes about a handmade object are settled by a photograph and a candid conversation, and we would rather begin there.',
        },
      ],
    },
    {
      id: 'general',
      heading: 'General',
      blocks: [
        {
          kind: 'list',
          items: [
            'If any provision is found unenforceable, the rest remains in force.',
            'A failure to enforce a provision is not a waiver of it.',
            'We may assign our rights and obligations; you may not without our written consent.',
            'These terms, the Privacy Policy and the Shipping & Returns policy constitute the entire agreement between us.',
            'We may revise these terms; the version in force is the one published when your order is accepted, and the date at the top of this page shows when it changed.',
          ],
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        {
          kind: 'p',
          text: 'Questions about these terms, an order, or a piece already in your hands can go to the studio directly. We read every message and reply within one business day, Monday to Friday.',
        },
      ],
    },
  ],
}
