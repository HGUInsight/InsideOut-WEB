import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Badge } from "react-bootstrap";
import Grape from "../components/Grape";
import dummyData from "../data/dummyData";
import AddRecordModal from "../components/AddRecordModal";
import DataTableFilter from "../components/DataTableFilter";
import FilterMenu from "../components/FilterMenu";
import "../css/custom.css"; // custom CSS 파일 import

const columns = (handleDelete) => [
  { name: "ID", selector: (row) => row.id, sortable: true },
  { name: "이름", selector: (row) => row.name, sortable: true },
  { name: "생일", selector: (row) => row.birthDate, sortable: true },
  { name: "나이(만)", selector: (row) => row.age, sortable: true },
  { name: "성별", selector: (row) => row.gender, sortable: true },
  { name: "입소일", selector: (row) => row.admissionDate, sortable: true },
  { name: "생활관", selector: (row) => row.dorm, sortable: true },
  { name: "건강보험", selector: (row) => row.healthInsurance, sortable: true },
  { name: "장애여부", selector: (row) => row.disability, sortable: true },
  { name: "멘탈지수", selector: (row) => row.mentalScore, sortable: true },
  {
    name: "Actions",
    cell: (row) => (
      <button
        onClick={() => handleDelete(row.id)}
        className="btn btn-danger btn-sm"
        type="button"
      >
        삭제
      </button>
    ),
  },
];

function DormPage() {
  const [data, setData] = useState(dummyData);
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
    healthInsurance: "",
    disability: "",
    mentalScore: "",
  });
  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
      healthInsurance: "",
      disability: "",
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
        <Button variant="primary" onClick={handleShow}>
          + 추가
        </Button>
      </div>
      <p className="mb-4">전체 생활관의 데이터를 보여주는 페이지입니다.</p>
      <div className="mb-4 d-flex align-items-center">
        <DataTableFilter
          filterText={filterText}
          onFilter={(e) => setFilterText(e.target.value)}
        />
        <FilterMenu
          selectedDorms={selectedDorms}
          setSelectedDorms={setSelectedDorms}
          setSelectedGender={setSelectedGender}
        />
      </div>
      <div className="mb-4">
        {selectedDorms.map((dorm) => (
          <Badge key={dorm} bg="primary" className="mr-2 text-white">
            {dorm}{" "}
            <span
              role="button"
              tabIndex="0"
              onClick={() => clearDorm(dorm)}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  clearDorm(dorm);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
          </Badge>
        ))}
        {selectedGender && (
          <Badge bg="primary" className="mr-2 text-white">
            {selectedGender}{" "}
            <span
              role="button"
              tabIndex="0"
              onClick={clearGender}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  clearGender();
                }
              }}
              style={{ cursor: "pointer" }}
            >
              &times;
            </span>
          </Badge>
        )}
      </div>
      <Grape title="전체 생활관 Data">
        <DataTable
          columns={columns(handleDelete)}
          data={filteredItems}
          pagination
          persistTableHead
        />
      </Grape>
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
