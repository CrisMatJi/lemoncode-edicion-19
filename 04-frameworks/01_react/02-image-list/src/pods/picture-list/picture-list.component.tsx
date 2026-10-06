import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PictureVm } from "./picture-list.vm";

interface Props {
  title: string;
  pictures: PictureVm[];
  onSelect: (id: string, selected: boolean) => void;
}

export const PictureListComponent: React.FC<Props> = (props) => {
  const { title, pictures, onSelect } = props;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {pictures.map((picture) => (
          <Card key={picture.id} sx={{ width: 200 }}>
            <CardMedia
              component="img"
              height="150"
              image={picture.picUrl}
              alt={picture.title}
            />
            <CardContent>
              <Typography>{picture.title}</Typography>
              <FormControlLabel
                label="Buy"
                control={
                  <Checkbox
                    checked={picture.selected}
                    onChange={(e) => onSelect(picture.id, e.target.checked)}
                  />
                }
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
