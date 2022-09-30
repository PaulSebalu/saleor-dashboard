import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  {},
  // theme => ({
  // }),
  { name: "OrderGrantRefund" },
);

export const useRefundCardStyles = makeStyles(
  theme => ({
    refundCardHeader: {
      paddingBottom: 0,
    },
    suggestedValue: {
      display: "flex",
      alignItems: "baseline",
      gap: theme.spacing(1),
      flexWrap: "wrap",
      marginBottom: theme.spacing(1),
    },
    totalMoney: {
      fontWeight: 600,
    },
    applyButton: {
      height: "auto",
      padding: 0,
    },
    shippingCostLine: {
      display: "flex",
      gap: theme.spacing(1),
      marginBottom: theme.spacing(1),
      "& .MuiCheckbox-root": {
        padding: 0,
      },
    },
    submitLine: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginTop: theme.spacing(1.5),
      gap: theme.spacing(1),
      "& > span": {
        color: theme.palette.saleor.warning.dark,
      },
      "& button": {
        // when line overflows
        marginLeft: "auto",
      },
    },
  }),
  { name: "RefundCard" },
);
