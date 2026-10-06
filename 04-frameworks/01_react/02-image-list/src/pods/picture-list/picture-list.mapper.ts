import { PictureInfo } from "@/api/picture";
import { PictureVm } from "./picture-list.vm";

// Marcamos como seleccionadas las imágenes que ya están en el carrito
export const mapPictureCollectionToVm = (
  pictures: PictureInfo[],
  cart: string[]
): PictureVm[] =>
  pictures.map((picture) => ({
    ...picture,
    selected: cart.includes(picture.id),
  }));
