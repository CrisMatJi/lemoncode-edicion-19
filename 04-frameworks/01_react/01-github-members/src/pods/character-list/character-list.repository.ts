import { CharacterCollection } from "./character-list.vm";
import { getCharacterCollection as getCharacterCollectionApi } from "./character-list.api";
import { mapCharacterCollectionFromApiToVm } from "./character-list.mapper";

export const getCharacterCollection = (
  name: string,
  page: number
): Promise<CharacterCollection> =>
  getCharacterCollectionApi(name, page).then(mapCharacterCollectionFromApiToVm);
