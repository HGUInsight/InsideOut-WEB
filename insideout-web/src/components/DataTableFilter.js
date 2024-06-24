// src/components/DataTableFilter.js
import React from "react";

function DataTableFilter({ filterText, onFilter }) {
  return (
    <input
      id="search"
      type="text"
      placeholder="이름을 입력하세요.."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      className="form-control"
    />
  );
}

export default DataTableFilter;
