import React from "react";
import type { Metadata } from "next";
import ThankYouLayout from "@/components/layouts/thank-you-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/thank-you"]?.title ||
    "Thank You | Digixito",
  description:
    SEO_DATA["/thank-you"]?.description ||
    "Thank you for reaching out to Digixito. We have received your inquiry and our team will get back to you within 24 business hours.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return <ThankYouLayout />;
}
