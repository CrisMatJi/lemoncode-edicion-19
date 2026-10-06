import React from "react";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { PictureInfo } from "@/api/picture";

interface Props {
  pictures: PictureInfo[];
  orderSent: boolean;
  onConfirm: () => void;
}

export const CheckoutComponent: React.FC<Props> = (props) => {
  const { pictures, orderSent, onConfirm } = props;

  if (orderSent) {
    return <Alert severity="success">¡Pedido realizado correctamente!</Alert>;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      {pictures.length === 0 ? (
        <Typography color="text.secondary">
          No hay imágenes en el carrito
        </Typography>
      ) : (
        <Paper sx={{ maxWidth: 500, p: 2 }}>
          <List>
            {pictures.map((picture) => (
              <ListItem key={picture.id}>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={picture.picUrl} />
                </ListItemAvatar>
                <ListItemText primary={picture.title} secondary={picture.id} />
              </ListItem>
            ))}
          </List>
          <Button variant="contained" fullWidth onClick={onConfirm}>
            Confirmar pedido ({pictures.length} imágenes)
          </Button>
        </Paper>
      )}
    </>
  );
};
