import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;
  totalPages: number;
  search: string;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onShowDetail: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    page,
    totalPages,
    search,
    onPageChange,
    onSearchChange,
    onShowDetail,
  } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">Personajes</Typography>

      <TextField
        label="Buscar por nombre"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {characterCollection.length === 0 && (
        <Typography>No hay personajes con ese nombre</Typography>
      )}

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onShowDetail={onShowDetail} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          className={classes.pagination}
        />
      )}
    </div>
  );
};
