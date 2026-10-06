"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { archivo, kessel } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { BlogProps } from "@/public/locale/blogs-data";

import ContentSection, {
  renderFormattedText,
} from "@/components/layouts/blog-details-layout/components/content-section";
import KeyPointsSidebar from "@/components/layouts/blog-details-layout/components/key-points-sidebar";
import CallToAction from "@/components/layouts/blog-details-layout/components/call-to-action";

export default function BlogDetailClient({ blog }: { blog: BlogProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        minHeight: "100vh",
        pb: 10,
        pt: { xs: 12, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }} data-aos="fade-down">
          <IconButton
            onClick={() => router.push("/blogs")}
            sx={{
              mb: 4,
              backgroundColor: "#f5f5f5",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <ArrowBack sx={{ color: COLORS.BLACK }} />
          </IconButton>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {blog.tags.map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  backgroundColor: "#f0f0f0",
                }}
              />
            ))}
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: kessel.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 32, md: 48, lg: 58 },
              color: COLORS.BLACK,
              lineHeight: 1.15,
              mb: 3,
              maxWidth: "1000px",
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: 16,
              color: "rgba(0,0,0,0.6)",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            By {blog.author} • {blog.date} • {blog.category}
          </Typography>
        </Box>

        {/* Hero Image */}
        <Box
          data-aos="zoom-in"
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "500px", lg: "580px" },
            borderRadius: "24px",
            overflow: "hidden",
            mb: 8,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </Box>

        {/* Content & Sidebar Grid */}
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ContentSection
              title="Executive Summary"
              content={blog.shortDescription}
            />

            {blog.sections && blog.sections.length > 0 ? (
              <Stack spacing={6} sx={{ mt: 6 }}>
                {blog.sections.map((section, sIdx) => (
                  <Box key={sIdx} data-aos="fade-up" sx={{ mb: 2 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: kessel.style.fontFamily,
                        fontWeight: 400,
                        fontSize: { xs: 24, md: 32 },
                        mb: 3,
                        color: COLORS.BLACK,
                        lineHeight: 1.25,
                        position: "relative",
                        display: "inline-block",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          left: 0,
                          width: "48px",
                          height: "3px",
                          backgroundColor: "#FFD000",
                          borderRadius: "2px",
                        },
                      }}
                    >
                      {section.heading}
                    </Typography>

                    {section.paragraphs?.map((para, pIdx) => (
                      <Typography
                        key={pIdx}
                        component="div"
                        sx={{
                          fontFamily: archivo.style.fontFamily,
                          color: "rgba(0,0,0,0.8)",
                          fontSize: { xs: 16, md: 18 },
                          lineHeight: 1.8,
                          mt: 2.5,
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {renderFormattedText(para)}
                      </Typography>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <Stack spacing={2} sx={{ mt: 3, pl: { xs: 1, md: 2 } }}>
                        {section.bullets.map((bullet, bIdx) => (
                          <Box
                            key={bIdx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                minWidth: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: COLORS.BLACK,
                                mt: 1.3,
                              }}
                            />
                            <Typography
                              component="div"
                              sx={{
                                fontFamily: archivo.style.fontFamily,
                                color: "rgba(0,0,0,0.85)",
                                fontSize: { xs: 16, md: 17.5 },
                                lineHeight: 1.7,
                              }}
                            >
                              {renderFormattedText(bullet)}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    )}

                    {section.closingParagraphs?.map((para, cIdx) => (
                      <Typography
                        key={cIdx}
                        component="div"
                        sx={{
                          fontFamily: archivo.style.fontFamily,
                          color: "rgba(0,0,0,0.8)",
                          fontSize: { xs: 16, md: 18 },
                          lineHeight: 1.8,
                          mt: 2.5,
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {renderFormattedText(para)}
                      </Typography>
                    ))}
                  </Box>
                ))}
              </Stack>
            ) : (
              <Box sx={{ my: 6 }}>
                <ContentSection title="Deep Dive" content={blog.content} />
              </Box>
            )}
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <KeyPointsSidebar points={blog.keyPoints} />
          </Grid>
        </Grid>

        <CallToAction />
      </Container>
    </Box>
  );
}
