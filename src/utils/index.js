export const isFalsy = (val) => !val && val !== 0;

export const clearObject = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const val = result[key];
    if (isFalsy(val)) {
      delete result[key];
    }
  });
  return result;
};
