import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { ARROW_CARD_PROPS } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const ArrowCard = ({
  backgroundColor,
  textColor,
  iconBgColor,
  iconColor,
  title,
  secondTitle,
}: ARROW_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        height: "170px",
        borderRadius: 4,
        padding: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      data-aos="fade-up"
    >
      <Typography
        sx={{
          fontSize: 22,
          color: textColor,
          fontFamily: kessel.style.fontFamily,
        }}
      >
        {title}
      </Typography>
      {/* <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={2}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: kessel.style.fontFamily,
            fontWeight: 900,
            lineHeight: "25.2px",
            color: textColor,
            width: 100,
          }}
        >
          {secondTitle}
        </Typography>
        <IconButton
          sx={{
            backgroundColor: iconBgColor,
            width: 60,
            height: 60,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ":hover": {
              backgroundColor: iconBgColor,
              boxShadow: "0px 0px 0px 2px rgba(255, 255,255,0.50)",
              scale: 1.1,
            },
            transition: "0.3s ease all",
          }}
        >
          <ArrowForward
            sx={{ color: iconColor, transform: "rotate(-45deg)" }}
          />
        </IconButton>
      </Stack> */}
    </Box>
  );
};

export default ArrowCard;
