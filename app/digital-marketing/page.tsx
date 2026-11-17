import React from "react";
import type { Metadata } from "next";
import DigitalMarketingLayout from "@/components/layouts/digital-marketing-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/digital-marketing"]?.title ||
    "Turn Digital Marketing into a Measurable Growth Engine | Digixito",
  description:
    SEO_DATA["/digital-marketing"]?.description ||
    "Reach the right audience, strengthen your digital presence and create more opportunities for business growth through strategic digital marketing and performance-driven campaigns.",
  keywords:
    SEO_DATA["/digital-marketing"]?.keywords ||
    "Digital Marketing Agency USA, Performance Marketing, SEO Services, PPC Management, Growth Marketing, Digixito",
  openGraph: {
    title: "Turn Digital Marketing into a Measurable Growth Engine | Digixito",
    siteName: "Digixito",
    url: "https://www.digixito.com/digital-marketing",
    description:
      "Reach the right audience, strengthen your digital presence and create more opportunities for business growth through strategic digital marketing and performance-driven campaigns.",
    type: "website",
    images: [
      {
        url: "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Digixito",
    title: "Turn Digital Marketing into a Measurable Growth Engine | Digixito",
    description:
      "Reach the right audience, strengthen your digital presence and create more opportunities for business growth through strategic digital marketing and performance-driven campaigns.",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingLayout />;
}
