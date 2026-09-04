import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { roboto, kessel_bold, kessel } from "@/utils/fonts";
import VerifiedIcon from "@mui/icons-material/Verified";
import StyleIcon from "@mui/icons-material/Style";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/utils/enum";

const ProjectCard2 = ({
  slug,
  projectName,
  department,
  img,
  logo,
  description,
}: PROJECT_CARD_DATA_PROPS) => {
  return (
    <Box sx={{ position: "relative", width: "100%", pt: 2, height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #222222 0%, #161616 100%)",
          borderRadius: "36px",
          borderTopRightRadius: 0,
          overflow: "hidden",
          color: "#fff",
          position: "relative",
          zIndex: 1,
          height: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          transition: "all 0.4s ease",
          "&:hover": {
            // boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 0,
            pt: 2.5,
            pr: 3,
            pb: 2.5,
            pl: 4,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "#ffffff",
              borderBottomLeftRadius: 40,
              zIndex: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: -40,
                width: 40,
                height: 40,
                background:
                  "radial-gradient(circle at bottom left, transparent 40px, #ffffff 40.5px)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -40,
                right: 0,
                width: 40,
                height: 40,
                background:
                  "radial-gradient(circle at bottom left, transparent 40px, #ffffff 40.5px)",
              },
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              backgroundColor: "#222222",
              color: "#fff",
              borderRadius: "30px",
              px: 3,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            <StyleIcon sx={{ color: "#F6C344", fontSize: 20 }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 1,
                fontFamily: kessel.style.fontFamily,
              }}
            >
              {department.toUpperCase()}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ p: 4, pb: 3, pt: 5, position: "relative", zIndex: 1, mt: 5, display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Box
              sx={{
                width: 52,
                height: 52,
                backgroundColor: COLORS.BLACK,
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                p: 0.5,
              }}
            >
              <Image
                src={logo || img}
                alt={projectName}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography
                sx={{ fontSize: 20, fontFamily: kessel.style.fontFamily }}
              >
                {projectName}
              </Typography>
            </Stack>
          </Stack>

          <Typography
            sx={{
              color: "#999",
              fontSize: 14,
              lineHeight: 1.6,
              fontFamily: roboto.style.fontFamily,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>

          <Box sx={{ mt: "auto", pt: 3 }}>
            {slug ? (
              <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
                <Box
                  className="read-more-btn"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#F6C344",
                    cursor: "pointer",
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 16,
                    "&:hover": {
                      "& svg": {
                        transform: "translateX(5px)",
                      },
                    },
                    "& svg": {
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  Read More <ArrowRightAltIcon />
                </Box>
              </Link>
            ) : (
              <Box
                className="read-more-btn"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#F6C344",
                  cursor: "pointer",
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 16,
                  "&:hover": {
                    "& svg": {
                      transform: "translateX(5px)",
                    },
                  },
                  "& svg": {
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                Read More <ArrowRightAltIcon />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard2;
