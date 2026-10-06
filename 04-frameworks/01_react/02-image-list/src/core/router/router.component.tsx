import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import { KittiesPage, PuppiesPage, CheckoutPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.kitties} element={<KittiesPage />} />
        <Route path={routes.puppies} element={<PuppiesPage />} />
        <Route path={routes.checkout} element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to={routes.kitties} />} />
      </Routes>
    </Router>
  );
};
