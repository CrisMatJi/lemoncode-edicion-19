// la api enlaza recursos con urls tipo .../location/3, nos quedamos con el id
export const getIdFromUrl = (url: string): string =>
  url ? url.split('/').pop() : '';
