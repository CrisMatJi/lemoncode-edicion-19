import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Order, OrderHeader } from "./order.vm";
import {
  OrderHeaderInfoComponent,
  OrderSummaryComponent,
  OrderLinesComponent,
} from "./components";

interface Props {
  order: Order;
  total: number;
  status: number;
  selectedIds: string[];
  onHeaderChange: (field: keyof OrderHeader, value: string) => void;
  onSend: () => void;
  onToggleSelect: (id: string) => void;
  onValidate: () => void;
  onInvalidate: () => void;
  onAmountChange: (id: string, amount: number) => void;
}

export const OrderComponent: React.FC<Props> = (props) => {
  const {
    order,
    total,
    status,
    selectedIds,
    onHeaderChange,
    onSend,
    onToggleSelect,
    onValidate,
    onInvalidate,
    onAmountChange,
  } = props;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Pedido a proveedor
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
        <OrderHeaderInfoComponent
          header={order.header}
          onChange={onHeaderChange}
        />
        <OrderSummaryComponent total={total} status={status} onSend={onSend} />
      </Paper>
      <OrderLinesComponent
        lines={order.lines}
        selectedIds={selectedIds}
        onToggleSelect={onToggleSelect}
        onValidate={onValidate}
        onInvalidate={onInvalidate}
        onAmountChange={onAmountChange}
      />
    </>
  );
};
