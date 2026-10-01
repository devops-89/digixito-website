"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";

export const CreativeImpact = ({ projectInfo }: any) => {
  return (
    <>
      {projectInfo?.result && (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#111", color: "#fff" }}>
          <Container maxWidth="lg">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  className="reveal-up"
                  sx={{
                    fontFamily: kessel_bold.style.fontFamily,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    textTransform: "uppercase",
                    mb: 4,
                    letterSpacing: "-1px",
                  }}
                >
                  The Impact
                </Typography>
                <Box className="reveal-up">
                  {projectInfo.result.description.map(
                    (desc: string, i: number) => (
                      <Typography
                        key={i}
                        sx={{
                          fontSize: "1.1rem",
                          color: "#aaa",
                          mb: 2,
                          lineHeight: 1.8,
                        }}
                      >
                        {desc}
                      </Typography>
                    ),
                  )}
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} offset={{ md: 1 }}>
                {projectInfo.result.details?.data && (
                  <Grid container spacing={4} className="stagger-list">
                    {projectInfo.result.details.data.map(
                      (stat: any, idx: number) => (
                        <Grid
                          size={{ xs: 6 }}
                          key={idx}
                          className="stagger-item"
                        >
                          <Box
                            sx={{
                              borderTop: "2px solid rgba(255,255,255,0.2)",
                              pt: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: kessel_bold.style.fontFamily,
                                fontSize: { xs: "2rem", md: "3rem" },
                                color: COLORS.PRIMARY,
                                mb: 1,
                              }}
                            >
                              {stat.primary}
                            </Typography>
                            <Typography
                              sx={{ fontSize: "1.1rem", color: "#ddd" }}
                            >
                              {stat.secondary}
                            </Typography>
                          </Box>
                        </Grid>
                      ),
                    )}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
