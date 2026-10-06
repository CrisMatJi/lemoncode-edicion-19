import React from "react";
import { AppLayout } from "@/layouts";
import { OrderContainer } from "@/pods/order";

export const OrderPage: React.FC = () => {
  return (
    <AppLayout>
      <OrderContainer />
    </AppLayout>
  );
};
