import type { Metadata } from "next";
import { SEO_DATA } from "@/utils/seo-metadata";
import LifeAtDigixitoLayout from "@/components/layouts/careers/life-at-digixito";
import React from "react";

export const metadata: Metadata = {
  ...SEO_DATA["/careers/life-at-digixito"],
  alternates: {
    canonical: "/careers/life-at-digixito",
  },
};

const LifeAtDigixito = () => {
  return (
    <div>
      <LifeAtDigixitoLayout />
    </div>
  );
};

export default LifeAtDigixito;
