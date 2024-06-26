import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import userData from "../../dummyData/users";
import ConfirmationModal from "../ConfirmationModal";
import "../../css/BasicInfo.css"; // Ensure this is imported

function BasicInfo({ selectedUserId }) {
  const [user, setUser] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    age: "",
    gender: "",
    admissionDate: "",
    dorm: "",
    mentalScore: "",
    healthInsurance: "",
    disability: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const selectedUser = userData.find((u) => u.userId === selectedUserId);
    setUser(selectedUser);
    setUserForm(selectedUser);
  }, [selectedUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleEdit = () => {
    setEditingUserId(selectedUserId);
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setUserForm(user);
  };

  const handleSave = () => {
    setUser(() => ({ ...userForm, userId: editingUserId }));
    setEditingUserId(null);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    // Handle deletion logic here
    setShowModal(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="basic-info-container">
      {editingUserId === user.userId ? (
        <div className="user-edit-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={userForm.name}
              onChange={handleChange}
              className="form-control"
              placeholder="이름"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={userForm.email}
              onChange={handleChange}
              className="form-control"
              placeholder="이메일"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={userForm.birthDate}
              onChange={handleChange}
              className="form-control"
              placeholder="생년월일"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="age"
              name="age"
              value={userForm.age}
              onChange={handleChange}
              className="form-control"
              placeholder="나이"
            />
          </div>
          <div className="form-group">
            <select
              id="gender"
              name="gender"
              value={userForm.gender}
              onChange={handleChange}
              className="form-control"
            >
              <option value="" disabled>
                성별
              </option>
              <option value="남자">남자</option>
              <option value="여자">여자</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={userForm.admissionDate}
              onChange={handleChange}
              className="form-control"
              placeholder="입소일"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="dorm"
              name="dorm"
              value={userForm.dorm}
              onChange={handleChange}
              className="form-control"
              placeholder="생활관"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="mentalScore"
              name="mentalScore"
              value={userForm.mentalScore}
              onChange={handleChange}
              className="form-control"
              placeholder="멘탈지수"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="healthInsurance"
              name="healthInsurance"
              value={userForm.healthInsurance}
              onChange={handleChange}
              className="form-control"
              placeholder="건강보험"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="disability"
              name="disability"
              value={userForm.disability}
              onChange={handleChange}
              className="form-control"
              placeholder="장애 여부"
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={handleSave} className="btn-save">
              완료
            </button>
            <button type="button" onClick={handleCancel} className="btn-cancel">
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="user-info">
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
          <p>생년월일: {user.birthDate}</p>
          <p>나이: {user.age}</p>
          <p>성별: {user.gender}</p>
          <p>입소일: {user.admissionDate}</p>
          <p>생활관: {user.dorm}</p>
          <p>멘탈지수: {user.mentalScore}</p>
          <p>건강보험: {user.healthInsurance}</p>
          <p>장애 여부: {user.disability}</p>
          <div className="button-group">
            <button type="button" onClick={handleEdit} className="btn-edit">
              수정
            </button>
            <button type="button" onClick={handleDelete} className="btn-delete">
              삭제
            </button>
          </div>
        </div>
      )}
      <ConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmDelete}
        message="유저 정보를 삭제하시겠습니까?"
      />
    </div>
  );
}

BasicInfo.propTypes = {
  selectedUserId: PropTypes.number.isRequired,
};

export default BasicInfo;
