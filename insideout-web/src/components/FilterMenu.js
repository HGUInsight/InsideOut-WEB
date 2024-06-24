// src/components/FilterMenu.js
import React from "react";
import { Dropdown, InputGroup, FormControl } from "react-bootstrap";
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoFilter } from "react-icons/io5";
import "../css/custom.css"; // Custom CSS 파일 import

function FilterMenu({ setSelectedDorms, setSelectedGender }) {
  const handleDormChange = (e) => {
    const { value } = e.target;
    setSelectedDorms((prevSelectedDorms) =>
      prevSelectedDorms.includes(value)
        ? prevSelectedDorms.filter((dorm) => dorm !== value)
        : [...prevSelectedDorms, value],
    );
  };

  return (
    <Dropdown autoClose="outside" className="ml-2 custom-dropdown">
      <Dropdown.Toggle as="div" id="dropdown-custom" className="no-arrow">
        <IoFilter size={24} color="#4E73DE" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item as="div" className="custom-dropdown-item">
          <InputGroup>
            <FormControl
              as="select"
              onChange={handleDormChange}
              className="custom-form-control"
              multiple
            >
              <option value="생활관1">생활관1</option>
              <option value="생활관2">생활관2</option>
              <option value="생활관3">생활관3</option>
              <option value="생활관4">생활관4</option>
            </FormControl>
          </InputGroup>
        </Dropdown.Item>
        <Dropdown.Item as="div" className="custom-dropdown-item">
          <InputGroup>
            <FormControl
              as="select"
              onChange={(e) => setSelectedGender(e.target.value)}
              className="custom-form-control"
            >
              <option value="">전체 성별</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </FormControl>
          </InputGroup>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterMenu;
