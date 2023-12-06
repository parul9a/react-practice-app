import React, { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
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
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
export default function index() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
  };
  const removeItem = (itemId) => {
    const newItemArr = items.filter((item) => item.id !== itemId);
    setItems(newItemArr);
    setLocalStorage(newItemArr);
    toast.success("Item deleted");
  };
  const editItem = (itemId) => {
    const newItemArr = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItemArr);
    setLocalStorage(newItemArr);
  };
  return (
    <section className="section-center grocery-bud-outer">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

/*
Steps
1. Create a state variable that contains items using useState hook
2. Create Form Component that contain input and button field with handle submit function that prevent default form submission through
preventDefault function. 
3. Add Item: When a form is submitted with a value then create a new Item object that includes a name(taken from input), id 
(generated using nano library) and completed property(default value false).
4. Single Item: set up the state variable isChecked with default value of item completed property. Render checkbox and inline property.
setup functionality to toggle the isChecked state variable.
5. Remove Item: 
6. Local Storage: Set up local storage functionality to persist the list of items across page reload. Local storage is a built object in 
web browser that allows application to store the key-value pair locally within user browser.
To store, use setItem(key, value) method where key is unique identifier for the data being stored and value is data to be stored.
localStorage.setItem('name','Parul');
To retrieve data, use localStorage.getItem('name');
7. Global Edit: We are not able to save the checkbox items. So we need to do that by globally making a function edit items
*/
