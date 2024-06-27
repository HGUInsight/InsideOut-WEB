import React, { useState } from "react";
import TodolistGrape from "../components/Grape/TodolistGrape";
import toDoListData from "../dummyData/dummy_todo"; // Import to-do list data
import "../css/DormGrape.css"; // Use DormGrape.css for styling

function TodolistPage() {
  const [data, setData] = useState(toDoListData);
  const [filterText, setFilterText] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-gray-800">투두리스트 페이지</h1>
      </div>
      <p className="mb-4">전체 투두리스트를 보여주는 페이지 입니다.</p>
      <TodolistGrape
        data={data}
        handleDelete={handleDelete}
        filterText={filterText}
        setFilterText={setFilterText}
      />
    </div>
  );
}

export default TodolistPage;
