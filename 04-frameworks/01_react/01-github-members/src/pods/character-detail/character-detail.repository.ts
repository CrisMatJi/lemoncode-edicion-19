import { CharacterDetail } from "./character-detail.vm";
import { getCharacterDetail as getCharacterDetailApi } from "./character-detail.api";
import { mapCharacterDetailFromApiToVm } from "./character-detail.mapper";

export const getCharacterDetail = (id: string): Promise<CharacterDetail> =>
  getCharacterDetailApi(id).then(mapCharacterDetailFromApiToVm);
