import { Order } from "./order.vm";
import { mockOrder } from "./order.mock-data";

// Simulamos la llamada al servidor con datos mockeados
export const getOrder = (): Promise<Order> => Promise.resolve(mockOrder);
