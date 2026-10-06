import { CharacterDetailApi } from "./character-detail.api-model";

export const getCharacterDetail = (id: string): Promise<CharacterDetailApi> =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) =>
    response.json()
  );
