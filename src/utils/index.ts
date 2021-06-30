import React, { useEffect, useState } from "react";

export const isFalsy = (val: number) => !val && val !== 0;

export const clearObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const val = result[key];
    if (isFalsy(val)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useDidMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(val: V, timeout?: number) => {
  const [debounceVal, setDebounceVal] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceVal(val), timeout);
    return () => clearTimeout(timer);
  }, [val, timeout]);
  return debounceVal;
};
