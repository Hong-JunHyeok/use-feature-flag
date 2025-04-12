import { useSetAllFeatureFlag } from "../hooks";

export const ToggleAllButton = () => {
  const setAllFeatureFlag = useSetAllFeatureFlag();

  return (
    <button
      onClick={setAllFeatureFlag}
      className="px-2 py-1 text-xs rounded font-medium transition-colors duration-200 bg-[#0E14EA] text-white hover:bg-[#060BAF]"
    >
      Toggle All
    </button>
  );
};
