"use client";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TextBox from "../privacy-policy-layout/components/TextBox";
import {
  definitionsDetails,
  disclaimers,
  eligibility,
  liability,
  use_of_website,
  user_accounts_data,
} from "@/assets/data/terms";

const TermsLayout = () => {
  const toc = [
    {
      label: "1. Definitions",
      url: "definitions",
    },
    {
      label: "2. Acceptance of Terms",
      url: "acceptance_of_terms",
    },
    {
      label: "3. Eligibility",
      url: "eligibility",
    },
    {
      label: "4. Use of the Website",
      url: "use_of_website",
    },
    {
      label: "5. Intellictual Property",
      url: "intellictual_property",
    },
    {
      label: "6. User Accounts",
      url: "user_accounts",
    },
    {
      label: "7. Privacy Policy",
      url: "privacy_policy",
    },
    {
      label: "8. Third-Party Links and Services",
      url: "third_party_links_and_services",
    },
    {
      label: "9. Disclaimers",
      url: "disclaimers",
    },
    {
      label: "10. Limitation of Liability",
      url: "limitation_of_liability",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ my: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Typography
              sx={{ fontSize: 30, fontFamily: monument.style.fontFamily }}
            >
              Terms and Conditions
            </Typography>

            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontSize: 18,
                textAlign: "justify",
                mt: 2,
              }}
            >
              Welcome to digixito.com (“Website”, “Platform”, “We”, “Us”,
              “Our”). These Terms and Conditions (“Terms”) govern your access to
              and use of this Website. By accessing or using the Website in any
              manner, including visiting or browsing the Website, you agree to
              be bound by these Terms. If you do not agree to all of the Terms,
              you must not access or use the Website.
            </Typography>
            <Box id="definitions" sx={{ mt: 3 }}>
              <TextBox
                title="1. Definitions"
                listDetails={definitionsDetails}
              />
            </Box>
            <Box id="acceptance_of_terms" sx={{ mt: 3 }}>
              <TextBox
                title="2. Acceptance of Terms"
                description={[
                  {
                    label:
                      "By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to all of the Terms, you must not access or use the Website.",
                  },
                ]}
              />
            </Box>
            <Box id="eligibility" sx={{ mt: 3 }}>
              <TextBox
                title="3. Eligibility"
                description={[
                  {
                    label: "You represent and warrant that:",
                  },
                ]}
                listDetails={eligibility}
                footerDescription="If you are accessing the Website on behalf of an entity, you affirm that you are authorized to accept these Terms on that entity’s behalf."
              />
            </Box>
            <Box sx={{ mt: 3 }} id="use_of_website">
              <TextBox
                title="4. Use of the Website"
                description={[
                  {
                    label:
                      "You agree to use the Website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You shall not:",
                  },
                ]}
                listDetails={use_of_website}
              />
            </Box>
            <Box sx={{ mt: 3 }} id="intellictual_property">
              <TextBox
                title="5. Intellictual Property"
                description={[
                  {
                    label:
                      "All Content available on the Website, including text, graphics, logos, icons, images, and software, is the property of Digixito or its licensors and is protected by intellectual property laws.You may access and view Content for personal, non-commercial use only. You may not copy, reproduce, modify, distribute, transmit, display, or create derivative works of any Content without prior written consent from Digixito.",
                  },
                ]}
              />
            </Box>
            <Box sx={{ mt: 3 }} id="user_accounts">
              <TextBox
                title="6. User Accounts"
                listDetails={user_accounts_data}
              />
            </Box>
            <Box sx={{ mt: 3 }} id="privacy_policy">
              <TextBox
                title="7. Privacy Policy"
                description={[
                  {
                    label:
                      "Your use of the Website is also governed by our Privacy Policy, which explains what information we collect, how we use it, and your rights regarding that data. By using the Website, you consent to our data practices as described in the Privacy Policy.",
                  },
                ]}
              />
            </Box>
            <Box sx={{ mt: 3 }} id="third_party_links_and_services">
              <TextBox
                title="8. Third-Party Links and Services"
                description={[
                  {
                    label:
                      "The Website may contain links to third-party websites, services, or resources. These links are provided for convenience only. We are not responsible for the availability, content, policies, or practices of these third parties. Your use of third-party sites is at your own risk.",
                  },
                ]}
              />
            </Box>

            <Box sx={{ mt: 3 }} id="disclaimers">
              <TextBox
                title="9. Disclaimers"
                description={[
                  {
                    label:
                      "The Website and all Content and Services are provided “as is” and “as available” without warranties of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:",
                  },
                ]}
                listDetails={disclaimers}
              />
            </Box>
            <Box sx={{ mt: 3 }} id="limitation_of_liability">
              <TextBox
                title="10. Limitation of Liability"
                description={[
                  {
                    label:
                      "To the maximum extent permitted by law, Digixito, its officers, directors, employees, agents, partners, and licensors shall not be liable for any:",
                  },
                ]}
                listDetails={liability}
                footerDescription="Your sole remedy for dissatisfaction with the Website is to stop using the Website."
              />
            </Box>
          </Grid>
          <Grid size={4} sx={{ display: { lg: "block", xs: "none" } }}>
            <Card sx={{ p: 2, position: "sticky", top: 100 }}>
              <Typography
                sx={{ fontFamily: monument.style.fontFamily, fontSize: 20 }}
              >
                Table of content
              </Typography>
              <List>
                {toc.map((val, i) => (
                  <ListItemButton key={i} onClick={() => handleScroll(val.url)}>
                    <ListItemText
                      primary={val.label}
                      slotProps={{
                        primary: {
                          sx: {
                            fontFamily: kessel.style.fontFamily,
                            fontSize: 16,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TermsLayout;
