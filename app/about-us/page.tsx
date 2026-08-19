import type { Metadata } from "next";
import { SEO_DATA } from "@/utils/seo-metadata";
import AboutLayout from "@/components/layouts/about-layout";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  ...SEO_DATA["/about-us"],
  alternates: {
    canonical: "/about-us",
  },
};

const About = () => {
  return (
    <Box>
      <AboutLayout />
    </Box>
  );
};

export default About;
