import * as React from "react";

interface ItemTypes {
  data: {
    name: string;
    age: number;
  };
}

const Item: React.FC<ItemTypes> = ({ data }) => {
  return (
    <div className="item-wrapper">
      <p className="user-name" data-testid="test-item-name">
        Name: {data.name}
      </p>
      <p className="user-age" data-testid="test-item-age">
        Age: {data.age}
      </p>
    </div>
  );
};

export default Item;
