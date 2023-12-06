import React, { useState } from "react";
import Search from "./Search";
import List from "./List";
import "./index.css";
import AddUser from "./AddUser";
export default function index() {
  const list = [
    {
      id: 1,
      name: "Test",
    },
    {
      id: 2,
      name: "Farmer",
    },
    {
      id: 3,
      name: "Dress",
    },
    {
      id: 4,
      name: "School",
    },
    {
      id: 5,
      name: "Computer",
    },
    {
      id: 6,
      name: "Car",
    },
  ];
  const [searchItem, setSearchItem] = useState("");
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };
  const filterItem = list.filter((item) => {
    return item.name.toLowerCase().includes(searchItem);
  });
  return (
    <section className="outerForm">
      <Search searchItem={searchItem} handleSearch={handleSearch} />
      <List list={filterItem} />
      <AddUser list={list} />
    </section>
  );
}
