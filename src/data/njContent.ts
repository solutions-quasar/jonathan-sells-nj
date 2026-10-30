export interface PropertyListing {
  id: string;
  price: string;
  numericPrice: number;
  address: string;
  city: string;
  county: string;
  state: "NJ";
  zip: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "Active" | "Under Contract" | "Coming Soon" | "Just Listed";
  propertyType: "Single Family" | "Townhome" | "Colonial" | "Craftsman";
  imageUrl: string;
  description: string;
}

export interface CommunityGuide {
  id: string;
  name: string;
  county: string;
  tagline: string;
  vibe: string;
  transitSummary: string;
  imageUrl: string;
  medianPricePlaceholder: string;
}

export interface SellerResource {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
}

export const FEATURED_LISTINGS: PropertyListing[] = [
  {
    id: "nj-prop-1",
    price: "$849,000",
    numericPrice: 849000,
    address: "142 Montrose Avenue",
    city: "Rutherford",
    county: "Bergen County",
    state: "NJ",
    zip: "07070",
    beds: 4,
    baths: 3,
    sqft: "2,740",
    status: "Just Listed",
    propertyType: "Colonial",
    imageUrl:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Tastefully renovated classic colonial with open gourmet kitchen, expansive primary suite, and deep landscaped backyard walking distance to Rutherford train station.",
  },
  {
    id: "nj-prop-2",
    price: "$1,125,000",
    numericPrice: 1125000,
    address: "78 Highland Avenue",
    city: "Montclair",
    county: "Essex County",
    state: "NJ",
    zip: "07042",
    beds: 5,
    baths: 3.5,
    sqft: "3,420",
    status: "Active",
    propertyType: "Colonial",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stately historic center-hall colonial featuring authentic architectural millwork, restored hardwood flooring, modernized dual HVAC systems, and manicured private grounds.",
  },
  {
    id: "nj-prop-3",
    price: "$695,000",
    numericPrice: 695000,
    address: "215 Lincoln Parkway",
    city: "Glen Ridge",
    county: "Essex County",
    state: "NJ",
    zip: "07028",
    beds: 3,
    baths: 2.5,
    sqft: "2,210",
    status: "Active",
    propertyType: "Craftsman",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Charming gas-lit street home with sunlit sunroom, updated chef's kitchen, finished recreation lower level, and top-rated Glen Ridge school district proximity.",
  },
  {
    id: "nj-prop-4",
    price: "$935,000",
    numericPrice: 935000,
    address: "53 Orchard Ridge Road",
    city: "Ridgewood",
    county: "Bergen County",
    state: "NJ",
    zip: "07450",
    beds: 4,
    baths: 3,
    sqft: "2,980",
    status: "Under Contract",
    propertyType: "Single Family",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sprawling suburban sanctuary on over a third-acre lot, updated primary en-suite with marble finishes, stone patio with outdoor fireplace, and attached 2-car garage.",
  },
];

export const NJ_COMMUNITIES: CommunityGuide[] = [
  {
    id: "rutherford",
    name: "Rutherford & Southern Bergen",
    county: "Bergen County",
    tagline: "The Borough of Trees & Commuter Convenience",
    vibe: "Tree-lined avenues, historic Victorian & Colonial architecture, welcoming downtown dining along Park Avenue.",
    transitSummary: "Direct NJ Transit train and express buses to NYC Midtown (under 25 mins).",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    medianPricePlaceholder: "[VERIFIED STAT NEEDED: Current MLS Median]",
  },
  {
    id: "montclair",
    name: "Montclair & Essex Environs",
    county: "Essex County",
    tagline: "Culture, Historic Grandeur & Vibrant Downtowns",
    vibe: "Celebrated arts scene, distinguished historic homes, boutique shopping, and top dining across multiple downtown districts.",
    transitSummary: "Multiple direct Midtown Direct train stations and Decamp bus corridors.",
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    medianPricePlaceholder: "[VERIFIED STAT NEEDED: Current MLS Median]",
  },
  {
    id: "ridgewood",
    name: "Ridgewood & Northwest Bergen",
    county: "Bergen County",
    tagline: "Top-Tier Schools & Prestigious Suburban Living",
    vibe: "Renowned public education, charming pedestrian-friendly village center, and premier residential neighborhoods.",
    transitSummary: "Bergen County line train terminal with frequent rush-hour service.",
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
    medianPricePlaceholder: "[VERIFIED STAT NEEDED: Current MLS Median]",
  },
  {
    id: "maplewood",
    name: "Maplewood & South Orange",
    county: "Essex County",
    tagline: "Community Spirit & Mid-Century / Tudor Charm",
    vibe: "Walkable village center, gas lamp lighting, close-knit creative community, and diverse architectural heritage.",
    transitSummary: "Midtown Direct train service direct to NY Penn Station in ~32 minutes.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    medianPricePlaceholder: "[VERIFIED STAT NEEDED: Current MLS Median]",
  },
];

