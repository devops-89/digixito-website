import React from "react";
import CaseStudiesLayout from "@/components/layouts/case-study-details-layout";

export const metadata = {
  title: "Case Studies | Digixito",
  description: "Explore our portfolio of successful transformations.",
  alternates: {
    canonical: "/case-studies",
  },
};

const CaseStudiesPage = () => {
  return <CaseStudiesLayout />;
};

export default CaseStudiesPage;
