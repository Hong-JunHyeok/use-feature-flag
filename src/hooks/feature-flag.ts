import { useContext, useState } from "react";
import {
  _FeatureFlagContextSetter,
  _FeatureFlagContextValue,
} from "../contexts";

export const useAllFeatureFlag = () => {
  const value = useContext(_FeatureFlagContextValue);

  if (!value) {
    throw new Error(
      "useAllFeatureFlag must be used within a FeatureFlagProvider. Make sure your component is wrapped in <FeatureFlagProvider>."
    );
  }

  return value;
};

export const useFeatureFlag = (key: string): boolean => {
  const flags = useAllFeatureFlag();
  const findFlag = flags.find((flag) => flag?.key === key);

  return findFlag?.active ?? false;
};

export const useSetFeatureFlag = () => {
  const setter = useContext(_FeatureFlagContextSetter);

  if (!setter) {
    throw new Error(
      "useSetFeatureFlag must be used within a FeatureFlagProvider. Make sure your component is wrapped in <FeatureFlagProvider>."
    );
  }

  const setFeatureFlag = (key: string, active: boolean) => {
    setter((prev) =>
      prev.map((flag) => (flag?.key === key ? { ...flag, active } : flag))
    );
  };

  return setFeatureFlag;
};

export const useSetAllFeatureFlag = () => {
  const [state, setState] = useState(false);
  const allFeatureFlag = useAllFeatureFlag();
  const setFeatureFlag = useSetFeatureFlag();

  const setAllFeatureFlag = () => {
    allFeatureFlag.forEach((flag) => setFeatureFlag(flag.key, state));
    setState((prev) => !prev);
  };

  return setAllFeatureFlag;
};
