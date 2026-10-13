export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterCollectionResponseApi {
  info: {
    count: number;
    pages: number;
  };
  results: CharacterEntityApi[];
}
