import { useContext, useEffect, useState } from "react";
import { AnyType } from "../types";
import { isEmpty } from "../utils";

export const useToggleState = (initialValue: boolean) => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle, setState] as const;
};

export const usePreventNestedContext = (context: React.Context<AnyType>) => {
  const existContext = useContext(context);

  useEffect(() => {
    if (!isEmpty(existContext)) {
      throw new Error(
        `FeatureFlagProvider is already mounted. Nested providers are not allowed.`
      );
    }
  }, [existContext]);
};
