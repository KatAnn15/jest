import { store } from "./GlobalReducer";

export const mainMiddleware = (storeApi) => (next) => (action) => {
  const promise = new Promise((resolve) => {
    resolve(next(action));
  });
  promise.then(() => {
    const state = store.getState();
    console.log(state);
  });
};
