import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, styled, Typography, Button } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="6">LOGO</Typography>

        <Button variant="text">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
