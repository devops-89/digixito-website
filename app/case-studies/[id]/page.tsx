"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel, monument } from "@/utils/fonts";
import { CASE_STUDIES_DATA } from "@/public/locale/case-studies-data";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import ContentSection from "@/components/layouts/case-study-details-layout/components/content-section";
import KeyResultsSidebar from "@/components/layouts/case-study-details-layout/components/key-results-sidebar";
import CallToAction from "@/components/layouts/case-study-details-layout/components/call-to-action";

const CaseStudyDetail = () => {
  const params = useParams();
  const router = useRouter();
  const caseStudy = CASE_STUDIES_DATA.find((c) => c.id === params?.id);

  if (!caseStudy) {
    return (
      <Container sx={{ py: 20, textAlign: "center", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: monument.style.fontFamily, mb: 4 }}
        >
          Case Study Not Found
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/case-studies")}
          sx={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            fontFamily: monument.style.fontFamily,
          }}
        >
          Back to Case Studies
        </Button>
      </Container>
    );
  }

  const sections = [
    { title: "Overview", content: caseStudy.fullDescription },
    { title: "The Challenge", content: caseStudy.challenge },
    { title: "Our Solution", content: caseStudy.solution },
  ];

  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, minHeight: "100vh", pb: 10 }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "60vh" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="lg">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => router.push("/case-studies")}
              sx={{
                mb: 4,
                color: COLORS.WHITE,
                fontFamily: archivo.style.fontFamily,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Back to Portfolio
            </Button>

            <Chip
              label={caseStudy.category}
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                fontFamily: archivo.style.fontFamily,
                fontWeight: 600,
                mb: 2,
                borderRadius: "8px",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontFamily: monument.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 32, md: 56, lg: 64 },
                color: COLORS.WHITE,
                lineHeight: 1.1,
                maxWidth: "800px",
                mb: 2,
              }}
              data-aos="fade-up"
            >
              {caseStudy.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                color: "rgba(255,255,255,0.8)",
                fontSize: { xs: 18, md: 22 },
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Client: {caseStudy.clientName}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={8}>
              {sections.map((section, idx) => (
                <ContentSection
                  key={idx}
                  title={section.title}
                  content={section.content}
                />
              ))}

              {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                <Box pt={4} data-aos="fade-up">
                  <Grid container spacing={4}>
                    {caseStudy.gallery.map((img, idx) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                        <Box
                          sx={{
                            width: "100%",
                            height: 300,
                            position: "relative",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${caseStudy.title} image ${idx + 1}`}
                            fill
                            sizes="(max-width: 600px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <KeyResultsSidebar results={caseStudy.results} />
          </Grid>
        </Grid>

        <CallToAction onAction={() => router.push("/contact-us")} />
      </Container>
    </Box>
  );
};

export default CaseStudyDetail;
