import { ENV } from "@/core/constants";
import * as apiModel from "./api";
import * as viewModel from "./house-list.vm";

const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  name: house.name,
  location: `${house.city}, ${house.country}`,
  price: house.price,
  imageUrl: `${ENV.BASE_PICTURES_URL}${house.image}`,
});

export const mapHouseListFromApiToVm = (
  houseList: apiModel.House[]
): viewModel.House[] => houseList.map(mapHouseFromApiToVm);
