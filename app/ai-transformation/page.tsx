import { AI_TRANSFORMATION_DATA } from "@/assets/data/generic-array";
import ServicesCard from "@/components/layouts/services-layout/Services-Card";
import ServicesLayoutHeroSection from "@/components/layouts/services-layout/services-layout-hero-section";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";

const page = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <ServicesLayoutHeroSection
        heading={"The Shift to Intelligent Growth"}
        title="AI Transformation"
        description="Our AI transformation integrates machine learning, automation, and intelligent systems across every touchpoint of your brand. 

From predictive analytics that anticipate market shifts to chatbots that deliver personalized customer experiences 24/7, Digixito turns data into decisions and processes into competitive advantages. 

The result: Reduced Costs, Accelerated Growth & Operations that scale intelligently with demand.
"
        quote1simple="AI rewards clarity,"
        quote2simple="Builds"
        quote1bold="not chaos"
        quote2bold="Speed"
      />

      <Box sx={{ mt: 5, backgroundColor: "#222", py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              color: COLORS.WHITE,
              fontFamily: monument.style.fontFamily,
              textAlign: "center",
              mb: 4,
            }}
          >
            AI Transformation Solutions
          </Typography>
          <Grid container spacing={2}>
            {AI_TRANSFORMATION_DATA.map((val, i) => (
              <Grid size={{ lg: 3, xs: 12 }} key={i}>
                <ServicesCard
                  title={val.title}
                  description={val.description}
                  url={val.url}
                  img={val.img}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default page;
