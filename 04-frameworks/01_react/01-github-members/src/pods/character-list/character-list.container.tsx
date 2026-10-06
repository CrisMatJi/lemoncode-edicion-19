import React from "react";
import { useDebounce } from "@/common/hooks";
import { CharacterListComponent } from "./character-list.component";
import { CharacterCollection } from "./character-list.vm";
import { getCharacterCollection } from "./character-list.repository";

export const CharacterListContainer: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [collection, setCollection] = React.useState<CharacterCollection>({
    characters: [],
    totalPages: 0,
  });
  const debouncedSearch = useDebounce(search);

  // Buscamos con el texto ya debounceado o al cambiar de página
  React.useEffect(() => {
    getCharacterCollection(debouncedSearch, page).then(setCollection);
  }, [debouncedSearch, page]);

  // Al cambiar el texto de búsqueda volvemos a la página 1
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <CharacterListComponent
      characters={collection.characters}
      totalPages={collection.totalPages}
      page={page}
      search={search}
      onSearchChange={handleSearchChange}
      onPageChange={setPage}
    />
  );
};
