import React from "react";
import SingleItem from "./SingleItem";
export default function Items({ items, removeItem, editItem }) {
  return (
    <div className="items groceryItems">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}
