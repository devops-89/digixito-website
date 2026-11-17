import React from "react";
import type { Metadata } from "next";
import WebsiteDevelopmentLayout from "@/components/layouts/website-development-layout";
import { SEO_DATA } from "@/utils/seo-metadata";

export const metadata: Metadata = {
  title:
    SEO_DATA["/website-development"]?.title ||
    "Engineer Digital Experiences That Move Your Business Forward | Digixito",
  description:
    SEO_DATA["/website-development"]?.description ||
    "From high-performing websites to custom applications and digital products, we combine design, engineering and technology to create digital solutions built around your business needs.",
  keywords:
    SEO_DATA["/website-development"]?.keywords ||
    "Website Development Company USA, Product Engineering, Custom Web Applications, SaaS Development, Shopify E-commerce, UI/UX Design, Digixito",
  openGraph: {
    title:
      "Engineer Digital Experiences That Move Your Business Forward | Digixito",
    siteName: "Digixito",
    url: "https://www.digixito.com/website-development",
    description:
      "From high-performing websites to custom applications and digital products, we combine design, engineering and technology to create digital solutions built around your business needs.",
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
    title:
      "Engineer Digital Experiences That Move Your Business Forward | Digixito",
    description:
      "From high-performing websites to custom applications and digital products, we combine design, engineering and technology to create digital solutions built around your business needs.",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebsiteDevelopmentLayout />;
}
