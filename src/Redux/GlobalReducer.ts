import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mainMiddleware } from "./Middleware";
import { UserSlice } from "./Reducers";
import { moviesSlice } from "./Reducers";

export const GlobalReducer = combineReducers({
  users: UserSlice.reducer,
  movies: moviesSlice.reducer,
});

export const store = configureStore({
  reducer: GlobalReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    mainMiddleware,
  ],
});

export type GlobalState = ReturnType<typeof GlobalReducer>;
