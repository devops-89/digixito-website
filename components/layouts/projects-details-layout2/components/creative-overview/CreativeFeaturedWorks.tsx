"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { kessel_bold } from "@/utils/fonts";

export const CreativeFeaturedWorks = ({ creativeData, projectInfo, setSelectedImage }: any) => {
  return (
    <>
      {(creativeData?.images || projectInfo?.images) && (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#fff" }}>
          <Container maxWidth="lg">
            <Box
              className="reveal-up"
              sx={{
                mb: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontFamily: kessel_bold.style.fontFamily,
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  textTransform: "uppercase",
                  lineHeight: 1,
                  letterSpacing: "-2px",
                }}
              >
                Featured <br /> Works
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
              {(creativeData?.images || projectInfo?.images)?.map(
                (imgUrl: any, idx: number) => {
                  const src =
                    typeof imgUrl === "string" ? imgUrl : imgUrl?.src;
                  return (
                    <Grid size={{ xs: 12, md: 6 }} key={idx}>
                      <Box
                        className="reveal-up"
                        onClick={() => setSelectedImage(src)}
                        sx={{
                          position: "relative",
                          width: "100%",
                          overflow: "hidden",
                          cursor: "zoom-in",
                          borderRadius: 2,
                          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                          bgcolor: "#f9f9f9",
                          "&:hover": {
                            "& .parallax-img": { transform: "scale(1.02)" },
                          },
                        }}
                      >
                        <Box
                          className="parallax-img"
                          component="img"
                          src={src}
                          alt={`Work ${idx + 1}`}
                          sx={{
                            display: "block",
                            width: "100%",
                            height: "auto",
                            transform: "scale(1.0)",
                            transition:
                              "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      </Box>
                    </Grid>
                  );
                },
              )}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};
