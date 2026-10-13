import { getIdFromUrl } from '#common/helpers';
import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = (
  episode: apiModel.Episode
): viewModel.Episode => ({
  id: episode.id.toString(),
  name: episode.name,
  airDate: episode.air_date,
  code: episode.episode,
  characterIds: episode.characters.map(getIdFromUrl),
});
