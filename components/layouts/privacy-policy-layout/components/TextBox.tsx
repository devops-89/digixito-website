import { kessel, monument } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const TextBox = ({
  title,
  description,
  listDetails,
  footerDescription,
}: {
  title: string;
  description: { label: string }[];
  listDetails?: { label: string }[];
  footerDescription?: string;
}) => {
  return (
    <div>
      <Typography sx={{ fontFamily: monument.style.fontFamily, fontSize: 30 }}>
        {title}
      </Typography>
      {description.map((val, i) => (
        <Typography
          sx={{ fontFamily: kessel.style.fontFamily, fontSize: 18, mt: 2 }}
          key={i}
        >
          {val.label}
        </Typography>
      ))}

      {listDetails?.length && (
        <List>
          {listDetails?.map((val, i) => (
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
      )}

      {footerDescription && (
        <Typography sx={{ fontFamily: kessel.style.fontFamily, fontSize: 18 }}>
          {footerDescription}
        </Typography>
      )}
    </div>
  );
};

export default TextBox;
