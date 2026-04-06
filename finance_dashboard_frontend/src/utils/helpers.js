export const debounce = (func, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};