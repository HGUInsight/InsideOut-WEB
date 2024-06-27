import React, { useState } from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { Badge, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/DormGrape.css"; // Import the custom CSS

// Define the ActionButton component outside of DormGrape
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

// Define the columns outside of DormGrape
const getColumns = (handleDelete) => [
  {
    name: "ID",
    selector: (row) => row.userId,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "이름",
    selector: (row) => row.name,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "생일",
    selector: (row) => row.birthDate,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "나이(만)",
    selector: (row) => row.age,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "성별",
    selector: (row) => row.gender,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "입소일",
    selector: (row) => row.admissionDate,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "생활관",
    selector: (row) => row.dorm,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "멘탈지수",
    selector: (row) => row.mentalScore,
    sortable: true,
    cellClass: "data-table-cell",
  },
  {
    name: "Actions",
    cell: (row) => <ActionButton id={row.userId} handleDelete={handleDelete} />,
    cellClass: "data-table-cell",
  },
];

function DormGrape({
  data,
  handleDelete,
  filterText,
  setFilterText,
  handleShow,
}) {
  const navigate = useNavigate();
  const [selectedDorms, setSelectedDorms] = useState([]);

  const handleRowClick = (row) => {
    navigate(`/personal/${row.userId}`);
  };

  const columns = React.useMemo(() => getColumns(handleDelete), [handleDelete]);

  const dormOptions = ["생활관1", "생활관2", "생활관3", "생활관4"];

  const toggleDormSelection = (dorm) => {
    if (selectedDorms.includes(dorm)) {
      setSelectedDorms(
        selectedDorms.filter((selectedDorm) => selectedDorm !== dorm),
      );
    } else {
      setSelectedDorms([...selectedDorms, dorm]);
    }
  };

  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase()),
    )
    .filter(
      (item) => selectedDorms.length === 0 || selectedDorms.includes(item.dorm),
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
          <h3 className="grape-title">생활관 데이터</h3>
          <div className="filter-container">
            <input
              type="text"
              placeholder="이름을 검색하세요..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="form-control"
            />
            <DropdownButton
              id="dropdown-basic-button"
              title=""
              className="ml-2 small-dropdown-button"
            >
              {dormOptions.map((dorm) => (
                <Dropdown.Item
                  key={dorm}
                  onClick={() => toggleDormSelection(dorm)}
                >
                  {selectedDorms.includes(dorm) ? "✓ " : ""}
                  {dorm}
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
          {selectedDorms.map((dorm) => (
            <Badge
              key={dorm}
              bg="primary"
              className="mr-2 text-white custom-badge"
            >
              {dorm}{" "}
              <span
                role="button"
                tabIndex="0"
                onClick={() => toggleDormSelection(dorm)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleDormSelection(dorm);
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

DormGrape.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      admissionDate: PropTypes.string.isRequired,
      dorm: PropTypes.string.isRequired,
      mentalScore: PropTypes.number.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default DormGrape;
