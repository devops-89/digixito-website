import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: SxProps<Theme>;
}
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, sx, ...other } = props;
  return (
    <Box>
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        sx={{ ...sx }}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </Box>
    </Box>
  );
};

export default TabPanel;
