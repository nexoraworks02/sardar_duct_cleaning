import { NextResponse } from "next/server";

// Lead intake endpoint.
// For now it validates + logs the lead. In Phase 10 we swap the console.log
// for a Firestore write (collection: "leads") — the contract stays the same.
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data?.name || !data?.phone || !data?.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead = {
      ...data,
      createdAt: new Date().toISOString(),
      source: "quote-calculator",
    };

    // TODO(Phase 10): persist to Firestore.
    console.log("[LEAD]", JSON.stringify(lead));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
