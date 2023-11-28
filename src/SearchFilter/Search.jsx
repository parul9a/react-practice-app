import React from "react";

export default function Search({ searchItem, handleSearch }) {
  return (
    <div>
      Search
      <input type="text" value={searchItem} onChange={handleSearch} />
    </div>
  );
}
