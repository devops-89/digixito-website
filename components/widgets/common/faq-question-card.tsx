"use client";
import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { FAQ_CARD_DATA } from "@/utils/types";
import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";

interface FAQ_PROPS {
  data: FAQ_CARD_DATA[];
}

const FaqQuestionCard = ({ data }: FAQ_PROPS) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box>
      {data.map((val, i) => (
        <Accordion
          key={i}
          sx={{
            boxShadow: "none",
            borderTop: i === 0 ? "1px solid #000" : "none",
            borderBottom: "1px solid #000",
            borderRadius: 0,
            "& .Mui-paper": {
              borderRadius: 0,
            },
            "&.MuiAccordion-root::before": {
              backgroundColor: "transparent",
              opacity: 0,
            },
            "&.MuiAccordion-root:last-of-type": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            "&.MuiAccordion-root:first-of-type": {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            },
            mb: 4,
          }}
          expanded={expanded === `panel${i + 1}`}
          onChange={handleChange(`panel${i + 1}`)}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${i + 1}` ? (
                <Remove sx={{ color: COLORS.BLACK }} />
              ) : (
                <Add sx={{ color: COLORS.BLACK }} />
              )
            }
          >
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                color: "#222",
                fontSize: { lg: 22, xs: 18 },
                fontWeight: 500,
              }}
            >
              {i + 1}. {val.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                color: "#222",
                fontSize: { lg: 17, xs: 15 },
                fontWeight: 500,
                lineHeight: "28.5px",
              }}
            >
              {val.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqQuestionCard;
