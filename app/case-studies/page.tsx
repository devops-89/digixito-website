import type { Metadata } from "next";
import { SEO_DATA } from "@/utils/seo-metadata";
import React from "react";
import CaseStudiesLayout from "@/components/layouts/case-study-details-layout";

export const metadata: Metadata = {
  ...SEO_DATA["/case-studies"],
  alternates: {
    canonical: "/case-studies",
  },
};

const CaseStudiesPage = () => {
  return <CaseStudiesLayout />;
};

export default CaseStudiesPage;
