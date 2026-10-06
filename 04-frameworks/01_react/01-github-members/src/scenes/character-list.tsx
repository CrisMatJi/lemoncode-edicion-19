import React from "react";
import { AppLayout } from "@/layouts";
import { CharacterListContainer } from "@/pods/character-list";

export const CharacterListPage: React.FC = () => {
  return (
    <AppLayout>
      <CharacterListContainer />
    </AppLayout>
  );
};
