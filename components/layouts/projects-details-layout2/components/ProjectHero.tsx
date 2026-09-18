"use client";
import { Box, Typography, Container } from "@mui/material";
import { useRef } from "react";
import Image from "next/image";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { monument } from "@/utils/fonts";

gsap.registerPlugin(ScrollTrigger);

const ProjectHero = () => {
  const { projectDetails } = useProjectDetailsStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Text Smooth Wipe Up
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          {
            y: "110%", // Pushed down inside overflow hidden
            rotate: 2,
          },
          {
            y: "0%",
            rotate: 0,
            stagger: 0.05,
            duration: 1.2,
            ease: "expo.out",
          }
        );
      }

      // 2. Circular Image Reveal
      if (imageRef.current?.parentElement) {
        tl.fromTo(
          imageRef.current.parentElement,
          {
            clipPath: "circle(0% at 50% 50%)",
          },
          {
            clipPath: "circle(150% at 50% 50%)",
            duration: 1.5,
            ease: "power3.inOut",
          },
          "-=0.8"
        );
      }

      tl.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 2, ease: "power2.out" },
        "-=1.5"
      );

      // ScrollTrigger Parallax
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  const renderTitleWithWords = (title?: string) => {
    if (!title) return null;
    return title.split(" ").map((word, i) => (
      <span
        key={i}
        style={{
          display: "inline-block",
          overflow: "hidden",
          marginRight: "0.2em",
          verticalAlign: "bottom",
        }}
      >
        <span
          className="word"
          style={{
            display: "inline-block",
            transformOrigin: "bottom left",
            willChange: "transform",
            lineHeight: 1.1,
          }}
        >
          {word}
        </span>
      </span>
    ));
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 4, md: 8 },
        pb: { xs: 2, md: 4 },
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            pb: 2,
            mb: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Typography
            ref={titleRef}
            variant="h1"
            sx={{
              color: "#1F2326",
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "4.5rem", lg: "5.5rem" },
              fontFamily: monument.style.fontFamily,
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {renderTitleWithWords(projectDetails?.projectName)}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: { xs: "24px", md: "48px" },
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            aspectRatio: "16/9", // Cinematic aspect ratio
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              borderRadius: { xs: "24px", md: "48px" },
              clipPath: "circle(0% at 50% 50%)", // Fallback initial state
            }}
          >
            <Image
              ref={imageRef}
              src={
                projectDetails?.details?.heroImage ||
                "/images/projects/heroimg.jpg"
              }
              alt={`${projectDetails?.projectName} Hero Background`}
              fill
              style={{
                objectFit: "cover",
                display: "block",
                transformOrigin: "center center",
              }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectHero;
