import * as vm from "./character-detail.vm";
import * as api from "./character-detail.api-model";

export const mapCharacterDetailFromApiToVm = (
  character: api.CharacterDetailApi
): vm.CharacterDetail => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  image: character.image,
  origin: character.origin.name,
  location: character.location.name,
  // La API devuelve un array de urls, solo mostramos cuántos episodios son
  episodes: character.episode.length,
});
