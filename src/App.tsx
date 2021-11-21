import * as React from "react";
import Form from "./Components/Form/Form";
import "./App.scss";
import List from "./Components/List/List";
import Search from "./Components/Search/Search";

const App: React.FC = () => {
  return (
    <div className="app">
      <Search />
      <Form />
      <List />
    </div>
  );
};

export default App;
