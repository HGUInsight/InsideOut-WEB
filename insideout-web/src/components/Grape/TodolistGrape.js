import React, { useState } from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../css/TodolistPage.css";

function ActionButton({ id, handleDelete }) {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="btn btn-danger btn-sm"
      type="button"
    >
      삭제
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const getColumns = (handleDelete) => [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    cellClass: "tdp-data-table-cell",
  },
  {
    name: "Content",
    selector: (row) => row.content,
    sortable: true,
    cellClass: "tdp-data-table-cell",
  },
  {
    name: "Keyword Name",
    selector: (row) => row.keywordName,
    sortable: true,
    cellClass: "tdp-data-table-cell",
  },
  {
    name: "User",
    selector: (row) => row.user,
    sortable: true,
    cellClass: "tdp-data-table-cell",
  },
  {
    name: "Actions",
    cell: (row) => <ActionButton id={row.id} handleDelete={handleDelete} />,
    cellClass: "tdp-data-table-cell",
  },
];

function TodolistGrape({ data, handleDelete, filterText, setFilterText }) {
  const navigate = useNavigate();
  const [selectedKeyword, setSelectedKeyword] = useState("");

  const handleRowClick = (row) => {
    navigate(`/todo/${row.id}`);
  };

  const columns = React.useMemo(() => getColumns(handleDelete), [handleDelete]);

  const keywords = ["긍정적사고", "공동체", "자기계발", "운동", "건강관리"];

  const filteredData = data
    .filter((item) =>
      item.content.toLowerCase().includes(filterText.toLowerCase()),
    )
    .filter(
      (item) => selectedKeyword === "" || item.keywordName === selectedKeyword,
    );

  return (
    <div className="tdp-container">
      <div className="tdp-header d-flex justify-content-between align-items-center mb-2">
        <h3 className="tdp-title">Todolist Data</h3>
        <div className="d-flex align-items-center">
          <input
            type="text"
            placeholder="Filter by content..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="form-control"
          />
          <DropdownButton
            id="dropdown-basic-button"
            title="Filter by keyword"
            className="ml-2"
          >
            <Dropdown.Item onClick={() => setSelectedKeyword("")}>
              All
            </Dropdown.Item>
            {keywords.map((keyword) => (
              <Dropdown.Item
                key={keyword}
                onClick={() => setSelectedKeyword(keyword)}
              >
                {keyword}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Button variant="link" className="p-0">
            <IoAddCircleOutline size={24} color="#4E73DE" />
          </Button>
        </div>
      </div>
      <div className="tdp-content">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          persistTableHead
          onRowClicked={handleRowClick}
          customStyles={{
            rows: {
              style: {
                "&:hover": {
                  backgroundColor: "rgba(78, 115, 223, 0.1)",
                  cursor: "pointer",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

TodolistGrape.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      keywordName: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};

export default TodolistGrape;
