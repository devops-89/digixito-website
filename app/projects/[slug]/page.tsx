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
import { PROJECT_DATA } from "@/assets/data/project-data";
import { ArrowBack } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import CallToAction from "@/components/layouts/case-study-details-layout/components/call-to-action";

const getServiceDescription = (label: string) => {
  const map: Record<string, string> = {
    "Web Development": "Building high-performance, scalable web architectures.",
    "Web Design": "Crafting intuitive, engaging, and modern user interfaces.",
    "E-commerce Operations":
      "Optimizing online sales, inventory, and customer journeys.",
    "E-Commerce": "End-to-end e-commerce solutions for maximized conversion.",
    "Digital Marketing":
      "Data-driven campaigns to boost brand visibility and ROI.",
    "Mobile Application":
      "Creating seamless cross-platform mobile experiences.",
    "UX Design":
      "User-centric research and design to ensure frictionless interactions.",
    "Graphic Works":
      "Compelling visual assets that communicate brand identity.",
    "Online Sales":
      "Strategies and tools to maximize conversion rates and revenue.",
    "Marketplace Management": "End-to-end handling of marketplace listings.",
    "Next.js": "React framework for highly optimized applications.",
    NestJS: "Progressive Node.js framework for efficient backend services.",
  };
  return (
    map[label] ||
    "Delivering excellence through specialized execution and strategy."
  );
};

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const project = PROJECT_DATA.find((p) => p.slug === params?.slug);

  // Split description artificially to make it look highly detailed
  const sentences = project?.description?.split(". ").filter(Boolean) || [];
  const mid = Math.ceil(sentences.length / 2) || 1;
  const overviewText =
    sentences.slice(0, mid).join(". ") + (sentences.length ? "." : "");
  const approachText =
    sentences.slice(mid).join(". ") + (sentences.length > 1 ? "." : "");

  if (!project) {
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
          Project Not Found
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/")}
          sx={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            fontFamily: monument.style.fontFamily,
          }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: COLORS.BLACK, minHeight: "100vh", pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.img}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Dark overlay for contrast */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)",
            display: "flex",
            alignItems: "flex-end",
            pb: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="lg">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => router.back()}
              sx={{
                mb: 4,
                color: COLORS.WHITE,
                fontFamily: archivo.style.fontFamily,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Back
            </Button>

            <Typography
              variant="h1"
              sx={{
                fontFamily: monument.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 40, md: 72, lg: 96 },
                color: COLORS.WHITE,
                lineHeight: 1,
                mb: 2,
                textTransform: "uppercase",
              }}
              data-aos="fade-up"
            >
              {project.title}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box data-aos="fade-up">
              <Typography
                variant="h2"
                sx={{
                  fontFamily: monument.style.fontFamily,
                  color: COLORS.WHITE,
                  mb: 6,
                  fontSize: { xs: 28, md: 40 },
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
                Project Overview
              </Typography>

              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  backgroundColor: "rgba(255,255,255,0.02)",
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
                    background: `radial-gradient(circle, ${COLORS.PRIMARY}20 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: archivo.style.fontFamily,
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: 18, md: 22 },
                    lineHeight: 1.9,
                    letterSpacing: "0.5px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {overviewText}
                </Typography>

                {approachText.length > 3 && (
                  <Box sx={{ mt: 4, position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: monument.style.fontFamily,
                        color: COLORS.PRIMARY,
                        mb: 2,
                        fontSize: { xs: 20, md: 24 },
                      }}
                    >
                      Our Approach
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: archivo.style.fontFamily,
                        color: "rgba(255,255,255,0.7)",
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.8,
                      }}
                    >
                      {approachText}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 4, md: 5 },
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                backgroundImage:
                  "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: monument.style.fontFamily,
                  color: COLORS.WHITE,
                  mb: 5,
                  fontSize: { xs: 24, md: 28 },
                }}
              >
                Services Delivered
              </Typography>

              <Stack spacing={2.5}>
                {project.skills?.map((skill, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "rgba(0,0,0,0.4)",
                      border: `1px solid rgba(255,255,255,0.08)`,
                      p: { xs: 2.5, md: 3 },
                      borderRadius: "16px",
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "default",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.08)",
                        borderColor: `${COLORS.PRIMARY}80`,
                        transform: "translateY(-4px) scale(1.02)",
                        boxShadow: `0 8px 24px ${COLORS.PRIMARY}20`,
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: kessel.style.fontFamily,
                          fontSize: { xs: 13, md: 15 },
                          color: COLORS.WHITE,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          mb: 1,
                        }}
                      >
                        {skill.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: archivo.style.fontFamily,
                          fontSize: { xs: 12, md: 14 },
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.5,
                        }}
                      >
                        {getServiceDescription(skill.label)}
                      </Typography>
                    </Box>
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
          </Grid>
        </Grid>

        <Box mt={{ xs: 10, md: 15 }}>
          <CallToAction onAction={() => router.push("/contact-us")} />
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
