import React from "react";

interface Context {
  organization: string;
  setOrganization: (organization: string) => void;
}

// Contexto para recordar la organización buscada al navegar entre páginas
export const OrganizationContext = React.createContext<Context>({
  organization: "lemoncode",
  setOrganization: () =>
    console.warn("Has olvidado añadir el OrganizationProvider"),
});

export const OrganizationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Por defecto se muestran los miembros de lemoncode
  const [organization, setOrganization] = React.useState("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};
