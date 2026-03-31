import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Needs an App Password if using Gmail
      },
    });

    // Email to Mership
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mershiplog@gmail.com", // Send to Mership team
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: `New Quote Request Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${service}\n\nMessage:\n${message}`,
      html: `
        <h3>New Quote Request Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Service Required:</strong> ${service}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    
    // Auto-reply Email to Customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send back to the customer
      subject: `Thank you for contacting Mercury Shipping & Logistics`,
      text: `Dear ${name},\n\nThank you for requesting a quote. We have received your query and our team will get back to you within 24 hours.\n\nBest Regards,\nMercury Shipping & Logistics`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for requesting a quote. We have received your query and our team will get back to you within 24 hours.</p>
        <p>Best Regards,<br><strong>Mercury Shipping & Logistics</strong></p>
      `
    };

    if (process.env.EMAIL_PASS) {
      // Send the actual emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
    } else {
      console.log('Environment variables EMAIL_USER and EMAIL_PASS not set. Simulating email send:', mailOptions);
    }

    return NextResponse.json(
      { success: true, message: "Emails processed successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
