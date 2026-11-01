import Image from "next/image";
import Link from "next/link";
import { routes } from "@/core/constants";
import { House } from "../house-list.vm";
import classes from "./house-item.module.css";

interface Props {
  house: House;
}

export const HouseItem = ({ house }: Props) => (
  <Link href={routes.house(house.id)} className={classes.root}>
    <h2 className={classes.title}>{house.name}</h2>
    <Image
      className={classes.image}
      src={house.imageUrl}
      alt={house.name}
      width={400}
      height={280}
    />
    <p className={classes.info}>
      {house.location} · <strong>{house.price}€ / noche</strong>
    </p>
  </Link>
);
