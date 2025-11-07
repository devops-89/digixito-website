"use client";
import logo from "@/logo/Digixito_Logo.svg";
import {
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  Stack,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import Image from "next/image";
import React, { useState } from "react";
import HeaderTabs from "./common/header-tabs";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { ArrowBackIos } from "@mui/icons-material";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={200} />
          <IconButton onClick={handleClick}>
            <Box
              sx={{
                border: "5px solid #000000",
                borderRadius: "50%",
                width: 10,
                height: 10,
              }}
            ></Box>
          </IconButton>
        </Stack>
      </Container>
      <Popover
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        transitionDuration={200}
        TransitionProps={{ style: { transformOrigin: "right top" } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            height: "100%",
            top: "110px !important",
            right: "0px !important",
            left: "0px !important",
            "&.MuiPopover-paper": {
              maxWidth: "100% !important",
              maxHeight: "100vh",
              boxShadow: "none",
            },
            position: "relative",
          },
        }}
      >
        <Container maxWidth="lg">
          <HeaderTabs setAnchorEl={setAnchorEl} />
          <Button
            sx={{
              width: 244,
              height: 55,
              backgroundColor: COLORS.BLACK,
              borderRadius: "27px",
              color: COLORS.WHITE,
              fontFamily: monument.style.fontFamily,
              fontSize: 22,
              fontWeight: 400,
              position: "absolute",
              bottom: 150,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            endIcon={
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  width: 21,
                  height: 21,
                  borderRadius: "50px",
                  color: COLORS.BLACK,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowBackIos sx={{ fontSize: 12, ml: 1 }} />
              </Box>
            }
          >
            Go to home
          </Button>
        </Container>
      </Popover>
    </Box>
  );
};

export default Navbar;
