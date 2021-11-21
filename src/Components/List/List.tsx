import * as React from "react";
import { GlobalState } from "../../Redux/GlobalReducer";
import { useSelector } from "react-redux";
import Item from "./Item/Item";
import "./List.scss";

const List: React.FC = () => {
  const users = useSelector((state: GlobalState) => state.users.value);
  return (
    <div className="list-wrapper" data-testid="test-list">
      {users?.map((user, i) => (
        <Item data={user} key={"usr" + i} />
      ))}
    </div>
  );
};

export default List;
