export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "number") {
    return value === 0;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};

export const createKey = (key: string) => {
  return `$$USE_FEATURE_FLAG_${key}$$`;
};
