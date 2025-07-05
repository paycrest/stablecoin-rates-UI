export const formatAmount = (amount: string | number) => {
  return Number(amount).toLocaleString("en-US");
};
