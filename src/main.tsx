import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeatureFlagProvider } from "./contexts/index.tsx";
import App from "./App.tsx";
import "./index.css";
import { FlagValue } from "./types/index.ts";

const flags: FlagValue[] = [
  {
    name: "유저 목록 조회",
    key: "SHOW_USER_LIST",
    active: false,
    description:
      "홈 섹션에서 유저 목록을 조회하기 위해서 사용되는 플래그 값입니다.",
  },
  {
    name: "배너 노출",
    key: "SHOW_BANNER",
    active: true,
    description: "홈 화면에서 배너가 노출되기 위한 플래그 값입니다.",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeatureFlagProvider values={flags} useDebugMode>
      <App />
    </FeatureFlagProvider>
  </StrictMode>
);
