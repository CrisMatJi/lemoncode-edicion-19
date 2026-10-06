import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { CharacterDetailContainer } from "@/pods/character-detail";

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout>
      <CharacterDetailContainer id={id} />
    </AppLayout>
  );
};
