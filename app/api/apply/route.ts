import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import React from "react";
import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import ApplicationEmail from "@/components/widgets/email/Application-Email";
import UserApplicationEmail from "@/components/widgets/email/User-Application-Email";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const coverMessage = formData.get("coverMessage") as string;
    const roleTitle = formData.get("roleTitle") as string;
    const resumeFile = formData.get("resume") as File;

    if (!email || !name || !phone || !resumeFile || !roleTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Upload the resume to Vercel/Blob
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    // Create a unique filename utilizing a timestamp to avoid overwrites
    const filename = `${Date.now()}-${resumeFile.name.replace(/\s+/g, "-")}`;
    const blob = await put(filename, buffer, {
      access: "public",
      contentType: resumeFile.type,
    });

    const resumeUrl = blob.url;

    // 2. Generate Application Email HTML
    const adminHtml = await render(
      React.createElement(ApplicationEmail, {
        name,
        email,
        phone,
        coverMessage,
        roleTitle,
        resumeUrl,
      }),
    );

    // 3. Send email to admin using Resend
    await resend.emails.send({
      from: `Digixito Careers <${process.env.NO_REPLY_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      bcc: process.env.BCC_EMAIL ? [process.env.BCC_EMAIL] : [],
      subject: `New Application: ${roleTitle} (${name})`,
      html: adminHtml,
    });

    // 4. Send email to user using Resend
    const userHtml = await render(
      React.createElement(UserApplicationEmail, {
        name,
        roleTitle,
      }),
    );

    await resend.emails.send({
      from: `Digixito Careers <${process.env.NO_REPLY_EMAIL}>`,
      to: email,
      subject: `Thank you for applying to Digixito!`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (err) {
    console.error("Application error:", err);
    return NextResponse.json(
      {
        error: "Failed to submit application",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    );
  }
}
