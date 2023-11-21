import React, { useState, useEffect } from "react";
import dataProject from "./dataProject";
import List from "./List";
export default function index() {
  const [people, setPeople] = useState(dataProject);
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <section className="container">
      <h2>{people.length} Birthdays Today</h2>
      <List people={people} />
      <button type="button" className="btn btn-block" onClick={clearAll}>
        Clear All
      </button>
    </section>
  );
}
