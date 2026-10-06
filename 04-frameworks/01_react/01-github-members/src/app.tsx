import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterComponent } from "@/core";
import { OrganizationProvider } from "@/core/organization";

export const App = () => {
  return (
    <OrganizationProvider>
      <CssBaseline />
      <RouterComponent />
    </OrganizationProvider>
  );
};
