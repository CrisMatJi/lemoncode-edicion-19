import React from 'react';

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);
    // si value cambia antes de tiempo se cancela el timeout anterior
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};
