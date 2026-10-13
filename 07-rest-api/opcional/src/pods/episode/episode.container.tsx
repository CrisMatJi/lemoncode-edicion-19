import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { EpisodeComponent } from './episode.component';

export const EpisodeContainer: React.FunctionComponent = () => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    api
      .getEpisode(id)
      .then((apiEpisode) => setEpisode(mapEpisodeFromApiToVm(apiEpisode)));
  }, [id]);

  return <EpisodeComponent episode={episode} onBack={() => navigate(-1)} />;
};
