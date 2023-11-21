import React from "react";
import SingleItem from "./SingleItem";
export default function Items({ items, removeItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
}
