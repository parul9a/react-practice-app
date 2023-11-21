import React, { useState } from "react";

export default function FetchObj() {
  const [person, setPerson] = useState({
    name: "John",
    age: "28",
    hobby: "Singing",
  });
  const showSecondData = () => {
    setPerson({
      name: "Peter",
      age: "30",
      hobby: "Dancing",
    });
  };
  return (
    <div>
      <h1>Use State Object</h1>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button onClick={showSecondData}>Show Second Data</button>
    </div>
  );
}
