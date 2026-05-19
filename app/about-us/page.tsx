import AboutLayout from "@/components/layouts/about-layout";
import { Box } from "@mui/material";

export const metadata = {
  title: "About | Digixito",
  description:
    "Learn more about Digixito, our mission, services, and expertise in delivering scalable digital solutions.",
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
