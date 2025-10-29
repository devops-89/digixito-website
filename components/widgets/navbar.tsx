import { Box, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import logo from "@/logo/Digixito_Logo.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Image src={logo} alt="" width={200} />
          <IconButton>
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
    </Box>
  );
};

export default Navbar;
