import React, { useRef } from "react";
import "./UseRefExample.css";
export default function UseRefExample() {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log("name: " + name);
  };
  return (
    <form onSubmit={handleSubmit} className="useRefForm">
      <label>Name</label>
      <input type="text" ref={refContainer} />
      <button className="btn form_useRef">Submit</button>
    </form>
  );
}
