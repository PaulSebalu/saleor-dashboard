import { WindowTitle } from "@saleor/components/WindowTitle";
import { useOrderDetailsGrantRefundQuery } from "@saleor/graphql";
import OrderGrantRefundPage from "@saleor/orders/components/OrderGrantRefundPage";
import React from "react";
import { useIntl } from "react-intl";

import { orderGrantRefundMessages } from "./messages";

interface OrderGrantRefundProps {
  orderId: string;
}

const OrderGrantRefund: React.FC<OrderGrantRefundProps> = ({ orderId }) => {
  const intl = useIntl();

  const { data, loading } = useOrderDetailsGrantRefundQuery({
    displayLoader: true,
    variables: {
      id: orderId,
    },
  });

  return (
    <>
      <WindowTitle
        title={intl.formatMessage(
          data?.order?.number
            ? orderGrantRefundMessages.windowTitle
            : orderGrantRefundMessages.windowTitleMissingId,
          { orderNumber: data?.order?.number },
        )}
      />

      <OrderGrantRefundPage
        order={data?.order}
        loading={loading}
        // TODO: handle form submit
        onSubmit={() => undefined}
      />
    </>
  );
};

OrderGrantRefund.displayName = "OrderGrantRefund";
export default OrderGrantRefund;
