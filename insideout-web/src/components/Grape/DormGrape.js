import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { Badge, Button } from "react-bootstrap";
import { IoAddCircleOutline } from "react-icons/io5"; // Import add icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import DataTableFilter from "../DataTableFilter";
import FilterMenu from "../FilterMenu";
import "../../css/DormGrape.css"; // Import the custom CSS

// Define the ActionButton component outside of DormGrape
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
  selectedDorms,
  setSelectedDorms,
  setSelectedGender,
  clearDorm,
  clearGender,
  selectedGender,
  handleShow,
}) {
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/personal/${row.userId}`);
  };

  const columns = React.useMemo(() => getColumns(handleDelete), [handleDelete]);

  return (
    <div className="grape-container">
      {/* Header */}
      <div className="grape-header d-flex justify-content-between align-items-center mb-2">
        <h3 className="grape-title">전체 생활관 Data</h3>
        <div className="d-flex align-items-center">
          <DataTableFilter
            filterText={filterText}
            onFilter={(e) => setFilterText(e.target.value)}
          />
          <FilterMenu
            selectedDorms={selectedDorms}
            setSelectedDorms={setSelectedDorms}
            setSelectedGender={setSelectedGender}
          />
          <Button variant="link" onClick={handleShow} className="p-0">
            <IoAddCircleOutline size={24} color="#4E73DE" />
          </Button>
        </div>
      </div>
      {/* Body */}
      <div className="mb-2">
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
      <div className="grape-content">
        <DataTable
          columns={columns}
          data={data}
          pagination
          persistTableHead
          onRowClicked={handleRowClick} // Add row click handler
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
  selectedDorms: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedDorms: PropTypes.func.isRequired,
  setSelectedGender: PropTypes.func.isRequired,
  clearDorm: PropTypes.func.isRequired,
  clearGender: PropTypes.func.isRequired,
  selectedGender: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default DormGrape;
