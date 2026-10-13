import axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = '/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${characterUrl}/${id}`);
  return data;
};

// PUT parcial: el server mezcla lo que le llega con lo que ya tenía
export const updateCharacter = async (
  character: Partial<Character>
): Promise<boolean> => {
  await axios.put(`${characterUrl}/${character.id}`, character);
  return true;
};
