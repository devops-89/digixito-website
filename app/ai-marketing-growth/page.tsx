import { AI_MARKETING_GROWTH } from "@/assets/data/generic-array";
import ServicesCard from "@/components/layouts/services-layout/Services-Card";
import ServicesLayoutHeroSection from "@/components/layouts/services-layout/services-layout-hero-section";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const MarketingGrowth = () => {
  return (
    <div>
      <ServicesLayoutHeroSection
        title="AI in Marketing & Growth"
        heading="AI in Marketing & Growth"
        description="Digixito deploys artificial intelligence to transform marketing from guesswork into precision science. Our AI-powered solutions deliver hyper-personalized campaigns, predictive customer insights, and automated optimization across every channel. 

From machine learning algorithms that identify high-value leads to chatbots that nurture prospects 24/7, AI-driven content generation, and predictive analytics that forecast campaign performance—we automate what's repetitive and amplify what's strategic. 

Dynamic ad targeting adjusts in real-time, customer segmentation becomes surgical, and ROI becomes measurable down to the individual interaction. 

The result: faster growth, lower acquisition costs, and marketing that scales intelligently while your team focuses on creative strategy.
"
        quote1simple="Changing"
        quote1bold="Precision"
        quote2simple="Data meets Creative"
        quote2bold="Intelligence"
      />

      <Box sx={{ mt: 5, backgroundColor: "#222", py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              color: COLORS.WHITE,
              fontFamily: kessel.style.fontFamily,
              textAlign: "center",
              mb: 4,
              fontWeight: 600,
              fontSize: 40,
            }}
          >
            Product Engineering Solutions
          </Typography>
          <Grid container spacing={2}>
            {AI_MARKETING_GROWTH.map((val, i) => (
              <Grid size={{ lg: 3, xs: 12 }} key={i}>
                <ServicesCard
                  title={val.title}
                  description={val.description}
                  url={val.url}
                  serial={i + 1}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </div>
  );
};

export default MarketingGrowth;