export const SELLER_RESOURCES: SellerResource[] = [
  {
    id: "res-1",
    slug: "how-much-is-my-nj-home-worth",
    title: "How Much Is My NJ Home Worth?",
    subtitle: "Why automated online estimators miss key pricing drivers in New Jersey.",
    readTime: "4 min read",
    summary:
      "Algorithm-generated estimates rely on broad zip-code averages. In New Jersey, school boundary micro-districts, tax assessments, recent unpermitted renovations, and street topography dramatically impact real buyer willingness to pay.",
    keyPoints: [
      "Why online algorithms miss condition and layout advantages",
      "Evaluating recent closed comps within 0.5 miles vs. active listings",
      "The role of local NJ property taxes in buyer affordability formulas",
    ],
  },
  {
    id: "res-2",
    slug: "when-is-the-best-time-to-sell-in-new-jersey",
    title: "When Is the Best Time to Sell in New Jersey?",
    subtitle: "Seasonal market rhythms and buyer inventory windows in North & Central NJ.",
    readTime: "5 min read",
    summary:
      "While spring is traditionally the peak volume season, listing in late winter or early autumn often yields lower inventory competition and motivated relocating buyers seeking to close before corporate deadlines.",
    keyPoints: [
      "Spring vs. Autumn market dynamics in Bergen and Essex counties",
      "Understanding inventory compression during early Q1",
      "Timing closing dates around school calendar transitions",
    ],
  },
  {
    id: "res-3",
    slug: "what-should-i-fix-before-selling",
    title: "What Should I Fix (and Not Fix) Before Selling?",
    subtitle: "High-ROI pre-listing preparations vs. costly over-improvements.",
    readTime: "6 min read",
    summary:
      "Not all renovations pay off. Jonathan advises sellers on targeted cosmetic refreshes (paint, staging, lighting, landscaping) versus structural or costly room additions that rarely return dollar-for-dollar value at closing.",
    keyPoints: [
      "The 5 pre-listing updates that generate the highest offer returns",
      "Costly mistakes: What buyers will remodel anyway",
      "Pre-inspection advantages to prevent deal-killing inspection demands",
    ],
  },
  {
    id: "res-4",
    slug: "how-long-does-it-take-to-sell-a-home-in-nj",
    title: "How Long Does It Take to Sell a Home in NJ?",
    subtitle: "The timeline from preparation and photography to attorney review and closing.",
    readTime: "5 min read",
    summary:
      "In New Jersey, accepted offers must undergo a mandatory 3-day Attorney Review period, followed by mortgage commitment, municipal Certificate of Occupancy (CO) inspections, and title verification—typically 45 to 60 days total.",
    keyPoints: [
      "Pre-launch prep timeline (10 to 14 days)",
      "Understanding the unique 3-day NJ Attorney Review process",
      "Township transfer requirements: Smoke detector, fire extinguisher, and CO certifications",
    ],
  },
  {
    id: "res-5",
    slug: "what-costs-should-nj-sellers-expect",
    title: "What Closing Costs Should NJ Sellers Expect?",
    subtitle: "A straightforward breakdown of New Jersey Realty Transfer Fees and legal fees.",
    readTime: "4 min read",
    summary:
      "Understanding your net proceeds requires factoring in the New Jersey State Realty Transfer Fee (RTF), real estate legal representation, municipal inspections, title charges, and brokerage compensation.",
    keyPoints: [
      "How the NJ Realty Transfer Fee (RTF) is calculated based on sale price",
      "Township municipal inspection and certificate costs",
      "Working with a dedicated NJ real estate closing attorney",
    ],
  },
  {
    id: "res-6",
    slug: "how-should-i-price-my-home",
    title: "How Should I Price My Home to Maximize Value?",
    subtitle: "The strategic psychology of competitive pricing vs. aspirational overpricing.",
    readTime: "6 min read",
    summary:
      "Overpricing is the number one cause of prolonged days on market and stigmatized listings. Strategic pricing within real buyer search brackets creates urgent competition and multi-offer leverage during the first 14 days.",
    keyPoints: [
      "Why the first 14 days on market are your most valuable window",
      "Search portal bracket thresholds: How digital buyers actually filter",
      "Creating multi-buyer urgency without leaving money on the table",
    ],
  },
];
