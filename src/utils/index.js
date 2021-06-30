import React, { useEffect, useState } from "react";

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

export const useDidMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (val, timeout) => {
  const [debounceVal, setDebounceVal] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceVal(val), timeout);
    return () => clearTimeout(timer);
  }, [val, timeout]);
  return debounceVal;
};
