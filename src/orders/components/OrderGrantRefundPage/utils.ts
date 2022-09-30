import { OrderDetailsFragment } from "@saleor/graphql";
import currency from "currency.js";

import { GrantRefundState } from "./reducer";

export const calculateTotalPrice = (
  state: GrantRefundState,
  order: OrderDetailsFragment,
): number => {
  const shippingCost = order?.shippingPrice?.gross?.amount ?? 0;
  const lines = [...state.lines.values()];

  const linesValue = lines.reduce((total, line) => {
    const price = currency(line.unitPrice).multiply(line.selectedQuantity);
    return total.add(price.value);
  }, currency(0));

  if (state.refundShipping) {
    return linesValue.add(currency(shippingCost)).value;
  }

  return linesValue.value;
};
