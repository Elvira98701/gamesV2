import { Middleware } from "@reduxjs/toolkit";

interface LocalStorageMiddlewareOptions {
  key: string;
  slice: string;
}

export const createLocalStorageMiddleware =
  ({ key, slice }: LocalStorageMiddlewareOptions): Middleware =>
  (store) =>
  (next) =>
  (action) => {
    const result = next(action);

    if (
      typeof action === "object" &&
      action !== null &&
      "type" in action &&
      typeof action.type === "string"
    ) {
      if (action.type.startsWith(`${slice}/`)) {
        const state = store.getState();
        const sliceState = state[slice];
        if (sliceState !== undefined) {
          localStorage.setItem(key, JSON.stringify(sliceState));
        }
      }
    }

    return result;
  };
