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
