export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN");
};

export const formatMonth = (date) => {
  return new Date(date).toLocaleString("default", {
    month: "short",
    year: "numeric"
  });
};