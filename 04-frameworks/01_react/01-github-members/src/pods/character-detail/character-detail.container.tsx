import React from "react";
import {
  CharacterDetail,
  createDefaultCharacterDetail,
} from "./character-detail.vm";
import { CharacterDetailComponent } from "./character-detail.component";
import { getCharacterDetail } from "./character-detail.repository";

interface Props {
  id: string;
}

export const CharacterDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<CharacterDetail>(
    createDefaultCharacterDetail()
  );

  // Cargamos el detalle del personaje seleccionado
  React.useEffect(() => {
    getCharacterDetail(id).then(setCharacter);
  }, [id]);

  return <CharacterDetailComponent character={character} />;
};
