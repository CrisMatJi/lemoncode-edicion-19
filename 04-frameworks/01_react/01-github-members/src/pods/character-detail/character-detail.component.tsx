import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { routes } from "@/core";
import { CharacterDetail } from "./character-detail.vm";

interface Props {
  character: CharacterDetail;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <Card sx={{ display: "flex" }}>
      {character.image && (
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{ width: 250 }}
        />
      )}
      <div>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {character.name}
          </Typography>
          <Typography>Estado: {character.status}</Typography>
          <Typography>Especie: {character.species}</Typography>
          <Typography>Género: {character.gender}</Typography>
          <Typography>Origen: {character.origin}</Typography>
          <Typography>Ubicación: {character.location}</Typography>
          <Typography>Episodios: {character.episodes}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={routes.characters}>
            Volver al listado
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
