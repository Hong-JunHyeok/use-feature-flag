import { useContext, useState } from "react";
import { AnyType } from "../types";
import { isEmpty } from "../utils";

export const usePreventNestedContext = (context: React.Context<AnyType>) => {
  const contextValue = useContext(context);

  if (!isEmpty(contextValue)) {
    throw new Error(
      `${context.displayName} is already mounted. Nested providers are not allowed.`
    );
  }
};

export const useTypeSafeContext = <T = unknown>(context: React.Context<T>) => {
  const contextValue = useContext(context);

  if (contextValue === undefined) {
    throw new Error(
      `Context not found. Make sure your component is wrapped in ${context.displayName}.`
    );
  }

  return contextValue;
};

export const useLocalStorage = <T = unknown>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  const setValue = (value: T | ((value: T) => T)) => {
    const nextValue = value instanceof Function ? value(storedValue) : value;
    try {
      setStoredValue(nextValue);
      window.localStorage.setItem(key, JSON.stringify(nextValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
