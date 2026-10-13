import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useDebounce } from '#common/hooks';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, totalPages, loadCharacterCollection } =
    useCharacterCollection();
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page, debouncedSearch);
  }, [page, debouncedSearch]);

  // al buscar volvemos a la primera página
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleShowDetail = (id: string) => {
    navigate(linkRoutes.character(id));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      page={page}
      totalPages={totalPages}
      search={search}
      onPageChange={setPage}
      onSearchChange={handleSearchChange}
      onShowDetail={handleShowDetail}
    />
  );
};
