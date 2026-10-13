import axios from 'axios';
import {
  CharacterCollectionResponseApi,
  CharacterEntityApi,
} from './character-collection.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<CharacterCollectionResponseApi>(
    characterUrl
  );
  // la api devuelve { info, results }, solo nos interesa results
  return data.results;
};
