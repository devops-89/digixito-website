import TermsLayout from "@/components/layouts/Terms-layout/Index";
import React from "react";

export const metadata = {
  title: "Terms and Conditions | Digixito",
  description:
    "Read our terms and conditions for using our website and services.",
  alternates: {
    canonical: "/terms",
  },
};

const Terms = () => {
  return (
    <div>
      <TermsLayout />
    </div>
  );
};

export default Terms;
