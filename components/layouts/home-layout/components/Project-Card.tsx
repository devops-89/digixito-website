import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import max from "@/projects/old-projects/max-bupa/max-bupa-logo.png";
import Image from "next/image";
import { COLORS, PROJECTS_DEPARTMENT } from "@/utils/enum";
import { kessel, kessel_bold } from "@/utils/fonts";
import { ArrowForward, Circle } from "@mui/icons-material";
import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
const ProjectCard = ({
  img,
  projectName,
  department,
}: PROJECT_CARD_DATA_PROPS) => {
  return (
    <Box
      sx={{
        "&:hover": {
          ".view_btn": {
            transform: "translateX(0)",
          },
          ".view_btn svg": {
            transform: "translateX(0)",
          },
        },
      }}
    >
      <Card sx={{ width: "100%", borderRadius: "20px" }}>
        <Box
          sx={{
            backgroundColor: COLORS.BLACK,
            textAlign: "center",
            position: "relative",
          }}
        >
          <Image src={img} alt="" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              position: "absolute",
              top: 16,
              right: 16,
              color: COLORS.BLACK,
              backgroundColor: COLORS.PRIMARY,
              borderRadius: "20px",
              px: 2,
            }}
          >
            <Typography
              sx={{ fontFamily: kessel.style.fontFamily, fontSize: 14 }}
            >
              {department}
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card
        sx={{
          p: 2,
          boxShadow: "0px 0px 2px 2px #d7d7d7",
          borderRadius: "20px",
          mt: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography
              sx={{ fontFamily: kessel_bold.style.fontFamily, fontSize: 16 }}
            >
              {projectName}
            </Typography>
          </Stack>
          <Button
            sx={{
              color: COLORS.BLACK,
              textTransform: "none",
              borderRadius: "10px",
              transform: "translateX(1000px)",
              transition: "550ms ease all",
              backgroundColor: COLORS.PRIMARY,
            }}
            endIcon={<ArrowForward />}
            className="view_btn"
          >
            Read More
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default ProjectCard;
