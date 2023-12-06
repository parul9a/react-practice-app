import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName === "") {
      toast.error("Please provide the value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
    console.log("newItemName: ", newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn addItem" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}
