"use client";

import { PROJECT_DATA } from "@/assets/data/project-data";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import PolaroidCard from "./components/polaroid-card";
const MotionTypography = motion(Typography);

const BestWorks2 = () => {
    const projects = React.useMemo(() => PROJECT_DATA.slice(0, 12), []);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const isMobile = useMediaQuery("(max-width:600px)");
    const isTablet = useMediaQuery("(max-width:960px)");
    const cardWidth = isMobile ? 240 : isTablet ? 300 : 360;
    const cardGap = isMobile ? 10 : isTablet ? 25 : 30;

    useEffect(() => {
    setIsClient(true);
    }, []);

    useEffect(() => {
    if (!swiperInstance || swiperInstance.destroyed) return;
    if (isHovered) {
        const timeout = setTimeout(() => {
        if (swiperInstance.autoplay && !swiperInstance.destroyed) {
        swiperInstance.autoplay.start();
        }
    }, 10);
    return () => clearTimeout(timeout);
    } else {
    if (swiperInstance.autoplay && !swiperInstance.destroyed) {
        swiperInstance.autoplay.stop();
    }
    }
    }, [isHovered, swiperInstance]);

    const rotations = [-5, 4, -3, 3, -2, 2];
    const xOffsets = [0, 8, 14, 20, 26, 32];
    const yOffsets = [0, 4, 8, 12, 16, 20];

    const handleContainerClick = (e: React.MouseEvent) => {
    if (!isHovered) {
    e.stopPropagation();
    setIsHovered(true);
    } else if (e.target === e.currentTarget) {
    setIsHovered(false);
    }
};

return (
    <Box
    sx={{
        backgroundColor: "#000000",
        color: COLORS.WHITE,
        py: { lg: "74px", md: "60px", xs: "40px"},
        position: "relative",
        overflow: "hidden",
        minHeight: { lg: "100vh", md: "90vh", xs: "80vh"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        userSelect: "none",
    }}
    >
    <Box
        sx={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,230,61,0.15) 0%, transparent 70%)",
        filter: "blur(100px)",
        zIndex: 0,
        pointerEvents: "none",
        }}
    />
    <MotionTypography
        animate={{ opacity: isHovered ? 0.18 : 1, scale: isHovered ? 0.96 : 1,}}
        transition={{ duration: 0.6, ease: "easeInOut", }}
        sx={{
        position: "absolute",
        top: "40%",
        left: "-14%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        fontFamily: monument.style.fontFamily,
        fontWeight: 450,
        fontSize: { lg: "450px", md: "300px", sm: "200px", xs: "110px"},
        lineHeight: { lg: "0.8", md: "0.82", sm: "0.9",xs: "1"},
        letterSpacing: "0.19px",
        textTransform: "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "#F4E63D",
        opacity: 1,
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
        }}
    >
        Work
    </MotionTypography>
    <Container
        maxWidth={false}
        disableGutters
        sx={{
        px: { lg: "200px", md: "150px", xs: "20px"},
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        }}
    >
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
        width: "100%",
        mb: { lg: "64px", md: "48px",xs: "32px"},
        }}
        >
            <Box sx={{width: "509px",maxWidth: "100%"}}>
            <Typography
            sx={{
                color: "#FFFFFF",
                fontFamily: kessel.style.fontFamily,
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "32px",
                letterSpacing: "0.19px",
                mb: "4px",
            }}
            >
            Recent Client Work
            </Typography>

            <Typography
            sx={{
                width: "509px",
                maxWidth: "100%",
                color: "#FFFFFF",
                fontFamily: kessel.style.fontFamily,
                fontSize: { md: "20px", xs: "14px",},
                fontWeight: 400,
                lineHeight: { md: "32px", xs: "22px"},
                letterSpacing: "0.19px",
            }}
            >
            We Dont Just Create Content, We Create Moments
            </Typography>
        </Box>
        <Button
            href="/projects"
            component="a"
            sx={{
            display: "flex",
            height: "48px",
            padding: "12px 21px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "999px",
            border: "1px solid #FFEF46",
            background: "transparent",
            color: "#FFEF46",
            textAlign: "center",
            fontFamily: monument.style.fontFamily,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0.46px",
            textTransform: "uppercase",
            minWidth: "188px",
            transition: "all 0.3s ease",
            "&:hover": {
                backgroundColor: "#FFEF46",
                color: "#000000",
                border: "1px solid #FFEF46",
            },
            }}
        >
            VIEW ALL WORK
        </Button>
        </Stack>
        <Box
        onMouseEnter={() => {
            setIsHovered(true);
        }}
        onMouseLeave={() => {
            setIsHovered(false);
        }}
        onClick={handleContainerClick}
        onTouchStart={() => {
            if (!isHovered) {
            setIsHovered(true);
            }
        }}
        sx={{
            position: "relative",
            width: "100%",
            height: {lg: "500px",md: "400px",xs: "340px"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
            zIndex: 3,
        }}
        >
        <IconButton
            onClick={(e) => {
            e.stopPropagation();
            if (swiperInstance && !swiperInstance.destroyed)
                swiperInstance.slidePrev();
            }}
            sx={{
            position: "absolute",
            left: { lg: "-12%", md: "-1%", xs: "0%"},
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            backgroundColor: "rgba(255,255,255,0.08)",
            color: COLORS.WHITE,
            width: { md: 56, xs: 44},
            height: { md: 56, xs: 44},
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "auto" : "none",
            transition: "all 0.3s ease",
            display: { xs: "none", md: "flex"},
            "&:hover": {
                backgroundColor: "#FFEF46",
                color: "#000",
            },
            }}
        >
            <ArrowBack />
        </IconButton>
        <IconButton
            onClick={(e) => {
            e.stopPropagation();
            if (swiperInstance && !swiperInstance.destroyed)
                swiperInstance.slideNext();
            }}
            sx={{
            position: "absolute",
            right: { lg: "-15%", md: "-1%", xs: "0%"},
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            backgroundColor: "rgba(255,255,255,0.08)",
            color: COLORS.WHITE,
            width: { md: 56, xs: 44},
            height: { md: 56, xs: 44},
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "auto" : "none",
            transition: "all 0.3s ease",
            display: {  xs: "none", md: "flex" },
            "&:hover": {
                backgroundColor: "#FFEF46",
                color: "#000",
            },
            }}
        >
            <ArrowForward />
        </IconButton>
        {isClient && (
            <Box
            sx={{
                width: "100%",
                height: "100%",
                "& .swiper": {
                overflow: "visible !important",
                },
                "& .swiper-slide": {
                width: `${cardWidth}px !important`,
                },
            }}
            >
            <Swiper
                modules={[Autoplay]}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={cardGap + 80}
                allowTouchMove={isHovered}
                speed={600}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{ width: "100%", height: "100%", overflow: "visible" }}
            >
                {projects.map((val, i) => {
                const isActive = i === activeIndex;
                const rotation = isHovered ? 0 : rotations[i] || 0;
                const yOffset = isHovered ? 0 : yOffsets[i] || 0;
                const baseSwiperXOffset = (i - activeIndex) * (cardWidth + cardGap + 80);
                const xOffset = isHovered ? 0 : -baseSwiperXOffset + (xOffsets[i] || 0);
                return (
                    <SwiperSlide key={i}>
                    <Box
                        component={motion.div}
                        animate={{
                        x: xOffset,
                        y: yOffset,
                        rotate: rotation,
                        scale: isHovered ? (isActive ? 1 : 0.92) : 1,
                        }}
                        transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                        }}
                        style={{
                        zIndex: isHovered ? projects.length - Math.abs(i - activeIndex): i,
                        width: "100%",
                        cursor: "pointer",
                        transformOrigin: "center center",
                        position: "relative",
                        }}
                    >
                        <PolaroidCard
                        img={val.img}
                        title={val.title}
                        description={val.description}
                        skills={val.skills}
                        slug={val.slug}
                        isActive={isActive}
                        />
                    </Box>
                    </SwiperSlide>
                );
                })}
            </Swiper>
            </Box>
        )}
        </Box>
    </Container>
    </Box>
);
};

export default BestWorks2;
