import * as React from "react";
const posterBase = "https://image.tmdb.org/t/p/original";

const ResultItem: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="result-item-wrapper">
      <span className="item_title" data-testid="test_itemTitle">
        {data.title}
      </span>
      <img
        src={posterBase + data.poster_path}
        alt={data.title}
        className="item_image"
      />
    </div>
  );
};

export default ResultItem;
