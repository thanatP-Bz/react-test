import React from "react";
import { Box } from "@mui/material";

const SideBar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default SideBar;
