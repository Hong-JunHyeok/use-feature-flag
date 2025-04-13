import React, { useEffect, useState } from "react";
import { useFeatureFlag } from "../hooks";

interface FlaggingProps {
  flagKey: string;
  newComponent?: React.ReactNode;
  oldComponent?: React.ReactNode;
}

const IGNORE_TAGS = ["INPUT", "TEXTAREA"] as string[];

function Flagging({ flagKey, newComponent, oldComponent }: FlaggingProps) {
  const showFeatureFlag = useFeatureFlag(flagKey);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (event.key === "/" && !IGNORE_TAGS.includes(target.tagName)) {
        setShowBorder((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const content = showFeatureFlag ? newComponent : oldComponent;

  if (showFeatureFlag && showBorder) {
    return (
      <div className="relative z-50">
        <div className="absolute -top-6 left-1/2 w-fit -translate-x-1/2 transform rounded-lg bg-red-600/70 px-1 py-1 text-white shadow-lg text-[8px]">
          <span className="font-bold">{flagKey}</span>
        </div>

        <div className="rounded-md shadow-md outline-2 outline-offset-1 outline-red-500/70">
          {content}
        </div>
      </div>
    );
  }

  return content;
}

export default Flagging;
