import type { Metadata } from "next";
import { SEO_DATA } from "@/utils/seo-metadata";
import ContactUsLayout from "@/components/layouts/contact-us-layout";
import React from "react";

export const metadata: Metadata = {
  ...SEO_DATA["/contact-us"],
  alternates: {
    canonical: "/contact-us",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactUsLayout />
    </div>
  );
};

export default Contact;
