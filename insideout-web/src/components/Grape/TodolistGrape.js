import React, { useState } from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { Button, Dropdown, DropdownButton, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/DormGrape.css"; // Import the custom CSS

function ActionButton({ id, handleDelete }) {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="btn btn-danger btn-sm btn-sm-custom"
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
    cellClass: "data-table-cell",
  },
  {
    name: "Content",
    selector: (row) => row.content,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "Keyword Name",
    selector: (row) => row.keywordName,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "Users",
    selector: (row) => row.users.join(", "), // Array to comma-separated string
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "Actions",
    cell: (row) => <ActionButton id={row.id} handleDelete={handleDelete} />,
    cellClass: "data-table-cell",
  },
];

function TodolistGrape({
  data,
  handleDelete,
  filterText,
  setFilterText,
  handleShow,
}) {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleRowClick = (row) => {
    navigate(`/todo/${row.id}`);
  };

  const columns = React.useMemo(() => getColumns(handleDelete), [handleDelete]);

  const keywords = ["긍정적사고", "공동체", "자기계발", "운동", "건강관리"];

  const toggleKeywordSelection = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(
        selectedKeywords.filter(
          (selectedKeyword) => selectedKeyword !== keyword,
        ),
      );
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const filteredData = data
    .filter((item) =>
      item.content.toLowerCase().includes(filterText.toLowerCase()),
    )
    .filter(
      (item) =>
        selectedKeywords.length === 0 ||
        selectedKeywords.includes(item.keywordName),
    );

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold", // 글씨 볼드 처리
        justifyContent: "center", // 중앙 정렬
      },
    },
    cells: {
      style: {
        justifyContent: "center", // 중앙 정렬
      },
    },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "rgba(78, 115, 223, 0.1)", // Hover 스타일
          cursor: "pointer",
        },
      },
    },
  };

  return (
    <div className="grape-container">
      {/* Header */}
      <div className="grape-header">
        <div className="header-row">
          <h3 className="grape-title">Todolist Data</h3>
          <div className="filter-container">
            <input
              type="text"
              placeholder="투두리스트를 검색하세요..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="form-control"
            />
            <DropdownButton
              id="dropdown-basic-button"
              title=""
              className="ml-2 small-dropdown-button"
            >
              {keywords.map((keyword) => (
                <Dropdown.Item
                  key={keyword}
                  onClick={() => toggleKeywordSelection(keyword)}
                >
                  {selectedKeywords.includes(keyword) ? "✓ " : ""}
                  {keyword}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <Button
              variant="primary"
              onClick={handleShow}
              className="ml-2 small-button"
            >
              +
            </Button>
          </div>
        </div>
        <div className="badge-container">
          {selectedKeywords.map((keyword) => (
            <Badge
              key={keyword}
              bg="primary"
              className="mr-2 text-white custom-badge"
            >
              {keyword}{" "}
              <span
                role="button"
                tabIndex="0"
                onClick={() => toggleKeywordSelection(keyword)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleKeywordSelection(keyword);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
            </Badge>
          ))}
        </div>
      </div>
      {/* Body */}
      <div className="grape-content">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          persistTableHead
          onRowClicked={handleRowClick}
          customStyles={customStyles}
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
      users: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default TodolistGrape;
