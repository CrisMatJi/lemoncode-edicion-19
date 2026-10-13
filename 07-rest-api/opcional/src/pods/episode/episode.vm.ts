export interface Episode {
  id: string;
  name: string;
  airDate: string;
  code: string;
  characterIds: string[];
}

export const createEmptyEpisode = (): Episode => ({
  id: '',
  name: '',
  airDate: '',
  code: '',
  characterIds: [],
});
