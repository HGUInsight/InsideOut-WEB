import React, { useState } from "react";
import DormGrape from "../components/Grape/DormGrape"; // Import DormGrape
import userData from "../dummyData/users"; // Import user data
import AddRecordModal from "../components/AddRecordModal";
import "../css/custom.css"; // custom CSS 파일 import

function DormPage() {
  const [data, setData] = useState(userData);
  const [filterText, setFilterText] = useState("");
  const [selectedDorms, setSelectedDorms] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [newRecord, setNewRecord] = useState({
    id: "",
    name: "",
    birthDate: "",
    age: "",
    gender: "",
    admissionDate: "",
    dorm: "",
    mentalScore: "",
  });
  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.userId !== id));
  };

  const handleAddRecord = () => {
    setData([...data, newRecord]);
    setNewRecord({
      id: "",
      name: "",
      birthDate: "",
      age: "",
      gender: "",
      admissionDate: "",
      dorm: "",
      mentalScore: "",
    });
    // eslint-disable-next-line no-use-before-define
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearDorm = (dorm) => {
    setSelectedDorms(
      selectedDorms.filter((selectedDorm) => selectedDorm !== dorm),
    );
  };

  const clearGender = () => setSelectedGender("");

  const filteredItems = data.filter(
    (item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (selectedDorms.length === 0 || selectedDorms.includes(item.dorm)) &&
      (selectedGender === "" || item.gender === selectedGender),
  );

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 text-gray-800">전체 생활관 인원</h1>
      </div>
      <p className="mb-4">전체 생활관의 데이터를 보여주는 페이지입니다.</p>
      <DormGrape
        data={filteredItems}
        handleDelete={handleDelete}
        filterText={filterText}
        setFilterText={setFilterText}
        selectedDorms={selectedDorms}
        setSelectedDorms={setSelectedDorms}
        setSelectedGender={setSelectedGender}
        clearDorm={clearDorm}
        clearGender={clearGender}
        selectedGender={selectedGender}
        handleShow={handleShow}
      />
      <AddRecordModal
        show={show}
        handleClose={handleClose}
        handleAdd={handleAddRecord}
        newRecord={newRecord}
        setNewRecord={setNewRecord}
      />
    </div>
  );
}

export default DormPage;
