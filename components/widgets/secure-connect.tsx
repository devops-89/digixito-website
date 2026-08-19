import { SECURE_CARD_DATA } from "@/assets/data/generic-array";
import { monument } from "@/utils/fonts";
import { Box, Grid, Typography } from "@mui/material";
import SecureConnectCard from "./common/secure-connect-card";

const SecureConnect = () => {
  return (
    <Box sx={{ mt: { xs: 6, md: 10 } }}>
      <Typography
        component="h2"
        sx={{
          display: "none",
          fontFamily: monument.style.fontFamily,
        }}
      >
        Secure Digital Solutions & Business Connectivity
      </Typography>

      <Grid container>
        {SECURE_CARD_DATA.map((val, i) => (
          <Grid size={{ lg: 6, xs: 12, sm: 6 }} key={i}>
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