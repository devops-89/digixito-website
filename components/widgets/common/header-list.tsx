import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { HEADER_LIST_PROPS } from "@/utils/types";
import { Circle, Done, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface HeaderlistProps extends HEADER_LIST_PROPS {
  setAnchorEl: (value: HTMLButtonElement | null) => void;
}

const Headerlist = ({ heading, data, setAnchorEl }: HeaderlistProps) => {
  const router = useRouter();

  const handleChangePage = (url: string) => {
    router.push(url);
    setAnchorEl(null);
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <React.Fragment key={i}>
            <ListItemButton
              sx={{
                width: "fit-content",
                p: 0,
                mb: 1,
              }}
              onClick={
                val.url
                  ? () => handleChangePage(val.url || "#")
                  : () => handleToggle(i)
              }
            >
              <ListItemText
                primary={val.label}
                slotProps={{
                  primary: {
                    fontSize: 17,
                    fontFamily: kessel.style.fontFamily,
                    fontWeight: 500,
                  },
                }}
              />
              {val.subData && val.subData.length > 0 && (
                <ExpandMore
                  sx={{
                    transform:
                      openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              )}
            </ListItemButton>
            {val.subData && val.subData.length > 0 && (
              <Collapse in={openIndex === i} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {val.subData.map((item, index) => (
                    <ListItemButton
                      key={index}
                      sx={{ pl: 2 }}
                      onClick={() => item.url && handleChangePage(item.url)}
                    >
                      <ListItemAvatar sx={{ minWidth: 30 }}>
                        <Circle sx={{ color: COLORS.PRIMARY, fontSize: 10 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.label}
                        slotProps={{
                          primary: {
                            fontSize: 15,
                            fontFamily: kessel.style.fontFamily,
                            fontWeight: 500,
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Headerlist;
