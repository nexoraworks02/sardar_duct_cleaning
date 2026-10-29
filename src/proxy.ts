import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Geo-restriction: the site is blocked for visitors in these countries.
// Vercel adds the visitor's ISO country code in `x-vercel-ip-country`.
const BLOCKED_COUNTRIES = new Set(["PK"]);

// Search-engine and link-preview crawlers are always let through so SEO and
// social/WhatsApp previews keep working regardless of where they crawl from.
const ALLOWED_BOTS =
  /googlebot|adsbot-google|google-inspectiontool|googleother|storebot-google|bingbot|bingpreview|msnbot|duckduckbot|applebot|facebookexternalhit|facebot|meta-externalagent|whatsapp|twitterbot|linkedinbot|slackbot/i;

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  // No country header (local dev, or location unknown) → fail open.
  if (!country || !BLOCKED_COUNTRIES.has(country.toUpperCase())) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (ALLOWED_BOTS.test(userAgent)) {
    return NextResponse.next();
  }

  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Not available in your region</title></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a1120;color:#fff;font-family:system-ui,sans-serif;text-align:center;padding:24px"><div><h1 style="font-size:1.5rem;margin:0 0 12px">Not available in your region</h1><p style="margin:0;color:#c3cedd">Sorry, this website is not available in your region.</p></div></body></html>`,
    {
      status: 403,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    }
  );
}

export const config = {
  // Everything except Next's static assets/images and the crawler files.
  matcher: ["/((?!_next/static|_next/image|robots.txt|sitemap.xml).*)"],
};
