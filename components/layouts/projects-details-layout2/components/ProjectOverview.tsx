"use client";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProjectOverview = () => {
  const { projectDetails } = useProjectDetailsStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Clean Stagger Fade for main text
      const textBlocks = gsap.utils.toArray(".animate-text");
      textBlocks.forEach((block: any) => {
        gsap.fromTo(
          block,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 2. Elegant Image Reveal (Mask Expansion + Scale)
      const imageBlocks = gsap.utils.toArray(".animate-image-wrapper");
      imageBlocks.forEach((block: any) => {
        const img = block.querySelector("img");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          img,
          { scale: 1.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
        );
      });
    },
    { scope: containerRef },
  );

  const newData: {
    label: string;
    details?: string[];
    subData?: {
      heading: string;
      data: { primary?: string; secondary?: string }[];
      endDescription?: string;
    };
  }[] = [
    {
      label: "Project Overview",
      details: projectDetails?.details?.description,
    },
    {
      label: "The Strategy",
      details: projectDetails?.details?.strategies?.description,
      subData: projectDetails?.details?.strategies?.details,
    },
    {
      label: "Result Achieved",
      details: projectDetails?.details?.result?.description,
      subData: projectDetails?.details?.result?.details,
    },
    {
      label: "Conclusion",
      details: projectDetails?.details?.conclusion?.description,
    },
  ];

  return (
    <Box ref={containerRef} sx={{ pt: 8, pb: 12 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 8, md: 12 },
          }}
        >
          {newData?.map((val, i) => {
            if (!val.details && !val.subData) return null;
            return (
              <Grid container spacing={6} key={i}>
                {/* Sticky Left Sidebar for Label */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
                    <Typography
                      className="animate-text"
                      sx={{
                        fontSize: { xs: 24, md: 32 },
                        fontFamily: kessel_bold.style.fontFamily,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "-0.5px",
                        position: "relative",
                        display: "inline-block",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -10,
                          left: 0,
                          width: "40px",
                          height: "4px",
                          backgroundColor: COLORS.PRIMARY,
                        },
                      }}
                    >
                      {val.label}
                    </Typography>
                  </Box>
                </Grid>

                {/* Right Scrolling Content */}
                <Grid size={{ xs: 12, md: 8 }}>
                  {val.details?.map((innerVal: any, j) => (
                    <Typography
                      key={j}
                      className="animate-text"
                      sx={{
                        fontSize: { xs: 22, md: 28 },
                        fontWeight: 500,
                        fontFamily: archivo.style.fontFamily,
                        lineHeight: 1.5,
                        mb: 4,
                        color: "#1F2326",
                      }}
                    >
                      {innerVal}
                    </Typography>
                  ))}

                  {val.subData && (
                    <Box sx={{ mt: 4 }}>
                      <Typography
                        className="animate-text"
                        sx={{
                          fontFamily: kessel_bold.style.fontFamily,
                          fontSize: 24,
                          textTransform: "capitalize",
                          mb: 3,
                          color: "#1F2326",
                        }}
                      >
                        {val.subData.heading}
                      </Typography>

                      {val.subData?.data && val.subData.data.length > 0 && (
                        <List disablePadding>
                          {val.subData.data.map((item, index) => (
                            <ListItem
                              key={index}
                              alignItems="flex-start"
                              sx={{ px: 0, py: 1.5 }}
                              className="animate-text"
                            >
                              <ListItemAvatar sx={{ minWidth: 32, mt: 1 }}>
                                <Divider
                                  sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    backgroundColor: COLORS.PRIMARY,
                                    border: "none",
                                  }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={item.primary}
                                secondary={item.secondary}
                                slotProps={{
                                  primary: {
                                    sx: {
                                      fontFamily: archivo.style.fontFamily,
                                      fontSize: 20,
                                      fontWeight: 600,
                                      color: "#1F2326",
                                    },
                                  },
                                  secondary: {
                                    sx: {
                                      fontFamily: archivo.style.fontFamily,
                                      fontSize: 18,
                                      color: "#666",
                                      mt: 0.5,
                                    },
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      )}

                      {val.subData?.endDescription && (
                        <Typography
                          className="animate-text"
                          sx={{
                            fontFamily: archivo.style.fontFamily,
                            fontSize: 20,
                            mt: 4,
                            color: "#404040",
                            fontStyle: "italic",
                          }}
                        >
                          "{val.subData.endDescription}"
                        </Typography>
                      )}
                    </Box>
                  )}
                </Grid>
              </Grid>
            );
          })}

          {/* Project Images Gallery */}
          {projectDetails?.details?.images &&
            projectDetails.details.images.length > 0 && (
              <Grid container spacing={4} sx={{ mt: 6 }}>
                {projectDetails.details.images.map((imgUrl, idx) => (
                  <Grid size={{ xs: 12, md: 6 }} key={idx}>
                    <Box
                      className="animate-image-wrapper"
                      sx={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",

                        "&:hover img": {
                          transform: "scale(1.05) !important",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={typeof imgUrl === "string" ? imgUrl : imgUrl?.src}
                        alt={`${projectDetails?.projectName || "Project"} showcase ${idx + 1}`}
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                          borderRadius: "50px",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectOverview;
