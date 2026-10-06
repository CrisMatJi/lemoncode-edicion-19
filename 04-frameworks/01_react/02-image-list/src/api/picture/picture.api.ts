import { Category, PictureInfo } from "./picture.api-model";
import { kitties, puppies } from "./picture.mock-data";

// Simulamos la llamada a una API devolviendo los datos mockeados
export const getPictureCollection = (
  category: Category
): Promise<PictureInfo[]> =>
  Promise.resolve(category === "kitties" ? kitties : puppies);

export const getAllPictures = (): Promise<PictureInfo[]> =>
  Promise.resolve([...kitties, ...puppies]);
