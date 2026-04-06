export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(amount);
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};