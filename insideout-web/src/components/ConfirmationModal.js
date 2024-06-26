// src/components/ConfirmationModal.js
import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

function ConfirmationModal({ show, onHide, onConfirm, message }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          아니오
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          예
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  message: "정말로 이 작업을 수행하시겠습니까?",
};

export default ConfirmationModal;
