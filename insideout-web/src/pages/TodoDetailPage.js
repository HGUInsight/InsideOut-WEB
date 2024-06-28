import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toDoListData from "../dummyData/dummy_todo";
import ConfirmationModal from "../components/Modal/ConfirmationModal";
import "../css/PersonalPage.css"; // Use PersonalPage.css for styling

function TodoDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const todo = toDoListData.find((item) => item.id === parseInt(id, 10));
  const [showModal, setShowModal] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [todoForm, setTodoForm] = useState({
    content: "",
    keywordName: "",
    users: [],
  });

  useEffect(() => {
    if (todo) {
      setTodoForm(todo);
    }
  }, [todo]);

  if (!todo) {
    return <div>Todo item not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "users") {
      setTodoForm((prevForm) => ({ ...prevForm, users: value.split(",") }));
    } else {
      setTodoForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleEdit = () => {
    setEditingTodoId(todo.id);
  };

  const handleCancel = () => {
    setEditingTodoId(null);
    setTodoForm(todo);
  };

  const handleSave = () => {
    const index = toDoListData.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      toDoListData[index] = { ...todoForm, id: editingTodoId };
    }
    setEditingTodoId(null);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    const index = toDoListData.findIndex((item) => item.id === todo.id);
    if (index !== -1) {
      toDoListData.splice(index, 1);
    }
    setShowModal(false);
    navigate(-1); // Navigate to the previous page after deletion
  };

  return (
    <>
      <div className="container-fluid personal-page">
        <div className="tab-content card">
          <div className="card-header">
            <h5 className="font-weight-bold text-primary">Todo Detail</h5>
          </div>
          <div className="card-body">
            {editingTodoId === todo.id ? (
              <div className="todo-edit-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="content"
                    name="content"
                    value={todoForm.content}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Content"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="keywordName"
                    name="keywordName"
                    value={todoForm.keywordName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Keyword Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="users"
                    name="users"
                    value={todoForm.users.join(", ")}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Users (comma-separated)"
                  />
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="btn-save btn btn-primary"
                  >
                    완료
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn-cancel btn btn-secondary"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div className="todo-info">
                <h2>{todo.content}</h2>
                <p>
                  <strong>Keyword Name:</strong> {todo.keywordName}
                </p>
                <p>
                  <strong>Users:</strong> {todo.users.join(", ")}
                </p>
                <div className="button-group">
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="btn btn-primary"
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn btn-danger"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-secondary"
          onClick={handleGoBack}
          type="button"
        >
          뒤로가기
        </button>
      </div>
      <ConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmDelete}
        message="투두 아이템을 삭제하시겠습니까?"
      />
    </>
  );
}

export default TodoDetailPage;
