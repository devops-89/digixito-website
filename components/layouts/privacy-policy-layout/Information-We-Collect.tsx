"use client";
import { archivo, kessel, monument } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const InformationWeCollect = () => {
  const informationYouProvideDirectly = [
    {
      heading: "2.1 Information You Provide Directly",
      description: [
        {
          label:
            "We collect personal information that you voluntarily provide when you contact us, subscribe to newsletters, request services, or interact with forms on the website. This may include:",
        },
      ],
      list: [
        {
          label: "Name",
        },
        {
          label: "Email Address",
        },
        {
          label: "Phone Number",
        },

        {
          label: "Project Details Or Message",
        },
      ],
    },
    {
      heading: "2.2 Automatically Collected Information",
      description: [
        {
          label:
            "When you visit the website, we may automatically collect certain information, such as:",
        },
      ],
      list: [
        {
          label: "IP address",
        },
        {
          label: "Device type and browser information",
        },
        {
          label: "Pages visited and time spent on the Website",
        },
        {
          label: "Referring URLs and usage data",
        },
        {
          label: "Cookies and similar tracking technologies",
        },
      ],
    },
    {
      heading: "2.3 Cookies and Tracking Technologies",
      description: [
        {
          label:
            "We use cookies, pixel tags, and similar technologies to improve user experience, analyze trends, and serve targeted content. You may manage cookie preferences through your browser settings; however, restricting cookies may affect website functionality.",
        },
      ],
    },
  ];
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: monument.style.fontFamily,
            mt: 5,
            fontWeight: 800,
          }}
        >
          2. What Information We Collect
        </Typography>
        {informationYouProvideDirectly.map((val, i) => (
          <Stack spacing={2} key={i} sx={{ mt: 2 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: kessel.style.fontFamily,
                fontWeight: 600,
                textAlign: "justify",
              }}
            >
              {val.heading}
            </Typography>
            {val.description.map((item, i) => (
              <Typography
                sx={{
                  mt: 3,
                  fontSize: 16,
                  fontFamily: kessel.style.fontFamily,
                }}
                key={i}
              >
                {item.label}
              </Typography>
            ))}
            <List>
              {val?.list?.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar sx={{ minWidth: 20 }}>
                    <Circle sx={{ width: 10, height: 10 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: 16,
                          fontFamily: kessel.style.fontFamily,
                          fontWeight: 600,
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        ))}
      </Box>
    </div>
  );
};

export default InformationWeCollect;
