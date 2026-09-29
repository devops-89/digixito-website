const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components/layouts/projects-details-layout2/components');
const sourcePath = path.join(dir, 'CreativeProjectOverview.tsx');

const source = fs.readFileSync(sourcePath, 'utf8');

// We will extract the JSX blocks and create new files.
// Since it's complex to parse JSX reliably with regex, we'll manually define the components and their code.

const components = [
  {
    name: 'CreativeOverviewInfo',
    props: '{ creativeData, projectInfo }: any',
    imports: `import { Box, Container, Grid, Typography } from "@mui/material";\nimport { COLORS } from "@/utils/enum";\nimport { archivo, kessel_bold } from "@/utils/fonts";`,
    content: `
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
                creativeData?.details?.data ||
                projectInfo?.result?.details?.data
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
    `
  },
  {
    name: 'CreativeChallengeSolution',
    props: '{ projectDetails, projectInfo }: any',
    imports: `import { Box, Container, Grid, Typography } from "@mui/material";\nimport { kessel_bold } from "@/utils/fonts";`,
    content: `
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
    `
  },
  {
    name: 'CreativeProcess',
    props: '{ projectInfo }: any',
    imports: `import { Box, Container, Grid, Typography } from "@mui/material";\nimport { COLORS } from "@/utils/enum";\nimport { kessel_bold } from "@/utils/fonts";`,
    content: `
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
              <Grid container spacing={4} className="stagger-list">
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
    `
  },
  {
    name: 'CreativeVideo',
    props: '{ creativeData }: any',
    imports: `import { Box, Container, Grid } from "@mui/material";\n
const getYoutubeEmbedUrl = (url: string) => {
  const match = url.match(/youtu\\.be\\/([^?]+)/);
  if (match && match[1]) return \`https://www.youtube.com/embed/\${match[1]}\`;
  const watchMatch = url.match(/youtube\\.com\\/watch\\?v=([^&]+)/);
  if (watchMatch && watchMatch[1])
    return \`https://www.youtube.com/embed/\${watchMatch[1]}\`;
  return url;
};`,
    content: `
      <>
        {creativeData?.videoUrls && creativeData.videoUrls.length > 0 && (
          <Box
            className="reveal-up"
            sx={{ width: "100%", py: { xs: 5, md: 10 } }}
          >
            {creativeData.videoUrls.length === 1 ? (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "42.85%", // 21:9 cinematic ratio approx
                  bgcolor: "#000",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={getYoutubeEmbedUrl(creativeData.videoUrls[0])}
                  title="Cinematic Visual Moment"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            ) : (
              <Container maxWidth="xl">
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  {creativeData.videoUrls.map((url: string, index: number) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          paddingTop: "56.25%", // 16:9 standard ratio for grid items
                          bgcolor: "#000",
                          overflow: "hidden",
                          borderRadius: 2,
                        }}
                      >
                        <iframe
                          src={getYoutubeEmbedUrl(url)}
                          title={\`Cinematic Visual Moment \${index + 1}\`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            )}
          </Box>
        )}
      </>
    `
  },
  {
    name: 'CreativeFeaturedWorks',
    props: '{ creativeData, projectInfo, setSelectedImage }: any',
    imports: `import { Box, Container, Grid, Typography } from "@mui/material";\nimport { kessel_bold } from "@/utils/fonts";`,
    content: `
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
                            alt={\`Work \${idx + 1}\`}
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
    `
  },
  {
    name: 'CreativeImpact',
    props: '{ projectInfo }: any',
    imports: `import { Box, Container, Grid, Typography } from "@mui/material";\nimport { COLORS } from "@/utils/enum";\nimport { kessel_bold } from "@/utils/fonts";`,
    content: `
      <>
        {projectInfo?.result && (
          <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#111", color: "#fff" }}>
            <Container maxWidth="xl">
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
                    {projectInfo.result.description.map((desc: string, i: number) => (
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
                    ))}
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} offset={{ md: 1 }}>
                  {projectInfo.result.details?.data && (
                    <Grid container spacing={4} className="stagger-list">
                      {projectInfo.result.details.data.map((stat: any, idx: number) => (
                        <Grid size={{ xs: 6 }} key={idx} className="stagger-item">
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
                      ))}
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
      </>
    `
  },
  {
    name: 'CreativeCTA',
    props: '',
    imports: `import { Box, Container, Typography, Button } from "@mui/material";\nimport { COLORS } from "@/utils/enum";\nimport { kessel_bold } from "@/utils/fonts";\nimport ArrowForwardIcon from "@mui/icons-material/ArrowForward";`,
    content: `
      <Box
        sx={{ py: { xs: 15, md: 25 }, textAlign: "center", bgcolor: "#FAFAFA" }}
      >
        <Container maxWidth="md">
          <Typography
            className="reveal-up"
            sx={{
              fontFamily: kessel_bold.style.fontFamily,
              fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#111",
              mb: 4,
              letterSpacing: "-2px",
            }}
          >
            Let's create something remarkable.
          </Typography>
          <Typography
            className="reveal-up"
            sx={{ fontSize: "1.2rem", color: "#666", mb: 8 }}
          >
            Have a project in mind? We'd love to hear about it.
          </Typography>
          <Box className="reveal-up">
            <Button
              href="/contact-us"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#111",
                color: "#fff",
                px: 6,
                py: 2.5,
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontFamily: kessel_bold.style.fontFamily,
                textTransform: "uppercase",
                "&:hover": {
                  bgcolor: COLORS.PRIMARY,
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Start a Project
            </Button>
          </Box>
        </Container>
      </Box>
    `
  },
  {
    name: 'CreativeLightbox',
    props: '{ selectedImage, setSelectedImage }: any',
    imports: `import { Box, Modal, Fade, Backdrop, IconButton } from "@mui/material";\nimport CloseIcon from "@mui/icons-material/Close";`,
    content: `
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 700, sx: { backgroundColor: "#000" } },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <Fade in={!!selectedImage}>
          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              outline: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, md: 8 },
            }}
            onClick={() => setSelectedImage(null)}
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              sx={{
                position: "absolute",
                top: { xs: 20, md: 40 },
                right: { xs: 20, md: 40 },
                color: "#fff",
                "&:hover": { transform: "rotate(90deg)" },
                transition: "all 0.5s",
                zIndex: 2,
              }}
            >
              <CloseIcon
                sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 100 }}
              />
            </IconButton>
            {selectedImage && (
              <Box
                component="img"
                src={selectedImage}
                alt="Fullscreen"
                onClick={(e: any) => e.stopPropagation()}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  boxShadow: "0 40px 100px rgba(0,0,0,1)",
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    `
  }
];

