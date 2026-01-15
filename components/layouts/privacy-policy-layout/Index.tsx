"use client";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Introduction from "./Introduction";
import { COLORS } from "@/utils/enum";
import InformationWeCollect from "./Information-We-Collect";
import HowweUseyourInformation from "./How-We-Use-Your-Information";
import LegalBasisProcessing from "./Legal-Basis-Processing";
import DataSharingDisclosure from "./Data-Sharing-Disclosure";
import TextBox from "./components/TextBox";

const PrivacyPolicyLayout = () => {
  const toc = [
    {
      label: "Introduction",
      url: "introduction",
    },
    {
      label: "What Information We Collect",
      url: "information_we_collect",
    },
    {
      label: "How We Use Your Information",
      url: "how_we_use_your_information",
    },
    {
      label: "Legal Basis for Processing",
      url: "legal_basis_processing",
    },
    {
      label: "Data Sharing and Disclosure",
      url: "data_sharing_disclosure",
    },
    {
      label: "Data Security",
      url: "data_security",
    },
    {
      label: "Third-Party Links and Services",
      url: "third_party_links_and_services",
    },
    {
      label: "International Transfers",
      url: "international_transfer",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          sx={{ fontSize: 40, fontFamily: monument.style.fontFamily, mt: 5 }}
        >
          Privacy Policy
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={8}>
            <Box id="introduction">
              <Introduction />
            </Box>
            <Box id="information_we_collect">
              <InformationWeCollect />
            </Box>
            <Box id="how_we_use_your_information">
              <HowweUseyourInformation />
            </Box>
            <Box id="legal_basis_processing">
              <LegalBasisProcessing />
            </Box>
            <Box id="data_sharing_disclosure">
              <DataSharingDisclosure />
            </Box>
            <Box id="data_security" sx={{ mt: 2 }}>
              <TextBox
                title="6. Data Security"
                description={[
                  {
                    label:
                      "We implement reasonable technical and organizational measures to protect personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute protection.",
                  },
                ]}
              />
            </Box>
            <Box id="third_party_links_and_services" sx={{ mt: 3 }}>
              <TextBox
                title="7. Third-Party Links and Services"
                description={[
                  {
                    label:
                      "Our website may contain links to external websites or services that are not owned or controlled by Digixito. This Privacy Policy does not apply to third-party sites. We encourage you to review the privacy policies of any external sites you visit.",
                  },
                ]}
              />
            </Box>
            <Box id="international_transfer" sx={{ mt: 3 }}>
              <TextBox
                title="8. International Transfers"
                description={[
                  {
                    label:
                      "Your information may be transferred to and processed in jurisdictions outside your own (including India), where data protection laws may differ. By using our website, you consent to such transfer in accordance with applicable law.",
                  },
                ]}
              />
            </Box>
            <Box id="your_choices" sx={{ mt: 3 }}>
              <TextBox
                title="9. Your Rights and Choices"
                description={[
                  {
                    label:
                      "Subject to applicable law, you may have the right to:",
                  },
                ]}
                listDetails={[
                  {
                    label:
                      "Access, correct, update, or delete your personal information",
                  },
                  {
                    label: "Object to or restrict processing",
                  },
                  {
                    label: "Withdraw consent at any time",
                  },
                  {
                    label: "Opt out of marketing communications",
                  },
                ]}
                footerDescription="To exercise these rights, please contact us via the details below."
              />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                backgroundColor: COLORS.WHITE,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                p: 2,
                position: "sticky",
                top: 0,
                alignSelf: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 800,
                  mt: 2,
                }}
              >
                Table of Contents
              </Typography>
              <List>
                {toc.map((item, i) => (
                  <ListItemButton
                    key={i}
                    onClick={() => handleScroll(item.url)}
                  >
                    <ListItemText
                      primary={`${i + 1}. ${item.label}`}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: 16,
                            fontFamily: kessel.style.fontFamily,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PrivacyPolicyLayout;
