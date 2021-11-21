import React, { ReactElement } from "react";
import { render, RenderOptions, screen, cleanup } from "@testing-library/react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { moviesSlice, UserSlice } from "./Redux/Reducers";
import { Provider } from "react-redux";

afterEach(cleanup);

export const GlobalReducer = combineReducers({
  users: UserSlice.reducer,
  movies: moviesSlice.reducer,
});

export const store = configureStore({
  reducer: GlobalReducer,
});

const RenderWrapper: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement<any>,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: RenderWrapper, ...options });

export const query = (testID: string, element?: JSX.Element) => {
  if (element) {
    const { queryByTestId } = customRender(element);
    return queryByTestId(testID);
  }
  return screen.getByTestId(testID);
};

export * from "@testing-library/react";
export { customRender as render };
