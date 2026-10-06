import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { routes } from "@/core";
import { CartContext } from "@/core/cart";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { cart } = React.useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Image bank
          </Typography>
          <Button color="inherit" component={NavLink} to={routes.kitties}>
            Kitties
          </Button>
          <Button color="inherit" component={NavLink} to={routes.puppies}>
            Puppies
          </Button>
          <Button color="inherit" component={NavLink} to={routes.checkout}>
            Checkout ({cart.length})
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  );
};
