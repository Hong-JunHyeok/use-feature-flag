import { useToggleState } from "../hooks";
import DebugButton from "./DebugButton";
import { FlagList } from "./FlagList";
import { ToggleAllButton } from "./ToggleAllButton";

const DebugConsole = () => {
  const [open, toggle] = useToggleState(false);

  return (
    <div className="relative">
      <DebugButton onToggle={toggle} />
      {open && (
        <div className="fixed bottom-20 right-4 bg-black/60 backdrop-blur-sm p-4 shadow-xl rounded-xl z-[10000] w-1/2 border border-gray-600 text-white translate ease-in-out">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold uppercase tracking-wide text-sm">
              Feature Flagging Debug Console
            </span>

            <div className="flex gap-2">
              <ToggleAllButton />
            </div>
          </div>
          <FlagList />
        </div>
      )}
    </div>
  );
};

export default DebugConsole;
