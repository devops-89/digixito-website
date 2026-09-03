"use client";
import BlurText from "@/components/BlurText";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import CallToAction from "@/components/layouts/case-study-details-layout/components/call-to-action";
import { BEST_WORK_CARD_PROPS } from "@/utils/types";
import MoreProjects from "./components/MoreProjects";
import ProjectOverview from "./components/ProjectOverview";

const MotionBox = motion(Box);

interface Props {
  project: BEST_WORK_CARD_PROPS;
}

const ProjectDetailsLayout = ({ project }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sentences = project.description?.split(". ").filter(Boolean) || [];
  const mid = Math.ceil(sentences.length / 2) || 1;
  const overviewText =
    sentences.slice(0, mid).join(". ") + (sentences.length ? "." : "");
  const approachText =
    sentences.slice(mid).join(". ") + (sentences.length > 1 ? "." : "");

  return (
    <Box
      sx={{ backgroundColor: COLORS.WHITE, minHeight: "100vh", pb: 10, pt: 0 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ pt: { xs: 8, md: 16 } }}>
          {/* Left Column: Sticky Title */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: "sticky" }, top: "160px" }}>
              <BlurText
                text={project.title}
                delay={150}
                animateBy="words"
                direction="top"
                className="blur-text-hero"
              />

              <style jsx global>{`
                .blur-text-hero {
                  font-family: "Inter", "Roboto", "Helvetica Neue", sans-serif;
                  font-weight: 800;
                  color: #1f2326;
                  font-size: clamp(2.5rem, 4vw, 4.5rem);
                  text-transform: capitalize;
                  letter-spacing: -0.02em;
                  line-height: 1.1;
                  margin: 0;
                  margin-bottom: 8px;
                }
              `}</style>
            </Box>
          </Grid>

          {/* Right Column: Scrolling Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 6, md: 10 },
              }}
            >
              <ProjectOverview
                projectTitle={project.title}
                overviewText={overviewText}
                approachText={approachText}
                challenges={project.challenges}
                strategy={project.strategy}
                results={project.results}
                img={project.img}
                industry={project.industry}
                service={project.service}
              />
              {/* <ProjectServices skills={project.skills} /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Full Width Dark Section for More Projects */}
      <MoreProjects currentSlug={project.slug} />

      <Container maxWidth="xl">
        <Box mt={{ xs: 10, md: 15 }}>
          <CallToAction
            onAction={() => (window.location.href = "/contact-us")}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetailsLayout;
