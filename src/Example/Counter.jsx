import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   const changeCounter = () => {
  //     setTimeout(() => {
  //       console.log("clicked");
  //       setCount(count + 1);
  //     }, 3000);
  //   };
  const changeCounter = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeCounter}>Counter</button>
    </div>
  );
}
