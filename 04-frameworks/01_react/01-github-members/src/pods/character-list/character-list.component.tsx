import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import { routes } from "@/core";
import { Character } from "./character-list.vm";

interface Props {
  characters: Character[];
  totalPages: number;
  page: number;
  search: string;
  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
}

export const CharacterListComponent: React.FC<Props> = (props) => {
  const { characters, totalPages, page, search, onSearchChange, onPageChange } =
    props;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Personajes de Rick & Morty
      </Typography>
      <TextField
        label="Buscar personaje"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {characters.length === 0 && (
        <Typography sx={{ mt: 2 }}>No se han encontrado personajes</Typography>
      )}
      <List>
        {characters.map((character) => (
          <ListItemButton
            key={character.id}
            component={Link}
            to={routes.characterDetail(character.id)}
          >
            <ListItemAvatar>
              <Avatar src={character.image} />
            </ListItemAvatar>
            <ListItemText
              primary={character.name}
              secondary={`${character.species} · ${character.status}`}
            />
          </ListItemButton>
        ))}
      </List>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      )}
    </>
  );
};
