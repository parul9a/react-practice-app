import React, { useState } from "react";
import useToggle from "./UseToggle";
export default function () {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h3>Custom Toggle Hook</h3>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <p>Some Stuff</p>}
    </div>
  );
}
