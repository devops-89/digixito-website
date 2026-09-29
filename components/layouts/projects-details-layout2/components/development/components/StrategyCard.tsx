import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

interface StrategyCardProps {
  title: string;
  description: string;
  serialNumber: number;
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  description,
  serialNumber,
}) => {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.10)",
        borderRadius: "12px",
        height: 200,
        "&:hover": {
          transform: "scale(1.1)",
        },
        transition: "0.5s ease all",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: kessel_bold.style.fontFamily,
              fontSize: "1.1rem",
              color: "#000000",
            }}
          >
            {serialNumber}
          </Typography>
        </Box>
        <Typography
          sx={{ fontFamily: kessel_bold.style.fontFamily, fontSize: 16 }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        sx={{ fontFamily: archivo.style.fontFamily, fontSize: 16, mt: 2 }}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default StrategyCard;
