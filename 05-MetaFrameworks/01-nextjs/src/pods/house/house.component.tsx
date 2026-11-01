import Image from "next/image";
import { House as HouseVm } from "./house.vm";
import { BookButton } from "./components/book-button.component";
import classes from "./house.module.css";

interface Props {
  house: HouseVm;
}

export const House = ({ house }: Props) => (
  <article>
    <div className={classes.header}>
      <h2 className={classes.title}>{house.name}</h2>
      <p className={classes.price}>{house.price}€ / noche</p>
    </div>

    <div className={classes.content}>
      <Image
        className={classes.image}
        src={house.imageUrl}
        alt={house.name}
        width={700}
        height={500}
        priority
      />

      <div className={classes.info}>
        <h3>Descripción</h3>
        <p>{house.description}</p>

        <h3>Dirección</h3>
        <p>{house.address}</p>

        <p>
          <strong>Habitaciones:</strong> {house.bedrooms}
        </p>
        <p>
          <strong>Camas:</strong> {house.beds}
        </p>
        <p>
          <strong>Baños:</strong> {house.bathrooms}
        </p>
        <p>
          <strong>Servicios:</strong> {house.amenities.join(", ")}
        </p>

        <BookButton />
      </div>
    </div>

    <h3 className={classes.reviewsTitle}>Reviews</h3>
    <ul className={classes.reviews}>
      {house.reviews.map((review) => (
        <li key={review.id} className={classes.review}>
          <p>Fecha: {review.date}</p>
          <p>
            {review.author}: {review.comment}
          </p>
        </li>
      ))}
    </ul>
  </article>
);
