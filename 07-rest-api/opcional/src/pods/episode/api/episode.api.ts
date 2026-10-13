import axios from 'axios';
import { Episode } from './episode.api-model';

const episodeUrl = 'https://rickandmortyapi.com/api/episode';

export const getEpisode = async (id: string): Promise<Episode> => {
  const { data } = await axios.get<Episode>(`${episodeUrl}/${id}`);
  return data;
};
