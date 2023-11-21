import React, { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};
export default function index() {
  const [items, setItems] = useState([getLocalStorage()]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItem = (itemId) => {
    const newItemArr = items.filter((item) => item.id != itemId);
    setItems(newItemArr);
    setLocalStorage(newItemArr);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}
