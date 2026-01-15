import { kessel, monument } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const HowweUseyourInformation = () => {
  const useInformation = [
    {
      label: "To provide the services you request",
    },
    {
      label: "To respond to your inquiries and communicate with you",
    },
    {
      label:
        "To send newsletters, promotional messages, or updates (where you have consented)",
    },
    {
      label:
        "To improve our Website features, performance, and user experience",
    },
    {
      label: "For analytics and internal business purposes",
    },
    {
      label: "To monitor and prevent technical issues or security breaches",
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 30,
          fontFamily: monument.style.fontFamily,
          mt: 5,
          fontWeight: 800,
        }}
      >
        3. How We Use Your Information
      </Typography>

      <Typography
        sx={{ fontSize: 18, fontFamily: kessel.style.fontFamily, my: 1 }}
      >
        We may use the personal information we collect for the following
        purposes:
      </Typography>
      <List>
        {useInformation.map((val, i) => (
          <ListItem>
            <ListItemAvatar sx={{ minWidth: 20 }}>
              <Circle sx={{ fontSize: 10 }} />
            </ListItemAvatar>
            <ListItemText
              primary={val.label}
              slotProps={{
                primary: {
                  sx: {
                    fontFamily: kessel.style.fontFamily,
                    fontSize: 16,
                  },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HowweUseyourInformation;
