import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL,   // set in Vercel env vars (Production only)
  "https://sayali-rahane.vercel.app", // fallback — update to your actual domain
].filter(Boolean);

export async function POST(req: NextRequest) {
  /* ── Origin guard ── */
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sayalipr15@gmail.com"],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #09090b; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #6366f1; margin-bottom: 4px;">New contact form submission</h2>
          <p style="color: #a1a1aa; margin-top: 0; margin-bottom: 24px; font-size: 14px;">Via your portfolio website</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px; background: #18181b; border-radius: 6px 6px 0 0; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">From</td>
              <td style="padding: 10px; background: #18181b; border-radius: 6px 6px 0 0; color: #fff; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #27272a; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px; background: #27272a;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
            </tr>
          </table>

          <div style="background: #18181b; border-radius: 8px; padding: 16px; border-left: 3px solid #6366f1;">
            <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Message</p>
            <p style="color: #fff; margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #a1a1aa; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
