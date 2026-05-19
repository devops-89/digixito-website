import ContactUsLayout from "@/components/layouts/contact-us-layout";
import React from "react";

export const metadata = {
  title: "Contact Us | Digixito",
  description:
    "Get in touch with Digixito. Let's discuss how we can help you accelerate growth and design intelligent solutions.",
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
