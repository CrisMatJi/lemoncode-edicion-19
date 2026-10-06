import React from "react";
import { CartContext } from "@/core/cart";
import { PictureInfo, getAllPictures } from "@/api/picture";
import { CheckoutComponent } from "./checkout.component";

export const CheckoutContainer: React.FC = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const [allPictures, setAllPictures] = React.useState<PictureInfo[]>([]);
  const [orderSent, setOrderSent] = React.useState(false);

  React.useEffect(() => {
    getAllPictures().then(setAllPictures);
  }, []);

  const cartPictures = allPictures.filter((picture) =>
    cart.includes(picture.id)
  );

  // Al confirmar el pedido vaciamos el carrito y mostramos el mensaje
  const handleConfirm = () => {
    setCart([]);
    setOrderSent(true);
  };

  return (
    <CheckoutComponent
      pictures={cartPictures}
      orderSent={orderSent}
      onConfirm={handleConfirm}
    />
  );
};
