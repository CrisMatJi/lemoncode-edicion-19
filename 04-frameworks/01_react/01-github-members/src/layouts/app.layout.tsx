import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { routes } from "@/core";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lemoncode React
          </Typography>
          <Button color="inherit" component={Link} to={routes.list}>
            GitHub
          </Button>
          <Button color="inherit" component={Link} to={routes.characters}>
            Rick & Morty
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  );
};
