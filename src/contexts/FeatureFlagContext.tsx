import { createContext, useState } from "react";
import type { FeatureFlagProviderProps, FlagValue } from "../types";
import DebugConsole from "../components/DebugConsole";

export const _FeatureFlagContextValue = createContext<FlagValue[]>([]);
export const _FeatureFlagContextSetter = createContext<
  React.Dispatch<React.SetStateAction<FlagValue[]>> | undefined
>(undefined);

export const FeatureFlagProvider = ({
  values,
  children,
  useDebugMode = true,
}: FeatureFlagProviderProps) => {
  const [state, setter] = useState(values);

  return (
    <_FeatureFlagContextSetter.Provider value={setter}>
      <_FeatureFlagContextValue.Provider value={state}>
        {children}
        {useDebugMode && <DebugConsole />}
      </_FeatureFlagContextValue.Provider>
    </_FeatureFlagContextSetter.Provider>
  );
};
