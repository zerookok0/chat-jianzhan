import type { Policy } from './types'

export const shipping: Policy = {
  slug: 'shipping',
  eyebrow: 'Policy',
  title: 'Shipping & Returns',
  metaTitle: 'Shipping & Returns | JIANZHAN',
  description:
    'Insured worldwide express shipping in custom wooden crating, and a 30-day unconditional return policy with free return shipping, a prepaid label and no restocking fee.',
  intro:
    'Every piece travels by insured express courier, packed by hand for a material that breaks. If a bowl is not right for you, send it back within thirty days — the return costs you nothing.',
  updated: '1 January 2025',
  sections: [
    {
      id: 'dispatch',
      heading: 'Dispatch & lead times',
      blocks: [
        {
          kind: 'p',
          text: 'Every piece currently listed is held in our local warehouse and will be delivered within two to three business days of an order. A tracking number and link are issued as soon as the parcel leaves the warehouse.',
        },
        {
          kind: 'list',
          items: [
            'In stock — delivered within 2 to 3 business days.',
            'If a piece is ever offered made to order, the product page states the lead time before you buy.',
            'Archive and back order — arranged directly with the studio.',
          ],
        },
      ],
    },
    {
      id: 'packing',
      heading: 'Packing',
      blocks: [
        {
          kind: 'p',
          text: 'Ceramic cannot be insured cheaply by wrapping it in cardboard. Each bowl is cushioned inside a fitted paulownia box, fixed in a foam cradle so it cannot shift, and the cradled box is then set inside a custom-built wooden crate. The crate is sealed, banded and labelled with its own handling marks. A firing note and a care card travel with the piece.',
        },
        {
          kind: 'p',
          text: 'Because the crating is built for the individual piece, crates are not reusable as shipping containers. We ask that you keep yours for storage; the box inside is suitable for long-term display.',
        },
      ],
    },
    {
      id: 'delivery',
      heading: 'Delivery & tracking',
      blocks: [
        {
          kind: 'p',
          text: 'We ship worldwide with insured express couriers. Live tracking is issued on dispatch and updates at every handover, including customs clearance. Deliveries are made to the address supplied at checkout, and most destinations require a signature; if nobody is available the courier will attempt redelivery rather than leave the crate unattended.',
        },
        {
          kind: 'list',
          items: [
            'In-stock pieces — delivered within 2 to 3 business days.',
            'Remote destinations and customs clearance may add time; we monitor every shipment until delivery is confirmed.',
          ],
        },
      ],
    },
    {
      id: 'duties',
      heading: 'Duties & taxes',
      blocks: [
        {
          kind: 'p',
          text: 'Prices are quoted in your selected currency with duties included for the destinations we serve directly. Where local import tax applies and is collected by the courier, it is shown at checkout before payment, never billed afterwards. If a carrier presents a charge you did not see at checkout, send us the receipt and we will settle it.',
        },
      ],
    },
    {
      id: 'damage',
      heading: 'Damage in transit',
      blocks: [
        {
          kind: 'p',
          text: 'Every shipment is insured for its full value and handled as fragile freight. In the rare event that a piece arrives damaged, photograph the outer crate, the inner box and the piece itself before unpacking any further, and email us within seventy-two hours of delivery. We will arrange collection and either replace the work or refund it in full — your choice.',
        },
        {
          kind: 'callout',
          title: 'Not the same as a kiln variation',
          text: 'A damaged piece is broken, chipped or cracked. A glaze that pools unevenly, shifts in colour, or carries the marks of the fire is not damage — it is the record of how the piece was made, and it is never a ground for refund or exchange.',
        },
      ],
    },
    {
      id: 'returns',
      heading: '30-day unconditional returns',
      blocks: [
        {
          kind: 'callout',
          title: 'Your right to return, without conditions',
          text: 'You may return any piece within thirty days of delivery, for any reason or for no reason at all. Return shipping is free, a prepaid label is supplied, there is no restocking fee, and you receive a full refund of the purchase price.',
          items: [
            'Return window: 30 calendar days from the date of delivery.',
            'Return shipping cost to you: zero — we pay it.',
            'Prepaid return label: issued by us on request.',
            'Restocking fee: none.',
            'Refund: the full amount you paid, including original shipping and duties.',
            'No explanation required, and no condition on the reason for return.',
          ],
        },
        {
          kind: 'p',
          text: 'To begin, email us with your order number. We reply within one business day with a prepaid label and collection instructions. Repack the piece in its original wooden crate where possible; if the crate is no longer available, tell us and we will send replacement packaging at our expense.',
        },
        {
          kind: 'p',
          text: 'We refund to the original payment method once the piece is back in the studio and has been checked for damage beyond ordinary handling. Ordinary handling means the marks of use — a little patina, a foot ring that has touched a table. A piece returned broken is still refunded in full where the break is our packaging at fault; we will tell you plainly if we believe otherwise, and you keep the right to an insurer review.',
        },
        {
          kind: 'list',
          items: [
            'Collection is arranged by us with the same courier network that delivered the piece.',
            'Refunds are processed within five business days of arrival at the studio; banks may take longer to post the credit.',
            'Gift recipients may return for a studio credit or a refund to the purchaser; we will ask which.',
            'Returns from outside your original country are handled the same way; we cover export and import costs on the return leg.',
          ],
        },
      ],
    },
    {
      id: 'exceptions',
      heading: 'What cannot be returned',
      blocks: [
        {
          kind: 'p',
          text: 'The unconditional policy applies to every piece in the catalogue. The only exclusions are bespoke commissions that were made to a specification you supplied and finally approved, and works that have been physically altered — repaired, re-fired, resurfaced or engraved — after delivery.',
        },
        {
          kind: 'p',
          text: 'If you are unsure whether an item falls into one of these categories, ask before ordering. We would rather answer a question than refuse a return.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        {
          kind: 'p',
          text: 'Questions about a shipment, a return or an unlisted destination can go to the studio directly. We read every message and reply within one business day, Monday to Friday.',
        },
      ],
    },
  ],
}
