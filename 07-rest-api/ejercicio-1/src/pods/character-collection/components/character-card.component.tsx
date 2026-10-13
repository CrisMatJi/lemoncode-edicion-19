import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onShowDetail: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onShowDetail } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onShowDetail(character.id)}>
        <CardMedia
          image={character.picture}
          title={character.name}
          className={classes.media}
        />
        <CardHeader
          title={character.name}
          subheader={`${character.species} · ${character.status}`}
        />
      </CardActionArea>
    </Card>
  );
};
