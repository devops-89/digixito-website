import { BUSINESS_TRANSFORMATION_DATA } from "@/assets/data/generic-array";
import ServicesCard from "@/components/layouts/services-layout/Services-Card";
import ServicesLayoutHeroSection from "@/components/layouts/services-layout/services-layout-hero-section";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const metadata = {
  title: "Business Transformation | Digixito",
  description:
    "We reimagine how your business operates. Our transformation approach integrates cutting-edge technology, streamlined processes, and data-driven strategy to eliminate inefficiencies and unlock growth.",
  alternates: {
    canonical: "/business-transformation",
  },
};

const BusinessTransformation = () => {
  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <ServicesLayoutHeroSection
          title="Business Transformation"
          description="We reimagine how your business operates. Our transformation approach integrates cutting-edge technology, streamlined processes, and data-driven strategy to eliminate inefficiencies and unlock growth. 

From legacy system modernization and cloud migration to digital workflow optimization, we rebuild your infrastructure for speed & scalability. Whether it's enhancing customer experiences, empowering teams with better tools, or creating new revenue streams through digital innovation, we engineer transformations that deliver measurable ROI.
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
                fontFamily: monument.style.fontFamily,
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

export default BusinessTransformation;
