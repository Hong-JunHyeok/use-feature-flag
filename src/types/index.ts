export type FlagValue = {
  key: string;
  active: boolean;
  name?: string;
  description?: string;
};

export type FeatureFlagProviderProps = {
  children: React.ReactNode;
  values: FlagValue[];
  useDebugMode?: boolean;
};

export type DebugConsoleContextValue = {
  open: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;
