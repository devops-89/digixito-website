import React from "react";
import type { Metadata } from "next";
import UsLayout from "@/components/layouts/us-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/automation"]?.title ||
    SEO_DATA["/us"]?.title ||
    "Intelligent Technology. Transformative Business Scale | Digixito Automation",
  description:
    SEO_DATA["/automation"]?.description ||
    SEO_DATA["/us"]?.description ||
    "Augment your human workforce with custom AI solutions, high-velocity engineering pods, and integrated marketing to drive compounding business outcomes.",
  keywords:
    SEO_DATA["/automation"]?.keywords ||
    SEO_DATA["/us"]?.keywords ||
    "AI Development Company USA, Enterprise AI Solutions, Custom AI Pods, Product Engineering, Tactical Marketing, Digixito Automation",
  openGraph: {
    title: "Intelligent Technology. Transformative Business Scale | Digixito Automation",
    siteName: "Digixito",
    url: "https://www.digixito.com/automation",
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
    title: "Intelligent Technology. Transformative Business Scale | Digixito Automation",
    description:
      "Augment your human workforce with custom AI solutions, high-velocity engineering pods, and integrated marketing to drive compounding business outcomes.",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/automation",
  },
};

export default function AutomationPage() {
  return <UsLayout />;
}

