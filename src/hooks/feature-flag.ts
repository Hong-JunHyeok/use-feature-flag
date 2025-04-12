import { useContext } from "react";
import {
  _FeatureFlagContextSetter,
  _FeatureFlagContextValue,
} from "../contexts";
import { useToggleState } from "./common";

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
  const [state, toggle] = useToggleState(false);
  const allFeatureFlag = useAllFeatureFlag();
  const setFeatureFlag = useSetFeatureFlag();

  const setAllFeatureFlag = () => {
    allFeatureFlag.forEach((flag) => setFeatureFlag(flag.key, state));
    toggle();
  };

  return setAllFeatureFlag;
};
