"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";

export const CreativeOverviewInfo = ({ creativeData, projectInfo }: any) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
      <Grid container spacing={{ xs: 8, md: 12 }}>
        {/* OVERVIEW - Asymmetric Left */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box className="reveal-up" sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                color: COLORS.PRIMARY,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.85rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 2,
                "&::before": {
                  content: '""',
                  display: "block",
                  width: "40px",
                  height: "2px",
                  bgcolor: COLORS.PRIMARY,
                },
              }}
            >
              Project Overview
            </Typography>
          </Box>

          <Typography
            className="reveal-up"
            sx={{
              fontFamily: kessel_bold.style.fontFamily,
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              lineHeight: 1.1,
              color: "#111",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              mb: 6,
            }}
          >
            {creativeData?.details?.heading ||
              projectInfo?.title ||
              "Creating a digital experience that feels as bold as the brand."}
          </Typography>

          <Box className="reveal-up">
            {(
              creativeData?.details?.description || projectInfo?.description
            )?.map((desc: string, idx: number) => (
              <Typography
                key={idx}
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 1.8,
                  color: "#555",
                  mb: 4,
                  fontWeight: 300,
                }}
              >
                {desc}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* INFORMATION - Right Sidebar */}
        <Grid size={{ xs: 12, md: 4 }} offset={{ md: 1 }}>
          <Box className="stagger-list" sx={{ pt: { md: 10 } }}>
            {(
              creativeData?.details?.data || projectInfo?.result?.details?.data
            )?.map((item: any, idx: number) => (
              <Box
                key={idx}
                className="stagger-item"
                sx={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  py: 3,
                  display: "flex",
                  flexDirection: "column",
                  "&:last-child": {
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: kessel_bold.style.fontFamily,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    color: "#999",
                    letterSpacing: "1px",
                    mb: 1,
                  }}
                >
                  {item.primary}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    color: "#111",
                    fontWeight: 500,
                  }}
                >
                  {item.secondary}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
