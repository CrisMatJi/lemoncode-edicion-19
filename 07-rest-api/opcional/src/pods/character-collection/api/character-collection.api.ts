import axios from 'axios';
import { CharacterCollectionResponseApi } from './character-collection.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (
  page: number,
  name: string
): Promise<CharacterCollectionResponseApi> => {
  try {
    const { data } = await axios.get<CharacterCollectionResponseApi>(
      characterUrl,
      { params: { page, name } }
    );
    return data;
  } catch (error) {
    // si la búsqueda no encuentra nada la api responde 404
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { info: { count: 0, pages: 0 }, results: [] };
    }
    throw error;
  }
};
