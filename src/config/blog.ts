// Blog / resource articles — /blog and /blog/[slug].
// These target the highest-intent duct-cleaning searches in Canada (cost
// guides, "how often", "signs you need it", dryer-vent safety) and link
// internally to the service and service-area pages so ranking authority flows
// to the money pages.
//
// Body blocks render with a tiny safe inline parser that supports
//   [link text](/href)  and  **bold**
// so articles can link to /services/* and /service-areas/* inside prose.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type BlogFAQ = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string; // on-page H1
  metaTitle: string; // <title> (includes brand)
  metaDescription: string;
  excerpt: string; // card + list summary
  category: string;
  date: string; // ISO — used for schema + display
  readMins: number;
  body: BlogBlock[];
  faqs?: BlogFAQ[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-duct-cleaning-cost-canada",
    title: "How Much Does Duct Cleaning Cost in Canada? (2026 Price Guide)",
    metaTitle:
      "How Much Does Duct Cleaning Cost in Canada? 2026 Price Guide | Sardar Duct Cleaning",
    metaDescription:
      "A clear 2026 breakdown of air duct cleaning costs across Canada — what changes the price, what a fair quote includes, and how to avoid bait-and-switch offers.",
    excerpt:
      "Typical duct cleaning prices across Canada in 2026, what actually drives the cost, and how to spot the low-ball quotes that balloon on the day.",
    category: "Pricing",
    date: "2026-08-12",
    readMins: 7,
    body: [
      {
        type: "p",
        text: "If you've searched for duct cleaning prices, you've probably seen everything from $79 to $1,000+ — which is confusing and, honestly, a little suspicious. This guide breaks down what air duct cleaning really costs in Canada in 2026, what changes the price, and how to make sure the number you're quoted is the number you actually pay.",
      },
      { type: "h2", text: "Typical duct cleaning cost in Canada" },
      {
        type: "p",
        text: "For a typical single-family home, a legitimate, thorough duct cleaning in Canada commonly lands somewhere between **$200 and $600**, depending on the province, the size of your home, and how many vents you have. Very small condos can come in lower; large homes, systems with two furnaces, or heavily contaminated ductwork can run higher. Treat these as rough market ranges — the only number that matters is a written, all-in quote.",
      },
      {
        type: "p",
        text: "At Sardar Duct Cleaning we keep it simple: one transparent Basic Package, priced by province, so you know the number before we arrive. It covers **unlimited ducts and vents**, a natural sanitizer, and a free furnace, AC and dryer-vent inspection.",
      },
      {
        type: "ul",
        items: [
          "Ontario — from $149 (see [duct cleaning in Ontario](/service-areas/ontario))",
          "Alberta — from $199 ([Alberta service areas](/service-areas/alberta))",
          "Quebec — from $199 ([Quebec service areas](/service-areas/quebec))",
          "British Columbia — from $199 ([British Columbia service areas](/service-areas/british-columbia))",
          "Manitoba — from $199 ([Manitoba service areas](/service-areas/manitoba))",
          "Saskatchewan — from $199 ([Saskatchewan service areas](/service-areas/saskatchewan))",
        ],
      },
      { type: "h2", text: "What changes the price?" },
      {
        type: "p",
        text: "A handful of real factors move the number up or down. Understanding them helps you compare quotes fairly:",
      },
      {
        type: "ul",
        items: [
          "**Number of vents and returns** — more openings means more time and equipment, at companies that charge per vent.",
          "**Home size and number of furnaces** — a two-furnace home is effectively two systems.",
          "**Level of buildup** — a system that's never been cleaned takes longer than one done every few years.",
          "**Add-on services** — furnace cleaning, AC cleaning, dryer vent cleaning, a filter change or brush cleaning.",
          "**Your province** — labour and travel costs differ across the country.",
        ],
      },
      { type: "h2", text: "Beware the $79 'special'" },
      {
        type: "callout",
        text: "If a price looks too good to be true, it usually is. Rock-bottom ads are often a foot in the door — the crew arrives, then 'finds' extra charges for every vent, the furnace, or sanitizing, and the final bill triples.",
      },
      {
        type: "p",
        text: "Honest duct cleaning is priced clearly up front. Before you book anyone, ask three questions: Is the price all-in for my whole system? Are before-and-after photos included? Is there any per-vent surcharge? With Sardar the answers are yes, yes, and no — our [transparent pricing](/#quote) covers every duct and vent with no per-vent games.",
      },
      { type: "h2", text: "Optional add-ons and what they cost" },
      {
        type: "ul",
        items: [
          "[Furnace cleaning](/services/furnace-cleaning) — +$100",
          "[AC cleaning](/services/ac-cleaning) — +$100",
          "[Dryer vent cleaning](/services/dryer-vent-cleaning) — +$50",
          "[Filter change](/services/filter-change) — +$50",
          "Brush cleaning — +$150",
        ],
      },
      { type: "h2", text: "Is duct cleaning worth the money?" },
      {
        type: "p",
        text: "For most homes, yes — especially if you have pets, allergies, recent renovations, or ducts that have never been cleaned. A proper cleaning removes the dust, dander, and debris that recirculate through every room, and it helps your furnace and AC run more efficiently. It's not something every home needs every year, but done on the right schedule it's money well spent. Want a local number? See our [city-by-city cost guides](/duct-cleaning-cost).",
      },
    ],
    faqs: [
      {
        question: "How much does duct cleaning cost for an average home in Canada?",
        answer:
          "A thorough cleaning for a typical single-family home commonly runs roughly $200–$600 depending on province, home size, and vent count. Sardar Duct Cleaning's Basic Package starts at $149 in Ontario and $199 in other provinces, covering unlimited ducts and vents.",
      },
      {
        question: "Why are some duct cleaning quotes so cheap?",
        answer:
          "Extremely low prices are usually bait-and-switch offers. The crew arrives and adds per-vent, furnace, and sanitizing charges until the bill is several times the advertised price. Always confirm the quote is all-in before booking.",
      },
      {
        question: "Does the price include the furnace and dryer vent?",
        answer:
          "Our Basic Package includes full duct and vent cleaning, a natural sanitizer, and a free furnace, AC and dryer-vent inspection. Furnace cleaning ($100) and dryer-vent cleaning ($50) are optional add-ons you can select when you book.",
      },
    ],
  },
  {
    slug: "how-often-should-you-clean-air-ducts",
    title: "How Often Should You Clean Your Air Ducts?",
    metaTitle: "How Often Should You Clean Your Air Ducts? | Sardar Duct Cleaning",
    metaDescription:
      "How often air ducts really need cleaning — the general 2–3 year rule, plus the signs (pets, allergies, renovations, new home) that mean you should do it sooner.",
    excerpt:
      "The honest answer to how often ducts need cleaning — the general rule, and the situations that mean you shouldn't wait.",
    category: "Maintenance",
    date: "2026-08-26",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "It's one of the most common questions we get — and the honest answer is: it depends on your home. Here's a straightforward guide to how often air ducts actually need professional cleaning, and the signs that mean you shouldn't wait.",
      },
      { type: "h2", text: "The general rule: every 2–3 years" },
      {
        type: "p",
        text: "For most Canadian homes, a professional duct cleaning every **2 to 3 years** keeps the system running clean without over-servicing. That rhythm clears the dust, dander, and debris that build up over time before it becomes a problem.",
      },
      { type: "h2", text: "When you should clean more often" },
      {
        type: "p",
        text: "Several situations push that timeline up. Consider cleaning sooner if any of these apply:",
      },
      {
        type: "ul",
        items: [
          "**Pets** — dogs and cats add a steady stream of hair and dander to your ductwork.",
          "**Allergies or asthma** — cleaner ducts mean fewer airborne triggers recirculating through your home.",
          "**Recent renovations** — drywall and construction dust is the fastest way to load a duct system (see our [air duct cleaning service](/services/air-duct-cleaning)).",
          "**A new-to-you home** — if you don't know when (or if) the ducts were last cleaned, start fresh.",
          "**Visible dust or musty smells** — if air 'puffs' dust from the vents or smells stale at startup, it's time.",
          "**Dusty regions** — prairie provinces like [Alberta](/service-areas/alberta) and [Saskatchewan](/service-areas/saskatchewan) load ducts faster than milder climates.",
        ],
      },
      { type: "h2", text: "When you can wait" },
      {
        type: "p",
        text: "If your home is relatively new, pet-free, smoke-free, and nobody has allergy issues, you can comfortably sit at the longer end of the range. Duct cleaning is valuable maintenance, not something every home needs every single year — and any honest company will tell you that.",
      },
      {
        type: "callout",
        text: "Not sure where your home lands? Our Basic Package includes a free furnace, AC and dryer-vent inspection, and we show you before-and-after photos, so you're never paying for a cleaning you didn't need.",
      },
      { type: "h2", text: "Don't forget the dryer vent" },
      {
        type: "p",
        text: "Air ducts aren't the only thing worth a look. Your [dryer vent](/services/dryer-vent-cleaning) should be cleaned every 1–2 years — more often for busy households — because lint buildup is both an efficiency drain and a genuine fire hazard. More on that in our [dryer-vent safety guide](/blog/dryer-vent-cleaning-fire-safety).",
      },
    ],
    faqs: [
      {
        question: "How often should air ducts be cleaned?",
        answer:
          "Most Canadian homes benefit from a professional cleaning every 2–3 years. Clean sooner if you have pets, allergies, recent renovations, or have just moved into a home whose duct history you don't know.",
      },
      {
        question: "How often should a dryer vent be cleaned?",
        answer:
          "Every 1–2 years for most homes, and more often for large households that run the dryer daily. Lint buildup reduces efficiency and is a leading cause of home fires.",
      },
    ],
  },
  {
    slug: "signs-you-need-air-duct-cleaning",
    title: "7 Signs You Need Your Air Ducts Cleaned",
    metaTitle: "7 Signs You Need Your Air Ducts Cleaned | Sardar Duct Cleaning",
    metaDescription:
      "Dust from vents, musty smells, rising energy bills, worsening allergies — seven clear signs it's time to book a professional air duct cleaning.",
    excerpt:
      "Dusty vents, musty air, higher bills, worse allergies — seven clear signals your duct system is overdue for a cleaning.",
    category: "Home Health",
    date: "2026-09-09",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Ducts are out of sight, so it's easy to forget them — until the signs show up in your air, your bills, or your allergies. Here are seven of the clearest signals that your duct system is overdue for a professional cleaning.",
      },
      { type: "h2", text: "1. Dust puffs from the vents" },
      {
        type: "p",
        text: "If you see little clouds of dust when the heating or cooling kicks on, that's buildup inside the ducts being pushed back into your rooms. It's the most visible sign of all.",
      },
      { type: "h2", text: "2. You dust constantly and it comes right back" },
      {
        type: "p",
        text: "If surfaces get dusty again within a day or two of cleaning, your duct system may be recirculating the same particles over and over.",
      },
      { type: "h2", text: "3. Musty or stale smells at startup" },
      {
        type: "p",
        text: "A stuffy or musty smell when the system starts often means dust, moisture, or mould inside the ducts. This is especially common in humid and coastal regions like [British Columbia](/service-areas/british-columbia).",
      },
      { type: "h2", text: "4. Allergy or asthma symptoms are getting worse" },
      {
        type: "p",
        text: "If everyone's sneezing more indoors than out, your ducts may be storing and recirculating pollen, dander, and dust. A cleaning removes what's settled inside so it stops cycling through the house.",
      },
      { type: "h2", text: "5. Rising energy bills" },
      {
        type: "p",
        text: "Clogged ducts and dirty components force your [furnace](/services/furnace-cleaning) and [AC](/services/ac-cleaning) to work harder to move air — which quietly shows up on your energy bill.",
      },
      { type: "h2", text: "6. Recent renovations" },
      {
        type: "p",
        text: "Drywall dust and construction debris are notorious for ending up in ductwork. If you've renovated in the last year, a cleaning clears it out before it circulates for years.",
      },
      { type: "h2", text: "7. You've never had them cleaned" },
      {
        type: "p",
        text: "If you can't remember your last duct cleaning — or you've just moved in — that's reason enough. The first professional cleaning of an older system is often the most dramatic.",
      },
      {
        type: "callout",
        text: "Recognize two or three of these? It's worth booking. We show you the inside of your ducts with before-and-after photos, so you can see exactly what came out.",
      },
    ],
    faqs: [
      {
        question: "What are the signs that air ducts need cleaning?",
        answer:
          "The clearest signs are visible dust from the vents, surfaces that get dusty again quickly, musty smells at startup, worsening indoor allergies, rising energy bills, recent renovations, and simply never having had the ducts cleaned.",
      },
      {
        question: "Can dirty air ducts affect my health?",
        answer:
          "Dirty ducts can recirculate dust, pollen, pet dander, and mould spores through your home, which can aggravate allergies and asthma. Cleaning removes the settled contaminants so they stop cycling through your air.",
      },
    ],
  },
  {
    slug: "dryer-vent-cleaning-fire-safety",
    title: "Dryer Vent Cleaning: A Fire-Safety Essential Most Homeowners Skip",
    metaTitle:
      "Dryer Vent Cleaning & Fire Safety: What Homeowners Miss | Sardar Duct Cleaning",
    metaDescription:
      "Clogged dryer vents are a leading cause of house fires. Learn the warning signs, how often to clean your dryer vent, and why it also saves you money.",
    excerpt:
      "Lint buildup is one of the leading causes of house fires — and one of the most overlooked. The warning signs, and how often to clean.",
    category: "Safety",
    date: "2026-09-23",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "Of all the maintenance homeowners skip, the dryer vent is one of the most important — and most overlooked. Clogged dryer vents are one of the leading causes of residential fires in North America, and the fix is simple, quick, and affordable.",
      },
      { type: "h2", text: "Why lint is dangerous" },
      {
        type: "p",
        text: "Every load of laundry sheds lint. Most is caught by the lint trap, but a surprising amount travels into the vent pipe and collects there. Lint is highly flammable, and when it blocks the exhaust, heat and moisture build up — creating both a fire hazard and a dryer that has to work far harder than it should.",
      },
      { type: "h2", text: "Warning signs your dryer vent is clogged" },
      {
        type: "ul",
        items: [
          "Clothes take **two cycles** to dry, or come out hot and damp.",
          "The **top of the dryer or the laundry room** feels unusually hot.",
          "There's a **burning or musty smell** while the dryer runs.",
          "The **lint trap fills faster** than it used to, or you see lint around the vent opening outside.",
          "It's been **more than a year** since your last dryer vent cleaning.",
        ],
      },
      { type: "h2", text: "How often to clean a dryer vent" },
      {
        type: "p",
        text: "For most homes, once every **1 to 2 years** is right. Large households that run the dryer daily — or homes with long, winding vent runs — should aim for once a year. Learn more about our [dryer vent cleaning service](/services/dryer-vent-cleaning).",
      },
      {
        type: "callout",
        text: "A clean dryer vent doesn't just lower fire risk — it cuts drying time, which means lower energy bills and a dryer that lasts longer. It's one of the best-value pieces of home maintenance there is.",
      },
      { type: "h2", text: "Bundle it with your duct cleaning" },
      {
        type: "p",
        text: "The easiest time to handle the dryer vent is while a technician is already at your home for a [duct cleaning](/services/air-duct-cleaning). Our Basic Package already includes a free dryer-vent inspection, and a full dryer vent cleaning is just +$50 — add it to your booking in seconds from the [booking calculator](/#quote).",
      },
    ],
    faqs: [
      {
        question: "How do I know if my dryer vent needs cleaning?",
        answer:
          "Tell-tale signs include clothes taking two cycles to dry, a hot dryer or laundry room, a burning smell during operation, the lint trap filling faster than usual, and lint around the outside vent. If it's been over a year, it's due.",
      },
      {
        question: "Is dryer vent cleaning really necessary?",
        answer:
          "Yes. Clogged dryer vents are a leading cause of house fires and force the dryer to work harder, raising energy bills and shortening its life. Cleaning every 1–2 years keeps it safe and efficient.",
      },
    ],
  },
  {
    slug: "benefits-of-clean-air-ducts",
    title: "5 Real Benefits of Clean Air Ducts",
    metaTitle: "5 Real Benefits of Clean Air Ducts | Sardar Duct Cleaning",
    metaDescription:
      "Cleaner indoor air, fewer allergens, lower energy bills, a longer-lasting furnace, and less dusting — the real, practical benefits of professional duct cleaning.",
    excerpt:
      "Beyond the marketing — the five practical benefits homeowners actually notice after a professional duct cleaning.",
    category: "Home Health",
    date: "2026-10-02",
    readMins: 5,
    body: [
      {
        type: "p",
        text: "Duct cleaning gets talked about a lot, but what do you actually get out of it? Here are the five benefits homeowners notice most after a professional cleaning — no hype, just the practical ones.",
      },
      { type: "h2", text: "1. Cleaner indoor air" },
      {
        type: "p",
        text: "Your duct system circulates the same air through your home again and again. Removing the dust, dander, and debris that settle inside means less of it ends up back in the air you breathe — a difference many customers notice within days.",
      },
      { type: "h2", text: "2. Fewer allergens" },
      {
        type: "p",
        text: "Pollen, pet dander, and dust mites collect in ductwork and recirculate every time the system runs. Clearing them out gives allergy and asthma sufferers a noticeably calmer home, especially through spring and fall.",
      },
      { type: "h2", text: "3. Lower energy bills" },
      {
        type: "p",
        text: "When ducts and components are clogged, your [furnace](/services/furnace-cleaning) and [air conditioner](/services/ac-cleaning) work harder to push air through. A clean system moves air freely — which shows up as lower heating and cooling costs.",
      },
      { type: "h2", text: "4. A longer-lasting HVAC system" },
      {
        type: "p",
        text: "Dust is hard on equipment. Keeping it out of the system reduces strain on the blower motor and other parts, helping your furnace and AC last longer before they need repairs or replacement.",
      },
      { type: "h2", text: "5. Less dusting" },
      {
        type: "p",
        text: "One of the most satisfying everyday benefits: when your ducts aren't constantly redistributing dust, your surfaces stay cleaner longer. Less dusting, more living.",
      },
      {
        type: "callout",
        text: "Ready to feel the difference? Book a cleaning in minutes, or check whether we serve your area on our [service areas page](/service-areas).",
      },
    ],
    faqs: [
      {
        question: "Does duct cleaning really improve air quality?",
        answer:
          "Yes — removing accumulated dust, dander, and debris from the ducts reduces the contaminants your system recirculates, which most homeowners notice as fresher, less dusty air within a few days.",
      },
      {
        question: "Can duct cleaning lower my energy bills?",
        answer:
          "It can help. Clean ducts and components let your furnace and AC move air more freely, so the system doesn't have to work as hard — which shows up as lower heating and cooling costs.",
      },
    ],
  },
  {
    slug: "what-to-expect-professional-duct-cleaning",
    title: "What to Expect From a Professional Duct Cleaning",
    metaTitle:
      "What to Expect From a Professional Duct Cleaning | Sardar Duct Cleaning",
    metaDescription:
      "A step-by-step look at what happens during a professional air duct cleaning — how long it takes, what's included, and how to spot a quality job.",
    excerpt:
      "A step-by-step walkthrough of a professional duct cleaning — timing, what's included, and how to tell a quality job from a rushed one.",
    category: "Guides",
    date: "2026-10-08",
    readMins: 6,
    body: [
      {
        type: "p",
        text: "Booking a duct cleaning for the first time? Here's exactly what a professional job looks like from start to finish — so you know what you're paying for and how to tell a thorough cleaning from a rushed one.",
      },
      { type: "h2", text: "1. Inspection first" },
      {
        type: "p",
        text: "A good technician starts by inspecting your system — the vents, returns, furnace, and the state of the ductwork. This confirms what needs doing and gives you a baseline for the before-and-after photos.",
      },
      { type: "h2", text: "2. Sealing and setup" },
      {
        type: "p",
        text: "The technician connects a powerful vacuum to your duct system to put it under negative pressure. That way, when the dust is loosened, it's pulled straight out — not blown into your rooms.",
      },
      { type: "h2", text: "3. Agitation and vacuuming" },
      {
        type: "p",
        text: "Using brushes and compressed-air tools, the technician loosens dust and debris from the duct walls while the vacuum captures it. Every vent and register is cleaned, one by one.",
      },
      { type: "h2", text: "4. Natural sanitizing" },
      {
        type: "p",
        text: "Finally, a natural, non-toxic sanitizer is applied to treat the duct surfaces. Ours is included in the Basic Package and is safe around children and pets.",
      },
      { type: "h2", text: "5. Before-and-after photos" },
      {
        type: "p",
        text: "This is the step that separates quality companies from the rest. You should see photos of the inside of your ducts before and after — proof of the work, not just an invoice.",
      },
      { type: "h3", text: "How long does it take?" },
      {
        type: "p",
        text: "A typical home takes **2 to 3 hours**. Larger homes, two-furnace systems, or ducts that haven't been cleaned in many years can take a bit longer. Your family and pets can stay home throughout.",
      },
      {
        type: "callout",
        text: "The golden rule: if a 'cleaning' takes 20 minutes and you never see inside your ducts, it wasn't a real cleaning. Insist on photos.",
      },
      {
        type: "p",
        text: "Want the full picture on price too? Read our [2026 duct cleaning cost guide](/blog/how-much-does-duct-cleaning-cost-canada), or [book your cleaning online](/#quote) in about a minute.",
      },
    ],
    faqs: [
      {
        question: "How long does a professional duct cleaning take?",
        answer:
          "Most homes take 2–3 hours. Larger homes, two-furnace systems, or ducts that haven't been cleaned in years can take longer. You and your pets can stay home during the service.",
      },
      {
        question: "How can I tell if a duct cleaning was done properly?",
        answer:
          "A quality job includes an inspection, a powered vacuum keeping the system under negative pressure, cleaning of every vent, and before-and-after photos of the inside of your ducts. If there are no photos and it took only minutes, it likely wasn't thorough.",
      },
    ],
  },
];
