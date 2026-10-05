import { SEO_DATA } from "@/utils/seo-metadata";
import type { Metadata } from "next";
import HomeLayouts from "@/components/layouts/home-layout";

export default function Home() {
  return (
    <div>
      <HomeLayouts />
    </div>
  );
}


export const metadata: Metadata = {
  title: SEO_DATA["/"].title,
  description: SEO_DATA["/"].description,
  keywords: SEO_DATA["/"].keywords,
  openGraph: {
    title: "AI Development Company for Business Growth & Automation",
    siteName: "Digixito",
    url: "https://www.digixito.com/",
    description:
      "Transform your business with custom AI solutions, enterprise AI, and intelligent automation that improve efficiency, innovation, and long-term growth",
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
    title: "AI Development Company for Business Growth & Automation",
    description:
      "Transform your business with custom AI solutions, enterprise AI, and intelligent automation that improve efficiency, innovation, and long-term growth",
    images: [
      "https://www.digixito.com/_next/static/media/final_black.80b7a948.svg",
    ],
  },
  alternates: {
    canonical: "/",
  },
};
