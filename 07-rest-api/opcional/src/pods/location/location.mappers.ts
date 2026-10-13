import { getIdFromUrl } from '#common/helpers';
import * as apiModel from './api/location.api-model';
import * as viewModel from './location.vm';

export const mapLocationFromApiToVm = (
  location: apiModel.Location
): viewModel.Location => ({
  id: location.id.toString(),
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residentIds: location.residents.map(getIdFromUrl),
});
