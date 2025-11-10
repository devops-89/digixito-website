import ImageHeading from "@/components/widgets/image-heading";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <div>
      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={6}>
              <ImageHeading title="Contact us" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ContactForm;
