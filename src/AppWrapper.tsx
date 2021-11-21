import * as React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/GlobalReducer";

export const AppWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
