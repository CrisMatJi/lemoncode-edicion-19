import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { RouterComponent } from "@/core";
import { CartProvider } from "@/core/cart";
import { CartContainer } from "@/pods/cart";

export const App = () => {
  return (
    <CartProvider>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <RouterComponent />
        <CartContainer />
      </Box>
    </CartProvider>
  );
};
