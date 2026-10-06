import { Order } from "./order.vm";

export const mockOrder: Order = {
  header: {
    number: "PED-0001",
    supplier: "Suministros Industriales S.L.",
    date: "2026-10-06",
  },
  lines: [
    { id: "1", description: "Reactivos maquinaria", amount: 2345, validated: true },
    { id: "2", description: "Recambios impresión", amount: 135, validated: false },
    { id: "3", description: "Soportes plataforma", amount: 540, validated: false },
  ],
};
