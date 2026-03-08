import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";

interface CallToActionProps {
  onAction: () => void;
}

const CallToAction = ({ onAction }: CallToActionProps) => (
  <Box
    sx={{
      mt: 15,
      py: 10,
      px: { xs: 4, md: 8 },
      backgroundColor: "#F9FAFB",
      border: "1px solid #E5E7EB",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      borderRadius: "30px",
      textAlign: "center",
    }}
    data-aos="fade-up"
  >
    <Typography
      sx={{
        fontFamily: monument.style.fontFamily,
        fontWeight: 800,
        fontSize: { xs: 24, md: 40 },
        color: COLORS.BLACK,
        mb: 3,
      }}
    >
      Ready for your own success story?
    </Typography>
    <Button
      onClick={onAction}
      sx={{
        fontFamily: monument.style.fontFamily,
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.BLACK,
        padding: "16px 32px",
        fontSize: 16,
        borderRadius: "50px",
        boxShadow: "0 4px 14px 0 rgba(253, 235, 57, 0.39)",
        "&:hover": {
          backgroundColor: COLORS.PRIMARY,
          transform: "translateY(-2px)",
          boxShadow: "0 6px 20px 0 rgba(253, 235, 57, 0.39)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      Start a Project
    </Button>
  </Box>
);

export default CallToAction;
