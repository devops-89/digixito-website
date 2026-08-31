import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { kessel, roboto } from "@/utils/fonts";
import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { ArrowForward } from "@mui/icons-material";

const ProjectCard3 = ({
  projectName,
  department,
  img,
  description,
}: PROJECT_CARD_DATA_PROPS) => {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "4 / 4.5",
        borderRadius: "48px",
        border: "8px solid #000",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover .content-part": {
          filter: `drop-shadow(0 -5px 20px ${COLORS.PRIMARY}80)`,
        },
        "&:hover .read-more-btn": {
          opacity: 1,
          transform: "translateX(0)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "55%",
          zIndex: 1,
        }}
      >
        <Image
          src={img}
          alt={projectName}
          fill
          style={{
            objectFit: "contain",
            padding: "24px",
          }}
        />
      </Box>

      <Box
        className="content-part"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "45%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          transition: "filter 0.3s ease",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "64px",
            mb: "-1px",
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              borderTopLeftRadius: "24px",
            }}
          >
            <path
              d="M 0,100 L 0,0 L 45,0 C 55,0 55,100 65,100 L 100,100 Z"
              fill="#1c1c1e"
            />
          </svg>

          <Box
            sx={{ position: "absolute", top: 14, left: 24, maxWidth: "55%" }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 20,
                fontWeight: 700,
                fontFamily: roboto.style.fontFamily,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {projectName}
            </Typography>
            <Typography
              sx={{
                color: "#999",
                fontSize: 14,
                fontFamily: roboto.style.fontFamily,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {department}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            backgroundColor: "#1c1c1e",
            px: 3,
            pb: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              fontFamily: kessel.style.fontFamily,
              color: COLORS.WHITE,
              fontSize: 16,
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mt: 2,
            }}
          >
            {description}
          </Typography>

          <Box
            className="read-more-btn"
            sx={{
              mt: 1,
              opacity: 0,
              transform: "translateX(-20px)",
              transition: "all 0.3s ease",
            }}
          >
            <Button
              sx={{
                color: COLORS.PRIMARY,
                fontFamily: roboto.style.fontFamily,
                fontWeight: 700,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 1,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                p: 0,
                "&:hover": {
                  background: "transparent",
                },
              }}
              disableRipple
              endIcon={<ArrowForward />}
            >
              Read more{" "}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard3;
