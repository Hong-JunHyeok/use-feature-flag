import { createContext, PropsWithChildren } from "react";
import type { DebugConsoleContextValue } from "../types";
import { useLocalStorage, usePreventNestedContext } from "../hooks/common";
import { STORAGE_KEYS } from "../constants";

export const _DebugConsoleContextValue =
  createContext<DebugConsoleContextValue | null>(null);
export const _DebugConsoleContextSetter = createContext<
  React.Dispatch<React.SetStateAction<DebugConsoleContextValue>> | undefined
>(undefined);

_DebugConsoleContextValue.displayName = "_DebugConsoleContextValue";
_DebugConsoleContextSetter.displayName = "_DebugConsoleContextSetter";

export const DebugConsoleProvider = ({ children }: PropsWithChildren) => {
  const [state, setter] = useLocalStorage<DebugConsoleContextValue>(
    STORAGE_KEYS.DEBUG_CONSOLE,
    {
      open: false,
    }
  );

  usePreventNestedContext(_DebugConsoleContextValue);
  usePreventNestedContext(_DebugConsoleContextSetter);

  return (
    <_DebugConsoleContextSetter.Provider value={setter}>
      <_DebugConsoleContextValue.Provider value={state}>
        {children}
      </_DebugConsoleContextValue.Provider>
    </_DebugConsoleContextSetter.Provider>
  );
};
