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

const DataSharingDisclosure = () => {
  const listDetails = [
    {
      label:
        "With service providers and partners who support our operations (e.g., hosting, analytics, communication tools)",
    },
    {
      label:
        "To comply with legal requirements, court orders, or government requests ",
    },
    {
      label:
        "To enforce our Terms of Use or protect our rights, property, or safety",
    },
    {
      label: "In connection with a merger, acquisition, or sale of assets",
    },
  ];
  return (
    <Box>
      <Typography sx={{ fontSize: 20, fontFamily: monument.style.fontFamily }}>
        5. Data Sharing and Disclosure
      </Typography>

      <Typography
        sx={{ fontFamily: kessel.style.fontFamily, fontSize: 18, my: 2 }}
      >
        We may share your personal information:
      </Typography>
      <List>
        {listDetails.map((val, i) => (
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

      <Typography
        sx={{ fontFamily: kessel.style.fontFamily, fontSize: 18, my: 2 }}
      >
        We do not sell or lease your personal information to third parties for
        marketing purposes without your consent.
      </Typography>
    </Box>
  );
};

export default DataSharingDisclosure;
