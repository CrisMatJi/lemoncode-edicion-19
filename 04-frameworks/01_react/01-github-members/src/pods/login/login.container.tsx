import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";
import { LoginComponent } from "./login.component";
import { doLogin } from "./login.api";

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  // Si el login es correcto navegamos al listado
  const handleLogin = (username: string, password: string) => {
    doLogin(username, password).then((isValid) => {
      if (isValid) {
        navigate(routes.list);
      } else {
        alert("User / password not valid, psst... admin / test");
      }
    });
  };

  return <LoginComponent onLogin={handleLogin} />;
};
