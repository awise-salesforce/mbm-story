// Single source of truth for page content. Customer-facing wording only.
export const REQUIREMENTS = [
  { id: 'E1', group: 'Ecommerce', text: 'Unified Customer 360 profile', label: 'Salesforce' },
  { id: 'E2', group: 'Ecommerce', text: 'Behavioural tracking: views, searches, cart', label: 'Salesforce' },
  { id: 'E3', group: 'Ecommerce', text: 'Personalised recommendations, cross-sell', label: 'Salesforce' },
  { id: 'E4', group: 'Ecommerce', text: 'Segmentation on purchase behaviour & value', label: 'Salesforce' },
  { id: 'E5', group: 'Ecommerce', text: 'B2B account management & ABM', label: 'Salesforce' },
  { id: 'E6', group: 'Ecommerce', text: 'Loyalty, retention & re-engagement', label: 'Salesforce' },
  { id: 'E7', group: 'Ecommerce', text: 'Campaign-to-order revenue attribution', label: 'Salesforce' },
  { id: 'E8', group: 'Ecommerce', text: 'SAP Commerce, OMS, POS/iVend, S/4HANA', label: 'Phase 2' },
  { id: 'E9', group: 'Ecommerce', text: 'Abandoned cart & checkout recovery', label: 'Salesforce' },
  { id: 'E10', group: 'Ecommerce', text: 'Service cases in the customer profile', label: 'Phase 2' },
  { id: 'M1', group: 'Marketing', text: 'Social media management (6 networks)', label: 'Partner' },
  { id: 'M2', group: 'Marketing', text: 'Email & WhatsApp engagement', label: 'Salesforce' },
  { id: 'M3', group: 'Marketing', text: 'Lead capture, scoring & nurturing', label: 'Salesforce' },
  { id: 'M4', group: 'Marketing', text: 'Automated journeys on behaviour', label: 'Salesforce' },
  { id: 'M5', group: 'Marketing', text: 'Analytics, attribution & marketing ROI', label: 'Salesforce' },
  { id: 'M6', group: 'Marketing', text: 'Google Analytics, Google Ads, WordPress', label: 'Salesforce' },
  { id: 'X1', group: 'Additional requirements', text: 'SEO', label: 'Partner' },
  { id: 'X2', group: 'Additional requirements', text: 'AEO (AI engine optimisation)', label: 'Salesforce' },
  { id: 'X3', group: 'Additional requirements', text: 'WordPress / website management', label: 'To discuss' },
  { id: 'X4', group: 'Additional requirements', text: 'Exhibition lead capture & routing', label: 'Salesforce' },
];

export const ACTS = [
  {
    id: 'act0', kicker: 'Opening', title: 'A campaign from a one-line brief',
    summary: 'A marketer types a brief. An AI agent proposes the audience, channels and content, and the marketer approves it.',
    steps: [
      'Brief: "Launch areb smart locks to Riyadh homeowners who bought door hardware in the last 6 months. WhatsApp first, Arabic."',
      'The agent builds the segment from your existing customer data and suggests channels and timing.',
      'It drafts the Arabic WhatsApp message and email. The marketer reviews, edits and approves.',
    ],
    wows: ['Agentic campaign creation'],
    reqs: ['M4', 'M2', 'E4'],
  },
  {
    id: 'act1', kicker: 'B2C', persona: 'Faisal, a villa owner in Riyadh', title: 'From an abandoned cart to a loyal customer',
    summary: 'Faisal browses smart locks on masdaronline.com, leaves, and is brought back with a personal WhatsApp message.',
    steps: [
      'Faisal browses areb smart locks and leaves the SAR 735 model in his cart.',
      'His browsing joins his existing customer record in one profile.',
      'He gets a WhatsApp message in Arabic: the lock he left, a matching video intercom, and pick-up at his nearest branch.',
      'He replies "Can I collect it tomorrow?" and gets an instant answer.',
      'An out-of-stock intercom comes back, and he is told automatically.',
      'After purchase: installation tips and a review request, not more sales messages.',
    ],
    wows: ['Adaptive website: the page rebuilds itself around what Faisal says he is doing', 'Two-way WhatsApp conversation'],
    reqs: ['E2', 'E1', 'E9', 'E3', 'M2', 'M4', 'E6'],
  },
  {
    id: 'act2', kicker: 'B2B', persona: 'Al-Bina Contracting, met at an exhibition', title: 'From an exhibition stand to revenue',
    summary: 'A contractor scans a QR code at the Masdar stand. The lead reaches the right sales team in seconds, not days.',
    steps: [
      'The site manager scans a QR code at the stand and picks interests: steel, timber, fasteners.',
      'A lead is created in Sales Cloud and routed automatically: contractor + Riyadh → Riyadh construction sales. The rep is alerted.',
      'Later, he visits the Business Customers page. An AI agent gives him a tailored pitch on bulk pricing and credit accounts and books a meeting with the rep.',
      'He requests a quotation. The lead becomes an opportunity and Al-Bina becomes a Business account.',
      'Marketing targets the wider Al-Bina team across business units: fasteners and door hardware for the same project.',
      'A dashboard shows exhibition → leads → pipeline → revenue.',
    ],
    wows: ['AI agent on your website that presents and books meetings', 'Ready-made B2B marketing dashboards'],
    reqs: ['X4', 'M3', 'M4', 'E5', 'E7', 'M5'],
  },
  {
    id: 'act3', kicker: 'The connected moment', title: 'Faisal is Al-Bina’s site manager',
    summary: 'One profile knows he is both a homeowner and a trade contact, which separate tools cannot do.',
    steps: [
      'His mobile number links the two: the same number he uses on WhatsApp and gave at the exhibition stand.',
      'Marketing doesn’t send him homeowner promotions in the middle of a live trade deal.',
      'His sales rep sees his personal purchases, which gives the conversation context.',
    ],
    wows: ['One profile across web, WhatsApp and sales', 'Customer insights on the sales record', 'Smart suppression during a trade deal'],
    reqs: ['E1'],
  },
  {
    id: 'act4', kicker: 'Day to day', title: 'Running marketing from one place',
    summary: 'What your marketing team sees every day, with partners shown as partners.',
    steps: [
      'Social publishing and engagement for your 25+ accounts: handled by Sprout Social, our partner, which connects to Salesforce (not part of the live demo).',
      'Paid media and cross-channel performance with Marketing Intelligence.',
      'Campaign, pipeline and account-based dashboards.',
      'AI engine optimisation (AEO), so you appear in AI answers. SEO stays with a specialist partner tool.',
    ],
    wows: ['Cross-channel ROI in one view', 'Ready-made marketing dashboards', 'Be found in AI answers'],
    reqs: ['M1', 'M5', 'M6', 'X2', 'X1'],
  },
  {
    id: 'act5', kicker: 'Later: phase 2', title: 'When the ERP is unified',
    summary: 'The same platform takes in more data, with no need to start again.',
    steps: [
      'Branch purchases (POS/iVend), service cases and full order history join the same profile.',
      'Faisal’s in-store purchase shows up and recommendations get sharper.',
    ],
    wows: ['Same platform, more data', 'Online and in-store in one profile'],
    reqs: ['E1', 'E8', 'E10'],
  },
];

export const ADDONS = [
  { id: 'addon-em', title: 'Event Management', summary: 'Run the whole exhibition in Salesforce: invitations, registration, check-in and follow-up.' },
  { id: 'addon-ada', title: 'Account research agent', summary: 'Ask an AI agent about an account: who is engaged, who is silent, and who is missing from the conversation.' },
];
