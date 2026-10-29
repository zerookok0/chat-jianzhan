import type { Policy } from './types'

export const care: Policy = {
  slug: 'care',
  eyebrow: 'Policy',
  title: 'Care & Use',
  metaTitle: 'Care & Use | JIANZHAN',
  description:
    'How to care for an iron-rich Jian ware tea bowl: hand washing only, no abrasives, protection from thermal shock, and how the glaze develops its patina over months of use.',
  intro:
    'A Jian ware bowl is not difficult to look after, but it is a different object from porcelain. Two rules carry most of the weight: wash it by hand, and never shock it with a sudden change of temperature.',
  updated: '1 January 2025',
  sections: [
    {
      id: 'before-first-use',
      heading: 'Before the first pour',
      blocks: [
        {
          kind: 'p',
          text: 'Rinse the bowl with warm water and let it stand for a minute. This does two things: it clears kiln dust from the foot ring, and it warms the body slowly so the first pour of hot tea meets a vessel that is already near temperature. Dry it fully with a soft cloth before putting it away.',
        },
        {
          kind: 'p',
          text: 'There is no need to boil, soak or seal the piece. The glaze is fired at stoneware temperature and is not porous in the way that low-fired earthenware is. Seasoning rituals are a matter of personal habit rather than necessity.',
        },
      ],
    },
    {
      id: 'washing',
      heading: 'Washing & maintenance',
      blocks: [
        {
          kind: 'callout',
          title: 'Hand wash only',
          text: 'Wash the bowl by hand with warm water and a soft cloth. Never use abrasive scouring pads, steel wool, or harsh chemical detergents.',
        },
        {
          kind: 'list',
          items: [
            'Warm water and a soft cloth or a very soft sponge.',
            'Mild dish soap only when genuinely needed; plain water is usually enough.',
            'No scouring pads, no abrasive powders, no bleach, no acid cleaners.',
            'Rinse thoroughly and dry with a soft cloth.',
            'Dry upside down on a clean surface so water does not pool in the foot.',
          ],
        },
        {
          kind: 'p',
          text: 'Abrasive pads and aggressive chemicals cut into the glaze surface, dulling the very crystals that make the bowl worth owning. Once scratched, that damage cannot be polished out without removing the glaze. The foot ring — unglazed, and rougher than the interior — is the part most easily worn by scrubbing; it needs almost no attention beyond a rinse.',
        },
      ],
    },
    {
      id: 'thermal',
      heading: 'Thermal shock & kiln properties',
      blocks: [
        {
          kind: 'p',
          text: 'The clay body is dense, iron-rich and slow to change temperature. Rapid change creates stress that the fired body cannot absorb, and a hairline crack can open in a single pour.',
        },
        {
          kind: 'callout',
          title: 'Do not pour boiling water into a cold vessel',
          text: 'Never pour boiling water directly into an ice-cold bowl. Warm the vessel first with a little hot water, and never move a chilled bowl straight to a hot surface or into a warm oven.',
        },
        {
          kind: 'list',
          items: [
            'Warm the bowl gradually before a hot pour; a rinse of warm water is sufficient.',
            'Do not refrigerate the bowl and then pour hot tea into it.',
            'Do not place a cold bowl on a hot stove, hob or radiator.',
            'Do not move a hot bowl to a cold stone or metal surface.',
            'Let the piece come to room temperature naturally before washing it.',
          ],
        },
      ],
    },
    {
      id: 'patina',
      heading: 'Patina, and how the glaze matures',
      blocks: [
        {
          kind: 'p',
          text: 'An authentic Jian glaze is iron-rich. Over months of daily tea, minerals from the tea and from your water settle into the micro-texture of the glaze, and the surface gradually takes on a soft, lustrous depth. Dark fields deepen; oil spots and hare’s-fur striations gain a warm olive and bronze sheen; the interior ring where the tea line sits can acquire a faint tea stain that is, to most collectors, the whole point.',
        },
        {
          kind: 'p',
          text: 'This is not wear, and it is not a defect. It is the bowl recording its own use. Many owners deliberately keep a single bowl for one family of tea — a dark oolong, say — so the patina develops along one line rather than many. A well-kept bowl used daily for a year will look meaningfully different from the day it left the kiln, and better for it.',
        },
        {
          kind: 'callout',
          title: 'If you want the patina to slow down',
          text: 'Use a lighter tea, rinse thoroughly after each session, and dry fully. No detergent will reverse patina, and no abrasive should be used to try. If a heavy stain is genuinely unwanted, a very soft cloth and a paste of bicarbonate of soda applied gently and briefly is the only method we would suggest — but we would suggest leaving it.',
        },
      ],
    },
    {
      id: 'appliances',
      heading: 'Appliances & restrictions',
      blocks: [
        {
          kind: 'callout',
          title: 'Not for the microwave, oven or dishwasher',
          text: 'Do not place any JIANZHAN piece in a microwave, an oven, or an automatic dishwasher. The high mineral and iron content of the clay body responds badly to rapid, uneven heating and to the sustained heat and detergent of a machine cycle.',
        },
        {
          kind: 'list',
          items: [
            'No microwave — the iron-rich body heats unevenly and the glaze can craze or flake.',
            'No oven, including warming drawers and proving settings.',
            'No dishwasher, on any cycle, including delicate.',
            'No open flame or direct hob contact.',
            'No freezer, and no refrigeration of the vessel itself.',
          ],
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage & handling',
      blocks: [
        {
          kind: 'p',
          text: 'Store the bowl dry, right way up or upside down on a soft surface, in the paulownia box if you are keeping it out of use. Avoid stacking pieces directly against one another; the foot ring of one bowl will mark the glaze of the next. If you display the piece, keep it out of direct sun and away from the concentrated heat of a lamp, both of which can bleach a glaze over years.',
        },
        {
          kind: 'p',
          text: 'Lift a bowl with two hands and both thumbs, not by the rim alone — the rim is the thinnest part of the wall and a hot bowl is a slippery one. For a piece that has been on the tea table all evening, set it down on wood or cloth, never on stone.',
        },
      ],
    },
    {
      id: 'crazing',
      heading: 'Crazing, and what is normal',
      blocks: [
        {
          kind: 'p',
          text: 'Fine crackles in the glaze layer — crazing — can appear over time, particularly on the unglazed boundary at the foot. So long as the crackle sits within the glaze and does not reach the clay, it is a surface phenomenon, not a structural fault, and does not affect use.',
        },
        {
          kind: 'p',
          text: 'A crack that runs through the wall, a chip on the rim, or a piece that rings dull rather than clear when tapped is structural. Stop using it and contact the studio.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'If you are unsure',
      blocks: [
        {
          kind: 'p',
          text: 'Send the studio a photograph and a short description. We would rather answer a question about a mark or a hairline than have a piece used in a way it should not be.',
        },
      ],
    },
  ],
}
