/**
 * ENGLISH — source of truth
 * ------------------------------------------------------------------
 * Every string here was lifted verbatim from the shipped components.
 * Nothing was reworded, so switching to this dictionary changes no copy.
 *
 * Adding a key: add it here first. `vi.ts` is typed against this file,
 * so a forgotten translation becomes a TypeScript error rather than a
 * silent English leak at runtime.
 */

import type { Dict } from '../types'

const en: Dict = {
  /* ---------------------------------------------------------------- */
  /* Shared                                                            */
  /* ---------------------------------------------------------------- */
  'common.skip': 'Skip to content',
  'common.home': 'Home',
  'common.collection': 'Collection',
  'common.allPieces': 'All pieces',
  'common.allEntries': 'All entries',
  'common.readEntry': 'Read entry',
  'common.breadcrumb': 'Breadcrumb',

  /* ---------------------------------------------------------------- */
  /* Brand                                                             */
  /* ---------------------------------------------------------------- */
  'site.tagline': 'The Earth in Your Hands, the Cosmos in the Glaze.',
  'site.studio': 'Jianyang, Nanping, Fujian, China',
  'site.hours': 'Mon – Fri, 09:00 – 18:00 (GMT+8)',

  /* ---------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ---------------------------------------------------------------- */
  'nav.home': 'Home',
  'nav.collection': 'Collection',
  'nav.craft': 'Our Craft',
  'nav.journal': 'Journal',
  'nav.about': 'About',
  'nav.primaryAria': 'Primary',
  'nav.mobileAria': 'Mobile',

  /* ---------------------------------------------------------------- */
  /* Header & menu                                                     */
  /* ---------------------------------------------------------------- */
  'header.brandHome': 'home',
  'header.searchAria': 'Search the collection',
  'header.cartAriaEmpty': 'Open cart, empty',
  'header.cartAria': 'Open cart, {count} items',
  'header.openMenu': 'Open menu',
  'header.closeMenu': 'Close menu',

  /* ---------------------------------------------------------------- */
  /* Footer                                                            */
  /* ---------------------------------------------------------------- */
  'footer.navAria': 'Footer',
  'footer.explore': 'Explore',
  'footer.studio': 'Studio',
  'footer.policies': 'Policies',
  'footer.rights': '© {year} {name}. All rights reserved.',
  'footer.socialAria': 'Social links',
  'footer.note':
    'Handcrafted Song-style tea ceramics. Fired in small studio batches in Jianyang, Fujian.',

  /* Policy link labels */
  'policy.shipping': 'Shipping & Returns',
  'policy.care': 'Care & Use',
  'policy.privacy': 'Privacy Policy',
  'policy.terms': 'Terms of Service',

  /* ---------------------------------------------------------------- */
  /* Language switcher                                                 */
  /* ---------------------------------------------------------------- */
  'lang.switcherAria': 'Language — current: {language}',
  'lang.menuAria': 'Choose a language',
  'lang.groupAria': 'Interface language',

  /* ---------------------------------------------------------------- */
  /* Home                                                              */
  /* ---------------------------------------------------------------- */
  'home.kicker': 'Jian Ware · Song Dynasty Lineage',
  'home.title1': 'The Cosmos Held',
  'home.title2': 'in a Cup',
  'home.line': 'Where fire is the only author.',
  'home.sub':
    'Iron-rich earth, pine wood fire, and stilled time. A Song Dynasty lineage capturing fleeting constellations in dark glaze.',
  'home.cta': 'Explore Collection',
  'home.scroll': 'Scroll',
  'home.heroAlt':
    'A dark-glazed Jian ware tea bowl catching a single warm light against stone',

  'home.soulEyebrow': 'The Soul of Jianzhan',
  'home.soulTitle1': 'Born from Fire,',
  'home.soulTitle2': 'Shaped by Time',
  'home.soulLede':
    'Jianzhan is more than a tea bowl; it is an encounter between earth and cosmic chance. Thrown by hand and fired in ancient dragon kilns, one clay enters the kiln, yet ten thousand colours emerge. What the flame decides, the artisan accepts.',
  'home.soulCta': 'Discover More',
  'home.soulAlt': 'Close detail of a dark glazed surface catching warm light',
  'home.soulFigNum': 'Fig. 01',
  'home.soulFigCaption': 'Glaze detail — iron crystals on a black ground',

  'home.collEyebrow': 'Our Collection',
  'home.collTitle': 'Selected Works',
  'home.collNote':
    'Each vessel is a singular occurrence — glazes born from momentary alignments of heat, draft, and mineral ash that human hands cannot replicate.',

  'home.craftEyebrow': 'Traditional Craftsmanship',
  'home.craftTitle': 'Passed down through generations',
  'home.craftBody':
    'Our artisans preserve Song-era methods, firing unrefined minerals in wood-fuelled kilns. Nothing is hurried: forming, drying, glazing, and days inside the fire are entirely surrendered to the patient rhythm of the kiln.',
  'home.craftCta': 'Learn More',
  'home.craftAlt': "Hands shaping a vessel on a potter's wheel in a dim studio",

  'home.giftEyebrow': 'Collecting & Gifting',
  'home.giftTitle': 'A quiet object, kept for a lifetime',
  'home.giftBody':
    'Each piece arrives linen-wrapped with a recorded firing note — the year, the kiln and the conditions of its making. Suitable for a collector’s shelf, a tea table, or a gift that outlives the occasion.',
  'home.giftLi1': 'Linen-wrapped presentation box',
  'home.giftLi2': 'Firing note signed by the studio',
  'home.giftLi3': 'Care card with use and washing guidance',
  'home.giftCta': 'Browse collectible works',
  'home.giftAlt': 'A group of handcrafted bowls arranged together on a dark surface',

  'home.journalEyebrow': 'Journal',
  'home.journalTitle': 'Notes on glaze & making',

  'home.closingEyebrow': 'The Earth in Your Hands',
  'home.closingTitle1': 'Fire and time,',
  'home.closingTitle2': 'held still',
  'home.closingLede':
    'The kiln does not bend to human will. We merely shape the clay; nature finishes the glaze.',
  'home.closingCta1': 'View the Collection',
  'home.closingCta2': 'Our Story',
  'home.srCatalogue': 'Catalogue contains {count} pieces. Featured pieces from {price}.',

  /* ---------------------------------------------------------------- */
  /* Glaze explorer                                                    */
  /* ---------------------------------------------------------------- */
  'glaze.eyebrow': 'Glaze Explorer',
  'glaze.title': 'Five surfaces, one kiln',
  'glaze.body':
    'The same clay and the same flame produce entirely different faces. Choose a glaze to see the piece it belongs to.',
  'glaze.see': 'See pieces in this glaze',
  'glaze.tabsAria': 'Glaze types',
  'glaze.alt': '{name} glaze — {tagline}',

  /* ---------------------------------------------------------------- */
  /* Collection listing                                                */
  /* ---------------------------------------------------------------- */
  'coll.eyebrow': 'The Collection',
  'coll.title1': 'Works in clay,',
  'coll.title2': 'fire and glaze',
  'coll.lede':
    'A working catalogue of Jian ware pieces. Each bowl is fired individually; surfaces differ from piece to piece and cannot be reordered to specification.',
  'coll.factPieces': 'Pieces',
  'coll.factGlazes': 'Glaze families',
  'coll.factFrom': 'From',
  'coll.filters': 'Filters',
  'coll.filtersCount': 'Filters ({count})',
  'coll.count': '{count} piece',
  'coll.countPlural': '{count} pieces',
  'coll.sort': 'Sort',
  'coll.sortCurated': 'Curated',
  'coll.sortNewest': 'Newest',
  'coll.sortPriceAsc': 'Price — low to high',
  'coll.sortPriceDesc': 'Price — high to low',
  'coll.glaze': 'Glaze',
  'coll.category': 'Category',
  'coll.all': 'All',
  'coll.clear': 'Clear filters',
  'coll.emptyTitle': 'No pieces match these filters',
  'coll.emptyBody':
    'Try a different glaze or category — the full catalogue holds {count} works.',
  'coll.emptyCta': 'Show all pieces',
  'coll.loadMore': 'Load more — {count} remaining',
  'coll.noteEyebrow': 'From the Studio',
  'coll.noteBody':
    'Each piece in our collection is wood-fired in Jianyang. For bespoke acquisitions or private curation, contact our studio concierge.',
  'coll.noteCta': 'Write to the studio',
  'coll.noteAlt': 'Pottery tools on a workshop table',

  /* Category labels */
  'cat.tea-bowl': 'Tea Bowls',
  'cat.vessel': 'Vessels',
  'cat.set': 'Sets',

  /* ---------------------------------------------------------------- */
  /* Product detail                                                    */
  /* ---------------------------------------------------------------- */
  'prod.notFoundEyebrow': 'Not Found',
  'prod.notFoundTitle': 'This piece is no longer listed',
  'prod.notFoundBody':
    'It may have been archived or moved. The current catalogue is the best place to look next.',
  'prod.notFoundCta': 'Back to the collection',
  'prod.openImage': 'Open {name} image {index} full screen',
  'prod.imageAlt': '{name} — {subtitle}, view {index}',
  'prod.zoom': 'Zoom',
  'prod.thumbsAria': 'Product images',
  'prod.showImage': 'Show image {index}',
  'prod.duties': 'Duties included · 30-day returns',
  'prod.specs': 'Specifications',
  'prod.singleFiring': 'Single firing',
  'prod.making': 'The making',
  'prod.makingBody':
    'Thrown by hand on the wheel, dried slowly, then glazed and fired in a wood kiln. The final surface depends on how heat and ash moved through the chamber and on the pace of cooling afterwards — factors the maker guides but does not control.',
  'prod.dimensions': 'Dimensions & materials',
  'prod.careTitle': 'Care',
  'prod.careBody':
    'Hand wash only, with warm water and a soft cloth; never use abrasive scouring pads or harsh detergents. Avoid thermal shock — do not pour boiling water into a cold vessel. Not suitable for microwave, oven or dishwasher. The iron-rich glaze darkens and gains a soft lustre with use; this patina is the mark of a lived-in piece.',
  'prod.shippingTitle': 'Delivery',
  'prod.shippingBody':
    'Born in Nanping, Fujian, China. Every piece currently listed has already reached our local warehouse and will be delivered within 2–3 working days.',
  'prod.packagingTitle': 'Packaging',
  'prod.packagingBody':
    'Each piece travels by insured express courier, cushioned in a custom wooden crate and shock-resistant packing. Live tracking is issued the moment the parcel leaves the studio, and every cup arrives with its firing note. Returns are accepted within 30 days of receipt, free of charge.',
  'prod.characteristicsTitle': 'Characteristics',
  'prod.characteristicsBody':
    'Jianzhan is shaped as much by chance as by hand. The flame, the ash and the cooling glaze decide the final pattern, so no two cups can ever be alike — each is a singular work, unrepeatable by design.',
  'prod.disclaimer':
    'Includes a studio-signed paulownia wooden presentation box and recorded firing certificate.',
  'prod.relatedEyebrow': 'Continue',
  'prod.relatedTitle': 'Related works',

  /* Availability */
  'avail.available': 'Available',
  'avail.made-to-order': 'Made to order',
  'avail.sold-out': 'Sold — archive',
  'avail.enquire': 'Enquire',
  'prod.badgeArchive': 'Archive',

  /* Spec labels */
  'spec.Diameter': 'Diameter',
  'spec.Height': 'Height',
  'spec.Capacity': 'Capacity',
  'spec.Weight': 'Weight',
  'spec.Body': 'Body',
  'spec.Firing': 'Firing',
  'spec.Bowls': 'Bowls',
  'spec.Presentation': 'Presentation',
  'spec.value.ironStoneware': 'Iron-rich stoneware',
  'spec.value.stoneware': 'Stoneware',
  'spec.value.stonewareSlip': 'Stoneware with iron slip',
  'spec.value.woodFired': 'Wood-fired, {temp} °C',
  'spec.value.reduction': 'Reduction, {temp} °C',
  'spec.value.linenBox': 'Linen-wrapped box',
  'spec.value.each': '{value} each',

  /* ---------------------------------------------------------------- */
  /* Buy / cart                                                        */
  /* ---------------------------------------------------------------- */
  'buy.addToCart': 'Add to cart',
  'buy.added': 'Added to cart',
  'buy.chooseSize': 'Choose a size',
  'buy.size': 'Size',
  'buy.orderViaStore': 'Order via our store',
  'buy.archived': 'Archived — not for sale',
  'buy.requestPiece': 'Request this piece',
  'buy.enquirePiece': 'Enquire about this piece',
  'buy.noteArchived':
    'This piece has left the studio and is held in the archive. Comparable works are released each firing.',
  'buy.noteBackOrder':
    'Fired to order in the studio. Write to us and we will confirm the current lead time and hold a place in the next firing.',
  'buy.noteStudio':
    'One of a kind, held by the studio. Write to us and we will confirm availability, dimensions and shipping.',
  'buy.seeInStore': 'See this piece in our store',
  'buy.noteShipping':
    'Insured worldwide express shipping in custom wooden crating. Returns accepted within 30 days, free of charge.',
  'buy.buyDirect': 'Or buy this piece directly',
  'buy.selectSize': 'Select a size to continue.',
  'buy.decreaseQty': 'Decrease quantity',
  'buy.increaseQty': 'Increase quantity',
  'buy.quantityN': 'Quantity {count}',
  'buy.enquirySubject': 'Enquiry — {name}',

  'cart.eyebrow': 'Your selection',
  'cart.title': 'Cart',
  'cart.close': 'Close cart',
  'cart.emptyLine': 'Nothing chosen yet.',
  'cart.emptyBody':
    'Pieces you select will gather here. Checkout, payment and shipping all happen on our store.',
  'cart.browse': 'Browse the collection',
  'cart.each': 'each',
  'cart.remove': 'Remove',
  'cart.subtotal': 'Subtotal',
  'cart.connecting': 'Connecting…',
  'cart.checkout': 'Checkout on our store',
  'cart.taxNote': 'Taxes and insured crated shipping calculated at checkout.',
  'cart.handoffError':
    'We could not reach the store just now. Please try again, or write to {email} and we will complete the order with you directly.',
  'cart.overlayTitle': 'Taking you to secure checkout…',
  'cart.overlayNote': 'Your selection is being transferred',
  'cart.decrease': 'Decrease quantity of {name}',
  'cart.increase': 'Increase quantity of {name}',
  'cart.removeAria': 'Remove {name} from cart',
  'cart.viewName': 'View {name}',

  /* Favourites */
  'fav.save': 'Save {name} to saved pieces',
  'fav.remove': 'Remove {name} from saved pieces',
  'fav.savedTitle': 'Saved in this browser',
  'fav.saveTitle': 'Save in this browser',
  'fav.saved': 'Saved',
  'fav.saveLabel': 'Save',

  /* Quick view */
  'qv.close': 'Close quick view',
  'qv.image': 'Image {index}',
  'qv.fullDetails': 'Full details',
  'qv.note':
    'Fired in Jianyang · studio-signed presentation box and firing certificate included.',
  'qv.detailAlt': '{name} — detail {index}',

  /* Search */
  'search.dialog': 'Search',
  'search.placeholder': 'Search pieces, glazes, journal…',
  'search.inputAria': 'Search pieces, glazes and journal',
  'search.close': 'Close search',
  'search.pieces': 'Pieces',
  'search.selected': 'Selected pieces',
  'search.empty': 'No pieces match “{query}”.',
  'search.journal': 'Journal',

  /* Lightbox */
  'lb.dialog': 'Image viewer',
  'lb.close': 'Close image viewer',
  'lb.prev': 'Previous image',
  'lb.next': 'Next image',
  'lb.counter': 'Image {index} of {total}',
  'lb.hint': 'Double-click or pinch to zoom · Arrow keys to browse · Esc to close',

  /* Media fallback */
  'media.unavailable': 'Image unavailable',

  /* ---------------------------------------------------------------- */
  /* Craft page                                                        */
  /* ---------------------------------------------------------------- */
  'craft.eyebrow': 'Our Craft',
  'craft.title1': 'Slow by',
  'craft.title2': 'necessity',
  'craft.lede':
    'Jian ware depends on a handful of variables that cannot be fully separated: the clay, the thickness of the glaze, the path of heat, and the speed at which the kiln cools.',
  'craft.process': 'Process',
  'craft.processTitle': 'Five stages, one object',
  'craft.processBody':
    'The sequence below is the ordinary one. It is not a performance: each stage exists because skipping it changes the outcome in ways that cannot be corrected later.',
  'craft.s1t': 'The clay',
  'craft.s1b':
    'Iron-rich local clay is wedged by hand and left to rest. The high iron content is what later feeds the glaze’s crystals and colour.',
  'craft.s2t': 'Throwing',
  'craft.s2b':
    'Each bowl is thrown individually on the wheel — rim, wall and foot formed in one sitting. Thickness is judged by touch rather than measured.',
  'craft.s3t': 'Glazing',
  'craft.s3b':
    'Glaze is applied in thin layers, often unevenly by intention. Where the layer is thinner, the surface will later read darker; where thicker, it pools.',
  'craft.s4t': 'Firing',
  'craft.s4b':
    'Wood firing runs for days, watched in shifts. Ash settles, atmosphere shifts, and the kiln is left to cool slowly — often the decisive stage.',
  'craft.s5t': 'Selection',
  'craft.s5b':
    'After cooling, most pieces are set aside. The ones that survive are judged for surface, form and usefulness rather than novelty.',
  'craft.kilnEyebrow': 'The Kiln',
  'craft.kilnTitle': 'A firing decides more than the maker does',
  'craft.kilnBody':
    'Two bowls from the same batch, thrown to the same dimensions, can leave the kiln looking like they came from different workshops. Position in the chamber, airflow and cooling rate all leave marks. This is not decoration added afterwards — it is the material recording what happened to it.',
  'craft.kilnCta': 'See the results',
  'craft.kilnAlt': 'Glowing embers visible through the openings of a wood kiln',
  'craft.handsEyebrow': 'In the studio',
  'craft.handsTitle': 'Hands, not moulds',
  'craft.fig1': 'Forming — wall thickness judged by touch',
  'craft.fig2': 'Glaze — mixed and tested on offcuts',
  'craft.handsAlt1': 'Hands forming a bowl on the wheel',
  'craft.handsAlt2': 'A potter shaping clay with both hands',
  'craft.handsAlt3': 'Glaze and pottery tools on a workshop bench',
  'craft.claimsEyebrow': 'A note on claims',
  'craft.claimsTitle': 'What we can state plainly',
  'craft.claimsBody':
    'We do not describe our work as museum-equivalent or certified. The lineage we claim is a method, not a title: the Song-era Jian kilns of Fujian, their iron-rich clay, their dragon kilns and their wood fire. Beyond that, we offer only the material, the firing and the year — and let the bowl say the rest.',
  'craft.claimsCta': 'About the studio',

  /* ---------------------------------------------------------------- */
  /* About page                                                        */
  /* ---------------------------------------------------------------- */
  'about.eyebrow': 'About',
  'about.lede':
    'A studio concerned with one narrow question: what can a single bowl tell you about the fire that made it?',
  'about.statement': 'Statement',
  'about.statementTitle': 'Quiet luxury is a restraint, not an aesthetic',
  'about.p1':
    'We work with a small number of shapes and a limited set of glazes. The interest is not in novelty but in repetition: making the same form until the differences between individual pieces become the point.',
  'about.p2':
    'Every bowl in this catalogue came out of a wood firing. Some are conventionally beautiful; others are quieter or more uneven. We present them together because the variation is honest, and because pretending each firing can be standardised would be a lie about the material.',
  'about.p3':
    'We keep the catalogue and the transaction separate on purpose. Looking at a bowl and buying one are different acts, and neither should be hurried by the other.',
  'about.figAria': 'Studio images',
  'about.fig1': 'At the wheel',
  'about.fig2': 'Studio bench',
  'about.figAlt1': 'An artisan shaping a vessel at the wheel in low light',
  'about.figAlt2': 'Workshop tools and materials in the studio',
  'about.quote': '“The bowl is finished long before anyone decides whether it is beautiful.”',
  'about.quoteBy': '— Studio note',
  'about.principles': 'Principles',
  'about.principlesTitle': 'Four things we hold to',
  'about.v1t': 'Materials first',
  'about.v1d':
    'Iron-rich clay from a known source, glaze mixed in the studio, no surface printed or transferred on.',
  'about.v2t': 'One firing, one object',
  'about.v2d':
    'We do not clone a result. If a surface cannot be repeated, it is presented as a single work rather than a product line.',
  'about.v3t': 'Describe, do not inflate',
  'about.v3d':
    'No invented certifications, no manufactured scarcity. We name the kiln, the material and the year, and let the bowl carry the claim.',
  'about.v4t': 'Made to be used',
  'about.v4d':
    'The pieces are functional vessels. Collecting them does not require keeping them in a cabinet.',
  'about.cta1': 'Explore the collection',
  'about.cta2': 'Read the journal',

  /* ---------------------------------------------------------------- */
  /* Journal                                                           */
  /* ---------------------------------------------------------------- */
  'journal.eyebrow': 'Journal',
  'journal.title': 'Notes from the studio',
  'journal.lede':
    'Short, practical writing on glaze, firing and living with these objects. Written by the studio; no guest authors are implied.',
  'journal.listAria': 'Journal entries',
  'journal.ctaEyebrow': 'Looking for something?',
  'journal.ctaBody':
    'The collection carries the objects themselves; the journal covers how to read them.',
  'journal.ctaBtn': 'Browse the collection',
  'journal.postNotFoundTitle': 'This entry no longer exists',
  'journal.postNotFoundCta': 'All journal entries',
  'journal.publishedBy': 'Published by the JIANZHAN studio',
  'journal.continue': 'Continue reading',
  'journal.more': 'More from the journal',
  'journal.minRead': '{count} min read',
  'journal.min': '{count} min',

  /* ---------------------------------------------------------------- */
  /* Policies shared                                                   */
  /* ---------------------------------------------------------------- */
  'policy.notFoundEyebrow': 'Not Found',
  'policy.notFoundTitle': 'This policy could not be found',
  'policy.notFoundBody':
    'The page may have moved. Every policy is linked from the footer of any page on the site.',
  'policy.notFoundCta': 'Back to the home page',
  'policy.updated': 'Last updated {date}',
  'policy.contents': 'Contents',
  'policy.contentsAria': '{title} contents',
  'policy.footBody':
    'Questions about this policy, an order, or a piece already in your hands? The studio answers every message within one business day.',
  'policy.footCta1': 'Contact the studio',
  'policy.footCta2': 'Explore the collection',
  'policy.others': 'Also in this section',

  /* ---------------------------------------------------------------- */
  /* 404                                                               */
  /* ---------------------------------------------------------------- */
  'nf.title': 'This page has left the kiln',
  'nf.body':
    'The address does not match anything in the catalogue. Everything currently available lives in the collection.',
  'nf.cta1': 'Collection',
  'nf.cta2': 'Home',

  /* ---------------------------------------------------------------- */
  /* Page titles & meta descriptions                                   */
  /* ---------------------------------------------------------------- */
  'meta.homeTitle': 'JIANZHAN — Jian Ware Tea Bowls | An Ancient Craft for Eternal Beauty',
  'meta.homeDesc':
    'JIANZHAN presents a curated view of Jian ware tea bowls — oil spot, hares fur, iridescent and jade glazes shaped by fire, earth and time. Explore the collection, the craft and the journal.',
  'meta.collectionTitle': 'Collection — Jian Ware Tea Bowls & Vessels | JIANZHAN',
  'meta.collectionDesc':
    'Browse the JIANZHAN collection of Jian ware tea bowls and vessels: oil spot, hare’s fur, iridescent and jade glazes. Filter by glaze and category, preview quickly, and enquire about bespoke acquisitions.',
  'meta.productTitle': '{name} — {price} | JIANZHAN',
  'meta.productNotFound': 'Piece not found | JIANZHAN',
  'meta.craftTitle': 'Our Craft — Fire, Clay and Time | JIANZHAN',
  'meta.craftDesc':
    'How Jian ware bowls are made: iron-rich clay, hand throwing, layered glaze and multi-day wood firing. A plain account of process, without inflated claims.',
  'meta.aboutTitle': 'About — The Studio | JIANZHAN',
  'meta.aboutDesc':
    'JIANZHAN is a studio presenting Jian ware tea bowls as collectible objects. A short statement of intent, materials and approach.',
  'meta.journalTitle': 'Journal — Glaze, Process and Collecting | JIANZHAN',
  'meta.journalDesc':
    'Essays and notes on reading Jian ware glazes, wood firing, care and collecting. Practical writing, no invented history.',
  'meta.postTitle': '{title} — Journal | JIANZHAN',
  'meta.postNotFound': 'Entry not found | JIANZHAN',
  'meta.policyNotFound': 'Policy not found | JIANZHAN',
  'meta.nfTitle': 'Page not found | JIANZHAN',
  'meta.nfDesc': 'The page you were looking for is not here.',
}

export default en
