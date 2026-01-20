import { DESIGN_INTELLIGENCE_DATA } from "@/assets/data/generic-array";
import ServicesCard from "@/components/layouts/services-layout/Services-Card";
import ServicesLayoutHeroSection from "@/components/layouts/services-layout/services-layout-hero-section";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const DesignIntelligence = () => {
  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <ServicesLayoutHeroSection
          heading="Design Intelligence"
          title="Design Intelligence"
          description="We merge artistic brilliance with AI-powered insights to create designs that don't just look stunning—they perform. Our Design Intelligence approach uses data analytics, user behavior patterns, and machine learning to inform every creative decision.

From adaptive UI/UX that personalizes itself to individual users, to AI-generated design variations tested in real-time, to predictive heatmaps that optimize layouts before launch— Digixito eliminates guesswork. 

From crafting brand identities, websites, to remarkable digital experiences, our designs are strategically engineered for engagement, conversion, and memorability. 

Beautiful aesthetics backed by behavioral science and computational precision—design that's as intelligent as it is unforgettable.
"
          quote1simple="Immersive Brand"
          quote1bold="Ecosystems"
          quote2simple="Issight becomes"
          quote2bold="Experience"
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
              }}
            >
              AI Transformation Solutions
            </Typography>
            <Grid container spacing={2}>
              {DESIGN_INTELLIGENCE_DATA.map((val, i) => (
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
    </div>
  );
};

export default DesignIntelligence;
