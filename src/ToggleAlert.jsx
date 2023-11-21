import React, { useState } from "react";

export default function ToggleAlert() {
  const [toggle, setToggle] = useState(false);
  const clickToggle = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <div>
      <button className="btn" onClick={clickToggle}>
        Toggle
      </button>
      {toggle ? <h2>I am clicked</h2> : ""}
    </div>
  );
}
