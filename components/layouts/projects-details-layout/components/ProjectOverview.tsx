import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo } from "@/utils/fonts";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

const MotionBox = motion(Box);

interface ProjectOverviewProps {
  projectTitle: string;
  overviewText: string;
  approachText: string;
  challenges?: string;
  strategy?: string;
  results?: string;
  img?: string | StaticImageData;
  industry?: string;
  service?: string;
  videoUrls?: (string | undefined)[];
}

const ProjectOverview = ({
  projectTitle,
  overviewText,
  approachText,
  challenges,
  strategy,
  results,
  img,
  industry,
  service,
  videoUrls = [],
}: ProjectOverviewProps) => {
  return (
    <Box sx={{ width: "100%", pb: { xs: 6, md: 10 } }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        sx={{ mb: 8 }}
      >
        <Typography
          sx={{
            fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
            color: "#666",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Introduction
        </Typography>

        <Typography
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: "#1F2326",
            fontSize: { xs: 20, md: 24 },
            lineHeight: 1.6,
            fontWeight: 400,
            maxWidth: "800px",
          }}
        >
          {overviewText}
        </Typography>
      </MotionBox>

      {/* Metadata */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        sx={{ display: "flex", gap: 8, mb: 10 }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
              color: "#666",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Service
          </Typography>
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "#1F2326",
              fontSize: "16px",
            }}
          >
            {service || "Consulting"}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
              color: "#666",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Industry
          </Typography>
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "#1F2326",
              fontSize: "16px",
            }}
          >
            {industry || "Technology"}
          </Typography>
        </Box>
      </MotionBox>

      {/* Hero Image */}
      {img && (
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            mb: 10,
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            pt: "56.25%" /* 16:9 Aspect Ratio */,
          }}
        >
          <Image
            src={img}
            alt={projectTitle}
            fill
            style={{ objectFit: "cover" }}
          />
        </MotionBox>
      )}

      {/* Content Sections */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: "800px",
        }}
      >
        {[
          { title: "The Challenge", text: challenges },
          { title: "Our Approach", text: approachText },
          { title: "The Strategy", text: strategy },
          { title: "Result Achieved", text: results },
        ].map(
          (section, idx) =>
            section.text &&
            section.text.length > 3 && (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
                    color: "#1F2326",
                    fontSize: { xs: 24, md: 28 },
                    fontWeight: 500,
                    mb: 3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: archivo.style.fontFamily,
                    color: "#4A5568",
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  {section.text}
                </Typography>
              </MotionBox>
            ),
        )}
      </Box>
      {/* Video Content */}
      {videoUrls && videoUrls.some(url => url) && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mt: 8 }}>
          <Typography
            sx={{
              fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
              color: "#1F2326",
              fontSize: { xs: 24, md: 28 },
              fontWeight: 500,
              mb: 1,
              letterSpacing: "-0.01em",
            }}
          >
            Project Videos
          </Typography>
          {videoUrls.map(
            (url, idx) =>
              url && (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    pt: "56.25%" /* 16:9 Aspect Ratio */,
                  }}
                >
                  <iframe
                    src={url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </MotionBox>
              )
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProjectOverview;
