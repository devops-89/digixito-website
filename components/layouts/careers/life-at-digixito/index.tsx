import PageHeading from "@/components/widgets/page-heading";
import { Box, Container } from "@mui/material";
import React from "react";
import HerosectionLife from "./hero-section";
import BuildTogether from "./build-together";
import WhatweValue from "./what-we-value";
import WorkatDigixito from "./work-at-digixito";
import HiringPhilosophy from "./hiring-philosophy";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";

const LifeAtDigixitoLayout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <PageHeading page_name="Careers" page_title="Life at Digixito" />
      </Container>
      <HerosectionLife />
      <BuildTogether />
      <WhatweValue />
      <WorkatDigixito />
      <HiringPhilosophy />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default LifeAtDigixitoLayout;
