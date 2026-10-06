import React from "react";
import { CartContext } from "@/core/cart";
import { Category, PictureInfo, getPictureCollection } from "@/api/picture";
import { PictureListComponent } from "./picture-list.component";
import { PictureVm } from "./picture-list.vm";
import { mapPictureCollectionToVm } from "./picture-list.mapper";

interface Props {
  category: Category;
}

export const PictureListContainer: React.FC<Props> = (props) => {
  const { category } = props;
  const { cart, setCart } = React.useContext(CartContext);
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);
  const [pictureList, setPictureList] = React.useState<PictureVm[]>([]);

  React.useEffect(() => {
    // Cargamos las imágenes de la categoría
    getPictureCollection(category).then(setPictures);
  }, [category]);

  // Escucha el carrito para desmarcar lo que se borre desde allí
  React.useEffect(() => {
    setPictureList(mapPictureCollectionToVm(pictures, cart));
  }, [pictures, cart]);

  // Al marcar o desmarcar actualizamos la página y el carrito del contexto
  const handleSelect = (id: string, selected: boolean) => {
    setPictureList(
      pictureList.map((picture) =>
        picture.id === id ? { ...picture, selected } : picture
      )
    );
    setCart(selected ? [...cart, id] : cart.filter((item) => item !== id));
  };

  return (
    <PictureListComponent
      title={category === "kitties" ? "Kitties" : "Puppies"}
      pictures={pictureList}
      onSelect={handleSelect}
    />
  );
};
