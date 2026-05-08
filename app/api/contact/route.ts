import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // 1. Send notification to the company (Mership Team)
    const { data: teamData, error: teamError } = await resend.emails.send({
      from: "Mership <sales@mershiplog.com>",
      to: ["mershiplog@gmail.com"],
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #1c2539; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">New Quote Request</h2>
          <p>You have received a new inquiry from the website:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${service}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <h4 style="margin-top: 0;">Message:</h4>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (teamError) console.error("❌ Resend Team Error:", teamError);

    // 2. Send auto-reply to the customer
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: "Mership Sales <sales@mershiplog.com>",
      to: [email],
      replyTo: "mershiplog@gmail.com",
      subject: `Quote Request Received - Mercury Shipping And Logistics Services`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Mercury Shipping and Logistics Services</strong>.</p>
          <p>We have received your quote request for <strong>${service}</strong> and our team is already reviewing the details.</p>
          <p>You can expect a detailed response from us within the next <strong>24 hours</strong>.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Team</strong><br>Mercury Shipping & Logistics Services</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please do not reply directly to this email if you have urgent queries; instead, contact us at +91 9840019341.
          </p>
        </div>
      `,
    });

    if (customerError) console.error("❌ Resend Auto-reply Error:", customerError);

    return NextResponse.json(
      { success: true, message: "Request processed via Resend." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process request", error: error.message },
      { status: 500 }
    );
  }
}
