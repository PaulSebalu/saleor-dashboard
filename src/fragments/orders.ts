import { gql } from "@apollo/client";

export const fragmentOrderEvent = gql`
  fragment OrderEvent on OrderEvent {
    id
    amount
    shippingCostsIncluded
    date
    email
    emailType
    invoiceNumber
    discount {
      valueType
      value
      reason
      amount {
        amount
        currency
      }
      oldValueType
      oldValue
      oldAmount {
        amount
        currency
      }
    }
    relatedOrder {
      id
      number
    }
    message
    quantity
    transactionReference
    type
    user {
      id
      email
      firstName
      lastName
    }
    app {
      id
      name
      appUrl
    }
    lines {
      quantity
      itemName
      discount {
        valueType
        value
        reason
        amount {
          amount
          currency
        }
        oldValueType
        oldValue
        oldAmount {
          amount
          currency
        }
      }
      orderLine {
        id
        productName
        variantName
      }
    }
  }
`;

export const fragmentOrderLine = gql`
  fragment OrderLine on OrderLine {
    id
    isShippingRequired
    allocations {
      id
      quantity
      warehouse {
        id
        name
      }
    }
    variant {
      id
      quantityAvailable
      preorder {
        endDate
      }
      stocks {
        ...Stock
      }
      product {
        id
        channelListings {
          id
          isPublished
          isAvailableForPurchase
          channel {
            id
          }
        }
      }
    }
    productName
    productSku
    quantity
    quantityFulfilled
    quantityToFulfill
    unitDiscount {
      amount
      currency
    }
    unitDiscountValue
    unitDiscountReason
    unitDiscountType
    undiscountedUnitPrice {
      currency
      gross {
        amount
        currency
      }
      net {
        amount
        currency
      }
    }
    unitPrice {
      gross {
        amount
        currency
      }
      net {
        amount
        currency
      }
    }
    thumbnail {
      url
    }
  }
`;

export const fragmentRefundOrderLine = gql`
  fragment RefundOrderLine on OrderLine {
    id
    productName
    quantity
    unitPrice {
      gross {
        ...Money
      }
    }
    thumbnail(size: 64) {
      url
    }
  }
`;

export const fulfillmentFragment = gql`
  fragment Fulfillment on Fulfillment {
    id
    lines {
      id
      quantity
      orderLine {
        ...OrderLine
      }
    }
    fulfillmentOrder
    status
    trackingNumber
    warehouse {
      id
      name
    }
  }
`;

export const invoiceFragment = gql`
  fragment Invoice on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;

export const transactionEvent = gql`
  fragment TransactionEvent on TransactionEvent {
    id
    reference
    createdAt
    status
    name
  }
`;

export const transactionItemFragment = gql`
  fragment TransactionItem on TransactionItem {
    id
    type
    reference
    actions
    events {
      ...TransactionEvent
    }
    refundedAmount {
      ...Money
    }
    chargedAmount {
      ...Money
    }
    authorizedAmount {
      ...Money
    }
  }
`;

export const fragmentPayment = gql`
  fragment OrderPayment on Payment {
    id
    isActive
    actions
    gateway
    paymentMethodType
    availableCaptureAmount {
      ...Money
    }
    capturedAmount {
      ...Money
    }
    total {
      ...Money
    }
    modified
    transactions {
      id
      token
      created
      kind
      isSuccess
    }
  }
`;

export const fragmentOrderGiftcard = gql`
  fragment OrderGiftCard on GiftCard {
    id
    last4CodeChars
    events {
      id
      type
      orderId
      date
      balance {
        initialBalance {
          ...Money
        }
        currentBalance {
          ...Money
        }
        oldInitialBalance {
          ...Money
        }
        oldCurrentBalance {
          ...Money
        }
      }
    }
  }
`;

export const fragmentOrderGrantedRefunds = gql`
  fragment OrderGrantedRefund on OrderGrantedRefund {
    createdAt
    amount {
      currency
      amount
    }
    reason
    user {
      email
      avatar {
        url
        alt
      }
    }
    app {
      id
      name
    }
  }
`;

export const fragmentOrderDetails = gql`
  fragment OrderDetails on Order {
    id
    token
    ...Metadata
    billingAddress {
      ...Address
    }
    transactions {
      ...TransactionItem
    }
    payments {
      ...OrderPayment
    }
    giftCards {
      ...OrderGiftCard
    }
    grantedRefunds {
      ...OrderGrantedRefund
    }
    isShippingRequired
    canFinalize
    created
    customerNote
    discounts {
      id
      type
      calculationMode: valueType
      value
      reason
      amount {
        ...Money
      }
    }
    events {
      ...OrderEvent
    }
    fulfillments {
      ...Fulfillment
    }
    lines {
      ...OrderLine
    }
    number
    isPaid
    paymentStatus
    shippingAddress {
      ...Address
    }
    deliveryMethod {
      __typename
      ... on ShippingMethod {
        id
      }
      ... on Warehouse {
        id
        clickAndCollectOption
      }
    }
    shippingMethod {
      id
    }
    shippingMethodName
    collectionPointName
    shippingPrice {
      gross {
        amount
        currency
      }
    }
    status
    subtotal {
      gross {
        ...Money
      }
      net {
        ...Money
      }
    }
    total {
      gross {
        ...Money
      }
      net {
        ...Money
      }
      tax {
        ...Money
      }
    }
    actions
    totalAuthorized {
      ...Money
    }
    totalCaptured {
      ...Money
    }
    undiscountedTotal {
      net {
        ...Money
      }
      gross {
        ...Money
      }
    }
    user {
      id
      email
    }
    userEmail
    shippingMethods {
      id
      name
      price {
        ...Money
      }
      active
      message
    }
    invoices {
      ...Invoice
    }
    channel {
      isActive
      id
      name
      currencyCode
      slug
      defaultCountry {
        code
      }
    }
    isPaid
  }
`;

export const fragmentOrderSettings = gql`
  fragment OrderSettings on OrderSettings {
    automaticallyConfirmAllNewOrders
    automaticallyFulfillNonShippableGiftCard
  }
`;

export const fragmentShopOrderSettings = gql`
  fragment ShopOrderSettings on Shop {
    fulfillmentAutoApprove
    fulfillmentAllowUnpaid
  }
`;

export const fragmentOrderFulfillLine = gql`
  fragment OrderFulfillLine on OrderLine {
    id
    isShippingRequired
    productName
    quantity
    allocations {
      id
      quantity
      warehouse {
        id
        name
      }
    }
    quantityFulfilled
    quantityToFulfill
    variant {
      id
      name
      sku
      preorder {
        endDate
      }
      attributes {
        values {
          id
          name
        }
      }
      stocks {
        ...Stock
      }
      trackInventory
    }
    thumbnail(size: 64) {
      url
    }
  }
`;

export const fragmentOrderLineStockData = gql`
  fragment OrderLineStockData on OrderLine {
    id
    allocations {
      quantity
      warehouse {
        id
      }
    }
    quantity
    quantityToFulfill
    variant {
      stocks {
        ...Stock
      }
    }
  }
`;
