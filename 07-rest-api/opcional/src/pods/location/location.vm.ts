export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residentIds: string[];
}

export const createEmptyLocation = (): Location => ({
  id: '',
  name: '',
  type: '',
  dimension: '',
  residentIds: [],
});
