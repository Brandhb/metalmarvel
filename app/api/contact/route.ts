// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/components/emails/contactEmail"; // Your email component

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["support@metvels.com"], // Replace with the actual recipient's email
      subject: "New Contact Form Submission",
      react: ContactEmail({ name, email, phone, company, message }), // Email content
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
