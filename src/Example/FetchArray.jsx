import React from "react";
import { data } from "../data";
import { useState } from "react";
export default function FetchArray() {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h1>Use Array</h1>
      {people.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear Data</button>
    </>
  );
}
