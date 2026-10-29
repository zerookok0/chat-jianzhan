import type { Policy } from './types'

export const privacy: Policy = {
  slug: 'privacy',
  eyebrow: 'Policy',
  title: 'Privacy Policy',
  metaTitle: 'Privacy Policy | JIANZHAN',
  description:
    'How JIANZHAN collects, uses and protects personal data: SSL/TLS encryption, PCI-compliant payment processing, our cookie policy, and the GDPR and CCPA rights you can exercise at any time.',
  intro:
    'We collect the least data an order requires, encrypt it in transit, never sell it, and delete it when it is no longer needed. This page sets out exactly what that means in practice.',
  updated: '1 January 2025',
  sections: [
    {
      id: 'scope',
      heading: 'Who we are, and what this covers',
      blocks: [
        {
          kind: 'p',
          text: 'JIANZHAN Studio ("we", "us") is the data controller for personal information collected through this website and through orders placed with the studio. This policy covers the website, the enquiry and order process, shipping notifications and any correspondence with us. It does not cover a third-party site you may reach by following an external link.',
        },
        {
          kind: 'p',
          text: 'We are a small studio, not an advertising business. We do not build profiles, we do not run behavioural ad targeting on this site, and we do not sell, rent or trade personal information. That is a standing commitment, not a current setting.',
        },
      ],
    },
    {
      id: 'collect',
      heading: 'What we collect',
      blocks: [
        {
          kind: 'p',
          text: 'We collect only what an order, a delivery or a direct question actually requires.',
        },
        {
          kind: 'list',
          items: [
            'Identity and contact details — name, email address, telephone number, and the delivery and billing addresses you supply.',
            'Order details — the pieces ordered, sizes, quantities, prices, currency and delivery preferences.',
            'Payment information — handled by our payment processor; we receive a confirmation, a transaction reference and the last four digits of the card, never the full card number.',
            'Correspondence — the content of messages you send us, retained so we can answer and refer back.',
            'Technical data — IP address, browser type, device type, referring page and pages visited, collected in server logs and limited analytics.',
            'Marketing preferences — whether you have asked to hear from the studio, and on what subject.',
          ],
        },
        {
          kind: 'callout',
          title: 'What we never collect',
          text: 'We never ask for full payment card numbers, CVV codes or bank credentials on this site. If a message ever appears to request them, it is not from us — please report it to the studio immediately.',
        },
      ],
    },
    {
      id: 'why',
      heading: 'Why we use it, and on what legal basis',
      blocks: [
        {
          kind: 'p',
          text: 'Under the UK and EU General Data Protection Regulation we rely on a small number of lawful bases, and we name them here rather than leaving you to infer them.',
        },
        {
          kind: 'list',
          items: [
            'Contract — to take payment, pack, ship and deliver an order, and to handle returns and refunds.',
            'Legal obligation — to keep tax, accounting and customs records for the periods the law requires.',
            'Legitimate interests — to answer enquiries, prevent fraud, secure the site and understand in aggregate which pages are read.',
            'Consent — to send studio letters or journal updates. Consent is opt-in, never bundled with an order, and withdrawn as easily as it was given.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not use personal information for automated decision-making that produces legal effects, and we do not use it to train third-party models.',
        },
      ],
    },
    {
      id: 'sharing',
      heading: 'Who we share it with',
      blocks: [
        {
          kind: 'p',
          text: 'Personal information is shared only with the processors needed to complete what you asked for, and only to the extent each one needs it. Each is bound by contract to use it solely for that purpose and to protect it to a comparable standard.',
        },
        {
          kind: 'list',
          items: [
            'Payment processors — to authorise and settle payment. Card data is handled entirely within their PCI-DSS compliant environment.',
            'Couriers and freight agents — name, address, telephone number and declared value, so the crate can be delivered and insured.',
            'Customs brokers — the commercial invoice details that import law requires.',
            'Hosting, email and analytics providers — operating under data processing agreements, with access limited to what their function requires.',
            'Professional advisers and authorities — only where the law compels disclosure, or where necessary to establish or defend a legal claim.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not sell personal information, we do not share it for cross-context behavioural advertising, and we do not disclose it to data brokers. If that ever changed, this page would say so before it took effect, and you would be offered an opt-out first.',
        },
      ],
    },
    {
      id: 'security',
      heading: 'How we protect it',
      blocks: [
        {
          kind: 'list',
          items: [
            'All traffic to and from this site is encrypted with SSL/TLS (HTTPS). Unencrypted requests are redirected.',
            'Payment pages are served over HTTPS by a PCI-DSS Level 1 compliant processor; card data never reaches our servers.',
            'Access to order data is limited to studio staff who need it to fulfil an order, protected by unique credentials and multi-factor authentication.',
            'Servers are patched, firewalled and backed up; backups are encrypted and retained on a rolling schedule.',
            'We keep only the data required, and we review retention annually rather than accumulating by default.',
          ],
        },
        {
          kind: 'p',
          text: 'No system is perfectly secure. If a breach affecting your personal information occurs, we will notify the relevant supervisory authority within seventy-two hours of becoming aware, and will notify you directly without undue delay where the breach is likely to result in a high risk to your rights.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies and similar technologies',
      blocks: [
        {
          kind: 'p',
          text: 'A cookie is a small text file a site stores in your browser. We use them sparingly and in three categories.',
        },
        {
          kind: 'list',
          items: [
            'Strictly necessary — keeping your cart and your place in the checkout flow. These cannot be switched off, because the shop cannot work without them.',
            'Preference — remembering a currency or a dismissed notice. Set only when you make a choice.',
            'Analytics — aggregated, anonymised page-view counts, with IP addresses truncated. Used to see which pages are read, never to follow you to another site.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not set advertising or social-media tracking cookies on this site. You can block or delete cookies through your browser at any time; blocking the strictly necessary ones will stop the cart from working. Where consent is required — for analytics, in the UK and EU — it is requested before any such cookie is set, and refusing costs you nothing but the aggregate statistics.',
        },
      ],
    },
    {
      id: 'transfers',
      heading: 'International transfers',
      blocks: [
        {
          kind: 'p',
          text: 'We ship worldwide, so order data necessarily crosses borders. Transfers outside the UK, EEA or your home jurisdiction are made only under an approved mechanism — the UK International Data Transfer Addendum, the EU Standard Contractual Clauses, or an adequacy decision — and only to recipients who have agreed to the corresponding safeguards.',
        },
        {
          kind: 'p',
          text: 'Shipping labels and customs invoices will show the recipient name and address to the carrier and, where required, to customs. That disclosure is unavoidable in delivering a physical object across a border.',
        },
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        {
          kind: 'list',
          items: [
            'Order and transaction records — retained for the period tax and company law requires, typically six to ten years.',
            'Enquiries and correspondence — retained for up to two years after the conversation closes, then deleted.',
            'Marketing consent records — retained until you withdraw consent, plus a short record of the withdrawal itself.',
            'Server logs and analytics — retained in identifiable form for up to fourteen months.',
            'Cart contents — stored in your own browser, not on our servers, and cleared on completion or expiry.',
          ],
        },
        {
          kind: 'p',
          text: 'When a retention period ends, records are deleted or irreversibly anonymised. We do not retain data indefinitely "just in case".',
        },
      ],
    },
    {
      id: 'rights',
      heading: 'Your rights',
      blocks: [
        {
          kind: 'p',
          text: 'Wherever you live, we extend the following rights to you without charge. We will respond within one month of a verified request.',
        },
        {
          kind: 'list',
          items: [
            'Access — a copy of the personal information we hold about you.',
            'Rectification — correction of anything inaccurate or incomplete.',
            'Erasure — deletion of data we have no continuing legal reason to keep.',
            'Restriction — a pause on processing while a dispute is resolved.',
            'Portability — a machine-readable copy of the data you provided, to pass to another provider.',
            'Objection — a right to object to processing based on our legitimate interests, including any direct marketing, at any time.',
            'Withdrawal of consent — for anything you previously opted into, effective immediately and without detriment.',
          ],
        },
        {
          kind: 'p',
          text: 'California residents additionally have the right to know the categories of personal information collected and disclosed, the right to request deletion, the right to correct inaccurate information, and the right to opt out of the sale or sharing of personal information. We do not sell or share personal information as those terms are defined by the CCPA, so there is nothing to opt out of — but the right stands, and you may designate an authorised agent to exercise it on your behalf. We will not discriminate against you for exercising any right described here.',
        },
        {
          kind: 'p',
          text: 'To exercise a right, write to the studio with enough detail to identify your order. We may ask for verification before acting, and we will tell you plainly if we are unable to comply and why.',
        },
      ],
    },
    {
      id: 'children',
      heading: 'Children',
      blocks: [
        {
          kind: 'p',
          text: 'This site is intended for adults. We do not knowingly collect personal information from anyone under sixteen. If you believe a child has provided information to us, contact the studio and we will delete it promptly.',
        },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        {
          kind: 'p',
          text: 'When we change this policy we update the date at the top of the page. Where a change materially affects how we use information already collected, we will notify affected customers by email before the change takes effect. Continued use of the site after an update indicates acceptance of the revised policy.',
        },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact & complaints',
      blocks: [
        {
          kind: 'p',
          text: 'Questions, requests and complaints about privacy can be sent to the studio directly; we will acknowledge within two business days. If you are not satisfied with our response, you may complain to your local supervisory authority — in the UK, the Information Commissioner’s Office; in the EU, the authority in your member state; in California, the Attorney General.',
        },
      ],
    },
  ],
}
