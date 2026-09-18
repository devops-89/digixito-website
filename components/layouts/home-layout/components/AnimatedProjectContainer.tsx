"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";
import { OLD_PROJECTS_DATA } from "@/utils/constant";
import AnimatedProjectCard from "./AnimatedProjectCard";
import { monument } from "@/utils/fonts";

const AnimatedProjectContainer = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const projects = OLD_PROJECTS_DATA; // Take first 5 projects for demo

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}vw`],
  );

  return (
    <Box
      ref={targetRef}
      sx={{
        position: "relative",
        height: `${projects.length * 100}vh`, // Height determines scroll duration
        backgroundColor: "#EFEFEF", // Light gray background
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden", // Hide cards that slide out
        }}
      >
        <motion.div
          style={{
            x,
            display: "flex",
          }}
        >
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={index}
              {...project}
              index={index}
              total={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default AnimatedProjectContainer;
