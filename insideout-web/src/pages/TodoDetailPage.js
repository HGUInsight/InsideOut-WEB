import React from "react";
import { useParams } from "react-router-dom";
import toDoListData from "../dummyData/dummy_todo";

function TodoDetailPage() {
  const { id } = useParams();
  const todo = toDoListData.find((item) => item.id === parseInt(id, 10));

  if (!todo) {
    return <div>Todo item not found</div>;
  }

  return (
    <div className="td-detail-container">
      <h1>Todo Detail Page</h1>
      <div className="td-detail-card">
        <div className="td-detail-card-body">
          <h2>{todo.content}</h2>
          <p>
            <strong>Keyword Name:</strong> {todo.keywordName}
          </p>
          <p>
            <strong>User:</strong> {todo.user}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodoDetailPage;
