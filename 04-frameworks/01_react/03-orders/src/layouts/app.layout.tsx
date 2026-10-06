import React from "react";
import Container from "@mui/material/Container";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    {children}
  </Container>
);
