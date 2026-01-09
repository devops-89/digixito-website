import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
import headingBanner from "@/homepage/heading-banner.png";
import { monument } from "@/utils/fonts";
const ImageHeading = ({ title, sx }: { title: string; sx?: SxProps }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${headingBanner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          px: 2,
          ...sx,
          transform: "skew(-10deg)",
          borderRadius: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: 40, xs: 16, sm: 20 },
            fontFamily: monument.style.fontFamily,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageHeading;
