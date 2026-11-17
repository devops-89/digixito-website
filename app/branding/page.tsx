import React from "react";
import type { Metadata } from "next";
import BrandingLayout from "@/components/layouts/branding-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/branding"]?.title ||
    "Build a Brand That Stands Out & Connects | Digixito Branding",
  description:
    SEO_DATA["/branding"]?.description ||
    "Create a stronger brand presence through strategic positioning, distinctive visual identity and consistent digital experiences. We help businesses translate their vision into meaningful brand experiences.",
  keywords:
    SEO_DATA["/branding"]?.keywords ||
    "Branding Agency USA, Brand Identity Design, Brand Strategy, Creative Design, Digital Branding, Digixito",
  openGraph: {
    title: "Build a Brand That Stands Out & Connects | Digixito Branding",
    siteName: "Digixito",
    url: "https://www.digixito.com/branding",
    description:
      "Create a stronger brand presence through strategic positioning, distinctive visual identity and consistent digital experiences. We help businesses translate their vision into meaningful brand experiences.",
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
    title: "Build a Brand That Stands Out & Connects | Digixito Branding",
    description:
      "Create a stronger brand presence through strategic positioning, distinctive visual identity and consistent digital experiences. We help businesses translate their vision into meaningful brand experiences.",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/branding",
  },
};

export default function BrandingPage() {
  return <BrandingLayout />;
}
