import React from "react";

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  // Solo actualiza el valor cuando se deja de escribir durante 'delay' ms
  React.useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // Si el valor cambia antes de tiempo cancelamos el timeout anterior
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
