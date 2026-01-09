import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { OUR_SERVICES_CARD } from "@/utils/types";
import { Done } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const OurServiceCard = ({
  service_name,
  service_description,
}: OUR_SERVICES_CARD) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgba(75,75,75,.50)",
          borderRadius: "32px",
          backdropFilter: "blur(15px)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          height: { lg: 250, xs: "100%" },
        }}
      >
        {/* <Box
          sx={{
            backgroundColor: COLORS.PRIMARY,
            borderRadius: "16px",
            width: 84,
            height: 84,
          }}
        ></Box> */}
        <Typography
          sx={{
            fontSize: { lg: 23, xs: 16, sm: 20 },
            fontFamily: monument.style.fontFamily,
            color: COLORS.WHITE,
            fontWeight: 400,
            lineHeight: "34px",
          }}
        >
          {service_name}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 15, xs: 16, sm: 16 },
            color: "#E6E6E6",
            fontFamily: kessel.style.fontFamily,
            fontWeight: 500,
            lineHeight: "30px",
          }}
        >
          {service_description}
        </Typography>
        {/* <List>
          {list.map((val, i) => (
            <ListItem disablePadding key={i}>
              <ListItemAvatar sx={{ minWidth: 30 }}>
                <Done sx={{ color: COLORS.PRIMARY }} />
              </ListItemAvatar>
              <ListItemText
                primary={val.label}
                slotProps={{
                  primary: {
                    fontFamily: kessel.style.fontFamily,
                    fontSize: 15,
                    color: "#E6E6E6",
                    fontWeight: 500,
                    lineHeight: "39px",
                  },
                }}
              />
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Box>
  );
};

export default OurServiceCard;
