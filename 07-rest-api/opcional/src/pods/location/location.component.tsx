import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { linkRoutes } from '#core/router';
import { Location } from './location.vm';
import * as classes from './location.styles';

interface Props {
  location: Location;
  onBack: () => void;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { location, onBack } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{location.name}</Typography>
      <p>
        <strong>Tipo:</strong> {location.type}
      </p>
      <p>
        <strong>Dimensión:</strong> {location.dimension}
      </p>
      <p>
        <strong>Residentes ({location.residentIds.length}):</strong>
      </p>
      <div className={classes.chips}>
        {location.residentIds.map((residentId) => (
          <Chip
            key={residentId}
            label={residentId}
            component={RouterLink}
            to={linkRoutes.character(residentId)}
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
