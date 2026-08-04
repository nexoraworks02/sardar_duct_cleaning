// Single source of truth for the Sardar Duct Cleaning brand.
// Change the name, phones, pricing, or service areas here and the whole site updates.

export const site = {
  name: "Sardar Duct Cleaning",
  url: "https://sardarductcleaning.com",
  tagline: "Clean air. Healthy living.",
  description:
    "At Sardar Duct Cleaning, we believe the air you breathe should be as fresh and clean as the great Canadian outdoors. We provide professional air duct cleaning plus dryer vent, air conditioner, and furnace cleaning for homes and businesses across Ontario, Alberta, Quebec, Manitoba, Saskatchewan, and British Columbia. Transparent pricing, no surprises — get a free quote today.",
  email: "sardarductcleaning@gmail.com",
  whatsapp: "(437) 529-2329",
  // WhatsApp number in full international digits (no +, spaces or symbols) for wa.me links.
  whatsappDigits: "14375292329",
  googleRating: 4.9,
  googleReviewCount: 150,
  // Regional contact numbers (one line for all service areas).
  phones: [
    { region: "All service areas", code: "Call", phone: "(437) 529-2329" },
  ],
  defaultPhone: "(437) 529-2329",

  // --- Social / marketing (leave "" to hide the icon until provided) ---
  facebookUrl: "https://www.facebook.com/share/1DqNXX6NYR/",
  instagramUrl: "https://www.instagram.com/sardarductcleaning",

  // --- Meta Ads tracking ---
  // Meta Pixel / Dataset ID for browser-side Pixel tracking (Events Manager).
  // Set NEXT_PUBLIC_META_PIXEL_ID in your environment. While empty, the Pixel
  // simply doesn't load (no errors). Never use a fake id.
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",

  // --- Google Analytics 4 ---
  // GA4 Measurement ID (analytics.google.com → Admin → Data streams).
  // While empty, GA simply doesn't load (no errors). Never use a fake id.
  gaMeasurementId: "",

  // --- Google Search Console ---
  // Set this to Google's HTML tag verification content value.
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",

  // --- Booking email delivery (Web3Forms — free, no backend) ---
  // SETUP (one time, ~30 seconds):
  //   1. Go to https://web3forms.com
  //   2. In "Create Access Key", enter:  sardarductcleaning@gmail.com
  //      (every booking is emailed to that inbox — the destination lives on
  //       Web3Forms' side, tied to the key, not in this file).
  //   3. Check that inbox for the Access Key, then paste it between the quotes.
  // Until a valid key is set, the booking form shows an error on submit
  // (it never silently "succeeds").
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",

  // --- Business location (Google Maps — key-free embed) ---
  address: "1260 Caledonia Rd, North York, ON M6A 2X5, Canada",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=1260+Caledonia+Rd,+North+York,+ON+M6A+2X5,+Canada&t=m&z=15&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1260+Caledonia+Rd,+North+York,+ON+M6A+2X5,+Canada",
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  benefit: string;
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    slug: "air-duct-cleaning",
    name: "Air Duct Cleaning",
    short: "Unlimited ducts & vents cleaned, with a natural sanitizer.",
    benefit: "Cleaner air in every room",
    icon: "Wind",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    short: "Prevent fire hazards and help your dryer run efficiently.",
    benefit: "Safer, faster drying",
    icon: "Flame",
  },
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    short: "Keep your heating system clean, safe and efficient all winter.",
    benefit: "Lower energy bills",
    icon: "Thermometer",
  },
  {
    slug: "ac-cleaning",
    name: "AC Cleaning",
    short: "Improve cooling performance and indoor air quality.",
    benefit: "Cooler, fresher air",
    icon: "Snowflake",
  },
  {
    slug: "filter-change",
    name: "Filter Change",
    short: "Replace clogged filters to ensure fresh, clean air circulation.",
    benefit: "Cleaner system breathing",
    icon: "Filter",
  },
];

export type Province = {
  code: string;
  name: string;
  city: string;
  citySlug: string;
  priceFrom: number;
};

// Provinces served (6). Basic Package price per province drives the
// "Where We Serve" cards AND the province selector in the booking calculator.
// Ontario $149, every other province $199.
export const provinces: Province[] = [
  { code: "ON", name: "Ontario", city: "Toronto", citySlug: "toronto", priceFrom: 149 },
  { code: "AB", name: "Alberta", city: "Calgary", citySlug: "calgary", priceFrom: 199 },
  { code: "QC", name: "Quebec", city: "Montreal", citySlug: "montreal", priceFrom: 199 },
  { code: "BC", name: "British Columbia", city: "Vancouver", citySlug: "vancouver", priceFrom: 199 },
  { code: "MB", name: "Manitoba", city: "Winnipeg", citySlug: "winnipeg", priceFrom: 199 },
  { code: "SK", name: "Saskatchewan", city: "Saskatoon", citySlug: "saskatoon", priceFrom: 199 },
];

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#quote" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/#about" },
];
