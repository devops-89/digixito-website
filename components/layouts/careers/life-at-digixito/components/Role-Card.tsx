"use client";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import { RoleCardProps } from "@/utils/types";
import { ArrowForward, Circle, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  Collapse,
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
          direction={"row"}
          alignItems={"center"}
          //   spacing={2}
          justifyContent="space-between"
          sx={{ p: 2 }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 15,
                textTransform: "uppercase",
                fontFamily: archivo.style.fontFamily,
              }}
            >
              Open Roles
            </Typography>
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontWeight: 400,
                fontSize: 25,
                my: 1,
              }}
            >
              {title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              {category.map((val, i) => (
                <>
                  <Typography>{val.location}</Typography>
                  <Circle sx={{ fontSize: 5 }} />
                  <Typography>{val.experience}</Typography>
                  <Circle sx={{ fontSize: 5 }} />
                  <Typography>{val.type}</Typography>
                </>
              ))}
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                sx={{ border: "1px solid #00000030" }}
                onClick={handleToggle}
              >
                <ExpandMore
                  sx={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </IconButton>
              <Button
                sx={{
                  fontSize: 15,
                  fontFamily: archivo.style.fontFamily,
                  border: "1px solid" + COLORS.PRIMARY,
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.BLACK,
                  borderRadius: 20,
                  p: "10px 20px",
                }}
                endIcon={
                  <Box
                    sx={{
                      backgroundColor: COLORS.BLACK,
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowForward
                      sx={{
                        color: COLORS.WHITE,
                        fontSize: 20,
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </Box>
                }
              >
                Submit Application
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Collapse in={isOpen}>
          <Box
            sx={{
              px: 2,
              pb: 2,
              borderTop: "1px solid #0000000D",
              mt: 2,
              pt: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontWeight: 600,
                fontSize: 18,
                mb: 1,
              }}
            >
              About the Role
            </Typography>
            <Typography
              sx={{
                fontFamily: archivo.style.fontFamily,
                mb: 2,
                color: "#555",
              }}
            >
              {description}
            </Typography>

            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontWeight: 600,
                fontSize: 18,
                mb: 1,
              }}
            >
              Requirements
            </Typography>

            <List>
              {requirements.map((val, i) => (
                <ListItem disablePadding>
                  <ListItemAvatar sx={{ minWidth: 15 }}>
                    <Circle sx={{ width: 5 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily: archivo.style.fontFamily,
                          color: "#555",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontWeight: 600,
                fontSize: 18,
                mt: 2,
                mb: 1,
              }}
            >
              What We Offer
            </Typography>

            <List>
              {offer.map((val, i) => (
                <ListItem disablePadding>
                  <ListItemAvatar sx={{ minWidth: 15 }}>
                    <Circle sx={{ width: 5 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily: archivo.style.fontFamily,
                          color: "#555",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Collapse>
      </Card>
    </Box>
  );
};

export default RoleCard;
