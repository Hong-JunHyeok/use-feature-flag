import { createContext, useState } from "react";
import type { FeatureFlagProviderProps, FlagValue } from "../types";
import DebugConsole from "../components/DebugConsole";
import { usePreventNestedContext } from "../hooks/common";
import { DebugConsoleProvider } from "./DebugConsoleContext";

export const _FeatureFlagContextValue = createContext<FlagValue[]>([]);
export const _FeatureFlagContextSetter = createContext<
  React.Dispatch<React.SetStateAction<FlagValue[]>> | undefined
>(undefined);

_FeatureFlagContextValue.displayName = "_FeatureFlagContextValue";
_FeatureFlagContextSetter.displayName = "_FeatureFlagContextSetter";

export const FeatureFlagProvider = ({
  values,
  children,
  useDebugMode = true,
}: FeatureFlagProviderProps) => {
  const [state, setter] = useState<FlagValue[]>(values);

  usePreventNestedContext(_FeatureFlagContextValue);
  usePreventNestedContext(_FeatureFlagContextSetter);

  return (
    <_FeatureFlagContextSetter.Provider value={setter}>
      <_FeatureFlagContextValue.Provider value={state}>
        {children}
        {useDebugMode && (
          <DebugConsoleProvider>
            <DebugConsole />
          </DebugConsoleProvider>
        )}
      </_FeatureFlagContextValue.Provider>
    </_FeatureFlagContextSetter.Provider>
  );
};
