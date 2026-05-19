import PrivacyPolicyLayout from "@/components/layouts/privacy-policy-layout/Index";
import { Box } from "@mui/material";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Digixito",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <Box>
        <PrivacyPolicyLayout />
      </Box>
    </div>
  );
};

export default PrivacyPolicy;
