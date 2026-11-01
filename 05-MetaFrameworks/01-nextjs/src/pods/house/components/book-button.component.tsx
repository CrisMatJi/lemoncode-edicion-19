"use client";
import { useState } from "react";
import classes from "./book-button.module.css";

export const BookButton = () => {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={classes.button}
        onClick={() => setIsBooked(!isBooked)}
      >
        {isBooked ? "Cancelar reserva" : "Reservar"}
      </button>
      {isBooked && <p className={classes.message}>¡Reserva realizada!</p>}
    </div>
  );
};
