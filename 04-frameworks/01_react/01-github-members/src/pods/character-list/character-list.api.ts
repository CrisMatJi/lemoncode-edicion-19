import { CharacterCollectionApi } from "./character-list.api-model";

export const getCharacterCollection = (
  name: string,
  page: number
): Promise<CharacterCollectionApi> =>
  fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(name)}`
  ).then((response) => {
    // La API devuelve 404 cuando la búsqueda no tiene resultados
    if (response.status === 404) {
      return { info: { count: 0, pages: 0 }, results: [] };
    }
    return response.json();
  });
