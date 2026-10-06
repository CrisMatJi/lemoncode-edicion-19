import { Order, OrderHeader } from "./order.vm";

export type OrderAction =
  | { type: "SET_ORDER"; payload: Order }
  | { type: "UPDATE_HEADER"; payload: { field: keyof OrderHeader; value: string } }
  | { type: "SET_VALIDATED"; payload: { ids: string[]; validated: boolean } }
  | { type: "UPDATE_AMOUNT"; payload: { id: string; amount: number } };

export const orderReducer = (state: Order, action: OrderAction): Order => {
  switch (action.type) {
    // Carga inicial del pedido
    case "SET_ORDER":
      return action.payload;
    // Actualiza un campo de la cabecera (número, proveedor o fecha)
    case "UPDATE_HEADER":
      return {
        ...state,
        header: { ...state.header, [action.payload.field]: action.payload.value },
      };
    // Valida o invalida las líneas seleccionadas
    case "SET_VALIDATED":
      return {
        ...state,
        lines: state.lines.map((line) =>
          action.payload.ids.includes(line.id)
            ? { ...line, validated: action.payload.validated }
            : line
        ),
      };
    // Cambia el importe de una línea
    case "UPDATE_AMOUNT":
      return {
        ...state,
        lines: state.lines.map((line) =>
          line.id === action.payload.id
            ? { ...line, amount: action.payload.amount }
            : line
        ),
      };
    default:
      return state;
  }
};
