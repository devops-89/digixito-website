import { COLORS } from "@/utils/enum";
import { archivo } from "@/utils/fonts";
import { LINK_LIST } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
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
              sx={{ borderTop: "1px solid #F5F8FF30", width: "100%", py: 1 }}
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
              <Link href={item.url || "#"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#F5F8FF",
                    fontSize: {lg:25,xs:20},
                    fontFamily: archivo.style.fontFamily,
                    fontWeight: 700,
                    lineHeight: "28px",
                    textTransform: "uppercase",
                    textAlign: "end",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default LinkList;
