import { archivo } from "@/utils/fonts";
import { LINK_LIST } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface LINK_LIST_PROPS {
  data: LINK_LIST[];
}

const LinkList = ({ data }: LINK_LIST_PROPS) => {
  return (
    <Box sx={{ mt: 4 }}>
      {data.map((val, i) => (
        <React.Fragment key={i}>
          {val.data.map((item, index) => (
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              sx={{ borderTop: "1px solid #F5F8FF30", width: "100%", py: 2 }}
              key={`${i}-${index}`}
           >
              <Typography
                sx={{
                  color: "#F5F8FF80",
                  fontSize: 14,
                  fontFamily: archivo.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: "18px",
                  letterSpacing: "1.4",
                  textTransform: "uppercase",
                  visibility: index === 0 ? "visible" : "hidden",
                }}
              >
                {val.heading}
              </Typography>
              <Typography
                sx={{
                  color: "#F5F8FF",
                  fontSize: 25,
                  fontFamily: archivo.style.fontFamily,
                  fontWeight: 700,
                  lineHeight: "28px",
                  textTransform: "uppercase",
                  textAlign: "end",
                }}
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default LinkList;
