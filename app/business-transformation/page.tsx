import { BUSINESS_TRANSFORMATION_DATA } from "@/assets/data/generic-array";
import ServicesCard from "@/components/layouts/services-layout/Services-Card";
import ServicesLayoutHeroSection from "@/components/layouts/services-layout/services-layout-hero-section";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const BusinessTransformation = () => {
  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <ServicesLayoutHeroSection
          title="Business Transformation"
          description="We reimagine how your business operates. Our transformation approach integrates cutting-edge technology, streamlined processes, and data-driven strategy to eliminate inefficiencies and unlock growth. 

From legacy system modernization and cloud migration to digital workflow optimization, we rebuild your infrastructure for speed & scalability. Whether it's enhancing customer experiences, empowering teams with better tools, or creating new revenue streams through digital innovation, we engineer transformations that deliver measurable ROI. 

The result: a leaner, smarter, future-ready brand that doesn't just survive disruption—it thrives on it.

"
          heading="Business Transformation"
          quote1simple="Vision is the"
          quote2simple="Reinventing What’s"
          quote1bold="driver"
          quote2bold="Possible"
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
              Business Transformation Solutions
            </Typography>
            <Grid container spacing={2}>
              {BUSINESS_TRANSFORMATION_DATA.map((val, i) => (
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
      </Box>
    </div>
  );
};

export default BusinessTransformation;
