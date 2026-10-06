export interface CharacterApi {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface CharacterCollectionApi {
  info: {
    count: number;
    pages: number;
  };
  results: CharacterApi[];
}
