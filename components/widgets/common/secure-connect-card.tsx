import { Box, Container } from "@mui/material";
import React from "react";
import secure from "@/homepage/secure.png";
const SecureConnectCard = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${secure.src})`,
          height: "60vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg"></Container>
      </Box>
    </Box>
  );
};

export default SecureConnectCard;
