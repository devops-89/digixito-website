"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";
import CreativeProcessCard from "./components/Creative-Process-Card";

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
            <Grid container spacing={4}>
              {projectInfo.strategies.details.data.map(
                (step: any, idx: number) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                    <CreativeProcessCard
                      idx={idx}
                      primary={step.primary}
                      secondary={step.secondary}
                    />
                  </Grid>
                ),
              )}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
