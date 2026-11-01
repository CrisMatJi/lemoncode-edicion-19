export const ENV = {
  BASE_API_URL: process.env.BASE_API_URL ?? "http://localhost:3001/api",
  BASE_PICTURES_URL: process.env.BASE_PICTURES_URL ?? "http://localhost:3001",
};

export const routes = {
  root: "/",
  house: (id: string) => `/houses/${id}`,
};
