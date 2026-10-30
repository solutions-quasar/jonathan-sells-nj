import { NextRequest, NextResponse } from "next/server";

// Secret header required from trusted frontend
const SECRET_CLIENT_TOKEN = "secure-jonathan-nj-v1";
const CLIENT_HEADER_NAME = "x-jonathan-client";

// Regex for Cyrillic characters (common in automated spam waves)
const CYRILLIC_REGEX = /[\u0400-\u04FF]/;

// Known bot trigger phrases
const SPAM_KEYWORDS = [
  "crypto", "bitcoin", "forex", "casino", "viagra", "pills",
  "seo ranking boost", "backlink service", "guest post offer", "telegram @"
];

export async function POST(request: NextRequest) {
  try {
    // 1. Verify custom client token header
    const clientToken = request.headers.get(CLIENT_HEADER_NAME);
    if (!clientToken || clientToken !== SECRET_CLIENT_TOKEN) {
      // Reject unauthorized requests missing our exact token
      return NextResponse.json(
        { error: "Invalid client request credentials" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const { name, email, phone, interest, message, _gotcha } = data;

    // 2. Honeypot verification: If filled, fake 200 OK so bots don't adapt
    if (_gotcha && _gotcha.trim() !== "") {
      console.warn("[SECURITY HONEYPOT TRIGGERED] Bot caught by hidden field.");
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // 3. Basic required field validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // 4. Content filtering (Cyrillic characters check)
    const combinedText = `${name} ${message || ""} ${interest || ""}`;
    if (CYRILLIC_REGEX.test(combinedText)) {
      console.warn("[SECURITY CONTENT FILTER] Cyrillic characters detected. Silent drop.");
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // 5. Spam keywords check
    const lowerText = combinedText.toLowerCase();
    for (const kw of SPAM_KEYWORDS) {
      if (lowerText.includes(kw)) {
        console.warn(`[SECURITY SPAM FILTER] Keyword matched: ${kw}. Silent drop.`);
        return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
      }
    }

    // 6. Legitimate lead received!
    // Strict security note: NEVER open-relay auto-responders to the visitor's unverified email address.
    console.log("[QUALIFIED SELLER / CONTACT INQUIRY]", {
      name,
      email,
      phone,
      interest: interest || "General Inquiry",
      message: message || "No custom message",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Jonathan will review your inquiry and reach out directly.",
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or call directly." },
      { status: 500 }
    );
  }
}
