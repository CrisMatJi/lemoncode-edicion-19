import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
  characters: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  details: "/detail/:id",
  characters: "/characters",
  characterDetail: "/characters/:id",
};

interface Routes extends Omit<SwitchRoutes, "details" | "characterDetail"> {
  details: (id: string) => string;
  characterDetail: (id: string) => string;
}

// Las rutas con parámetro usan generatePath para montar la url con el id
export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
