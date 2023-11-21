import React, { useState } from "react";
import Title from "./Title";
import { menu } from "./data.js";
import MenuItem from "./MenuItem";
import Categories from "./Categories";
const allcategories = ["all", ...new Set(menu.map((item) => item.category))];

export default function index() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allcategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section className="menu">
      <Title text="Our Menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <div className="section-center">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
