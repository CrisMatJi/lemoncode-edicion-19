"use client";
import { useState } from "react";
import { House } from "./house-list.vm";
import { HouseItem } from "./components/house-item.component";
import classes from "./house-list.module.css";

interface Props {
  houseList: House[];
}

export const HouseList = ({ houseList }: Props) => {
  const [search, setSearch] = useState("");

  const filteredHouses = houseList.filter((house) =>
    `${house.name} ${house.location}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        className={classes.search}
        placeholder="Buscar por nombre o ubicación..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {filteredHouses.length === 0 && <p>No hay casas que coincidan.</p>}

      <ul className={classes.list}>
        {filteredHouses.map((house) => (
          <li key={house.id}>
            <HouseItem house={house} />
          </li>
        ))}
      </ul>
    </>
  );
};
