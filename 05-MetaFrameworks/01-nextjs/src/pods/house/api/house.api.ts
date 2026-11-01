import { ENV } from "@/core/constants";
import { House } from "./house.api-model";

export const getHouse = async (
  id: string,
  options?: RequestInit
): Promise<House | null> =>
  fetch(`${ENV.BASE_API_URL}/houses/${id}`, options)
    .then((response) => response.json())
    .catch(() => null);
