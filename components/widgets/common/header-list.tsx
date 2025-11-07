import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { HEADER_LIST_PROPS } from "@/utils/types";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Headerlist = ({ heading, data }: HEADER_LIST_PROPS) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#595959",
          fontSize: 25,
          fontWeight: 800,
          fontFamily: kessel.style.fontFamily,
        }}
      >
        {heading}
      </Typography>

      <List>
        {data.map((val, i) => (
          <ListItemButton
            key={i}
            sx={{
              width: "fit-content",
              //   ":hover": {
              //     color: COLORS.PRIMARY,
              //     backgroundColor: COLORS.TRANSPARENT,
              //   },
              p: 1,
            }}
          >
            <ListItemText
              primary={val.label}
              primaryTypographyProps={{
                fontSize: 20,
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Headerlist;
