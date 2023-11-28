import React from "react";

export default function List({ list }) {
  console.log(list);
  return (
    <>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
