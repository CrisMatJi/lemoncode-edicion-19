import React from "react";

interface Context {
  cart: string[];
  setCart: (cart: string[]) => void;
}

export const CartContext = React.createContext<Context>({
  cart: [],
  setCart: () => console.warn("Has olvidado añadir el CartProvider"),
});

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // En el carrito solo guardamos los ids de las imágenes seleccionadas
  const [cart, setCart] = React.useState<string[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
