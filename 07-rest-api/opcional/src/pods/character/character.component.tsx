import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { linkRoutes } from '#core/router';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onBack: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onBack } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{character.name}</Typography>

      {character.picture && (
        <img src={character.picture} alt={character.name} width={200} />
      )}

      <p>
        <strong>Estado:</strong> {character.status}
      </p>
      <p>
        <strong>Especie:</strong> {character.species}
      </p>
      {character.type && (
        <p>
          <strong>Tipo:</strong> {character.type}
        </p>
      )}
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Origen:</strong>{' '}
        {character.originId ? (
          <Link
            component={RouterLink}
            to={linkRoutes.location(character.originId)}
          >
            {character.origin}
          </Link>
        ) : (
          character.origin
        )}
      </p>
      <p>
        <strong>Ubicación:</strong>{' '}
        {character.locationId ? (
          <Link
            component={RouterLink}
            to={linkRoutes.location(character.locationId)}
          >
            {character.location}
          </Link>
        ) : (
          character.location
        )}
      </p>

      <p>
        <strong>Episodios ({character.episodeIds.length}):</strong>
      </p>
      <div className={classes.episodes}>
        {character.episodeIds.map((episodeId) => (
          <Chip
            key={episodeId}
            label={episodeId}
            component={RouterLink}
            to={linkRoutes.episode(episodeId)}
            clickable
          />
        ))}
      </div>

      <Button variant="outlined" onClick={onBack}>
        Volver
      </Button>
    </div>
  );
};
