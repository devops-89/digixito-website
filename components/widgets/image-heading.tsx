import { Box, Typography } from "@mui/material";
import React from "react";
import headingBanner from "@/homepage/heading-banner.png";
import { monument } from "@/utils/fonts";
const ImageHeading = ({ title }: { title: string }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${headingBanner.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 40,
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
