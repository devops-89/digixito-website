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

const LegalBasisProcessing = () => {
  const legalList = [
    {
      label: "Your consent",
    },
    {
      label: "Performance of a contract",
    },
    {
      label: "Compliance with legal obligations",
    },
    {
      label: "Legitimate business interests",
    },
  ];
  return (
    <div>
      <Typography
        sx={{ fontSize: 30, fontFamily: monument.style.fontFamily, mt: 2 }}
      >
        4. Legal Basis for Processing (Where Applicable)
      </Typography>
      <Typography
        sx={{ fontSize: 18, fontFamily: kessel.style.fontFamily, my: 2 }}
      >
        For users in jurisdictions with data protection laws (e.g., GDPR), we
        rely on lawful bases such as
      </Typography>
      <List>
        {legalList.map((val, i) => (
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
    </div>
  );
};

export default LegalBasisProcessing;
