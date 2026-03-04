"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { archivo, kessel } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { BLOGS_DATA, BlogProps } from "@/public/locale/blogs-data";

import ContentSection from "@/components/layouts/blog-details-layout/components/content-section";
import KeyPointsSidebar from "@/components/layouts/blog-details-layout/components/key-points-sidebar";
import CallToAction from "@/components/layouts/blog-details-layout/components/call-to-action";

export default function BlogDetail() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blog: BlogProps | undefined = BLOGS_DATA.find((b) => b.id === id);

  if (!blog) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontFamily: kessel.style.fontFamily, fontSize: 24 }}>
          Blog not found.
        </Typography>
      </Box>
    );
  }

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
            sx={{
              fontFamily: kessel.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: 32, md: 48, lg: 64 },
              color: COLORS.BLACK,
              lineHeight: 1.1,
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
            height: { xs: "300px", md: "500px", lg: "600px" },
            borderRadius: "24px",
            overflow: "hidden",
            mb: 8,
          }}
        >
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>

        {/* Content & Sidebar Grid */}
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ContentSection
              title="Executive Summary"
              content={blog.shortDescription}
            />
            <Box sx={{ my: 6 }}>
              <ContentSection title="Deep Dive" content={blog.content} />
            </Box>
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
