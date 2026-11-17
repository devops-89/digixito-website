"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";
import Image from "next/image";
import starIcon from "@/icons/gold-star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: string;
  brandName: string;
  brandColor: string;
  brandType: "treks" | "hscore" | "hautebaby";
  logoUrl: string;
  logoHeight: number;
  industry: string;
  quote: string;
  specialNote: string;
  author: string;
  role: string;
  company: string;
  deliverables: string[];
}

const testimonialsData: Testimonial[] = [
  {
    id: "mytreks",
    brandName: "MyTreks",
    brandColor: "#FF6B35",
    brandType: "treks",
    logoUrl: "/testimonials/mytreks.png",
    logoHeight: 34,
    industry: "Travel Tech & Mobile App",
    quote:
      "We partnered with the Digixito team to build the MyTreks app, website, admin portal, and they delivered outstanding results within a tight timeline - without compromising on quality. What truly sets them apart is their flexibility and commitment to going the extra mile, even as our requirements continued to evolve. Every interaction was met with a positive, can-do attitude that made the entire process seamless.",
    specialNote:
      "Special thanks to Team Digixito for their dedication and exceptional support. Grateful to have had them as our tech partners.",
    author: "Abhishek Mallik",
    role: "CTO",
    company: "MyTreks",
    deliverables: [
      "MyTreks App",
      "Web Platform",
      "Admin Portal",
      "Agile Evolution",
    ],
  },
  {
    id: "hautebaby",
    brandName: "Haute Baby",
    brandColor: "#C084FC",
    brandType: "hautebaby",
    logoUrl: "/testimonials/haute-baby-logo.png",
    logoHeight: 28,
    industry: "Luxury Children's Apparel & Shopify",
    quote:
      "Working with Digixito has been a positive experience for Haute Baby. Their team has supported our digital marketing efforts and helped us strengthen our online presence. They also built our Shopify website and continue to manage it, helping keep the site updated and running smoothly as our business grows.",
    specialNote:
      "Having a team we can rely on for both digital marketing and website support has made Digixito a valuable partner in Haute Baby's growth.",
    author: "Haute Baby Team",
    role: "Brand Leadership",
    company: "Haute Baby",
    deliverables: [
      "Shopify Website Build",
      "Store Management",
      "Digital Marketing",
      "Sales Optimization",
    ],
  },
  {
    id: "hscore",
    brandName: "hScore",
    brandColor: "#38BDF8",
    brandType: "hscore",
    logoUrl: "/testimonials/hscore.svg",
    logoHeight: 26,
    industry: "FinTech & Wealth Management",
    quote:
      "Over the past six months, the Digixito team has been instrumental in helping us develop a stock portfolio management app for the U.S. market. They've supported us across key areas including design, front-end development, branding, and marketing. We've been very pleased with their responsiveness, quality of work, and overall support.",
    specialNote:
      "We look forward to building a long-term partnership with Digixito on the strong foundation we've established together.",
    author: "Hari Kusumakar",
    role: "Co-Founder",
    company: "hScore",
    deliverables: [
      "Design (UI/UX)",
      "Front-End Development",
      "Branding",
      "U.S. Market Launch",
    ],
  },
];

const WebsiteDevelopmentTestimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      id="proof"
      sx={{
        backgroundColor: "#FAF7F2",
        py: { xs: 8, md: 12 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Eyebrow Pill */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#111111",
            color: "#FFFFFF",
            borderRadius: "30px",
            px: 2,
            py: 0.6,
            mb: 2.5,
          }}
        >
          <Image src={starIcon} alt="Star" width={14} height={14} />
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: kessel_bold.style.fontFamily,
              color: "#FFFFFF",
            }}
          >
            {renderKesselText("OUR WORK")}
          </Typography>
        </Box>

        {/* Section Header Grid */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="stretch"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {/* Left Title & Subtitle */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 30, sm: 38, md: 46 },
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                color: "#0F0F0F",
                fontFamily: kessel_bold.style.fontFamily,
                mb: 2,
              }}
            >
              {renderKesselText("Digital Products Designed to")}
              <br />
              {renderKesselText("Solve Real Business Needs.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.65,
                color: "#5A5A5A",
                fontFamily: kessel.style.fontFamily,
                maxWidth: 540,
              }}
            >
              Feature relevant website, e-commerce, application and digital product
              experience from the existing Digixito portfolio.
            </Typography>
          </Grid>

          {/* Right CTA White Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECEAE4",
                borderRadius: "20px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                maxWidth: 440,
                ml: { md: "auto" },
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: 15, md: 17 },
                    fontWeight: 800,
                    color: "#0F0F0F",
                    fontFamily: kessel_bold.style.fontFamily,
                    letterSpacing: "-0.02em",
                    mb: 1,
                    lineHeight: 1.35,
                  }}
                >
                  {renderKesselText(
                    "Prioritise relevant projects from the existing portfolio:"
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#666666",
                    lineHeight: 1.55,
                    fontFamily: kessel.style.fontFamily,
                  }}
                >
                  MyTreks (travel tech &amp; digital product), Haute Baby (e-commerce &amp; Shopify), and hScore (fintech web platform) with verified deliverables.
                </Typography>
              </Box>

              <Button
                onClick={scrollToContact}
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: "16px !important" }} />}
                sx={{
                  py: 1.2,
                  px: 3,
                  fontSize: 12.5,
                  fontWeight: 800,
                  fontFamily: kessel_bold.style.fontFamily,
                  alignSelf: "flex-start",
                  backgroundColor: "#FFEF46",
                  color: "#0F0F0F",
                  borderRadius: "30px",
                  textTransform: "none",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 14px rgba(255, 239, 70, 0.4)",
                  "&:hover": {
                    backgroundColor: "#F5E535",
                  },
                }}
              >
                {renderKesselText("Talk with our team")}
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Slider Controls Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 3.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                backgroundColor: "#15161A",
                color: "#FFEF46",
                fontFamily: kessel_bold.style.fontFamily,
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                py: 0.6,
                px: 1.8,
                borderRadius: "30px",
                textTransform: "uppercase",
              }}
            >
              VERIFIED TESTIMONIALS
            </Box>
            <Typography
              sx={{
                fontSize: { xs: 12.5, sm: 13.5 },
                color: "#5A5A5A",
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                display: { xs: "none", sm: "block" },
              }}
            >
              Swipe through verified feedback from leadership
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.25}>
            <IconButton
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              aria-label="Previous testimonial"
              sx={{
                width: 44,
                height: 44,
                border: "1.5px solid #111111",
                backgroundColor: "#FAF7F2",
                color: "#111111",
                transition: "all 0.2s ease",
                "&:hover:not(:disabled)": {
                  backgroundColor: "#FFEF46",
                  borderColor: "#111111",
                  transform: "translateY(-2px)",
                },
                "&.Mui-disabled": {
                  opacity: 0.35,
                  borderColor: "#DEDAD0",
                },
              }}
            >
              <ArrowBack sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              aria-label="Next testimonial"
              sx={{
                width: 44,
                height: 44,
                border: "1.5px solid #111111",
                backgroundColor: "#FAF7F2",
                color: "#111111",
                transition: "all 0.2s ease",
                "&:hover:not(:disabled)": {
                  backgroundColor: "#FFEF46",
                  borderColor: "#111111",
                  transform: "translateY(-2px)",
                },
                "&.Mui-disabled": {
                  opacity: 0.35,
                  borderColor: "#DEDAD0",
                },
              }}
            >
              <ArrowForward sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Swiper Carousel */}
        <Box
          sx={{
            position: "relative",
            "& .swiper": {
              overflow: "hidden",
              width: "100%",
            },
            "& .swiper-wrapper": {
              display: "flex",
              alignItems: "stretch",
            },
            "& .swiper-slide": {
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch",
            },
            "& .proof-swiper-pagination": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            },
            "& .proof-swiper-pagination .swiper-pagination-bullet": {
              width: "8px",
              height: "8px",
              backgroundColor: "#DEDAD0",
              borderRadius: "999px",
              opacity: 1,
              transition: "all 0.25s ease",
              cursor: "pointer",
              m: "0 !important",
            },
            "& .proof-swiper-pagination .swiper-pagination-bullet-active": {
              width: "28px",
              backgroundColor: "#FFEF46",
              border: "1.5px solid #111111",
            },
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 28,
              },
              1080: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            pagination={{
              clickable: true,
              el: ".proof-swiper-pagination",
            }}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {testimonialsData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4.5 },
                    backgroundColor: "#15161A",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "22px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                    "&:hover": {
                      borderColor: slide.brandColor,
                      transform: "translateY(-4px)",
                      boxShadow: "none",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 0,
                      "&:last-child": { pb: 0 },
                      display: "flex",
                      flexDirection: "column",
                      flex: "1 1 auto",
                    }}
                  >
                    {/* Top Row: Brand Logo & Industry */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        mb: 3.5,
                        minHeight: 52,
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            height: 38,
                          }}
                        >
                          <Box
                            component="img"
                            src={slide.logoUrl}
                            alt={slide.brandName}
                            sx={{
                              height: slide.logoHeight,
                              maxWidth: 160,
                              width: "auto",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontFamily:
                              'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            color: "#A2A6B0",
                            letterSpacing: "0.08em",
                            mt: 0.75,
                            textTransform: "uppercase",
                          }}
                        >
                          {slide.industry}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Main Testimonial Quote */}
                    <Typography
                      sx={{
                        fontSize: { xs: 14.5, md: 15.5 },
                        color: "#E2E5EC",
                        lineHeight: 1.7,
                        fontFamily: kessel.style.fontFamily,
                        letterSpacing: "-0.01em",
                        mb: 2.5,
                        flexGrow: 1,
                      }}
                    >
                      {slide.quote}
                    </Typography>

                    {/* Special Note / Closing Dedication */}
                    <Typography
                      sx={{
                        fontSize: { xs: 13, md: 14 },
                        color: "#CBD5E1",
                        lineHeight: 1.6,
                        fontStyle: "italic",
                        fontFamily: kessel.style.fontFamily,
                        mb: 3,
                        borderLeft: `2.5px solid ${slide.brandColor}`,
                        pl: 2,
                      }}
                    >
                      {slide.specialNote}
                    </Typography>

                    {/* Key Deliverable Tags with Checkmarks */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 4,
                        mt: "auto",
                      }}
                    >
                      {slide.deliverables.map((item) => (
                        <Chip
                          key={item}
                          icon={
                            <Check
                              sx={{
                                fontSize: "13px !important",
                                color: "#FFEF46 !important",
                              }}
                            />
                          }
                          label={item}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#E2E8F0",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            fontFamily:
                              'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            borderRadius: "6px",
                            py: 0.5,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  {/* Footer: Author Block & Yellow Quote Marks */}
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      mt: "auto",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.125rem",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          fontFamily: kessel_bold.style.fontFamily,
                          letterSpacing: "-0.01em",
                          lineHeight: 1.2,
                        }}
                      >
                        {slide.author}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#FFEF46",
                          fontFamily: kessel.style.fontFamily,
                          mt: 0.5,
                        }}
                      >
                        {slide.role} • {slide.company}
                      </Typography>
                    </Box>

                    {/* Quotation Mark Icon Accent */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        opacity: 0.9,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 2,
                          backgroundColor: "#FFEF46",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "2.5rem",
                          fontWeight: 900,
                          color: "#FFEF46",
                          lineHeight: 0.6,
                          fontFamily: kessel_bold.style.fontFamily,
                        }}
                      >
                        ”
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="proof-swiper-pagination" />
        </Box>
      </Container>
    </Box>
  );
};

export default WebsiteDevelopmentTestimonials;
