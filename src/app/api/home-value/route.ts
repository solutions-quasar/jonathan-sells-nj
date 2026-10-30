import { NextRequest, NextResponse } from "next/server";

const SECRET_CLIENT_TOKEN = "secure-jonathan-nj-v1";
const CLIENT_HEADER_NAME = "x-jonathan-client";
const CYRILLIC_REGEX = /[\u0400-\u04FF]/;

export async function POST(request: NextRequest) {
  try {
    // 1. Secret client token verification
    const clientToken = request.headers.get(CLIENT_HEADER_NAME);
    if (!clientToken || clientToken !== SECRET_CLIENT_TOKEN) {
      return NextResponse.json(
        { error: "Invalid client authorization" },
        { status: 403 }
      );
    }

    const data = await request.json();
    const { propertyAddress, name, email, phone, timeframe, _gotcha } = data;

    // 2. Honeypot check
    if (_gotcha && _gotcha.trim() !== "") {
      console.warn("[HONEYPOT TRIPPED - HOME VALUE]");
      return NextResponse.json({ success: true, message: "Valuation request received" }, { status: 200 });
    }

    // 3. Validation
    if (!propertyAddress || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Property address, name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // 4. Content filtering
    const combined = `${propertyAddress} ${name} ${timeframe || ""}`;
    if (CYRILLIC_REGEX.test(combined)) {
      console.warn("[SPAM FILTER TRIPPED - HOME VALUE]");
      return NextResponse.json({ success: true, message: "Valuation request received" }, { status: 200 });
    }

    // 5. Qualified Seller CMA Request logged safely (No autoresponder open-relay)
    console.log("[QUALIFIED SELLER CMA REQUEST]", {
      propertyAddress,
      name,
      email,
      phone,
      timeframe: timeframe || "Not specified",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Your home valuation request has been received. Jonathan will prepare a comprehensive comparative market analysis (CMA) tailored specifically to your property's condition, micro-location, and current NJ buyer demand.",
    });
  } catch (error) {
    console.error("[HOME VALUE API ERROR]", error);
    return NextResponse.json(
      { error: "Unable to process request right now. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
