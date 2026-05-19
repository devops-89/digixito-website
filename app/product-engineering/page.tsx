import { PRODUCT_ENGINEERING } from "@/assets/data/generic-array";
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
  title: "Product Engineering | Digixito",
  description:
    "Digixito transforms ideas into exceptional digital products that users love and markets demand. Our end-to-end product engineering combines strategic planning, cutting-edge development, and user-centric design to build scalable, high-performance solutions.",
  alternates: {
    canonical: "/product-engineering",
  },
};

const ProductEngineering = () => {
  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <ServicesLayoutHeroSection
          title="Product Engineering"
          heading="Product Engineering"
          description="Digixito transforms ideas into exceptional digital products that users love and markets demand. Our end-to-end product engineering combines strategic planning, cutting-edge development, and user-centric design to build scalable, high-performance solutions. 

From mobile apps and web platforms to SaaS products and enterprise software, we handle everything—architecture, UX/UI design, full-stack development, quality assurance, and deployment. 

Using agile methodologies and the latest technologies, we ensure rapid iteration and flawless execution. Whether launching an MVP or scaling an existing product, we engineer solutions that are robust, intuitive, and built to evolve with your business needs.
"
          quote1simple="Truest form of product"
          quote1bold="strategy"
          quote2simple="Translated into"
          quote2bold="Systems"
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
              Product Engineering Solutions
            </Typography>
            <Grid container spacing={2}>
              {PRODUCT_ENGINEERING.map((val, i) => (
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

export default ProductEngineering;
