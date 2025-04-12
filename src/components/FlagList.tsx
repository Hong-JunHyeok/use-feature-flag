import { useAllFeatureFlag, useSetFeatureFlag } from "../hooks";

export const FlagList = () => {
  const flags = useAllFeatureFlag();
  const setFeatureFlag = useSetFeatureFlag();

  return (
    <ul className="space-y-3">
      {flags.map((flag) => (
        <li
          key={flag.key}
          className="flex justify-between items-center bg-white/5 hover:bg-white/10 px-3 py-2 rounded transition"
        >
          <div>
            <span className="truncate font-bold">
              {flag?.name || flag?.key}
            </span>
            <p className="font-thin text-[12px]">{flag.description}</p>
          </div>

          <button
            onClick={() => setFeatureFlag(flag.key, !flag?.active)}
            className={`px-2 py-1 text-xs rounded font-medium transition-colors duration-200 ${
              flag?.active
                ? "bg-[#0E14EA] text-white hover:bg-[#060BAF]"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {flag?.active ? "On" : "Off"}
          </button>
        </li>
      ))}
    </ul>
  );
};
