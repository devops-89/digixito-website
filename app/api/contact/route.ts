import { NextResponse } from "next/server";
import React from "react";
import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import AdminEmail from "@/components/widgets/email/Admin-Email";
import UserEmail from "@/components/widgets/email/User-Email";

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { name, email, phone, message } = values;

    if (!email || !name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const adminHtml = await render(
      React.createElement(AdminEmail, {
        name,
        email,
        phone,
        message,
      }),
    );
    const userHtml = await render(
      React.createElement(UserEmail, { name, email }),
    );

    await resend.emails.send({
      from: `Digixito Media Pvt. Ltd. <${process.env.NO_REPLY_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      bcc: process.env.BCC_EMAIL ? [process.env.BCC_EMAIL] : [],
      subject: `New Contact Inquiry from ${name}`,
      html: adminHtml,
    });

    await resend.emails.send({
      from: `Digixito Media Pvt. Ltd. <${process.env.NO_REPLY_EMAIL}>`,
      to: email,
      subject: "Thank you for reaching out to Digixito Media Pvt. Ltd.!",
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
