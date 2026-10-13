import axios from 'axios';
import { Location } from './location.api-model';

const locationUrl = 'https://rickandmortyapi.com/api/location';

export const getLocation = async (id: string): Promise<Location> => {
  const { data } = await axios.get<Location>(`${locationUrl}/${id}`);
  return data;
};
