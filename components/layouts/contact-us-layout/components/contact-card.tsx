import { COLORS } from "@/utils/enum";
import { LocationPin } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import address from "@/contact-us/carbon_location.svg";
import Image from "next/image";
import { monument } from "@/utils/fonts";
import { CONTACT_CARD_PROPS } from "@/utils/types";
const ContactCard = ({ img, heading, description }: CONTACT_CARD_PROPS) => {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemAvatar
            sx={{
              minWidth: 30,
              backgroundColor: COLORS.BLACK,
              color: COLORS.PRIMARY,
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={img} alt="" width={30} />
          </ListItemAvatar>
          <ListItemText
            primary={heading}
            secondary={description}
            sx={{ ml: 3 }}
            slotProps={{
              primary: {
                fontSize: 23,
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
              },
              secondary: {
                fontSize: 14,
                fontFamily: monument.style.fontFamily,
                fontWeight: 500,
                lineHeight: "30px",
                letterSpacing: "-0.48px",
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactCard;
