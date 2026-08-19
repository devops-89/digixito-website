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
  ...SEO_DATA["/"],
  alternates: {
    canonical: "/",
  },
};