const subDir = path.join(dir, 'creative-overview');
if (!fs.existsSync(subDir)) {
  fs.mkdirSync(subDir);
}

// Generate the sub-components
components.forEach(c => {
  const fileContent = \`"use client";
import React from "react";
\${c.imports}

export const \${c.name} = (\${c.props}) => {
  return (
    \${c.content}
  );
};
\`;
  fs.writeFileSync(path.join(subDir, \`\${c.name}.tsx\`), fileContent);
});

// Generate new main file
const newMainContent = \`"use client";
import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import { archivo } from "@/utils/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { CreativeOverviewInfo } from "./creative-overview/CreativeOverviewInfo";
import { CreativeChallengeSolution } from "./creative-overview/CreativeChallengeSolution";
import { CreativeProcess } from "./creative-overview/CreativeProcess";
import { CreativeVideo } from "./creative-overview/CreativeVideo";
import { CreativeFeaturedWorks } from "./creative-overview/CreativeFeaturedWorks";
import { CreativeImpact } from "./creative-overview/CreativeImpact";
import { CreativeCTA } from "./creative-overview/CreativeCTA";
import { CreativeLightbox } from "./creative-overview/CreativeLightbox";

gsap.registerPlugin(ScrollTrigger);

const CreativeProjectOverview = () => {
  const { projectDetails } = useProjectDetailsStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const creativeData = projectDetails?.creative;
  const projectInfo = projectDetails?.details;

  useGSAP(
    () => {
      // Reveal animations for text
      const revealElements = gsap.utils.toArray(".reveal-up");
      revealElements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Parallax for images
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Staggered lists
      const listContainers = gsap.utils.toArray(".stagger-list");
      listContainers.forEach((container: any) => {
        const items = container.querySelectorAll(".stagger-item");
        gsap.fromTo(
          items,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  if (!creativeData && !projectInfo) return null;

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: "#FAFAFA",
        color: "#111",
        position: "relative",
        overflow: "hidden",
        fontFamily: archivo.style.fontFamily,
      }}
    >
      <CreativeOverviewInfo creativeData={creativeData} projectInfo={projectInfo} />
      <CreativeChallengeSolution projectDetails={projectDetails} projectInfo={projectInfo} />
      <CreativeProcess projectInfo={projectInfo} />
      <CreativeVideo creativeData={creativeData} />
      <CreativeFeaturedWorks creativeData={creativeData} projectInfo={projectInfo} setSelectedImage={setSelectedImage} />
      <CreativeImpact projectInfo={projectInfo} />
      <CreativeCTA />
      <CreativeLightbox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </Box>
  );
};

export default CreativeProjectOverview;
\`;

fs.writeFileSync(sourcePath, newMainContent);

