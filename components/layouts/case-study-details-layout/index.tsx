"use client";
import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";
import { CASE_STUDIES_DATA } from "@/public/locale/case-studies-data";
import CaseStudyCard from "@/components/widgets/CaseStudyCard";
import ImageHeading from "@/components/widgets/image-heading";

const CaseStudiesLayout = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, minHeight: "100vh", pb: 15 }}>
      <Box
        sx={{
          pt: { xs: 5, md: 10 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          <Stack spacing={4} maxWidth="1200px">
            <Box
              data-aos="fade-up"
              sx={{
                width: "fit-content",
              }}
            >
              <ImageHeading
                title="Selected Works"
                sx={{ px: { xs: 2, md: 4 } }}
              />
            </Box>
            <Typography
              data-aos="fade-up"
              data-aos-delay="100"
              variant="h1"
              sx={{
                fontFamily: monument.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 36, md: 64, lg: 80 },
                color: COLORS.BLACK,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Building the next era of digital.
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                fontFamily: archivo.style.fontFamily,
                color: "rgba(0,0,0,0.7)",
                maxWidth: "600px",
              }}
            >
              Explore our portfolio of successful transformations, where we
              merge strategy, design intelligence, and product engineering.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 4 } }}>
          {CASE_STUDIES_DATA.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudiesLayout;
