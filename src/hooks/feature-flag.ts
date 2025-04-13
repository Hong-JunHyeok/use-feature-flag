import { useState } from "react";
import {
  _FeatureFlagContextSetter,
  _FeatureFlagContextValue,
} from "../contexts";
import { useTypeSafeContext } from "./common";

export const useAllFeatureFlag = () =>
  useTypeSafeContext(_FeatureFlagContextValue);

export const useFeatureFlag = (key: string): boolean => {
  const flags = useAllFeatureFlag();
  const findFlag = flags.find((flag) => flag?.key === key);

  return findFlag?.active ?? false;
};

export const useSetFeatureFlag = () => {
  const setter = useTypeSafeContext(_FeatureFlagContextSetter);

  const setFeatureFlag = (key: string, active: boolean) => {
    setter((prev) =>
      prev.map((flag) => (flag?.key === key ? { ...flag, active } : flag))
    );
  };

  return setFeatureFlag;
};

export const useSetAllFeatureFlag = () => {
  const setter = useTypeSafeContext(_FeatureFlagContextSetter);
  const [state, setState] = useState(false);

  const setAllFeatureFlag = () => {
    setter((prev) => prev.map((flag) => ({ ...flag, active: state })));
    setState((prev) => !prev);
  };

  return setAllFeatureFlag;
};
