"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";

export const CreativeProcess = ({ projectInfo }: any) => {
  return (
    <>
      {projectInfo?.strategies?.details && (
        <Box sx={{ py: { xs: 10, md: 15 } }}>
          <Container maxWidth="lg">
            <Typography
              className="reveal-up"
              sx={{
                fontFamily: kessel_bold.style.fontFamily,
                fontSize: { xs: "2.5rem", md: "4rem" },
                mb: 8,
                textTransform: "uppercase",
                letterSpacing: "-1px",
              }}
            >
              Creative Process
            </Typography>
            <Grid container spacing={4} rowSpacing={6} className="stagger-list">
              {projectInfo.strategies.details.data.map((step: any, idx: number) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Box
                    className="stagger-item"
                    sx={{
                      p: 4,
                      bgcolor: "#fff",
                      borderRadius: "16px",
                      height: "100%",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: COLORS.PRIMARY,
                        fontFamily: kessel_bold.style.fontFamily,
                        fontSize: "2rem",
                        mb: 2,
                      }}
                    >
                      0{idx + 1}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: kessel_bold.style.fontFamily,
                        fontSize: "1.2rem",
                        mb: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {step.primary}
                    </Typography>
                    <Typography sx={{ color: "#666" }}>
                      {step.secondary}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
