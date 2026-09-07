import { archivo } from "@/utils/fonts";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MotionBox = motion(Box);

interface ProjectOverviewProps {
  projectTitle: string;
  overviewText: string | string[];
  approachText: string;
  challenges?: string;
  strategy?: string;
  results?: string;
  img?: string | StaticImageData;
  industry?: string;
  service?: string;
  videoUrls?: (string | undefined)[];
  images?: string[];
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
  images = [],
}: ProjectOverviewProps) => {
  // Process Video URLs
  const validVideoUrls = videoUrls.filter((url): url is string => !!url).map(url => {
    let embedUrl = url;
    try {
      if (url.includes("vimeo.com")) {
        const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
        if (videoId) embedUrl = `https://player.vimeo.com/video/${videoId}`;
      }
      if (url.includes("youtube.com/watch")) {
        const videoId = new URL(url).searchParams.get("v");
        if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0];
        if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {
      // Ignore url parse errors
    }
    return embedUrl;
  });

  const mediaItems = [
    ...images.map(url => ({ type: "image", url })),
    ...validVideoUrls.map(url => ({ type: "video", url }))
  ];

  return (
    <Box sx={{ width: "100%", pb: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      {/* Wrapper to guarantee perfect left alignment for all sections */}
      <Box sx={{ width: "100%" }}>

        {/* Left-Aligned Introduction */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          sx={{ mb: { xs: 10, md: 15 }, textAlign: "left", width: "100%" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: `"Inter", sans-serif`,
              color: "#1F2326",
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 600,
              mb: 4,
            }}
          >
            Project Overview
          </Typography>

          {Array.isArray(overviewText) ? (
            overviewText.map((text, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  color: "#4A5568",
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.8,
                  fontWeight: 400,
                  mb: idx !== overviewText.length - 1 ? 2 : 0, // Add line gap except for the last paragraph
                }}
              >
                {text}
              </Typography>
            ))
          ) : (
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                color: "#4A5568",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {overviewText}
            </Typography>
          )}
        </MotionBox>

        {/* 2-Column Visual & Media Gallery */}
        {mediaItems.length > 0 && (
          <Grid container spacing={4} sx={{ mb: { xs: 10, md: 15 }, width: "100%" }}>
            {mediaItems.slice(0, 2).map((item, idx) => (
              <Grid size={{ xs: 12, sm: Math.min(mediaItems.length, 2) > 1 ? 6 : 12 }} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.16, 1, 0.3, 1], // Very smooth, premium ease-out curve
                    delay: idx * 0.15 
                  }}
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    pt: Math.min(mediaItems.length, 2) > 1 ? "75%" : "56.25%", // 4:3 if multiple, 16:9 if single
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  {item.type === "image" ? (
                    <Image src={item.url} alt={`${projectTitle} showcase ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                  ) : (
                    <iframe
                      src={item.url}
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
                  )}
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Content Sections (Left-Aligned Stack) */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 4 }, width: "100%", textAlign: "left" }}>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: `"Inter", sans-serif`,
                      color: "#1F2326",
                      fontSize: { xs: "28px", md: "36px" },
                      fontWeight: 600,
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

      </Box>
    </Box>
  );
};

export default ProjectOverview;
