import { Grid } from "@mui/material";
import React from "react";
import SecureConnectCard from "./common/secure-connect-card";

const SecureConnect = () => {
  return (
    <div>
      <Grid container>
        <Grid size={6}>
          <SecureConnectCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default SecureConnect;
