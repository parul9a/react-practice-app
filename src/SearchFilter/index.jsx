import React, { useState } from "react";
import Search from "./Search";
import List from "./List";

export default function index() {
  const [searchItem, setSearchItem] = useState("");
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };
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
  const filterItem = list.filter((item) => {
    return item.name.toLowerCase().includes(searchItem);
  });

  return (
    <div>
      <Search searchItem={searchItem} handleSearch={handleSearch} />
      <List list={filterItem} />
    </div>
  );
}
