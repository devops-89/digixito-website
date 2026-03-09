import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
import headingBanner from "@/homepage/heading-banner.png";
import { monument } from "@/utils/fonts";
const ImageHeading = ({ title, sx }: { title: string; sx?: SxProps }) => {
  return (
    <Box sx={{ display: "inline-block" }}>
      <Box
        sx={{
          backgroundImage: `url(${headingBanner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          px: { xs: 2.5, md: 4 },
          py: { xs: 0.5, md: 1 },
          ...sx,
          transform: "skew(-10deg)",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "fit-content",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: 32, md: 28, xs: 18 },
            fontFamily: monument.style.fontFamily,
            fontWeight: 400,
            textAlign: "center",
            whiteSpace: "nowrap",
            transform: "skew(10deg)",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageHeading;
