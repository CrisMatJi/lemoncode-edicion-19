import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { linkRoutes } from '#core/router';
import { Episode } from './episode.vm';
import * as classes from './episode.styles';

interface Props {
  episode: Episode;
  onBack: () => void;
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode, onBack } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        {episode.code} - {episode.name}
      </Typography>
      <p>
        <strong>Fecha de emisión:</strong> {episode.airDate}
      </p>
      <p>
        <strong>Personajes ({episode.characterIds.length}):</strong>
      </p>
      <div className={classes.chips}>
        {episode.characterIds.map((characterId) => (
          <Chip
            key={characterId}
            label={characterId}
            component={RouterLink}
            to={linkRoutes.character(characterId)}
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
