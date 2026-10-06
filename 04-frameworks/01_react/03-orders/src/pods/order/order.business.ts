import { OrderLine } from "./order.vm";

// Suma de los importes de todas las líneas
export const calculateTotal = (lines: OrderLine[]): number =>
  lines.reduce((total, line) => total + line.amount, 0);

// Porcentaje de líneas validadas, redondeado
export const calculateStatus = (lines: OrderLine[]): number => {
  if (lines.length === 0) {
    return 0;
  }
  const validatedLines = lines.filter((line) => line.validated).length;
  return Math.round((validatedLines / lines.length) * 100);
};
