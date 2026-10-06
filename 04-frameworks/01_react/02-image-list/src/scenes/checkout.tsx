import React from "react";
import { AppLayout } from "@/layouts";
import { CheckoutContainer } from "@/pods/checkout";

export const CheckoutPage: React.FC = () => {
  return (
    <AppLayout>
      <CheckoutContainer />
    </AppLayout>
  );
};
