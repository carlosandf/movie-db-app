export const saveOnLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  const item = window.localStorage.getItem(key);
  return item;
};

export const removeFromLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
