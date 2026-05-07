import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // 1. Gmail Transporter - For sending quote notification to the company
    const gmailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || process.env.EMAIL_USER,
        pass: process.env.GMAIL_PASS || process.env.EMAIL_PASS,
      },
    });

    // 2. Hostinger Transporter - For sending automatic reply to the customer from sales@mership.com
    const hostingerTransporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SALES_EMAIL_USER, // e.g., sales@mership.com
        pass: process.env.SALES_EMAIL_PASS,
      },
    });

    // Email to Mership Team (via Gmail)
    const mailOptions = {
      from: process.env.GMAIL_USER || process.env.EMAIL_USER,
      to: "mershiplog@gmail.com",
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: `New Quote Request Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${service}\n\nMessage:\n${message}`,
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
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-radius: 5px;">
            <h4 style="margin-top: 0;">Message:</h4>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply Email to Customer (via Hostinger)
    const autoReplyOptions = {
      from: `"Mership Sales" <${process.env.SALES_EMAIL_USER}>`,
      to: email,
      subject: `Quote Request Received - Mercury Shipping And Logistics`,
      text: `Dear ${name},\n\nThank you for reaching out to Mercury Shipping and Logistics. We have received your quote request for ${service} and our team is already reviewing the details.\n\nYou can expect a detailed response from us within the next 24 hours.\n\nBest Regards,\nSales Team\nMercury Shipping & Logistics Services`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Mercury Shipping and Logistics Services</strong>.</p>
          <p>We have received your quote request for <strong>${service}</strong> and our team is already reviewing the details.</p>
          <p>You can expect a detailed response from us within the next <strong>24 hours</strong>.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Sales Team</strong><br>Mercury Shipping & Logistics Services</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please do not reply directly to this email if you have urgent queries; instead, contact us at +91 9840019341.
          </p>
        </div>
      `
    };

    // Send Gmail notification to team
    if ((process.env.GMAIL_USER || process.env.EMAIL_USER) && (process.env.GMAIL_PASS || process.env.EMAIL_PASS)) {
      try {
        await gmailTransporter.sendMail(mailOptions);
        console.log("✅ Gmail notification sent to team");
      } catch (err) {
        console.error("❌ Gmail Error:", err);
        // We don't throw here so the customer still gets their auto-reply
      }
    }

    // Send Hostinger auto-reply to customer
    if (process.env.SALES_EMAIL_USER && process.env.SALES_EMAIL_PASS) {
      try {
        await hostingerTransporter.sendMail(autoReplyOptions);
        console.log("✅ Hostinger auto-reply sent to customer");
      } catch (err) {
        console.error("❌ Hostinger Error:", err);
      }
    }

    return NextResponse.json(
      { success: true, message: "Request processed." },
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

