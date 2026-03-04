"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { archivo, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import ImageHeading from "@/components/widgets/image-heading";
import BlogCard from "@/components/widgets/BlogCard";
import { BLOGS_DATA } from "@/public/locale/blogs-data";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogsLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, minHeight: "100vh", pb: 15 }}>
      <Box
        sx={{
          pt: { xs: 15, md: 24 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} maxWidth="1200px">
            <Box data-aos="fade-up" sx={{ width: "fit-content" }}>
              <ImageHeading
                title="Digixito Journal"
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
              Insights & Ideas
            </Typography>

            <Typography
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                fontFamily: archivo.style.fontFamily,
                color: "rgba(0,0,0,0.7)",
                maxWidth: "600px",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.6,
              }}
            >
              Explore our latest thinking on AI, design intelligence, product
              engineering, and the future of digital business.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* List Section */}
      <Box
        sx={{ borderTop: "1px solid rgba(0,0,0,0.15)", pt: { xs: 6, md: 12 } }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            {BLOGS_DATA.map((blog) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogsLayout;
