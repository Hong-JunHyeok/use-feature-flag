import { useState } from "react";

export const useToggleState = (initialValue: boolean) => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle, setState] as const;
};
