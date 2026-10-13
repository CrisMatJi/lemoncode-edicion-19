import { getIdFromUrl } from '#common/helpers';
import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin.name,
  // si el origen es "unknown" la url viene vacía
  originId: getIdFromUrl(character.origin.url),
  location: character.location.name,
  locationId: getIdFromUrl(character.location.url),
  picture: character.image,
  episodeIds: character.episode.map(getIdFromUrl),
});
