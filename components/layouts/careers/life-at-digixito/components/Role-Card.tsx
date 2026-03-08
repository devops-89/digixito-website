"use client";
import { COLORS } from "@/utils/enum";
import { archivo, kessel, monument } from "@/utils/fonts";
import { RoleCardProps } from "@/utils/types";
import { ArrowForward, Circle, ExpandMore } from "@mui/icons-material";
import { useModal } from "@/store/useModal";
import ApplicationForm from "./ApplicationForm";
import {
  Box,
  Button,
  Card,
  Chip,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const RoleCard = ({
  expanded,
  onToggle,
  title,
  description,
  category,
  requirements,
  offer,
}: RoleCardProps) => {
  const [localOpen, setLocalOpen] = useState(false);
  const { showModal } = useModal();

  const isOpen = expanded !== undefined ? expanded : localOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setLocalOpen(!localOpen);
    }
  };

  return (
    <Box>
      <Card
        sx={{
          boxShadow: "0px 0px 0px 0px #0000000D",
          border: "1px solid #0000000D",
          borderRadius: 4,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
          justifyContent="space-between"
          sx={{ p: { xs: 3, md: 4 } }}
        >
          <Box sx={{ flex: 1, pr: { md: 4 } }}>
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 20, md: 24 },
                color: COLORS.BLACK,
                mb: 1.5,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 1 }}
            >
              {category.map((val, i) => (
                <React.Fragment key={i}>
                  <Chip
                    label={val.location}
                    size="small"
                    sx={{
                      fontFamily: archivo.style.fontFamily,
                      backgroundColor: "#F3F4F6",
                      color: "#4B5563",
                      fontWeight: 500,
                      borderRadius: "8px",
                    }}
                  />
                  <Box
                    component={Circle}
                    sx={{
                      fontSize: 4,
                      color: "#D1D5DB",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                  <Chip
                    label={val.experience}
                    size="small"
                    sx={{
                      fontFamily: archivo.style.fontFamily,
                      backgroundColor: "#F3F4F6",
                      color: "#4B5563",
                      fontWeight: 500,
                      borderRadius: "8px",
                    }}
                  />
                  <Box
                    component={Circle}
                    sx={{
                      fontSize: 4,
                      color: "#D1D5DB",
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                  <Chip
                    label={val.type}
                    size="small"
                    sx={{
                      fontFamily: archivo.style.fontFamily,
                      backgroundColor: "#F3F4F6",
                      color: "#4B5563",
                      fontWeight: 500,
                      borderRadius: "8px",
                    }}
                  />
                </React.Fragment>
              ))}
            </Stack>
          </Box>
          <Box sx={{ mt: { xs: 3, md: 0 }, width: { xs: "100%", md: "auto" } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              <Button
                onClick={() => showModal(<ApplicationForm roleTitle={title} />)}
                sx={{
                  fontFamily: monument.style.fontFamily,
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.BLACK,
                  padding: { xs: "12px 24px", md: "10px 20px" },
                  fontSize: { xs: 12, md: 14 },
                  borderRadius: "50px",
                  boxShadow: "0 4px 14px 0 rgba(253, 235, 57, 0.39)",
                  flex: { xs: 1, md: "none" },
                  "&:hover": {
                    backgroundColor: COLORS.PRIMARY,
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px 0 rgba(253, 235, 57, 0.39)",
                  },
                  transition: "all 0.2s ease-in-out",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Apply Now
              </Button>
              <IconButton
                sx={{
                  border: "1px solid #E5E7EB",
                  backgroundColor: isOpen ? "#F9FAFB" : "transparent",
                  "&:hover": { backgroundColor: "#F3F4F6" },
                  flexShrink: 0,
                  width: { xs: 44, md: 40 },
                  height: { xs: 44, md: 40 },
                }}
                onClick={handleToggle}
              >
                <ExpandMore
                  sx={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
        <Collapse in={isOpen}>
          <Box
            sx={{
              px: { xs: 2.5, md: 4 },
              pb: { xs: 3, md: 4 },
              borderTop: "1px solid #E5E7EB",
              mt: 2,
              pt: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontWeight: 800,
                fontSize: { xs: 18, md: 20 },
                color: COLORS.BLACK,
                mb: 2,
              }}
            >
              About the Role
            </Typography>
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                mb: 4,
                color: "#4B5563",
                lineHeight: 1.6,
                fontSize: { xs: 14, md: 16 },
              }}
            >
              {description}
            </Typography>

            <Stack spacing={{ xs: 3, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: "#F9FAFB",
                  p: { xs: 2.5, md: 4 },
                  borderRadius: "16px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: 16, md: 18 },
                    color: COLORS.BLACK,
                    mb: 2,
                  }}
                >
                  Requirements
                </Typography>

                <List sx={{ pt: 0 }}>
                  {requirements.map((val, i) => (
                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ mb: 1.5, alignItems: "flex-start" }}
                    >
                      <ListItemAvatar
                        sx={{ minWidth: { xs: 24, md: 28 }, mt: 0.5 }}
                      >
                        <Circle
                          sx={{ width: 8, height: 8, color: COLORS.BLACK }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={val.label}
                        slotProps={{
                          primary: {
                            sx: {
                              fontFamily: archivo.style.fontFamily,
                              color: "#4B5563",
                              fontSize: { xs: 14, md: 16 },
                              lineHeight: 1.6,
                            },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#F9FAFB",
                  p: { xs: 2.5, md: 4 },
                  borderRadius: "16px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 800,
                    fontSize: { xs: 16, md: 18 },
                    color: COLORS.BLACK,
                    mb: 2,
                  }}
                >
                  What We Offer
                </Typography>

                <List sx={{ pt: 0 }}>
                  {offer.map((val, i) => (
                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ mb: 1.5, alignItems: "flex-start" }}
                    >
                      <ListItemAvatar
                        sx={{ minWidth: { xs: 24, md: 28 }, mt: 0.5 }}
                      >
                        <Circle
                          sx={{ width: 8, height: 8, color: COLORS.BLACK }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={val.label}
                        slotProps={{
                          primary: {
                            sx: {
                              fontFamily: archivo.style.fontFamily,
                              color: "#4B5563",
                              fontSize: { xs: 14, md: 16 },
                              lineHeight: 1.6,
                            },
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Box>
        </Collapse>
      </Card>
    </Box>
  );
};

export default RoleCard;
