import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeatureFlagProvider } from "./contexts/index.tsx";
import App from "./App.tsx";
import "./index.css";
import { FlagValue } from "./types/index.ts";

const flags: FlagValue[] = [
  {
    name: "목표 수립 승인 현황 피쳐",
    key: "SHOW_ESTABLISH_GOAL",
    active: true,
    description: "목표 수립 승인 현황 피쳐에 대한 플래그 값입니다.",
  },
  {
    name: "다국어 피쳐",
    key: "SHOW_TRANSLATIONS",
    active: true,
    description: "다국어 설정에 대한 플래그 값입니다.",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeatureFlagProvider values={flags} useDebugMode>
      <App />
    </FeatureFlagProvider>
  </StrictMode>
);
