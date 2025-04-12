import { createKey } from "../utils";

export const STORAGE_KEYS = {
  PROVIDER: createKey("PROVIDER"),
  DEBUG_CONSOLE: createKey("DEBUG_CONSOLE"),
} as const;
