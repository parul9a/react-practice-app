import React, { useState } from "react";

export default function SingleItem({ id, item, removeItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
}
