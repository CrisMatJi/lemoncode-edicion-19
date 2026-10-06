import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PictureInfo } from "@/api/picture";

interface Props {
  pictures: PictureInfo[];
  onRemove: (id: string) => void;
  onEmpty: () => void;
}

export const CartComponent: React.FC<Props> = (props) => {
  const { pictures, onRemove, onEmpty } = props;
  // Estado local para mostrar u ocultar el carrito
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return (
      <Paper square sx={{ p: 1 }}>
        <IconButton onClick={() => setVisible(true)}>
          <Badge badgeContent={pictures.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Paper>
    );
  }

  return (
    <Paper square sx={{ width: 300, p: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <ShoppingCartIcon />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Cart ({pictures.length})
        </Typography>
        <IconButton onClick={() => setVisible(false)}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      {pictures.length === 0 && (
        <Typography sx={{ mt: 2 }} color="text.secondary">
          El carrito está vacío
        </Typography>
      )}
      <List>
        {pictures.map((picture) => (
          <ListItem
            key={picture.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => onRemove(picture.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar variant="rounded" src={picture.picUrl} />
            </ListItemAvatar>
            <ListItemText primary={picture.title} />
          </ListItem>
        ))}
      </List>
      {pictures.length > 0 && (
        <Button fullWidth variant="outlined" color="error" onClick={onEmpty}>
          Vaciar carrito
        </Button>
      )}
    </Paper>
  );
};
