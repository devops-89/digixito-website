import React from "react";
import type { Metadata } from "next";
import UsLayout from "@/components/layouts/us-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/us"]?.title ||
    "Intelligent Technology. Transformative Business Scale | Digixito US",
  description:
    SEO_DATA["/us"]?.description ||
    "Augment your human workforce with custom AI solutions, high-velocity engineering pods, and integrated marketing to drive compounding business outcomes.",
  keywords:
    SEO_DATA["/us"]?.keywords ||
    "AI Development Company USA, Enterprise AI Solutions, Custom AI Pods, Product Engineering, Tactical Marketing, Digixito US",
  openGraph: {
    title: "Intelligent Technology. Transformative Business Scale | Digixito US",
    siteName: "Digixito",
    url: "https://www.digixito.com/us",
    description:
      "Augment your human workforce with custom AI solutions, high-velocity engineering pods, and integrated marketing to drive compounding business outcomes.",
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
    title: "Intelligent Technology. Transformative Business Scale | Digixito US",
    description:
      "Augment your human workforce with custom AI solutions, high-velocity engineering pods, and integrated marketing to drive compounding business outcomes.",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/us",
  },
};

export default function UsPage() {
  return <UsLayout />;
}

