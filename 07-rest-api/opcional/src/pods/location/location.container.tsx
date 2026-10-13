import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyLocation, Location } from './location.vm';
import { mapLocationFromApiToVm } from './location.mappers';
import { LocationComponent } from './location.component';

export const LocationContainer: React.FunctionComponent = () => {
  const [location, setLocation] = React.useState<Location>(
    createEmptyLocation()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .getLocation(id)
      .then((apiLocation) => setLocation(mapLocationFromApiToVm(apiLocation)));
  }, [id]);

  return <LocationComponent location={location} onBack={() => navigate(-1)} />;
};
