export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  originId: string;
  location: string;
  locationId: string;
  picture: string;
  episodeIds: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  originId: '',
  location: '',
  locationId: '',
  picture: '',
  episodeIds: [],
});
