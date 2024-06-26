import React, { useState } from "react";
import TodolistGrape from "../components/Grape/TodolistGrape";
import toDoListData from "../dummyData/dummy_todo"; // Import to-do list data
import "../css/TodolistPage.css";

function TodolistPage() {
  const [data, setData] = useState(toDoListData);
  const [filterText, setFilterText] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="tdp-container">
      <h1 className="tdp-mt-4">TodolistPage</h1>
      <div className="tdp-card-body">
        <div className="tdp-table-responsive">
          <TodolistGrape
            data={data}
            handleDelete={handleDelete}
            filterText={filterText}
            setFilterText={setFilterText}
          />
        </div>
      </div>
    </div>
  );
}

export default TodolistPage;
