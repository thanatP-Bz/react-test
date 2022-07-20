import React from "react";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>
        <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
