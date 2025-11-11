import { Box, Grid } from "@mui/material";
import React from "react";
import SecureConnectCard from "./common/secure-connect-card";
import { SECURE_CARD_DATA } from "@/assets/data/generic-array";

const SecureConnect = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container>
        {SECURE_CARD_DATA.map((val, i) => (
          <Grid size={{ lg: 6, xs: 12 }} key={i}>
            <SecureConnectCard
              backgroundImage={val.backgroundImage}
              img={val.img}
              heading={val.heading}
              description={val.description}
              isButton={val.isButton}
              button={val.button}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SecureConnect;
