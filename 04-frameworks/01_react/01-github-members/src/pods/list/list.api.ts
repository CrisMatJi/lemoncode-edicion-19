import { MemberEntityApi } from "./list.api-model";

export const getMemberCollection = (
  organization: string
): Promise<MemberEntityApi[]> =>
  fetch(`https://api.github.com/orgs/${organization}/members?per_page=100`).then(
    (response) => {
      // Si la organización no existe la API devuelve un error
      if (!response.ok) {
        throw new Error(`Organization ${organization} not found`);
      }
      return response.json();
    }
  );
