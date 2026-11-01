import { ENV } from "@/core/constants";
import { House } from "./house-list.api-model";

export const getHouseList = async (options?: RequestInit): Promise<House[]> =>
  fetch(`${ENV.BASE_API_URL}/houses`, options).then((response) =>
    response.json()
  );
