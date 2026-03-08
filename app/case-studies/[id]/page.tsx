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
import { ArrowBack, CheckCircleOutline } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

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
          sx={{
            fontFamily: monument.style.fontFamily,
            mb: 4,
            color: COLORS.WHITE,
          }}
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
      {/* Hero Section Without Image Background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: { xs: 15, md: 20 },
          paddingBottom: { xs: 8, md: 10 },
          background: `linear-gradient(to bottom, #F8FAFC 0%, ${COLORS.WHITE} 100%)`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.PRIMARY}30 0%, transparent 70%)`,
            filter: "blur(80px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => router.push("/case-studies")}
            sx={{
              mb: 4,
              color: COLORS.BLACK,
              fontFamily: archivo.style.fontFamily,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            Back to Portfolio
          </Button>

          <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mb: 3 }}>
            <Chip
              label={caseStudy.category}
              sx={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                fontFamily: archivo.style.fontFamily,
                fontWeight: 600,
                borderRadius: "8px",
              }}
            />
            {caseStudy.projectDuration && (
              <Chip
                label={`Duration: ${caseStudy.projectDuration}`}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  color: COLORS.BLACK,
                  fontFamily: archivo.style.fontFamily,
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  backdropFilter: "blur(4px)",
                }}
              />
            )}
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontFamily: monument.style.fontFamily,
              fontWeight: 800,
              fontSize: { xs: 32, md: 56, lg: 72 },
              color: COLORS.BLACK,
              lineHeight: 1.1,
              maxWidth: "900px",
              mb: 3,
              textTransform: "uppercase",
            }}
            data-aos="fade-up"
          >
            {caseStudy.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "rgba(0,0,0,0.6)",
              fontSize: { xs: 18, md: 22 },
              fontWeight: 500,
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Client: {caseStudy.clientName}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={8}>
              {sections.map((section, idx) => (
                <Box key={idx} data-aos="fade-up">
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: monument.style.fontFamily,
                      color: COLORS.BLACK,
                      mb: 6,
                      fontSize: { xs: 28, md: 36 },
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -15,
                        left: 0,
                        width: "60%",
                        height: "4px",
                        backgroundColor: COLORS.PRIMARY,
                        borderRadius: "2px",
                      },
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Box
                    sx={{
                      p: { xs: 3, md: 5 },
                      backgroundColor: "#F8FAFC",
                      borderLeft: `4px solid ${COLORS.PRIMARY}`,
                      borderRadius: "0 24px 24px 0",
                      mb: 6,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "150px",
                        height: "150px",
                        background: `radial-gradient(circle, ${COLORS.PRIMARY}40 0%, transparent 70%)`,
                        filter: "blur(40px)",
                        pointerEvents: "none",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: archivo.style.fontFamily,
                        color: "rgba(0,0,0,0.8)",
                        fontSize: { xs: 18, md: 22 },
                        lineHeight: 1.9,
                        letterSpacing: "0.5px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {section.content}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                <Box pt={4} data-aos="fade-up">
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: monument.style.fontFamily,
                      color: COLORS.BLACK,
                      mb: 6,
                      fontSize: { xs: 28, md: 36 },
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -15,
                        left: 0,
                        width: "60%",
                        height: "4px",
                        backgroundColor: COLORS.PRIMARY,
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Project Gallery
                  </Typography>
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
                            border: "1px solid rgba(0,0,0,0.05)",
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
            <Stack spacing={6}>
              {/* Tools Used Section */}
              {caseStudy.toolsUsed && caseStudy.toolsUsed.length > 0 && (
                <Box
                  sx={{
                    p: { xs: 4, md: 5 },
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "24px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: monument.style.fontFamily,
                      color: COLORS.BLACK,
                      mb: 5,
                      fontSize: { xs: 24, md: 28 },
                    }}
                  >
                    Tools Used
                  </Typography>

                  <Stack spacing={2.5}>
                    {caseStudy.toolsUsed.map((tool, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          backgroundColor: COLORS.WHITE,
                          border: `1px solid #E5E7EB`,
                          p: { xs: 2.5, md: 3 },
                          borderRadius: "16px",
                          transition:
                            "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                          cursor: "default",
                          "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.02)",
                            borderColor: `${COLORS.PRIMARY}80`,
                            transform: "translateY(-4px) scale(1.02)",
                            boxShadow: `0 8px 24px ${COLORS.PRIMARY}20`,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: kessel.style.fontFamily,
                            fontSize: { xs: 13, md: 15 },
                            color: COLORS.BLACK,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          {tool}
                        </Typography>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: COLORS.PRIMARY,
                            boxShadow: `0 0 10px ${COLORS.PRIMARY}`,
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Key Results Section (Light Theme Adaptation) */}
              {caseStudy.results && caseStudy.results.length > 0 && (
                <Box
                  sx={{
                    position: { md: "sticky" },
                    top: { md: "120px" },
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
                    p: { xs: 4, md: 5 },
                    borderRadius: "24px",
                  }}
                  data-aos="fade-left"
                >
                  <Typography
                    sx={{
                      fontFamily: monument.style.fontFamily,
                      fontWeight: 800,
                      fontSize: 22,
                      mb: 4,
                      color: COLORS.BLACK,
                      borderBottom: "2px solid",
                      borderColor: COLORS.PRIMARY,
                      pb: 2,
                      display: "inline-block",
                    }}
                  >
                    Key Results
                  </Typography>

                  <Stack spacing={4}>
                    {caseStudy.results.map((result, i) => (
                      <Box key={i}>
                        <Stack
                          direction="row"
                          alignItems="flex-start"
                          spacing={2}
                        >
                          <CheckCircleOutline
                            sx={{
                              color: COLORS.PRIMARY,
                              fontSize: 28,
                              mt: 0.5,
                            }}
                          />
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: monument.style.fontFamily,
                                fontWeight: 800,
                                fontSize: 32,
                                color: COLORS.BLACK,
                                lineHeight: 1,
                                mb: 1,
                              }}
                            >
                              {result.metric}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: archivo.style.fontFamily,
                                color: "rgba(0,0,0,0.6)",
                                fontSize: 16,
                                lineHeight: 1.4,
                              }}
                            >
                              {result.description}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Box mt={{ xs: 10, md: 15 }}>
          <CallToAction onAction={() => router.push("/contact-us")} />
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudyDetail;
