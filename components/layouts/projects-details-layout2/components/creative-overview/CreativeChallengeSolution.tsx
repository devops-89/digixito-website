"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { kessel_bold } from "@/utils/fonts";

export const CreativeChallengeSolution = ({ projectDetails, projectInfo }: any) => {
  return (
    <>
      {projectInfo?.strategies && (
        <Box sx={{ bgcolor: "#fff", py: { xs: 10, md: 15 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="reveal-up">
                  <Typography
                    sx={{
                      fontFamily: kessel_bold.style.fontFamily,
                      fontSize: "2.5rem",
                      mb: 4,
                      textTransform: "uppercase",
                      letterSpacing: "-1px",
                    }}
                  >
                    The Challenge
                  </Typography>
                  <Typography
                    sx={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8 }}
                  >
                    {projectDetails?.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="reveal-up">
                  <Typography
                    sx={{
                      fontFamily: kessel_bold.style.fontFamily,
                      fontSize: "2.5rem",
                      mb: 4,
                      textTransform: "uppercase",
                      letterSpacing: "-1px",
                    }}
                  >
                    The Solution
                  </Typography>
                  {projectInfo.strategies.description?.map((desc: string, i: number) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: "1.1rem",
                        color: "#666",
                        lineHeight: 1.8,
                        mb: 2,
                      }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
