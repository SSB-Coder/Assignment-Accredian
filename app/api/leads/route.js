import { NextResponse } from "next/server";

// In-memory store (replace with a real DB like MongoDB/Postgres in production)
const leads = [];

/**
 * POST /api/leads
 * Body: { name, email, company, role, teamSize, message }
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, company, role, teamSize, message } = body;

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const lead = {
      id:        crypto.randomUUID(),
      name:      name.trim(),
      email:     email.trim().toLowerCase(),
      company:   company.trim(),
      role:      role?.trim() || "",
      teamSize:  teamSize || "",
      message:   message?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log(`[Leads API] New lead captured: ${lead.email} from ${lead.company}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our team will reach out within 24 hours.",
        leadId:  lead.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[Leads API] Error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * GET /api/leads  – returns all captured leads (demo only)
 */
export async function GET() {
  return NextResponse.json({ success: true, count: leads.length, leads });
}
