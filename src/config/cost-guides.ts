// City duct-cleaning COST guides — /duct-cleaning-cost and /duct-cleaning-cost/[city].
// These target the high-intent "duct cleaning cost <city>" search. Each is
// unique: honest local market context, city-specific cost factors, a
// transparent price table, and local FAQs. Every guide links to its matching
// city service page and province page so authority flows through.
//
// Market ranges are rough, hedged context — NOT invented precision or quotes.
// Sardar's own price always comes from the province's priceFrom in site config
// (Ontario $149, every other province $199).

export type CostGuide = {
  citySlug: string; // matches the city page slug
  city: string;
  provinceName: string;
  provinceCode: string; // for priceFrom lookup in site config
  metaTitle: string;
  metaDescription: string;
  // Honest local price context paragraph (supports **bold**).
  marketContext: string;
  factors: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const costGuides: CostGuide[] = [
  {
    citySlug: "ottawa",
    city: "Ottawa",
    provinceName: "Ontario",
    provinceCode: "ON",
    metaTitle:
      "Duct Cleaning Cost Ottawa (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "What air duct cleaning costs in Ottawa in 2026 — typical local price ranges, what affects the price, and Sardar's transparent Ontario pricing from $149.",
    marketContext:
      "In Ottawa, residential duct cleaning quotes commonly range from around **$150 to $450**, with much higher numbers appearing when contamination, mould, or rodent issues are involved. That wide spread is exactly why transparent pricing matters. Sardar's Ontario Basic Package starts at **$149**, covering unlimited ducts and vents, a natural sanitizer, and free furnace, AC and dryer-vent inspections.",
    factors: [
      {
        title: "Home size & vent count",
        text: "A larger Ottawa home with more vents and returns takes more time and equipment than a compact townhome — at companies that charge per vent. Ours doesn't.",
      },
      {
        title: "Long heating season",
        text: "Ottawa furnaces run five-plus months a year, so systems here load with dust faster — a first cleaning of a neglected system takes longer.",
      },
      {
        title: "Add-on services",
        text: "Furnace cleaning, dryer-vent cleaning, or a filter change add to the base price — but only if you choose them.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Ottawa?",
        answer:
          "Local Ottawa quotes commonly range from about $150 to $450, with much higher figures for contaminated systems. Sardar's Ontario Basic Package starts at $149 for unlimited ducts and vents, with optional add-ons priced up front.",
      },
      {
        question: "Is there a per-vent charge in Ottawa?",
        answer:
          "No. Our Basic Package covers every duct and vent in your home — no per-vent surcharges and no surprise fees on the day.",
      },
    ],
  },
  {
    citySlug: "toronto",
    city: "Toronto",
    provinceName: "Ontario",
    provinceCode: "ON",
    metaTitle:
      "Duct Cleaning Cost Toronto (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Air duct cleaning cost in Toronto for 2026 — typical price ranges for homes and condos, what changes the price, and Sardar's transparent Ontario pricing from $149.",
    marketContext:
      "In Toronto, a standard residential duct cleaning typically runs from about **$200 to $500**, with most homeowners landing around the middle of that range for a single-family home. Condos and small semis sit lower; large or long-neglected systems run higher. Sardar is based right here in North York, and our Ontario Basic Package starts at **$149**, all-in.",
    factors: [
      {
        title: "House vs condo",
        text: "Toronto's mix of detached homes, semis, and condos means very different vent counts — the biggest single driver of price at per-vent companies.",
      },
      {
        title: "Older housing stock",
        text: "Much of Toronto's housing predates modern filtration, so a first professional cleaning can take longer and remove decades of buildup.",
      },
      {
        title: "Renovation debris",
        text: "Post-renovation drywall dust in the ducts is Toronto's most common issue — worth clearing, and factored into the time on site.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Toronto?",
        answer:
          "A standard Toronto residential cleaning typically runs about $200–$500, with most single-family homes near the middle. Sardar's Ontario Basic Package starts at $149 for unlimited ducts and vents, with optional add-ons priced up front.",
      },
      {
        question: "Is duct cleaning cheaper for a Toronto condo?",
        answer:
          "Often yes at per-vent companies, since condos have fewer vents. With Sardar the Basic Package is one flat price — we'll confirm it for your specific unit when you book.",
      },
    ],
  },
  {
    citySlug: "mississauga",
    city: "Mississauga",
    provinceName: "Ontario",
    provinceCode: "ON",
    metaTitle:
      "Duct Cleaning Cost Mississauga (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "What duct cleaning costs in Mississauga in 2026 — price ranges for family-sized homes, what affects the total, and Sardar's transparent Ontario pricing from $149.",
    marketContext:
      "In Mississauga, residential duct cleaning generally falls in line with the wider GTA — roughly **$200 to $500** for a typical home, with larger detached houses at the higher end. Because Mississauga has so many spacious family homes with big duct networks, vent count is the main thing that moves the price elsewhere. Sardar's Ontario Basic Package starts at **$149**, with unlimited vents included.",
    factors: [
      {
        title: "Big homes, big duct networks",
        text: "Mississauga's detached homes often have 15+ vents across multiple floors — more surface area to clean than a smaller home.",
      },
      {
        title: "Pet households",
        text: "Pet hair and dander are common in Mississauga ducts; heavily loaded systems can take a little longer.",
      },
      {
        title: "Add-ons",
        text: "Furnace and dryer-vent cleaning are popular add-ons here — optional, and priced clearly before you book.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Mississauga?",
        answer:
          "Expect roughly $200–$500 for a typical Mississauga home, with larger detached houses at the higher end. Sardar's Ontario Basic Package starts at $149 with unlimited ducts and vents, plus optional add-ons.",
      },
      {
        question: "Does a bigger home cost more to clean?",
        answer:
          "At many companies, yes — more vents means a bigger bill. Our Basic Package covers unlimited ducts and vents, though a very large two-furnace home may take longer and we'll confirm details when you book.",
      },
    ],
  },
  {
    citySlug: "brampton",
    city: "Brampton",
    provinceName: "Ontario",
    provinceCode: "ON",
    metaTitle:
      "Duct Cleaning Cost Brampton (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Brampton for 2026 — price ranges, why newer homes still need it, and Sardar's transparent Ontario pricing from $149.",
    marketContext:
      "Brampton pricing tracks the GTA, generally **$200 to $500** for a typical home. Brampton has a lot of newer homes, and a common surprise is that new builds often still hold construction debris in the ducts from day one — so a first cleaning is well worth it. Sardar's Ontario Basic Package starts at **$149**, all-in.",
    factors: [
      {
        title: "New-build debris",
        text: "Builders rarely clean ducts before handover, so newer Brampton homes often need a first cleaning to clear sawdust and drywall dust.",
      },
      {
        title: "Household size",
        text: "Busy, full households run HVAC harder, loading ducts faster — which can add time for a first deep clean.",
      },
      {
        title: "Optional add-ons",
        text: "Dryer-vent and furnace cleaning can be bundled in — priced up front, never as a surprise.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Brampton?",
        answer:
          "Typically about $200–$500 for a standard Brampton home, in line with the GTA. Sardar's Ontario Basic Package starts at $149 for unlimited ducts and vents, with optional add-ons priced up front.",
      },
      {
        question: "My Brampton home is new — do I still need duct cleaning?",
        answer:
          "Often yes. Construction debris is usually left in the ducts at handover, so a first cleaning resets the system. After that, every few years is plenty.",
      },
    ],
  },
  {
    citySlug: "hamilton",
    city: "Hamilton",
    provinceName: "Ontario",
    provinceCode: "ON",
    metaTitle:
      "Duct Cleaning Cost Hamilton (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Hamilton for 2026 — price ranges, why century homes can take longer, and Sardar's transparent Ontario pricing from $149.",
    marketContext:
      "Hamilton duct cleaning generally runs **$200 to $500** for a typical home. Hamilton's beautiful century homes often have older ductwork that's gone decades without a cleaning, so a first job can take longer — and delivers the most dramatic before-and-after. Sardar's Ontario Basic Package starts at **$149**, all-in.",
    factors: [
      {
        title: "Century-home ductwork",
        text: "Older Hamilton systems need careful handling and often hold the heaviest buildup — which can add time to a first cleaning.",
      },
      {
        title: "Home size & layout",
        text: "From downtown row homes to Mountain and Ancaster houses, vent count varies widely and drives price at per-vent companies.",
      },
      {
        title: "Optional add-ons",
        text: "Furnace and dryer-vent cleaning are available as clearly-priced add-ons.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Hamilton?",
        answer:
          "Typically about $200–$500 for a standard Hamilton home. Older century homes with heavy buildup can sit higher. Sardar's Ontario Basic Package starts at $149 with unlimited ducts and vents.",
      },
      {
        question: "Is duct cleaning safe for my older Hamilton home?",
        answer:
          "Yes — we inspect first and use methods appropriate for older ductwork. Cleaning is gentle on the ducts; it's the buildup inside we remove.",
      },
    ],
  },
  {
    citySlug: "calgary",
    city: "Calgary",
    provinceName: "Alberta",
    provinceCode: "AB",
    metaTitle:
      "Duct Cleaning Cost Calgary (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Calgary for 2026 — typical price ranges, how Chinook dust and dry air affect your system, and Sardar's transparent Alberta pricing from $199.",
    marketContext:
      "In Calgary, a residential duct cleaning generally runs from around **$200 to $600**, depending on home size and how heavily the system is loaded. Calgary's dry, dusty climate means ducts fill faster than in milder regions. Sardar's Alberta Basic Package starts at **$199**, all-in for unlimited ducts and vents.",
    factors: [
      {
        title: "Chinook & prairie dust",
        text: "Calgary's winds drive fine dust into homes year-round, so systems load faster — a factor in how long a thorough clean takes.",
      },
      {
        title: "New-build communities",
        text: "Fast-growing suburbs like Seton and Mahogany have many new homes with builder debris still in the ducts.",
      },
      {
        title: "Add-on services",
        text: "Furnace cleaning is a popular Calgary add-on given the long heating season — optional and priced up front.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Calgary?",
        answer:
          "A typical Calgary home generally runs about $200–$600 depending on size and buildup. Sardar's Alberta Basic Package starts at $199 for unlimited ducts and vents, with optional add-ons priced clearly.",
      },
      {
        question: "How often should Calgary homes clean their ducts?",
        answer:
          "Every 2–3 years suits most Calgary homes — the dry, dusty climate and long furnace season load ducts faster than milder regions. Sooner with pets or allergies.",
      },
    ],
  },
  {
    citySlug: "montreal",
    city: "Montreal",
    provinceName: "Quebec",
    provinceCode: "QC",
    metaTitle:
      "Duct Cleaning Cost Montreal (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Montreal for 2026 — typical price ranges, why older homes and renovations matter, and Sardar's transparent Quebec pricing from $199.",
    marketContext:
      "In Montreal, residential duct cleaning generally runs from about **$250 to $600**, with older homes and long-neglected systems at the higher end. Greater Montreal mixes some of Canada's oldest housing with a busy renovation culture — both of which load ductwork. Sardar's Quebec Basic Package starts at **$199**, all-in.",
    factors: [
      {
        title: "Older homes, heavier buildup",
        text: "Many Montreal-area duct systems are decades old and have never been professionally cleaned — a first clean can take longer.",
      },
      {
        title: "Renovation dust",
        text: "Montreal renovates constantly, and drywall dust is the fastest way to load a system — worth clearing post-reno.",
      },
      {
        title: "Add-on services",
        text: "Furnace, AC, and dryer-vent cleaning are available as clearly-priced add-ons.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Montreal?",
        answer:
          "A typical Montreal home generally runs about $250–$600, with older or neglected systems higher. Sardar's Quebec Basic Package starts at $199 for unlimited ducts and vents, with optional add-ons.",
      },
      {
        question: "Do you serve the Montreal suburbs?",
        answer:
          "Yes — we serve Greater Montreal including Laval, Longueuil, Brossard, and the West Island communities.",
      },
    ],
  },
  {
    citySlug: "vancouver",
    city: "Vancouver",
    provinceName: "British Columbia",
    provinceCode: "BC",
    metaTitle:
      "Duct Cleaning Cost Vancouver (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Vancouver for 2026 — local price ranges, how coastal moisture affects your ducts, and Sardar's transparent BC pricing from $199.",
    marketContext:
      "In Vancouver, local quotes for duct cleaning commonly run from roughly **$200 to $600**, with broader ranges depending on home size and contamination. Vancouver's damp coastal climate can leave moisture-bound dust and musty smells in ducts. Sardar's British Columbia Basic Package starts at **$199**, all-in, and includes a natural sanitizer.",
    factors: [
      {
        title: "Coastal moisture",
        text: "Humid Vancouver air lets dust cling to duct walls and can cause musty odours — cleaning plus our natural sanitizer addresses both.",
      },
      {
        title: "Home type",
        text: "From Kitsilano character homes to Surrey and Coquitlam builds, vent count and system age drive the price.",
      },
      {
        title: "Sanitizer included",
        text: "For musty systems, the natural sanitizer is already part of the Basic Package — no extra line item.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Vancouver?",
        answer:
          "Local Vancouver quotes commonly run roughly $200–$600 depending on size and contamination. Sardar's BC Basic Package starts at $199 for unlimited ducts and vents, with a natural sanitizer included.",
      },
      {
        question: "Can duct cleaning fix musty smells in Vancouver homes?",
        answer:
          "Often yes. Moisture-bound dust is a common source of musty startup odours on the coast. Cleaning removes the buildup, and our natural sanitizer treats the duct surfaces.",
      },
    ],
  },
  {
    citySlug: "winnipeg",
    city: "Winnipeg",
    provinceName: "Manitoba",
    provinceCode: "MB",
    metaTitle:
      "Duct Cleaning Cost Winnipeg (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Winnipeg for 2026 — typical price ranges, why Winnipeg furnaces work so hard, and Sardar's transparent Manitoba pricing from $199.",
    marketContext:
      "In Winnipeg, residential duct cleaning generally runs from about **$250 to $600**, depending on home size and buildup. No Canadian city works its furnace harder than Winnipeg, so systems here push a lot of air — and dust — through the ducts. Sardar's Manitoba Basic Package starts at **$199**, all-in.",
    factors: [
      {
        title: "Hard-working furnaces",
        text: "Winnipeg furnaces run near-constantly from October to April, so ducts load quickly — a first clean of a neglected system takes longer.",
      },
      {
        title: "Sealed winters",
        text: "Homes stay sealed for months, so whatever's in the ducts recirculates all winter — a fall cleaning is ideal.",
      },
      {
        title: "Furnace add-on",
        text: "Given the long heating season, furnace cleaning is a popular Winnipeg add-on — optional and priced up front.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Winnipeg?",
        answer:
          "A typical Winnipeg home generally runs about $250–$600 depending on size and buildup. Sardar's Manitoba Basic Package starts at $199 for unlimited ducts and vents, with optional add-ons.",
      },
      {
        question: "When should Winnipeg homes clean their ducts?",
        answer:
          "Fall is ideal — right before the furnace begins its long winter run, so the system starts the season clean and keeps recirculated dust to a minimum.",
      },
    ],
  },
  {
    citySlug: "saskatoon",
    city: "Saskatoon",
    provinceName: "Saskatchewan",
    provinceCode: "SK",
    metaTitle:
      "Duct Cleaning Cost Saskatoon (2026 Price Guide) | Sardar Duct Cleaning",
    metaDescription:
      "Duct cleaning cost in Saskatoon for 2026 — typical price ranges, how prairie dust affects your system, and Sardar's transparent Saskatchewan pricing from $199.",
    marketContext:
      "In Saskatoon, residential duct cleaning generally runs from around **$200 to $600**, depending on home size and buildup. Prairie dust and big temperature swings keep Saskatoon systems working year-round. Sardar's Saskatchewan Basic Package starts at **$199**, all-in.",
    factors: [
      {
        title: "Relentless prairie dust",
        text: "Wind-borne field dust slips past standard filters and settles in duct runs — a first clean of a loaded system takes longer.",
      },
      {
        title: "Year-round HVAC use",
        text: "Furnaces all winter, AC all summer: high-usage Saskatoon systems collect dust faster.",
      },
      {
        title: "Add-on services",
        text: "Furnace and dryer-vent cleaning are available as clearly-priced add-ons.",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost in Saskatoon?",
        answer:
          "A typical Saskatoon home generally runs about $200–$600 depending on size and buildup. Sardar's Saskatchewan Basic Package starts at $199 for unlimited ducts and vents, with optional add-ons.",
      },
      {
        question: "Does prairie dust really affect indoor air?",
        answer:
          "Yes — fine wind-borne dust gets pulled into the HVAC system and settles in ductwork, then recirculates whenever the system runs. Removing it at the source is the most effective fix.",
      },
    ],
  },
];
