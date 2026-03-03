import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";
import { CheckCircleOutline } from "@mui/icons-material";
import { CaseStudyProps } from "@/public/locale/case-studies-data";

interface KeyResultsSidebarProps {
  results: CaseStudyProps["results"];
}

const KeyResultsSidebar = ({ results }: KeyResultsSidebarProps) => (
  <Box
    sx={{
      position: { md: "sticky" },
      top: { md: "120px" },
      backgroundColor: "#F9FAFB",
      p: { xs: 3, md: 5 },
      borderRadius: "24px",
      border: "1px solid #E5E7EB",
    }}
    data-aos="fade-left"
  >
    <Typography
      sx={{
        fontFamily: monument.style.fontFamily,
        fontWeight: 800,
        fontSize: 22,
        mb: 4,
        color: COLORS.BLACK,
        borderBottom: "2px solid",
        borderColor: COLORS.PRIMARY,
        pb: 2,
        display: "inline-block",
      }}
    >
      Key Results
    </Typography>

    <Stack spacing={4}>
      {results.map((result, i) => (
        <Box key={i}>
          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <CheckCircleOutline
              sx={{ color: COLORS.PRIMARY, fontSize: 28, mt: 0.5 }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 800,
                  fontSize: 32,
                  color: COLORS.BLACK,
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {result.metric}
              </Typography>
              <Typography
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  color: "#4B5563",
                  fontSize: 16,
                  lineHeight: 1.4,
                }}
              >
                {result.description}
              </Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default KeyResultsSidebar;
