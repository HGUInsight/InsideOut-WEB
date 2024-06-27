// HomeCard.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

function HomeCard({ title, value, icon, details }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setShow(true);
    }
  };

  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div
          className="card border-left-primary shadow h-100 py-2"
          onClick={handleShow}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {value}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${icon} fa-2x text-gray-300`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{details}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  details: PropTypes.node.isRequired,
};

export default HomeCard;
