import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  LoginPage,
  ListPage,
  DetailPage,
  CharacterListPage,
  CharacterDetailPage,
} from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
        <Route path={switchRoutes.characters} element={<CharacterListPage />} />
        <Route
          path={switchRoutes.characterDetail}
          element={<CharacterDetailPage />}
        />
        <Route path="*" element={<Navigate to={switchRoutes.root} />} />
      </Routes>
    </Router>
  );
};
