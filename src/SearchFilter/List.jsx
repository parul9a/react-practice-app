import React from "react";

export default function List({ list }) {
  return (
    <div className="listSection">
      <h4>List of Items</h4>
      <ul className="listItems">
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
