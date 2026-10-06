export interface CharacterDetail {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: string;
  location: string;
  episodes: number;
}

export const createDefaultCharacterDetail = (): CharacterDetail => ({
  id: "",
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "",
  origin: "",
  location: "",
  episodes: 0,
});
