import * as vm from "./character-list.vm";
import * as api from "./character-list.api-model";

export const mapCharacterFromApiToVm = (
  character: api.CharacterApi
): vm.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});

// Nos quedamos con los personajes y el total de páginas para la paginación
export const mapCharacterCollectionFromApiToVm = (
  collection: api.CharacterCollectionApi
): vm.CharacterCollection => ({
  characters: collection.results.map(mapCharacterFromApiToVm),
  totalPages: collection.info.pages,
});
