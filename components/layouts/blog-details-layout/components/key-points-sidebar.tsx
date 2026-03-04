import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import { CheckCircleOutline } from "@mui/icons-material";

const KeyPointsSidebar = ({
  points,
}: {
  points: { point: string; description: string }[];
}) => (
  <Box
    data-aos="fade-left"
    sx={{
      backgroundColor: "#f5f5f5",
      p: 4,
      borderRadius: "24px",
      position: "sticky",
      top: "120px",
    }}
  >
    <Typography
      sx={{
        fontFamily: kessel.style.fontFamily,
        fontWeight: 400,
        fontSize: 24,
        mb: 3,
        color: COLORS.BLACK,
      }}
    >
      Key Takeaways
    </Typography>

    <Stack spacing={3} divider={<Divider />}>
      {points.map((point, idx) => (
        <Box key={idx}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <CheckCircleOutline
              sx={{ color: "rgba(0,0,0,0.6)", fontSize: 20 }}
            />
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                fontWeight: 600,
                fontSize: 16,
                color: COLORS.BLACK,
              }}
            >
              {point.point}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "rgba(0,0,0,0.6)",
              fontSize: 15,
              pl: 4.5,
              lineHeight: 1.6,
            }}
          >
            {point.description}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default KeyPointsSidebar;
