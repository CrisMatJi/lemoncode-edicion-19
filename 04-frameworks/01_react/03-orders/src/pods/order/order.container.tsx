import React from "react";
import { OrderHeader, createEmptyOrder } from "./order.vm";
import { orderReducer } from "./order.reducer";
import { getOrder } from "./order.api";
import { calculateStatus, calculateTotal } from "./order.business";
import { OrderComponent } from "./order.component";

export const OrderContainer: React.FC = () => {
  const [order, dispatch] = React.useReducer(orderReducer, createEmptyOrder());
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  // Cargamos el pedido al montar el componente
  React.useEffect(() => {
    getOrder().then((data) => dispatch({ type: "SET_ORDER", payload: data }));
  }, []);

  // Campos calculados a partir de las líneas del pedido
  const total = calculateTotal(order.lines);
  const status = calculateStatus(order.lines);

  // useCallback para que el React.memo de la cabecera no se rompa en cada render
  const handleHeaderChange = React.useCallback(
    (field: keyof OrderHeader, value: string) =>
      dispatch({ type: "UPDATE_HEADER", payload: { field, value } }),
    []
  );

  // Añade o quita la línea de la lista de seleccionadas
  const handleToggleSelect = (id: string) => {
    setSelectedIds(
      selectedIds.includes(id)
        ? selectedIds.filter((item) => item !== id)
        : [...selectedIds, id]
    );
  };

  // Después de validar o invalidar limpiamos la selección
  const updateSelectedLines = (validated: boolean) => {
    dispatch({ type: "SET_VALIDATED", payload: { ids: selectedIds, validated } });
    setSelectedIds([]);
  };

  const handleAmountChange = (id: string, amount: number) => {
    dispatch({ type: "UPDATE_AMOUNT", payload: { id, amount } });
  };

  const handleSend = () => {
    alert(`Pedido ${order.header.number} enviado. Importe: ${total.toFixed(2)} €`);
  };

  return (
    <OrderComponent
      order={order}
      total={total}
      status={status}
      selectedIds={selectedIds}
      onHeaderChange={handleHeaderChange}
      onSend={handleSend}
      onToggleSelect={handleToggleSelect}
      onValidate={() => updateSelectedLines(true)}
      onInvalidate={() => updateSelectedLines(false)}
      onAmountChange={handleAmountChange}
    />
  );
};
