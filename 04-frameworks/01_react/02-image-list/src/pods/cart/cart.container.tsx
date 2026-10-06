import React from "react";
import { CartContext } from "@/core/cart";
import { PictureInfo, getAllPictures } from "@/api/picture";
import { CartComponent } from "./cart.component";

export const CartContainer: React.FC = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const [allPictures, setAllPictures] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getAllPictures().then(setAllPictures);
  }, []);

  // Del listado completo nos quedamos con las imágenes del carrito
  const cartPictures = allPictures.filter((picture) =>
    cart.includes(picture.id)
  );

  // Al quitar una imagen, la página activa se desmarca sola con su useEffect
  const handleRemove = (id: string) => {
    setCart(cart.filter((item) => item !== id));
  };

  return (
    <CartComponent
      pictures={cartPictures}
      onRemove={handleRemove}
      onEmpty={() => setCart([])}
    />
  );
};
