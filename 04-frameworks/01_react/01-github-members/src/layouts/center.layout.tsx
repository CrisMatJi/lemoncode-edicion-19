import React from "react";
import Box from "@mui/material/Box";

export const CenterLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "grey.100",
    }}
  >
    {children}
  </Box>
);
